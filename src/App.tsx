import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import { useEmergencyContacts } from './hooks/useEmergencyContacts';

export default function App() {
  const { 
    contacts, 
    addContact, 
    removeContact 
  } = useEmergencyContacts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50/50">
      <Navbar />
      <Hero />
      <div id="features">
        <Features />
      </div>
      <Footer />
    </div>
  );
}