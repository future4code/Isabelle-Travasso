export enum Status{
    TODO = "To do",
    DOING = "Doing",
    DONE = "Done"
}

export type Task = {
    id: string,
    title: string,
    description: Text,
    limitDate: string,
    status: Status,
    creatorUserId: string
}

export type User = {
    id: string,
    name: string,
    nickname: string,
    email: string
}

export type TaskResponsible = {
    task_id: string,
    user_id: [string]
}