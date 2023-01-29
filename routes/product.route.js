import express from "express";

import { createProduct, getAllProducts, getProductById, deleteProduct, updateProduct, createProductInfo, updateProductInfo, getProductInfo, getAllProductsInfo, createProductReview, deleteProductReview, deleteProductInfo } from "../controllers/product.controller.js";


const productRouter = express.Router();

productRouter.post('/', createProduct);
productRouter.get('/', getAllProducts);
productRouter.get('/info', getAllProductsInfo);
productRouter.get('/:id', getProductById);
productRouter.delete('/:id', deleteProduct);
productRouter.put('/', updateProduct);
productRouter.post('/info', createProductInfo);
productRouter.put('/info', updateProductInfo);
productRouter.get('/info/:id', getProductInfo);
productRouter.delete('/info/:id', deleteProductInfo);
productRouter.post('/review', createProductReview);
productRouter.delete('/:id/review/:index', deleteProductReview);


export { productRouter };