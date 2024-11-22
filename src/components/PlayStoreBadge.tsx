import React from 'react';

export default function PlayStoreBadge() {
  return (
    <a
      href="#"
      className="flex items-center px-4 py-3 rounded-xl bg-black/90 backdrop-blur-sm hover:bg-black text-white transition-all duration-300 hover:scale-105 shadow-lg group"
    >
      <svg className="h-8 w-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
      </svg>
      <div className="flex flex-col">
        <span className="text-xs opacity-75 group-hover:opacity-100">Disponible sur</span>
        <span className="text-lg font-semibold -mt-1">Google Play</span>
      </div>
    </a>
  );
}