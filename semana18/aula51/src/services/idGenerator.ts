import { v4 } from "uuid"

export const generatedId = (): string => {
    const id = v4();
    return id
}
