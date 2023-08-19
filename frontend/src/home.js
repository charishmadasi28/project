import React from 'react';
import { useNavigate } from "react-router-dom";
// import img from './public/img.webpg'
function Page()
{  
    const nav= useNavigate();
    const Login=() =>{
        nav('/login')
     }
     const Signup=() =>{
        nav('/signup')
     }
    //  const Waste=() =>{
    //     nav('/road')
    //  }
    return(
        <>
        
          <div className="div1">
          <img src="Abstract.jpg" width="100" height="100"></img>
          
          
         <button  className="logbutton" name="button" onClick={Login} >login</button><br/>
         <button  className="button1" name="button1" onClick={Signup} >signup</button><br/>
         
         <div className="div3">
          <h1>WELCOME</h1>
          </div>
          
          </div>
        

        </>

    )
}
export default Page;