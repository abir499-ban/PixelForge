import {z} from 'zod'
import {EyeColor, GenerateImage , GenerateImagesFromPack , ModelEthnicty, ModelGender, TrainModel} from './types'


export type TrainModelType = z.infer<typeof TrainModel>
export type ImageType  = z.infer<typeof GenerateImage>
export type ImagefromPackType = z.infer<typeof GenerateImagesFromPack>
export type ModelGenderType = z.infer<typeof ModelGender>
export type ModelEthnictyType = z.infer<typeof ModelEthnicty>
export type ModelEyeColorType = z.infer<typeof EyeColor>
