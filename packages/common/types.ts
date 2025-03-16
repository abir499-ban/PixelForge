import { z } from 'zod'

export const ModelGender = z.enum(['Male', 'Female', 'Other'])
export const ModelEthnicty = z.enum([
    'Black',
    'Asian_American',
    'East_Asian',
    'South_East_Asian',
    'South_Asian',
    "Middle_Eastern",
    'Pacific',
    'Hispanic'])
export const EyeColor = z.enum(['Brown', 'Blue', 'Hazel', 'Grey'])


export const TrainModel = z.object({
    name: z.string(),
    age: z.number(),
    type: ModelGender,
    ethnicity: ModelEthnicty,
    eyecolor: EyeColor,
    bald: z.boolean(),
   zipUrl : z.string().optional()
})

export const GenerateImage = z.object({
    prompt: z.string(),
    modelId: z.string(),
    num: z.number()
})

export const GenerateImagesFromPack = z.object({
    modelId: z.string(),
    packId: z.string()
})