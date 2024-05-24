




import React from "react";



import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import image1 from "../Photos/about-1.jpg";
import image2 from "../Photos/about-2.jpg";
import author from "../Photos/authorimage.png";
import award from "../Photos/bestaward.png";
import signature from "../Photos/signature.png";
import borderShape from "../Photos/border-shape.png";
import aboutp1 from "../Photos/about-1.jpg";
import aboutp2 from "../Photos/about-2.jpg";
import rotatingCircle from "../Photos/rotatingcircle.png";
import awardp from "../Photos/bestaward.png";
import authorimage from "../Photos/authorimage.png"
import "./pageone.css";
function Slide() {
    useEffect(() => {
        AOS.init();
    }, [])
    AOS.init({
        duration: 500,
        once: false,
    });
    AOS.init({
        duration: 500,
        once: false,
    });
    return (
        <>
            <section className="slide-two-container">
                <div className="full-content1">
                    <div className="slide-two-photos">
                        <img src={borderShape} alt=" photo 1" className="photo" />
                        <img src={aboutp1} alt="photo 2" className="photo main-picture" data-aos="fade-right" />
                        <img src={aboutp2} alt=" photo 3" className="photo" />
                        <img src={rotatingCircle} alt="photo 4" className="photo rotation-circle" />
                        <img src={awardp} alt=" photo 5" className="photo awards-circle" />
                    </div>
                    <div className="content-right">
                        <div data-aos="fade-up">
                            <p className="trusted-clients">5M+ Trusted Our Clients</p>
                            <p className="superior">We Prominent Truly <br />Trusted IT Business Solutions</p>
                        </div>
                        <div className="transmds">
                            <p data-aos="fade-up">Transmds is the world’s driving worldwide coordinations supplier — we uphold industry and exchange the worldwide trade of merchandi</p>
                        </div>
                        <div className="business-strategy" data-aos="fade-up" data-aos-duration="100">
                            <div className="content1">
                                <div class="radial-bars">

                                    <svg x="0px" y="0px" viewBox="0 0 200 200">
                                        <circle class="progress-bar" cx="100" cy="100" r="80"></circle>
                                        <circle class="path path-1" cx="100" cy="100" r="80"></circle>

                                    </svg>
                                    <div class="percentage">68%</div>

                                </div>
                                <div class="text">Business Strategy</div>
                            </div>
                            <div className="content2">
                                <div class="radial-bars">
                                    <svg x="0px" y="0px" viewBox="0 0 200 200">
                                        <circle class="progress-bar" cx="100" cy="100" r="80"></circle>
                                        <circle class="path path-2" cx="100" cy="100" r="80"></circle>

                                    </svg>
                                    <div class="percentage">93%</div>

                                </div>
                                <div class="text">Real Technology Solutions</div>
                            </div>
                        </div>
                        <div className="description06" data-aos="fade-up">
                            <div>
                                <p className="description06666" ><span style={{ color: 'goldenrod' }}><FontAwesomeIcon icon={faCheck} /></span>&nbsp;&nbsp;Professional Team Member</p>
                                <p className="description06666"><span style={{ color: 'goldenrod' }}><FontAwesomeIcon icon={faCheck} /></span>&nbsp;&nbsp;Awards Winning IT Solutions Company</p>
                                <p className="description06666"><span style={{ color: 'goldenrod' }}><FontAwesomeIcon icon={faCheck} /></span>&nbsp;&nbsp;Dedicated Tech Services</p>
                            </div>
                            <div className="author-image-sign" data-aos="fade-up">
                                <div>
                                    {/* <button className="button0615">Explore more about</button> */}
                                    <a href="" className="button0615" style={{paddingTop:"7%"}}><span>Explore more about</span></a>
                                </div>


                                <div className="name-designation">
                                    {/* <img src={signature} alt="" /> */}
                                    <h5 className="name"><b>Supriya Chunduru</b></h5>
                                    <h4 className="ceo-founder">Managing Director</h4>
                                </div>


                            </div>


                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
export default Slide;