import React, { useRef } from "react";
import "./YourInfoCalender.css";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faL } from "@fortawesome/free-solid-svg-icons"; 
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function InfoYourCalendar() {   
  
  const notifySuccess = () => {
    // toast("otp has been sent to your Email"); 
    toast.success("OTP has been sent to your Email Successfully", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",

    });
  } 
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }) 
  
  const notifyFailure = () => {
    // toast("otp has been sent to your Email"); 
    toast.error("please re-send your OTP", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",

    });
  }
  const verifySuccess = () => {
    // toast("otp has been sent to your Email"); 
    toast.success("your Email is verified Successfully", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
       
    });
  }
  const verifyFailure = () => {
    // toast("otp has been sent to your Email"); 
    toast.warning("please check your OTP and try again", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }  

  const firstNameToast = () => {
    // toast("otp has been sent to your Email"); 
    toast.warning("please check your OTP and try again", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }  
  const lastNameToast = () => {
    // toast("otp has been sent to your Email"); 
    toast.warning("please Enter Your First Name", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }  
  const verifyButtonToast = () => {
    // toast("otp has been sent to your Email"); 
    toast.warning("please Verify Your Email With Otp", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }  
  const checkBoxToast = () => {
    // toast("otp has been sent to your Email"); 
    toast.warning("please check the check box", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }  

  const checkBoxInputRef = useRef();
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const verifyOtpInputRef = useRef();
  const sendButtonInputRef = useRef(); 
  const emailInputRef = useRef();
  const verifyButton = useRef();

  const sendOtp = async () => { 
    let dataToSend = new FormData();
    dataToSend.append("email", emailInputRef.current.value);
    // const response = await axios.post("http://localhost:6000/otpSend"); 
    // console.log(response);   
    const reqOptions = {
      method: "POST",
      body: dataToSend,
    }
    const JSONData = await fetch("http://localhost:6003/otpSend", reqOptions);
    const JSOData = await JSONData.json();
    if (JSOData.status == "success") {
      // alert("OTP has been sent to your E-mail Id"); 
      // verifyOtpInputRef.current.style.visibility = "visible";
      // verifyButton.current.style.visibility = "visible";
      // verifyButton.current.style.backgroundColor = "red";  
      notifySuccess();
    } else {
      // alert("Try resending your OTP"); 
      // verifyOtpInputRef.current.style.visibility = "visible";  
      // verifyButton.current.style.visibility = "visible";  
      notifyFailure();
    }
    console.log(JSOData);
  }

  const verifyOtp = async () => {
    const dataToSend = new FormData();
    dataToSend.append("verifyEmailOtp", verifyOtpInputRef.current.value);
    // const response = await axios.post("http://locahost:6001/verifyOtp", dataToSend); 
    const reqOptions = {
      method: "POST",
      body: dataToSend,
    };
    const JSONData = await fetch("http://localhost:6003/verifyOtp", reqOptions);
    const JSOData = await JSONData.json();
    console.log(JSOData);
    if (JSOData.status == "success") {  
      // checkOtpValue = true;
      verifyButton.current.innerHTML = "verified";
      verifyButton.current.style.backgroundColor = "green"; 
      verifyOtpInputRef.current.value = "";
      // document.getElementById("sendButton").removeAttribute("disabled");  
      verifySuccess();
    } else {
      verifyFailure();
    }
  }
  
  

 
    const navigate = useNavigate();
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

  const data = useLocation();
  const requiredDate = data.state.dateObj;
  console.log(requiredDate);
  console.log(data.state.someData.time);
  const dynamicTime = data.state.someData.time;
  const month = requiredDate.getMonth();
  const day = requiredDate.getDay();
  const year = requiredDate.getFullYear();
  const date = requiredDate.getDate();
  // console.log(date);
  return (
    <div id="main">
      <div className="wholeDiv">
        <div id="iconsDiv2">
          <div className="circleDiv2" id="circleDiv1">
            <FontAwesomeIcon icon={faCheck} />
            <p className="choosePara" id="chooseParaDiv1">
              CHOOSE TIME
            </p>
            <p className="choosePara" id="chooseParaDiv2">
              YOUR INFO
            </p>
          </div>
          <div id="lineDiv2"></div>
          <div className="circleDiv2"></div>
        </div>
        <div id="blackContainer">
          <div className="infoCss">Your Information</div>
          <div className="infoCss">{`${days[day]},${months[month]},${date},${year},${dynamicTime}`}</div>
          <div className="inputDivs">
            <div className="labelAndInput" id="labelAndInput1">
              <label htmlFor="firstName">First Name*</label>
              <input name="firstName" type="text" id="firstName" ref={firstNameInputRef}></input>
            </div>

            <div className="labelAndInput" id="labelAndInput2">
              <label htmlFor="lastName">Last Name*</label>
              <input name="lastName" type="text" id="lastName" ref={lastNameInputRef}></input>
            </div>
                  </div> 
                  

    <div className="emailAndOtpDiv"> 
     <div className="emailAndInputDiv">  
        <label id="emailLabel" htmlFor="email">Your Email Address*</label>     
         <input type="text" required id="email" ref={emailInputRef}></input>          
   </div>    

      <button id="reqOtpButton" ref={sendButtonInputRef} onClick={() => {
              sendOtp();        
    }}>Req-Otp</button>  

     <div className="OtpDiv"> 
        <label id="emailLabel" htmlFor="otpInput">OTP*</label>     
         <input type="number" maxLength={4} required id="otpInput" onChange={(event)=>{
                        verifyOtpInputRef.current.value = event.target.value.slice(0,4);
      }} ref={verifyOtpInputRef}></input>          
      </div>      
            <button id="verifyButton" ref={verifyButton} onClick={() => { 
              if (verifyButton.current.innerHTML == "verified") {
                
              } else {
                verifyOtp();
              }
              
      }}>Verify Email</button>   
     </div> 
          
      <h4 className="dataPrivacy">Data Privacy</h4>
        <div className="dataPrivacyDiv">  
                      <p className="dataPrivacyPara1">IT Monks is committed to protecting and respecting your privacy, and we’ll only use your personal information to administer your account and to provide the products and services you requested from us. From time to time, we would like to contact you about our products and services, as well as other content that may be of interest to you. If you consent to us contacting you for this purpose, please tick below to say how you would like us to contact you:</p> 
                      <div className="checkAndInput"> 
                      <input type="checkbox" ref={checkBoxInputRef}></input> 
                      <label>I agree to receive other communications from IMS.</label>
                      </div>
                      
                      <p className="dataPrivacyPara2">By clicking submit below, you consent to allow SumatoSoft to store and process the personal information submitted above to provide you the content requested.</p>
      </div>       

          {/* <div className="inputDivs"></div>
          <div className="infoCss">Data Privacy</div>
          <div></div> */}
        </div> 
        <div className="buttonsDiv"> 
                  <button id="iconButton" onClick={() => {  
                      navigate("/");
            }}> <FontAwesomeIcon icon={ faAngleLeft} id="angleLeft"/>Back</button>   
          <button id="confirmButton" onClick={() => {  
            // console.log(checkBoxInputRef.current.checked);
            if (firstNameInputRef.current.value=="") {
              firstNameToast();
            } 
            if (lastNameInputRef.current.value=="") {
              lastNameToast();
            } 
            if (verifyButton.current.innerHTML!="verified") {
              verifyButtonToast();
            } 
            if (checkBoxInputRef.current.checked == false) {
              checkBoxToast();
            } 
            else {
              navigate("/thirdCalender",{state:{time:dynamicTime,dateObj:requiredDate}});
            }
            }}>Confirm</button>             
        </div>    
      </div> 
      <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
    </div>
  );
}

export default InfoYourCalendar;
