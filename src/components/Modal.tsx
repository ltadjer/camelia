import React, { ReactNode } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Backdrop avec flou */}
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />
        
        {/* Contenu du modal */}
        <div className="relative glass-card w-full max-w-md p-8">
          {/* Bouton fermeture */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-500"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Titre */}
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-6">
            {title}
          </h3>
          
          {/* Contenu */}
          <div className="mt-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}