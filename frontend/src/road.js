import React from "react";
import { useNavigate } from "react-router-dom";
function Waste()
    { 
        const nav=useNavigate();
        const  Home=()=>
         {
             nav('/');
         }
    return(
        <div>
        <h1>ROAD PROBLEMS</h1>
        <img src="roadprobs.webp" width="300" height="300"></img>
        <h2>1. Inadequate Roads:</h2>
        Roads are bad and inadequate in India. There are 34 km long roads per 100 sq. km area in India while in Japan 270 km and in West Germany 167 km long roads per 100 sq. km area are there. Government should spend more on the development of roads.

        <h2>2. Heavy Taxes:</h2>
         There is heavy tax burden on motor transport in India. Tax burden per motor vehicle in India is Rs. 3500 while in America it is Rs. 860 and in Britain Rs. 470. This tax burden should be lowered.



         <h2>3. No proper Maintenance:</h2>
         Roads are not maintained properly in India. Less than 0.1 percent of the national income is spent on the maintenance of roads in India, while in Japan it is 3 percent of the national income.

         <h2> 4. Lack of Co-ordination:</h2>
          There is little co-operation and co- ordination among different states with regard to motor transport. As such, motor transport faces lot of difficulties. The states should pursue a co-ordinate policy in this matter.

        <h2>5. Less Roads in Rural Areas:</h2>

        Sixty percent of villages are without roads in India. It adversely affects our agriculture and rural economy. Government should develop roads speedily in rural areas.<br/>
        <h2>6. Undisciplined Driving and Accidents:</h2>

         Most of the drivers on the roads are unskilled and untrained. They also drink alcohol while driving. As such, road accidents are more frequent in India.

        <h2>7. Bad Conditions of Road:</h2>
        In India, roads are not well-maintained as there are no timely repairs. It causes discomfort and quick depreciation of vehicles.<br/>
        <button onClick={Home}>Home</button><br/>
        
        </div>
    )
}
export default Waste;