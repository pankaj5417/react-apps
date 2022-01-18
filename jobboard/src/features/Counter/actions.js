import { INC_COUNT } from "./actionType";

export const incCount=(count)=>{

    return{
        type:INC_COUNT,
        payload:count,
    }
}