import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../services/authenticator";
import { compareHash } from "../services/hashManager";

export default async function login(
   req: Request,
   res: Response
) {

   try {
      const { email, password } = req.body;
      if (!email) {
         throw new Error("Please fill email field")
      }

      if (!password) {
         throw new Error("Please fill password field")
      }

      const queryResult = await connection.raw(`  
         SELECT * FROM to_do_list_users
         WHERE email = "${email}";
      `)

      const user = queryResult[0][0];

      if (!user) {
         throw new Error("User not found")
      }

      const passwordIsCorrect: boolean = compareHash(password, user.password)

      if (!passwordIsCorrect) {
         throw new Error("Invalid Credentials")
      }

      const token: string = generateToken({
         id: user.id,
         role: user.role
      });

      res.status(200).send({ token });

   } catch (error) {
      res.status(400).send({ error: error.message });
   }
}