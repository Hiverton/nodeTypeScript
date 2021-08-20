import {Request, Response} from "express";

const logMiddleware = (req: Request, res: Response, next: any) => {
    console.log('my middleware');
    next();
}

export default logMiddleware;