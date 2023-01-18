import express from "express";
import { createClient, getAllClients, getClientById, deleteClient } from "../controllers/client.controller.js";


const router = express.Router();

router.post('/', createClient);
router.get('/', getAllClients);
router.get('/:id', getClientById);
router.delete('/:id', deleteClient);

export default router;