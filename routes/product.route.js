import express from "express";

import { createProduct, getAllProducts, getProductById, deleteProduct, updateProduct } from "../controllers/product.controller.js";


const productRouter = express.Router();

productRouter.post('/', createProduct);
productRouter.get('/', getAllProducts);
productRouter.get('/:id', getProductById);
productRouter.delete('/:id', deleteProduct);
productRouter.put('/', updateProduct);

export { productRouter };