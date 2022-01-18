import { createStore,combineReducers ,applyMiddleware, compose} from "redux";

import {reducer as TodosReducer} from "../features/Todos/reducer"

import {reducer as CounterReducer} from "../features/Counter/reducer"

const rootReducer = combineReducers({
    counterState: CounterReducer,
    todosState: TodosReducer,
})

const logger1=(store)=>(next)=>(action)=>{
   // console.log("Inside Logger1")
   console.time("p1")
    next(action)
   // console.log("Exiting Logger1")
   console.log("p2")
}
/*
const errorReport= (store)=>(next)=>(action)=>{
    try{
        next(action)
    }catch(e){
        //report error to server
    }
}
*/
const logger2=(store)=>(next)=>(action)=>{
    console.log("Inside Logger2")
    next(action)
    console.log("Exiting Logger2")
}

export const store= createStore(
    rootReducer,
    compose(applyMiddleware(logger1) , window.__REDUX_DEVTOOLS_EXTENSION__())
   
    // applyMiddleware(logger1, logger2)
)