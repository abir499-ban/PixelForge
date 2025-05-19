"use client"
import React, { useEffect, useState } from 'react'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { useAuth } from '@clerk/nextjs'
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import axios from 'axios'
import { BACKEND_URL } from '@/constants/constants'
import { Button } from '@/components/ui/button'

const page = () => {
    const { getToken } = useAuth()
    const [modelId, setmodelId] = useState<string | null>(null)
    const [models, setmodels] = useState<ModelType[]>([])
    const [prompt, setprompt] = useState<string>("")
    //demo data if useEffect not to be used
    // {
    //     id: "31a37a28-d7cf-487e-9236-40cab29622d5",
    //     name: "Polo",
    //     age: 18,
    //     type: "Male",
    //     ethicity: "Pacific",
    //     eyecolor: "Hazel",
    //     bald: false,
    //     userId: "user_2u2CTyYmLqj0ORc8JbC4meJOKqI",
    //     triggerWord: null,
    //     trainingStatus: "Pending",
    //     createdAt: "2025-03-16T14:31:29.286Z",
    //     updatedAt: "2025-03-16T14:31:29.286Z"
    // }

    const submitPrompt = async () => {
        const token = await getToken();
        const generateImageBody = {
            prompt:prompt,
            modelId : modelId
        }
        try {
            const res = await axios.post(`${BACKEND_URL}/ai/generate`,generateImageBody,{
                headers:{
                    authorization: `Bearer ${token}`
                }
            })
            console.log(res.data);
            alert("You will be notified when the Image is ready. It hardly takes two-three minutes")
        } catch (error) {
            console.log("Error occured " , error)
        }
    }

    const fetchModels = async () => {
        const token = await getToken()
        if (!token) {
            alert("Login First!!")
            return;
        }

        try {
            const res = await axios.get(`${BACKEND_URL}/ai/models`, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })

            setmodels(res.data.models)
            console.log(res.data.models)

        } catch (error) {
            console.log("Error occured ", error)
        }
    }


    useEffect(()=>{
        fetchModels()
    }, [])
    return (
        <>
            <div className='flex flex-col items-center h-full gap-3 mt-24 px-4 w-full max-w-4xl mx-auto mb-9'>
                <h1 className='text-3xl md:text-4xl font-bold mb-4'>Enter your prompt and select one of your created model.</h1>
                <Textarea onChange={(e) => {
                    setprompt(e.target.value)
                }} value={prompt} placeholder="Type your prompt here." />
                <Button disabled={modelId == null || prompt.length == 0 ? true : false} onClick={submitPrompt}>Generate Image ✨</Button>
                <div className=' flex flex-col justify-center items-center gap-2 mt-6'>
                    {models.map((model, index) => (
                        <HoverCard key={index}>
                            <HoverCardTrigger className="flex flex-col md:flex-row md:gap-12 gap-2 hover:cursor-pointer items-start md:items-center">
                                <span><Checkbox onClick={() => {
                                    if (modelId) setmodelId(null)
                                    else setmodelId(model.id)
                                }} /></span>
                                <span>{index + 1}</span>
                                <span>{model.name}</span>
                                <span>{model.trainingStatus}</span>
                            </HoverCardTrigger>

                            <HoverCardContent>
                                <p>Model Details</p>
                                <ul>
                                    <li className='text-sm'>Age : {model.age}</li>
                                    <li className='text-sm'>Gender : {model.type}</li>
                                    <li className='text-sm'>Ethnicity : {model.ethicity}</li>
                                    <li className='text-sm'>Eye Color : {model.eyecolor}</li>
                                </ul>
                            </HoverCardContent>
                        </HoverCard>

                    ))}
                </div>
            </div>
        </>
    )
}

export default page