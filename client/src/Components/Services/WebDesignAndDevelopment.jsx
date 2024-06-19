import React from "react";
import "./Services.css";
import "./WebDesignAndDevelopment.css"
// import group from "./photos/group.jpg"
import { TabView, TabPanel } from 'primereact/tabview';
import { IoStar } from "react-icons/io5";
import { FaAngleLeft } from "react-icons/fa6";
import photo1 from "../Photos/details-1.jpg"
import photo2 from "../Photos/web-flow.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
// import photo from "../src/photos/breadcrumb.jpg"
import asterisk from "../Photos/asterisk.svg"
import { FaCheck } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
// import { FaPlus } from "react-icons/fa6";
// import scrollUpDown from "../src/photos/counting.png"
// import { Accordion, AccordionTab } from 'primereact/accordion';
import picture11 from "../Photos/picture11.png"
import Footer from "../Footer/Footer/Blackfooter"
function WebDesignAndDevelopment() {
    const cards = [
        {
            client_Img: `${picture11}`,
            client_profile: "MATHIAS HERESEN",
            client_role: "Founder of Gamer Pay",
            client_description: `"The other hand we denounce with righteou indg ation and dislike men who are so beguiled and demorali ed by the of pleasure of the moment.Dislike men who are so beguiled and demoraliz worlds ed by the charms of pleasure"`
        },
        {
            client_Img: `${picture11}`,
            client_profile: "MATHIAS HERESEN",
            client_role: "Founder of Gamer Pay",
            client_description: `"The other hand we denounce with righteou indg ation and dislike men who are so beguiled and demorali ed by the of pleasure of the moment.Dislike men who are so beguiled and demoraliz worlds ed by the charms of pleasure"`
        },
        {
            client_Img: `${picture11}`,
            client_profile: "MATHIAS HERESEN",
            client_role: "Founder of Gamer Pay",
            client_description: `"The other hand we denounce with righteou indg ation and dislike men who are so beguiled and demorali ed by the of pleasure of the moment.Dislike men who are so beguiled and demoraliz worlds ed by the charms of pleasure."`
        }
    ];
    const envelopeIcons = Array.from({ length: 5 }, (_, index) => (
        // <FontAwesomeIcon key={index} icon={faStar} className="envelope-icon" />
        <IoStar key={index} className="envelope-icon" />
    ));

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
        }, 5000);
        return () => clearInterval(intervalId);
    }, [cards.length]);


    // Set percentage for demonstration (adjust as needed) 


    return (
        <>




            <div className="test2-services-svs" >
                <h1 className="top-services-heading-svs">Web Design and Development</h1>
            </div>

            <div className="marr-svs">
                <div class="marque-section-svs section-padding section-bg-2 pt-5">
                    <div class="container-fluid">
                        <div class="marquee-wrapper text-slider style-height">
                            <div class="marquee-inner-svs to-left">
                                <ul class="marqee-list d-flex">
                                    <li class="marquee-item-svs style-2">
                                        <span class="text-slider"><img src={asterisk} alt="img" className="slider-marq-img-svs" /></span><span class="text-slider text-style">Web Design and Development</span>
                                        <span class="text-slider"><img src={asterisk} alt="img" className="slider-marq-img-svs" /></span><span class="text-slider text-style">Mobile Application Development</span>
                                        <span class="text-slider"><img src={asterisk} alt="img" className="slider-marq-img-svs" /></span><span class="text-slider text-style">Testing Services</span>
                                        <span class="text-slider"><img src={asterisk} alt="img" className="slider-marq-img-svs" /></span><span class="text-slider text-style">Health Care Services</span>
                                        <span class="text-slider"><img src={asterisk} alt="img" className="slider-marq-img-svs" /></span><span class="text-slider text-style">Content Writing and Moderation​</span>
                                        <span class="text-slider"><img src={asterisk} alt="img" className="slider-marq-img-svs" /></span><span class="text-slider text-style">Graphic Designing</span>
                                        <span class="text-slider"><img src={asterisk} alt="img" className="slider-marq-img-svs" /></span><span class="text-slider text-style">E-Commerce Projects​</span>
                                        <span class="text-slider"><img src={asterisk} alt="img" className="slider-marq-img-svs" /></span><span class="text-slider text-style">Digital Marketing​</span>
                                        <span class="text-slider"><img src={asterisk} alt="img" className="slider-marq-img-svs" /></span><span class="text-slider text-style">Non-IT Services​</span>
                                        <span class="text-slider"><img src={asterisk} alt="img" className="slider-marq-img-svs" /></span><span class="text-slider text-style">HR Services​</span>
                                    </li>
                                </ul>

                            </div>

                        </div>
                    </div>

                </div>

            </div>


            <div className="services-details-svs fix-svs section-padding-svs">
                <div className="container-svs">
                    <div className="service-details-wrapper">
                        <div className="row-svs">
                            <div className="complete-div-services">
                                <div class="col-12-svs col-lg-8-svs services-top-one">
                                    <div class="service-details-items-svs">
                                        <div class="details-image">
                                            <img src={photo1} alt="img" />
                                        </div>
                                        <div class="details-content ">
                                            <h2 className="fontsize-services">"Your website is your online storefront; make it count with expert design and development by IMS."</h2>
                                            <h3 className="fontsize-services"><b>Let's build a unique website for higher conversions.</b></h3>
                                            <p className="fontsize1-services">
                                                In today's digital age, a website is more than just an online presence - it's an essential component of any business. At IMS, every website we design is custom-built to meet the specific needs of our clients. Our goal is to create a website that reflects your brand's personality and delivers an exceptional user experience to your customers.
                                            </p>
                                            <br />
                                            <p className="fontsize1-services">Our website design and development services are not limited to creating a website. We take a holistic approach to digital marketing, and our services are designed to help you grow your online presence and reach your business goals.</p>

                                            <div class="service-details-video">
                                                <div class="row-svs g-4 align-items-center">
                                                    <div class="col-lg-12-svs">
                                                        <div class="details-video-content">

                                                        </div>
                                                    </div>

                                                    <div class="col-lg-12-svs">
                                                        <div class="video-image">
                                                            <img src={photo2} alt="img" />
                                                            <div class="video-box">
                                                                <a href="https://youtu.be/DFmhX5h6Lig?si=Za9niKJyToT_KS3r" class="video-btn ripple video-popup">
                                                                    <i class="fas fa-play"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>



                                    </div>
                                </div>
                                <div class=" services-bottom-one">
                                    <div class="main-sidebar bg-container-svs">
                                        <div class="single-sidebar-widget">
                                            <div class="wid-title">
                                                <h3 className="fontsize-services">All Services</h3>
                                            </div>
                                            <div class="service-category fontsize-services ">
                                                <a href="Web Design and Development" class="active">
                                                    <div className="arrow-icons-services">
                                                        <div>
                                                            Web Design and Development
                                                        </div>
                                                        <div>
                                                            <FaArrowRightLong />
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="Mobile Application Development">
                                                    <div className="arrow-icons-services">
                                                        <div>
                                                            Mobile Application Development
                                                        </div>
                                                        <div>
                                                            <FaArrowRightLong />
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="Testing Services">
                                                    <div className="arrow-icons-services">
                                                        <div>
                                                            Testing Services
                                                        </div>
                                                        <div>
                                                            <FaArrowRightLong />
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="Health Care Services">
                                                    <div className="arrow-icons-services">
                                                        <div>
                                                            Health Care Services
                                                        </div>
                                                        <div>
                                                            <FaArrowRightLong />
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="Content Writing and Moderation">
                                                    <div className="arrow-icons-services">
                                                        <div>
                                                            Content Writing and Moderation
                                                        </div>
                                                        <div>
                                                            <FaArrowRightLong />
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="Graphic Designing">
                                                    <div className="arrow-icons-services">
                                                        <div>
                                                            Graphic Designing
                                                        </div>
                                                        <div>
                                                            <FaArrowRightLong />
                                                        </div>
                                                    </div>
                                                </a>


                                                <a href="E-Commerce ">
                                                    <div className="arrow-icons-services">
                                                        <div>
                                                            E-commerce Projects
                                                        </div>
                                                        <div>
                                                            <FaArrowRightLong />
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="Digital Marketing">
                                                    <div className="arrow-icons-services">
                                                        <div>
                                                            Digital Marketing
                                                        </div>
                                                        <div>
                                                            <FaArrowRightLong />
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="Non-IT Services">
                                                    <div className="arrow-icons-services">
                                                        <div>
                                                            HR Services
                                                        </div>
                                                        <div>
                                                            <FaArrowRightLong />
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="HR Services" >
                                                    <div className="arrow-icons-services">
                                                        <div>
                                                            HR Services
                                                        </div>
                                                        <div>
                                                            <FaArrowRightLong />
                                                        </div>
                                                    </div>
                                                </a>
                                                <div>

                                                </div>

                                                <div className="bottom-content-matter-svs">

                                                    <div class="accordion-item-svs">


                                                        <div class="accordion" id="accordionExample" style={{ padding: '0%', margin: '0px' }}>


                                                            <div class="accordion-item-svs svs-h22" style={{ padding: '0%' }}>
                                                                <h2 class="accordion-header-svs svs-h2" id="headingOne" >
                                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" id="Element" style={{ boxShadow: '-1px -1px -1px rgba(0, 0, 0, 0.2)' }}>
                                                                        Tools And Technologies Used?
                                                                    </button>
                                                                </h2>
                                                                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                                    <div class="accordion-body-svs">
                                                                        Text Editors<br />

                                                                        Graphic Design Tools<br />

                                                                        Wireframing and Prototyping Tools<br />

                                                                        <span className="front-end-line-svs">Frontend Development:</span><br />
                                                                        HTML<br />
                                                                        CSS<br />
                                                                        JAVA SCRIPT<br />
                                                                        REACT JS<br />
                                                                        Backend Development<br />

                                                                        DBMS<br />

                                                                        Web Hosting & Optimization Tools<br />

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-part-last-services" style={{ padding: '3%', margin: '0px' }}>
                        <div className="left-part-bottom-services-togg">
                            <div>
                                <div className='our-projects-div'>
                                    <div className='our-projects-heading-div'>
                                        <h1 className='our-projects-heading'>OUR PROJECTS</h1>
                                    </div>
                                    <div className='happy-clients-heading-div'>
                                        <h1 className='happy-clients-heading'>Our Happy Clients Projects</h1>
                                    </div>
                                </div>
                                <div className="ourprojects-card-div" style={{ marginLeft: '10px' }}>
                                    <TabView >
                                        <TabPanel header="Our Approach" className="" style={{ textDecoration: 'none' }}>
                                            <div >
                                                <hr className='our-approch-horizantal-line' style={{ textAlign: "center" }} />
                                            </div>
                                            <div className='our-approch-content'>
                                                <div className='our-approch-para'>
                                                    <p className="m-0">
                                                        Understand the purpose of the website. What is its primary goal? Who is the target audience?
                                                        What functionality is required?Gathering detailed requirements helps in creating a roadmap for development.
                                                    </p>

                                                </div>

                                                <div className='our-approch-list'>
                                                    <ul className='our-approch-right-side'>
                                                        <p><span className='our-approch-icon'><FaCheck /></span>&nbsp;<b>Research and Analysis</b></p>
                                                        <p><span className='our-approch-icon'><FaCheck /></span>&nbsp;<b>Planning and Wireframing</b></p>
                                                        <p><span className='our-approch-icon'><FaCheck /></span>&nbsp;<b>Design & Development</b></p>

                                                    </ul>
                                                    <ul className='our-approch-left-side'>
                                                        <p><span className='our-approch-icon'><FaCheck /> </span>&nbsp;<b>Testing and Quality Assurance</b></p>
                                                        <p><span className='our-approch-icon'><FaCheck /></span> &nbsp;<b>Post-launch Optimization</b></p>
                                                        <p><span className='our-approch-icon'><FaCheck /></span> &nbsp;<b>Maintenance and Updates</b></p>
                                                    </ul>
                                                </div>
                                                {/* <div className='our-approch-button-div'>
                                                    <button className='our-approch-button' >
                                                        Contact Us <span><FaAngleRight /></span>
                                                    </button>
                                                </div> */}
                                                <div className="our-approch-button-div">
                                                    <a href="/Contact Us" className="our-approch-button"><span>Contact Us</span><span><FaAngleRight /></span></a>
                                                </div>
                                            </div>
                                        </TabPanel>
                                        <TabPanel header="Project Goals">
                                            <div>
                                                <hr className='project-goals-horizantal-line' />
                                            </div>
                                            <div className='our-approch-content'>
                                                <div className='our-approch-para'>
                                                    <p className="m-0">
                                                        your business website is a vital component of your overall brand.
                                                        It should embody the essence of your brand's visual style and messaging while
                                                        also inspiring your intended audience to trust and depend on your business.
                                                        Our website design and development services are not limited to creating a website. We take a holistic
                                                        approach to digital marketing,and our services are designed to help
                                                        you grow your online presence and reach your business goals.
                                                    </p>
                                                </div>
                                                <div className='our-approch-list'>
                                                    <ul className='our-approch-right-side'>
                                                        <p><span className='our-approch-icon'><FaCheck /></span>&nbsp;<b>SEO Friendly</b></p>
                                                        <p><span className='our-approch-icon'><FaCheck /></span>&nbsp;<b>Excellent UI/UX</b></p>
                                                    </ul>
                                                    <ul className='our-approch-left-side'>
                                                        <p><span className='our-approch-icon'><FaCheck /></span>&nbsp;<b>Well-designed and completely functional</b></p>
                                                        <p><span className='our-approch-icon'><FaCheck /></span> &nbsp;<b>Customized</b></p>
                                                    </ul>
                                                </div>
                                                {/* <div className='our-approch-button-div'>
                                                    <button className='our-approch-button' >
                                                        Contact Us <span><FaAngleRight /></span>
                                                    </button>
                                                </div> */}
                                                <div className="our-approch-button-div">
                                                    <a href="" className="our-approch-button"><span>Contact Us</span><span><FaAngleRight /></span></a>
                                                </div>
                                            </div>
                                        </TabPanel>
                                        <TabPanel header="Clients">
                                            <div>
                                                <hr className='our-approch-horizantal-line' />
                                            </div>
                                            <p className="m-3">
                                                <div clients-cards>
                                                    <div>
                                                        {/* <img src={} alt='new'/> */}
                                                    </div>
                                                    <div className='clients-cards-content'>
                                                        <div className="card-slider-container">
                                                            <div className="card-slider"
                                                                style={{
                                                                    transform: `translateX(-${currentIndex * 100}%)`,
                                                                }}
                                                            >
                                                                {cards.map((card, index) => (
                                                                    <div key={index} className="card">
                                                                        <div className='client_picture'>
                                                                            <img src={card.client_Img} />
                                                                        </div>
                                                                        <div className="client_profile">{card.client_profile}</div>
                                                                        <div className='client_role'> {card.client_role}</div>
                                                                        <div className="client_description">{card.client_description}</div>
                                                                        <div className="approch-stars"><span style={{ color: 'goldenrod' }}>{envelopeIcons}</span></div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                            <div className="approch-navigationButtons">
                                                                <button className="approch-arrow" onClick={handlePrevClick}><FaAngleLeft /></button>
                                                                <button className='approch-arrow' onClick={handleNextClick}><FaAngleRight /></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </p>
                                            {/* <div className='our-approch-button-div'>
                                                <button className='clients-button'>
                                                    Contact Us <span><FaAngleRight /></span>
                                                </button>
                                            </div> */}
                                            {/* <div className='our-approch-button-div'>
                                                <a className='our-approch-button clients-button button12'>
                                                <span  >
                                                    Contact Us
                                                </span>
                                                </a>
                                            </div> */}
                                            <div className="our-approch-button-div">
                                                <a href="" className="clients-button"><span>Contact Us</span><span><FaAngleRight /></span></a>
                                            </div>
                                        </TabPanel>
                                    </TabView>
                                </div >
                            </div>
                        </div>
                        <div className="jumping-bg-container">
                            <div className="services-group-img11">
                                <div class="services-post-date">
                                    <h4 className="services-h4-svs">
                                        25 <br />
                                        <span>DEC</span>
                                    </h4>
                                </div>

                            </div>
                            <div>
                                <p className="services-product-design">Product Design</p>
                            </div>
                            <div className="single-news-items">
                                <div className="bottom-services-anchor">
                                <p> <a href="#0" className="services-bottom-underline-text-svs services-bottom-underline-text-svs1 ">IT Service Case Studies<br/>Accelerating Business Fly <br/> Success Tech</a> </p>

                                </div>
                                <div className="bottom-services-anchor1-div">



                                    <a href="/" style={{ textDecoration: 'none' }}>
                                        <p className="bottom-services-anchor1 anchor-svs" >Visit Site Here</p>


                                    </a>
                                    <div className="services-anchor-button-svs"><FaAngleRight className="services-icons-svs" /></div>

                                </div>

                            </div>
                        </div>


                    </div>
                </div>


            </div>

            <Footer/>
        </>)
       
}
export default WebDesignAndDevelopment;