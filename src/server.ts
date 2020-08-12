import express, {Application, NextFunction, Request, Response} from 'express';
import LoggerMiddleware from './middleware/LoggerMiddleware';
import {ProductRouteServiceProvider} from './Modules/Product/product.routeserviceprovider';

const server: Application = express();

server.use(LoggerMiddleware.log);

const productRouteServiceProvider = new ProductRouteServiceProvider();
const productRoutes = productRouteServiceProvider.registerRoutes();
server.use(productRoutes);

server.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello');
});

export default server;
