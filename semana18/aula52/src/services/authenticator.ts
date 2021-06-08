import * as jwt from "jsonwebtoken";
import { config } from "dotenv"
import { USER_ROLES } from "../types";

config()

export type authenticationData = {
   id: string
   role: USER_ROLES
};

export function generateToken(payload: authenticationData): string {

   return jwt.sign(
      payload,
      process.env.JWT_KEY!,
      {
         expiresIn: "12h"
      });
}

export function getTokenData(token: string): authenticationData {

   const result: authenticationData = jwt.verify(
      token,
      process.env.JWT_KEY!
   ) as authenticationData;

   return result;
}