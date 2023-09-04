import React, { useState } from "react";
import axios from "axios";
export const Pbstatement=()=>
{
    const[about,setabout]=useState([]);
    const[matter,setmatter]=useState([]);
    const submit=async()=>
    {
        try{
            const res=await axios.post("https://server-vqm4.onrender.com/pbstatement/"+about+"/"+matter)
            if(res.data)
            {
                alert('successfully added')
                navigator('/pv')
            }
            else{
                alert('not added')
            }
        }
        catch(e)
        {
            console.log(e)
        }
    }
    return(
        <>
        <div className="div1">
        <div className="div4">
        <label>About:</label>
        <input type="text" name="about" onChange={(e)=>setabout(e.target.value)}></input><br/><br/>
        <label>description:</label>
        <textarea onChange={(e)=>setmatter(e.target.value)}/><br/>
        <button onClick={submit}>submit</button></div></div>
        </>
    )
}