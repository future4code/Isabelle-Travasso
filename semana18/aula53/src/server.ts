import express from 'express'
import cors from 'cors'
import { userRoute } from './endpoints/user'
import { addressRoute } from './endpoints/address'
import { loginRoute } from './endpoints/login'



export const app = express()

app.use(express.json())
app.use(cors())

app.use('/user', userRoute)
app.use(loginRoute)
app.use('/address', addressRoute)