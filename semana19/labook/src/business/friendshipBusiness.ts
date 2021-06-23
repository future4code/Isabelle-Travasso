// import { friendshipInputDTO } from "../data/model/friendshipModel";
// import { generateId } from "./services/IdGenerator";
// import { User } from '../business/entities/User'
// import HashGenerator from "./services/HashGenerator";
// import userDatabase from "../data/userDatabase";
// import TokenGenerator from "./services/TokenGenerator";

// export abstract class FriendshipBusiness {

//     protected static createFriendshipBusiness = async (
//         input: friendshipInputDTO
//     ): Promise<string> => {
//         try {
//             const { userId, friendId } = input

//             if (!userId || !friendId) {
//                 throw new Error('"userId" and "friendId" must be provided')
//             }

//             const cypherPassword = await HashGenerator.hash(input.password);

//             const user: User = {
//                 id,
//                 name: name,
//                 email: email,
//                 password: cypherPassword
//             }

//             await userDatabase.insertUser(user);

//             const token: string = TokenGenerator.generateToken({ id });

//             return token;

//         } catch (error) {
//             throw new Error(error.message);
//         }
//     }
// }