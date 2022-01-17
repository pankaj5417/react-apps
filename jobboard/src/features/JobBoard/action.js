import { ADD_JOB,
         ADD_JOB_ERROR,
         ADD_JOB_SUCCESS,
         ADD_JOB_LOADING,
         GET_JOB_LOADING,
         GET_JOB_SUCCESS,
         GET_JOB_ERROR
} from "./actionType";

export const addJob=(data)=>({
    type:ADD_JOB,
    payload:data
})

export const addJobSuccess=(data)=>{
    return {
        type:ADD_JOB_SUCCESS,
        payload:data
    }
    
}
export const addJobLoading=(data)=>{
    return{
    type:ADD_JOB_LOADING,
   
    }
}
export const addJobError=(err)=>({
    type:ADD_JOB_ERROR,
    payload:err
})
export const getJobSuccess=(data)=>({
    type:GET_JOB_SUCCESS,
    payload:data
})

export const getJobLoading=(data)=>{
    return{
    type:ADD_JOB_LOADING,
   
    }
}
export const getJobError=(err)=>({
    type:ADD_JOB_ERROR,
    payload:err
})