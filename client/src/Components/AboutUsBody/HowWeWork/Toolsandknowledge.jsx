import React from "react";
import '../HowWeWork/Toolsandknowledge.css';
import img1 from "../../Photos/react-icon.png";
import img2 from "../../Photos/angular-icon.png";
import img3 from "../../Photos/vue-icon.png";
import img4 from "../../Photos/Rectangle 63.png";
import img5 from "../../Photos/springboot-icon.png";
import img6 from "../../Photos/nodejs-icon.png";
import img7 from "../../Photos/docker-icon.png";
import img8 from "../../Photos/gitlab-icon.png";
// import img9 from "../../Photos/Rectangle 69.png";
import img10 from "../../Photos/xFVFxOioAU 2.png";
import img11 from "../../Photos/Rectangle 61.png";
import img12 from "../../Photos/selenium-icon.png";
import img13 from "../../Photos/kubernetes-icon.png";
import img14 from "../../Photos/sql-icon.png";
import img15 from "../../Photos/mongodb-icon.png";
import img16 from "../../Photos/oracle-icon.png";
import img17 from "../../Photos/ecount-icon.png";
import img18 from "../../Photos/oracle-application-icon";
import img19 from "../../Photos/sap-icon.png";
import img20 from "../../Photos/azure-icon.jpg";
import img21 from "../../Photos/aws-icon.png";
import img22 from "../../Photos/cloud-icon.png";
import img23 from "../../Photos/power-bi-icon.png";
import img24 from "../../Photos/sap-bo-icon.jpg";
import img25 from "../../Photos/tableau-icon.png";



function ToolsAndKnowledge(){
    return(
    <div style={{backgroundColor:"black"}}>
            <div className="Toolsandknowledge">
                <h1>Tools and <span className="knowledge">Knowledge</span></h1>
            </div>
        <div className="card-container">
            <div className="cards ">
              <a className="card1">
                <h1 style={{color:"black"}}>Frontend</h1>
                <h style={{color:"black"}}>React.js</h>
                <img src={img1} alt="" className="reactimg"/>
                <h style={{color:"black"}}>Angular</h>
                <img src={img2} alt="" className="reactimg"/>
                <h style={{color:"black"}}>Vue.js</h>
                <img src={img3} alt="" className="reactimg"/>
                <div class="go-corner">
                <div class="go-arrow">  
           </div>  
        </div>
        </a>
    </div>
            
            <div className="cards">
                <a className="card1">
                <h1 style={{color:"black"}}>Backend</h1>
                <h style={{color:"black"}}>Spring Boot</h>
                <img src={img5} alt="" className="reactimg"/>
                <h style={{color:"black"}}>Node JS</h>
                <img src={img6} alt="" className="reactimg"/>
                <h style={{color:"black"}}>Express JS</h>
                <img src={img4} alt="" className="reactimg"/>
                <div class="go-corner" >
     <div class="go-arrow">
        
      </div>
      </div>
      </a>
            </div>
            
            <div className="cards">
            <a className="card1">
                <h1 style={{color:"black"}}>Testing</h1>
                <h style={{color:"black"}}>Mocha</h>
                <img src={img10} alt="" className="reactimg"/>
                <h style={{color:"black"}}>J Unit</h>
                <img src={img11} alt="" className="reactimg"/>
                <h style={{color:"black"}}>Selenium</h>
                <img src={img12} alt="" className="reactimg"/>
                <div class="go-corner" >
                <div class="go-arrow">  
           </div>  
        </div>
        </a>
            </div>
            <div className="cards">
            <a className="card1">
                <h1 style={{color:"black"}}>DevOps</h1>
                <h style={{color:"black"}}>Docker</h>
                <img src={img7} alt="" className="reactimg"/>
                <h style={{color:"black"}}>GitLab</h>
                <img src={img8} alt="" className="reactimg"/>
                <h style={{color:"black"}}>Kubernetes</h>
                <img src={img13} alt="" className="reactimg"/>
                <div class="go-corner">
                <div class="go-arrow">  
           </div>  
        </div>
        </a>
            </div>
        </div>
        <div className="card-container">
            <div className="cards">
            <a className="card1">
                <h1 style={{color:"black"}}>Databases</h1>
                <h style={{color:"black"}}>PL/SQL</h>
                <img src={img14} alt="" className="reactimg"/>
                <h style={{color:"black"}}>MangoDB</h>
                <img src={img15} alt="" className="reactimg"/>
                <h style={{color:"black"}}>ORACLE</h>
                <img src={img16} alt="" className="reactimg"/>
                <div class="go-corner">
                <div class="go-arrow">  
           </div>  
        </div>
        </a>
            </div>
            <div className="cards">
            <a className="card1">
                <h1 style={{color:"black"}}>ERP</h1>
                <h style={{color:"black"}}>E COUNT</h>
                <img src={img17} alt="" className="reactimg"/>
                <h style={{color:"black"}}>Orcale applications 11i</h>
                <img src={img18} alt="" className="reactimg"/>
                <h style={{color:"black"}}>SAP</h>
                <img src={img19} alt="" className="reactimg"/>
                <div class="go-corner">
                <div class="go-arrow">  
           </div>  
        </div>
        </a>
            </div>
            <div className="cards">
            <a className="card1">
                <h1 style={{color:"black"}}>Cloud</h1>
                <h style={{color:"black"}}>Azure</h>
                <img src={img20} alt="" className="reactimg"/>
                <h style={{color:"black"}}>Amazon Web Services</h>
                <img src={img21} alt="" className="reactimg"/>
                <h style={{color:"black"}}>Google Cloud Platform</h>
                <img src={img22} alt="" className="reactimg"/>
                <div class="go-corner">
                <div class="go-arrow">  
           </div>  
        </div>
        </a>
            </div>
            <div className="cards">
                {/* <ul>
                    <li>
                        <a href="#">Frontend</a>
                        <ul className="dropdown">
                            <li><a href="#">Reacr.Js</a></li>
                            <img src={img1} alt="" className="reactimg"/>
                            <li><a href="#">Angular</a></li>
                            <img src={img2} alt="" className="reactimg"/>
                            <li><a href="#">Vue.js</a></li>
                            <img src={img3} alt="" className="reactimg"/>
                        </ul>
                    </li>
                </ul> */}
                <a className="card1">
                <h1 style={{color:"black", flexDirection:"row", fontSize:"25px"}}><b>Reporting Tools</b></h1>
                <h style={{color:"black"}}>Power BI</h>
                <img src={img23} alt="" className="reactimg"/>
                <h style={{color:"black"}}>SAP BO/SAS</h>
                <img src={img24} alt="" className="reactimg"/>
                <h style={{color:"black"}}>Tableau</h>
                <img src={img25} alt="" className="reactimg"/>
                <div class="go-corner">
                <div class="go-arrow">  
           </div>  
        </div>
        </a>
            </div>
        </div>  
    </div>
    

    
    );
}

export default ToolsAndKnowledge;