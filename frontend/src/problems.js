import React from "react";
import { useNavigate } from "react-router-dom";
 const Details=()=>
{
    const nav=useNavigate();
   const  Road=()=>
    {
        nav('/road');
    }
    

   const  Drainage=()=>
    {
        nav('/Drainage');
    }
    const  Water=()=>
    {
        nav('/Water');
    }
    const  Home=()=>
         {
             nav('/');
         }
    return(
        <>
        <button onClick={Road}>Road</button><br/>
        <img src="roadprobs.webp" width="300" height="300"></img><br/>
       <button onClick={Drainage}>Drainage</button><br/>
       <img src="drainprobs.webp" width="300" height="300"></img><br/>
       <button onClick={Water}>Water</button><br/>
       <img src="Water-crisis.jpg" width="300" height="300"></img><br/>
       <button onClick={Home}>Home</button><br/>
        </>
    );
}
export default Details;


