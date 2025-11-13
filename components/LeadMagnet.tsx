'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface LeadMagnetProps {
  autoOpen?: boolean;
}

export function LeadMagnet({ autoOpen = false }: LeadMagnetProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (autoOpen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 5000); // Show after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [autoOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>
        
        <h3 className="text-xl font-bold mb-4">Need Emergency Towing?</h3>
        <p className="text-gray-600 mb-4">
         Certified mechanic working on vehicle repair at MetroTow Auto Care shop in North Omaha
        </p>
        
        <div className="flex gap-2">
          <Button 
            className="flex-1"
           onClick={() => window.location.href = 'tel:+14022140800'}
          >
            Call Now: (402) 214-0800
          </Button>
          <Button 
            variant="outline" 
            onClick={() => setIsOpen(false)}
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
