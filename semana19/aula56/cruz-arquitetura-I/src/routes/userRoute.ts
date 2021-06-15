import { Router } from 'express'
import { login } from '../controller/user/login'
import { signup } from '../controller/user/signup'

export const userRouter = Router()

userRouter.post('/singup', signup)
userRouter.post('/login', login)