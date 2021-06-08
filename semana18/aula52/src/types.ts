export enum USER_ROLES{
   NORMAL = "NORMAL",
   ADMIN = "ADMIN"
}

export type user = {
   id: string
   email: string
   password: string
   name: string
   nickname: string
   role: string
}