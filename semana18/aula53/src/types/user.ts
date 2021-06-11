export enum USER_ROLES{
   NORMAL = "NORMAL",
   ADMIN = "ADMIN"
}

export type User = {
   id: string
   email: string
   password: string
   name: string
   nickname: string
   role: USER_ROLES
}