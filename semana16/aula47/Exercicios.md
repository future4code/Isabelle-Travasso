# Aula 47 - Knex.js

## Exercício 1

### **a-)** 
O raw nos restorna uma promise com os dados chamados e alguns metadados de criação.

### **b-)** 
```
const searchActor = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
  `)
  return result
}

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
```
### **c-) e Exercicio 3b**
```
const countGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT COUNT (*) as count FROM Actor WHERE gender = "${gender}"
    `)
    return result[0][0]
}

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
 ```

## Exercício 2

### **a-)** 
```
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
 ```

### **b-)** 
```
const deleteActor = async (id: string): Promise<void> => {
    await connection("Actor")
    .delete()
    .where({id})
}

 app.delete("/actors/:id", async(req, res) => {
     try{
         const id = req.params.id
         await deleteActor(id)

         res
         .send({message: "Actor Deleted"})
     } catch (err){
         res.send({ message: err.sqlMessage || err.message})
     }
 })

```

### **C-)** 
```
const avgSalary = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
        .avg("salary as salary_avg")
        .where({ gender })
    return result[0]
}

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
```

## Exercício 3

### **a-)**
```
const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)
    return result[0][0]
}
```