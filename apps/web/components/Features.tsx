import { Camera, Sparkles, ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const Features = () => {
  const featureRefs = useRef<Array<HTMLDivElement | null>>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      featureRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const features = [
    {
      icon: Camera,
      title: "Personal Model Training",
      description: "Upload 10-20 photos of your face and our AI will create a custom model that captures your unique features.",
    },
    {
      icon: Sparkles,
      title: "Creative Prompt Generation",
      description: "Transform yourself into any character, style, or scene with simple text prompts that bring your imagination to life.",
    },
    {
      icon: ArrowRight,
      title: "Instant High-Quality Results",
      description: "Get professional-grade images in seconds with our state-of-the-art AI technology that preserves your likeness.",
    },
  ];

  return (
    <section id="features" className="section-padding relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-50 via-white to-blue-50 opacity-70"></div>
      
      <div className="page-container">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-up">
          <div className="inline-block glass rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            Powerful Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transform Your Photos With Advanced AI
          </h2>
          <p className="text-lg text-muted-foreground">
            Our platform combines cutting-edge AI training with intuitive tools to help you create stunning, personalized images.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el: HTMLDivElement | null) => {
                featureRefs.current[index] = el;
              }}
              className="glass p-8 rounded-xl opacity-0"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="bg-accent/10 rounded-lg w-12 h-12 flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center opacity-0 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <Button size="lg">
            Start Creating Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;