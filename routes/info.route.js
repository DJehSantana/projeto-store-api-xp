import express from "express";
import { createProductInfo, createProductReview, deleteProductInfo, deleteProductReview, getAllProductsInfo, getProductInfo, updateProductInfo } from "../controllers/productInfo.controller.js";

const infoRouter = express.Router();

infoRouter.get('/', getAllProductsInfo);
infoRouter.post('/', createProductInfo);
infoRouter.put('/', updateProductInfo);
infoRouter.post('/review', createProductReview);
infoRouter.get('/:id', getProductInfo);
infoRouter.delete('/:id', deleteProductInfo);
infoRouter.delete('/:id/review/:index', deleteProductReview);

export { infoRouter }