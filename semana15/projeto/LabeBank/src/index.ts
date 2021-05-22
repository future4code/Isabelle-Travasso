import express, { Request, Response } from 'express'
import cors from 'cors'
import { User, users } from './accounts'

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
                    message: `Your account balance is $${findUser.balance}`
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
        // const description = req.body.description as string

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
                // description: description
                description: "Depósito de dinheiro"//defasio
            }

            users[index].extract.push(operation)

            res
                .status(200)
                .send({
                    message: `Operation performed. Your current balance is $${findUser.balance}`,
                    date: `${operation.date}`
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
        const payment = Number(req.body.value)
        // const description = req.body.description as string
        const dateString = req.body.date as string

        const today = new Date()
        const [day, month, year] = dateString.split("/")
        let date = new Date(`${year}-${month}-${day}`)

        const findUser = users.find(user => user.cpf === cpf)
        const index = users.findIndex(user => user.cpf === cpf)

        if (!findUser) {
            throw new Error("cpf not found")
        } else if (findUser.name !== name) {
            throw new Error("name is not compatible with the cpf informed")
        }

        if (!dateString || dateString === '') {
            date = today
        }

        if (payment) {
            if (today > date) {
                throw new Error("Invalid payment date")
            } else if (today < date) {
                const operation = {
                    value: payment,
                    date: dateString,
                    // description: description
                    description: "Payment scheduled"
                }

                users[index].extract.push(operation)

                res
                    .status(200)
                    .send({
                        message: `$${payment} payment successfully scheduled`,
                        balance: `Your current balance is $${findUser.balance}`
                    })
            } else if (today === date) {
                const operation = {
                    value: payment,
                    date: dateString,
                    // description: description
                    description: "Payment"
                }

                findUser.balance -= payment

                users[index].extract.push(operation)
                if (findUser.balance < 0) {
                    throw new Error("insufficient account balances")
                } else {
                    res
                        .status(200)
                        .send({
                            message: `$${payment} payment made successfully`,
                            balance: `Your current balance is $${findUser.balance}`
                        })
                }
            }
        } else {
            throw new Error("Invalid payment")
        }

    } catch (err) {
        res
            .status(400)
            .send({ message: err.message })
    }
})

app.put("/users/:cpfR/:cpf/transfer", (req: Request, res: Response) => {
    // R = sender
    try {
        const { cpf } = req.params
        const { cpfR } = req.params
        const { name } = req.query
        const { nameR } = req.query
        const value = Number(req.body.value)
        // const description = req.body.description as string

        const findUser = users.find(user => user.cpf === cpf)
        const findUserR = users.find(userR => userR.cpf === cpfR)

        const index = users.findIndex(user => user.cpf === cpf)
        const indexR = users.findIndex(userR => userR.cpf === cpfR)


        if (!findUser || !findUserR) {
            throw new Error("cpf not found")
        } else if (findUser.name !== name || findUserR.name !== nameR) {
            throw new Error("name is not compatible with the cpf informed")
        }


        if (value) {
            const operation = {
                value: value,
                date: new Date(),
                // description: description
                description: `transfer from ${nameR} to ${name}`
            }

            if (findUserR.balance > value) {
                findUserR.balance -= value
                findUser.balance += value

                users[indexR].extract.push(operation)
                users[index].extract.push(operation)

                res
                    .status(200)
                    .send({
                        message: `$${value} tranfer made successfully`,
                        balance: `Your current balance is $${findUserR.balance}`
                    })
            } else {
                throw new Error("insufficient account balances")
            }

        } else {
            throw new Error("Invalid value or description")
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

        const today = new Date()
        const [day, month, year] = birthDate.split("/")
        birthDate = new Date(`${year}-${month}-${day}`)
        let age = today.getFullYear() - birthDate.getFullYear()
        const monthCompare = today.getMonth() - birthDate.getMonth()

        if (monthCompare <= 0 && today.getDate() < birthDate.getDate()) {
            age = age - 1
        }

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

