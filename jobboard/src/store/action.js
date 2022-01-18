import { ADD_TODO, REMOVE_TODO } from "./actionType";

export const addTodo=(data)=>({
    type:ADD_TODO,
    payload:data,
})

export const removeTodo=(id)=>({
    type: REMOVE_TODO,
    payload:id,
})