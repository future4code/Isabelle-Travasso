import express, { Request, Response } from 'express'
import cors from 'cors'
import { countries, country, CONTINENTS } from './countries'

const app = express()

app.use(express.json())
app.use(cors())

// Endpoint 1
app.get('/countries/all', (req: Request, res: Response) => {

    if (countries) {
        res
            .status(200)
            .send(countries)
    } else {
        res
            .status(404)
            .send("Countries not found")
    }
})

// Endpoint 3
app.get('/countries/search', (req: Request, res: Response) => {

    const name = req.query.name as string
    const capital = req.query.capital as string
    const continent = req.query.continent as string

    let result = countries

    if (name) {
        result = countries.filter(c => c.name.toLowerCase().includes(name.toLowerCase()))
    }

    if (capital) {
        result = result.filter(c => c.capital.toUpperCase().includes(capital.toUpperCase()))
    }

    if (continent) {
        result = result.filter(c => c.continent.toUpperCase().includes(continent.toUpperCase()))
    }

    if (result !== countries && result.length !== 0) {
        res
            .status(200)
            .send(result)
    } else {
        res
            .status(404)
            .send("Country not found")
    }
})

// Endpoint 2
app.get('/countries/:id', (req: Request, res: Response) => {

    try {
        if (isNaN(Number(req.params.id))) {
            throw new Error("Id must be a number")
        }
        const id = Number(req.params.id)
        const result = countries.find((c => c.id === id))

        res
            .status(200)
            .send(result)
    } catch (error) {
        res
            .status(400)
            .send({ message: error.message })
    }
})


// Endpoint 4
app.put('/contries/edit/:id', (req: Request, res: Response) => {
    try {
        if (isNaN(Number(req.params.id))) {
            throw new Error("Id must be a number")
        }

        const id = Number(req.params.id)

        const name = req.body.name as string
        const capital = req.body.capital as string

        const result = countries.find((c => c.id === id))

        if (result) {
            if (name) {
                const named = name
                result.name = named
            }

            if (capital) {
                const newCapital = capital
                result.capital = newCapital
            }

            res
                .status(200)
                .send("Country updated")
        } else {
            res
                .status(404)
                .send("Country not found")
        }
    } catch (error) {
        res
            .status(400)
            .send({ message: error.message })
    }

})

// Endpoint 6
app.post('/contries/create', (req: Request, res: Response) => {

    try {

        if (!req.headers.authorization || req.headers.authorization.length < 10) {
            throw new Error("Invalid authorization")
        }

        const authorization = req.headers.authorization as string

        const name = req.body.name as string
        const capital = req.body.capital as string
        const continent = req.body.continent as CONTINENTS

        let newCountryRes

        if (authorization) {
            const countryName = countries.find(c => c.name === name)

            if (countryName) {
                throw new Error("Country already registered");
            }

            if (name && capital && continent) {
                const newCountry: country = {
                    id: Date.now(),
                    name: name,
                    capital: capital,
                    continent: continent
                }

                countries.push(newCountry)
                newCountryRes = newCountry

            } else {
                throw new Error("All information must be completed");
            }

            res
                .status(200)
                .send({
                    message: "Country add",
                    country: newCountryRes
                })
        } else {
            res
                .status(404)
                .send("Country not found")
        }
    } catch (error) {
        res
            .status(400)
            .send({ message: error.message })
    }

})

// Endpoint 5
app.delete('/contries/delete/:id', (req: Request, res: Response) => {
    try {
        if (!req.headers.authorization || req.headers.authorization.length < 10) {
            throw new Error("Invalid authorization")
        }

        const authorization = req.headers.authorization as string

        const id = Number(req.params.id)

        const result = countries.findIndex((c => c.id === id))

        if (result) {
            countries.splice(result, 1)

            res
                .status(200)
                .send("Excluded country")
        } else {
            res
                .status(404)
                .send("Country not found")
        }

    } catch (error) {
        res
            .status(400)
            .send({ message: error.message })
    }

})


app.listen(3004, () => {
    console.log("Server is running at http://localhost:3004")
})