import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-background/95 backdrop-blur-lg shadow-md border-b-2 border-border"
          : "bg-transparent"
          }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center group">
              <img src="/logo.svg" alt="Logo" className="w-20 h-20" />
              <span className={`text-xl font-semibold group-hover:scale-105 transition-transform duration-300 ${
                isScrolled ? "text-foreground" : "text-white"
              }`}>
                MetroTow
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("services")}
                className={`font-bold hover:text-secondary transition-colors ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("why-us")}
                className={`font-bold hover:text-secondary transition-colors ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                Why Us
              </button>
              <button
                onClick={() => scrollToSection("reviews")}
                className={`font-bold hover:text-secondary transition-colors ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`font-bold hover:text-secondary transition-colors ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                Contact
              </button>
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <Button
                size="lg"
                onClick={() => window.location.href = 'tel:+14022140800'}
                className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-emergency to-emergency/90 hover:from-emergency/90 hover:to-emergency font-bold shadow-emergency hover:scale-105 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                <span className="hidden lg:inline">(402) 214-0800</span>
                <span className="lg:hidden">Call Now</span>
              </Button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-background/98 backdrop-blur-lg pt-24 pb-8 px-6 animate-fade-in">
          <div className="flex flex-col gap-6">
            <button
              onClick={() => scrollToSection("services")}
              className="text-2xl font-bold text-foreground hover:text-secondary transition-colors text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("why-us")}
              className="text-2xl font-bold text-foreground hover:text-secondary transition-colors text-left"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="text-2xl font-bold text-foreground hover:text-secondary transition-colors text-left"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-2xl font-bold text-foreground hover:text-secondary transition-colors text-left"
            >
              Contact
            </button>

            <div className="pt-6 border-t-2 border-border">
              <Button
                size="lg"
                onClick={() => window.location.href = 'tel:+14022140800'}
                className="w-full text-lg font-bold bg-gradient-to-r from-emergency to-emergency/90 hover:from-emergency/90 hover:to-emergency shadow-emergency"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (402) 214-0800
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
