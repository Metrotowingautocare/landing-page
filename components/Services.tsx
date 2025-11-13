import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Truck, Wrench, Battery, CircleDollarSign, Wind, KeyRound, Anchor, Disc, Zap, Droplet, Car } from "lucide-react";

const services = [
  {
    icon: Disc,
    title: "Brake Repair & Service",
    titleSpanish: "Reparación y Servicio de Frenos",
    priority: "HIGH",
    description: "Expert brake inspections, pad replacement, and rotor resurfacing. We diagnose squeaks, grinding, and stopping issues to keep you safe on North Omaha roads.",
    price: "$120",
    priceLabel: "Starting at",
    features: ["Brake inspection", "Pad replacement", "Rotor resurfacing"],
    ctaText: "Schedule Service",
  },
  {
    icon: Zap,
    title: "Engine Diagnostics & Repair",
    titleSpanish: "Diagnóstico y Reparación del Motor",
    priority: "HIGH",
    description: "Check engine light on? Our state-of-the-art diagnostic equipment identifies performance issues quickly. From sensors to major engine repairs, we've got you covered.",
    price: "$95",
    priceLabel: "Starting at",
    features: ["Computer diagnostics", "Engine repairs", "Performance tuning"],
    ctaText: "Get Diagnostics",
  },
  {
    icon: Droplet,
    title: "Oil Changes & Maintenance",
    titleSpanish: "Cambios de Aceite y Mantenimiento",
    priority: "MEDIUM",
    description: "Regular maintenance keeps your engine running smoothly. Quick oil changes, filter replacements, and multi-point inspections for all makes and models.",
    price: "$35",
    priceLabel: "Starting at",
    features: ["Quick service", "All oil types", "Multi-point inspection"],
    ctaText: "Book Now",
  },
  {
    icon: Car,
    title: "Tire & Wheel Service",
    titleSpanish: "Servicio de Llantas y Ruedas",
    priority: "MEDIUM",
    description: "Flat repair, rotation, balancing, and new tire installation. We help you get maximum life from your tires and maintain safe traction.",
    price: "$25",
    priceLabel: "Starting at",
    features: ["Tire repair", "Rotation & balancing", "New tire installation"],
    ctaText: "Schedule Service",
  },
  {
    icon: Truck,
    title: "24/7 Emergency Towing",
    titleSpanish: "Remolque de Emergencia 24/7",
    priority: "HIGH",
    description: "Vehicle won't start or been in an accident? We'll safely tow your car directly to our repair shop for immediate diagnostic and repair service. Fast 30-45 minute response.",
    price: "$75",
    priceLabel: "Starting at",
    features: ["30-45 min arrival", "To our repair shop", "Damage-free guarantee"],
    ctaText: "Call for Towing",
  },
  {
    icon: Wrench,
    title: "Roadside Assistance",
    titleSpanish: "Asistencia en Carretera",
    priority: "MEDIUM",
    description: "Battery jump starts, tire changes, and lockout service. If we can't fix it on-site, we'll tow you to our shop for complete repair service.",
    price: "$50",
    priceLabel: "Starting at",
    features: ["On-site repairs", "Jump starts", "Tow to our shop"],
    ctaText: "Get Help Now",
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
            Complete Auto Repair &<br />
            <span className="bg-gradient-to-r from-secondary to-warning bg-clip-text text-transparent">
              Maintenance Services
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
                  {service.ctaText}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
