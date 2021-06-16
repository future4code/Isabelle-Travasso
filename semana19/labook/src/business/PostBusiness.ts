import { createPostInputDTO, PostData, getPostByIdInputDTO } from "../data/model/postModel";
import TokenGenerator from "./services/TokenGenerator";
import { AuthenticationData } from "../data/model/userModel";
import { generateId } from "./services/IdGenerator";
import postDatabase from "../data/postDatabase";

export class PostBusiness {

    protected static createPost = async (
        token: string,
        input: createPostInputDTO
    ): Promise<void> => {
        try {
            const tokenData: AuthenticationData = TokenGenerator.getTokenData(token)

            if (!token) {
                throw new Error("A jwt must be provided");
            }

            const { description, photo, type } = input

            const post: PostData = {
                id: generateId(),
                authorId: tokenData.id,
                createdAt: new Date(),
                description: description,
                photo: photo,
                type: type
            }

            await postDatabase.createPost(post);

        } catch (err) {
            throw new Error(err.message);
        }
    }

    protected static getPostById = async (
        token: string,
        input: getPostByIdInputDTO
    ): Promise<PostData> => {
        try {
            const tokenData: AuthenticationData = TokenGenerator.getTokenData(token)

            if (!token) {
                throw new Error("A jwt must be provided");
            }

            const post: PostData = await postDatabase.getPostById(input.id);

            if (!post) {
                throw new Error("Post not found")
            }
            return post;

        } catch (err) {
            throw new Error(err.message);
        }
    }
}