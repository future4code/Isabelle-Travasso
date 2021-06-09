import { Router } from 'express'
import { getTokenData } from '../services/authenticator'
import { getAddress } from '../services/getAddress'
import { getUserById, deleteUser } from '../database/user'
import { Address } from '../types/address'
import { ApiError } from '../utils/ApiError'

export const userRoute = Router()

userRoute.post("/address", async (req, res) => {
   const { cep } = req.params

   if (isNaN(Number(cep)) || cep.includes("-")) {
      throw ApiError.wrongParams("Por favor, digite apenas números, sem '-' ");
   }

   const address: Address = getAddress(cep)

   res.status(200).send({ address });

})

userRoute.get("/:id", async (req, res) => {
   const token = req.headers.authorization as string;

   const authenticationData = getTokenData(token);

   const user = await getUserById(authenticationData.id);

   if (!user) {
      throw ApiError.wrongParams("Usuário não encontrado");
   }

   if (authenticationData.role !== "NORMAL") {
      throw ApiError.wrongParams("Ops, apenas usuários 'NORMAL' podem realizar essa tarefa");
   }

   res.status(200).send({
      id: user.id,
      email: user.email,
      role: authenticationData.role
   });

});

userRoute.delete("/:id", async (req, res) => {

   const { id } = req.params

   const token = req.headers.authorization as string;

   const authenticationData = getTokenData(token);

   const user = await getUserById(authenticationData.id);

   if (!user) {
      throw ApiError.wrongParams("Usuário não encontrado");
   }

   if (authenticationData.role !== "ADMIN") {
      throw ApiError.wrongParams("Ops, apenas usuários 'ADMIN' podem realizar essa tarefa");
   }

   deleteUser(id)

   res.status(200).send({ message: 'Usuário deletado!' });

});
