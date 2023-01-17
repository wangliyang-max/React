import { ADD_PERSON } from "../const";

export const createAddPersonAction =(personObj)=>({type:ADD_PERSON, data:personObj})
