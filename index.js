import express from 'express';
import cors from 'cors';

import { clientRouter } from './routes/client.route.js';
import { supplierRouter } from './routes/supplier.route.js';
import { productRouter } from './routes/product.route.js';
import { saleRouter } from './routes/sale.route.js';
import dotenv from 'dotenv';
import { logger } from './enums/logger.js';
//import { infoRouter } from './routes/info.route.js';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(cors());

app.use('/client', clientRouter);
app.use('/supplier', supplierRouter);
app.use('/product', productRouter);
//app.use('/product/info', infoRouter);
app.use('/sale', saleRouter);

app.use((error, req, res, next) => {
    logger.error(`${req.method} ${req.baseUrl} - ${error.message}`);
    res.status(400).json({
        error: error.message
    });
});

app.listen(PORT, () => {
    console.log('Server listening port: ' + PORT);
});