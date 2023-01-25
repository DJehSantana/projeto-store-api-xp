import express from "express";

import { createSale, getAllSales, getSaleById, deleteSale, updateSale } from "../controllers/sale.controller.js";

const saleRouter = express.Router();

saleRouter.post('/', createSale);
saleRouter.get('/', getAllSales);
saleRouter.get('/:id', getSaleById);
saleRouter.delete('/:id', deleteSale);
saleRouter.put('/', updateSale);

export { saleRouter };