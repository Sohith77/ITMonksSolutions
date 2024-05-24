import React from "react";
import "./teamMembers.css";
import { useState } from "react";
import { useEffect } from "react";
// import { IoEarthOutline } from "react-icons/io5";
// import lineimg from "../src/photos/line.png"
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaShareAlt } from "react-icons/fa";
import photo from "../Photos/member.jpg";
import photo2 from "../Photos/membertwo.jpg";
import photo3 from "../Photos/memberthree.jpg";
import photo4 from "../Photos/memberfour.jpg";
import photo6 from "../Photos/membersix.jpg";
import photo5 from "../Photos/new photo.avif";
import cgs from "../Photos/cgs.png";
import ibm from "../Photos/ibm.png";
import wipro from "../Photos/wipro.png";
import icicibank from "../Photos/icicibank.png";
import sutherland from "../Photos/sutherland.png";
import vasavi from "../Photos/vasavi.png";
import apollo from "../Photos/apollo.png";
import coforge from "../Photos/coforge.png";
import tata from "../Photos/tata.png";
import panzer from "../Photos/panzer.png";
import ncr from "../Photos/ncr.png";
import fyient from "../Photos/fyient.png";
import kotak from "../Photos/kotak.png";
import cadeploy from "../Photos/cadeploy.png";
import advarra from "../Photos/advarra.png";
import CBSI from "../Photos/CBSI.png";
import cloudbclabs from "../Photos/cloudbclabs.png";
import global from "../Photos/global.png";
import antra from "../Photos/antra.png";
import lvpel from "../Photos/lvpel.png";
import lavoura from "../Photos/lavoura.png";
import interns from "../Photos/interns.png";
import bricks from "../Photos/bricks.png";
import techwish from "../Photos/techwish.png";
import quess from "../Photos/quess.png";
import h3technologies from "../Photos/h3technologies.png";
import rksglobal from "../Photos/rksglobal.png";
import talisman from "../Photos/talisman.png";

// import circlepng from "../src/photos/circle-shape.png";

