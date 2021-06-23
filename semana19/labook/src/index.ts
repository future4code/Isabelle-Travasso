import express from "express"
import cors from "cors"
import { userRouter } from "./controller/routes/userRouter"
import { postRouter } from "./controller/routes/postRouter"

const app = express()
app.use(express.json())
app.use(cors())

app.use("/user", userRouter);
app.use("/post", postRouter);

app.listen(3003, () => {
   console.log("Server running on port 3003")
})