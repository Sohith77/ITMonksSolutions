import React,{useEffect} from "react";
import '../HowWeWork/Howwework.css';
import Shiva from "../../Photos/Ellipse 6.png";
import Shiva1 from "../../Photos/Ellipse 7.png";
import Shiva2 from "../../Photos/Ellipse 8.png";
import Shiva3 from "../../Photos/Ellipse 9.png";
import Shiva4 from "../../Photos/Ellipse 10.png";

function HowWeWork(){
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return(
    <div style={{marginTop:"60px"}}>
      
      <div className="howweworkbgcolour">
        <div className="howweworkheader">
          <div className="head61">
          <h1>How We  <span className="class1">Work</span></h1>
          </div>
         
          <p className="howweworkheaderparagraph">At IT Monks Solutions Pvt Ltd, we prioritize collaboration, innovation, and client-centricity in our approach to work. We thoroughly understand our clients' needs through open communication and active listening, then collaborate to develop tailored solutions that exceed expectations. Leveraging the latest technologies and maintaining transparent communication channels, we ensure efficient delivery of high-quality results, aiming to build long-term partnerships and empower clients to thrive in the dynamic digital landscape.</p>
        </div>
          <div>
            
          </div>
      </div>
           <div className="imgdiv">
                <div className=" img1p">
                     <img  className="imgsize " src={Shiva} alt="new" />
                     <p>Understanding Client Needs</p>
                </div>
                <div className=" img1p">
                    <img  className="imgsize"src={Shiva1} alt="new" />
                    <p>Collaboration and Innovation</p>
                </div>
                <div className=" img1p">
                    <img className="imgsize" src={Shiva2} alt="new" />
                    <p>Client-Centric Approach</p>
                </div>
                <div className=" img1p">
                   <img className="imgsize" src={Shiva3} alt="new" />
                   <p>Agile Methodology</p>
                </div>
                <div className=" img1p">
                   <img  className="imgsize" src={Shiva4} alt="new" />
                   
                   <p >Building Long-Term Partnerships</p>
                </div>
           </div>
    </div>
  
  );
}
export default HowWeWork;