import { POST_TYPES } from "../../data/model/postModel";

export class Post {
    constructor(
        public id: string,
        public photo: string,
        public description: string,
        public type: POST_TYPES,
        public createdAt: Date,
        public authorId: string
    ) {}
}