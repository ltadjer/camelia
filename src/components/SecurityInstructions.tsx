import React from 'react';
import { ShieldCheck, X, KeyRound } from 'lucide-react';

interface SecurityInstructionsProps {
  isOpen: boolean;
  onClose: () => void;
  gender: string;
}

export default function SecurityInstructions({ isOpen, onClose, gender }: SecurityInstructionsProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />
        
        <div className="relative glass-card w-full max-w-md p-8">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-500"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500">
            <KeyRound className="h-8 w-8 text-white" />
          </div>

          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-gray-900 text-center">
              Instructions importantes
            </h3>
            
            <div className="mt-6 space-y-4">
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
                <h4 className="font-medium text-purple-800 mb-2">Pour votre sécurité :</h4>
                <p className="text-sm text-purple-700">
                  Appuyez 3 fois sur le mot "maintenance" dans le menu pour déverrouiller les fonctionnalités de sécurité.
                </p>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                <p className="text-sm text-yellow-800">
                  <span className="font-medium">Important :</span> Cette information est strictement confidentielle et ne doit pas être partagée.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h4 className="font-medium text-blue-800 mb-2">Fonctionnalités activées :</h4>
                <ul className="text-sm text-blue-700 space-y-2">
                  <li className="flex items-center">
                    <ShieldCheck className="h-4 w-4 mr-2" />
                    Mode discret automatique
                  </li>
                  <li className="flex items-center">
                    <ShieldCheck className="h-4 w-4 mr-2" />
                    Alerte aux contacts de confiance
                  </li>
                  <li className="flex items-center">
                    <ShieldCheck className="h-4 w-4 mr-2" />
                    Enregistrement des preuves
                  </li>
                </ul>
              </div>
            </div>

            <p className="mt-6 text-xs text-gray-500 text-center">
              Votre sécurité est notre priorité absolue.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}