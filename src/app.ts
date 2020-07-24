import express, { Application, Request, Response, NextFunction } from 'express';
import LoggerMiddleware from './middleware/LoggerMiddleware';
import { ProductRouteServiceProvider } from './Modules/Product/product.routeserviceprovider';

const app: Application = express();

app.use(LoggerMiddleware.log);

const productRouteServiceProvider = new ProductRouteServiceProvider();
const productRoutes = productRouteServiceProvider.registerRoutes();
app.use(productRoutes);

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello');
});

app.listen(5000, () => console.log('Server running...'));
