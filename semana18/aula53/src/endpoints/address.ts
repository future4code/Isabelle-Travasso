import { Router } from 'express'
import { Address } from "../types/address";
import { getAddressCep } from "../services/getAddressCep";
import { getAllAddress } from '../database/address'

export const addressRoute = Router()

addressRoute.get("/all", async (req, res) => {

    const allAddress = await getAllAddress()

    if (!allAddress.length) {
        res.send("Ainda não há usuários cadastrados")
    } else {
        res.send(allAddress)
    }

})

addressRoute.get(":cep", async (req, res) => {
    const { cep } = req.params;
    if (isNaN(Number(cep)) || cep.includes("-")) {
        throw new Error("Por favor, digite apenas números");
    }

    const address = getAddressCep(cep);

    res.status(200).send(address);

})

