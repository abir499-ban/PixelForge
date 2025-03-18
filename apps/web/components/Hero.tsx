import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.classList.add('animate-fade-up');
    }
  }, []);

  return (
    <section className="ml-10 min-h-screen pt-24 flex items-center section-padding relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-blue-50 opacity-70"></div>
      
      <div className="page-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 max-w-xl">
          <div className="inline-block glass rounded-full px-4 py-1.5 text-sm font-medium mb-2 animate-fade-in">
            AI-Powered Image Generation
          </div>
          
          <h1 
            ref={headingRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Transform Your Face Into <span className="text-pink-600">Anything</span> Imaginable
          </h1>
          
          <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Upload your photos, train your personal AI model, and generate stunning images of yourself in any style, scene, or concept.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="group">
              Get Started for Free
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              View Examples
            </Button>
          </div>
        </div>
        
        <div className="relative">
          <div className={`rounded-xl overflow-hidden ${!imageLoaded ? 'image-loading' : ''} aspect-[4/3] animate-fade-in`} style={{ animationDelay: '0.3s' }}>
            <img
              src="/1687063501918_800x800.webp"
              alt="AI generated face transformations"
              className="w-full h-full object-cover transition-opacity duration-700"
              // style={{ opacity: imageLoaded ? 1 : 0 }}
              // onLoad={() => setImageLoaded(true)}
            />
          </div>
          
          <div className="absolute -bottom-6 -left-6 glass rounded-lg p-4 max-w-xs animate-fade-up" style={{ animationDelay: '0.7s' }}>
            <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
              <div className="bg-accent h-1.5 rounded-full w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
