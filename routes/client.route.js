import express from "express";
import { createClient, getAllClients, getClientById } from "../controllers/client.controller.js";

const router = express.Router();

router.post('/', createClient);
router.get('/', getAllClients);
router.get('/:id', getClientById);

export default router;