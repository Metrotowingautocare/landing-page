import { Card } from "@/components/ui/card";
import { Languages, Clock, DollarSign, MapPin, Shield, Headphones, Award, Wrench } from "lucide-react";

const advantages = [
  {
    icon: Award,
    title: "Certified Technicians",
    titleSpanish: "Técnicos Certificados",
    description: "Our ASE-certified mechanics have 15+ years of experience servicing all makes and models. We diagnose accurately and repair it right the first time.",
    features: [
      "ASE-certified mechanics",
      "15+ years experience",
      "All makes and models",
    ],
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    titleSpanish: "Precios Transparentes",
    description: "Upfront estimates with no hidden fees. You'll know the cost before we start any repair work. We explain everything in English or Spanish.",
    features: [
      "Upfront estimates",
      "No hidden fees",
      "Bilingual explanations",
    ],
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    titleSpanish: "Entrega Rápida",
    description: "Most repairs completed same-day or next-day. Need your car towed in? We respond within 30-45 minutes and start repairs immediately.",
    features: [
      "Same-day repairs",
      "30-45 min towing response",
      "Immediate service start",
    ],
  },
  {
    icon: Shield,
    title: "Warranty on Repairs",
    titleSpanish: "Garantía en Reparaciones",
    description: "We stand behind our work with a comprehensive parts and labor warranty. Your satisfaction and safety are our priority.",
    features: [
      "Parts & labor warranty",
      "Satisfaction guaranteed",
      "Safety priority",
    ],
  },
  {
    icon: Languages,
    title: "Bilingual Auto Care",
    titleSpanish: "Cuidado Automotriz Bilingüe",
    description: "Complete automotive services in English and Spanish. Our bilingual technicians ensure clear communication about your vehicle's needs.",
    features: [
      "Bilingual technicians",
      "Clear communication",
      "Complete explanations",
    ],
  },
  {
    icon: MapPin,
    title: "North Omaha Specialists",
    titleSpanish: "Especialistas de North Omaha",
    description: "We're local, we know the community, and we're committed to keeping North Omaha vehicles running safely and reliably.",
    features: [
      "Local community focus",
      "Neighborhood specialists",
      "Reliable service",
    ],
  },
];

export const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-16 sm:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4 px-2 sm:px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight">
            Why Choose
            <br />
            <span className="bg-gradient-to-r from-secondary via-warning to-secondary bg-clip-text text-transparent">
              MetroTow Auto Care?
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-medium">
            We're not just another auto repair shop - we're your neighbors, committed to quality repairs, honest service, and bilingual support.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 px-2 sm:px-0">
          {advantages.map((advantage, index) => (
            <Card 
              key={index}
              className="group p-4 sm:p-6 lg:p-8 border-2 hover:border-secondary transition-all duration-300 hover:shadow-xl bg-card/80 backdrop-blur-sm"
            >
              <div className="flex items-start gap-4 sm:gap-6">
                {/* Icon */}
                <div className="flex-shrink-0 p-3 sm:p-4 bg-gradient-to-br from-primary to-secondary rounded-xl sm:rounded-2xl shadow-md group-hover:scale-110 transition-transform duration-300">
                  <advantage.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-3 sm:space-y-4 flex-1">
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-foreground mb-1">
                      {advantage.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-muted-foreground">
                      {advantage.titleSpanish}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {advantage.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-1.5 sm:space-y-2">
                    {advantage.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm sm:text-base text-foreground font-medium">
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
        <div className="mt-12 sm:mt-16 text-center px-2 sm:px-4">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-secondary to-warning text-white px-4 sm:px-8 py-3 sm:py-4 rounded-full font-black text-sm sm:text-base lg:text-lg shadow-lg animate-pulse-glow">
            <span className="text-lg sm:text-2xl">🔧</span>
            <span>Most Repairs Completed Same Day</span>
          </div>
        </div>
      </div>
    </section>
  );
};
