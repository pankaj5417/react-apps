import {
    ADD_TODO,
    ADD_TODO_ERROR,
    ADD_TODO_LOADING,
    ADD_TODO_SUCCESS,
    GET_TODO_ERROR,
    GET_TODO_LOADING,
    GET_TODO_SUCCESS,
    GET_TODO_SUCCESS_JOB,

    REMOVE_TODO
} from "./actionType"

const init= {loading:false, todos:[], error:false, counter:0 };



export const reducer= (state= init, { type, payload})=>{
    switch(type){
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, payload]
            }
            case ADD_TODO_LOADING:
                return {
                    ...state,
                    loading: true,

                }
                case ADD_TODO_SUCCESS:
                return {
                    ...state,
                    todos:payload,
                    loading: false,

                }
                case ADD_TODO_ERROR:
                return {
                    ...state,
                    loading: false,
                    error:payload

                }
              case GET_TODO_SUCCESS:
                  return {
                      ...state,
                      todos:payload,
                      // todos: payload,
                        loading:false
                  }  
                  case GET_TODO_LOADING:
                      return {
                          ...state,
                          loading:true
                      }
                  case GET_TODO_ERROR:
                      return {
                          ...state,
                          loading:false,
                          error: true
                      }
                      case REMOVE_TODO:
                          return {}

            default:return state;
    }
}
const initialState= {loading:false, jobBoard:[], error:false, counter:0 };

export const reducer2= (state=initialState, { type, payload})=>{
    switch(type){
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, payload]
            }
            case ADD_TODO_LOADING:
                return {
                    ...state,
                    loading: true,

                }
                case ADD_TODO_SUCCESS:
                return {
                    ...state,
                    jobBoard:payload,
                    loading: false,

                }
                case ADD_TODO_ERROR:
                return {
                    ...state,
                    loading: false,
                    error:payload

                }
                case GET_TODO_SUCCESS:
                  return {
                      ...state,
                      jobBoard:payload,
                      // todos: payload,
                        loading:false
                  }  
              case GET_TODO_SUCCESS_JOB:
                  return {
                    ...state,
                    ...payload,
                    loading: false,
                  }  
                  case GET_TODO_LOADING:
                      return {
                          ...state,
                          loading:true
                      }
                  case GET_TODO_ERROR:
                      return {
                          ...state,
                          loading:false,
                          error: true
                      }
                      case REMOVE_TODO:
                          return {}

            default:return state;
    }
}


