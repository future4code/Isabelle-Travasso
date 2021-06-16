export enum USER_ROLES {
   NORMAL = 'NORMAL',
   ADMIN = 'ADMIN'
}

export const toUserRoles = (values: string): USER_ROLES => {
   switch (values) {
      case "NORMAL":
         return USER_ROLES.NORMAL
      case "ADMIN":
         return USER_ROLES.ADMIN
      default:
         throw new Error("O role devem ser 'NORMAL' ou 'ADMIN'")
   }
}

export type authenticationData = {
   id: string,
   role: USER_ROLES
}

export type userData = {
   name: string,
   nickname: string,
   email: string,
   password: string,
   role: USER_ROLES
}

export type user = userData & { id: string }
