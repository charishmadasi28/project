import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Signin from "./signup";
function Regis()
{
    const nav=useNavigate();
    const Forgot=() =>{
        nav('/fpass')
    }
    const Submit=async()=>
    {
        try
        {
            const res=await axios.post("https://server-vqm4.onrender.com/login/"+name+"/"+password);
            
                if(res.data)
                {
                    nav('/pbstatement');
                }
                else{
                    alert("try again")
                }
        }
        catch(e)
        {
            alert("fill the details");
            console.log(e)
        }
       
    }
    const Signin=()=> {
             nav('/signup');
         }

    const[name,setname]=useState([]);
    const[password,setpassword]=useState([]);
    return(
        <>
        <div className="div1">
        
        <div className="div3">
          <h1>LOGIN PAGE</h1>
          </div>
          
        <div className="div4">
            <br/>
        <label>user:<input type="text" placeholder="name" onChange={(e)=>setname(e.target.value)}></input></label><br/>
        <label>password:<input type='password' placeholder="password" onChange={(e)=>setpassword(e.target.value)}></input></label><br/>
        <button onClick={Submit}>Submit</button><br/>
        <button  onClick={Signin}>Signin</button><br/>
        <button  onClick={Forgot}>Forgot password</button>
        </div>
        
        </div>
        </>
    )
}
export default Regis;