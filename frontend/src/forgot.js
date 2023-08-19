import React from 'react';
import axios from 'axios';
import {useState} from 'react';
import {useNavigate} from "react-router-dom";
const Fpassword=()=>{
    const nav=useNavigate();
    const  Home=()=>
    {
        nav('/');
    }
const [mail,setmail]=useState([]);
const [newpassword,setNewPassword]=useState([])
const Word=async()=>
{
  try
  {
    const isGoal = await axios.post("https://server-vqm4.onrender.com/fpass/"+mail+"/"+newpassword);
  if(isGoal.data)
  {
    alert("ok")
      nav('/login');

  }
  else{
    alert("Try another method")
} }
catch(e)
  {
    console.log(e)
  }
  }
  

return (
       <>
       <div className="div1">
        
        <div className="div3">
          <h1>Update Password </h1>
          </div>
          
        <div className="div4">
        <br/>
        
           <label>user:<input type='mail' placeholder='Enter mail' onChange={(e)=>{setmail(e.target.value)}}></input></label><br/>
           <label>setNewPassword:<input type='Password' placeholder="password" id="newpassword" name='text' onChange={(e)=>setNewPassword(e.target.value)}></input></label><br/>
    
           <button onClick={Word}>Update</button></div>
           <div className='div5'>
          <button onClick={Home}>Home</button>
           </div>
           </div>
      
        
        
        
       </>
         
        
);
}
export default Fpassword;