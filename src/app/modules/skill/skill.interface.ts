import { ObjectId } from "mongoose"

export type TSkill ={
    id?:string
    user: ObjectId,
    title: string,
    image: string,
}