'use client';

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageCircle, Clock, Languages, Shield, DollarSign } from "lucide-react";
import { useChat } from "./chatProvider";
// Using public folder image path for Next.js

export const Hero = () => {
  const { openChat } = useChat();
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,100,60,0.03),transparent_50%),radial-gradient(circle_at_70%_50%,rgba(255,107,53,0.03),transparent_50%)]" />
      
      <div className="container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            {/* Badge */}
            <Badge variant="secondary" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold bg-secondary/10 text-secondary border-2 border-secondary/20 hover:bg-secondary/20 transition-all">
              <Languages className="w-4 h-4" />
              English & Spanish • Inglés y Español
            </Badge>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
              North Omaha's
              <br />
              <span className="bg-gradient-to-r from-secondary via-warning to-secondary bg-clip-text text-transparent animate-pulse-glow">
                Fastest
              </span>
              <br />
              Towing Service
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-lg">
              Bilingual emergency towing & roadside assistance. We arrive in 30-45 minutes with transparent pricing.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => window.location.href = 'tel:+14022140800'}
                className="text-lg px-8 py-7 bg-gradient-to-r from-emergency to-emergency/90 hover:from-emergency/90 hover:to-emergency shadow-emergency hover:shadow-emergency hover:scale-105 transition-all duration-300 font-bold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (402) 214-0800
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                onClick={openChat}
                className="text-lg px-8 py-7 border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-bold transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat Now • Chatea Ahora
              </Button>
            </div>
            
            {/* Trust Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="bg-card/50 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-4 text-center hover:border-secondary transition-all duration-300 hover:scale-105">
                <Clock className="w-8 h-8 mx-auto mb-2 text-secondary" />
                <div className="text-3xl font-black text-primary">30-45</div>
                <div className="text-sm font-semibold text-muted-foreground">Min Response</div>
              </div>
              
              <div className="bg-card/50 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-4 text-center hover:border-secondary transition-all duration-300 hover:scale-105">
                <Shield className="w-8 h-8 mx-auto mb-2 text-success" />
                <div className="text-3xl font-black text-primary">24/7</div>
                <div className="text-sm font-semibold text-muted-foreground">Available</div>
              </div>
              
              <div className="bg-card/50 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-4 text-center hover:border-secondary transition-all duration-300 hover:scale-105">
                <DollarSign className="w-8 h-8 mx-auto mb-2 text-warning" />
                <div className="text-3xl font-black text-primary">$0</div>
                <div className="text-sm font-semibold text-muted-foreground">Hidden Fees</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border-4 border-secondary/30">
              <img 
                src="/hero-tow-truck.jpg"
                alt="MetroTow professional tow truck ready for emergency service in North Omaha"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              
              {/* Floating Badge */}
              <div className="absolute top-6 right-6 bg-gradient-to-r from-warning to-warning/90 text-warning-foreground px-6 py-3 rounded-full font-black text-sm shadow-lg border-2 border-white animate-float">
                ⚡ OPEN 24/7
              </div>
              
              {/* Location Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md text-primary px-6 py-4 rounded-2xl font-bold shadow-xl border-2 border-secondary">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">📍</span>
                  <div>
                    <div className="text-sm font-black">Serving</div>
                    <div className="text-lg font-black text-secondary">North Omaha, NE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
