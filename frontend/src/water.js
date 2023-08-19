import React from "react";
import { useNavigate } from "react-router-dom";
function Crisis()
    { 
        const nav=useNavigate();
        const  Home=()=>
         {
             nav('/');
         }
    return(
        <div>
        <h1>WATER PROBLEMS</h1>
        <img src="Water-crisis.jpg" width="300" height="300"></img><br/>
        <h2>India's water and sanitation crisis</h2>
        Out of its population of 1.3 billion people, 91 million people (6% of the population) lack access to safe water, and 746 million people (54%) lack access to safely managed household sanitation facilities. Current challenges include extreme water stress, contaminated surface water and lack of access to piped water supply. The effects from climate change like droughts and rising sea levels also affect access to safe water and sanitation for families in India.

        These factors, combined with the current initiative by the Government of India to provide tap water connections to every household by 2024, have created unprecedented urgency to implement effective solutions to increase access to safe water and sanitation.<br/>
        <img src="water2.jpeg" width="300" height="300"></img><br/>
        
        <button onClick={Home}>Home</button><br/>
        
        </div>
    )
}
export default Crisis;