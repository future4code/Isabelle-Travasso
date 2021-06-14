import { Router } from 'express'

import {
    getAllUsers,
    createUser,
    verifyEmail,
    getUserById,
    deleteUser
} from '../data/users'

import { hash, compare } from '../services/hashManager'
import { generateId } from '../services/idGenerator'
import { generateToken, getTokenData } from '../services/authenticator'

import { authenticationData } from '../models/userTypes'

import {
    userValidator,
    loginValidator
} from '../utils/validator'

export const usersRoute = Router()

usersRoute.get('/', async (req, res) => {
    try {
        const allUser = await getAllUsers()

        if (!allUser.length) {
            res.send("Não há usuários cadastrados ainda")
        } else {
            res.send(allUser)
        }
    } catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
})

usersRoute.post('/signup', async (req, res) => {
    try {
        const userCheck = userValidator(req.body)

        const generatedHash = hash(userCheck.password)

        const userData = {
            id: generateId(),
            ...userCheck
        };

        const userCreated = createUser(userData)

        if (!userCreated) throw Error('Não foi possivel criar o usuário')

        const tokenData: authenticationData = {
            id: userData.id,
            role: userData.role
        }

        const token = generateToken(tokenData)

        res.status(200).send({
            message: "Usuário cadastrado com sucesso",
            user: {id: userData.id,
            name: userData.name,
            role: userData.role},
            token
        })

    } catch (err) {
        res.status(400).send({
            message: err.message
        })
    }

})

usersRoute.post("/login", async (req, res) => {
    try {
        const loginCheck = loginValidator(req.body)

        const userRegistered = await verifyEmail(loginCheck.email)

        if (!userRegistered) {
            throw new Error("Usuário não encontrado")
        }

        const passwordIsCorrect = compare(loginCheck.password, userRegistered.password)

        if (!passwordIsCorrect) {
            throw new Error("Senha inválida")
        }

        const tokenData: authenticationData = {
            id: userRegistered.id,
            role: userRegistered.role
        }

        const token = generateToken(tokenData)

        res.status(200).send({ token });

    } catch (err) {
        res.status(400).send({
            message: err.message
        })
    }

})

usersRoute.delete('/delete/:id', (req, res) => {
    try {
        const { id } = req.params

        const token = req.headers.authorization as string;

        const authenticationData = getTokenData(token);

        const user = getUserById(authenticationData.id);

        if (!user) {
            throw new Error("Usuário não encontrado");
        }

        if (authenticationData.role !== "ADMIN" && authenticationData.id !== id) {
            throw new Error("Ops, apenas usuários 'ADMIN' ou o próprio usuário podem realizar essa tarefa");
        }

        const userDeleted = deleteUser(id)

        if (!userDeleted) {
            throw Error('Usuário não encontrado')
        }

        res.send({ message: 'Usuário excluido!' })

    } catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
})
