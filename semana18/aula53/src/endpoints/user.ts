import { Router } from 'express'
import { getTokenData } from '../services/authenticator'
import { getUserById, deleteUser } from '../database/user'
import { ApiError } from '../utils/ApiError'
import { getAll } from '../database/user'

export const userRoute = Router()

userRoute.get("/all", async (req, res) => {

   const allUser = await getAll()

   if (!allUser.length) {
      res.send("Ainda não há usuários cadastrados")
   } else {
      res.send(allUser)
   }

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
