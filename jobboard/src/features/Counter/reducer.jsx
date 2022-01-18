import { INC_COUNT } from "./actionType";

const initState ={
    count:0
}
export const reducer = (state=initState, {type, payload})=>{
    switch(type){
        case INC_COUNT:{
            return {
                ...state,
                count:state.count +payload,

            }
        }
        default: 
        return state;
    }
}