import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Maria G.",
    initial: "M",
    location: "North Omaha",
    service: "Brake Repair",
    rating: 5,
    text: "My brakes were making terrible grinding noises. MetroTow diagnosed the problem, replaced the pads and rotors, and had me back on the road the same day. Fair pricing and honest service – highly recommend!",
    highlight: "Same day brake repair!",
    date: "2 weeks ago",
  },
  {
    name: "Carlos R.",
    initial: "C",
    location: "Florence",
    service: "Engine Diagnostics",
    rating: 5,
    text: "Check engine light came on and I was worried. Their diagnostic equipment found the issue quickly – a bad O2 sensor. Fixed it in under an hour. Great communication in Spanish too!",
    highlight: "Quick and accurate diagnosis",
    date: "1 month ago",
  },
  {
    name: "Jennifer T.",
    initial: "J",
    location: "Benson",
    service: "Emergency Towing",
    rating: 5,
    text: "Had a flat tire on the interstate at night. They towed my car to their shop and fixed the tire first thing in the morning. Professional and reliable service!",
    highlight: "Towed to their shop for repair",
    date: "3 weeks ago",
  },
];

export const Reviews = () => {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4 px-2 sm:px-4">
          <Badge className="bg-success text-success-foreground font-bold text-sm sm:text-base px-3 sm:px-4 py-1 sm:py-2 mb-4">
            ⭐ 5.0 Google Rating
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight">
            Real Stories from
            <br />
            <span className="bg-gradient-to-r from-secondary to-warning bg-clip-text text-transparent">
              Real Customers
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-medium">
            See why North Omaha trusts MetroTow Auto Care for reliable auto repair and emergency services.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-2 sm:px-0">
          {reviews.map((review, index) => (
            <Card 
              key={index}
              className="group p-4 sm:p-6 border-2 hover:border-secondary transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card/80 backdrop-blur-sm"
            >
              <div className="space-y-3 sm:space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-black text-base sm:text-lg">
                      {review.initial}
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-foreground">{review.name}</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">{review.location}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-warning text-warning" />
                    ))}
                  </div>
                </div>

                {/* Service Badge */}
                <Badge variant="secondary" className="bg-secondary/10 text-foreground font-semibold text-xs sm:text-sm">
                  {review.service}
                </Badge>

                {/* Review Text */}
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  "{review.text}"
                </p>

                {/* Highlight */}
                <div className="pt-3 sm:pt-4 border-t-2 border-secondary/20">
                  <p className="text-sm sm:text-base text-secondary font-bold italic">
                    {review.highlight}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{review.date}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 px-2 sm:px-0">
          <div className="text-center p-4 sm:p-6 bg-card/50 rounded-xl sm:rounded-2xl border-2 border-border">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-secondary mb-1 sm:mb-2">500+</div>
            <div className="text-xs sm:text-sm font-semibold text-muted-foreground">5-Star Reviews</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-card/50 rounded-xl sm:rounded-2xl border-2 border-border">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-success mb-1 sm:mb-2">98%</div>
            <div className="text-xs sm:text-sm font-semibold text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-card/50 rounded-xl sm:rounded-2xl border-2 border-border">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary mb-1 sm:mb-2">5K+</div>
            <div className="text-xs sm:text-sm font-semibold text-muted-foreground">Customers Served</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-card/50 rounded-xl sm:rounded-2xl border-2 border-border">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-warning mb-1 sm:mb-2">#1</div>
            <div className="text-xs sm:text-sm font-semibold text-muted-foreground">in North Omaha</div>
          </div>
        </div>
      </div>
    </section>
  );
};
