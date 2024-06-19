import React,{useEffect, useState} from "react";
import './focusServices.css'
import codingC from '../Photos/coding.png';
import codingG from '../Photos/codingG.png';
import serverC from '../Photos/server.png';
import serverG from '../Photos/serverG.png';
import dataScienceC from '../Photos/data-science.png';
import dataScienceG from '../Photos/data-scienceG.png';
import digitalServicesG from '../Photos/digital-servicesG.png'
import digitalServicesC from '../Photos/digital-services.png';
import technologyC from '../Photos/technology.png';
import technologyG from '../Photos/technologyG.png';
import PercentageBar from '../Home/percentageBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretDown} from '@fortawesome/free-solid-svg-icons'
import {faCheck} from '@fortawesome/free-solid-svg-icons'
import {faMedal} from '@fortawesome/free-solid-svg-icons'
import microchip from '../Photos/microchip.png'
import circelR from '../Photos/circle.png'
import IconMedal from '../Photos/icon.png'
import MobileAppG from '../Photos/applicationG.png'
import MobileAppW from '../Photos/applicationW.png'
import healthcareG from '../Photos/healthcare.png'
import healthcareW from '../Photos/healthcareW.png'
import ContentW from '../Photos/content-writingW.png'
import ContentG from '../Photos/content-writing.png'
import GraphicG from '../Photos/graphic-design.png'
import GraphicW from '../Photos/graphic-designW.png'
import HrG from '../Photos/HrG.png'
import HrW from '../Photos/HrW.png'
import nonITG from '../Photos/interview.png'
import nonITW from '../Photos/interviewW.png'

import AOS from 'aos';
import 'aos/dist/aos.css';



