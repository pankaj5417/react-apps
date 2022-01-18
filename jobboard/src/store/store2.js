import { createStore,combineReducers,applyMiddleware,compose } from "redux";

//import { reducer } from "./reducer";
import {reducer as TodosReducer} from "../features/JobBoard/reducer"
import { reducer2 as TodoReducerJob } from "../features/JobBoard/reducer";
import {reducer as CounterReducer} from "../features/Counter/reducer"
import thunk from "redux-thunk"
const rootReducer=combineReducers({
    counterState:CounterReducer,
    todosState:TodosReducer,
    jobState:TodoReducerJob

})
/*
function logger(store){
    //check if user login
    //if(!store2.getState().usertoken){return}
    return function(next){
        return function(action){
            //
        }
    }
}
*/
/*
const logger1=(store2)=>(next)=>(action)=>{
console.log("inside logger1",store2)
if(typeof action==="function"){
    return action(store2.dispatch)
}
next(action)
}

const logger2=(store2)=>(next)=>(action)=>{
   console.log("inside logger2",store2)
   next(action) 
}
*/
export const store2=createStore(rootReducer,
   // applyMiddleware(thunk)
    compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__()),
    // window.__REDUX_DEVTOOLS_EXTENSION__()
     )
console.log(store2.getState())