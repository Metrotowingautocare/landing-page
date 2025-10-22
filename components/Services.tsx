import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Truck, Wrench, Battery, CircleDollarSign, Wind, KeyRound, Anchor } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Emergency Towing",
    titleSpanish: "Remolque de Emergencia",
    priority: "HIGH",
    description: "Fast, safe vehicle transport anywhere in North Omaha. Light to heavy-duty towing with professional equipment.",
    price: "$75",
    priceLabel: "Starting at",
    features: ["30-45 min arrival", "All vehicle types", "Damage-free guarantee"],
  },
  {
    icon: Wrench,
    title: "Roadside Assistance",
    titleSpanish: "Asistencia en Carretera",
    priority: "MEDIUM",
    description: "Get back on the road quickly with on-site repairs, tire changes, and emergency support.",
    price: "$50",
    priceLabel: "Starting at",
    features: ["On-site repairs", "Flat tire service", "Quick response"],
  },
  {
    icon: Battery,
    title: "Battery Jump Start",
    titleSpanish: "Arranque de Batería",
    priority: "HIGH",
    description: "Dead battery? We'll get you running in minutes with professional jump-start service.",
    price: "$45",
    priceLabel: "Flat rate",
    features: ["Battery testing", "15 min service", "All vehicle types"],
  },
  {
    icon: CircleDollarSign,
    title: "Fuel Delivery",
    titleSpanish: "Entrega de Combustible",
    priority: "STANDARD",
    description: "Ran out of gas? We'll deliver fuel directly to your location fast.",
    price: "$40",
    priceLabel: "+ fuel cost",
    features: ["Quick delivery", "All fuel types", "No extra fees"],
  },
  {
    icon: KeyRound,
    title: "Lockout Service",
    titleSpanish: "Servicio de Desbloqueo",
    priority: "MEDIUM",
    description: "Locked out of your car? Our experts will get you back in without damage.",
    price: "$55",
    priceLabel: "Starting at",
    features: ["No damage entry", "All car models", "Fast arrival"],
  },
  {
    icon: Anchor,
    title: "Winch-Out Recovery",
    titleSpanish: "Rescate con Cabrestante",
    priority: "HIGH",
    description: "Stuck in mud, snow, or ditch? Professional winch-out and recovery service.",
    price: "$100",
    priceLabel: "Starting at",
    features: ["Heavy-duty winch", "Safe recovery", "Terrain experts"],
  },
];

const priorityColors = {
  HIGH: "bg-emergency text-emergency-foreground",
  MEDIUM: "bg-secondary text-secondary-foreground",
  STANDARD: "bg-success text-success-foreground",
};

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="outline" className="text-base font-bold border-2 border-secondary text-secondary px-4 py-2">
            Our Services • Nuestros Servicios
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
            Complete Towing &<br />
            <span className="bg-gradient-to-r from-secondary to-warning bg-clip-text text-transparent">
              Auto Care Solutions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground font-medium">
            Transparent pricing. No hidden fees. Bilingual service guaranteed.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-2 hover:border-secondary transition-all duration-300 hover:shadow-lg hover:-translate-y-2 bg-card/50 backdrop-blur-sm"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              
              <div className="p-8 space-y-6">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="p-4 bg-gradient-to-br from-primary to-primary-light rounded-2xl shadow-md group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <Badge className={`${priorityColors[service.priority as keyof typeof priorityColors]} font-bold text-xs px-3 py-1`}>
                    {service.priority}
                  </Badge>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-2xl font-black text-foreground mb-1">{service.title}</h3>
                  <p className="text-sm font-semibold text-muted-foreground">{service.titleSpanish}</p>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-secondary/10 text-foreground border border-secondary/20 hover:bg-secondary/20">
                      {feature}
                    </Badge>
                  ))}
                </div>

                {/* Pricing */}
                <div className="bg-muted/50 rounded-xl p-4 border-2 border-border">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-secondary">{service.price}</span>
                    <span className="text-sm font-semibold text-muted-foreground">{service.priceLabel}</span>
                  </div>
                </div>

                {/* CTA */}
                <Button 
                  onClick={() => window.location.href = 'tel:+14022140800'}
                  className="w-full font-bold bg-primary hover:bg-primary-light transition-all duration-300 hover:shadow-md"
                >
                  Call Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
