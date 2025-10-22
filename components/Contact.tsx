'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { useChat } from "./chatProvider";

export const Contact = () => {
  const { openChat } = useChat();
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
                Need Help
                <br />
                <span className="bg-gradient-to-r from-secondary to-warning bg-clip-text text-transparent">
                  Right Now?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground font-medium">
                We're available 24/7 for emergencies. Call, text, or chat with us in English or Spanish.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <Card className="p-6 border-2 border-emergency/20 hover:border-emergency transition-all duration-300 bg-card/80 backdrop-blur-sm group">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-gradient-to-br from-emergency to-emergency/80 rounded-2xl shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-muted-foreground mb-1">Emergency Hotline</div>
                    <a href="tel:+14022140800" className="text-2xl font-black text-emergency hover:text-emergency/80 transition-colors">
                      (402) 214-0800
                    </a>
                    <div className="text-sm text-muted-foreground font-semibold mt-1">
                      Available 24/7 • Disponible 24/7
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 border-secondary/20 hover:border-secondary transition-all duration-300 bg-card/80 backdrop-blur-sm group">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-gradient-to-br from-secondary to-warning rounded-2xl shadow-md group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-muted-foreground mb-1">Live Chat Support</div>
                    <button 
                      onClick={openChat}
                      className="text-2xl font-black text-secondary hover:text-secondary/80 transition-colors"
                    >
                      Start Chat Now
                    </button>
                    <div className="text-sm text-muted-foreground font-semibold mt-1">
                      Fastest response • Respuesta más rápida
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 hover:border-primary transition-all duration-300 bg-card/80 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-gradient-to-br from-primary to-primary-light rounded-2xl shadow-md">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-muted-foreground mb-1">Email Us</div>
                    <a href="mailto:help@metrotow.com" className="text-xl font-bold text-foreground hover:text-secondary transition-colors">
                      help@metrotow.com
                    </a>
                  </div>
                </div>
              </Card>
            </div>

            {/* Location & Hours */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 space-y-2 bg-card/80 backdrop-blur-sm">
                <MapPin className="w-8 h-8 text-secondary mb-2" />
                <div className="font-bold text-sm text-muted-foreground">Our Location</div>
                <div className="font-black text-foreground">
                  North Omaha, NE
                </div>
                <div className="text-sm text-muted-foreground">
                  Serving all of Omaha
                </div>
              </Card>

              <Card className="p-6 space-y-2 bg-card/80 backdrop-blur-sm">
                <Clock className="w-8 h-8 text-success mb-2" />
                <div className="font-bold text-sm text-muted-foreground">Hours</div>
                <div className="font-black text-success">
                  24/7/365
                </div>
                <div className="text-sm text-muted-foreground">
                  Always Open
                </div>
              </Card>
            </div>
          </div>

          {/* Right: Contact Form */}
          <Card className="p-8 border-2 hover:border-secondary transition-all duration-300 bg-card/80 backdrop-blur-sm">
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-black mb-2">Send Us a Message</h3>
                <p className="text-muted-foreground font-medium">
                  Not an emergency? Fill out the form and we'll get back to you within 2 hours.
                </p>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground">Name / Nombre</label>
                    <Input placeholder="John Doe" className="border-2 focus:border-secondary" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground">Phone / Teléfono</label>
                    <Input placeholder="(402) 214-0800" className="border-2 focus:border-secondary" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Email / Correo</label>
                  <Input type="email" placeholder="john@example.com" className="border-2 focus:border-secondary" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Service Needed / Servicio Necesario</label>
                  <Input placeholder="e.g., Emergency Towing, Battery Jump" className="border-2 focus:border-secondary" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Message / Mensaje</label>
                  <Textarea 
                    placeholder="Tell us about your situation..."
                    rows={5}
                    className="border-2 focus:border-secondary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-lg font-bold bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Send Message
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  For emergencies, please call (402) 214-0800 immediately
                </p>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
