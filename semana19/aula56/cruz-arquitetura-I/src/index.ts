import { app } from "./controller/app"
import { userRouter } from "./routes/userRoute"
import { taskRouter } from "./routes/taskRouter"

app.use('/user', userRouter)
app.use('/task', taskRouter)
app.use((req, res) => {
    res
        .status(404)
        .send("Não encontramos a rota da sua requisição")
})
