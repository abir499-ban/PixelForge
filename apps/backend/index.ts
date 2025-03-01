import express from 'express';
import { GenerateImage, GenerateImagesFromPack, TrainModel } from 'common/types';
import { prismaClient } from 'db';

const app = express();
const PORT = 8000;
const demoUserID = "123jasb"

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req: any, res: any) => {
    res.send("hello from server");
});

//Routes

app.post('/ai/training', async (req, res) => {
    const parsedResult = TrainModel.safeParse(req.body)

    if (!parsedResult.success) {
        res.status(401).json({
            success: false,
            message: "incorrect feilds"
        })

        return;
    }
    const model = await prismaClient.model.create({
        data: {
            name: parsedResult.data.name,
            age: parsedResult.data.age,
            type: parsedResult.data.type,
            ethicity: parsedResult.data.ethnicity,
            eyecolor: parsedResult.data.eyecolor,
            bald: parsedResult.data.bald,
            userId: demoUserID
        }
    })

    res.status(201).json({
        message: `Model Created with id : ${model.id}`
    })
    return;

});

app.post('/ai/generate', async (req: any, res: any) => {
    const parsedBody = GenerateImage.safeParse(req.body)

    if (!parsedBody.success) {
        res.status(401).json({
            success: false,
            message: "incorrect feilds"
        })

        return;
    }

    const image = await prismaClient.outputImages.create({
        data: {
            modelId: parsedBody.data.modelId,
            prompt: parsedBody.data.prompt,
            userId: demoUserID,
            imageUrl: ""
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

app.post('/pack/generate', async (req: any, res: any) => {
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

    const images = await prismaClient.outputImages.createMany({
        data: prompts.map((prompt) => ({
            modelId: parsedBody.data.modelId,
            prompt: prompt.name,
            userId: demoUserID,
            imageUrl: ""
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



app.listen(PORT, () => {
    console.log("Server is running ");
});
