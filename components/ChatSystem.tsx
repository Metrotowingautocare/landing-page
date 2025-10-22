import React, { useState, useEffect, useRef, JSX } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X, Phone, MapPin, Zap, Shield, Clock, CheckCircle, AlertTriangle } from "lucide-react";

type Flow = 'welcome' | 'emergency' | 'autocare';
type Step = 'welcome' | 'location' | 'vehicle' | 'problem' | 'contact' | 'confirmation';

interface UserData {
  location?: string;
  vehicleType?: string;
  problem?: string;
  problemDescription?: string;
  name?: string;
  phone?: string;
}

interface ChatSystemProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ChatSystem = ({ isOpen, onClose }: ChatSystemProps) => {
  const [currentFlow, setCurrentFlow] = useState<Flow>('welcome');
  const [currentStep, setCurrentStep] = useState<Step>('welcome');
  const [userData, setUserData] = useState<UserData>({});
  const [messages, setMessages] = useState<Array<{content: JSX.Element | string, isBot: boolean}>>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      startWelcomeFlow();
    }
  }, [isOpen]);

  const addMessage = (content: JSX.Element | string, isBot = true) => {
    setMessages(prev => [...prev, { content, isBot }]);
  };

  const startWelcomeFlow = () => {
    addMessage(
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-secondary to-warning rounded-full flex items-center justify-center shadow-lg">
          <Zap className="w-5 h-5 text-white" />
        </div>
        <div>
          <div className="font-bold text-lg">¡Hola! Welcome to MetroTow!</div>
          <div className="text-sm opacity-80">I'm here to help you get back on the road fast.</div>
        </div>
      </div>
    );
    setTimeout(() => {
      addMessage(
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-orange-500" />
            <p className="font-bold text-lg">How can we help you today?</p>
          </div>
          
          <div 
            className="group p-5 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl cursor-pointer hover:scale-[1.02] transition-all duration-300 border border-red-400/30 shadow-lg hover:shadow-xl"
            onClick={() => startEmergencyFlow()}
          >
            <div className="relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-8 translate-x-8"></div>
              
              <div className="relative flex items-center gap-4 text-white">
                {/* Icon Section */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <span className="text-3xl animate-pulse">🚨</span>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="font-black text-2xl tracking-tight">Emergency Towing</div>
                    <div className="px-2 py-1 bg-red-600/80 rounded-lg text-xs font-bold animate-pulse">
                      LIVE
                    </div>
                  </div>
                  <div className="text-sm opacity-90 leading-relaxed mb-3">
                    Broken down? Need immediate help? Our trucks are ready 24/7.
                  </div>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center gap-1 text-xs bg-white/15 px-2 py-1 rounded-full">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      <span>30-45 min ETA</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs bg-white/15 px-2 py-1 rounded-full">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      <span>GPS Tracked</span>
                    </div>
                  </div>
                </div>
                
                {/* Action Indicator */}
                <div className="flex-shrink-0 text-right">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <span className="text-lg">→</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            className="group p-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl cursor-pointer hover:scale-[1.02] transition-all duration-300 border border-blue-400/30 shadow-lg hover:shadow-xl"
            onClick={() => startAutoCareFlow()}
          >
            <div className="relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-8 translate-x-8"></div>
              
              <div className="relative flex items-center gap-4 text-white">
                {/* Icon Section */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <span className="text-3xl">🔧</span>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="font-black text-2xl tracking-tight">Auto Care & Repair</div>
                    <div className="px-2 py-1 bg-blue-600/80 rounded-lg text-xs font-bold">
                      QUOTE
                    </div>
                  </div>
                  <div className="text-sm opacity-90 leading-relaxed mb-3">
                    Professional maintenance, repairs, and diagnostics for your vehicle.
                  </div>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center gap-1 text-xs bg-white/15 px-2 py-1 rounded-full">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                      <span>2 hour response</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs bg-white/15 px-2 py-1 rounded-full">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      <span>Free estimates</span>
                    </div>
                  </div>
                </div>
                
                {/* Action Indicator */}
                <div className="flex-shrink-0 text-right">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <span className="text-lg">→</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }, 1200);
  };

  const startEmergencyFlow = () => {
    setCurrentFlow('emergency');
    setCurrentStep('location');
    addMessage("🚨 Emergency towing selected", false);
    setTimeout(() => {
      addMessage("Let's get you help FAST! This will only take 60 seconds.");
      setTimeout(() => {
        addMessage(
          <div className="space-y-4">
            {/* Enhanced Progress Bar */}
            <div className="bg-gray-100 rounded-full p-1">
              <div className="flex gap-1">
                {[1,2,3,4].map(i => (
                  <div key={i} className={`h-3 flex-1 rounded-full transition-all duration-500 ${
                    i === 1 
                      ? 'bg-gradient-to-r from-red-500 to-red-600 shadow-lg' 
                      : 'bg-gray-200'
                  }`} />
                ))}
              </div>
            </div>
            
            {/* Step Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
              <div>
                <div className="font-bold text-lg">Location Required</div>
                <div className="text-sm text-gray-600">Step 1 of 4 • This helps us dispatch the nearest truck</div>
              </div>
            </div>
            
            <LocationCapture onSubmit={(location) => {
              setUserData(prev => ({...prev, location}));
              addMessage(`📍 Location: ${location}`, false);
              showVehicleSelection();
            }} />
          </div>
        );
      }, 600);
    }, 400);
  };

  const showVehicleSelection = () => {
    setCurrentStep('vehicle');
    setTimeout(() => {
      addMessage(
        <div className="space-y-3">
          <div className="flex gap-2 mb-2">
            {[1,2,3,4].map(i => (
              <div key={i} className={`h-2 flex-1 rounded-full ${i <= 2 ? 'bg-emergency' : 'bg-muted'}`} />
            ))}
          </div>
          <p className="font-bold">Step 2 of 4</p>
          <p className="font-bold">🚗 What type of vehicle?</p>
          <div className="grid grid-cols-2 gap-2">
            {[
              { type: 'car', icon: '🚗', label: 'Car' },
              { type: 'suv', icon: '🚙', label: 'SUV' },
              { type: 'truck', icon: '🚚', label: 'Truck' },
              { type: 'motorcycle', icon: '🏍️', label: 'Motorcycle' }
            ].map(vehicle => (
              <div
                key={vehicle.type}
                className="p-4 bg-card border-2 border-primary/20 rounded-xl cursor-pointer hover:border-emergency hover:scale-105 transition-all text-center"
                onClick={() => {
                  setUserData(prev => ({...prev, vehicleType: vehicle.type}));
                  addMessage(`🚗 Vehicle: ${vehicle.label}`, false);
                  showProblemSelection();
                }}
              >
                <div className="text-3xl mb-2">{vehicle.icon}</div>
                <div className="font-bold text-sm">{vehicle.label}</div>
              </div>
            ))}
          </div>
        </div>
      );
    }, 600);
  };

  const showProblemSelection = () => {
    setCurrentStep('problem');
    setTimeout(() => {
      addMessage(
        <div className="space-y-3">
          <div className="flex gap-2 mb-2">
            {[1,2,3,4].map(i => (
              <div key={i} className={`h-2 flex-1 rounded-full ${i <= 3 ? 'bg-emergency' : 'bg-muted'}`} />
            ))}
          </div>
          <p className="font-bold">Step 3 of 4</p>
          <p className="font-bold">❓ What happened?</p>
          <div className="space-y-2">
            {[
              { id: 'wont-start', label: "🔋 Won't start" },
              { id: 'flat-tire', label: '🛞 Flat tire' },
              { id: 'accident', label: '💥 Accident' },
              { id: 'breakdown', label: '⚠️ Breakdown' },
              { id: 'other', label: '✏️ Other (describe)' }
            ].map(problem => (
              <div
                key={problem.id}
                className="p-3 bg-card border-2 border-primary/20 rounded-xl cursor-pointer hover:border-emergency hover:scale-105 transition-all font-semibold"
                onClick={() => {
                  setUserData(prev => ({...prev, problem: problem.id}));
                  addMessage(`❓ Problem: ${problem.label}`, false);
                  if (problem.id === 'other') {
                    showCustomProblem();
                  } else {
                    showContactForm();
                  }
                }}
              >
                {problem.label}
              </div>
            ))}
          </div>
        </div>
      );
    }, 600);
  };

  const showCustomProblem = () => {
    addMessage(
      <div className="space-y-3">
        <p className="font-bold">Please describe the problem:</p>
        <Textarea
          id="customProblem"
          placeholder="Tell us what happened..."
          rows={3}
          className="border-2 focus:border-emergency"
        />
        <Button
          onClick={() => {
            const desc = (document.getElementById('customProblem') as HTMLTextAreaElement).value;
            if (desc.trim()) {
              setUserData(prev => ({...prev, problemDescription: desc}));
              addMessage(`📝 ${desc}`, false);
              showContactForm();
            }
          }}
          className="w-full bg-emergency hover:bg-emergency/90"
        >
          Continue
        </Button>
      </div>
    );
  };

  const showContactForm = () => {
    setCurrentStep('contact');
    setTimeout(() => {
      addMessage("📞 Almost done! We need your contact info to dispatch our truck:");
      addMessage(
        <ContactForm onSubmit={(name, phone) => {
          setUserData(prev => ({...prev, name, phone}));
          showConfirmation(name, phone);
        }} />
      );
    }, 600);
  };

  const showConfirmation = (name: string, phone: string) => {
    setCurrentStep('confirmation');
    const eta = 30 + Math.floor(Math.random() * 20);
    
    setTimeout(() => {
      addMessage(
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-3xl border-2 border-green-200 text-center space-y-6 shadow-lg">
          {/* Success Animation */}
          <div className="relative">
            <div className="text-7xl animate-bounce">🚛</div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="text-3xl font-black text-green-600">Truck Dispatched!</div>
            <div className="text-sm text-gray-600 font-medium">Emergency response activated</div>
          </div>
          
          {/* ETA Display */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-2xl shadow-lg">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Clock className="w-6 h-6" />
              <div className="text-4xl font-black">{eta} min</div>
            </div>
            <div className="text-sm font-semibold opacity-90">Estimated arrival time</div>
          </div>
          
          {/* Details Card */}
          <div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl text-left space-y-3 border border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="font-bold text-lg">Dispatch Confirmed</span>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Customer:</span>
                <span className="font-semibold">{name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Phone:</span>
                <span className="font-semibold">{phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Location:</span>
                <span className="font-semibold text-right max-w-[200px]">{userData.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Service:</span>
                <span className="font-semibold">Emergency Towing</span>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-3 mt-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Estimated Cost:</span>
                <span className="font-bold text-lg">$85 + $3/mile</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">Hook fee + mileage after 5 miles</div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              onClick={() => window.location.href = 'tel:+14022140800'}
              className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-lg font-bold rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call MetroTow: (402) 214-0800
            </Button>
            
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <Shield className="w-4 h-4 text-green-500" />
              <span>Your driver will call when they arrive</span>
            </div>
          </div>
        </div>
      );
    }, 800);
  };

  const startAutoCareFlow = () => {
    setCurrentFlow('autocare');
    addMessage("🔧 Auto Care & Repair selected", false);
    setTimeout(() => {
      addMessage("Great! We offer brake service, tire sales, diagnostics, and more.");
      setTimeout(() => {
        addMessage("What service do you need?");
        addMessage(
          <div className="space-y-2">
            {['Brake Service', 'Tire Sales', 'Diagnostics', 'Oil Change', 'Other'].map(service => (
              <div
                key={service}
                className="p-3 bg-card border-2 border-primary/20 rounded-xl cursor-pointer hover:border-secondary hover:scale-105 transition-all font-semibold"
                onClick={() => {
                  addMessage(`Service needed: ${service}`, false);
                  showContactFormForQuote();
                }}
              >
                {service}
              </div>
            ))}
          </div>
        );
      }, 600);
    }, 600);
  };

  const showContactFormForQuote = () => {
    setTimeout(() => {
      addMessage("Perfect! Let us know how to reach you:");
      addMessage(
        <ContactForm onSubmit={(name, phone) => {
          addMessage(
            <div className="bg-gradient-to-br from-secondary/20 to-warning/10 p-6 rounded-2xl border-2 border-secondary text-center space-y-4">
              <div className="text-6xl">✅</div>
              <div className="text-2xl font-black text-secondary">Quote Request Received!</div>
              <p className="text-sm">Hi <strong>{name}</strong>, we'll call you at <strong>{phone}</strong> within 2 hours with a quote.</p>
              <p className="text-xs text-muted-foreground">Our team will discuss pricing and schedule your service.</p>
            </div>
          );
        }} />
      );
    }, 600);
  };

  return (
    <div 
      className={`fixed bottom-24 right-6 w-[420px] max-w-[calc(100vw-3rem)] bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-3xl shadow-2xl transition-all duration-500 z-50 ${
        isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95 pointer-events-none'
      }`}
      style={{
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)'
      }}
    >
      {/* Header */}
      <div className="relative bg-gradient-to-r from-emergency via-secondary to-warning p-6 rounded-t-3xl overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        
        <div className="relative flex justify-between items-center">
          <div className="text-white">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
              <div className="font-black text-xl tracking-tight">MetroTow Assistant</div>
            </div>
            <div className="text-sm opacity-90 font-medium">Emergency support • Available 24/7</div>
          </div>
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20 rounded-full transition-all duration-200 hover:scale-110"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>
      </div>
      
      {/* Messages Container */}
      <div className="h-[420px] overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-gray-50/50 to-white/80 backdrop-blur-sm">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'} animate-fade-in`}
          >
            <div className={`flex items-start gap-3 max-w-[85%] ${msg.isBot ? 'flex-row' : 'flex-row-reverse'}`}>
              {/* Avatar */}
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                msg.isBot 
                  ? 'bg-gradient-to-br from-secondary to-warning text-white shadow-lg' 
                  : 'bg-gradient-to-br from-emergency to-emergency/80 text-white shadow-lg'
              }`}>
                {msg.isBot ? (
                  <Zap className="w-4 h-4" />
                ) : (
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                )}
              </div>
              
              {/* Message Bubble */}
              <div
                className={`p-4 rounded-2xl shadow-sm border ${
                  msg.isBot
                    ? 'bg-white/90 backdrop-blur-sm text-gray-800 border-gray-200/50 rounded-tl-md'
                    : 'bg-gradient-to-r from-emergency to-emergency/90 text-white border-emergency/20 rounded-tr-md'
                }`}
                style={{
                  boxShadow: msg.isBot 
                    ? '0 4px 12px rgba(0, 0, 0, 0.05)' 
                    : '0 4px 12px rgba(220, 38, 38, 0.2)'
                }}
              >
                {msg.content}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Typing Indicator */}
      <div className="px-6 pb-4">
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <Shield className="w-4 h-4 text-green-500" />
          <span>Secure & encrypted conversation</span>
        </div>
      </div>
    </div>
  );
};

const LocationCapture = ({ onSubmit }: { onSubmit: (location: string) => void }) => {
  const [location, setLocation] = useState('');
  const [isGettingLocation, setIsGettingLocation] = useState(false);

  const getCurrentLocation = () => {
    setIsGettingLocation(true);
    
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by this browser.');
      setIsGettingLocation(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        
        try {
          // Use reverse geocoding to get readable address
          const response = await fetch(
            `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=YOUR_API_KEY&limit=1&no_annotations=1`
          );
          
          if (response.ok) {
            const data = await response.json();
            if (data.results && data.results.length > 0) {
              const address = data.results[0].formatted;
              setLocation(address);
            } else {
              // Fallback to a simpler reverse geocoding or coordinates
              const fallbackResponse = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`
              );
              
              if (fallbackResponse.ok) {
                const fallbackData = await fallbackResponse.json();
                const address = fallbackData.display_name || `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`;
                setLocation(address);
              } else {
                setLocation(`${latitude.toFixed(6)}, ${longitude.toFixed(6)}`);
              }
            }
          } else {
            // Fallback to OpenStreetMap Nominatim (free service)
            const fallbackResponse = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`
            );
            
            if (fallbackResponse.ok) {
              const fallbackData = await fallbackResponse.json();
              const address = fallbackData.display_name || `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`;
              setLocation(address);
            } else {
              setLocation(`${latitude.toFixed(6)}, ${longitude.toFixed(6)}`);
            }
          }
          setIsGettingLocation(false);
        } catch (error) {
          console.error('Error getting location:', error);
          setLocation(`${latitude.toFixed(6)}, ${longitude.toFixed(6)}`);
          setIsGettingLocation(false);
        }
      },
      (error) => {
        console.error('Error getting location:', error);
        alert('Unable to get your location. Please enter it manually.');
        setIsGettingLocation(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-3">
        <MapPin className="w-5 h-5 text-red-500" />
        <p className="font-bold text-lg">Where do you need towing?</p>
      </div>
      
      <div className="space-y-3">
        <Input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter address, intersection, or landmark..."
          className="border-2 focus:border-red-500 rounded-xl p-4 text-base bg-white/80 backdrop-blur-sm"
        />
        
        <Button
          onClick={getCurrentLocation}
          disabled={isGettingLocation}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 font-bold rounded-xl p-4 text-base shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <MapPin className="w-5 h-5 mr-2" />
          {isGettingLocation ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Getting your location...
            </div>
          ) : (
            'Use My Current Location'
          )}
        </Button>
        
        <Button
          onClick={() => location.trim() && onSubmit(location)}
          className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 font-bold rounded-xl p-4 text-base shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!location.trim()}
        >
          <div className="flex items-center justify-center gap-2">
            <CheckCircle className="w-5 h-5" />
            Continue to Next Step
          </div>
        </Button>
      </div>
      
      <div className="flex items-center gap-2 text-sm text-gray-600 bg-blue-50 p-3 rounded-xl">
        <Shield className="w-4 h-4 text-blue-500" />
        <span>Your location is only used to dispatch the nearest available truck</span>
      </div>
    </div>
  );
};

const ContactForm = ({ onSubmit }: { onSubmit: (name: string, phone: string) => void }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length >= 6) {
      return numbers.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    } else if (numbers.length >= 3) {
      return numbers.replace(/(\d{3})(\d{0,3})/, '($1) $2');
    }
    return numbers;
  };

  return (
    <div className="space-y-4">
      {/* Enhanced Progress Bar */}
      <div className="bg-gray-100 rounded-full p-1">
        <div className="flex gap-1">
          {[1,2,3,4].map(i => (
            <div key={i} className={`h-3 flex-1 rounded-full transition-all duration-500 ${
              i <= 4 
                ? 'bg-gradient-to-r from-red-500 to-red-600 shadow-lg' 
                : 'bg-gray-200'
            }`} />
          ))}
        </div>
      </div>
      
      {/* Step Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
        <div>
          <div className="font-bold text-lg">Contact Information</div>
          <div className="text-sm text-gray-600">Final step • So our driver can reach you</div>
        </div>
      </div>
      
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            className="border-2 focus:border-red-500 rounded-xl p-4 text-base bg-white/80 backdrop-blur-sm"
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
          <Input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(formatPhone(e.target.value))}
            placeholder="(402) 214-0800"
            className="border-2 focus:border-red-500 rounded-xl p-4 text-base bg-white/80 backdrop-blur-sm"
          />
        </div>
        
        <Button
          onClick={() => name.trim() && phone.trim() && onSubmit(name, phone)}
          className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 font-bold text-lg rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!name.trim() || !phone.trim()}
        >
          <div className="flex items-center justify-center gap-3">
            <span className="text-2xl">🚛</span>
            <span>DISPATCH TRUCK NOW</span>
          </div>
        </Button>
      </div>
      
      <div className="flex items-center gap-2 text-sm text-gray-600 bg-green-50 p-3 rounded-xl">
        <CheckCircle className="w-4 h-4 text-green-500" />
        <span>Your information is secure and only used for this emergency service</span>
      </div>
    </div>
  );
};
