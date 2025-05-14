import { BaseModel } from './BaseModel'
import { fal } from  '@fal-ai/client'
import dotenv from 'dotenv'

dotenv.config()

fal.config({
    credentials: process.env.FAL_KEY
  });

export class FalAIModel extends BaseModel {
    constructor() {
        super()
    }

    async generateImages(prompt: string, tensorPath: string): Promise<any> {
        const {request_id , response_url} = await fal.queue.submit("fal-ai/flux-lora", {
            input: {
                prompt: prompt,
                loras: [{ path: tensorPath, scale: 1 }]
            },
            webhookUrl : `${process.env.BASE_WEBHOOK_URL}/fal-ai/webhook/image`
        });

        return {request_id , response_url}
    }

    async trainModel(zipUrl: string, triggerWord: string): Promise<any> {

        const { request_id , response_url} = await fal.queue.submit("fal-ai/flux-lora-fast-training", {
            input: {
                images_data_url: zipUrl,
                trigger_word : triggerWord
            },
            webhookUrl: `${process.env.BASE_WEBHOOK_URL}/fal-ai/webhook/train`,
        });

        return {request_id, response_url};
    }

}