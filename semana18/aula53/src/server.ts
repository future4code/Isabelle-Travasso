import express from 'express'
import cors from 'cors'
import { userRoute } from './endpoints/user'
import { loginRoute } from './endpoints/login'



export const app = express()

app.use(express.json())
app.use(cors())

app.use('/user', userRoute)
app.use(loginRoute)