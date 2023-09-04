import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Signin from "./signup";
function Regis()
{
    const nav=useNavigate();
    const Submit=() =>{
        nav('/prom')
    }
    const Signin=()=> {
             nav('/signup');
         }
    const[name,setname]=useState([]);
    const[password,setpassword]=useState([]);
    return(
        <>
        <div className="div1">
        <img src="Abstract.jpg" width="100" height="100"></img>
        <div className="div3">
          <h1>LOGIN PAGE</h1>
          </div>
          
        <div className="div4">
        <label>user:<input type="text" placeholder="Email or phone" onChange={(e)=>setname(e.target.value)}></input></label><br/>
        <label>password:<input type='password' placeholder="password" onChange={(e)=>setpassword(e.target.value)}></input></label><br/>
        <button onClick={Submit}>Submit</button><br/>
        
        </div>
        <div className="div5">
        Register Now? Click on Signin button<br/>
        <button  onClick={Signin}>Signin</button><br/>
        </div>
        </div>
        </>
    )
}
export default Regis;