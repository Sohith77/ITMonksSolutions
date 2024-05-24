import React from "react";
import "..//AboutUsPage/style_component.css";
import whywechooseusimage1 from "../../Photos/chooseimage1.jpeg";
import whywechooseusimage2 from "../../Photos/chooseimage2.jpeg"
import whywechooseusimage3 from "../../Photos/chooseimage3.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";




function WhyWeChooseUs() {

    useEffect(() => {
        AOS.init();
    }, [])
    AOS.init({
        duration: 500 ,
        once: false,
      }); 
    return (
        <>
            <div className="choose-us-main-container">
              
                <div class="why-we-choose-us-text">
                    <p class="why-we-choose-us-text-para">Why We&nbsp;<span className="Choose_Us">Choose Us</span> </p>
                </div>
              
                <div class="why-we-choose-us-Time-management">
                    <p class="why-we-choose-us-Time-management-para">Time Management</p>

                </div>
               
                <div class="why-we-choose-us-First-container">
                  
                    <div class="why-we-choose-us-set-clear-priorities">
                        <p class="why-we-choose-us-para1">01. Set Clear Priorities</p>
                    </div> 
                  
                    <div class="why-we-choose-us-image1">
                        <img src={whywechooseusimage1} alt="" class="image1" />
                    </div>
                  
                    <div class="why-we-choose-us-rigtpara1">
                        <p class="why-we-choose-us-rigtpara-innertext1">Identify your most important tasks and goals, and prioritize them accordingly. Focus on completing high-priority tasks first, ensuring that your time and energy are directed towards activities that
                            align with your objectives.</p>
                    </div>
                </div>
            

                <div class="why-we-choose-us-Second-container">
                    
                    <div class="why-we-choose-us-image2">
                        <img src={whywechooseusimage2} alt="new" class="image2"  />
                    </div>
                 
                    <div class="why-we-choose-us-plan-and-organize">
                        <p class="why-we-choose-us-para2">02. Plan and Organize</p>
                    </div>
                    
                    <div class="why-we-choose-us-rigtpara2">
                        <p class="why-we-choose-us-rigtpara-innertext2" >Take time to plan your day or week, scheduling specific blocks of time for different tasks and activities. Use tools such as calendars, to-do lists, or time-blocking techniques to organize your schedule and ensure that you allocate sufficient time for important tasks.</p>
                    </div>
                </div>

          

                <div class="why-we-choose-us-Third-container">
                 
                    <div class="why-we-choose-us-minizing-distractions">
                        <p class="why-we-choose-us-para3">03. Minimizing Distractions </p>
                    </div>
                  
                    <div class="why-we-choose-us-image3">
                        <img src={whywechooseusimage3} alt="new" class="image3"  />
                    </div>
                 
                    <div class="why-we-choose-us-rigtpara3">
                        <p class="why-we-choose-us-rigtpara-innertext3">Identify your most important tasks and goals, and prioritize them accordingly. Focus on completing
                            high-priority tasks first, ensuring that your time and energy are directed towards activities that
                            align with your objectives.</p>
                    </div>
                </div>
              




                <div><h2 style={{marginTop:"30px",marginBottom: "-54px"}}><b><center>Our Commitment</center></b></h2></div>
                <div className="why-we-choose-us-Fourth-container">
                    <div className=" choose-card1">
                        <p>
                        Adherences to Deadlines  
                        </p>
                        <div className="card-body">
                            <p className="title">
                            Commit to meeting deadlines consistently.Whether its delivering a project completing a task or responding to emails, priortize timely delivery. Communicate clearly about deadlines and ensure that you allocate sufficient time and resources to meet them. If unforeseen circumstances arise that may affect your ability to meet deadline,communicate proactively and renegotiate expectations as needed.</p>
                        </div>
                    </div>

                     <div className="choose-card1">
                        <p>
                           Quality of Work
                        </p>
                         <div className="card-body">
                            <p className="title"> Commit to delivering high-quality work consistency. Strive for execellence in everything
                            you do, whether it's developing a product, providing a service, or completing a task. Take pride
                            in your work and ensure that it meets or exceeds the expectations of your clients,
                            colleagues, or stakeholders. Regularly review our work, seek feedback, and make necessary
                            improvements to maintain quality standards.</p>
                        </div>
                       
                    </div>
                    <div className="choose-card1">
                        <p>
                           Effective Communication
                        </p>
                        <div className="card-body">
                            <p className="title">
                             Commit to open, honest, and effective Communication. Clearly communicate
                            expectations, objectives, and progress updates with relevant stakeholders. Listen actively, ask clarifying questions, and provide timely responses to inquires or feedback. Foster a
                            culture of transparency, trust, and collaboration by keeping stakeholders informed and involved
                            throughout the project process.</p>
                        </div> 
                     </div> 
                </div>
            </div>





        </>
    )
}
export default WhyWeChooseUs;