import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Regis from "./login";
import { response } from "express";
function Signin()
{
    const nav=useNavigate();
    
    const  Home=()=>
    {
        nav('/');
    }
    const signup=async()=>
    {
        const res=await axios.post("http://localhost:8000/signup/"+name+"/"+mail+"/"+password);
        
            console.log(res.data)
            if(res.data)
            { 
                nav('/Regis')
            }
        
            else{
                alert("alot formed")}
            }
        
    
    const[name,setname]=useState([]);
    const[mail,setmail]=useState([]);
    const[password,setpassword]=useState([]);
    return(
        <>
        <div className="div1"> 
        <img src="Abstract.jpg" width="100" height="100"></img>
        <div className="div3">
          <h1>Sign in</h1>
          </div>
        <div className="div4">
        <label>Name:<input type="text" placeholder="name" onChange={(e)=>setname(e.target.value)}></input></label><br/>
        <label>email or phone:<input type="gmail" placeholder="email or phonenumber"  onChange={(e)=>setmail(e.target.value)}></input></label><br/>
        <label>password:<input type='password' placeholder="password" onChange={(e)=>setpassword(e.target.value)}></input></label><br/>
        <button  onClick={signup}>Submit</button><br/>
        </div>
        <div className="div5">
        <button className="button" onClick={Home}>home</button><br/>
        </div>
        </div>
        
        </>
    )
}
export default Signin;