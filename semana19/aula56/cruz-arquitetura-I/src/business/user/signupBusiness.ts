import { hash } from "../../services/hashManager";
import { insertUser } from "../../data/user/insertUser";
import { toUserRoles, userData } from "../../model/user";
import { generateToken } from "../../services/authenticator";
import { generateId } from "../../services/idGenerator";

export const signupBusiness = async (
   userData: userData
):Promise<string> => {
   if (
      !userData.name ||
      !userData.nickname ||
      !userData.email ||
      !userData.password ||
      !userData.role
   ) {
      throw new Error('Preencha os campos "name","nickname", "email" e "password"')
   }

   const cypherPassword = await hash(userData.password);

   const newUser = {
      name: userData.name, 
      nickname: userData.nickname, 
      email: userData.email, 
      password: cypherPassword,
      role: toUserRoles(userData.role),
      id: generateId()
   }

   await insertUser(newUser)

   const token: string = generateToken({
      id: newUser.id,
      role: newUser.role
   })

   return token

}
