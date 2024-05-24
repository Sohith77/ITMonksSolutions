import React from "react";
import "../AboutUsPage/OurCulturalCode.css"
import leftpicture from "../../Photos/leftpicture.jpeg";
import harshi from "../../Photos/harshi.jpeg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";




function OurCulturalCode() {

    useEffect(() => {
        AOS.init();
    }, [])
    AOS.init({
        duration: 400,
        once: false,
    });
    // AOS.init({
    //     duration: 400,
    //     once: false,
    // });
    return (
        <>
            <div class="Our-Cultural-Code-Heading">
                <h1 class="Our-Cultural-Code-Heading-h1 harshita"><span className="Cultural-code-our">Our</span> Cultural Code</h1>
            </div>

            <div class="Our-Cultural-Code-specialization" style={{ backgroundColor: "white", border: "none" }}>
                <marquee behaviour="scroll" direction="left">Innovation &nbsp;&nbsp;&nbsp;Customization&nbsp;&nbsp;&nbsp;Quality&nbsp;&nbsp;&nbsp;Client&nbsp;Satisfaction&nbsp;&nbsp;&nbsp;Continous&nbsp;Learning&nbsp;&nbsp;&nbsp;Ethical&nbsp;Practices&nbsp;&nbsp;&nbsp;</marquee>
            </div>

            <div>

                <div className="main_container" style={{ border: "none" }}>
                    <div class="Our-Cultural-Code-upper-container" >
                        <img src={leftpicture} alt="new" class="Our-Cultural-Code-left-image" data-aos="fade-right" />
                        <div class="Our-Cultural-Code-right-para">
                            <h1>Our <span>Vision</span></h1>
                            <p data-aos="fade-up" data-aos-duration='200' className="upper-container-para">At IT Monks Solutions Pvt Ltd, we strive back to lead technological innovation,empowering
                                businesses in the digital era. Our Commitment to excellence, continuous learning,and forward
                                thinking approach drives us to exceed client expectations.we aim to be the preferred partner for
                                organizations seeking visionary and sustainable technology solutions.</p>
                        </div>
                    </div>

                    <div class="Our-Cultural-Code-lower-container">
                        <div class="Our-Cultural-Code-left-para">
                            <h1>Our&nbsp;<span>Mission</span></h1>
                            <p data-aos="fade-up" className="lower-container-para lower-container-para1">IT Monks Solutions Pvt Ltd is dedicated to revolutionizing the IT landscape by delivering
                                cutting-edge
                                solutions for businesses to thrive digitally. We prioritize customized services, innovation, and
                                top-notch quality, fostering long-term partnerships to address client needs effectively. With a
                                focus on
                                technological advancements and client satisfaction, we strive to be the catalyst for our clients
                                success in the competitive world of IT.</p>
                        </div  >

                        <img src={harshi} alt="new" class="Our-Cultural-Code-right-image" data-aos="fade-left" />





                    </div>
                    {/* <div className="card_container">
                        <div className="card_container1">
                            <p className="card_heading1">Adherences to Deadlines</p>
                            <p  className="card_heading1_content">Commit to meeting deadlines consistently.Whether its delivering a project completing a task or responding to emails, priortize timely delivery. Communicate clearly about deadlines and ensure that you allocate sufficient time and resources to meet them. If unforeseen circumstances arise that may affect your ability to meet deadline,communicate proactively and renegotiate expectations as needed.</p>

                    </div>
                    <div className="card_container1">
                        <p className="card_heading2">Quality of Work </p>
                        <p className="card_heading1_content"> Commit to delivering high-quality work consistency. Strive for execellence in everything
                            you do, whether it's developing a product, providing a service, or completing a task. Take pride
                            in your work and ensure that it meets or exceeds the expectations of your clients,
                            colleagues, or stakeholders. Regularly review our work, seek feedback, and make necessary
                            improvements to maintain quality standards.</p>

                    </div>
                    <div className="card_container1">
                        <p className="card_heading3">Effective Communication</p>
                        <p className="card_heading1_content">
                             Commit to open, honest, and effective Communication. Clearly communicate
                            expectations, objectives, and progress updates with relevant stakeholders. Listen actively, ask clarifying questions, and provide timely responses to inquires or feedback. Foster a
                            culture of transparency, trust, and collaboration by keeping stakeholders informed and involved
                            throughout the project process.</p>

                    </div>
                </div> */}


            </div>

        </div >

           





        </>
    )


}
export default OurCulturalCode;

