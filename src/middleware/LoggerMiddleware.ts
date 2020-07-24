import { Request, Response, NextFunction } from "express";

class LoggerMiddleware {
    
    log(request: Request, response: Response, next: NextFunction): void {
        console.log(`${request.method} ${request.path}`);
        next();
    }
}

export default new LoggerMiddleware();
