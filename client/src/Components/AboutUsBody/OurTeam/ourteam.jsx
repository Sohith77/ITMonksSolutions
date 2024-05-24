import React,{useEffect} from "react";
import Footer from "../../Footer/Footer/Blackfooter";
import ResNavbar from "../../Navbar/ResNavbar";
import "../OurTeam/ourteam.css";
import Bluepic from "../../Photos/bluepic.png";
import Car11 from "../../Photos/car11.jpg";
import Car22 from "../../Photos/car22.jpg";
import Car33 from "../../Photos/car33.jpg";
import Car44 from "../../Photos/car44.jpg";
import Car55 from "../../Photos/car55.jpg";
import Car66 from "../../Photos/car66.jpg";
import Greenpic from "../../Photos/greenpic.png";
import Greypic from "../../Photos/greypic.png";
import Redpic from "../../Photos/redpic.png";



function OurTeam() {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <>
            <ResNavbar />
            <div className="our-team-maindiv" id="ourteamsDiv" style={{marginTop:"60px"}}>
                <div className="our-team-heading">
                    <h1 className="heading-content">Our <span>Team</span></h1>
                </div>

                <div className="ourteam-photo-cards">

                    <div className="ourteam-photo">
                        <img src={Redpic} className="color-photo" alt="new" />
                        <p className="ourteam-members-name">Ramya Krishna</p>
                        <p className="ourteam-memebers-role">HR Manager</p>
                    </div>
                    <div className="ourteam-photo">
                        <img src={Greypic} className="color-photo" alt="new" />
                        <p className="ourteam-members-name1">Ajay Sonkari</p>
                        <p className="ourteam-memebers-role">Developer Head</p>
                    </div>
                    <div className="ourteam-photo">
                        <img src={Greenpic} className="color-photo" alt="new" />
                        <p className="ourteam-members-name">Raj Kumar</p>
                        <p className="ourteam-memebers-role">QA Head</p>
                    </div>
                    <div className="ourteam-photo">
                        <img src={Bluepic} className="color-photo" alt="new" />
                        <p className="ourteam-members-name">Bala</p>
                        <p className="ourteam-memebers-role">DevOps Head</p>
                    </div>

                </div>
                <div className="main-ourteam-silder">
                    <div className="ourteam-photo-slider">
                        <div className="ourteam-slider">
                            <img src={Car11} className="ourteam-img" alt="new" />
                        </div>
                        <div className="ourteam-slider">
                            <img src={Car22} className="ourteam-img" alt="new" />
                        </div>
                        <div className="ourteam-slider">
                            <img src={Car33} className="ourteam-img" alt="new" />
                        </div>
                        <div className="ourteam-slider">
                            <img src={Car44} className="ourteam-img" alt="new" />
                        </div>
                        <div className="ourteam-slider">
                            <img src={Car55} className="ourteam-img" alt="new" />
                        </div>
                        <div className="ourteam-slider">
                            <img src={Car66} className="ourteam-img" alt="new" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default OurTeam;