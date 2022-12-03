import {v1} from "uuid";

export type ButtonNameType = {
    id: string,
    name: string
}
export const buttonName: Array<ButtonNameType> = [
    {id: v1(), name:"INC"},
    {id: v1(), name:"RESET"},
]

