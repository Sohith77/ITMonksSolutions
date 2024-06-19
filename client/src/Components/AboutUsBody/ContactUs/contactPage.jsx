import React, { useEffect } from "react";
// import "./animate.css"
import "./contactPage.css"
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import photo from "../../Photos/breadcrumb.jpg"
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Footer from "../../Footer/Footer/Blackfooter";

// import "./bootstrap.min.css"
// import "./popup.css"
// import "./main.css"
// import "./mainmenue.css"
// import "./nice.css"
// import "./silk.css"
// import contact from '../src/contact.jpg';
function ContactUs() {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (<>


        <body>



            {/* <!--<< Mouse Cursor Start >>-->   */}
            <div class="mouse-cursorc cursor-outerc"></div>
            <div class="mouse-cursorc cursor-innerc"></div>

            {/* <!-- Offcanvas Area Start --> */}

            <div class="offcanvas__overlay"></div>


            {/* <!--<< Breadcrumb Section Start >>--> */}
            <div>
                <div className="image-contact-us-sst">
                    <img src={photo} alt="" className="test2"/>
                </div>
                {/* <div class="breadcrumb-wrapper section-paddingc bg-cover" className="test2">
                    <div class="containerc">
                        <div class="page-headingc">
                            <h1 class="wow1 fadeInUp  heading-for-all" data-wow-delay=".3s">Contact Us</h1>
                            <h1 class="paras">Home page - <span className="homepagec spanelementc">contact us</span></h1>

                        </div>
                    </div>
                </div> */}
            </div>
            <marquee className="scrolling-part" behaviour="scroll" direction="left">IT Monks_ Solutions _Get In Touch_ With Us </marquee>


            {/* <!--<< Contact Section Start >>--> */}
            <section class="contact-main-areac fix1">
                <div class="containerc">
                    <div class="contact-main-wrapperc">
                        <div class="row g-4 twosidescontainerc">
                            <div class="col-lg-6">
                                <div class="contact-contentc">
                                    <div class="section-titlec mb-2">
                                        <span class="wow2 fadeInUp spanelementc heading-for-all">Contact US</span>
                                        {/* <h2 class="heading2c mini-headingc wow fadeInUp" data-wow-delay=".3s">Contact Us</h2> */}
                                    </div>
                                    <p class="mt-4 mt-md-0  fadeInUp mini-paras-cc" data-wow-delay=".4s">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                        doloremque laudantium, totam rem aperiam, eaque inventore
                                    </p>
                                    <div class="row g-4 mt-3">
                                        <div class="col-lg-6  fadeInUp" data-wow-delay=".3s">
                                            <div class="info-itemsc">
                                                <div class="icons">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill iconsc" viewBox="0 0 16 16">
                                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                                                    </svg>
                                                </div>
                                                <div class="contentc">
                                                    <h5 className="heading5  heading-for-all">Location</h5>
                                                    <p className="mini-paras-c" >
                                                        4th Floor, Bizness Square, Hitech City Rd, Whitefields, Hyderabad, Telangana 500081
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6  fadeInUp" data-wow-delay=".5s">
                                            <div class="info-itemsc">
                                                <div class="icons">
                                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill iconsc" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                                    </svg> */}
                                                    <IoCallOutline className="iconsc"/>
                                                   
                                                </div>
                                                <div class="contentc">
                                                    <h5 className="heading5  heading-for-all"> Phone</h5>
                                                    <a href="tel:+09354587874" className="abcd mini-paras-c">+91 9700709699 </a> <br />
                                                    {/* <a href="tel:+01368567894" className="abcd mini-paras-c">+91 9542531656 </a> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6  fadeInUp" data-wow-delay=".7s">
                                            <div class="info-itemsc">
                                                <div class="icons">
                                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill iconsc" viewBox="0 0 16 16">
                                                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                                                    </svg> */}
                                                    <MdOutlineMail className="iconsc" />
                                                </div>
                                                <div class="contentc">
                                                    <h5 className="heading5  heading-for-all">Email</h5>
                                                    <a href="mailto:supriya.chunduru@itmonkssolutions.com" class="link" className="abcd mini-paras-c">supriya.chunduru@itmonkssolutions.com</a> <br />
                                                    <a href="mailto:careers@itmonkssolutions.com" class="link" className="abcd mini-paras-c">careers@itmonkssolutions.com</a> <br />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6  fadeInUp" data-wow-delay=".9s">
                                            <div class="info-itemsc">
                                                <div class="icons">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share-fill iconsc" viewBox="0 0 16 16">
                                                        <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5" />
                                                    </svg>
                                                </div>
                                                <div class="contentc">
                                                    <h5 className="heading5  heading-for-all">Social</h5>
                                                    <div class="social-iconc d-flex align-items-center">
                                                        <a href="https://www.facebook.com/share/Detdu7fDmCxuaESD/?mibextid=qi2Omg" className="abcd">
                                                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook " viewBox="0 0 16 16">
                                                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                                        </svg> */}
                                                        <FaFacebookF />
                                                        </a>
                                                        <a href="https://www.instagram.com/itmonks_solutions/?igsh=bHhqenJ0cG52dWRl" className="abcd"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram " viewBox="0 0 16 16">
                                                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                                                        </svg>
                                                        </a>
                                                        <a href="https://www.linkedin.com/company/it-monks-solutions/" className="abcd">
                                                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin " viewBox="0 0 16 16">
                                                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                                        </svg> */}
                                                        <FaLinkedinIn />
                                                        </a>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    {/* <div class="contact-image wow fadeInUp" data-wow-delay=".4s">
                                        <img src={contact} alt="" />
                                    </div> */}
                                </div>
                            </div>
                            <div class="col-lg-6 mt-5 mt-lg-0">
                                <div class="contact-form-items">
                                    {/* <div class="contact-title">
                                        <h3 class="wow fadeInUp" data-wow-delay=".3s">Fill Up The Form</h3>
                                        <p class="wow fadeInUp" data-wow-delay=".5s">Your email address will not be published. Required fields are marked *</p>
                                        
                                    </div> */}
                                    <div class="second-imagec fadeInUp" data-wow-delay=".4s">
                                        <img src="https://img.freepik.com/free-photo/portrait-woman-customer-service-worker_144627-37943.jpg" alt="" className="imagecontact" />
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!--<< Map Section Start >>--> */}
            <div class="map-sectionc">
                <div class="google-map  fadeInUp" data-wow-delay=".7s">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0762270402383!2d78.37383407377182!3d17.456065300825788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93f26d013fe7%3A0x7eb7554e089558a1!2sIT%20Monks%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1712213369213!5m2!1sen!2sin" width="600" height="450"></iframe>
                </div>
            </div>


          
        </body>



  <Footer/>

    </>)

}
export default ContactUs;
