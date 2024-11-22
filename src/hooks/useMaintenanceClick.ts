import { useState, useCallback, useEffect } from 'react';
import { EmergencyContact } from './useEmergencyContacts';

const CLICK_THRESHOLD = 3;
const CLICK_TIMEOUT = 2000; // 2 seconds

export function useMaintenanceClick(contacts: EmergencyContact[], gender: string | null) {
  const [clicks, setClicks] = useState(0);
  const [lastClickTime, setLastClickTime] = useState(0);

  const sendEmergencySMS = useCallback(async (contacts: EmergencyContact[]) => {
    if (gender !== 'femme' || contacts.length === 0) return;

    const location = await getCurrentLocation();
    const message = `URGENCE - Besoin d'aide immédiate. Ma position : ${location}`;
    
    // Sort contacts by priority
    const sortedContacts = [...contacts].sort((a, b) => a.priority - b.priority);
    
    for (const contact of sortedContacts) {
      try {
        // In a real app, this would use a proper SMS API
        console.log(`Sending SMS to ${contact.name} (${contact.phone}): ${message}`);
      } catch (error) {
        console.error(`Failed to send SMS to ${contact.name}:`, error);
      }
    }
  }, [gender]);

  const handleMaintenanceClick = useCallback(() => {
    const now = Date.now();
    
    if (now - lastClickTime > CLICK_TIMEOUT) {
      setClicks(1);
    } else {
      setClicks(prev => prev + 1);
    }
    
    setLastClickTime(now);
  }, [lastClickTime]);

  useEffect(() => {
    if (clicks >= CLICK_THRESHOLD) {
      sendEmergencySMS(contacts);
      setClicks(0);
    }
  }, [clicks, contacts, sendEmergencySMS]);

  return handleMaintenanceClick;
}

async function getCurrentLocation(): Promise<string> {
  return new Promise((resolve) => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve(`https://www.google.com/maps?q=${latitude},${longitude}`);
        },
        () => {
          resolve('Position non disponible');
        }
      );
    } else {
      resolve('Géolocalisation non supportée');
    }
  });
}