import { Request, Response } from "express"
import {searchUser} from '../types/user'
import { selectUsers, selectAllUsers, searchByName, searchByType, orderByTypeOrName, paginationWithFiveUsers } from '../querys/querys'

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
   try {
      const users = await selectAllUsers()

      if (!users.length) {
         res.statusCode = 404
         throw new Error("No recipes found")
      }

      res.status(200).send(users)

   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}

//Exercicio 1a-)

export const getUsersByName = async (req: Request, res: Response): Promise<void> => {
   try {
      const name = req.query.name as string
      const users = await searchByName(name)

      if (!users.length) {
         res.statusCode = 404
         throw new Error("No recipes found")
      } else if (!name) {
         res.statusCode = 404
         throw new Error("Name not founded")
      }

      res.status(200).send(users)

   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}

//Exercicio 1b-)

export const getUsersByType = async (req: Request, res: Response): Promise<void> => {
   try {
      const type = req.params.type
      const users = await searchByType(type)

      if (!users.length) {
         res.statusCode = 404
         throw new Error("No recipes found")
      } else if (!type) {
         res.statusCode = 404
         throw new Error("Type not founded")
      }

      res.status(200).send(users)

   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}

//Exercicio 2-)

export const getUsersOrderByNameOrType = async (req: Request, res: Response): Promise<void> => {
   try {
      let orderWhat = req.query.orderWhat as string
      let orderHow = req.query.orderHow as string

      if (!orderWhat) {
         orderWhat = "email"
      } 
      if (!orderHow) {
         orderHow = "asc"
      }

      if(orderWhat !== "name" && orderWhat !== "type" && orderWhat !== "email"){
         res.statusCode = 422
         throw new Error(`"orderWhat" accepts only type or name`)
      }

      if(orderHow !== "asc" && orderHow !== "desc"){
         res.statusCode = 422
         throw new Error(`"orderHow" accepts only asc or desc`)
      }

      

      if (!orderWhat.length) {
         res.statusCode = 404
         throw new Error("Type not founded")
      } 

      const users = await orderByTypeOrName(orderWhat, orderHow)

      res.status(200).send(users)

   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}

//Exercicio 3-)

export const getFiveUsers = async (req: Request, res: Response): Promise<void> => {
   try {
      const page = Number(req.query.page) || 1

      const users = await paginationWithFiveUsers(page)

      if (!users.length) {
         res.statusCode = 404
         throw new Error("No recipes found")
      }

      res.status(200).send(users)

   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}

//Exercicio 4-)

export const getUsers = async (req: Request, res: Response): Promise<void> => {
   try {
      const {page = "1", name, type, orderWhat = "email", orderHow = "asc"} = req.query as searchUser

      let search = ''
      if(name && !type){
         search = `WHERE name LIKE "%${name}%"` 
      }if(!name && type){
         search = `WHERE name LIKE "%${type}%"` 
      }if(name && type){
         search = `WHERE name LIKE "%${name}%" AND type LIKE "%${type}%"` 
      }

      if(orderWhat !== "name" && orderWhat !== "type" && orderWhat !== "email"){
         res.statusCode = 422
         throw new Error(`"orderWhat" accepts only type or name`)
      }

      if(orderHow !== "asc" && orderHow !== "desc"){
         res.statusCode = 422
         throw new Error(`"orderHow" accepts only asc or desc`)
      }

      const users = await selectUsers(page, search, orderWhat, orderHow)

      if (!users.length) {
         res.statusCode = 404
         throw new Error("No recipes found")
      }

      res.status(200).send(users)

   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}
