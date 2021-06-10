import { Router } from 'express'

import {
    getAllUsers,
    createUser,
    verifyEmail,
    updateUser,
    getUserById,
    deleteUser
} from '../database/users'

import { generateHash, compareHash } from '../services/hashManager'
import { generateId } from '../services/idGenerator'
import { generateToken, getTokenData } from '../services/authenticator'

import { authenticationData } from '../types/user'

import {
    userValidator,
    editUserValidator,
    loginValidator
} from '../utils/valitador'
import { ApiError } from '../utils/ApiError'

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

usersRoute.get("/:id", async (req, res) => {
    const token = req.headers.authorization as string;

    const authenticationData = getTokenData(token);

    const user = await getUserById(authenticationData.id);

    if (!user) {
        throw new Error("Usuário não encontrado");
    }

    if (authenticationData.role !== "NORMAL") {
        throw new Error("Ops, apenas usuários 'NORMAL' podem realizar essa tarefa");
    }

    res.status(200).send({
        id: user.id,
        email: user.email,
        role: authenticationData.role
    });

});

usersRoute.post('/signup', async (req, res) => {
    try {
        const userCheck = userValidator(req.body)
        const id = generateId();

        const generatedHash = generateHash(userCheck.password)

        const userData = {
            id,
            name: userCheck.name,
            email: userCheck.email,
            password: generatedHash,
            role: userCheck.role
        };

        const userCreated = createUser(userData)

        if (!userCreated) console.log("Erro aqui")

        const tokenData: authenticationData = {
            id: userData.id,
            role: userData.role
        }

        const token = generateToken(tokenData)

        res.status(200).send({
            message: "Usuário cadastrado com sucesso",
            token
        })
    } catch (err) {
        res.status(400).send({
            message: err.message
        })
    }

})

usersRoute.post("login", async (req, res) => {
    try {
        const loginCheck = loginValidator(req.body)

        const userRegistered = await verifyEmail(loginCheck.email)

        if (!userRegistered) {
            throw new Error("Usuário não encontrado")
        }

        const passwordIsCorrect: boolean = compareHash(loginCheck.password, userRegistered.password)

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

usersRoute.post("/:id", async (req, res) => {
    try {
        const loginCheck = loginValidator(req.body)

        const userRegistered = await verifyEmail(loginCheck.email)

        if (!userRegistered) {
            throw new Error("Usuário não encontrado")
        }

        const passwordIsCorrect: boolean = compareHash(loginCheck.password, userRegistered.password)

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

usersRoute.put("/edit/:id", async (req, res) => {
    try {
        const token = req.headers.authorization as string;

        const authenticationData = getTokenData(token);

        // if (id !== authenticationData.id) {
        //     throw new Error("Usuário não encontrado");
        // }
        if (authenticationData.role !== "ADMIN") {
            throw new Error("Ops, apenas usuários 'NORMAL' podem realizar essa tarefa");
        }

        const checkEddit = editUserValidator(req.body)

        const editUser = updateUser(authenticationData.id, checkEddit)


        if (!editUser) {
            throw ApiError.internal()
        }

        res.status(200).send({ message: "Usuário atualizado" });
    } catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
});


usersRoute.delete('/:id', (req, res) => {
    try {
        const { id } = req.params

        const token = req.headers.authorization as string;

        const authenticationData = getTokenData(token);

        const user = getUserById(authenticationData.id);

        if (!user) {
            throw new Error("Usuário não encontrado");
        }

        if (authenticationData.role !== "ADMIN") {
            throw new Error("Ops, apenas usuários 'ADMIN' podem realizar essa tarefa");
        }

        const userDeleted = deleteUser(id)

        if (!userDeleted) {
            throw ApiError.badRequest('Cant found student')
        }

        res.send({ message: 'deleted!' })
    } catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
})