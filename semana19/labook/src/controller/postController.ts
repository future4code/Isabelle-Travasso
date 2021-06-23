import { Request, Response } from "express";
import { createPostInputDTO, getPostByIdInputDTO, PostData, getPostByIdOutputDTO } from "../data/model/postModel";
import { PostBusiness } from "../business/PostBusiness"

export class PostController extends PostBusiness {

   createPost = async (
      req: Request,
      res: Response
   ): Promise<void> => {
      try {
         const token: string = req.headers.authorization!
         const { photo, description, type } = req.body

         const input: createPostInputDTO = {
            photo: photo,
            description: description,
            type: type
         }

         await PostBusiness.createPost(token, input);

         res
            .status(201)
            .send({ message: "Post created" })

      } catch (err) {
         res
            .status(400)
            .send({ message: err.sqlMessage || err.message })
      }
   }

   getPostById = async (
      req: Request,
      res: Response
   ): Promise<void> => {
      try {
         const input: getPostByIdInputDTO = {
            id: req.params.id
         }
         const token: string = req.headers.authorization!

         const post: PostData = await PostBusiness.getPostById(token, input);

         const { photo, description, type, createdAt } = post

         const output: getPostByIdOutputDTO = {
            photo: photo,
            type: type,
            description: description,
            createdAt: createdAt
         }

         res
            .status(200)
            .send({ post: output })

      } catch (err) {
         res
            .status(400)
            .send({ message: err.sqlMessage || err.message })
      }
   }
}
