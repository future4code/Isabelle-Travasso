import * as jwt from "jsonwebtoken"
import { authenticationData } from "../models/userTypes"

export function generateToken(
   payload: authenticationData
): string {
   return jwt.sign(
      payload,
      process.env.JWT_KEY as string,
      {
         expiresIn: "24min"
      }
   )
}

export function getTokenData(
   token: string
): authenticationData {
   return jwt.verify(
      token,
      process.env.JWT_KEY as string
   ) as authenticationData
}