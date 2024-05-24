import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './register.css'
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

function Register() { 
  const checkBox117Ref = useRef("");
  const handleKeyPress = (event, refToFocus) => {
    if (event.key === "Enter") {
      event.preventDefault();
      refToFocus.current.focus();
    }
  };

  const registerUser = async  ()=>{  
  const dataToSend = new FormData();
  dataToSend.append("firstName", firstNameInputRef.current.value);
  dataToSend.append("lastName", lastNameInputRef.current.value) ;
  dataToSend.append("email", emailInputRef.current.value) ;
  dataToSend.append("phone", phoneInputRef.current.value) ;
  dataToSend.append("password", passwordInputRef.current.value); 

  const response = await axios.post("http://localhost:6003/register",dataToSend); 
  console.log(response); 
  if(response.data.status == "success") {
    localStorage.setItem("registerStatus","success"); 
    navigate("/jobId", { state: { data: passData }});
  }  
  if(response.data.msg == "user already exists") {
    alert("this email already exists,please try with other email");
  }
   
  }
  var checkValue = false;
  var checkOtpValue = false;
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


  const notifyFailure = () => {
    // toast("otp has been sent to your Email"); 
    toast.error("Please re-send your OTP", {
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
    toast.success("Your Email is verified Successfully", {
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

  const sendButtonSpanRef = useRef();
  const sendButtonInputRef = useRef();
  const emailInputRef = useRef();
  const verifyOtpInputRef = useRef();
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
      verifyOtpInputRef.current.style.visibility = "visible";
      verifyButton.current.style.visibility = "visible";
      verifyButton.current.style.backgroundColor = "red";
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
      checkOtpValue = true;
      sendButtonSpanRef.current.style.visibility = "hidden"
      verifyButton.current.innerHTML = "verified";
      verifyButton.current.style.backgroundColor = "green";
      verifyOtpInputRef.current.value = "";
      // document.getElementById("sendButton").removeAttribute("disabled");  
      verifySuccess();
    } else {
      verifyFailure();
    }
  }



  let faEye1 = faEye;
  let faEye2 = faEye;
  let faEyeSlash1 = faEyeSlash;
  let faEyeSlash2 = faEyeSlash;

  const [password1, setPassword1] = useState('');
  const [showPassword1, setShowPassword1] = useState(false);
  const [password2, setPassword2] = useState('');
  const [showPassword2, setShowPassword2] = useState(false);

  const phoneToast = () => toast.error('Please check the phone number fields', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light"
    // transition: Bounce,
  });
  const firstNameToast = () => toast.error('Please enter your first name!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light"
    // transition: Bounce,
  });
  const lastNameToast = () => toast.error('Please enter your last name', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light"
    // transition: Bounce,
  });
  const emailToast = () => toast.error('Please enter a valid email address', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light"
    // transition: Bounce,
  });
  const passwordToast = () => toast.error('Please check your password fields', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light"
    // transition: Bounce,
  });
  const VerifyEmailToast = () => toast.error('Please verify your email address', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light"
    // transition: Bounce,
  });
  const verifyPhoneToast = () => toast.error('Please verify your phone number', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light"
    // transition: Bounce,
  });
  const verifyPasswordToast = () => toast.error('Please check and confirm your password', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light"
    // transition: Bounce,
  });
  const checkBoxToast = () => toast.error('Please check the description box', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light"
    // transition: Bounce,
  });


  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };
  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };


  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }



  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  console.log(isChecked);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const inputFirstSpanRef = useRef();
  const firstNameInputRef = useRef();

  const inputLastSpanRef = useRef();
  const lastNameInputRef = useRef();

  const inputEmailSpanRef = useRef();
  // const emailInputRef = useRef(null);

  const inputPhoneSpanRef = useRef();
  const phoneInputRef = useRef(null);

  const inputPasswordSpanRef = useRef();
  const passwordInputRef = useRef(null);

  const verifyEmailInput = useRef();
  const verifyPhoneInput = useRef();
  const confirmPassword = useRef();
  const location = useLocation();
  console.log(location.state.data);
  const passData = location.state.data;

  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  // const [verifyEmail, setVerifyEmail] = useState('');
  const [verifyPhone, setVerifyPhone] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');


  const handleVerifyPassword = (event) => {
    setVerifyPassword(event.target.value);
  }



  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    // setPhone(event.target.value);
    const sanitizedValue = event.target.value.replace(/\D/g, '').slice(0, 10);
    setPhone(sanitizedValue);

  };

  // const handleVerifyEmailChange = (event) => {
  //   setVerifyEmail(event.target.value);
  // };

  const handleVerifyPhoneChange = (event) => {
    // setVerifyPhone(event.target.value);
    const sanitzedVerifiedValue = event.target.value.replace(/\D/g, '').slice(0, 10);
    setVerifyPhone(sanitzedVerifiedValue)
  };


  const focusFirstEmptyInputField = () => {
    const inputFields = [
      { ref: firstNameInputRef },
      { ref: lastNameInputRef },
      { ref: emailInputRef },
      { ref: phoneInputRef },
      { ref: passwordInputRef },
      { ref: confirmPassword },
      { ref: verifyPhoneInput },
    ];
 
    for (let inputField of inputFields) {
      if (!inputField.ref.current.value) {
        inputField.ref.current.focus();
        inputField.ref.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        break;
      }
    }
  };

  return (

    <>
      <div className="Register">
        <div className="box">
          <div className="head31" n >
            <h1>Sign Up</h1>
            <b></b>
          </div>
          <form action="" >
            <div className="columns50">
              <div className="columns49 firstbox">
                <div className="tags60">
                  <label htmlFor="" >First Name *</label>
                  <input className="inp9 ok" type="text" ref={firstNameInputRef} placeholder="First Name" 
                  onKeyDown={(e) => {
                    if (firstNameInputRef.current.value == "") {
                    } else {
                      handleKeyPress(e, lastNameInputRef);
                    }
                  }}/>
                  <span className="error-span-register-page" ref={inputFirstSpanRef}></span>
                </div>
                <div className="tags60">
                  <label htmlFor="" >Last Name *</label>
                  <input className="inp9" type="text" ref={lastNameInputRef} placeholder="Last Name" required 
                   onKeyDown={(e) => {
                    if (lastNameInputRef.current.value == "") {
                    } else {
                      handleKeyPress(e, emailInputRef);
                    }
                  }}
                  />
                  <span className="error-span-register-page" ref={inputLastSpanRef}></span>
                </div>
              </div>
              <div className="columns49 firstbox" style={{marginLeft:"-0.25rem"}}>
                <div className="tags60" >
                  <label htmlFor="email" className="register-page-email">Email *</label>
                  <input className="inp9 inp9email" type="email" value={email} onChange={handleEmailChange} ref={emailInputRef} placeholder="Email" required 
                   onKeyDown={(e) => {
                    if (emailInputRef.current.value == "") {
                    } else {
                      handleKeyPress(e, sendButtonInputRef);
                    }
                  }}
                  />
                  <span className="error-span-register-page-email" ref={inputEmailSpanRef}></span>
                </div>


                <div id="otpCss">
                  <label htmlFor="" style={{ color: "#ffd600", marginLeft: "3px" }} className="register-verify-label">Verify Email *</label>
                  {/* <input  className="inp9" placeholder="verify email" type="email" value={verifyEmail} onChange={handleVerifyEmailChange} ref={verifyEmailInput} required />
                           {verifyEmail !== email && verifyEmail.length > 0 && <span style={{ color: 'red' }}>email does not match</span>} */}
                  <div id="inputDivs">
                    <button ref={sendButtonInputRef} id="sendOtpButton" type="button" onClick={() => {
                      if(emailInputRef.current.value.endsWith(".com") && emailInputRef.current.value.includes("@")){
                      sendOtp();
                      }
                    }}>Request-OTP</button>

                    <input style={{ visibility: "hidden" }} ref={verifyOtpInputRef} type="number" id="registerInput" onChange={(event) => {
                      verifyOtpInputRef.current.value = event.target.value.slice(0, 4);
                    }}></input>

                    <button ref={verifyButton} style={{ visibility: "hidden" }} id="verifyOtpButton" type="button" onClick={() => {
                      verifyOtp();
                    }}>verify</button>
                    <br></br>
                    <span className="error-span-register-page" ref={sendButtonSpanRef}></span>
                  </div>
                  {/* <span className="error-span-register-page" ref={sendButtonSpanRef}></span> */}
                </div>

              </div>
              <div className="columns49 firstbox">
                <div className="tags60">
                  <label htmlFor="">Phone *</label>
                  <input className="inp9" type="text" placeholder="Phone Number" value={phone} onChange={handlePhoneChange} ref={phoneInputRef} maxLength={10} minLength={10} required 
                   onKeyDown={(e) => {
                    if (phoneInputRef.current.value == "") {
                    } else {
                      handleKeyPress(e, verifyPhoneInput);
                    }
                  }}
                  />
                  <span className="error-span-register-page" ref={inputPhoneSpanRef}></span>
                  {phone.length > 10 && phone.length < 10 && <span style={{ color: 'red' }}>Phone number should be having 10digits</span>}
                </div>
                <div className="tags60">
                  <label htmlFor="">Verify Phone *</label>
                  <input className="inp9" placeholder="Verify Phone Number" type="text" value={verifyPhone} onChange={handleVerifyPhoneChange} ref={verifyPhoneInput} maxLength={10} required 
                  onKeyDown={(e) => {
                    if (verifyPhoneInput.current.value == "") {
                    } else {
                      handleKeyPress(e, passwordInputRef);
                    }
                  }}
                  />
                  {verifyPhone !== phone && verifyPhone.length > 0 && <span className="error-span-register-page" style={{ color: 'red' }}>Phone does not match</span>}
                </div>
              </div>





              <div className="columns49 firstbox firebox">
                <div className="tags60">
                  <label htmlFor="" className="passwordleft" >Password *</label>
                  <span className="iconDiv">
                    <input className="inp9 inpok"
                      placeholder="Password"
                      value={password}


                      // onChange={(e) => setPassword1(e.target.value)}
                      onChange={handlePasswordChange}
                      type={showPassword1 ? 'text' : 'password'}
                      ref={passwordInputRef} required 
                      onKeyDown={(e) => {
                        if (passwordInputRef.current.value == "") {
                        } else {
                          handleKeyPress(e, confirmPassword);
                        }
                      }}
                      />
                    <button className="icon2" onClick={togglePasswordVisibility1} type="button">
                      <FontAwesomeIcon icon={showPassword1 ? faEye1 : faEyeSlash1} />
                    </button>
                  </span>
                  <span className="error1" ref={inputPasswordSpanRef}></span>
                  <div className="pass31">
                  </div>

                </div>
                <div className="tags60">
                  <label className="confirm" htmlFor="">Confirm Password *</label>
                  <span className="iconDiv">
                    <input className="inp9"
                      placeholder="Confirm Password"
                      value={verifyPassword}
                      // onChange={(e) => setPassword1(e.target.value)}
                      onChange={handleVerifyPassword}
                      type={showPassword2 ? 'text' : 'password'}
                      ref={confirmPassword} required 
                      onKeyDown={(e) => {
                        if (confirmPassword.current.value == "") {
                        } else {
                          handleKeyPress(e, checkBox117Ref);
                        }
                      }}
                      />
                    <button className="icon2" onClick={togglePasswordVisibility2} type="button">
                      <FontAwesomeIcon icon={showPassword2 ? faEye2 : faEyeSlash2} />
                    </button>
                  </span>
                  {verifyPassword !== password && verifyPassword.length > 0 && <span className="error" style={{ color: 'red', marginLeft: "1rem" }}>password does not match</span>}
                </div>
              </div>
            </div>

            <div className="descc31">
              <p> <input
                type="checkbox"
                required
                checked={isChecked}
                ref={checkBox117Ref}

                onChange={handleCheckboxChange}
              /> * I understand that, as part of the provision of their services to me, IT Monks may contact me regarding my employment, future opportunities, marketing or advertisement related to the services at the phone number provided, including SMS and pre-recorded messages through the use of automated technology. I understand that I may opt out at any time as stated in the Terms & Conditions.You can view our Privacy Notice here.</p>
            </div>
            <div className="register31">
              <button onClick={() => {
                const email = emailInputRef.current.value;
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


                if (firstNameInputRef.current.value === "") {
                  firstNameInputRef.current.focus()
                  inputFirstSpanRef.current.innerHTML = "Please enter your First Name";
                  inputFirstSpanRef.current.style.color = "red";
                  firstNameInputRef.current.style.borderColor = "red"
                } else {
                  inputFirstSpanRef.current.innerHTML = "";
                  inputFirstSpanRef.current.style.color = "daa520";
                  firstNameInputRef.current.style.borderColor = "daa520"
                }

                if (lastNameInputRef.current.value === "") {
                  lastNameInputRef.current.focus()
                  inputLastSpanRef.current.innerHTML = "Please enter your Last Name";
                  inputLastSpanRef.current.style.color = "red";
                  lastNameInputRef.current.style.borderColor = "red"
                }
                else {
                  inputLastSpanRef.current.innerHTML = "";
                  inputLastSpanRef.current.style.color = "yellow";
                  lastNameInputRef.current.style.borderColor = "yellow"
                }
                if (emailInputRef.current.value === "") {
                  inputEmailSpanRef.current.focus()
                  inputEmailSpanRef.current.innerHTML = "Please enter your Email";
                  inputEmailSpanRef.current.style.color = "red";
                  emailInputRef.current.style.borderColor = "red"
                }
                else {
                  inputEmailSpanRef.current.innerHTML = "";
                  inputEmailSpanRef.current.style.color = "daa520";
                  emailInputRef.current.style.borderColor = "#daa520"
                }

                if (verifyButton.current.innerHTML == "verified") {
                  checkOtpValue = true;
                 
                }
                else {
                  // alert("Verify With Your OTP")
                  sendButtonSpanRef.current.innerHTML = "verify otp";
                  sendButtonSpanRef.current.style.color = "red";
                  sendButtonSpanRef.current.style.fontSize = "1vw";
                  sendButtonSpanRef.current.style.marginTop = "3px";
                }

                if (phoneInputRef.current.value === "") {
                  inputPhoneSpanRef.current.innerHTML = "Please enter your Phone Number";
                  inputPhoneSpanRef.current.style.color = "red";
                  phoneInputRef.current.style.borderColor = "red"
                }
                else {
                  inputPhoneSpanRef.current.innerHTML = "";
                  inputPhoneSpanRef.current.style.color = "yellow";
                  phoneInputRef.current.style.borderColor = "yellow"
                }

                if (passwordInputRef.current.value === "") {
                  inputPasswordSpanRef.current.innerHTML = "Please enter your Password";
                  inputPasswordSpanRef.current.style.color = "red";
                  passwordInputRef.current.style.borderColor = "red"
                }
                else {
                  inputPasswordSpanRef.current.innerHTML = "";
                  inputPasswordSpanRef.current.style.color = "yellow";
                  passwordInputRef.current.style.borderColor = "yellow"
                }
                if (phone.length != 10) {
                  inputPhoneSpanRef.current.innerHTML = "Please enter mobile number 10 digits";
                  inputPhoneSpanRef.current.style.color = "red";
                  phoneInputRef.current.style.borderColor = "red"
                }
                else {
                  inputPhoneSpanRef.current.innerHTML = "";
                  inputPhoneSpanRef.current.style.color = "yellow";
                  phoneInputRef.current.style.borderColor = "yellow"
                }
                if (firstNameInputRef.current.value === '') {
                  firstNameToast();
                }
                else if (lastNameInputRef.current.value === '') {
                  lastNameToast();
                }
                else if (email.length === 0) {
                  emailToast();
                }

                else if (phone.length === 0) {
                  phoneToast();
                }
                else if (password.length === 0) {
                  passwordToast();
                }

                // else if (verifyEmailInput.current.value === '') {
                //   VerifyEmailToast();
                // }
                // else if (verifyEmailInput.current.value != emailInputRef.current.value) {
                //   VerifyEmailToast();
                // }
                else if (verifyPhoneInput.current.value === '') {
                  verifyPhoneToast();
                }

                else if (verifyPhoneInput.current.value != phoneInputRef.current.value) {
                  verifyPhoneToast();
                }
                else if (confirmPassword.current.value === '') {
                  verifyPasswordToast();
                }
                else if (phone.length != 10) {
                  phoneToast();
                }
                else if (confirmPassword.current.value != passwordInputRef.current.value) {
                  verifyPasswordToast();
                }
                else if (!emailRegex.test(email)) {
                  emailToast();
                } else if (!isChecked) {
                  checkBoxToast();
                }

                else {
                  checkValue = true;

                }

                if (checkValue == true && checkOtpValue == true) {
                  // localStorage.setItem("firstName", firstNameInputRef.current.value);
                  // localStorage.setItem("lastName", lastNameInputRef.current.value);
                  // localStorage.setItem("email", emailInputRef.current.value);
                  // localStorage.setItem("phone", phoneInputRef.current.value);
                  // localStorage.setItem("password", passwordInputRef.current.value); 
                  registerUser();
                 
                }
                focusFirstEmptyInputField();
              }} type="button">Register</button>
            </div>
          </form>
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
      </div>
    </>
  )
}

export default Register;