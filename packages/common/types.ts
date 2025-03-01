import {z} from 'zod'

export const TrainModel = z.object({
    name : z.string(),
    age : z.number(),
    type: z.enum(['Male' , 'Female' , 'Other']),
    ethnicity : z.enum(['Black' , 'Asian American', 'East Asian' , 'South East Asian' , 'South Asian' , "Middle Eastern" , 'Pacific' , 'Hispanic']),
    eyecolor : z.enum(['Brown' , 'Blue' , 'Hazel' , 'Grey']),
    bald : z.boolean(),
    images : z.array(z.string())
})

export const  GenerateImage = z.object({
    prompt : z.string(),
    modelId : z.string(),
    num : z.number()
})

export const GeneratePack = z.object({
    modelId : z.string(),
    packId : z.string()
})