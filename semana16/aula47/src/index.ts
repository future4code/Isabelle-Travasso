import { connection } from './connection'
import app from './app'
import { Request, Response } from 'express'
import cors from "cors";

const countGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT COUNT (*) as count FROM Actor WHERE gender = "${gender}"
    `)
    return result[0][0]
}

const searchActor = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name LIKE '%${name}%'
    `)
    return result[0][0]
}

const deleteActor = async (id: string): Promise<void> => {
    await connection("Actor")
        .delete()
        .where({ id })
}

const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)
    return result[0][0]
}

const avgSalary = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
        .avg("salary as salary_avg")
        .where({ gender })
    return result[0]
}

const createActor = async (
    id: string,
    name: string,
    salary: number,
    dateOfBirth: Date,
    gender: string
): Promise<void> => {
    await connection
        .insert({
            id: id,
            name: name,
            salary: salary,
            birth_date: dateOfBirth,
            gender: gender,
        })
        .into("Actor");
};

app.get('/actors', async (req, res) => {
    try {
        const result = await connection.raw(
            "SELECT * FROM Actor"
        )

        res.send({ result: result[0] })

    } catch (err) {

        console.log(err.sqlMessage || err.message);

        res.status(500).send("An unexpected error occurred")
    }
})

//Exercicio 3a

app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const actor = await getActorById(id);

        res.status(200).send(actor)
    } catch (err) {
        res.status(400).send({
            message: err.message,
        });
    }
});

//Exercicio 1b

app.get("/actors/:name", async (req: Request, res: Response) => {
    try {
        const name = req.params.name;
        const result = await searchActor(name)
        res
            .status(200)
            .send({ actor: result })
    } catch (err) {
        console.log(err)
        res.send(err.message)
    }
})

//Exercicio 1c

app.get('/gender', async (req, res) => {
    try {
        const gender = req.query.gender as string
        const count = await countGender(gender)

        res.send({ quantity: count })

    } catch (err) {

        console.log(err.sqlMessage || err.message);

        res.status(500).send("An unexpected error occurred")
    }
})

//Exercicio 2c

app.get('/actors/gender/salary/avg', async (req, res) => {
    try {
        const gender = req.query.gender as string
        const avg = await avgSalary(gender)

        res.send({ average: avg })

    } catch (err) {

        console.log(err.sqlMessage || err.message);

        res.status(500).send("An unexpected error occurred")
    }
})

//Exercicio 2a

app.put("/actors/:id", async (req, res) => {
    try {

        const actorData = {
            name: req.body.name,
            salary: req.body.salary,
            birth_date: req.body.birthDate,
            gender: req.body.gender
        }

        await connection("Actor")
            .update(actorData)
            .where({ id: req.params.id })

        res.send("Updated!")

    } catch (error) {

        console.log(error.sqlMessage || error.message);

        res.status(500).send("Internal error")
    }
})

//Exercicio 2b

app.delete("/actors/:id", async (req, res) => {
    try {
        const id = req.params.id
        await deleteActor(id)

        res
            .send({ message: "Actor Deleted" })
    } catch (err) {
        res.send({ message: err.sqlMessage || err.message })
    }
})

