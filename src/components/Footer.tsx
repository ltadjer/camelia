import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-purple-50/30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Contactez-nous
            </h3>
            <div className="space-y-4">
              <a href="tel:+33123456789" className="flex items-center text-gray-600 hover:text-purple-600 transition-colors group">
                <Phone className="h-5 w-5 mr-3 text-purple-400 group-hover:text-purple-600 transition-colors" />
                <span>01 23 45 67 89</span>
              </a>
              <a href="mailto:contact@camelia.fr" className="flex items-center text-gray-600 hover:text-purple-600 transition-colors group">
                <Mail className="h-5 w-5 mr-3 text-purple-400 group-hover:text-purple-600 transition-colors" />
                <span>contact@camelia.fr</span>
              </a>
              <div className="flex items-start text-gray-600 group">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-purple-400 group-hover:text-purple-600 transition-colors flex-shrink-0" />
                <span>123 Avenue de la Sécurité<br />75001 Paris, France</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Assistance
            </h3>
            <div className="space-y-3 text-gray-600">
              <p className="flex items-center">
                <span className="w-24">Lun - Ven :</span>
                <span className="font-medium">24h/24</span>
              </p>
              <p className="flex items-center">
                <span className="w-24">Sam - Dim :</span>
                <span className="font-medium">24h/24</span>
              </p>
              <p className="mt-4 font-medium text-purple-600">
                Assistance d'urgence disponible 7j/7
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Liens utiles
            </h3>
            <div className="grid gap-3">
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Mentions légales</a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Politique de confidentialité</a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">FAQ</a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Guide d'utilisation</a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-purple-100">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Camelia. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}