import React, { useEffect, useRef ,useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import "./login.css";
import { useLocation, useNavigate } from "react-router-dom"; 
import axios from "axios";
// import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";

function Login() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(()=>{
    window.scroll(0,0)
  },[])

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const signEmailInputRef = useRef();
  const signPasswordInputRef = useRef();
  const navigate = useNavigate(); 
  const location = useLocation();
  console.log(location.state.data);
  const reqData = location.state.data;
  const icon = document.querySelector("#eyepassword")

  const handleKey = (event) => {
   if(event.key == "Enter"){
    if (document.activeElement === signEmailInputRef.current) {
      // event.preventDefault();
      signPasswordInputRef.current.focus();
    } else {
      
      Signin();
    }
   }

  }
 

  const loginUser = async ()=>{
    const dataToSend = new FormData();
    dataToSend.append("email",signEmailInputRef.current.value);
    dataToSend.append("password",signPasswordInputRef.current.value); 
   const response = await axios.post("http://localhost:6003/login",dataToSend); 
   console.log(response);  
   if(response.data.status == "success") {  
    localStorage.setItem("loginSuccess","success");
    navigate("/jobId", { state: { data: reqData }}); 
   } 
   else {
        alert("please enter your details correctly");
     } 
  }
  const Signin = () => {
  //   if (signEmailInputRef.current.value == localStorage.getItem("email") && signPasswordInputRef.current.value == localStorage.getItem("password")) {
  //     navigate("/careers");
  // }  
  // else if (signEmailInputRef.current.value == localStorage.getItem("phone") && signPasswordInputRef.current.value == localStorage.getItem("password")) {
  //     navigate("/careers");
  //   }            
  //  else {
  //     alert("please enter your details correctly");
  //  } 
  loginUser();
  }

  return (
    <>
   
      <div className="login31">
        <div className="box31">
          <div className="heading31">
            <h1>Sign in</h1>
          </div>
          <div>

            
            <div className="user31">
             <div className="colt">
             <label htmlFor="" className="passwordmargin">Email *</label>
              <span  className="rowt">
              <input style={{paddingLeft:"10px"}} className="sinp sinpmail" type="text" ref={signEmailInputRef} placeholder="Enter your Email" onKeyDown={(e)=>{  
                if(e.key == "Enter") {
                  if(signEmailInputRef.current.value=="") {
                    alert("please enter your email");
                  } else {
                    handleKey(e);
                  }
                } else {

                }
               
               
              }}/>
              </span>
             
             </div>
            </div>
            <br />
            <div className="user31">
            <div className="colt">
            <label htmlFor="" className="passwordmargin">Password * </label>
            <span className="rowt">
            <input
             style={{paddingLeft:"10px"}}
            className="sinp sinp2"
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onKeyDown={(e)=>{ 
          console.log(e.key); 
          if(e.key == "Enter") {
            if(signPasswordInputRef.current.value=="") {
              alert("please enter your password");
          } else {
            handleKey(e);
          }
          } else {

          }
          
        }}
        placeholder="Enter your password" ref={signPasswordInputRef}
      />
      <button className="icon" onClick={togglePasswordVisibility}>
        <FontAwesomeIcon icon={showPassword ? faEye :  faEyeSlash} />
      </button>
            </span>
              
            </div>
            </div>
            <div className="signin31">
                <button onClick={()=> { Signin()
                // if (signEmailInputRef.current.value == localStorage.getItem("email") && signPasswordInputRef.current.value == localStorage.getItem("password")) {
                //     navigate("/careers");
                // }  
                // else if (signEmailInputRef.current.value == localStorage.getItem("phone") && signPasswordInputRef.current.value == localStorage.getItem("password")) {
                //     navigate("/careers");
                //   }            
                //  else {
                //     alert("please enter your details correctly");
                //  }
              }}>Sign in</button>
            </div>
          </div>
          <div className="bottom31">
            <h3 className="forgot">Forgot Password?</h3>
            {/* <NavLink to="/SignIn">Register Now</NavLink> */}
            {/* <NavLink>Register Now</NavLink>  */}
            <h3
              onClick={() => {
                              // navigate("/jobId") 
                if(localStorage.getItem("status")=="success") {
                  navigate("/jobId",{state:{data:reqData}});
                } else {
                  navigate("/register",{state:{data:reqData}});
                }
                
              }} className="forgot31"
            >
              Register Now
            </h3>
          </div>
        </div>
      </div>
    
    </>
   
  );
}
export default Login;
