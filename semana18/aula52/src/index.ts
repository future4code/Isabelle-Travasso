import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import login from "./endpoints/login";
// import { compareHash, createHash } from "./services/hashManager";

app.post('/user/signup', createUser);
app.post('/user/login', login);
app.put('/user/edit/', editUser);

// const hash1 = createHash("senha")
// const hash2 = createHash("senha")

// const compare1 = compareHash(hash1, hash1)
// const compare2 = compareHash("senha", hash2)

// console.log({hash1, hash2, compare1, compare2});
