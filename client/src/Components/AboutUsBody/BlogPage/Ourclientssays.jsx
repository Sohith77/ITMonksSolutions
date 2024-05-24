import React, { useEffect } from "react";
import "../BlogPage/Ourclientssays.css";
// import pic from './photos/Alaxender C.png';
import pic from "../../Photos/Alaxender C.png";
import { FaQuoteLeft } from "react-icons/fa";
import { BiSolidQuoteRight } from "react-icons/bi";

function Ourclientssays() { 

    
    return (
        <div>
            <div style={{background:"black"}}>
                <h1  className="ourclientssays-heading" style={{paddingTop:"50px"}}>What Our<span style={{color:"goldenrod", marginLeft:"1%" }}>Clients Says</span></h1>
                <h3 className="ourclientssays-believe" style={{marginTop:"px", paddingBottom:"50px"}}>You shouldn’t believe our word What our Clients Says</h3>
            </div>
            <div className="ourclientssays-card" style={{marginTop:"50px"}}>
                <div className="ourclientssays-container">
                    <p className="ourclientssays-p" ><FaQuoteLeft style={{marginTop:"-4%", marginRight:"5%"}} />
                        The system has produced a significant competitive advantage in the industry thanks to SumatoSoft’s well-thought opinions.</p>
                    <p className="ourclientssays-p1" >They shouldered the burden of constantly updating a project management tool with a high level of detail and were committed to producing the best possible solution.<BiSolidQuoteRight className="ourclientssays-design1" /></p>
                </div>
                <div className="ourclientssays-card1">
                    <img className="ourclientssays-imageTag" src={pic} ></img>
                        <a style={{color:"black",fontWeight:"bolder"}}>Alaxender C</a>
                        <a>Co-Founder,IBM</a>
                        <a style={{color:"goldenrod",fontWeight:"bolder"}}>View Case Study</a>
                </div>
            </div>
            <div className="ourclientssays-card">
                <div className="ourclientssays-container">
                    <p className="ourclientssays-p" ><FaQuoteLeft style={{marginTop:"-4%", marginRight:"5%"}}/>
                        The system has produced a significant competitive advantage in the industry thanks to SumatoSoft’s well-thought opinions.</p>
                    <p className="ourclientssays-p1" >They shouldered the burden of constantly updating a project management tool with a high level of detail and were committed to producing the best possible solution.<BiSolidQuoteRight className="ourclientssays-design1" /></p>
                </div>
                <div className="ourclientssays-card1">
                    <img className="ourclientssays-imageTag" src={pic} ></img>
                        <a style={{color:"black",fontWeight:"bolder"}}>Alaxender C</a>
                        <a>Co-Founder,IBM</a>
                        <a style={{color:"goldenrod",fontWeight:"bolder"}}>View Case Study</a>
                </div>
            </div>
            <div className="ourclientssays-card">
                <div className="ourclientssays-container">
                    <p className="ourclientssays-p" ><FaQuoteLeft style={{marginTop:"-4%", marginRight:"5%"}} />
                        The system has produced a significant competitive advantage in the industry thanks to SumatoSoft’s well-thought opinions.</p>
                    <p className="ourclientssays-p1" >They shouldered the burden of constantly updating a project management tool with a high level of detail and were committed to producing the best possible solution.<BiSolidQuoteRight className="ourclientssays-design1" /></p>
                </div>
                <div className="ourclientssays-card1">
                    <img className="ourclientssays-imageTag" src={pic} ></img>
                        <a style={{color:"black",fontWeight:"bolder"}}>Alaxender C</a>
                        <a>Co-Founder,IBM</a>
                        <a style={{color:"goldenrod",fontWeight:"bolder"}}>View Case Study</a>
                </div>
            </div>
        </div>
        
    )

}

export default Ourclientssays;