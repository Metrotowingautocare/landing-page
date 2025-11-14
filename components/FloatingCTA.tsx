'use client';

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, X } from "lucide-react";
import { useChat } from "./chatProvider";

export const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const { openChat } = useChat();

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2 sm:gap-3">
      {/* Expanded Options */}
      {isExpanded && (
        <div className="flex flex-col gap-2 sm:gap-3 animate-slide-up">
          <Button
            size="default"
            onClick={() => window.location.href = 'tel:+14022140800'}
            className="bg-gradient-to-r from-emergency to-emergency/90 hover:from-emergency/90 hover:to-emergency text-white shadow-emergency font-bold gap-2 animate-pulse-glow text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-3"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            Call Now
          </Button>
          
          <Button
            size="default"
            onClick={() => {
              openChat();
              setIsExpanded(false);
            }}
            className="bg-gradient-to-r from-secondary to-warning hover:from-secondary-hover hover:to-warning text-white shadow-lg font-bold gap-2 text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-3"
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden xs:inline">Chat • Chatea</span>
            <span className="xs:hidden">Chat</span>
          </Button>
        </div>
      )}

      {/* Toggle Button */}
      <Button
        size="default"
        onClick={() => setIsExpanded(!isExpanded)}
        className={`${
          isExpanded
            ? "bg-muted hover:bg-muted/80 text-foreground"
            : "bg-gradient-to-r from-emergency via-secondary to-warning hover:opacity-90 text-white animate-pulse-glow"
        } shadow-lg font-bold rounded-full w-12 h-12 sm:w-16 sm:h-16 p-0 transition-all duration-300`}
      >
        {isExpanded ? (
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        ) : (
          <Phone className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" />
        )}
      </Button>

    </div>
  );
};
