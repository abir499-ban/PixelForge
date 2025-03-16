"use client"

import * as React from "react"
import {useState} from 'react'

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import FileUploadModal from "@/components/ui/fileuploadmodal"
import { Switch } from '@/components/ui/switch'
import { UploadIcon } from "lucide-react"
import {TrainModelType , ImagefromPackType , ImageType, ModelGenderType , ModelEthnictyType , ModelEyeColorType} from 'common/inferedTypes'
import axios from "axios"
import { BACKEND_URL } from "common/constants"
import {useRouter} from 'next/navigation'
import {useAuth} from '@clerk/nextjs'


const CardWithForm = () => {
    const router = useRouter()
    const[zipUrl , setzipUrl] = React.useState<string>("")
    const [name, setname] = useState<string>("")
    const [age, setage] = useState<number>(0)
    const [gender, setgender] = useState<ModelGenderType>('Male')
    const [ethnicity, setethnicity] = useState<ModelEthnictyType>('Black')
    const [eyeColor, seteyeColor] = useState<ModelEyeColorType>('Brown')
    const [bald, setbald] = useState<boolean>(false)

    const {getToken}  = useAuth()

    const createModel = async() =>{
        const model : TrainModelType = {
            name: name,
            age: age,
            type : gender, 
            ethnicity: ethnicity , 
            eyecolor : eyeColor , 
            bald: bald,
            zipUrl : zipUrl
        }

        try {
            const token = await getToken();
            const res = await axios.post(`${BACKEND_URL}/ai/training` , model , {
                headers:{
                    authorization : `Bearer ${token}`
                }
            });
            console.log(res.data)
            router.push('/')
        } catch (error) {
            console.error("Some error occured")
        }


    }
    

    return (
        <div className="flex flex-col items-center justify-center mt-10">
            <Card className="w-[500px]">
                <CardHeader>
                    <CardTitle className="font-serif text-2xl">Create Model</CardTitle>
                    <CardDescription>Create and Register Model in just one click</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Model Name</Label>
                                <Input id="name" placeholder="Name of your model" value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    setname(e.target.value)
                                }}/>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Enter Age</Label>
                                <Input id="name" placeholder="Age of Model" type="number" 
                                value={age} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    setage(parseInt(e.target.value))
                                }}/>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="framework">Gender</Label>
                                <Select onValueChange={(value) => setgender(value as ModelGenderType)}>
                                    <SelectTrigger id="framework">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="Male">Male</SelectItem>
                                        <SelectItem value="Female">Female</SelectItem>
                                        <SelectItem value="Other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="framework">Ethnicity</Label>
                                <Select onValueChange={(value)=> setethnicity(value as ModelEthnictyType)}>
                                    <SelectTrigger id="framework">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="black">Black</SelectItem>
                                        <SelectItem value="asian_american">Asian American</SelectItem>
                                        <SelectItem value="east_asian">East Asian</SelectItem>
                                        <SelectItem value="south_east_asian">South East Asian</SelectItem>
                                        <SelectItem value="south_asian">South Asian</SelectItem>
                                        <SelectItem value="middle_eastern">Middle Eastern</SelectItem>
                                        <SelectItem value="pacific">Pacific</SelectItem>
                                        <SelectItem value="hispanic">Hispanic</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="framework">Eye Color</Label>
                                <Select onValueChange={(value)=> seteyeColor(value as ModelEyeColorType)}>
                                    <SelectTrigger id="framework">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="brown">Brown</SelectItem>
                                        <SelectItem value="blue">Blue</SelectItem>
                                        <SelectItem value="hazel">Hazel</SelectItem>
                                        <SelectItem value="grey">Grey</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex iflex-col space-y-1.5">
                                <Switch checked={bald} onCheckedChange={(e) => setbald(!bald)}  className="cursor-pointer"/>
                                <Label className="ml-2">Bald</Label>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <FileUploadModal onUploadDone={(zipUrl)=>{
                                    setzipUrl(zipUrl)
                                }}/>
                            </div>

                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button disabled={!name || !age || !gender || !ethnicity || !eyeColor} onClick={createModel}>Create Model</Button>
                </CardFooter>
            </Card>

        </div>
    )
}
export default CardWithForm