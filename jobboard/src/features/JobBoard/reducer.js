import { ADD_JOB,
    ADD_JOB_LOADING ,
    ADD_JOB_SUCCESS,
    ADD_JOB_ERROR,
    GET_JOB_LOADING,
    GET_JOB_SUCCESS
} from "./actionType";

const init={loading:false, jobs:[],error:false}

export const reducer=(state=init, {type, payload})=>{
    switch(type){
        case ADD_JOB:
            return {
                ...state,
                jobs:[...state.jobs, payload]
            }
            case ADD_JOB_LOADING:
                return {
                    ...state,
                    loading:true
                }
                case ADD_JOB_SUCCESS:
                    return {
                        ...state,
                        jobs:[...state.jobs, payload],
                        loading:false
                    }
                    case ADD_JOB_ERROR:
                        return {
                            ...state,
                            loading:false,
                            error:payload
                        }
                        case GET_JOB_SUCCESS:
                            return {
                                ...state,
                                jobs:payload,
                                loading:false

                            }
            default: return state;
    }
}