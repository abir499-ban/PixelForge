"use client"
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Share2 } from "lucide-react";
import { useAuth } from '@clerk/nextjs'
import axios from "axios";
import { BACKEND_URL } from "common/constants";
// Mock data for generated images



const GeneratedImages = () => {

  const { getToken } = useAuth()

  const [images, setimages] = useState<GeneratedImagesType[]>([])

  const fetchImages = async () => {
    const token = await getToken()
    //console.log(token)
    const res = await axios.get(`${BACKEND_URL}/ai/images`, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    console.log(res.data?.images)
    setimages(res.data.images)

  }
  useEffect(() => {
    fetchImages()
  }, [])
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">My Generated Images</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse through all the AI-generated images based on your Trained models.
              Download your favorites or share them with others.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};


const ImageCard = ({ image }: { image: GeneratedImagesType }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <Card className="overflow-hidden  hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden">
        <div className={`absolute inset-0`}></div>
        <img
          src={image.imageUrl}
          alt={image.prompt}
          className="w-full h-full"
          style={{ opacity: isLoaded ? 1 : 0 }}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      <CardContent className="p-4">
        <div className="mb-3">
          <div className="flex flex-row justify-between">
            <p className="text-sm text-muted-foreground mb-1">
              {formatDate(image.createdAt)}
            </p>
            <p className="text-sm text-muted-foreground mb-1">
              Trained on {image.modelname}
            </p>
          </div>
          <p className="line-clamp-2 h-10 text-sm font-medium">
            "{image.prompt}"
          </p>
        </div>
        <div className="flex justify-between mt-2">
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Download size={16} />
            <span className="sr-only md:not-sr-only">Download</span>
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Share2 size={16} />
            <span className="sr-only md:not-sr-only">Share</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default GeneratedImages;
