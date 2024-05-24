import React from "react";
import "./LastComponent.css";
import eventImage from "../Photos/Event Accepted.png"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'; 
import { useLocation, useNavigate } from "react-router-dom";
function LastComponent() { 
  const navigate = useNavigate(); 
  const passData = useLocation(); 
  console.log(passData.state.dateObj);
  console.log(passData.state.time);
  // console.log(passData);

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const month = passData.state.dateObj.getMonth();
  const day = passData.state.dateObj.getDay();
  const year = passData.state.dateObj.getFullYear();
  const date = passData.state.dateObj.getDate();
  return ( 

    <div className="topDiv"> 
      
      <div id="topTickMarkDiv">
        <div id="iconsDiv3">
          <div className="circleDiv1">
            <FontAwesomeIcon icon={faCheck} />
          </div>
          <div id="lineDiv1"></div>
          <div className="circleDiv1"> 
          <FontAwesomeIcon  icon={ faCheck} />
          </div>
        </div>
      </div>
      <div id="eventDiv">
        <img src={eventImage} id="eventImage"></img>
        <h3 id="bookingHeading">Booking Confirmed</h3>
        <p id="paraBooking">
          You’re booked with xxxxx. <br></br>
          An Invitation has been emailed to you.
        </p>
        {/* <h2 className="lastHeading">March 19 , 2024 </h2>  */}
        <h2 className="lastHeading">{`${months[month]} ${date} , ${year}`}</h2>
        <h2 className="lastHeading" id="timeHeading">{ passData.state.time}</h2>
      </div> 
      <div id="lastButtonContainer"> 
        <button id="homeButton" onClick={() => {
          navigate("/");
        }}>HOME</button>
      </div>
    </div>
  );
}

export default LastComponent;
