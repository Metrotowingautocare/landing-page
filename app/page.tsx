'use client';

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Reviews } from "@/components/Reviews";
import { Contact } from "@/components/Contact";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Reviews />
      <Contact />
      <Footer />
      <FloatingCTA />
    </div>
  );
}