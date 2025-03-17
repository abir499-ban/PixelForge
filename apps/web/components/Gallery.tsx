import { useEffect, useRef, useState } from "react";

// Mock data for the gallery
const galleryImages = [
  {
    before: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    after: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    prompt: "Professional headshot with soft lighting in a studio setting"
  },
  {
    before: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    after: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    prompt: "Cyberpunk character with neon lights and futuristic city background"
  },
  {
    before: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    after: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    prompt: "Fantasy character with medieval armor and mystical forest background"
  }
];

const GalleryItem = ({ item, index }: { item: typeof galleryImages[0], index: number }) => {
  const [loaded, setLoaded] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

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

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={itemRef}
      className="glass rounded-xl overflow-hidden opacity-0"
      style={{ animationDelay: `${0.2 * index}s` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className={`absolute inset-0 ${!loaded ? 'image-loading' : ''}`}>
          <img
            src={item.after}
            alt="AI generated image"
            className="w-full h-full object-cover transition-opacity duration-500"
            style={{ opacity: loaded ? 1 : 0 }}
            onLoad={() => setLoaded(true)}
          />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 glass p-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full overflow-hidden shrink-0">
              <img src={item.before} alt="Original" className="w-full h-full object-cover" />
            </div>
            <div className="text-sm font-medium truncate">
              "{item.prompt}"
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  const titleRef = useRef<HTMLDivElement>(null);

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

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <section id="gallery" className="section-padding">
      <div className="page-container">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16 opacity-0">
          <div className="inline-block glass rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            Showcase
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            See What Others Have Created
          </h2>
          <p className="text-lg text-muted-foreground">
            Browse through our gallery of AI-generated images to see the amazing transformations our users have created.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((item, index) => (
            <GalleryItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
