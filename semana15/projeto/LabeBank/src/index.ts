import express, { Request, Response } from 'express'
import cors from 'cors'
import { User, users } from './accounts'
import { today } from './util'

const app = express()

app.use(express.json())
app.use(cors())

app.get("/users", (req: Request, res: Response) => {
    if (users) {
        res
        .status(200)
        .send(users)
    } else {
        res
          .status(404)
          .send("Users not found")
      }
})

app.get("/users/:cpf", (req: Request, res: Response) => {
    try {
        const { cpf } = req.params
        const { name } = req.query

        const findUser = users.find(user => user.cpf === cpf)

        if (!findUser) {
            throw new Error("cpf not found")
        } else if (findUser.name !== name) {
            throw new Error("name is not compatible with the cpf informed")
        } else {
            res
                .status(200)
                .send({
                    balance: findUser.balance,
                    message: `Your account balance is $${findUser.balance},00`
                })
        }

    } catch (err) {
        res
            .status(400)
            .send(err.message)
    }
})

app.put("/users/:cpf/balance", (req: Request, res: Response) => {
    try {
        const { cpf } = req.params
        const { name } = req.query
        const value = Number(req.body.value)
        const description = req.body.description as string

        const findUser = users.find(user => user.cpf === cpf)
        const index = users.findIndex(user => user.cpf === cpf)

        if (!findUser) {
            throw new Error("cpf not found")
        } else if (findUser.name !== name) {
            throw new Error("name is not compatible with the cpf informed")
        } else if (value) {

            findUser.balance += value

            const operation = {
                value: value,
                date: Date(),
                description: description
            }

            users[index].extract.push(operation)

            res
                .status(200)
                .send({
                    message: `Operation performed. Your current balance is $${findUser.balance},00`
                })
        } else {
            throw new Error("Invalid value")
        }

    } catch (err) {
        res
            .status(400)
            .send({ message: err.message })
    }
})

app.put("/users/:cpf/payment", (req: Request, res: Response) => {
    try {
        const { cpf } = req.params
        const { name } = req.query
        const payment = Number(req.body.payment)
        const description = req.body.description as string
        const dateString = req.body.date as string
        
        const [day, month, year] = dateString.split("/")
        const date = new Date(`${year}-${month}-${day}`)
        const payDay = date - today

        const findUser = users.find(user => user.cpf === cpf)
        const index = users.findIndex(user => user.cpf === cpf)

        if (!findUser) {
            throw new Error("cpf not found")
        } else if (findUser.name !== name) {
            throw new Error("name is not compatible with the cpf informed")
        } 
        
        if (payment) {
            if(payDay === 0)

            findUser.balance -= payment

            const operation = {
                value: payment,
                date: dateString,
                description: description
            }

            users[index].extract.push(operation)

            res
                .status(200)
                .send({
                    message: `Operation performed. Your current balance is $${findUser.balance},00`
                })
        } else {
            throw new Error("Invalid payment")
        }

    } catch (err) {
        res
            .status(400)
            .send({ message: err.message })
    }
})

app.post("/users/add", (req: Request, res: Response) => {
    try {

        const { name, cpf } = req.body
        let { birthDate } = req.body

        let showNewUser

        const userCpf = users.find(user => user.cpf === cpf)

        if (userCpf) {
            throw new Error("CPF already registered")
        }

        if (cpf.length !== 11) {
            throw new Error("invalid CPF")
        }

        const actualYear = new Date().getFullYear()
        const [day, month, year] = birthDate.split("/")
        birthDate = new Date(`${year}-${month}-${day}`)
        const age = (actualYear - birthDate)

        if (name && cpf && birthDate) {

            if (age >= 18) {
                const newUser: User = {
                    name: name,
                    cpf: cpf,
                    birthDate: birthDate,
                    balance: 0,
                    extract: []
                }

                users.push(newUser)
                showNewUser = newUser
            } else {
                throw new Error("To create an account you must be at least 18 years old")
            }

        } else {
            throw new Error("All information must be completed")
        }

        res
            .status(200)
            .send({
                message: "User successfully added",
                user: showNewUser
            })

    } catch (err) {
        res
            .status(400)
            .send({ message: err.message })
    }
})



app.listen(3006, () => {
    console.log("Server is running at port 3006")
})

