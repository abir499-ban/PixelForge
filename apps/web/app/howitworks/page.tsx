"use client"
import { useEffect } from "react";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Upload, Cpu, Sparkles } from "lucide-react";

const HowItWorks = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen ml-11">
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-secondary/30">
          <div className="page-container">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-up">
              <div className="inline-block glass rounded-full px-4 py-1.5 text-sm font-medium mb-4 text-black">
                <p>How <span className="text-pink-700">Pixel Forge</span> Works</p>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Your Journey to AI-Generated Images
              </h1>
              <p className="text-lg text-muted-foreground">
                Discover how the power of Fal.ai's model training transforms your photos into stunning artistic creations in just a few simple steps.
              </p>
            </div>
          </div>
        </section>

        {/* Step by Step Process */}
        <section className="section-padding">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
              <div className="space-y-6">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-accent/10 text-accent">
                  <Upload className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold">1. Create a Model</h2>
                <p className="text-lg text-muted-foreground">
                  Create a Model your Own, by giving it certain traits and features like Name, age, gender, ethnicity, and upload some photos on which it will be trained.
                </p>
                <div className="pt-4">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-accent">•</span>
                      <span>Create your Custom, own imaginable model</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-accent">•</span>
                      <span>Specify the traits of the Model like Name, age, gender, ethnicity, eye color and baldness</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-accent">•</span>
                      <span>Upload 2-3 images of the human face on which the Model will be trained</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg h-[400px]">
                <img
                  src="https://rszr.getimg.ai/resize?url=https%3A%2F%2Fimages.ctfassets.net%2Fbuwmyl9a9d78%2F2nHcQaXGHdoPX0qMgOKOq6%2Fcc495c0b08f67b63ca8b3c94b2741237%2Fimg-ym9CsVkIO6aSX1a69G1yN.jpeg&type=webp&width=1920&speed=5" 
                  alt="Upload photos process"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 lg:grid-flow-col lg:grid-cols-2">
              <div className="rounded-xl overflow-hidden shadow-lg h-[400px] order-2 lg:order-1">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4D10AQEHVRi-hSkAtg/image-shrink_800/image-shrink_800/0/1727256839227?e=2147483647&v=beta&t=3K6TMbm_iLffuznEKNsRAWbb8I650Qnwr7vusXxR3Z8" 
                  alt="AI model training"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-accent/10 text-accent">
                  <Cpu className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold">2. Model Training</h2>
                <p className="text-lg text-muted-foreground">
                  The process of training of the model with the cutsom charateristics with the uploaded photos generally takes around 20 minutes. One the training is done on the Fal.ai platform, it hts our servers via the web hook, and populates the created model's tensor path.
                </p>
                <div className="pt-4">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-accent">•</span>
                      <span>Model Training is outsourced to Fal.ai</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-accent">•</span>
                      <span>Every registered model has a request_id provided by the Fal.ai's webhook, which later populates the matching model with tensorpath.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-accent">•</span>
                      <span>Receive notifications when your model is ready</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-accent/10 text-accent">
                  <Sparkles className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold">3. Generate & Share</h2>
                <p className="text-lg text-muted-foreground">
                  Once your model is trained, you will get the model_id, and you can use it to get its tensorpath, then simply enter text prompts to create stunning AI-generated images featuring your likeness. Download, share, and amaze your friends and followers.
                </p>
                <div className="pt-4">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-accent">•</span>
                      <span>Use descriptive prompts like "astronaut in space" or "renaissance painting"</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-accent">•</span>
                      <span>Generate a number of images.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-accent">•</span>
                      <span>Easily share to social media or download high-resolution files</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg h-[400px]">
                <img
                  src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0dabb3e7-fddd-4767-961e-0afea2143eac/dfavkzo-62830d2f-0242-4ab5-8a9b-dfa6c7821ee3.jpg/v1/fill/w_1175,h_680,q_70,strp/ai_generated_artwork__cyberpunk_city___by_eoin127_dfavkzo-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzA0IiwicGF0aCI6IlwvZlwvMGRhYmIzZTctZmRkZC00NzY3LTk2MWUtMGFmZWEyMTQzZWFjXC9kZmF2a3pvLTYyODMwZDJmLTAyNDItNGFiNS04YTliLWRmYTZjNzgyMWVlMy5qcGciLCJ3aWR0aCI6Ijw9MTIxNiJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.rZ5y0d_7wmwiFaqzEkmzAIsfLg9islv8nJPjxmPbwYI" 
                  alt="Generated AI images"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-secondary/30">
          <div className="page-container mt-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">
                Get answers to common questions about our AI image generation process.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <div className="glass p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">How many photos do I need to upload?</h3>
                <p className="text-muted-foreground">
                  We recommend uploading 2-4 high-quality photos for best results. Include different angles, expressions, and lighting conditions to help the AI better understand your features.
                </p>
              </div>

              <div className="glass p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">How long does model training take?</h3>
                <p className="text-muted-foreground">
                  Typically, the model training on Fal.ai takes 20 minutes after uploading your photos and other model traits. You'll receive a notification when it's ready to use.
                </p>
              </div>

              <div className="glass p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Can I generate any type of image?</h3>
                <p className="text-muted-foreground">
                  You can create a wide variety of images using text prompts. Our system follows content guidelines to ensure appropriate use, but you can generate yourself as anything from an astronaut to a renaissance painting.
                </p>
              </div>

              <div className="glass p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Who owns the generated images?</h3>
                <p className="text-muted-foreground">
                  You retain ownership of all images generated using your AI model. You're free to use them personally or commercially based on your subscription plan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section-padding">
          <div className="page-container text-center">
            <div className="glass rounded-2xl p-12 md:p-16 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Create Your Own AI Art?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of users who are already transforming their photos into stunning AI-generated artwork.
              </p>
              <Button size="lg" className="bg-black hover:cursor-pointer">
                <a href="http://localhost:3000/train">Get Started Now</a>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
