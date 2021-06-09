
import { compareHash } from "../services/hashManager";
import { Router } from 'express'
import { generateId } from '../services/idGenerator'
import { loginValidator } from '../utils/valitador'
import { generateHash } from '../services/hashManager'
import { generateToken } from '../services/authenticator'
import { getAddress } from '../services/getAddress'
import { ApiError } from '../utils/ApiError'
import { userValidator, addressValidator } from '../utils/valitador'
import { UserAddress } from '../types/address'
import { authenticationData } from "../types/token";
export const loginRoute = Router()

loginRoute.post("signup", async (req, res) => {
   const userCheck = userValidator(req.body)
   const addressCheck = addressValidator(req.body)
   const id = generateId();
   const addressId: string = generateId()

   const generatedHash = generateHash(userCheck.password)

   const dataCep: UserAddress = getAddress(req.body.cep)

   const userData = {
      id,
      ...userCheck,
      generatedHash
   };

   const userAddress = {
      addressId,
      ...dataCep,


   }

   const userCreated = createUser(userData)

   if (!userCreated) throw ApiError.internal()

   const tokenData: authenticationData = {
      id: userData.id,
      role: userData.role
   }

   const token = generateToken( tokenData )

   res.status(200).send({
      message: "Usuário cadastrado com sucesso",
      token,
      userData
   });
});

loginRoute.post("login", async (req, res) => {
   const loginCheck = loginValidator(req.body)

   const userRegistered = verifyEmail(loginCheck.email)

    if (!userRegistered) {
        throw ApiError.wrongParams("Usuário não encontrado")
    }
   
   const passwordIsCorrect: boolean = compareHash(loginCheck.password, userRegistered.password)

   if (!passwordIsCorrect) {
      throw new Error("Senha inválida")
   }

   const tokenData: authenticationData = {
      id: userRegistered.id,
      role: userRegistered.role
   }

   const token = generateToken( tokenData )

   res.status(200).send({ token });

})
