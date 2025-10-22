'use client';

import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, X } from "lucide-react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}

export function SuccessModal({ 
  isOpen, 
  onClose, 
  title = "Message Sent Successfully!", 
  message = "Thank you for your message! We'll get back to you soon." 
}: SuccessModalProps) {
  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <Card className="relative w-full max-w-md p-8 bg-card/95 backdrop-blur-sm border-2 border-success/20 shadow-2xl animate-in fade-in-0 zoom-in-95 duration-300">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted/50 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-muted-foreground" />
        </button>

        {/* Content */}
        <div className="text-center space-y-6">
          {/* Success icon */}
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-success to-success/80 rounded-full flex items-center justify-center shadow-lg">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>

          {/* Title */}
          <div className="space-y-2">
            <h3 className="text-2xl font-black text-foreground">
              {title}
            </h3>
            <p className="text-muted-foreground font-medium">
              {message}
            </p>
          </div>

          {/* Additional info */}
          <div className="bg-success/10 border border-success/20 rounded-lg p-4 space-y-2">
            <div className="flex items-center justify-center gap-2 text-success font-semibold">
              <CheckCircle className="w-4 h-4" />
              <span>Response Time: Within 2 hours</span>
            </div>
            <p className="text-sm text-muted-foreground">
              For emergencies, please call <strong>(402) 214-0800</strong>
            </p>
          </div>

          {/* Action button */}
          <Button 
            onClick={onClose}
            size="lg"
            className="w-full bg-gradient-to-r from-success to-success/80 hover:from-success/90 hover:to-success text-white font-bold shadow-md hover:shadow-lg transition-all duration-300"
          >
            Got it, thanks!
          </Button>
        </div>
      </Card>
    </div>
  );
}
