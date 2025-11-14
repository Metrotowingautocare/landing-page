'use client';

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageCircle, Clock, Languages, Shield, DollarSign } from "lucide-react";
import { useChat } from "./chatProvider";
// Using public folder image path for Next.js

export const Hero = () => {
  const { openChat } = useChat();
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/metrotowing.jpg"
          alt="MetroTow Auto Care professional repair facility"
          className="w-full h-full object-cover"
        />
        {/* Linear Gradient Overlay for sophisticated look */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        {/* Additional subtle overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
      </div>
      
      {/* Content Container - Perfect Center */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
          {/* Badge */}
          <div className="mb-6 animate-slide-up">
            <Badge className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold bg-white/10 text-white border border-white/20 backdrop-blur-md hover:bg-white/20 transition-all">
              <Languages className="w-4 h-4" />
              English & Spanish • Inglés y Español
            </Badge>
          </div>
          
          {/* Main Content */}
          <div className="space-y-6 animate-slide-up">
            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight tracking-tight text-white">
              North Omaha's 
              <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                {` Trusted`}
              </span>
              <br />
              Auto Repair & Maintenance Shop
            </h1>
            
            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-gray-200 font-medium leading-relaxed px-2 sm:px-0">
              Expert auto repair for all makes and models. From brake service to engine diagnostics, our certified bilingual technicians get you back on the road.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center px-2 sm:px-0">
              <Button 
                size="default" 
                onClick={openChat}
                className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-xl hover:shadow-orange-500/25 hover:scale-105 transition-all duration-300 font-bold border-0"
              >
                <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                Schedule Repair
              </Button>
              
              <Button 
                size="default" 
                variant="outline"
                onClick={() => window.location.href = 'tel:+14022140800'}
                className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base border-2 border-white/30 text-black hover:bg-white backdrop-blur-md font-bold transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                <span className="hidden xs:inline">(402) 214-0800</span>
                <span className="xs:hidden">Call Now</span>
              </Button>
            </div>
          </div>
          </div>
        </div>
      </div>
        
      {/* Trust Stats - Compact design */}
      <div className="absolute bottom-8 sm:bottom-16 left-0 right-0 z-10">
        <div className="container px-2 sm:px-4">
          <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg sm:rounded-xl p-2 sm:p-4 text-center hover:bg-white/20 transition-all duration-300">
              <Clock className="w-4 h-4 sm:w-6 sm:h-6 mx-auto mb-1 sm:mb-2 text-orange-400" />
              <div className="text-lg sm:text-2xl font-black text-white mb-0.5 sm:mb-1">30-45</div>
              <div className="text-xs font-semibold text-gray-300">Min Response</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg sm:rounded-xl p-2 sm:p-4 text-center hover:bg-white/20 transition-all duration-300">
              <Shield className="w-4 h-4 sm:w-6 sm:h-6 mx-auto mb-1 sm:mb-2 text-green-400" />
              <div className="text-lg sm:text-2xl font-black text-white mb-0.5 sm:mb-1">24/7</div>
              <div className="text-xs font-semibold text-gray-300">Available</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg sm:rounded-xl p-2 sm:p-4 text-center hover:bg-white/20 transition-all duration-300">
              <DollarSign className="w-4 h-4 sm:w-6 sm:h-6 mx-auto mb-1 sm:mb-2 text-yellow-400" />
              <div className="text-lg sm:text-2xl font-black text-white mb-0.5 sm:mb-1">$0</div>
              <div className="text-xs font-semibold text-gray-300">Hidden Fees</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
