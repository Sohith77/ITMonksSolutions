import React, { useState } from 'react'
import { useRef } from 'react';
// import{FaBars,FaTimes} from"react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import "./ResNavbarCC.css";
import img1 from "../../Photos/imsnewlogo.png";
import { useNavigate } from 'react-router-dom';

function ResNavbar() { 
    const navigate = useNavigate();
    const sallyPopUp = useRef();
    const [open, setOpen] = useState(false)
    const [about, setabout] = useState();
    const navref = useRef();
    const Menus = ['Team', 'How We Work', 'Project Pricing'];
    const showNavbar = () => {
        navref.current.classList.toggle("responsive_nav")
        console.log(about);
    }

    const onhandleservices = (value) => {
        console.log(value + 'clicked')
        setabout(value)
        setOpen(false)
        navref.current.classList.remove("responsive_nav")

    }
  
    return ( 
       
        <>
            <header className='header3131'>
                <div><img style={{ height: "70px" }}
                    src={img1} alt="logo" /></div>
                <nav ref={navref}>
                    <a href='#' onClick={()=>{ onhandleservices()
                        navigate("/AboutUsBody")
                        window.location.reload(true)
                    }}>Home</a>


                    <a href='#'>Services</a>
                    {/* <div className='dropdown'>
                        <a href='#' className='dropbtn'>Careers</a>
                        <div className="drop">
                            {
                                Menus.map((menu) => (<a onClick={() => onhandleservices(menu)} key={menu}>{menu}</a>))
                            }
                        </div>
                        </div> */}
                    <div className="tooltip">
                        <a href="#" className="tooltipbtn" onClick={()=>{ onhandleservices()
                            navigate("/careers")
                            window.location.reload(true)
                        }}>Careers</a>
                        {/* <span className="tooltiptext">Tooltip text</span> */}
                        {/* <div className="tooltiptext">

                            {
                                Menus.map((menu) => (<p onClick={() => onhandleservices(menu)} key={menu}>{menu}</p>))
                            }
                        </div> */}

                    </div>
                    {/* <a href='#'>Careers</a> */}
                    {/* <div className="dropdown" >
                        <a href='#' className='dropbtn'>About</a>
                        <div className="drop">
                            {
                                Menus.map((menu) => (<a onClick={() => onhandleservices(menu)} key={menu}>{menu}</a>))
                            }
                        </div>
                    </div> */}
                    <div className="tooltip">
                        {/* <span className="tooltiptext">Tooltip text</span> */}
                        <a href="#" className="tooltipbtn" onClick={() => {
                            navigate("/AboutUsBody")
                            window.location.reload(true)
                        }
                       
                        }
                            
                          
                        >About us</a>
                        <div className="tooltiptext">
                            {
                                Menus.map((menu) => (  
                                     
                                   
                                    <a > <p onClick={() => {
                                        onhandleservices(menu)
                                        window.location.reload(true)
                                    }
                                    } key={menu}>{menu} </p></a>
                                   )
                                   )
                            
                            } 
                           
                        </div>

                    </div>

                    <a href='#footerDiv'>Contact Us</a>
                    {/* <a href='#' style={{ cursor: "pointer", backgroundColor: "yellow", borderRadius: "10px", color: "black", fontWeight: "bold",height:"5vh",width:"8vw"} }> Get in Touch  </a> */}
                    <button className="button-get" onClick={()=>{  onhandleservices()
                        
                        navigate("/popUp")
                        window.location.reload(true)
                    }}> Get in Touch</button>
                    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                        <FaTimes />

                    </button>



                </nav>
                <button style={{ color: "black" }} className="nav-btn hamburger" onClick={showNavbar}>
                    <FaBars />
                </button>

            </header>

            {about === "Team" ? 
            <div> 
                <p> 
                    ims
                </p>
            </div>
           :
                about === "How We Work" ?
                    <div>
                        <p>Ims</p>
                    </div>
                    :
                    about === "Project Pricing" ?
                        <div>
                            <p>100000</p>
                        </div> : null
            }

        </>
    )
}

export default ResNavbar;