import { BaseDatabase } from "./BaseDatabases";
import { UserData, toUserModel } from "./model/userModel";

class userDatabase extends BaseDatabase {
    private userTable = "labook_users"

    public insertUser = async (
        user: UserData
    ): Promise<void> => {
        try {
            await BaseDatabase.connection(this.userTable)
                .insert({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    password: user.password
                });
        } catch (err) {
            throw new Error(err.sqlMessage || err.message);
        }
    }

    public getUserByEmail = async (
        email: string
    ): Promise<UserData> => {
        try {
            const result = await BaseDatabase.connection(this.userTable)
                .select("*")
                .where({ email });

            return toUserModel(result[0])

        } catch (err) {
            throw new Error(err.sqlMessage || err.message)
        }
    }

}

export default new userDatabase()