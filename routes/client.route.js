import express from "express";
import { createClient, getAllClients, getClientById, deleteClient, updateClient } from "../controllers/client.controller.js";


const clientRouter = express.Router();

clientRouter.post('/', createClient);
clientRouter.get('/', getAllClients);
clientRouter.get('/:id', getClientById);
clientRouter.delete('/:id', deleteClient);
clientRouter.put('/', updateClient);

export { clientRouter };