import React, { useEffect } from 'react'
// import img1 from "../src/Navbar/imsnewlogo.png";
import "../BlogPage/WhoWeAre.css";
import img2 from "../../Photos/slide2.jpg";
import img3 from "../../Photos/slide2.jpg";
import img4 from "../../Photos/slide3.jpg";
import img5 from "../../Photos/slide4.jpg";



function WhoWeAre() {
   
    const imagesArray = [
        img2, img3, img4, img5
    ];

    return (
        <div style={{ zIndex: "40", width: "100%", overflow: "hidden", marginTop:"60px" }}>
            <div className="main-heading2"  >
                <h1>Who <span style={{ marginLeft: "10px" }}>We</span> <span style={{ marginLeft: "10px", color: "goldenrod" }}>Are</span></h1>
            </div>


            <div className="we-are">

                <div className="cont">
                    <p>IT Monks Solutions Pvt Ltd is dedicated to
                        revolutionizing the IT landscape, offering cutting-edge
                        solutions for businesses to thrive digitally. We
                        specialize in <span style={{ color: "goldenrod", fontWeight: "bolder" }}>“Web Design & Development, Mobile
                            Application Development, Testing Services, Content
                            Writing & Moderation,Health Services, Graphic
                            Designing, E-Commerce Projects, Digital Marketing,
                            and HR Services.”</span> With a focus on customized services,
                        innovation, and top-notch quality, we foster long-term
                        partnerships to address client needs effectively. . </p>
                    <p>We understand that the digital landscape is constantly evolving, which is why we're committed to staying ahead of the curve. Whether it's keeping up with the latest trends in web design, mastering emerging technologies in mobile app development, or refining our strategies in digital marketing, we're always striving to deliver solutions that exceed expectations.</p>
                    <p>But our commitment to excellence goes beyond just technical proficiency. We're also passionate about delivering exceptional customer service at every step of the journey. From the initial consultation to post-launch support, we're dedicated to ensuring that our clients feel heard, valued, and supported throughout the entire process.</p>
                    <p> Moreover, we recognize the importance of sustainability and ethical practices in everything we do. That's why we're committed to reducing our environmental footprint, promoting diversity and inclusion within our team, and giving back to the communities we serve.</p>
                    <p> In essence, IT Monks Solutions Pvt Ltd is more than just a technology company – we're a trusted partner on a mission to empower businesses to thrive in the digital age. So whether you're a small startup or a large enterprise, we invite you to join us on this journey of innovation and growth. Together, let's shape the future of IT and revolutionize the way business is done.</p>
                </div>

                <div className="card11" style={{ zIndex: "1" }}>
                    <div >
                        <marquee className="scrolling-icons-wrapper" behavior="alternate" style={{ zIndex: "1" }}>
                            {imagesArray.map((icon, index) => (
                                <img style={{ zIndex: "1" }} key={index} src={icon} alt={`ImagesArray ${index + 1}`} className="imagesArray" />
                            ))}
                        </marquee>
                    </div>

                </div>




            </div>
        </div>

    )
}

export default WhoWeAre;