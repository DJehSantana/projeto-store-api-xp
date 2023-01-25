import express from 'express';
import cors from 'cors';

import { clientRouter } from './routes/client.route.js';
import { supplierRouter } from './routes/supplier.route.js';
import productsRouter from './routes/product.route.js';
import salesRouter from './routes/sale.route.js';
import dotenv from 'dotenv';
import { logger } from './enums/logger.js';

const app = express();
const PORT = 3000;

dotenv.config();

app.use(express.json());
app.use(cors());

app.use('/client', clientRouter);
app.use('/supplier', supplierRouter);
app.use('/product', productsRouter);
app.use('/sale', salesRouter);

app.use((error, req, res, next) => {
    logger.error(`${req.method} ${req.baseUrl} - ${error.message}`);
    res.status(400).json({
        error: error.message
    });
})

app.listen(PORT, () => {
    console.log('Server listening port: ' + PORT);
});