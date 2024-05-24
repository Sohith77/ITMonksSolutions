import React from "react";
import '../HowWeWork/SoftwareDevelopment.css';
import Shiva from '../../Photos/Rectangle 89.png';

function Development(){
    return(
    <div>
        <div className="card"></div>
        <div className="softwaredevelopmentbgcolour">
           <div className="softwaredevelopmentheader">
            <h1>Software Development <span className="lifecycle">Life Cycle</span></h1>
            <p className="softwaredevelopmentparagraph">The Software Development Life Cycle (SDLC) encompasses a series of phases from planning and analysis to deployment and maintenance. It ensures systematic development, testing, and management of software products to meet quality standards and customer requirements.</p>
            
           </div>
        </div>
        <img src={Shiva} alt="" className="img1" />


    </div>)
}
export default Development;