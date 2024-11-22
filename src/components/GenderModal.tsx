import React from 'react';
import { X } from 'lucide-react';

interface GenderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (gender: string) => void;
}

export default function GenderModal({ isOpen, onClose, onSelect }: GenderModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Backdrop */}
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />

        {/* Modal */}
        <div className="relative glass-card w-full max-w-md p-6 text-center">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-500"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="mt-3">
            <h3 className="text-2xl font-semibold leading-6 text-gray-900 mb-8">
              Bienvenue sur Camelia
            </h3>
            <p className="text-sm text-gray-500 mb-8">
              Pour vous offrir une expérience personnalisée, veuillez sélectionner votre catégorie
            </p>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => onSelect('femme')}
                className="glass-card hover:bg-purple-50 p-6 transition-all duration-200 group"
              >
                <h4 className="text-lg font-medium text-gray-900 group-hover:text-purple-600">
                  Femme
                </h4>
                <p className="mt-2 text-sm text-gray-500">
                  Collection Femme
                </p>
              </button>

              <button
                onClick={() => onSelect('homme')}
                className="glass-card hover:bg-purple-50 p-6 transition-all duration-200 group"
              >
                <h4 className="text-lg font-medium text-gray-900 group-hover:text-purple-600">
                  Homme
                </h4>
                <p className="mt-2 text-sm text-gray-500">
                  Collection Homme
                </p>
              </button>
            </div>

            <p className="mt-6 text-xs text-gray-400">
              Cette sélection nous aide à personnaliser votre expérience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}