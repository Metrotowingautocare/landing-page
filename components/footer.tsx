import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
           <img src="/logo.svg" alt="Logo" className="w-24 h-24" />
            <p className="text-primary-foreground/80 font-medium leading-relaxed">
              North Omaha's trusted bilingual auto repair and maintenance shop. Professional service, certified technicians, and 24/7 towing available.
            </p>
            <div className="pt-4">
              <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-bold text-sm">
                ⚡ 24/7 Emergency Service
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-black">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-secondary transition-colors font-semibold">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-primary-foreground/80 hover:text-secondary transition-colors font-semibold">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-primary-foreground/80 hover:text-secondary transition-colors font-semibold">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-secondary transition-colors font-semibold">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-xl font-black">Services</h4>
            <ul className="space-y-3 text-primary-foreground/80 font-semibold">
              <li>Brake Repair & Service</li>
              <li>Engine Diagnostics</li>
              <li>Oil Changes & Maintenance</li>
              <li>Tire & Wheel Service</li>
              <li>Emergency Towing</li>
              <li>Roadside Assistance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-black">Contact</h4>
            
            <div className="space-y-4">
              <a href="tel:+14022140800" className="flex items-start gap-3 group">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-sm font-bold text-primary-foreground/60">Emergency Line</div>
                  <div className="font-black text-secondary group-hover:text-secondary-light transition-colors">
                    (402) 214-0800
                  </div>
                </div>
              </a>

              <a href="mailto:service@metrotowingautocare.com" className="flex items-start gap-3 group">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-sm font-bold text-primary-foreground/60">Email</div>
                  <div className="font-bold text-primary-foreground/90 group-hover:text-secondary transition-colors">
                    service@metrotowingautocare.com
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-primary-foreground/60">Location</div>
                  <div className="font-bold text-primary-foreground/90">North Omaha, NE</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-primary-foreground/60">Hours</div>
                  <div className="font-black text-success">24/7/365</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 font-semibold text-center md:text-left">
              © {currentYear} MetroTow Auto Care & Towing | Full-Service Auto Repair Shop in North Omaha, NE | 24/7 Emergency Towing Available
            </p>
            <div className="flex gap-6 text-sm font-bold">
              <a href="#privacy" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
