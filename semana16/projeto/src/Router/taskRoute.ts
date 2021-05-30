// import cors from "cors";
import express from 'express'

import { deleteResponsible, getUserResponsible, getAllTasks, getTasksDelayed, getTasksSearch, createTask, addStatus, getTaskAndUserById, getTaskById, getTaskByCreatorUserId, createResponsible } from '../Querys/tasksQuerys'

import { Status } from '../types'

const route = express.Router()

route.get("/all", async (req, res) => {
    try {

        const tasks = await getAllTasks()

        res
            .status(200)
            .send({ tasks: tasks })

    } catch (err) {
        res
            .status(400)
            .send({ message: "Ops! Something is wrong. Try again later" })
    }
})

route.get("/creator", async (req, res) => {
    try {
        const creatorUserId = req.query.creatorUserId as string;
        const task = await getTaskByCreatorUserId(creatorUserId);

        if (!task) {
            res
                .send({ message: "Invalid Id" })
        }

        res
            .status(200)
            .send(task)

    } catch (err) {
        res
            .status(400)
            .send({ message: "Ops! Something is wrong. Try again later" })
    }
});

route.get("", async (req, res) => {
    try {
        const search = req.query.search as string;
        const result = await getTasksSearch(search)

        res
            .status(200)
            .send({ tasks: result })

    } catch (err) {
        res
            .status(400)
            .send({ message: "Ops! Something is wrong. Try again later" })
    }
})

route.get("/delayed", async (req, res) => {
    try {
        const result = await getTasksDelayed()

        res
            .status(200)
            .send({ tasks: result })

    } catch (err) {
        res
            .status(400)
            .send({ message: "Ops! Something is wrong. Try again later" })
    }
})

route.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const task = await getTaskById(id);

        if (!task) {
            res
                .send({ message: "Invalid Id" })
        }

        res
            .status(200)
            .send(task)

    } catch (err) {
        res
            .status(400)
            .send({ message: "Ops! Something is wrong. Try again later" })
    }
});

route.get("/:id/responsible", async (req, res) => {
    try {
        const id = req.params.id;
        const user = await getUserResponsible(id);

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

route.post("/responsible", async (req, res) => {
    try {
        const responsible = {
            task_id: req.body.task_id,
            user_id: req.body.user_id,
        }

        const keys = Object.keys(req.body)
        for (const key of keys) {
            if (req.body[key] === "")
                return res
                    .status(400)
                    .send({ message: "All information must be completed" })
        }

        await createResponsible(responsible);

        res
            .status(200)
            .send("Updated!")

    } catch (error) {
        res
            .status(400)
            .send("Ops! Something is wrong. Try again later")
    }
})

route.put("/status/edit", async (req, res) => {
    try {
        const id = req.query.id as string;
        const statusEdit = req.body.status as Status

        const keys = Object.keys(req.body)
        for (const key of keys) {
            if (req.body[key] === "")
                return res
                    .status(400)
                    .send({ message: "All information must be completed" })
        }

        await addStatus(id, statusEdit);

        res
            .status(200)
            .send("Updated!")

    } catch (error) {
        res
            .status(400)
            .send("Ops! Something is wrong. Try again later")
    }
})

route.post("/", async (req, res) => {
    try {
        const idGenerator = () => "_" + Math.random().toString(36).substr(2, 9)

        let date = req.body.limitDate
        const { title, description, status, creatorUserId } = req.body

        const [day, month, year] = date.split("/")
        date = new Date(`${year}-${month}-${day}`)

        const taskData = {
            id: idGenerator(),
            title: title,
            description: description,
            limitDate: date,
            status: status,
            creatorUserId: creatorUserId
        }

        const keys = Object.keys(req.body)
        for (const key of keys) {
            if (req.body[key] === "")
                return res
                    .status(400)
                    .send({ message: "All information must be completed" })
        }

        await createTask(taskData)

        res
            .status(200)
            .send("Task Created!")

    } catch (error) {
        res
            .status(400)
            .send("Ops! Something is wrong. Try again later")
    }
})

route.delete("/:taskId/responsible/:responsibleUserId", async (req, res) => {
    try {

        const taskId = req.params.taskId
        const userId = req.params.responsibleUserId

        await deleteResponsible(taskId, userId)

        res
            .status(200)
            .send("Responsible deleted!")

    } catch (error) {
        res
            .status(400)
            .send("Ops! Something is wrong. Try again later")
    }
})

export {route as taskRoute}