function TeamMembers() {
  // function animateValue(obj, start, end, duration) {
  //     let startTimestamp = 0;
  //     const step = (timestamp) => {
  //       if (!startTimestamp) startTimestamp = timestamp;
  //       const progress = Math.min((timestamp - startTimestamp) / duration, 1);
  //       obj.innerHTML = Math.floor(progress * (end - start) + start);
  //       if (progress < 1) {
  //         window.requestAnimationFrame(step);
  //       }
  //     };
  //     window.requestAnimationFrame(step);
  //   }

  //   const obj = document.getElementById("value");
  //   animateValue(obj, 0, 100, 5000);
  const [count853, setCount853] = useState(0);
  const [count35, setCount35] = useState(0);
  const [count55, setCount55] = useState(0);
  const [count85, setCount85] = useState(0);
  const [animationStarted, setAnimationStarted] = useState(false);
  useEffect(() => {
    const target853 = 35.1;
    const target35 = 853.1;
    const target55 = 55.1;
    const target85 = 35.1;
    const animationDuration = 5000; // Duration in milliseconds (5 seconds)
    const steps853 = target853 / (animationDuration / 100);
    const steps35 = target35 / (animationDuration / 100);
    const steps85 = target85 / (animationDuration / 100);
    const steps55 = target55 / (animationDuration / 100);
    const handleScroll = () => {
      const element = document.querySelector(".snip1533-sst");
      if (!animationStarted && isElementInViewport(element)) {
        setAnimationStarted(true);

        let intervalId853;
        let intervalId35;
        let intervalId55;
        let intervalId85;

        const animateCount853 = () => {
          intervalId853 = setInterval(() => {
            setCount853((prevCount) => {
              const nextCount = prevCount + steps853;
              return nextCount >= target853 ? target853 : nextCount;
            });
          }, 100);
        };
        const animateCount85 = () => {
          intervalId85 = setInterval(() => {
            setCount85((prevCount) => {
              const nextCount = prevCount + steps85;
              return nextCount >= target85 ? target85 : nextCount;
            });
          }, 100);
        };
        const animateCount55 = () => {
          intervalId55 = setInterval(() => {
            setCount55((prevCount) => {
              const nextCount = prevCount + steps55;
              return nextCount >= target55 ? target55 : nextCount;
            });
          }, 100);
        };

        const animateCount35 = () => {
          intervalId35 = setInterval(() => {
            setCount35((prevCount) => {
              const nextCount = prevCount + steps35;
              return nextCount >= target35 ? target35 : nextCount;
            });
          }, 100);
        };

        // Start counting animations
        animateCount853();
        animateCount35();
        animateCount55();
        animateCount85();

        // Clean up intervals when component unmounts or animation is completed
        setTimeout(() => {
          clearInterval(intervalId853);
          clearInterval(intervalId35);
          clearInterval(intervalId55);
          clearInterval(intervalId85);
        }, animationDuration);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animationStarted]);

  const isElementInViewport = (el) => {
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
  };

  // useEffect(()=>{
  //     window.scrollTo(0,0)
  // },[])

  const OurClientsimagesArray = [
    sutherland,
    wipro,
    ibm,
    ncr,
    icicibank,
    kotak,
    tata,
    panzer,
    apollo,
    coforge,
    cgs,
    fyient,
    talisman,
    rksglobal,
    h3technologies,
    quess,
    techwish,
    bricks,
    interns,
    lavoura,
    lvpel,
    antra,
    global,
    cloudbclabs,
    CBSI,
    advarra,
    cadeploy,
    vasavi,
  ];
  return (
    <>
      <html>
        <head>
          <script
            src="https://kit.fontawesome.com/a076d05399.js"
            crossorigin="anonymous"
          ></script>
        </head>
        <body>
          <h5 style={{ textAlign: "center", marginTop: "90px" }}>
            <b>1K+ BRAND TRUST US</b>
          </h5>
          {/* <div id="ourteamsDiv" >

                <div className="main-ourteam-silder-sst">
                    <div className="ourteam-photo-slider-sst">
                        <div className="ourteam-slider-sst">
                            <img src="https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg" className="ourteam-img-sst" alt="new" />
                        </div>
                        <div className="ourteam-slider-sst">
                            <img src="https://img.freepik.com/free-vector/connection-vector-logo-template_460848-8076.jpg" className="ourteam-img-sst" alt="new" />
                        </div>
                        <div className="ourteam-slider-sst">
                            <img src="https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg" className="ourteam-img-sst" alt="new" />
                        </div>
                        <div className="ourteam-slider-sst">
                            <img src="https://img.freepik.com/free-vector/connection-vector-logo-template_460848-8076.jpg" className="ourteam-img-sst" alt="new" />
                        </div>
                        <div className="ourteam-slider-sst">
                            <img src="https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg" className="ourteam-img-sst" alt="new" />
                        </div>
                        <div className="ourteam-slider-sst">
                            <img src="https://img.freepik.com/free-vector/connection-vector-logo-template_460848-8076.jpg" className="ourteam-img-sst" alt="new" />
                        </div>
                        <div className="ourteam-slider-sst">
                            <img src="https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg" className="ourteam-img-sst" alt="new" />
                        </div>
                        <div className="ourteam-slider-sst">
                            <img src="https://img.freepik.com/free-vector/connection-vector-logo-template_460848-8076.jpg" className="ourteam-img-sst" alt="new" />
                        </div>
                        <div className="ourteam-slider-sst">
                            <img src="https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg" className="ourteam-img-sst" alt="new" />
                        </div>
                    </div>
                </div>
            </div> */}

          <div>
            <div className="ourclients-scrolling-icons-container">
              {/* <div className="scrolling-icons-wrapper">
        {imagesArray.map((icon, index) => (
          <img key={index} src={icon} alt={`ImagesArray ${index + 1}`} className="imagesArray" />
        ))}
      </div> */}
              <marquee
                className="ourclients-scrolling-icons-wrapper"
                behavior="alternate"
                style={{ marginTop: "30px", marginButton: "30px" }}
              >
                {OurClientsimagesArray.map((icon, index) => (
                  <img
                    key={index}
                    src={icon}
                    alt={`ImagesArray ${index + 1}`}
                    className="OurClientsimagesArray"
                  />
                ))}
              </marquee>
              {/* <marquee>df fgwetrtdfg dtgygtff</marquee> */}
            </div>
          </div>

          {/* <section class="brand-section fix section-padding pt-0">
            <div class="container">
                <div class="brand-wrapper">
                    <h6 class="text-center wow fadeInUp" data-wow-delay=".3s">1K+ BRANDS TRUST US</h6>
                    <div class="brand-carousel-active">
                        <div class="brand-image">
                            <img src="assets/img/brand/01.png" alt="brand-img" />
                        </div>
                        <div class="brand-image">
                            <img src="assets/img/brand/01.png" alt="brand-img" />
                        </div>
                        <div class="brand-image">
                            <img src="assets/img/brand/01.png" alt="brand-img" />
                        </div>
                        <div class="brand-image">
                            <img src="assets/img/brand/01.png" alt="brand-img" />
                        </div>
                        <div class="brand-image">
                            <img src="assets/img/brand/01.png" alt="brand-img" />
                        </div>
                        <div class="brand-image">
                            <img src="assets/img/brand/01.png" alt="brand-img" />
                        </div>
                        <div class="brand-image">
                            <img src="assets/img/brand/01.png" alt="brand-img" />
                        </div>
                    </div>
                </div>
            </div>
        </section> */}

          <div className="team-complete-div-sst">
            <div className="team-topheading-sst">
              <span class="team-spanelement-sst ">
                OUR HONOURABLE TEAM MEMBERS
              </span>
              <h2
                class="team-styling1-sst team-miniheading-text-sst"
                data-wow-delay=".3s"
              >
                We’ve Exclusive Team member <br />
                Meet our Professionals
              </h2>
            </div>
            <div className="team-pictures-wrapping-sst">
              <div className="team-memebers-alignment-sst team-row-sst">
                {/* <div class="col-xl-3-sst col-lg-4-sst col-md-6-sst" data-wow-delay=".3s" className="team-styling-sst">
                                <div class="team-single-team-items-sst teams-div-containers-sst">
                                    <div class="team-image-sst teams-div-container-sst card-sst">
                                       

                                        <img decoding="async" src={photo} alt="team-img-sst" className="team-img-sst1" />
                                       
                                        <div className="team-share-hover-sst">

                                        <div class="team-social-profile-sst">
                                            <span class="plus-btn-sst"><FaShareAlt /></span>
                                            

                                        </div>
                                        <div class="card-content-sst">
                                            
                                                <p >
                                                <a href="https://www.facebook.com/people/IT-Monks-Solutions-Pvt-Ltd/61553934685933/?mibextid=qi2Omg&rdid=VIYRjpEQK6lFo7fk">
                                                     <FaFacebookF className="real-team-icon-sst"/>
                                                     </a>
                                                    <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHL36ey3mhoyQAAAY7ayi44RRp9INxr7nHEUFYEzUseqEr4ol2jdAT2GtS1TMhQXdUz3lKm-_G8GMaQDb2S98XcxskIOmlaYA9a25kSkfbu731EJgk5F36ZdRV1q1CDd18OWyc=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fit-monks-solutions%2F">
                                                     <FaLinkedinIn className="real-team-icon-sst"/>
                                                     </a>
                                                      <a href="https://www.instagram.com/itmonks_solutions/?igsh=bHhqenJ0cG52dWRl">
                                                     <FaInstagram className="real-team-icon-sst" />
                                                     </a>
                                                   
                                            </p>
                                        
                                        </div>
                                        </div>
                                    </div>
                                    <div class="team-content-sst text-center-sst">
                                        <h4  className="team-member-name-sst">
                                            <a href="team-detaills.html" className="team-member-name-sst">Supriya Chunduru</a>
                                        </h4>
                                        <p className="second-part-of-para-sst">Managing Director</p>
                                    </div>
                                </div>
                            </div> */}
                <div
                  class="col-xl-3-sst col-lg-4-sst col-md-6-sst"
                  data-wow-delay=".3s"
                  className="team-styling-sst"
                >
                  <div class="team-single-team-items-sst teams-div-containers-sst">
                    <div class="team-image-sst teams-div-container-sst card-sst added-images">
                      <img
                        decoding="async"
                        src={photo}
                        alt="team-img-sst"
                        className="team-img-sst card-sst "
                      />

                      <div className="team-share-hover-sst">
                        <div class="team-social-profile-sst">
                          <span class="plus-btn-sst">
                            <FaShareAlt className="" />
                          </span>
                        </div>
                        <div class="card-content-sst">
                          <p>
                            <a href="https://www.facebook.com/people/IT-Monks-Solutions-Pvt-Ltd/61553934685933/?mibextid=qi2Omg&rdid=VIYRjpEQK6lFo7fk" target="_blank">
                              <FaFacebookF className="real-team-icon-sst" />
                            </a>
                            <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHL36ey3mhoyQAAAY7ayi44RRp9INxr7nHEUFYEzUseqEr4ol2jdAT2GtS1TMhQXdUz3lKm-_G8GMaQDb2S98XcxskIOmlaYA9a25kSkfbu731EJgk5F36ZdRV1q1CDd18OWyc=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fit-monks-solutions%2F" target="_blank">
                              <FaLinkedinIn className="real-team-icon-sst" />
                            </a>
                            <a href="https://www.instagram.com/itmonks_solutions/?igsh=bHhqenJ0cG52dWRl" target="_blank">
                              <FaInstagram className="real-team-icon-sst" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="team-content-sst text-center-sst">
                      <h5 className="team-member-name-sst">
                        <a
                          href="team-detaills.html"
                          className="team-member-name-sst"
                        >
                          Supriya Chunduru
                        </a>
                      </h5>
                      <p className="second-part-of-para-sst">
                        Managing Director
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  class="col-xl-3-sst col-lg-4-sst col-md-6-sst"
                  data-wow-delay=".3s"
                  className="team-styling-sst"
                >
                  <div class="team-single-team-items-sst teams-div-containers-sst">
                    <div class="team-image-sst teams-div-container-sst card-sst">
                      <img
                        decoding="async"
                        src={photo2}
                        alt="team-img-sst"
                        className="team-img-sst card-sst"
                      />
                      <div className="team-share-hover-sst">
                        <div class="team-social-profile-sst">
                          <span class="plus-btn-sst">
                            <FaShareAlt />
                          </span>
                        </div>
                        <div class="card-content-sst">
                          <p>
                            <a href="https://www.facebook.com/people/IT-Monks-Solutions-Pvt-Ltd/61553934685933/?mibextid=qi2Omg&rdid=VIYRjpEQK6lFo7fk" target="_blank">
                              <FaFacebookF className="real-team-icon-sst" />
                            </a>
                            <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHL36ey3mhoyQAAAY7ayi44RRp9INxr7nHEUFYEzUseqEr4ol2jdAT2GtS1TMhQXdUz3lKm-_G8GMaQDb2S98XcxskIOmlaYA9a25kSkfbu731EJgk5F36ZdRV1q1CDd18OWyc=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fit-monks-solutions%2F" target="_blank">
                              <FaLinkedinIn className="real-team-icon-sst" />
                            </a>
                            <a href="https://www.instagram.com/itmonks_solutions/?igsh=bHhqenJ0cG52dWRl" target="_blank">
                              <FaInstagram className="real-team-icon-sst" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="team-content-sst text-center-sst">
                      <h5 className="team-member-name-sst">
                        <a
                          href="team-detaills.html"
                          className="team-member-name-sst"
                        >
                          Jaya Srikar Lanka
                        </a>
                      </h5>
                      <p className="second-part-of-para-sst">Vice President</p>
                    </div>
                  </div>
                </div>
                <div
                  class="col-xl-3-sst col-lg-4-sst col-md-6-sst"
                  data-wow-delay=".3s"
                  className="team-styling-sst"
                >
                  <div class="team-single-team-items-sst teams-div-containers-sst">
                    <div class="team-image-sst teams-div-container-sst card-sst">
                      <img
                        decoding="async"
                        src={photo6}
                        alt="team-img-sst"
                        className="team-img-sst card-sst"
                      />

                      <div className="team-share-hover-sst">
                        <div class="team-social-profile-sst">
                          <span class="plus-btn-sst">
                            <FaShareAlt />
                          </span>
                        </div>
                        <div class="card-content-sst">
                          <p>
                            <a href="https://www.facebook.com/people/IT-Monks-Solutions-Pvt-Ltd/61553934685933/?mibextid=qi2Omg&rdid=VIYRjpEQK6lFo7fk" target="_blank">
                              <FaFacebookF className="real-team-icon-sst" />
                            </a>
                            <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHL36ey3mhoyQAAAY7ayi44RRp9INxr7nHEUFYEzUseqEr4ol2jdAT2GtS1TMhQXdUz3lKm-_G8GMaQDb2S98XcxskIOmlaYA9a25kSkfbu731EJgk5F36ZdRV1q1CDd18OWyc=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fit-monks-solutions%2F" target="_blank">
                              <FaLinkedinIn className="real-team-icon-sst" />
                            </a>
                            <a href="https://www.instagram.com/itmonks_solutions/?igsh=bHhqenJ0cG52dWRl" target="_blank">
                              <FaInstagram className="real-team-icon-sst" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="team-content-sst text-center-sst">
                      <h5 className="team-member-name-sst">
                        <a
                          href="team-detaills.html"
                          className="team-member-name-sst"
                        >
                          Ramya Krishna G
                        </a>
                      </h5>
                      <p className="second-part-of-para-sst">HR Manager</p>
                    </div>
                  </div>
                </div>
                <div
                  class="col-xl-3-sst col-lg-4-sst col-md-6-sst"
                  data-wow-delay=".3s"
                  className="team-styling-sst"
                >
                  <div class="team-single-team-items-sst teams-div-containers-sst">
                    <div class="team-image-sst teams-div-container-sst card-sst">
                      <img
                        decoding="async"
                        src={photo4}
                        alt="team-img-sst"
                        className="team-img-sst card-sst"
                      />

                      <div className="team-share-hover-sst">
                        <div class="team-social-profile-sst">
                          <span class="plus-btn-sst">
                            <FaShareAlt />
                          </span>
                        </div>
                        <div class="card-content-sst">
                          <p>
                            <a href="https://www.facebook.com/people/IT-Monks-Solutions-Pvt-Ltd/61553934685933/?mibextid=qi2Omg&rdid=VIYRjpEQK6lFo7fk" target="_blank">
                              <FaFacebookF className="real-team-icon-sst" />
                            </a>
                            <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHL36ey3mhoyQAAAY7ayi44RRp9INxr7nHEUFYEzUseqEr4ol2jdAT2GtS1TMhQXdUz3lKm-_G8GMaQDb2S98XcxskIOmlaYA9a25kSkfbu731EJgk5F36ZdRV1q1CDd18OWyc=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fit-monks-solutions%2F" target="_blank">
                              <FaLinkedinIn className="real-team-icon-sst" />
                            </a>
                            <a href="https://www.instagram.com/itmonks_solutions/?igsh=bHhqenJ0cG52dWRl" target="_blank">
                              <FaInstagram className="real-team-icon-sst" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="team-content-sst text-center-sst">
                      <h5 className="team-member-name-sst">
                        <a
                          href="team-detaills.html"
                          className="team-member-name-sst"
                        >
                          Aravind
                        </a>
                      </h5>
                      <p className="second-part-of-para-sst">UI/UX DESIGNER</p>
                    </div>
                  </div>
                </div>

                <div className="circle-around-sst">
                  <div className="circle-shape-sst">
                    {/* <img src={circlepng} alt="" /> */}
                    <div>
                      <div className="texting-background-sst">
                        <span className="texting-background-content-sst">
                          Join Our
                          <span className="second-part-of-para-sst1">
                            {" "}
                            Team
                          </span>
                        </span>
                      </div>
                      <p
                        className="second-part-of-para-sst font-circile-down-para"
                        style={{ padding: 20 + "px" }}
                      >
                        98+ members
                      </p>
                    </div>
                  </div>
                </div>

                {/* <div class="dot-shape">
                                        <img src={dotpng} alt="shape-img" />
                                    </div> */}

                <div
                  class="col-xl-3-sst col-lg-4-sst col-md-6-sst"
                  data-wow-delay=".3s"
                  className="team-styling-sst"
                >
                  <div class="team-single-team-items-sst teams-div-containers-sst">
                    <div class="team-image-sst teams-div-container-sst card-sst added-images">
                      <img
                        decoding="async"
                        src={photo5}
                        alt="team-img-sst"
                        className="team-img-sst card-sst"
                      />

                      <div className="team-share-hover-sst">
                        <div class="team-social-profile-sst">
                          <span class="plus-btn-sst">
                            <FaShareAlt className="" />
                          </span>
                        </div>
                        <div class="card-content-sst">
                          <p>
                            <a href="https://www.facebook.com/people/IT-Monks-Solutions-Pvt-Ltd/61553934685933/?mibextid=qi2Omg&rdid=VIYRjpEQK6lFo7fk" target="_blank">
                              <FaFacebookF className="real-team-icon-sst" />
                            </a>
                            <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHL36ey3mhoyQAAAY7ayi44RRp9INxr7nHEUFYEzUseqEr4ol2jdAT2GtS1TMhQXdUz3lKm-_G8GMaQDb2S98XcxskIOmlaYA9a25kSkfbu731EJgk5F36ZdRV1q1CDd18OWyc=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fit-monks-solutions%2F" target="_blank">
                              <FaLinkedinIn className="real-team-icon-sst" />
                            </a>
                            <a href="https://www.instagram.com/itmonks_solutions/?igsh=bHhqenJ0cG52dWRl" target="_blank">
                              <FaInstagram className="real-team-icon-sst" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="team-content-sst text-center-sst">
                      <h5 className="team-member-name-sst">
                        <a
                          href="team-detaills.html"
                          className="team-member-name-sst"
                        >
                          Ajay Sonkari{" "}
                        </a>
                      </h5>
                      <p className="second-part-of-para-sst">
                        FULL STACK DEVELOPER
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="col-xl-3-sst col-lg-4-sst col-md-6-sst"
                  data-wow-delay=".3s"
                  className="team-styling-sst"
                >
                  <div class="team-single-team-items-sst teams-div-containers-sst">
                    <div class="team-image-sst teams-div-container-sst card-sst">
                      <img
                        decoding="async"
                        src={photo3}
                        alt="team-img-sst"
                        className="team-img-sst card-sst"
                      />

                      <div className="team-share-hover-sst">
                        <div class="team-social-profile-sst">
                          <span class="plus-btn-sst">
                            <FaShareAlt className="" />
                          </span>
                        </div>
                        <div class="card-content-sst">
                          <p>
                            <a
                              href="https://www.facebook.com/people/IT-Monks-Solutions-Pvt-Ltd/61553934685933/?mibextid=qi2Omg&rdid=VIYRjpEQK6lFo7fk"
                              target="_blank"
                            >
                              <FaFacebookF className="real-team-icon-sst" />
                            </a>
                            <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHL36ey3mhoyQAAAY7ayi44RRp9INxr7nHEUFYEzUseqEr4ol2jdAT2GtS1TMhQXdUz3lKm-_G8GMaQDb2S98XcxskIOmlaYA9a25kSkfbu731EJgk5F36ZdRV1q1CDd18OWyc=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fit-monks-solutions%2F" target="_blank">
                              <FaLinkedinIn className="real-team-icon-sst" />
                            </a>
                            <a href="https://www.instagram.com/itmonks_solutions/?igsh=bHhqenJ0cG52dWRl" target="_blank">
                              <FaInstagram className="real-team-icon-sst" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="team-content-sst text-center-sst">
                      <h5 className="team-member-name-sst">
                        <a
                          href="team-detaills.html"
                          className="team-member-name-sst"
                        >
                          Rajkumar K
                        </a>
                      </h5>
                      <p className="second-part-of-para-sst">
                        QA Test Engineer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <marquee
              className="scrolling-part-sst"
              behaviour="scroll"
              direction="left"
            >
              {" "}
              IT_Monks _Solutions _IT Software_Development{" "}
            </marquee>
          </div>

          <div className="team-bottom-container-sst countScroll-sst">
            <div className="team-mini-cards-sst">
              <figure class="snip1533-sst">
                <figcaption className=" team-bottom-content-sst team-bottom-content1-sst elements-sst">
                  <div>
                    <h3>
                      <span class="team-count-sst all-other-values-sst">
                        {Math.floor(count85)}+
                      </span>
                    </h3>
                    <p className="bottom-team-count-content-paras-sst">
                      Countries <br />
                      Represented
                    </p>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="team-mini-cards-sst">
              <figure class="snip1533-sst">
                <figcaption className="team-bottom-content-sst team-bottom-content2-sst elements-sst">
                  <div>
                    <h3>
                      <span class="team-count-sst all-other-values-sst">
                        {Math.floor(count35)}+
                      </span>
                    </h3>
                    <p className="bottom-team-count-content-paras-sst">
                      Completed <br />
                      project
                    </p>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="team-mini-cards-sst">
              <figure class="snip1533-sst">
                <figcaption className=" team-bottom-content-sst team-bottom-content3-sst elements-sst">
                  <div>
                    <h3>
                      <span class="team-count-sst all-other-values-sst">
                        {Math.floor(count55)}+
                      </span>
                    </h3>
                    <p className="bottom-team-count-content-paras-sst">
                      Revenue <br />
                      In per year
                    </p>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="team-mini-cards-sst">
              <figure class="snip1533-sst">
                <figcaption className="team-bottom-content-sst team-bottom-content4-sst elements-sst">
                  <div>
                    <h3 id="value">
                      <span class="team-count-sst all-other-values-sst">
                        {Math.floor(count853)}+
                      </span>
                    </h3>
                    <p className="bottom-team-count-content-paras-sst">
                      Experienced <br />
                      Team members
                    </p>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </body>
      </html>
    </>
  );
}
export default TeamMembers;