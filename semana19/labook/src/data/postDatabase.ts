import { BaseDatabase } from "./BaseDatabases";
import { PostData, toPostModel } from "./model/postModel";

class postDatabase extends BaseDatabase {
    private postsTable = 'labook_posts'

    public createPost = async (
        post: PostData
    ): Promise<void> => {
        try {
            await BaseDatabase.connection(this.postsTable)
                .insert({
                    id: post.id,
                    photo: post.photo,
                    description: post.description,
                    type: post.type,
                    author_id: post.authorId,
                    created_at: post.createdAt.toISOString().substring(0, 10)
                })
        } catch (err) {
            throw new Error(err.message || err.sqlMessage)
        }
    }

    public getPostById = async (id: string): Promise<PostData> => {
        try {
            const result = await BaseDatabase.connection(this.postsTable)
                .select("*")
                .where({ id })

            return toPostModel(result[0]);

        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}

export default new postDatabase()