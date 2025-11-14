import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12 px-2 sm:px-0">
          {/* Company Info */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
           <img src="/logo.svg" alt="Logo" className="w-20 h-20 sm:w-24 sm:h-24" />
            <p className="text-sm sm:text-base text-primary-foreground/80 font-medium leading-relaxed">
              North Omaha's trusted bilingual auto repair and maintenance shop. Professional service, certified technicians, and 24/7 towing available.
            </p>
            <div className="pt-2 sm:pt-4">
              <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-bold text-xs sm:text-sm">
                ⚡ 24/7 Emergency Service
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-lg sm:text-xl font-black">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#services" className="text-sm sm:text-base text-primary-foreground/80 hover:text-secondary transition-colors font-semibold">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-sm sm:text-base text-primary-foreground/80 hover:text-secondary transition-colors font-semibold">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-sm sm:text-base text-primary-foreground/80 hover:text-secondary transition-colors font-semibold">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm sm:text-base text-primary-foreground/80 hover:text-secondary transition-colors font-semibold">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-lg sm:text-xl font-black">Services</h4>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-primary-foreground/80 font-semibold">
              <li>Brake Repair & Service</li>
              <li>Engine Diagnostics</li>
              <li>Oil Changes & Maintenance</li>
              <li>Tire & Wheel Service</li>
              <li>Emergency Towing</li>
              <li>Roadside Assistance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-lg sm:text-xl font-black">Contact</h4>
            
            <div className="space-y-3 sm:space-y-4">
              <a href="tel:+14022140800" className="flex items-start gap-3 group">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-primary-foreground/60">Emergency Line</div>
                  <div className="text-sm sm:text-base font-black text-secondary group-hover:text-secondary-light transition-colors">
                    (402) 214-0800
                  </div>
                </div>
              </a>

              <a href="mailto:service@metrotowingautocare.com" className="flex items-start gap-3 group">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-primary-foreground/60">Email</div>
                  <div className="text-xs sm:text-sm font-bold text-primary-foreground/90 group-hover:text-secondary transition-colors break-all">
                    service@metrotowingautocare.com
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-primary-foreground/60">Location</div>
                  <div className="text-sm sm:text-base font-bold text-primary-foreground/90">North Omaha, NE</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-success flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-primary-foreground/60">Hours</div>
                  <div className="text-sm sm:text-base font-black text-success">24/7/365</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-primary-foreground/20 px-2 sm:px-0">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-primary-foreground/60 font-semibold text-center md:text-left">
              © {currentYear} MetroTow Auto Care & Towing | Full-Service Auto Repair Shop in North Omaha, NE | 24/7 Emergency Towing Available
            </p>
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm font-bold">
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
