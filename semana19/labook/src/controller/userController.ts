import { Request, Response } from "express";
import { SignupInputDTO, LoginInputDTO } from "../data/model/userModel";
import { UserBusiness } from "../business/UserBusiness"

export class UserController extends UserBusiness {

    signup = async (
        req: Request, res: Response
    ): Promise<void> => {

        try {
            const { name, email, password } = req.body

            const input: SignupInputDTO = {
                name: name,
                email: email,
                password: password
            }

            const token: string = await UserBusiness.signupBusiness(input);

            res
                .status(201)
                .send({ message: "User created", token })

        } catch (err) {
            res
                .status(400)
                .send({ message: err.sqlMessage || err.message })
        }

    }

    login = async (
        req: Request, res: Response
    ): Promise<void> => {
        try {
            const { email, password } = req.body

            const input: LoginInputDTO = {
                email: email,
                password: password
            }

            const token = await UserBusiness.loginBusiness(input);

            res
                .status(200)
                .send({ message: "Success!", token })

        } catch (err) {
            res
                .status(400)
                .send({ message: err.sqlMessage || err.message })
        }
    }
}

