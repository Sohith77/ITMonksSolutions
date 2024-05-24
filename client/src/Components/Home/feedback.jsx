import React,{useState,useEffect} from "react";
import './feedback.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Sliders from '../Home/prac'
import profile1 from '../Photos/01.png'
import AOS from "aos";
import 'aos/dist/aos.css';
function FeedBack(){
    useEffect(() => {
        AOS.init();
    }, [])
    AOS.init({
        duration: 500,
        once: false,
    });
    

    
    return(
        <>
        
        <section className="container2002">
            <div  className="headings2002">
                <h3   data-aos = "fade-up" data-aos-delay="100"><b>TRUSTED CLIENTS FEEDBACK</b></h3>
                <h1 className="header111"  data-aos = "fade-up" data-aos-delay="300">Why People Say About Our <br /> Business Services</h1>
            </div>
            <div className="slider2002">
                <Sliders/>
            </div>
        </section>
        
        </>
    )
}
export default FeedBack;