import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./jobBoard.css"
import { Link } from "react-router-dom";
import { addTodoError, addTodoLoading, addTodoSuccess, getTodoError, getTodoLoading, getTodoSuccess,getData } from "../features/JobBoard/actions";
//import { addTodo } from "../store/action";
export const JobBoard =()=>{

    const { jobId } = useParams();

    const [text, setText]=useState("")
    const {loading,todos,error}=useSelector((state)=>({
        loading:state.todosState.loading,
        todos:state.todosState.todos,
        error:state.todosState.error
    }), function(prev,curr){
        if(prev.loading===curr.loading&&prev.error===curr.error){
            return true
        }
        return false
    })
    todos.map((todo)=>{

    var {id,jobTitle,companyName,salary}=todo
        console.log("jobs",id)

    })
    const dispatch=useDispatch()
     useEffect(()=>{
         if(todos)
        getTodos()
         },[])
  
         async function getTodos(){
             dispatch(getData())
           /*
            try{
                dispatch(getTodoLoading())
              const data= await  fetch("http://localhost:3001/todos")
             .then((d)=>d.json())
             dispatch(getTodoSuccess(data))

            }catch(e){
             dispatch(getTodoError(e))
            }
            */
        } 
     const addTodo=()=>{
        dispatch(addTodoLoading())
        fetch("http://localhost:3002/todos", {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({status:false, title:text})
        }).then((d)=>d.json()).then((res)=>{
            //success
            dispatch(addTodoSuccess(res))
            //getTodos()
            dispatch(getData())

        }).catch(err=>{
            //error
            dispatch(addTodoError(err))

        })


     }
    return loading?<div>Loading.....</div> :error?<div>Something went wrong</div> :(
        <div>
            <input type="text" value={text} placeholder="Enter Job Details" onChange={(e)=>setText(e.target.value)} />

            <button onClick={()=>{
               // dispatch(addTodo(text))
               //loading
             addTodo()
            }}>Add Todo</button>
                    

            <div className="job-container">
            <table>
                <tr className="job-header">
                    <th>Company-Name</th>
                    <th>JobTitle</th>
                    <th>Salary</th>
                    <th>Description</th>
                    <th>Location</th>
                </tr>
                
                {
                
                todos.map((d)=>(
            <div>
                <Link to={`/jobs/${d.id}`}>
                    <div className="jobs">
                 
                            
                                <tr className="job-row">
                                    <td>{d.companyName} </td>
                                    <td>{d.jobTitle}</td>
                                    <td>{d.salary}</td>
                                    <td>{d.description}</td>
                                    <td>{d.location}</td>
                                </tr>
                            
                       
                        
                    

                    </div>
                </Link>
                </div>
                ))}
                </table>
            </div>

                    

        </div>
    )
}