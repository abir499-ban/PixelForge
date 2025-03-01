import express from 'express';
import { TrainModel } from 'common/types';
import { prismaClient } from 'db';

const app = express();
const PORT = 8000;


app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.get('/', (req: any, res: any) => {
    res.send("hello from server");
});

//Routes

app.post('/ai/training', async(req, res) => {
    const parsedResult = TrainModel.safeParse(req.body)

    if(!parsedResult.success){
        res.status(401).json({
            success : false,
            message : "incorrect feilds"
        })

        return ;
    }

    const model = await prismaClient.model.create({
        data:{
            name : parsedResult.data.name,
            age : parsedResult.data.age,
            type : parsedResult.data.type,
            ethicity : parsedResult.data.ethnicity,
            eyecolor : parsedResult.data.eyecolor,
            bald : parsedResult.data.bald
        }
    })

    res.status(201).json({
        message : `Model Created with id : ${model.id}`
    })
    return;
    
});

app.post('/ai/generate', (req : any, res : any) => {
    
});

app.get('/image', (req : any, res : any) => {
    
});

app.post('/pack/generate', (req : any, res : any) => {
    
});

app.get('/pack/bulk', (req : any, res : any) => {
    
});



app.listen(PORT, () => {
    console.log("Server is running ");
});