function FocusServices(){

    useEffect(() => {
        AOS.init();
    }, [])
    AOS.init({
        duration: 500,
        once: true,
    });

    const [description, setDescription] = useState('Our Strategy');
    const [activeButton, setActiveButton] = useState('Our Strategy')
    const [percentage, setPercentage] = useState(60);
    const [count500, setCount500] = useState(0);
    const [count5K, setCount5K] = useState(0);
    const [animationStarted, setAnimationStarted] = useState(false);
   



    useEffect(() => {
        const target500 = 500;
        const target5K = 5.1;
        const animationDuration = 5000; // Duration in milliseconds (5 seconds)
        const steps500 = target500 / (animationDuration / 100);
        const steps5K = target5K / (animationDuration / 100); 

        const handleScroll = () => {
            const element = document.querySelector('.leftContent3131');
            if (!animationStarted && isElementInViewport(element)) {
                setAnimationStarted(true);

                let intervalId500;
                let intervalId5K;

                const animateCount500 = () => {
                    intervalId500 = setInterval(() => {
                        setCount500((prevCount) => {
                            const nextCount = prevCount + steps500;
                            return nextCount >= target500 ? target500 : nextCount;
                        });
                    }, 100);
                };

                const animateCount5K = () => {
                    intervalId5K = setInterval(() => {
                        setCount5K((prevCount) => {
                            const nextCount = prevCount + steps5K;
                            return nextCount >= target5K ? target5K : nextCount;
                        });
                    }, 100); 
                };

                // Start counting animations
                animateCount500();
                animateCount5K();

                // Clean up intervals when component unmounts or animation is completed
                setTimeout(() => {
                    clearInterval(intervalId500);
                    clearInterval(intervalId5K);
                }, animationDuration);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [animationStarted]);

    const isElementInViewport = (el) => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    };


    const handleButtonClick = (text) => {
        setDescription(text);
        setActiveButton(text);
        setPercentage(text === 'Our Mission' ? 80 : text === 'Our Strategy' ? 60 : text === 'Our Vision' ? 90 : 0);
    };


    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    /**************coding icon logic************* */
    const handleMouseHover1 = (e) => {
        e.currentTarget.querySelector('img').src = codingC;
    };

    const handleMouseOut1 = (e) => {
        e.currentTarget.querySelector('img').src = codingG;
    };
/************* server Icon logic********** */

    const handleMouseHover2 = (e) => {
        e.currentTarget.querySelector('img').src = MobileAppW;
    };

    const handleMouseOut2 = (e) => {
        e.currentTarget.querySelector('img').src = MobileAppG;
    };
   
/************* digital service Icon logic********** */

    const handleMouseHover3 = (e) => {
        e.currentTarget.querySelector('img').src = digitalServicesC;
    };

    const handleMouseOut3 = (e) => {
        e.currentTarget.querySelector('img').src = digitalServicesG;
    };
/************* dataScienceC Icon logic********** */

    const handleMouseHover4 = (e) => {
        e.currentTarget.querySelector('img').src = healthcareW;
    };

    const handleMouseOut4 = (e) => {
        e.currentTarget.querySelector('img').src = healthcareG;
    };
/************* technology Icon logic********** */

    const handleMouseHover5 = (e) => {
        e.currentTarget.querySelector('img').src = ContentW;
    };

    const handleMouseOut5 = (e) => {
        e.currentTarget.querySelector('img').src = ContentG;
    };
/************* graphic Icon logic********** */

    const handleMouseHover6 = (e) => {
        e.currentTarget.querySelector('img').src = GraphicW;
    };

    const handleMouseOut6 = (e) => {
        e.currentTarget.querySelector('img').src = GraphicG;
    };
/************* ecommerce Icon logic********** */

    const handleMouseHover7 = (e) => {
        e.currentTarget.querySelector('img').src = dataScienceC;
    };

    const handleMouseOut7 = (e) => {
        e.currentTarget.querySelector('img').src = dataScienceG;
    };
   
/************* digital Marketing Icon logic********** */

    const handleMouseHover8 = (e) => {
        e.currentTarget.querySelector('img').src = technologyC;
    };

    const handleMouseOut8 = (e) => {
        e.currentTarget.querySelector('img').src = technologyG;
    };
/************* digital Marketing Icon logic********** */

    const handleMouseHover9 = (e) => {
        e.currentTarget.querySelector('img').src = nonITW;
    };

    const handleMouseOut9 = (e) => {
        e.currentTarget.querySelector('img').src = nonITG;
    };
/************* digital Marketing Icon logic********** */

    const handleMouseHover10 = (e) => {
        e.currentTarget.querySelector('img').src = HrW;
    };

    const handleMouseOut10 = (e) => {
        e.currentTarget.querySelector('img').src = HrG;
    };
   

    return(
        <>

        <section className="container3131">

            <div className="head3131">
                <h3 className="focus3131" data-aos = "fade-up" data-aos-delay="100"><b>OUR FOCUSABLE SERVICES</b></h3>
            </div>
            <div className="business3131">
                <h1 className="desc3131" data-aos = "fade-up" data-aos-delay="200">How Do We Work To Help You <br /> In Startup Business</h1>
            </div>
            <div className="paragraph3131">
                <p className="para3131" >At IT Monks Solutions, we specialize in providing comprehensive technology and human resource consulting services to businesses across various industries. Our tailored solutions are designed to meet the unique needs and challenges of each client, whether they are small startups or large corporations. With our industry expertise and scalable offerings, we deliver insights and solutions that drive growth and success​</p>
            </div>

            <div className="rows3131" data-aos = "fade-up" data-aos-delay="300" >
               <a href="/Web Design And Development" style={{color:"black", textDecoration:"none"}}><div className="projectM3131" style={{cursor:"pointer"}}
                onMouseOver={handleMouseHover1}
                onMouseOut={handleMouseOut1} >
                    <img className="projectM3131Img" src={codingG} alt=""  style={{width:'60px'}}/>
                    <h2 className="projectMnames3131">Web Design And Development</h2>
                    <div className="layer3131"></div>
                </div></a> 
               <a href="/Mobile Application Development" style={{color:"black", textDecoration:"none"}}><div className="AppDev3131"  style={{cursor:"pointer"}}
                 onMouseEnter={handleMouseHover2}
                 onMouseLeave={handleMouseOut2} >
                    <img src={MobileAppG} alt=""  style={{width: '60px'}}/>
                    <h2 className="projectMnames3131">Mobile Application Development</h2>
                </div></a> 
                <a href="/Testing Services" style={{color:"black", textDecoration:"none"}}><div className="software3131"  style={{cursor:"pointer"}}
                 onMouseEnter={handleMouseHover3}
                 onMouseLeave={handleMouseOut3} >
                    <img src={digitalServicesG} alt=""  style={{width: '60px'}}/>
                    <h2 className="projectMnames3131">Testing Services</h2>
                </div></a>
                <a href="/Health Care Services" style={{color:"black", textDecoration:"none"}}><div className="website3131" style={{cursor:"pointer"}}
                 onMouseEnter={handleMouseHover4}
                 onMouseLeave={handleMouseOut4}  >
                    <img src={healthcareG} alt=""  style={{width: '60px'}}/>
                    <h2 className="projectMnames3131">Health Care Services</h2>
                </div></a>
                <a href="/Content Writing And Moderation" style={{color:"black", textDecoration:"none"}}><div className="technology3131"  style={{cursor:"pointer"}}
                 onMouseEnter={handleMouseHover5}
                 onMouseLeave={handleMouseOut5} >
                    <img src={ContentG} alt=""  style={{width: '60px'}}/>
                    <h2 className="projectMnames3131">Content Writting And Moderation</h2>
                </div></a>
               <a href="/Graphic Designing" style={{color:"black", textDecoration:"none"}}><div className="Resource3131"  style={{cursor:"pointer"}}
                 onMouseEnter={handleMouseHover6}
                 onMouseLeave={handleMouseOut6} >
                    <img src={GraphicG} alt=""  style={{width: '60px'}}/>
                    <h2 className="projectMnames3131">Graphic Designing</h2>
                </div></a> 
                <a href="/E-Commerce" style={{color:"black", textDecoration:"none"}}><div className="ServicesHR3131"  style={{cursor:"pointer"}}
                 onMouseEnter={handleMouseHover7}
                 onMouseLeave={handleMouseOut7}  >
                    <img src={dataScienceG} alt=""  style={{width: '60px', color:"goldenrod"}}/>
                    <h2 className="projectMnames3131">E-Commerce</h2>
                </div></a>
                <a href="/Digital Marketing" style={{color:"black", textDecoration:"none"}}><div className="ServicesHR3131"  style={{cursor:"pointer"}}
                 onMouseEnter={handleMouseHover8}
                 onMouseLeave={handleMouseOut8}  >
                    <img src={technologyG} alt=""  style={{width: '60px', color:"goldenrod"}}/>
                    <h2 className="projectMnames3131">Digital Marketing</h2>
                </div></a>
                <a href="/Non-IT Services" style={{color:"black", textDecoration:"none"}}><div className="ServicesHR3131"  style={{cursor:"pointer"}}
                 onMouseEnter={handleMouseHover9}
                 onMouseLeave={handleMouseOut9}  >
                    <img src={nonITG} alt=""  style={{width: '60px', color:"goldenrod"}}/>
                    <h2 className="projectMnames3131">Non-IT Services</h2>
                </div></a>
                <a href="/HR Services" style={{color:"black", textDecoration:"none"}}><div className="ServicesHR3131"  style={{cursor:"pointer"}}
                 onMouseEnter={handleMouseHover10}
                 onMouseLeave={handleMouseOut10}  >
                    <img src={HrG} alt=""  style={{width: '60px', color:"goldenrod"}}/>
                    <h2 className="projectMnames3131">HR Services</h2>
                </div></a>
            </div>
            <div className= "content3131">
                <div className="leftContent3131">
                    <div className="vertical3131">
                        <div className="v31">
                            <h3>Awesome Clients <br /><span style={{fontFamily:'Times New Roman',fontSize:'36px '}}>{Math.floor(count5K)}k+</span></h3>
                        </div>
                        <div style={{width:'80px',height:'.2vh', backgroundColor:'gray'}}>

                        </div>
                        <div className="v25">
                            <h3>Awesome Clients <br /><span style={{fontFamily:'Hollow Space',fontSize:'36px'}}> {Math.floor(count500)}+</span></h3>
                        </div>
                    </div>
                    <div className="circle3131">
                        <img src={circelR} alt="" className="circleR3131" />
                        <div className="innerCircle3131">
                            <img src={IconMedal} alt="" />
                        </div>
                    </div>
                </div>
                <div className="rightContent3131">
                    <div className="trusted31">
                        <h3 className="trusted3131" data-aos = "fade-up" data-aos-delay="100"> 5M+ Trusted Our Clients</h3>
                    </div>
                    <div className="truly31">
                        <h1 className="truly3131" data-aos = "fade-up" data-aos-delay="300">We Prominent Truly Trusted <br />IT Business Solutions</h1>
                        <p className="trustedPara3131">Transmds is the world’s driving worldwide coordinations supplier — we uphold industry and exchange the worldwide trade of merchandi</p>
                    </div>
                    <div className="btnDesc3131">
                        <div className="Threebuttons31">
                        <button 
                            className={`strategy3131 strat3131 ${activeButton === 'Our Strategy' ? 'active' : ''}`}
                             onClick={()=>handleButtonClick("Our Strategy")}>Our Strategy</button>
                             {activeButton === "Our Strategy" && (
                                <span className="spann3131" style={{color:'goldenrod'}}><FontAwesomeIcon icon={faCaretDown} /> </span>
                             )}
                        </div>
                           <div className="Threebuttons31">
                           <button className={`mission3131 ${activeButton === 'Our Mission' ? 'active' : ''}`}
                             onClick={()=>handleButtonClick("Our Mission")}>Our Mission</button>
                              {activeButton === "Our Mission" && (
                                <span className="spann3131" style={{color:'goldenrod'}}><FontAwesomeIcon icon={faCaretDown} /> </span>
                             )}
                           </div>
                            <div className="Threebuttons31">
                            <button className={`vision3131 ${activeButton === 'Our Vision' ? 'active' : ''}`}
                             onClick={()=>handleButtonClick("Our Vision")}>Our Vision</button>
                              {activeButton === "Our Vision" && (
                                <span className="spann3131" style={{color:'goldenrod'}}><FontAwesomeIcon icon={faCaretDown} /> </span>
                             )}
                            </div>
                           
                    </div>
                    <div className="descContainer3131">
                        {description && (
                            <div className="popContainer3131">
                                {description === "Our Mission" && (
                                    <>
                                    <div className="paradesc3118">
                                    <p> <span style={{color: 'goldenrod'}}><FontAwesomeIcon icon={faCheck}/></span> Preaching Worship An Online Family</p>
                                    <p> <span style={{color: 'goldenrod'}}><FontAwesomeIcon icon={faCheck}/></span> Preaching Worship An Online Family</p>
                                    </div>
                                     

                                    <div className="pophead3131">
                                        
                                    <h4> <img  className="microchip3131" src={microchip} alt="" style={{width:'24px', borderRadius:'50%'}} /> Artificial Intelligence</h4>
                                    <h4> <img  className="microchip3131" src={microchip} alt="" style={{width:'24px', borderRadius:'50%'}} /> Clouds Backup Services</h4>
                                    
                                    
                                 
                                    </div>
                                    <div className="percentagesss">
                                        <div className="percentageHead3131">
                                            <p>Real technology solutions</p>
                                            <p>{percentage}%</p>
                                        </div>
                                    
                                    <PercentageBar percentage={percentage}/>
                                    </div>
                                    
                                    
                                    </>
                                   
                                )}
                                {description === "Our Strategy" && (
                                     <>
                                     <div className="paradesc3118">
                                    <p> <span style={{color: 'goldenrod'}}><FontAwesomeIcon icon={faCheck}/></span>  Preaching Worship An Online Family</p>
                                    <p> <span style={{color: 'goldenrod'}}><FontAwesomeIcon icon={faCheck} /></span> Preaching Worship An Online Family</p>
                                    </div>
                                    <div className="pophead3131">
                                    <h4><img  className="microchip3131" src={microchip} alt="" style={{width:'24px', borderRadius:'50%'}} /> Artificial Intelligence</h4>
                                    <h4><img  className="microchip3131" src={microchip} alt="" style={{width:'24px', borderRadius:'50%'}} /> Clouds Backup Services</h4>
                                    
                                    </div>
                                    <div className="percentagesss">
                                        <div className="percentageHead3131">
                                            <p>Real technology solutions</p>
                                            <p>{percentage}%</p>
                                        </div>
                                    
                                    <PercentageBar percentage={percentage}/>
                                    </div>
                                    </>
                                )}
                                {description === "Our Vision" && (
                                    <>
                                   <div className="paradesc3118">
                                    <p> <span style={{color: 'goldenrod'}}><FontAwesomeIcon icon={faCheck}/></span> Preaching Worship An Online Family</p>
                                    <p> <span style={{color: 'goldenrod'}}><FontAwesomeIcon icon={faCheck}/></span> Preaching Worship An Online Family</p>
                                    </div>
                                   <div className="pophead3131">
                                   <h4><img  className="microchip3131" src={microchip} alt="" style={{width:'24px', borderRadius:'50%'}} /> Artificial Intelligence</h4>
                                   <h4><img  className="microchip3131" src={microchip} alt="" style={{width:'24px', borderRadius:'50%'}} /> Clouds Backup Services</h4>
                                   
                                   </div>
                                   <div className="percentagesss">
                                        <div className="percentageHead3131">
                                            <p>Real technology solutions</p>
                                            <p>{percentage}%</p>
                                        </div>
                                    
                                    <PercentageBar percentage={percentage}/>
                                    </div>
                                   </>
                                )}
                            </div>

                        )}
                            
                    </div>
                   
                </div>
            </div>

        </section>
        
        </>
    )
}

export default FocusServices;