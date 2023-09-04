import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function Signin()
{
    const nav=useNavigate();
    const  Home=()=>
    {
        nav('/');
    }

    const Submit=async()=>
    {
        
            try{
                
                const res1=await axios.post("https://server-vqm4.onrender.com/signup1/"+name+"/"+mail)
                if (res1.data)
                {
                    alert("already used")
                }
                else{
                if (cpassword===password){
                const res=await axios.post("https://server-vqm4.onrender.com/signup/"+name+"/"+mail+"/"+number+"/"+password+"/"+cpassword)
                    if (res.data)
                    {
                        alert("saved");
                        nav('/login')
                    }
                    else {
                        alert("details not found! signup!!");
                    }
                
                    }
                    else{
                       alert("not matched try again!!!");
                        }
                   }
    }
       
    
            catch(e)
            {
                alert("fill the details")
                console.log(e)
            }
        
        
    }
    
    // const  Project=()=>
    // {
    //     nav('/');
    // }
    const[name,setname]=useState([]);
    const[mail,setmail]=useState([]);
    const[password,setpassword]=useState([]);
    const[cpassword,setcpassword]=useState([]);
    const[number,setnumber]=useState([]);
    return(
        <>
        
        <div className="div1">
        <img src="Abstract.jpg" width="100" height="100"></img>
        <div className="div3">
          <h1>Sign in</h1>
          </div>
        <div className="div5">
        <label>Name:<input type="text" placeholder="name" onChange={(e)=>setname(e.target.value)}></input></label><br/>
        <label>email:<input type="text" placeholder="email"  onChange={(e)=>setmail(e.target.value)}></input></label><br/>
        <label>phone number:<input type="phone number" placeholder="phone number"  onChange={(e)=>setnumber(e.target.value)}></input></label><br/>
        <label>password:<input type='password' placeholder="password" onChange={(e)=>setpassword(e.target.value)}></input></label><br/>
        <label>confirm password:<input type='cpassword' placeholder="cpassword" onChange={(e)=>setcpassword(e.target.value)}></input></label><br/>
        <button  onClick={Submit}>Submit</button><br/>
        
        
        <button className="button" onClick={Home}>home</button><br/>
        </div>
        </div>
        
        </>
    )
}
export default Signin;