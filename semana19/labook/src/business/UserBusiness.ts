import { SignupInputDTO, UserData, LoginInputDTO } from "../data/model/userModel";
import { generateId } from "./services/IdGenerator";
import HashGenerator from "./services/HashGenerator";
import userDatabase from "../data/userDatabase";
import TokenGenerator from "./services/TokenGenerator";

export class UserBusiness {

    protected static signupBusiness = async (
        input: SignupInputDTO
    ): Promise<string> => {
        try {
            const { name, email, password } = input

            if (!name || !email || !password) {
                throw new Error('"name", "email" and "password" must be provided')
            }

            if (email.indexOf("@") === -1) {
                throw new Error('Invalid email')
            }

            if (password.length < 6) {
                throw new Error('Password must be at least 6 characters')
            }

            const id = generateId();
            const cypherPassword = await HashGenerator.hash(input.password);

            const user: UserData = {
                id,
                name: name,
                email: email,
                password: cypherPassword
            }

            await userDatabase.insertUser(user);

            const token: string = TokenGenerator.generateToken({ id });

            return token;

        } catch (error) {
            throw new Error(error.message);
        }
    }


    protected static loginBusiness = async (
        input: LoginInputDTO
    ): Promise<string> => {
        try {
            const { email, password } = input

            if (!email || !password) {
                throw new Error('"email" and "password" must be provided')
            }

            const user: UserData = await userDatabase.getUserByEmail(input.email);

            if (!user) {
                throw new Error("Invalid credentials");
            }

            const passwordIsCorrect: boolean = await HashGenerator.compare(input.password, user.password)

            if (!passwordIsCorrect) {
                throw new Error("Invalid credentials");
            }

            const token: string = TokenGenerator.generateToken({
                id: user.id
            });

            return token;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}
