import React from "react";
import '../HowWeWork/ProjectOrganization.css';
import Shiva from '../../Photos/Sync Settings.png';
import Shiva1 from '../../Photos/Organization .png';
import Shiva2 from '../../Photos/Personal .png';

function ProjectOrganization(){
  return(
      <div className="projectorganizationbgcolour">
          <div className="projectorganizationheader">
             <h1>Effective Project <span className="organization">Organization </span></h1>
             <p className="projectorganizationparagraph">An effective organization emphasizes streamlined processes and client-centricity, ensuring smooth execution of tasks and optimized resource allocation. Through open communication, active listening, and regular feedback loops, it aligns with client needs, fostering satisfaction and long-term partnerships while driving success and growth.</p>
          </div>
          <div className="flex">
              <div className="paragraph2">
              <div className="h">
                <h>Streamlined Processes and <center>Workflows</center></h>
              </div>
                 <div className="img"> 
                   <img src={Shiva} alt="new" />
                 </div>
                 <div className="para1">
                  <p>
                      <ul>
                      <li>Defining and documenting each<br/>step of workflow helps eliminate<br/>redundancies and bottlenecks,<br/>ensuring smooth operations.</li>
                      <li>Assigning tasks and resources<br/>strategically maximizes productivity<br/>and minimizes waste.</li>
                      <li>Regular evaluation and refinement<br/>of processes enable the<br/>organization to adapt to changing<br/>needs and optimize efficiency over<br/> time.</li>
                     </ul>
                  </p>
                 </div>
              </div>   
              <div className="paragraph2">
                 <div className="h">
                <h>Costumer-Centric  Approach </h>
                </div>
                <div className="img imgmiddle"> 
                   <img src={Shiva1} alt="new" />
                </div>
                <div className="para1">
                  <p>
                      <ul>
                      <li>Understanding client preferences,<br/> challenges, and objectives guides<br/> the organization in tailoring <br/> products and services to meet their<br/> specific requirements.</li> 
                      <li>Keeping clients informed and <br/>engaged throughout the interaction<br/> process. </li>
                      <li>Actively soliciting and incorporating <br/> client feedback enables continuous<br/> improvement and alignment with<br/> evolving customer expectations.</li>
                      </ul>
                  </p>
                </div>
               <div/>
               </div>
               <div className="paragraph2"> 
                 <div className="h">
                   <h>Continuous Improvement and<center> Adaptability</center> </h>
                 </div>
                  <div className="img"> 
                   <img src={Shiva2} alt="new" />
                 </div>
                 <div className="para1">
                  <p>
                      <ul>
                      <li>Regularly assessing performance<br/> metrics and outcomes allows for the <br/>timely identification of areas for<br/> improvement and adjustment.</li> 
                      <li>Embracing flexibility and agility<br/> in decision-making and operations<br/> enables the organization to swiftly <br/>adapt to changing market conditions<br/> and customer needs.</li> 
                      <li>Cultivating a mindset of continuous<br/> learning and innovation empowers<br/> employees to experiment.</li>
                      </ul>
                  </p>
                 </div>
                </div>
              
              
          </div>
      </div>
  )
}
export default ProjectOrganization;