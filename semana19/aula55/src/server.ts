import express from 'express'
import cors from 'cors'
import { usersRoute } from './endpoints/users'

export const app = express()

app.use(express.json())
app.use(cors())

app.use('/users', usersRoute)

