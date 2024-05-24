import React, { useRef } from 'react';
import './CalenderFirst.css';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 
import phoneMan from "../Photos/Ellipse 16.png"; 
import { useNavigate } from "react-router-dom"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faAngleDown } from '@fortawesome/free-solid-svg-icons';
function CalenderFirst() {  
    const navigate = useNavigate();
    const timeButton1Ref = useRef();
    const timeButton2Ref = useRef(); 
    const timeButton3Ref = useRef(); 
    const timeButton4Ref = useRef();
    const [value, onChange] = useState(new Date());  
    console.log(value);
    let month=(value.getMonth()); 
    let date=(value.getDate());
    let year=(value.getFullYear());
  
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 
    const timeObj = {
        time:"",
    } 


    return (
        <div className='main'>

            <div id='iconsDiv1'>
                <div className='circleDiv' id="circle1"></div>
                <div id='lineDiv'></div>
                <div className='circleDiv'  id="circle2"></div> 
            </div>
            <p className='choosePara' id="choosePara1">CHOOSE TIME</p> 
            <p className='choosePara' id="choosePara2">YOUR INFO</p>
            <div id='consultationDiv'>

                <div id='calenderDiv'> 
                    <img src={phoneMan} className='phoneMan'></img>
                    <div id='calenderHeading'>Meet With Vlad</div>
                    <Calendar  onChange={onChange} value={value} /> 
                    
                </div>

                <div id='timeDiv'>

                    <div className='slotTimingDiv' id="whatTimeDiv">What time works Best?</div>
                    <div className='slotTimingDiv' id="showingTimeDiv">Showing time for <span id='slotTimingStyling'>{`${months[month]},${date} ${year}`}</span>
                    </div>

                    <div id='dynamicDiv'><h6>{value.toString()}<span> <FontAwesomeIcon icon={ faAngleDown} id="angleDown" /></span></h6></div> 

                    <div className='timeButton' onClick={() => {
                        const value1 = timeButton1Ref.current.innerHTML;
                        console.log(value1); 
                        timeObj.time = value1; 
                        console.log(timeObj);
                    }} ref={timeButton1Ref}>5:30 PM</div>
                    <div className='timeButton' ref={timeButton2Ref} onClick={() => {
                        const value2 = timeButton2Ref.current.innerHTML;
                        console.log(value2); 
                        timeObj.time = value2; 
                        console.log(timeObj);
                    }} >6:30 PM</div>
                    <div className='timeButton' ref={timeButton3Ref} onClick={() => {
                        const value3 = timeButton3Ref.current.innerHTML;
                        console.log(value3); 
                        timeObj.time = value3; 
                        console.log(timeObj);
                    }} >7:30 PM</div>
                    <div className='timeButton' ref={timeButton4Ref} onClick={() => {
                        const value4 = timeButton4Ref.current.innerHTML;
                        console.log(value4); 
                        timeObj.time = value4; 
                        console.log(timeObj);
                    }} >9:30 PM</div>

                </div>

            </div>

            <div className='buttonDiv'>
                <button id="calenterPageButton" onClick={() => {
                    navigate("/secondCalender",{ state: { someData: timeObj,dateObj:value } })
                    }}>Next</button>
            </div>
        </div>
    )
}

export default CalenderFirst