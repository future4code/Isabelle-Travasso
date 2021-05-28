import express, {Express} from "express";
import cors from "cors";
import { AddressInfo } from "net";
import {userRoute} from './Router/userRoute'
import {taskRoute} from './Router/taskRoute'

const route: Express = express();

route.use(express.json());
route.use(cors());
route.use("/user", userRoute);
route.use("/task", taskRoute);

const server = route.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

export default route 