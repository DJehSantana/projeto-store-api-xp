import express from "express";

import { createProduct, getAllProducts, getProductById, deleteProduct, updateProduct } from "../controllers/product.controller.js";
import { infoRouter } from "./info.route.js";

const productRouter = express.Router();

productRouter.post('/', createProduct);
productRouter.get('/', getAllProducts);
productRouter.put('/', updateProduct);
productRouter.use('/info', infoRouter);
productRouter.get('/:id', getProductById);
productRouter.delete('/:id', deleteProduct);

export { productRouter };