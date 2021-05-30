import express from 'express'
import { createUser, getAllUsers, getUserById, editUserById, searchUser } from '../Querys/usersQuerys'

import { User } from '../types'

const route = express.Router()

route.get("/all", async (req, res) => {
    try {

        const user = await getAllUsers()

        res
            .status(200)
            .send({ users: user })

    } catch (err) {
        res
            .status(400)
            .send({ message: "Ops! Something is wrong. Try again later" })
    }
})

route.get("", async (req, res) => {
    try {
        const name = req.query.name as string;
        const result = await searchUser(name)

        res
            .status(200)
            .send({ actor: result })

    } catch (err) {
        res
            .status(400)
            .send({ message: "Ops! Something is wrong. Try again later" })
    }
})

route.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const user = await getUserById(id);

        if (!user) {
            res
                .send({ message: "Invalid Id" })
        }

        res
            .status(200)
            .send(user)

    } catch (err) {
        res
            .status(400)
            .send({ message: "Ops! Something is wrong. Try again later" })
    }
});


route.put("/edit/:id", async (req, res) => {
    try {
        const userEdit: User = {
            id: req.params.id,
            name: req.body.name,
            nickname: req.body.nickname,
            email: req.body.email
        }

        if (!userEdit) {
            res
                .send({ message: "Invalid Id" })
        }

        const keys = Object.keys(req.body)
        for (const key of keys) {
            if (req.body[key] === "")
                return res
                    .status(400)
                    .send({ message: "All information must be completed" })
        }

        await editUserById(userEdit);

        res
            .status(200)
            .send("Updated!")

    } catch (err) {
        res
            .status(400)
            .send("Ops! Something is wrong. Try again later")
    }
})

route.post("/", async (req, res) => {
    try {

        const idGenerator = () => "_" + Math.random().toString(36).substr(2, 9)

        const { name, nickname, email } = req.body

        const userData: User = {
            id: idGenerator(),
            name: name,
            nickname: nickname,
            email: email
        }
        
        const keys = Object.keys(req.body)
        for (const key of keys) {
            if (req.body[key] === "")
                return res
                    .status(400)
                    .send({ message: "All information must be completed" })
        }

        await createUser(userData)


        res
            .status(200)
            .send(`User ${userData.nickname} Created!`)

    } catch (err) {
        res
            .status(400)
            .send({ message: err.message,
                sql: err.sqlMessage, 
                aki: "Ops! Something is wrong. Try again later"})
    }
})

export {route as userRoute}
