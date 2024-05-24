


import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
// import{FaBars,FaTimes} from"react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import "./ResNavbar.css";
// import img1 from "../Photos/imsnewlogo.png";
import img1 from "../Photos/navbarlogo.png";
import { Navigate, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import profile from '../Photos/Ellipse 5.png';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaAngleDown } from "react-icons/fa";


function MyVerticallyCenteredModal(props) {
  const sendButtonInputRef = useRef();
  const emailInputRef = useRef();
  const verifyOtpInputRef = useRef();
  const verifyButton = useRef();
  const navigate = useNavigate()
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

  const handleReqOtpBtn = () => {
    const emailInputElement = emailInputRef.current;
    const email = emailInputElement.value;

    // Check if email is valid
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValidEmail) {
      // Clear email input field
      emailInputElement.value = '';

      // Disable the "req-otp" button
      const sendOtpButton = document.getElementById('clickForOtp');
      if (sendOtpButton) {
        sendOtpButton.setAttribute('disabled', true);
      }
    } else {
      // Implement your OTP sending logic here
      console.log('Sending OTP to:', email);
      const sendOtpButton = document.getElementById('clickForOtp')
      if (sendOtpButton) {
        sendOtpButton.removeAttribute('disabled');
      }
    }
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
      verifyButton.current.innerHTML = "verified";
      verifyButton.current.style.backgroundColor = "green";
      verifyOtpInputRef.current.value = "";
      document.getElementById("sendButton").removeAttribute("disabled");
      verifySuccess();
    } else {
      verifyFailure();
    }
  }


  const [isOpen, setIsOpen] = useState(true);
  const popupRef = useRef(null);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("name:", formData.name);
    console.log("email:", formData.email);
    console.log("message:", formData.message);
  }

  return (
    <Modal
      className="popModel"
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {isOpen && (
        <div className="popup117">
          <div className="left117">
            <h3 className="animisld" id="animisldfirstline" style={{ "--i": 1 }}>
              Let's Started
            </h3>
            <h6 className="animisld animisld1" id="animisldsecond" style={{ "--i": 2 }}>
              YOU ARE HERE
            </h6>
            <h4 className="animisld animisld1" style={{ "--i": 3 }}>
              1 Share your idea
            </h4>
            <h4 className="animisld animisld1" style={{ "--i": 4 }}>
              2 Discuss it with expert
            </h4>
            <h4 className="animisld animisld1" style={{ "--i": 5 }}>
              3 Get an estimation project
            </h4>
            <h4 className="animisld animisld1" style={{ "--i": 6 }}>
              4 Start the project
            </h4>
            <p className="animisld animisld1" style={{ "--i": 7 }}>
              If you have any questions, email us{" "}
            </p>
            <span className="animisld goldenRodColor" id="animisldlalast" style={{ "--i": 8 }} >
               careers@itmonkssolutions.com
            </span>
          </div>

          <div className="right117">
            <div>
              <form
                id="formDetails"
                action="https://api.web3forms.com/submit"
                method="POST"
                type="submit"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="022648fc-f0d0-42ce-b08d-d18131fba2c5"
                ></input>
                <div className="input-group">
                  <label htmlFor="name" style={{ "--i": 3 }}>
                    My Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Andry Strong"
                    name="name"
                    className="line-input"
                    style={{ "--i": 3, width: "40px" }}
                    onChange={handleChange}
                    value={formData.name}
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="email" style={{ "--i": 4 }}>
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    style={{ "--i": 4, width: "40px" }}
                    placeholder="AndryStrong@31.gmail.com"
                    className="line-input"
                    onChange={handleChange}
                    value={formData.email}
                    required
                    ref={emailInputRef}
                  />
                  <br />{" "}
                  <div className="verificationBtn">
                    <button
                      className="clickForOtp"
                      type="button"
                      onClick={() => {
                        if(emailInputRef.current.value.endsWith("@gmail.com")){
                          sendOtp();
                          }
                
                      }}
                    >
                      Req-Otp
                    </button>

                    <input
                      id="otp"
                      className="disable"
                      maxLength="4"
                      ref={verifyOtpInputRef}
                    ></input>
                    <button
                      id="sendOtp"
                      className="disable"
                      type="button"
                      onClick={() => {
                        verifyOtp();
                      }}
                      ref={verifyButton}
                    >
                      verify
                    </button>
                  </div>
                </div>
                <div className="input-group">
                  <label htmlFor="message" style={{ "--i": 5 }}>
                    Message*
                  </label>
                  <input
                    required
                    type="text"
                    id="message"
                    name="message"
                    style={{ "--i": 5, width: "40px" }}
                    placeholder="Describe Your idea"
                    className="line-input"
                    onChange={handleChange}
                    value={formData.message}
                  />
                </div>
                <p className="privacy-text" style={{ "--i": 6 }}>
                  Please be informed that when you click the Send button IT
                  Monks will process your data in accordance with our{" "}
                  <span>Privacy Notice</span> for the purpose of providing you
                  with appropriate information. This site is protected by
                  reCAPTCHA and the Google <span>Privacy Policy</span> and{" "}
                  <span>Terms of Service</span> apply.
                </p>
                <div className="btnsection">
                  {/* <button className='attach'style={{'--i': 6}}>
                <FontAwesomeIcon icon={faPaperclip} /> Attach File</button>  */}

                  <div id="resumeFile">
                   <div id="resumeFilesecond">
                   <label className="attach">Attach File</label>
                    <input type="file" name="file"></input>
                   </div>
                    <button
                    id="sendButton"
                    ref={sendButtonInputRef}
                    className="send-button"
                    disabled
                    style={{ "--i": 6 }}
                    type="submit"
                  >
                    Send
                  </button>

                  </div>
                </div>
              </form>
            </div>
            <div>
              <div className="line31"></div>
              <div className="rightBottom">
                <div className="profile31">
                  <img style={{ "--i": 7 }} src={profile} alt="" />
                  <div className="profileName">
                    <p style={{ "--i": 7 }} className='whiteColor'>
                      Ellyse perry <br />
                      <span>IT Admin</span>
                    </p>
                  </div>
                </div>
                <div className="consultation-button" onClick={props.onHide}>
                  <button
                    style={{ "--i": 8 }}
                    onClick={() => {
                      navigate("/firstCalender");
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faCalendar}
                    />
                    Book a Consultation
                  </button>
                </div>
                <button onClick={props.onHide} className="adjust">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

<ToastContainer
         position="top-right"
           autoClose={3000}
           hideProgressBar={false}
           newestOnTop={false}
           closeOnClick
           rtl={false}
           pauseOnFocusLoss
           draggable
           pauseOnHover
           theme="light"


         />
    </Modal>
  );
}


function ResNavbar() {


  const [modalShow, setModalShow] = React.useState(false);


  const [showPopup, setShowPopup] = useState(false);

  const handleTogglePopup = () => {
    setShowPopup(!showPopup);
  };

  const [windowSize,setWindowSize] = useState("")


  const navigate = useNavigate();
  const sallyPopUp = useRef();
  const [showServicesOptions, setShowServicesOptions] = useState(false)
  const[showAboutOptions,setShowAboutOptions]=useState(false)

  const [open, setOpen] = useState(false)
  const [about, setabout] = useState();
  const [showServices, setShowServices] = useState(false);
  const navref = useRef();
  const Menus = ['About Us', 'Our Team', 'How We Work', 'Project Pricing', 'Contact Us'];
  const Menus1 = ['Web Design And Development', 'Mobile Application Development', 'Testing Services', 'Health Care Services', 'Content Writing And Moderation', 'Graphic Designing', 'E-Commerce', 'Digital Marketing', 'Non-IT Services', 'HR Services'];
  const msg = "get in touch"

  useEffect(() => {
    window.addEventListener('resize',handleResize);

    return () => {
      window.removeEventListener("resize",handleResize)
    }
  },[])

  const handleResize = () => {
    console.log("window",window.innerWidth);
  }

  const showNavbar = () => {
    navref.current.classList.toggle("responsive_nav")
    console.log(about);
    console.log(showServices)
    setShowServicesOptions(false)
    setShowAboutOptions(false)
  }

  const onhandleservices = (value) => {
    console.log(value + 'clicked')
    setabout(value)
    setShowServices(value)
    setOpen(false)
    navref.current.classList.remove("responsive_nav")
    setShowServicesOptions(false)
    setShowAboutOptions(false)

  }

  const onClickServicesOption= () => {
    console.log('hello');
    setShowServicesOptions(!showServicesOptions)
    setShowAboutOptions(false)
    //  document.getElementById("tooltiptextNav").style.visibility = 'visible' ;
  }
  const onClickAboutOption=() =>{
    setShowAboutOptions(!showAboutOptions)
    setShowServices(false)
    
  }

  console.log("width", window.innerWidth)

  // first attempt for services
  const qshow = useRef();
  // const qhide = useRef();
  const onpageshow1 = () => {
    qshow.current.style.opacity = '0.001';
    qshow.current.style.visibility = "hidden";
  }

  const pshow = () => {
    // qshow.current.style.opacity = '1';
    // qshow.current.style.visibility = "visible";
  }
  const ok1 = () => {
    qshow.current.style.opacity = '1';
    qshow.current.style.visibility = "visible"
  } 
  const qhide = () => {
    qshow.current.style.opacity = '0.001';
    qshow.current.style.visibility = "hidden";
  }

  // second attempt for about

  const qshows = useRef();
  // const qhide = useRef();
  const onpageshow1s = () => {
    qshows.current.style.opacity = '0.001';
    qshows.current.style.visibility = "hidden";
  }

  const pshows = () => {
    // qshow.current.style.opacity = '1';
    // qshow.current.style.visibility = "visible";
  }
  const ok1s = () => {
    qshows.current.style.opacity = '1';
    qshows.current.style.visibility = "visible"
  } 
  const qhides = () => {
    qshows.current.style.opacity = '0.001';
    qshows.current.style.visibility = "hidden";
  }
  return (

    <>
      <header id="headers">
        <div><img style={{ height: "40px", cursor: "pointer", marginLeft:"10%"}}
          src={img1} onClick={() => { navigate("/") }} alt="logo" />
           {/* {   window.scrollTo(0, 0)} */}
          </div>
          
        <nav ref={navref}>
          <a href='#' onClick={() => {
            onhandleservices()
            navigate("/")
            window.location.reload(true)
          }}>Home</a>


          <div className="tooltipNav" >
            <a href="#" onClick={() => windowSize < 1020 ? onClickServicesOption() : null} 
              className="tooltipbtn" onMouseOver={ok1} >Services <span className='y-icon'><FaAngleDown /></span> </a>
            <div id="tooltiptextNav" onMouseLeave={() => {
              onpageshow1();
            }}  ref={qshow} className="tooltiptextNav nav777 "
             style={{ height: "500px", width: "200%", visibility:showServicesOptions ? "visible":"hidden" }}>
              {/* <div className="sss"> */}

              {
                Menus1.map((menu1) => (
                  <a  > <p className='nav44' onClick={() => {
                    onhandleservices(menu1);
                    onpageshow1();
                    window.scrollTo(0, 0)
                  
                    navigate(`/${menu1}`)
                  }} key={menu1}>{menu1} </p></a>
                )
                )
              }
              {/* </div> */}
            </div> 


          </div>

          <div className="tooltipNav">
            <a href="#" className="tooltipbtnNav" onClick={() => {
              onhandleservices()
              navigate("/careers")
              window.location.reload(true)
            }}>Careers</a>

          </div>

          <div className="tooltipNav">
            {/* <span className="tooltiptext">Tooltip text</span> */}
            <a href="#"  className="tooltipbtn" onClick={() =>  windowSize < 1020? onClickAboutOption():null

              
            
            } onMouseOver={ok1s}>About <span className='y-icon'><FaAngleDown /></span> </a>
            <div className="tooltiptextNav nav567" onMouseLeave={() => {
              onpageshow1s();
            }} ref={qshows} style={{visibility:showAboutOptions? "visible":"hidden"}}>
              {
                Menus.map((menu) => (
                  <a > <p className='nav234' onClick={() => {
                    onhandleservices(menu);
                    onpageshow1s();
                     window.scrollTo(0, 0)
                    navigate(`/${menu}`)
                  }} key={menu}>{menu} </p></a>
                )
                )
              }
            </div>
          </div>

          {/* <a href='#footerDiv'>Blog</a> */}
          <a href='#' onClick={() => {
            onhandleservices()
            navigate("/BlogPage")
            window.location.reload(true)
          }}>Blog</a>
          {/* <a href='#' style={{ cursor: "pointer", backgroundColor: "yellow", borderRadius: "10px", color: "black", fontWeight: "bold",height:"5vh",width:"8vw"} }> Get in Touch  </a> */}
          {/* <button className="button-get" onClick={() => {
                        onhandleservices()

                        navigate("/popUp")
                        window.location.reload(true)
                    }}> Get in Touch</button> */}
          <span>
            <div>
              <a href="#0" className='button12' id='getInTouchButton' onClick={() => setModalShow(true)}>
                <span>
                  Get in touch
                </span>
              </a>
            </div>


            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </span>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />

          </button>



        </nav>
        <button style={{ color: "black" }} className="nav-btn hamburger" onClick={showNavbar}>
          <FaBars />
        </button>

      </header>

      {about === "Our Team" ?
        ""
        :
        about === "How We Work" ?
          <div>
            <p>Ims</p>
          </div>
          :
          about === "Project Pricing" ?
            <div>
              <p>100000</p>
            </div> :
            about === "Contact Us" ?
              <div>
                <p>100000</p>

              
              </div> : null
        
             
              
      }
      
      
     

    </>
  )
}

export default ResNavbar;