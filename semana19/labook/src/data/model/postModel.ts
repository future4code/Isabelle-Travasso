import { Post } from '../../business/entities/Post'

export enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
}

export const convertPostType = (post: POST_TYPES): string => {
    return post === POST_TYPES.EVENT ? "event" : "normal"
}

export const convertStringToType = (type: string): POST_TYPES => {
    switch (type) {
        case "normal":
            return POST_TYPES.NORMAL
        case "event":
            return POST_TYPES.EVENT
        default:
            throw new Error("Type must be 'normal' or 'event'")
    }
}

export type PostData = {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: Date,
    authorId: string
}

export interface createPostInputDTO {
    photo: string,
    description: string,
    type: POST_TYPES
}

export interface getPostByIdInputDTO {
    id: string
}

export interface getPostByIdOutputDTO {
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: Date
}

export const toPostModel = (obj: any)
    : Post => {
    return obj && new Post(
        obj.id,
        obj.photo,
        obj.description,
        obj.type,
        obj.created_at,
        obj.author_id,
    )
}