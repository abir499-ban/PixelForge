import { Response, Request, NextFunction } from "express";
import jwt,{JwtPayload} from "jsonwebtoken";


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

    try {

        const payload = jwt.verify(authToken, process.env.JWKS_AUTH_KEY!, {
            algorithms: ['RS256']
        }) as JwtPayload;
        req.user = payload
        console.log(payload);
        next();
    } catch (error) {
        res.status(401).json({ error: "Invalid authorization token" });
        return;
    }
}