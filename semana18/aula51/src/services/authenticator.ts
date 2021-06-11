import * as jwt from 'jsonwebtoken'

export type authenticationData = {
    id: string
}

export const generateToken = (payload: authenticationData): string => {
    return jwt.sign(
        payload,
        "",
        {
            expiresIn: "1d"
        }
    )

}

export const getTokenData =  (token: string ): authenticationData => {
    const result: authenticationData = jwt.verify(
        token,
        ""
     ) as authenticationData

     return result
}