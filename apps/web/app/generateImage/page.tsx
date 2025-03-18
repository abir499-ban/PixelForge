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
import { BACKEND_URL } from 'common/constants'
import { Butterfly_Kids } from 'next/font/google'
import { Button } from '@/components/ui/button'

const page = () => {
    const { getToken } = useAuth()
    const [modelId, setmodelId] = useState<string | null>(null)
    const [models, setmodels] = useState<ModelType[]>([{
        id: "31a37a28-d7cf-487e-9236-40cab29622d5",
        name: "Polo",
        age: 18,
        type: "Male",
        ethicity: "Pacific",
        eyecolor: "Hazel",
        bald: false,
        userId: "user_2u2CTyYmLqj0ORc8JbC4meJOKqI",
        triggerWord: null,
        trainingStatus: "Pending",
        createdAt: "2025-03-16T14:31:29.286Z",
        updatedAt: "2025-03-16T14:31:29.286Z"
    }])

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


    // useEffect(()=>{
    //     fetchModels()
    // }, [])
    return (
        <>
            <div className='flex flex-col items-center h-screen gap-3 mt-[140px] ml-[200px] mr-[200px]'>
                <h1 className='text-foreground font-medium text-3xl mb-4'>Enter your prompt and select one of your created model.</h1>
                <Textarea placeholder="Type your prompt here." />
                <Button disabled={modelId == null ? true : false}>Generate Image ✨</Button>
                <div className=' flex flex-col justify-center items-center gap-2 mt-6'>
                    {models.map((model, index) => (
                        <HoverCard key={index}>
                            <HoverCardTrigger className="flex flex-row gap-[100px] hover:cursor-pointer">
                                <span><Checkbox onClick={()=>{
                                    if(modelId) setmodelId(null)
                                    else setmodelId(model.id)
                                }}/></span>
                                <span>{index+1}</span>
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