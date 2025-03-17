"use client"
import { useEffect } from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main>
        <Hero />
        {/* <Features />
        <Gallery />
        <CallToAction /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;