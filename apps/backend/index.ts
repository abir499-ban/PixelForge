import express from 'express';
import { TrainModel } from 'common/types';
import { prismaClient } from 'db';

const app = express();
const PORT = 8000;

app.get('/', (req: any, res: any) => {
    res.send("hello from server");
});

//Routes

app.post('/ai/training', (req : any, res : any) => {
    
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
