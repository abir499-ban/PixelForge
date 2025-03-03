import { BaseModel } from './BaseModel'
import { fal } from '@fal-ai/client'
import dotenv from 'dotenv'

dotenv.config()

export class FalAIModel extends BaseModel {
    constructor() {
        super()
    }

    async generateImages(prompt: string, tensorPath: string): Promise<any> {
        const result = await fal.subscribe("fal-ai/flux-lora", {
            input: {
                prompt: prompt,
                loras: [{ path: tensorPath, scale: 1 }]
            },
            logs: true,
            onQueueUpdate: (update) => {
                if (update.status === "IN_PROGRESS") {
                    update.logs.map((log) => log.message).forEach(console.log);
                }
            },
        });
        console.log(result.data);
        console.log(result.requestId);

        return result
    }

    async trainModel(zipUrl: string, triggerWord: string): Promise<any> {

        const { request_id , response_url} = await fal.queue.submit("fal-ai/flux-lora-fast-training", {
            input: {
                images_data_url: zipUrl,
                trigger_word : triggerWord
            },
            webhookUrl: `${process.env.BASE_WEBHOOK_URL}/fal-ai/webhook`,
        });

        return {request_id, response_url};
    }

}