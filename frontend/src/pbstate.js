import {React,  useEffect,  useState } from "react";
import axios from 'axios';

export  const Problem = () => {
    const[prob,sprob]=useState([]);
    useEffect(()=>
      {
        axios.get("http://localhost:8000/pso")
        .then( (result)=>
          {
            sprob(result.data);
          })
      })
        return(
            <>
                <div>
                 {
                prob.map((data)=>
                (
                    <>
                      <div className="chintu" >
                    {data.About}<br/>
                    {data.Matter}
                    </div>
                    </>
                ))
                 }
                </div>
              


               
            </>
        )
}