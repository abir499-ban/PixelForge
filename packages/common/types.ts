import { z } from 'zod'

export const TrainModel = z.object({
    name: z.string(),
    age: z.number(),
    type: z.enum(['Male', 'Female', 'Other']),
    ethnicity: z.enum([
        'Black',
        'Asian_American',
        'East_Asian',
        'South_East_Asian',
        'South_Asian',
        "Middle_Eastern",
        'Pacific',
        'Hispanic']),
    eyecolor: z.enum(['Brown', 'Blue', 'Hazel', 'Grey']),
    bald: z.boolean(),
    images: z.array(z.string())
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