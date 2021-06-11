import {Router} from 'express'
import { generatedId } from '../services/idGenerator'
import { generateToken, getTokenData } from '../services/authenticator'
import { registerUser, verifyEmail, getUserById } from '../database/user'

export const userRoute = Router()

userRoute.post("/signup", async (req, res) => {
    try {

        const { email, password } = req.body

        if (!email || email.indexOf("@") === -1) {
            throw new Error("Invalid email");
        }

        if (!password || password.length < 6) {
            throw new Error("Invalid password");
        }

        const userData = {
            email: email,
            password: password,
        };

        const id = generatedId();

        const user = await verifyEmail(userData.email);
  
        if (user.password !== userData.password) {
          throw new Error("Invalid password");
        }

        await registerUser(id, userData.email, userData.password);

        const token = generateToken({
            id,
        });

        res.status(200).send({
            token,
        });
    } catch (err) {
        res.status(400).send({
            message: err.message,
        });
    }
});

 
userRoute.get("/profile", async (req, res) => {
    try {
        
      const token = req.headers.authorization as string;
       
      const authenticationData = getTokenData(token);
  
      const user = await getUserById(authenticationData.id);
  
      res.status(200).send({
        id: user.id,
        email: user.email,
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });