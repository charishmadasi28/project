import {React,  useEffect,  useState } from "react";
import axios from 'axios';

export  const Problem = () => {
    const[prob,sprob]=useState([]);
    useEffect(()=>
      {
        axios.get("https://server-vqm4.onrender.com/pso/")
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