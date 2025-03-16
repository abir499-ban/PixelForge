import { Response, Request, NextFunction } from "express";
import jwt,{JwtPayload} from "jsonwebtoken";


declare global {
    namespace Express {
        interface Request {
            user?: JwtPayload,
            userId?:string
        }
    }
}



export async function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const headers = req.headers?.authorization;
    if (!headers) {
        res.status(401).json({ error: "No authorization header" });
        return;
    }
    
    const authToken = headers.split(' ')[1];
    if(!authToken){
        res.status(401).json({ error: "No authorization token" });
        return;
    }

    //console.log(authToken)

    try {
        const payload = jwt.decode(authToken) as JwtPayload;
        req.user = payload;
        req.userId = payload.sub
        console.log(payload.sub);
        next();
    } catch (error) {
        res.status(401).json({ error: "Invalid authorization token" });
        return;
    }
}