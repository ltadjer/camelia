import React, { useState } from 'react';
import { X, Plus, Trash2 } from 'lucide-react';
import { EmergencyContact } from '../hooks/useEmergencyContacts';

interface EmergencyContactsModalProps {
  isOpen: boolean;
  onClose: () => void;
  contacts: EmergencyContact[];
  onAddContact: (contact: Omit<EmergencyContact, 'id'>) => void;
  onRemoveContact: (id: string) => void;
}

export default function EmergencyContactsModal({
  isOpen,
  onClose,
  contacts,
  onAddContact,
  onRemoveContact
}: EmergencyContactsModalProps) {
  const [newContact, setNewContact] = useState({
    name: '',
    phone: '',
    priority: 1
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddContact(newContact);
    setNewContact({ name: '', phone: '', priority: 1 });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />
        
        <div className="relative glass-card w-full max-w-md p-6">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-500"
          >
            <X className="h-5 w-5" />
          </button>

          <h2 className="text-xl font-semibold text-camelia-text mb-6">
            Contacts d'urgence
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nom
              </label>
              <input
                type="text"
                value={newContact.name}
                onChange={e => setNewContact(prev => ({ ...prev, name: e.target.value }))}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-camelia-primary focus:ring focus:ring-camelia-primary/20"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Téléphone
              </label>
              <input
                type="tel"
                value={newContact.phone}
                onChange={e => setNewContact(prev => ({ ...prev, phone: e.target.value }))}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-camelia-primary focus:ring focus:ring-camelia-primary/20"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Priorité
              </label>
              <select
                value={newContact.priority}
                onChange={e => setNewContact(prev => ({ ...prev, priority: Number(e.target.value) }))}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-camelia-primary focus:ring focus:ring-camelia-primary/20"
              >
                <option value={1}>Haute</option>
                <option value={2}>Moyenne</option>
                <option value={3}>Basse</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center space-x-2 bg-camelia-primary text-white py-2 px-4 rounded-md hover:bg-camelia-secondary transition-colors duration-200"
            >
              <Plus className="h-4 w-4" />
              <span>Ajouter un contact</span>
            </button>
          </form>

          <div className="space-y-3">
            {contacts.map(contact => (
              <div
                key={contact.id}
                className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm"
              >
                <div>
                  <h3 className="font-medium text-camelia-text">{contact.name}</h3>
                  <p className="text-sm text-gray-500">{contact.phone}</p>
                </div>
                <button
                  onClick={() => onRemoveContact(contact.id)}
                  className="text-red-500 hover:text-red-700 p-1"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}