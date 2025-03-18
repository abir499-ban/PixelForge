"use client"
import { Gallery4, Gallery4Item, Gallery4Props } from "@/components/blocks/gallery4"
import axios from "axios";
import { BACKEND_URL } from "common/constants";
import { useEffect, useState } from "react";


const Gallery4Demo = () => {

    const [packs, setPacks] = useState<Gallery4Item[]>([{
        id: "",
        name: "",
        coverPicUrl: ""
    }]);

    useEffect(() => {
        const fetchPacks = async () => {
            const res = await axios.get(`${BACKEND_URL}/pack/collections`);
            const packs : Gallery4Item[] = res.data.packs;
            setPacks(packs)
        }
        fetchPacks()
    },[])
  return <Gallery4 title="Generate Images from Pre defined Packs" description="This feature allows users to generate high-quality images using predefined image packs. Each pack contains curated assets, themes, and styles" items={packs} />;
}

export default Gallery4Demo;
