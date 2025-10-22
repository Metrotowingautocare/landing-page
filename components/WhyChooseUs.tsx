import { Card } from "@/components/ui/card";
import { Languages, Clock, DollarSign, MapPin, Shield, Headphones } from "lucide-react";

const advantages = [
  {
    icon: Languages,
    title: "Truly Bilingual Service",
    titleSpanish: "Servicio Bilingüe Verdadero",
    description: "Not just translation - our team is fluent in English and Spanish, ensuring clear communication during stressful situations.",
    features: [
      "Native Spanish speakers on staff",
      "Bilingual dispatchers 24/7",
      "Paperwork in both languages",
    ],
  },
  {
    icon: Clock,
    title: "Lightning-Fast Response",
    titleSpanish: "Respuesta Ultrarrápida",
    description: "We guarantee 30-45 minute arrival times. When you're stranded, every minute counts.",
    features: [
      "GPS-tracked fleet",
      "Strategic Omaha positioning",
      "Real-time ETA updates",
    ],
  },
  {
    icon: DollarSign,
    title: "100% Transparent Pricing",
    titleSpanish: "Precios 100% Transparentes",
    description: "You'll know the exact cost before we arrive - no hidden fees, no surprise charges, ever.",
    features: [
      "Upfront price quotes",
      "No mileage surprises",
      "Clear itemized invoices",
    ],
  },
  {
    icon: MapPin,
    title: "North Omaha Specialists",
    titleSpanish: "Especialistas de North Omaha",
    description: "We're local, we know the neighborhoods, and we're committed to serving our community.",
    features: [
      "Born and raised in Omaha",
      "Know every street & shortcut",
      "Community-first approach",
    ],
  },
  {
    icon: Shield,
    title: "Fully Licensed & Insured",
    titleSpanish: "Totalmente Licenciado y Asegurado",
    description: "Your vehicle is protected with comprehensive insurance and our damage-free guarantee.",
    features: [
      "Full liability coverage",
      "Certified tow operators",
      "Equipment inspected daily",
    ],
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    titleSpanish: "Soporte al Cliente 24/7",
    description: "Real people answering calls around the clock - no robots, no voicemail, just help.",
    features: [
      "Live agents 24/7",
      "Multiple contact methods",
      "Follow-up after service",
    ],
  },
];

export const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
            Why North Omaha
            <br />
            <span className="bg-gradient-to-r from-secondary via-warning to-secondary bg-clip-text text-transparent">
              Trusts MetroTow
            </span>
          </h2>
          <p className="text-xl text-muted-foreground font-medium">
            We're not just another towing company - we're your neighbors, committed to fast, honest, bilingual service.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => (
            <Card 
              key={index}
              className="group p-8 border-2 hover:border-secondary transition-all duration-300 hover:shadow-xl bg-card/80 backdrop-blur-sm"
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0 p-4 bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-md group-hover:scale-110 transition-transform duration-300">
                  <advantage.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-4 flex-1">
                  <div>
                    <h3 className="text-2xl font-black text-foreground mb-1">
                      {advantage.title}
                    </h3>
                    <p className="text-sm font-semibold text-muted-foreground">
                      {advantage.titleSpanish}
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {advantage.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {advantage.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-foreground font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-success flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-secondary to-warning text-white px-8 py-4 rounded-full font-black text-lg shadow-lg animate-pulse-glow">
            <span className="text-2xl">🚀</span>
            <span>Average Response Time: 37 Minutes</span>
          </div>
        </div>
      </div>
    </section>
  );
};
