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
      SELECT * FROM Actor WHERE name = "${name}"
    `)
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

 app.delete("/actors/:id", async(req, res) => {
     try{
         const id = req.params.id
         await deleteActor(id)

         res
         .send({message: "Actor Deleted"})
     }
 })