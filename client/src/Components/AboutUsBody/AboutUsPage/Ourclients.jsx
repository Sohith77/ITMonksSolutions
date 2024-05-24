import React from "react";
import '../AboutUsPage/Ourclients.css';

import cgs from "../../Photos/cgs.png";
import ibm from "../../Photos/ibm.png";
import wipro from "../../Photos/wipro.png";
import icicibank from "../../Photos/icicibank.png";
import sutherland from "../../Photos/sutherland.png";
import vasavi from "../../Photos/vasavi.png";
import apollo from "../../Photos/apollo.png";
import coforge from "../../Photos/coforge.png";
import tata from "../../Photos/tata.png";
import panzer from "../../Photos/panzer.png";
import ncr from "../../Photos/ncr.png";
import fyient from "../../Photos/fyient.png";
import kotak from "../../Photos/kotak.png";
import cadeploy from "../../Photos/cadeploy.png";
import advarra from "../../Photos/advarra.png";
import CBSI from "../../Photos/CBSI.png";
import cloudbclabs from "../../Photos/cloudbclabs.png";
import global from "../../Photos/global.png";
import antra from "../../Photos/antra.png";
import lvpel from "../../Photos/lvpel.png";
import lavoura from "../../Photos/lavoura.png";
import interns from "../../Photos/interns.png";
import bricks from "../../Photos/bricks.png";
import techwish from "../../Photos/techwish.png";
import quess from "../../Photos/quess.png";
import h3technologies from "../../Photos/h3technologies.png";
import rksglobal from "../../Photos/rksglobal.png";
import talisman from "../../Photos/talisman.png";


function Ourclients() { 
    const OurClientsimagesArray = [
     sutherland,wipro,ibm,ncr,icicibank,kotak,tata,panzer,apollo,coforge,cgs,fyient,talisman,rksglobal,h3technologies,
      quess,techwish,bricks,interns,lavoura,lvpel,antra,global,cloudbclabs,CBSI,advarra,cadeploy,vasavi
    ];
    return (
        <div>
            <h1 className="ourclients-heading"style={{background:"black"}}>Our <span style={{color:"goldenrod"}}>Clients</span></h1>
            <div className="ourclients-scrolling-icons-container">
      {/* <div className="scrolling-icons-wrapper">
        {imagesArray.map((icon, index) => (
          <img key={index} src={icon} alt={`ImagesArray ${index + 1}`} className="imagesArray" />
        ))}
      </div> */}
      <marquee className="ourclients-scrolling-icons-wrapper" behavior="alternate" style={{marginTop:"30px", marginButton:"30px"}}>
        {OurClientsimagesArray.map((icon, index) => (
          <img key={index} src={icon} alt={`ImagesArray ${index + 1}`} className="OurClientsimagesArray" />
        ))}
        </marquee> 
      {/* <marquee>df fgwetrtdfg dtgygtff</marquee> */}
    </div>
        </div>
    )

}

// export default Ourclients;
export default Ourclients;