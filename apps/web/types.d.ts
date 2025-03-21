declare type PackArrayType={
    id : String,
    name : String,
    coverPicUrl : String
}

declare type ModelType={
    id : string,
    name : string,
    age : number,
    type : "Male" | "Female" | "Other",
    ethicity : string,
    eyecolor : string,
    bald : boolean,
    userId : string,
    triggerWord : string | null,
    trainingStatus : "Pending" | "Generated" | "Failed",
    createdAt : string,
    updatedAt : string,
}

declare type GeneratedImagesType = {
    id : string,
    imageUrl : string,
    prompt : string,
    createdAt : string,
    updatedAt : string,
    modelId : string,
    userId : string,
    modelname : string
}