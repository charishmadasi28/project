import React from "react";
import { useNavigate } from "react-router-dom";
function Block()
{   
     const nav=useNavigate();
     const  Home=()=>
     {
         nav('/');
     }
    return(
        <div >
        <h1>DRAINAGE PROBLEMS</h1>
        <img src="drainprobs.webp" width="300" height="300"></img><br/>
        "During rainy season, the situation gets even worse as the drain water overflows on the roads. we have been representing the drainage issue for quite a long time but nothing much has been done so far," said Babu Rao and A Venu Gopal Rao, members of residents' welfare association (RWA). Recently, ward corporator Raparthi Kanna visited the colony. "The corporator has assured that our issue would be taken forward to the officials concerned and proper drainage system would be facilitated to the colony," said E Sanyasi Rao, secretary of the RWA. The corporator's assurance has kindled new hope among the residents and they say that they look forward to the development. The colony is located in a prime area and is close to the Simhachalam shrine.
        <img src="neighbourhood.webp" width="300" height="300"></img><br/>
        <h2>1.Blockages</h2>
         Slow-draining sinks, clogged drains, and toilet bowls with poor draining functions are some signs of blocked drainage. They are primarily caused by coffee grounds, hair, tissues, fat, and other oil residues flushed down inappropriately.

         Quick fixes such as downing hot water or liquid cleaning solutions and applying pressure and suction with a plunger can provide temporary relief. However, escalated complications should be corrected by professional drainage companies.

         <h2>2.Broken or displaced joints</h2>
         The movement of the ground, caused by ground instability or drainage repairs, can cause displacement or damage to your pipes. These result in leaks and, worse, structural damage where pilinesose structural support and collapse.

         Solution: Relining pipelines without excavation and the convenience of repairing localized damage or relining joints where digging may not be necessary.

         <h2>3.Fractures</h2>
         Drainage systems are constantly exposed to wear and tear that eventually cause fractures to the pipes. These cracks are typically located near the joints where wastewater can leak through, flow into the lower, surrounding areas, and weaken their structure.

        Solution: It can be challenging to identify fractures deep within. If you suspect cracks or fractures in your drainage system, you can request an inspection from a company specializing in drain maintenance and servicing.

         <h2>4.Root Intrusions</h2>
        In rare instances, tree roots surrounding water lines may burrow deep into the ground and hit the drainage pipelines. They often penetrate through the joints, puncturing holes in the pipework, thus causing blockages that may lead to severe problems.

        <h3>Implication:</h3> 
        Wastewater and foul odor will seep out, trapping debris such as hair, tissue papers, and fats, putting the pipes at risk of bursting.<br/>
        <button onClick={Home}>Home</button><br/>
        </div>
    )
}
export default Block;