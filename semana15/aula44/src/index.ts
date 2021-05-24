import express, { Request, Response } from 'express'
import cors from 'cors'
import { users, UserType, User } from './usersList'

const app = express()
app.use(express.json())
app.use(cors())

// Exercicio 1
// a- Deve ser utilizado o método get
// b- A entidade será o path escolhido, neste caso será users 
// que faz sentido no contexto 

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

// Exercicio 2
// a-Os parametros foram passados por query, pois é a melhor 
// maneira de realizar buscas em um mesmo conjunto de dados
// b- Com a tipagem dele, montar um enum 

// Exercicio 3
// a- A busca por nome também será pelo query e podemos 
// fazer a busca junto com o get do Exercicio 2

app.get("/users/search", (req: Request, res: Response) => {
  try {
    const type = req.query.type as string
    const name = req.query.name as string
    let result = users

    if (type) {
      result = users.filter(user => user.type.toLowerCase().includes(type.toLowerCase()))
    }

    if (name) {
      result = users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()))
    }

    if (result === users || result.length === 0) {
      throw new Error("Users not found")
    }

    res
      .status(200)
      .send(result)

  } catch (err) {
    res
      .status(400)
      .send({ message: err.message })
  }
})

// Exercicio 4 
// a- Mudando endoint para put ele constinua agindo de maneira correta.
// b- Não considero adequado, o put é mais utilizado para 
// edição de dados já existentes e não adição.
app.post("/users/add", (req: Request, res: Response) => {
  try {
    const name = req.body.name as string
    const email = req.body.email as string
    const type = req.body.type as UserType
    const age = Number(req.body.age)

    let newUserShow

    const userEmail = users.find(user => user.email === email)
    const userType = users.find(user => user.type === type.toUpperCase())

    if (userEmail) {
      throw new Error("Email already registered")
    } else if (!userType) {
      throw new Error("Invalid type, try normal or admin")
    }

    if (name && email && type && age) {
      const newUser: User = {
        id: Date.now(),
        name: name,
        email: email,
        type: type,
        age: age
      }

      users.push(newUser)
      newUserShow = newUser
    } else {
      throw new Error("All information must be completed");
    }

    res
      .status(200)
      .send({
        message: "User successfully added",
        user: newUserShow
      })

  } catch (err) {
    res
      .status(400)
      .send({ message: err.message })
  }
})

//Exercicio 5

//Exercicio 5

app.put("/users/editLastUser", (req: Request, res: Response) => {
  try {
    const lastUser: number = Number(users.length - 1)
    const name = req.body.name as string

    // if (name) {
    users[lastUser].name = `${name}-Alterado`
    // } else {
    //   throw new Error("Invalid name");
    // }
    res
      .status(200)
      .send({
        message: "User updated"
      })

  } catch (err) {
    res
      .status(400)
      .send({ message: err.message })
  }
})

// Exercicio 6

app.patch("/users/patchLastUser", (req: Request, res: Response) => {
  try {
    const lastUser: number = Number(users.length - 1)
    const name = req.body.name as string

    users[lastUser].name = `${name}-Realterado`

    res
      .status(200)
      .send({
        message: "User changed"
      })

  } catch (err) {
    res
      .status(400)
      .send({ message: err.message })
  }
})

// Exercicio 7

app.delete("/users/delete/:id", (req: Request, res: Response) => {
  try {

    if (isNaN(Number(req.params.id))) {
      throw new Error("Id must be a number")
    }

    const id = Number(req.params.id)

    const result = users.findIndex(user => user.id === id)

    if (result) {
      users.splice(result, 1)

      res
        .status(200)
        .send({
          message: "User deleted successfully"
        })
    } else {
      res
        .status(404)
        .send("User not found")
    }

  } catch (err) {
    res
      .status(400)
      .send({ message: err.message })
  }
})


app.listen(3003, () => {
  console.log('Server is running at port 3003')
})
