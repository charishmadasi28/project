import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
function Searchbar()
{
    const nav=useNavigate();
    const Submit=() =>{
        nav('/')
    }
    const[search,setsearch]=useState([]);
    return(
        <>
        <div class="topnav">
  <a class="active" href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#contact">Contact</a>
  <div class="search-container">
    <form action="/action_page.php">   
      <input type="text" placeholder="Search.." onChange={(e)=>setsearch(e.target.value)}></input><br/>
      <button  onClick={Submit}>submit</button><br/>
    </form>
  </div>
</div>


        </>
    )
}