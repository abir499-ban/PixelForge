"use client"
import React, { useEffect, useState } from 'react'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
import {useAuth} from '@clerk/nextjs'
import Error from 'next/error'
import axios from 'axios'
import { BACKEND_URL } from 'common/constants'

const page = () => {
    const {getToken} = useAuth()
    const [models, setmodels] = useState<any[]>([])

    const fetchModels = async()=>{
        const token = await getToken()
        if(!token){
            alert("Login First!!")
            return;
        }

        try {
            const res = await axios.get(`${BACKEND_URL}/ai/models` , {
                headers:{
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
    <div>Models arrays length : {models.length}</div>
  )
}

export default page