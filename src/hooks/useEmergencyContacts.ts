import { useState, useEffect } from 'react';

export interface EmergencyContact {
  id: string;
  name: string;
  phone: string;
  priority: number;
}

export function useEmergencyContacts() {
  const [contacts, setContacts] = useState<EmergencyContact[]>(() => {
    const saved = localStorage.getItem('emergencyContacts');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('emergencyContacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact: Omit<EmergencyContact, 'id'>) => {
    setContacts(prev => [...prev, { ...contact, id: crypto.randomUUID() }]);
  };

  const removeContact = (id: string) => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const updateContact = (id: string, updates: Partial<EmergencyContact>) => {
    setContacts(prev => prev.map(contact => 
      contact.id === id ? { ...contact, ...updates } : contact
    ));
  };

  return {
    contacts,
    addContact,
    removeContact,
    updateContact
  };
}