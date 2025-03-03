export abstract class BaseModel{
    constructor() {}

    abstract  generateImages(prompt: string, tensorPath: string): Promise<any>;

    abstract  trainModel(zipUrl: string, triggerWord: string) : Promise<any>;
}