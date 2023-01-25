import express from "express";
import { createSuplier, getAllSupliers, getSuplierById, deleteSuplier, updateSuplier } from '../controllers/suplier.controller.js';

const supplierRouter = express.Router();

supplierRouter.post('/', createSuplier);
supplierRouter.get('/', getAllSupliers);
supplierRouter.get('/:id', getSuplierById);
supplierRouter.delete('/:id', deleteSuplier);
supplierRouter.put('/', updateSuplier);


export { supplierRouter };