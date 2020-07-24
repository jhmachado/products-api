import { Router, Request, Response } from "express";
import { ProductController } from "./product.controller";
import { ProductRepository } from "./product.repository";

export class ProductRouteServiceProvider {
    
    registerRoutes(): Router {
        const productController = new ProductController(new ProductRepository);
        const router = Router();

        router.get('/products', (request: Request, response: Response) => {
            return response.send(productController.queryProducts());
        });

        return router;
    }
}
