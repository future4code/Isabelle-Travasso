import { User, USER_ROLES, Login } from '../models/userTypes'
// import { Recipes } from '../types/recipes'
// import { Feed } from '../types/feed'

// Users

export const userValidator = (newUser: Omit<User, 'id'>) => {

    const { name, email, password, role } = newUser

    if (!name) {
        throw new Error("Preencha o campo 'name'")
    }

    if (!email || email.indexOf("@") === -1) {
        throw new Error("Email inválido")
    }

    if (!password || password.length < 6) {
        throw new Error("A senha deve conter no mínimo 6 caracteres e no máximo 20")
    }

    if (role) {
        const roleCheck = role.toUpperCase()
        if (
            roleCheck !== USER_ROLES.ADMIN &&
            roleCheck !== USER_ROLES.NORMAL
        ) {
          throw new Error(`"role" deve ser "NORMAL" ou "ADMIN"`);
        }
      }

    return newUser
}

export const loginValidator = (data: Login) => {
    const { email, password } = data

    if (!email) {
        throw new Error("Preencha o campo 'email'");
    }

    if (!password) {
        throw new Error("Preencha o campo 'senha'");
    }

    return data
}