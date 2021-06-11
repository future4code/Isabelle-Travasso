import express, { Express } from "express"
import cors from "cors"
import { AddressInfo } from "net"

import {getAllUsers, getUsersByName, getUsersByType, getUsers, getFiveUsers, getUsersOrderByNameOrType} from './endpoints/endpoints'

const app: Express = express()
app.use(express.json())
app.use(cors())

app.get("/users/all", getAllUsers)

//Exercicio 1a-)
app.get("/users", getUsersByName)
 
//Exercicio 2-)
app.get("/users/order", getUsersOrderByNameOrType)

//Exercicio 3-)
app.get("/users/five", getFiveUsers)

//Exercicio 4-)
app.get("/users/limit", getUsers)

// //Exercicio 1b-)
app.get("/users/:type", getUsersByType)

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})
