import React from "react";
import bottomimage from "../Photos/bottomimage.png";
import topimage from "../Photos/topimage.png";
// import projectlifecycle from "./photos/projectlifecycle.png";
import projectlifecycle01 from "../Photos/projectlifecycle01.jpg"
import vertical from "../Photos/vertical.jpg";
import vertical01 from "../Photos/vertical01.jpg";
import vertical02 from "../Photos/vertical02.jpg";
import cloudicon from "../Photos/cloudicon.png";
import blueprinticon from "../Photos/blueprinticon.png";
import serviceicon from "../Photos/serviceicon.png";
import { FaArrowLeft } from "react-icons/fa6";

import { IoIosArrowForward } from "react-icons/io";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import "./premium-services.css";
function PremiumServices() {

    const slideData = [
        // {
        //     id: 1,
        //     Icons: `${blueprinticon}`,
        //     name: "01",
        //     role: "UX/UI DESIGN",
        //     profileImg: `${vertical}`,
        //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        // },
        {
            id: 1,
            Icons: `${blueprinticon}`,
            name: "01",
            role: "UX / UI DESIGNER",
            profileImg: `${vertical}`,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            id: 2,
            Icons: `${serviceicon}`,
            name: "02",
            role: "IT MANAGEMENT",
            profileImg: `${vertical01}`,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            id: 3,
            Icons: `${cloudicon}`,
            name: "03",
            role: "DESKTOP COMPUTING",
            profileImg: `${vertical02}`,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        // {
        //     id: 4,
        //     cloudImg: `${cloudicon}`,
        //     name: "01",
        //     role: "UX/UI DESIGN",
        //     profileImg: `${vertical}`,
        //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia veniam esse, numquam dicta, accusamus suscipit distinctio cum, in explicabo odit consequuntur doloribus enim vero autem excepturi adipisci. Asperiores, omnis perferendis."
        // },
        // {
        //     id: 5,
        //     cloudImg: `${cloudicon}`,
        //     name: "02",
        //     role: "IT MANAGEMENT",
        //     profileImg: `${vertical}`,
        //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia veniam esse, numquam dicta, accusamus suscipit distinctio cum, in explicabo odit consequuntur doloribus enim vero autem excepturi adipisci. Asperiores, omnis perferendis."
        // },
    ]

    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHOver: true,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2
                },
                
                breakpoint: 769,
                settings: {
                    slidesToShow: 1
                }


            }
        ]
    }

    return (
        <>
            <div>
                <div className="premium-services-div">
                    <img src={topimage} alt="new" />
                    <div className="premium-services-heading-div col-12 col-md-12">
                        <p className="premium-services-heading" >OUR MOST PREMIUM SERVICES</p>
                    </div>
                    <div className="most-premium-2nd-heading-and-button">
                        <div className="premium-services-2nd-heading-div">
                            <h2 className="premium-services-2nd-heading">Most Experienced Our Services</h2>
                        </div>
                        <div className="premium-services-button-div">
                            {/* <button className="premium-services-button">Explore Our Service <span className="arrow-icon"><IoIosArrowForward /></span> </button> */}
                            <a href="#scrolltofocus" className="premium-services-button"><span>Explore Our Service<span className="arrow-icon"><IoIosArrowForward /></span></span></a>

                        </div>
                    </div>
                    <div>
                        <Slider {...settings} className="slideClass15 col-12 col-md-12">
                            {slideData.map((slide) => (
                                <div key={slide.id} className="ui-design-part">
                                    <div className="ui-design-part-01">
                                        <div className="animated-button">
                                            <button> <span className="butto-text"><FaArrowLeft /></span> </button>
                                        </div>
                                        <div className="ui-design-icon-div">
                                            <img className="blueprint-icon" src={slide.Icons} alt="new" />
                                        </div>
                                        <div class="ui-design-card-content">
                                            <h4 className="content-01">{slide.name}</h4>
                                            <h3>
                                                <a className="ui-content" href="/">{slide.role}</a>
                                                <br />
                                            </h3>
                                            <p className="ui-content-para">{slide.description}</p>
                                        </div>
                                        <div className="ui-design-part-02">
                                            <div className="ui-design-part-02-image">
                                                <img className="ui-design-part-02-image-image"   src={slide.profileImg} alt="new" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider >
                    </div>
                </div>


                <div class="premium-services-bottom-part">
                    <div className="premium-services-fucusable-heading-div col-12 col-md-12">
                        <p className="premium-services-fucusable-heading">OUR FOCUSABLE</p>
                    </div>
                    <div className="premium-services-fucusable-2nd-heading-div col-12 col-md-12">
                        <h2 className="premium-services-fucusable-2nd-heading d-flex justify-content-center">Comprehensive Project Lifecycle</h2>
                    </div>
                    <div className="project-lifecycle-img-div col-11">
                        <img className="project-lifecycle-img col-11" src={projectlifecycle01} alt="new" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default PremiumServices;