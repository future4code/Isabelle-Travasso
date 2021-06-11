import { connections } from '../connections'

export const registerUser = async (
    id: string,
    email: string,
    password: string) => {
    await connections
        .insert({
            id,
            email,
            password,
        })
        .into("RegisterUser");
};

export const verifyEmail = async (email: string): Promise<any> => {
    const result = await connections
        .select("*")
        .from('RegisterUser')
        .where({ email });

    return result[0];
}
 

export const getUserById = async (id: string): Promise<any> => {
    const result = await connections
        .select("*")
        .from('RegisterUser')
        .where({ id });

    return result[0];
}