import express from 'express';
import { GenerateImage, GenerateImagesFromPack, TrainModel } from 'common/types';
import { prismaClient } from 'db';
import dotenv from 'dotenv'
import {PutObjectCommand, S3 , S3Client} from '@aws-sdk/client-s3'
import {createPresignedPost} from '@aws-sdk/s3-presigned-post'
import {FalAIModel} from './models/FalAIModel'
import {RequestIDArrayType} from '../../types'
import cors from 'cors'
import { authMiddleware } from './middleware';
dotenv.config()

const app = express();

app.use(cors())






const PORT = 8000;

const client = new S3Client({region : "ap-south-2",
    endpoint : process.env.ENDPOINT,
    credentials:{
        accessKeyId : process.env.S3_ACCESS_KEY as string,
        secretAccessKey : process.env.S3_SECRET_KEY as string
    }
})



const Bucket = process.env.BUCKET_NAME;
const Key = `models/${Date.now()}_${Math.random()}.zip`
const Fields = {
    acl: "bucket-owner-full-control",
  };


const falAimodel = new FalAIModel()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req: any, res: any) => {
    res.send("hello from server");
});



app.get('/pre-signed-url' , async(req , res)=>{

    const {url , fields}  = await createPresignedPost(client , {
        Bucket : Bucket as string,
        Key,
        Fields,
        Expires : 600
    })

    console.log("Presigned url : "  , url);
    console.log("Form Feilds :" , fields)

    res.status(201).json({
        url,
        Key
    })
    return;
})
//Routes

app.post('/ai/training',authMiddleware,async (req, res) => {
    const parsedResult = TrainModel.safeParse(req.body)

    if (!parsedResult.success) {
        res.status(401).json({
            success: false,
            message: "incorrect feilds"
        })

        return;
    }

    const {request_id , response_url}  = await falAimodel.trainModel(parsedResult.data.zipUrl ?? "" , parsedResult.data.name)



    const model = await prismaClient.model.create({
        data: {
            name: parsedResult.data.name,
            age: parsedResult.data.age,
            type: parsedResult.data.type,
            ethicity: parsedResult.data.ethnicity,
            eyecolor: parsedResult.data.eyecolor,
            bald: parsedResult.data.bald,
            zipUrl: parsedResult.data.zipUrl || "",
            userId: req.userId!,
            falAirequest_id: request_id
        }
    })

    res.status(201).json({
        message: `Model Created with id : ${model.id}`
    })
    return;
});

app.post('/ai/generate', authMiddleware , async (req: any, res: any) => {
    const parsedBody = GenerateImage.safeParse(req.body)
    if (!parsedBody.success) {
        res.status(401).json({
            success: false,
            message: "incorrect feilds"
        })

        return;
    }

    const my_model = await prismaClient.model.findFirst({
        where:{
            id : parsedBody.data.modelId,
            userId : req.userId
        }
    })

    const {request_id , response_url}  = await falAimodel.generateImages(parsedBody.data.prompt , my_model?.tensor!)


    const image = await prismaClient.outputImages.create({
        data: {
            modelId: parsedBody.data.modelId,
            prompt: parsedBody.data.prompt,
            userId: req.userId!,
            falAirequest_id : request_id
        }
    })

    res.status(201).json({
        message: `Image Created with id : ${image.id}`
    })
    return;

});

// app.get('/image', async(req : any, res : any) => {
//     const images = await prismaClient.outputImages.findMany({
//         where:{
//             status: 'Generated'
//         }
//     })

//     res.json({images : images})

//     return;

// });

app.post('/pack/generate',authMiddleware, async (req: any, res: any) => {
    const parsedBody = GenerateImagesFromPack.safeParse(req.body)

    if (!parsedBody.success) {
        res.status(401).json({
            success: false,
            message: "incorrect feilds"
        })

        return;
    }

    const prompts = await prismaClient.packPrompts.findMany({
        where: {
            PackId: parsedBody.data.packId
        }
    })

    let requestIds : RequestIDArrayType[] =[]
    prompts.forEach(async(prompt)=>{
        requestIds.push(await falAimodel.generateImages(prompt.name ,  parsedBody.data.modelId))
    })

    const images = await prismaClient.outputImages.createMany({
        data: prompts.map((prompt, index) => ({
            modelId: parsedBody.data.modelId,
            prompt: prompt.name,
            userId: req.userId!,
            imageUrl: "",
            requestIds : requestIds[index].request_id
        }))
    })

    res.json({
        message: `generated ${images.count} images`
    })




});

app.get('/pack/bulk', async (req: any, res: any) => {
    const Packs = await prismaClient.pack.findMany({})

    res.status(201).json({
        packs: Packs
    })
    return;
});

app.get('/images/bulk', async (req, res) => {
    const images = req.query.images as string[] 
    const limit = req.query.limit as string ?? "10"
    const offset = req.query.offset as string ?? "0"

    console.log(images)

    const ImageResult = await prismaClient.outputImages.findMany({
        where: ({
            id: { in: images }
        }),
        skip: parseInt(offset),
        take: parseInt(limit)
    })

    res.json({
        images : ImageResult
    })

    return;
})


app.post('/fal-ai/webhook/train' ,async(req , res)=>{
    console.log(req.body)
    const request_id = req.body.request_id as string;
    //TODO:Accept the Webhook and update the required model with the triggerWord and tensor(s)

    await prismaClient.model.updateMany({
        where:{
            falAirequest_id: request_id
        },
        data:{
            trainingStatus : "Generated",
            tensor : req.body.tensor_path
        }
    })

    res.status(201).json({
        message : 'Webhook received'
    })
})





app.post('/fal-ai/webhook/image' ,async(req , res)=>{
    console.log(req.body)
    const request_id  =req.body.request_id as string

    await prismaClient.outputImages.updateMany({
        where:{
            falAirequest_id : request_id
        },
        data:{
            status : "Generated",
            imageUrl : req.body.image_url
        }
    })
    

    res.status(201).json({
        message : 'Webhook received'
    })
})


app.get('/pack/collections' , async(req, res)=>{
    try {
        const Allpacks = await prismaClient.pack.findMany({})
        res.status(201).json({
            packs : Allpacks
        })
        return;
        
    } catch (error) {
        res.status(501).json({
            message : "Server error"
        })
        return
    }
})

app.get('/ai/models', authMiddleware, async(req, res)=>{
    try {
        const models = await prismaClient.model.findMany({
            where:{
                userId : req.userId
            }
        })
        
        let safeModel : any[] = []
        models.forEach((model)=>{
            const {tensor, falAirequest_id , zipUrl , ...newModel} = model
            safeModel.push(newModel)
        })


        res.status(201).json({
            models : safeModel
        })

        return;
    } catch (error) {
        res.status(501).json({
            message : "Server error"
        })
    }
})

app.get('/ai/images' , authMiddleware, async(req , res)=>{
    try {
        const myImages = await prismaClient.outputImages.findMany({
            where:{
                userId : req.userId,
                status : "Generated"
            },
            include:{
                model : true
            }
        })

        let refinedImages : any[] = []
        myImages.forEach((image)=>{
            const{falAirequest_id , status , model , ...refinedImage} = image
            refinedImages.push({
                ...refinedImage ,
                modelname: model.name
            })
        })

        
    
        res.status(201).json({images : refinedImages})
        return
    } catch (error) {
        console.log(error)
        res.status(501).json({message : "Sever error"})
    }
})

app.listen(PORT, () => {
    console.log("Server is running ");
});
