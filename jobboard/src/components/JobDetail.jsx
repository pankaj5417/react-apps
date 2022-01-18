import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getTodoSuccessJob,getTodoSuccess, removeTodo,getTodoError } from "../features/JobBoard/actions";

 const JobDetails = () => {

    const { jobId } = useParams();

  console.log("jobid",jobId)
  const { loading ,todos, error }=useSelector((state)=>({
    loading:state.jobState.loading,
    todos:state.jobState.jobBoard,
    error:state.jobState.error
}), function(prev,curr){
    if(prev.loading===curr.loading&&prev.error===curr.error){
        return true
    }
    return false
})
  const dispatch = useDispatch();

  const fetchProductDetail = (id) => {
    fetch(`http://localhost:3002/jobs/?id=${id}`)
    .then((d)=>d.json()).then((data)=>{
        console.log("action",data)
        dispatch(getTodoSuccess(data))
 
    })
 
   .catch((e)=>{
    dispatch(getTodoError(e))
   })
  };

  useEffect(() => {
    if (jobId && jobId !== "") fetchProductDetail(jobId);
    return () => {
      dispatch(removeTodo());
    };
  }, [jobId]);
  const jobDetail=todos.map((d)=>{
      if(d.id==jobId){
          return (
              <div>
                  <div className="jobs">
                        <h2>{d.companyName}</h2>
                        <h3>{d.jobTitle}</h3>
                        <h3>{d.salary}</h3>
                        <h3>{d.description}</h3>
                        <h3>{d.location}</h3>
                    

                    </div>
              </div>
          )
      }
  })
 return (
     <div>
      {jobDetail}
     </div>
 )

  
}

export default JobDetails;

