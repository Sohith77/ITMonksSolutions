import React, { useEffect, useState,useRef } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import profile1 from '../Photos/01.png'
import profile2 from '../Photos/02.png'
import profile3 from '../Photos/03.png'
import profile4 from '../Photos/04.png'
import profile5 from '../Photos/05.png'
// import profile6 from '../trusted/testimonial/06.jpg'
import profile7 from '../Photos/07.png'
import profile8 from '../Photos/08.png'
import profile9 from '../Photos/09.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretUp} from '@fortawesome/free-solid-svg-icons'
// import profile1 from '../trusted/testimonial/02.png'
import './prac.css'


function Sliders(){
   

    const slideData = [
        {
            id: 1,
            profileImg: `${profile1}`,
            name: "Leslie Alexander",
            role: "Graphics Designer",
            description: " Creative agency, we believe in the Eid and Innovation. We are constantly melt of what is possible, and strive to cat only beautiful and effective, but shark inventore veritatis et quasi archite cto beatae citae dicta sunt atlantic.",
            date: "April 23, 2024"
        },
        {
            id: 2,
            profileImg: `${profile2}`,
            name: "John Doe",
            role: "Web Developer",
            description: "Creative agency, we believe in the Eid and Innovation. We are constantly melt of what is possible, and strive to cat only beautiful and effective, but shark inventore veritatis et quasi archite cto beatae citae dicta sunt atlantic.",
            date: "February 14, 2024"
        },
        {
            id: 3,
            profileImg: `${profile3}`,
            name: "Salman Ahemad",
            role: "web developer",
            description: "Creative agency, we believe in the Eid and Innovation. We are constantly melt of what is possible, and strive to cat only beautiful and effective, but shark inventore veritatis et quasi archite cto beatae citae dicta sunt atlantic enim vero autem excepturi adipisci. Asperiores, omnis perferendis.",
            date: "january 25, 2024"
        },
        {
            id: 4,
            profileImg: `${profile4}`,
            name: "Jhon Dev",
            role: "UI Designer",
            description: "Creative agency, we believe in the Eid and Innovation. We are constantly melt of what is possible, and strive to cat only beautiful and effective, but shark inventore veritatis et quasi archite cto beatae citae dicta sunt atlanticAsperiores, omnis perferendis.",
            date: "May 20, 2024"
        },
        {
            id: 5,
            profileImg: `${profile7}`,
            name: "Shikon Bro",
            role: "Frontend  Engineer",
            description: "Creative agency, we believe in the Eid and Innovation. We are constantly melt of what is possible, and strive to cat only beautiful and effective, but shark inventore veritatis et quasi archite cto beatae citae dicta sunt atlantic.",
            date: "March 21, 2024"
        }
        
    ];

    
    var settings = {
        dots: true,
        infinite:true,
        speed:1000,
        slidesToShow:3,
        slidesToScroll:1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHOver: true,
        responsive:[
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3
                }

            },
            {
                breakpoint: 650,
                settings:{
                    slidesToShow:2
                }
            },
            {
                breakpoint: 350,
                settings:{
                    slidesToShow:1
                }
            }
            // {
            //     breakpoint: 450,
            //     settings:{
            //         slidesToShow:3
            //     }
            // }
           
        ]
    }
    return(
        <>
       <Slider {...settings} className="slider2002">
                {slideData.map((slide) => (
                    <div key={slide.id} className="cards2002" style={{width:'100px'}}>
                        <div className="profile2002">
                            <img src={slide.profileImg} alt="" />
                            <div className="names2002">
                                <h4>{slide.name}</h4>
                                <p>{slide.role}</p>
                            </div>
                        </div>
                        <div className="profiledesc2002">
                            <p>{slide.description}</p>
                        </div>
                        <div className="messageIcon3131"><p><FontAwesomeIcon icon={faCaretUp} /></p></div>
                        <div className="dateBox2002">
                            <h3 className="dates3131">{slide.date}</h3>
                        </div>
                    </div>
                ))}
            </Slider>
        </>
    )
}
export default Sliders;