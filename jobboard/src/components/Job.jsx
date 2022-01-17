import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {addJobLoading,
        addJobSuccess,
        addJobError,
        getJobSuccess,
        getJobLoading,
        getJobError
} from "../features/JobBoard/action"


export const Job=()=>{
    const [job, setJob]=useState({
        companyName:"",
        jobTitle:"",
        description:"",
        salary:"",
        location:""
    })

    const handleChange=(e)=>{
        const {name,value}=e.target
        setJob({
            ...job, [name]:value
        })
    }

    const {loading, jobs, error}=useSelector((state)=>({
        loading:state.loading,
        jobs:state.jobs,
        error:state.error
    }),function(prev,curr) {
        if(prev.loading===curr.loading &&prev.error===curr.error){
            return true
        }
        return false
    }
)

const dispatch= useDispatch()

useEffect(()=>{
    getJobs()
},[])

 function getJobs() {
    try{
        dispatch(getJobLoading())
        const data=  fetch("http://localhost:3002/jobs")
        console.log(data)
        .then((d)=>d.json())
        dispatch(getJobSuccess(data))
        setJob(data)

    }catch(e){
        dispatch(getJobError(e))

    }
    
}
const addJob=()=>{
    dispatch(addJobLoading())
    fetch(`http://localhost:3002/jobs`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({status:false, title:job})
    }).then((d)=>d.json()).then((res)=>{
        dispatch(addJobSuccess(res))
    }).catch((e)=>{
        dispatch(addJobError(e))
    })
}
return ( 
   <div>

    <form action="" onSubmit={(e)=>{e.preventDefault()}}>
        
    <input type="text" name="company-name" onChange={handleChange }  placeholder="Enter Company-name"/>
    <br />
    <input type="text" name="job-title"  onChange={handleChange }  placeholder="Enter Job-Title"/>
    <br />
    <input type="text" name="description" onChange={handleChange }  placeholder="Enter Description"/>
    <br />
    <input type="number" name="salary"  onChange={handleChange }  placeholder="Enter Salary"/>
    <br />
    <input type="text" name="location"  onChange={handleChange}  placeholder="Enter Location"/>
    <br />

<button onClick={()=>{}}>Add Job</button>

    </form>
    {jobs.map(d=>(<div>{d.salary}</div>))}
    
</div>
)

}