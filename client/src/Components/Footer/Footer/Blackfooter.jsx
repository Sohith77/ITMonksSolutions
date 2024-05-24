import React from "react";
// import footerlogo from "../../photos/footer-logo.jpg";
import footerlogo from "../../Photos/footer-logo.jpg";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import './Blackfooter.css';
import { Navigate, useNavigate } from "react-router-dom";
function Footer() {
    const navigate = useNavigate()
    return (<>
        <div className="footer-flex" >
            <div className="row-footer">


                <div className="footer-flex-1 footer-flex-main-icon">
                    <div className="widget-head">
                        <img style={{ cursor: "pointer" }} src={footerlogo} className="logo-footer" alt="footerlogo" onClick={() => { navigate("/") }} />
                        {/* {   window.scrollTo(0, 0)} */}
                    </div>
                    <div className="footer-cont">
                        <p className="footer-p" >We believe it has the power to do 
                            amazing things.
                        </p>
                        <span>Interested in working with us?</span> <br></br>
                        <div className="footer-icons ">
                            <div className="footer-ICONS"><a href="https://www.facebook.com/share/Detdu7fDmCxuaESD/?mibextid=qi2Omg" target="_blank"><CiFacebook /></a></div>
                            <div className="footer-ICONS"><a href="https://www.instagram.com/itmonks_solutions/?igsh=bHhqenJ0cG52dWRl" target="_blank"><FaInstagram /></a></div>
                            <div className="footer-ICONS"> <a href="https://www.linkedin.com/company/it-monks-solutions/" target="_blank"><CiLinkedin /></a></div>
                        </div>
                    </div>

                </div>

                <div className="footer-flex-1 footer-flex-company">
                    <div className="widget-head">
                        <h5 className="footer-heading">Company</h5>
                    </div>
                    <ul className="footer-container">
                        <li><a className="footer-list" href="/" target="" > Home</a></li>
                        <li><a className="footer-list" href="/careers" target="" >Careers</a></li>
                        <li><a className="footer-list footer-z" href="/About us" target="" >About Us</a></li>
                        <li><a className="footer-list footer-z" href="Our Team" target="" >Our Team</a></li>
                        <li><a className="footer-list footer-z" href="How We Work" target="" >How we work </a></li>
                        <li><a className="footer-list footer-z" href="Project Pricing" target="" >Project Pricing</a></li>
                        <li><a className="footer-list footer-z" href="Contact Us" target="" >Contact Us</a></li>
                        <li><a className="footer-list footer-z" href="/BlogPage" target="" >Blog</a></li>
                    </ul>

                </div>

                <div className="footer-flex-1 footer-flex-services">
                    <div className="widget-head">
                        <h5 className="footer-heading">Services</h5>
                    </div>
                    <ul className="footer-container">
                        <li><a className="footer-list" href="Web Design And Development" target="" >Website Design And Development</a></li>
                        <li><a className="footer-list" href="Mobile Application Development" target="" >Mobile Application Development </a></li>
                        <li><a className="footer-list" href="Testing Services" target="" >Testing Services</a></li>
                        <li><a className="footer-list" href="Health Care Services" target="" >Health Care Services</a></li>
                        <li><a className="footer-list footer-z" href="Content Writing And Moderation" target="" >Content Writing And Moderation</a></li>
                        <li><a className="footer-list footer-z" href="Graphic Designing" target="" >Graphic Designing</a></li>
                        <li><a className="footer-list footer-z" href="E-Commerce" target="" >E-Commerce Projects</a></li>
                        <li><a className="footer-list footer-z" href="Digital Marketing" target="" >Digital Marketing</a></li>
                        <li><a className="footer-list footer-z" href="Non-IT Services" target="" >Non-IT Services</a></li>
                        {/* <li><a className="footer-list footer-z" href="" target="" >Website Design And Development</a></li>
                        <li><a className="footer-list footer-z" href="" target="" >Marketing Services </a></li>
                        <li><a className="footer-list footer-z" href="" target="" >HR Resources And Development</a></li> */}
                        <li><a className="footer-list footer-z" href="HR Services" target="" >HR Services</a></li>
                    </ul>
                </div>

                <div className="footer-flex-1 footer-flex-address">
                    <div className="widget-head">
                        <h5 className="footer-heading">Address:</h5>
                    </div>
                    <div className="footer-address-text">
                        <p className="footer-address">
                            4th Floor, Bizness Square, Hitech City Rd,Hyderabad
                        </p>
                        <h5 className="footer-heading">Hours:</h5>
                        <p className="footer-address footer-address-time">
                            9.30am – 6.30pm <br></br>
                            Monday to Friday
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="footer-container1">
                <div className="footer-wrapper ">
                    <p className="wow fadeInLeft color-2" data-wow-delay=".3s">
                        Copyright © 2024 <a href="/" style={{ textDecoration: "none" }}><b>IT Monks Solutions</b></a>. All Rights Reserved.
                    </p>
                    <ul className="footer-menu  fadeInRight" data-wow-delay=".5s">
                        <p><a href="" target="" style={{ textDecoration: "none" }}>Company</a></p>
                        <p><a href="" target="" style={{ textDecoration: "none" }}>Support</a></p>
                        <p><a href="" target="" style={{ textDecoration: "none" }}>Privacy</a></p>
                        <p><a href="" target="" style={{ textDecoration: "none" }}>FAQS</a></p>
                    </ul>
                </div>
            </div>
            <a href="#" id="scrollUp" className="scroll-icon"><FaArrowUp /></a>
        </div>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            className="footer-waves">
            <defs>
                <path
                    id="gentle-wave"
                    d="M-160 44c30 0 
                           58-18 88-18s
                           58 18 88 18 
                           58-18 88-18 
                           58 18 88 18
                           v44h-352z"/>
            </defs>
            <g class="waves">
                <use
                    xlinkHref="#gentle-wave"
                    x="50"
                    y="0"
                    fill="#03ffff"
                    fill-opacity=".2"
                />
                <use
                    xlinkHref="#gentle-wave"
                    x="50"
                    y="3"
                    fill="#03ffff"
                    fill-opacity=".5"
                />
                <use
                    xlinkHref="#gentle-wave"
                    x="50"
                    y="6"
                    fill="#03ffff"
                    fill-opacity=".9"
                />
            </g>
        </svg>
    </>)

}

export default Footer