import React,{ useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import jobDescription from '../../../data';
import "../apply/apply1.css";
import { useNavigate } from "react-router-dom";
// import back from '../../content/images/rec.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer } from "@fortawesome/free-solid-svg-icons";
// import ResNavbarCC from "../contentNav/ResNavbarCC";
import googleDrive from "../images/Rectangle 226.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




// import React, { useState } from 'react';


function Apply() {    
  const [updateButton,setUpdateButton] = useState(true);
  const location = useLocation();
  const [inputValue, setInputValue] = useState('');
  const [selecetdSkills, setSelectedSKills]= useState([]);
  const skillsList = [ 'JavaScript','HTML', 'CSS', 'React', 'Node.js', 'Python','Java','SQL','TypeScript','Angular','Vue.js','MongoDB','EXpress.js','PHP','C#','.NET','PHP'];
  const [suggesstions, setSuggestions] = useState([])
  const handleSkillsChange = (e) =>{
    const value = e.target.value;
    setInputValue(value);

    const filteredSkills = skillsList.filter((skill)=>skill.toLowerCase().includes(value.toLowerCase()))

    setSuggestions(filteredSkills);
  }
  const handleKeyPress = (e) =>{
    
    if(e.key === 'Enter'){
      e.preventDefault();
     
    }
  }

  const addSkill = (skill) =>{
    if(skill && !selecetdSkills.includes(skill)){
      setSelectedSKills([...selecetdSkills, skill]);
      setInputValue('')
      setSuggestions([])
    }
  };

  const handleSkillSelected = (skill) => {
    if (skill && !selecetdSkills.includes(skill)) {
      setSelectedSKills([...selecetdSkills, skill]);
      setInputValue('');
      
      if (selecetdSkills.length >= 1) {
        if (skillsInputRef.current) {
          skillsInputRef.current.removeAttribute('required');
        }
        if(spanSkillsInputRef.current){
          skillsInputRef.current.style = "none"
        spanSkillsInputRef.current.innerHTML = ""
        }
      }
    }
  };

  const removeSkill =(skillToRemove)=>{
    const updateSkills = selecetdSkills.filter((skill)=> skill !== skillToRemove);
    setSelectedSKills(updateSkills);
  };

  const firstInputRef = useRef();
  const secondNameRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();
  const streetInputRef = useRef();
  const cityInputRef = useRef();
  const countryInputRef = useRef();
  const postalCodeInputRef = useRef();
  const rjobTitleInputRef = useRef();
  const skillsInputRef = useRef();

  




  const spanFristInputRef = useRef();
  const spansecondNameRef = useRef();
  const spanEmailInputRef = useRef();
  const spanPhoneInputRef = useRef();
  const spanStreetInnputRef = useRef();
  const spanCityInputRef = useRef();
  const spanCountryInputRef = useRef();
  const spanPostalInputRef = useRef();
  const spanJobInputRef = useRef();
  const spanSkillsInputRef = useRef();

  const buttonSubmitRef = useRef();

  const verifyFailure = () => {
    // toast("otp has been sent to your Email"); 
    toast.warning("Please check all the fields", {
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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        e.preventDefault(); // Prevent default behavior of incrementing or decrementing
      }
    };

    const handleWheel = (e) => {
      e.preventDefault(); // Prevent default wheel scroll behavior
    };

    const handleTouchMove = (e) => {
      e.preventDefault(); // Prevent touch move behavior
    };

    if (postalCodeInputRef.current) {
      postalCodeInputRef.current.addEventListener('keydown', handleKeyDown);
      postalCodeInputRef.current.addEventListener('wheel', handleWheel);
      postalCodeInputRef.current.addEventListener('touchmove', handleTouchMove);
    }
    if(phoneInputRef.current){
      phoneInputRef.current.addEventListener('keydown', handleKeyDown);
      phoneInputRef.current.addEventListener('wheel', handleWheel);
      phoneInputRef.current.addEventListener('touchmove', handleTouchMove);
    }
    
  }, []);
    

    const handlePhoneInpValidation = ()=>{
      const phoneInputLength = phoneInputRef.current.value.length;
      const firstInputValue = firstInputRef.current.value.length;
      const lastInputValue = secondNameRef.current.value.length;
      const emailInputValue = emailInputRef.current.value;
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInputValue);
      const streetInputValue = streetInputRef.current.value.length;
      const cityInputValue = cityInputRef.current.value.length;
      const countryInputValue = countryInputRef.current.value.length;
      const postalInputValue =postalCodeInputRef.current.value.length;
      const roleInputValue = rjobTitleInputRef.current.value.length;
      const skillsInputValue = skillsInputRef.current.value.length;
      if((firstInputValue >= 1)&&(lastInputValue >= 1)&&(isValidEmail)&&((phoneInputLength != 10)||(postalInputValue != 6))&&(streetInputValue >= 1)&&(cityInputValue >= 1)&&(countryInputValue >= 1)&&(roleInputValue != 0)&& (selecetdSkills != 0)){
  
        const phoneInputValidation = document.getElementById('formsubmitButton')
        verifyFailure();
        
        if(phoneInputValidation){
          phoneInputValidation.setAttribute('disabled',true)
          if(phoneInputLength !=10){
            phoneInputRef.current.style.borderColor = "red"
            spanPhoneInputRef.current.innerHTML =`Invalid Phone number (Minimum 10 Digits)`
            spanPhoneInputRef.current.style.color = "red"
          }
          else{
            phoneInputRef.current.style.borderColor = "none"
            spanPhoneInputRef.current.innerHTML =""
          }
          if(postalInputValue != 6){
            postalCodeInputRef.current.style.borderColor = "red"
            spanPostalInputRef.current.innerHTML = "Enter a valid pin code"
             spanPostalInputRef.current.style.color = "red"
          }
          else{
            postalCodeInputRef.current.style.borderColor = "none"
            spanPostalInputRef.current.innerHTML = ""
          }
          
        }
        
      }
        else{
          const phoneInputValidation = document.getElementById('formsubmitButton');
          if(phoneInputValidation){
            phoneInputValidation.removeAttribute('disabled')
          }
        }
         
        
       
      }


  useEffect(() => {
    window.scrollTo(0, 0);
  },[])
   
    const handleSubmitNow = (selectedJob) => {
        console.log("Selected Job:", selectedJob);
    };
// const {jobId} = useParams();
  // const job =jobDescription[jobId]  
  const job = location.state.data;
const navigate = useNavigate();
//const history = useHistory();
// console.log(job)    

const [phone, setPhone] = useState();

const handlePhone = (event) =>{
  const sanitizedValue = event.target.value.replace(/\D/g,'').slice(0,10);
  setPhone(sanitizedValue)
}

const [formData, setFormData] = useState({
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  altphone: '',
  CurrentCTC: '',
  Street: '',
  city: '',
  Country: '',
  postalcode: '',
  Skills: '',
  check1: false,
  check2: false
});

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    // if (name === 'phone') {
    //   const numericValue = phoneInputRef.current.value.replace(/\D/g, '');
    //   const truncatedValue = numericValue.slice(0, 10);   done by sujanith 
    //   e.target.value = truncatedValue;
    // }
   
  //   document.getElementById("phone").addEventListener('input', function(e){
  //     let inputValue = e.target.value;
  //     let numericvalue = inputValue.replace(/\D/g, '');
  //     e.target.value = numericvalue   done by deepak
  // })
   
   
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value 
    }));

   
    
  };
  const handlePhoneInput = (e) =>{
    const {name, type, value, checked} = e.target;

    document.getElementById("phone").addEventListener('input', function(e){
          let inputValue = e.target.value;
          let numericvalue = inputValue.replace(/\D/g, '');
          e.target.value = numericvalue
      })
      setFormData(prevState => ({
        ...prevState,
        [name]: type === 'checkbox' ? checked : value 
      }));

  }

const handleSubmit = (event) => {
event.preventDefault();
// Handle form submission logic here (e.g., send data to server)
console.log('Form submitted:', formData);
navigate('/complete');
};


const [selectedFiles, setSelectedFiles] = useState([]);
 
    const handleFileChange = (event) => {
        const files = event.target.files;
        const fileList = Array.from(files).filter(file => file.size <= 5242880).map(file => ({
            name: file.name,
            size: file.size,
            type: file.type,
            rawFile: file // Store the raw File object
        }));
        setSelectedFiles(fileList);
        console.log('Selected files:', fileList);
    };
    const handleMyDeviceClick = () => {
      // Trigger the file input click event
      const fileInput = document.getElementById('fileInput');
      fileInput.click();
  };
 
    const handleDownload = (file) => {
        // Create a Blob object from the file data
        const blob = new Blob([file.rawFile], { type: file.type });
        // Create a URL for the Blob object
        const url = URL.createObjectURL(blob);
        // Create an anchor element
        const anchor = document.createElement('a');
        anchor.href = url; // Set the URL to the Blob object
        anchor.download = file.name; // Set the file name for downloading
        anchor.click(); // Trigger a click event to start downloading
 
        console.log('Downloaded file:', file);
    };

    const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    console.log("Selected option:", event.target.value);
  };

 
  
 
  

return (
    <>

  {/* <ResNavbarCC/> */}

    
    {/* <h1>Apply</h1>
    <h1>{job.title}</h1> */}
    <section className="page">

    
    <div className="top31">
      <div className="info31">
      
        <h1> Applying for {job.title} <br /><br /></h1> 
        <div className="place31">
        <p><span>Location: </span>{job.location}</p>
        <p><span>Salary: </span>{job.salary}</p>
        </div>
        <p><span>Description: </span> <br />{job.responsibilities}</p>
        <p><span>Responsibilities: </span> <br />{job.responsibilities}</p>
        <p><span>Qualifications: </span> <br />{job.qualifications}</p>
      </div>
    </div>
   
    <form id="formDetails" action="https://api.web3forms.com/submit"  method="POST" type='submit'>
        <input type="hidden" name="access_key" value="022648fc-f0d0-42ce-b08d-d18131fba2c5"></input>
      
        
   
    <div className="userdata3131">

<div className="names3131">
  <div className="inpblock3131">
    <label htmlFor="firstname">First Name <span>*</span></label>
    <input
      className="inp1"
      type="text"
      id="firstname"
      name="firstname"
      placeholder="Enter your First Name"
      value={formData.firstname}
      onChange={handleInputChange}
      required
      ref={firstInputRef}
      // minLength={10}
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
        }
      }}
    />
    <span className="error-span-message-forms" ref={spanFristInputRef}></span>
  </div>
  <div className="inpblock3131">
    <label htmlFor="lastname">Last Name <span>*</span></label>
    <input
      className="inp1"
      type="text"
      id="lastname"
      name="lastname"
      placeholder="Enter your Last Name"
      value={formData.lastname}
      onChange={handleInputChange}
      required
      
      ref={secondNameRef}
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
        }
      }}
    />
    <span className="error-span-message-forms" ref={spansecondNameRef}></span>
  </div>
</div>

<div className="names3131">
  <div className="inpblock3131">
    <label htmlFor="email">Email <span>*</span></label>
    <input
      className="inp1"
      type="email"
      id="email"
      name="email"
      placeholder="Enter your Email address"
      value={formData.email}
      onChange={handleInputChange}
      ref={emailInputRef}
      required
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
        }
      }}
    />
    <span className="error-span-message-forms" ref={spanEmailInputRef}></span>
  </div>
  <div className="inpblock3131">
    <label htmlFor="phone">Phone <span>*</span></label>
    <input
       className="inp1"
       type="number"  // Change type to "text"
       id="phone"
       placeholder="Enter your Phone Number"
       name="phone"
       value={formData.phone.slice(0,10)}
       onChange={ (event)=>{
        handleInputChange(event); 
        // const phoneStr = String(phoneInputRef.current.value); 
        // const pinCode = String(postalCodeInputRef.current.value);
        // const submitButton1 = document.getElementById("submitButton"); 
  //       if(phoneStr.length == 10){ 
  //         setUpdateButton(false);
  //         submitButton1.disabled = updateButton;
  //       }
  // if(phoneStr.length != 10){
  //   phoneInputRef.current.style.borderColor = "red"
  //   spanPhoneInputRef.current.innerHTML = "enter a vaild phone number"
  //   spanPhoneInputRef.current.style.color = "red"
  //   window.scrollTo(0,100);
  //   setUpdateButton(true);
  //    submitButton1.disabled = updateButton;
  // }

       }}
      //  pattern="[6-9][0-9]{9}"    
      //  minLength={10}
      //  maxLength={10}
      // min="1"

      // max="10"
       required
       ref={phoneInputRef}
       onKeyPress={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
        }
      }}
    />
    <span className="error-span-message-forms" ref={spanPhoneInputRef}></span>
  </div>

</div>


<div className="names3131">
  <div className="inpblock3131">
    <label htmlFor="altphone">Alternate Phone </label>
    <input
      className="inp1"
      type="number"
      id="altphone"
      name="altphone"
      minLength={10}
      
      placeholder=" Alternate Phone Number"
      value={formData.altphone}
      onChange={handleInputChange}
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
        }
      }}
      
    />
  </div>
  <div className="inpblock3131">
  <label htmlFor="CurrentCTC">Current CTC</label>
    <input
      className="inp1"
      type="text"
      id="CurrentCTC"
      name="CurrentCTC"
      placeholder="Your current CTC"
      value={formData.CurrentCTC}
      onChange={handleInputChange}
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
        }
      }}
    
    />
  </div>
</div>

<div className="Role3131">
  <div className="inpblock3121">
    <label htmlFor="Street">Street <span>*</span></label>
    <input
      className="inp1"
      type="text"
      id="Street"
      name="Street"
      placeholder="Enter your Street address"
      value={formData.Street}
      onChange={handleInputChange}
      required
      ref={streetInputRef}
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
        }
      }}
    />
    <span className="error-span-message-forms" ref={spanStreetInnputRef}></span>
  </div>
  </div>

<div className="names3131">
  <div className="inpblock3131">
    <label htmlFor="city">City <span>*</span></label>
    <input
      className="inp1"
      type="text"
      id="city"
      name="city"
      placeholder="Enter your City Name"
      value={formData.city}
      onChange={handleInputChange}
      required
      ref={cityInputRef}
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
        }
      }}
    />
    <span className="error-span-message-forms" ref={spanCityInputRef}></span>
  </div>

  <div className="inpblock3131">
    <label htmlFor="Country">Country <span>*</span></label>
    <input
      className="inp1"
      type="text"
      id="Country"
      name="Country"
      placeholder="Enter your Country Name"
      value={formData.Country}
      onChange={handleInputChange}
      required
      ref={countryInputRef}
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
        }
      }}
    />
    <span className="error-span-message-forms" ref={spanCountryInputRef}></span>
  </div>
</div>


<div className="names3131">
  <div className="inpblock3131">
    <label htmlFor="postalcode">Pin Code <span>*</span></label>
    <input
      className="inp1"
      type="number"
      id="postalcode"
      name="postalcode"
      placeholder="Enter Pin Code"
      value={formData.postalcode.slice(0,6)}
      onChange={handleInputChange}
     required
      ref={postalCodeInputRef}
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
        }
      }}
    />
    <span className="error-span-message-forms" ref={spanPostalInputRef}></span>
  </div>
  <div className="inpblock3131">
  <label htmlFor="RecentJOb">Current/Most Recent Job Title <span>*</span></label>
    <input
      className="inp1"
      type="text"
      id="RecentJob"
      name="RecentJOb"
      placeholder="Role your are wroking on (or) worked on "
      value={formData.RecentJOb}
      onChange={handleInputChange}
      required
      ref={rjobTitleInputRef}
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
        }
      }}
    />
    <span className="error-span-message-forms" ref={spanJobInputRef}></span>
  </div>
</div>




<div className="Role3131">
              <div className="inpblock3121">
              <label htmlFor="Skills">Skills <span>*</span></label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', alignItems: 'center' }}>
        {selecetdSkills.map((skill) => (
          <div
            key={skill}
            style={{
              backgroundColor: '#e0e0e0',
              padding: '5px',
              borderRadius: '5px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span style={{ marginRight: '5px' }}>{skill}</span>
            <button onClick={() => removeSkill(skill)}>&times;</button>
          </div>
        ))}
      </div>
             
        <input
          className={formData.skillsError ? 'error' : ''}
          type="text"
          id="Skills"
          name="Skills"
          placeholder="Mention all your Skills"
          value={inputValue}
          onChange={handleSkillsChange}
          onKeyPress={handleKeyPress}
          ref={skillsInputRef}
          required
          style={{ flex: '1', minWidth: '100px' }}
          
        />
        
      {suggesstions.length > 0 && (
         <ul className="scrollable-list" style={{ listStyleType: 'none', padding: 0, maxHeight:'20vh', overflowY: 'auto',backgroundColor:'whiteSmoke' }}>
          {suggesstions.map((skill) => (
            <li key={skill} onClick={() => handleSkillSelected(skill)} style={{ cursor: 'pointer' }}>
              {skill}
            </li>
          ))}
        </ul>
      )}
         
        
        <span className="error-span-message-forms" ref={spanSkillsInputRef}></span>
              </div>
            </div>



</div>

<div className="desc31">
<div className="upload" >
  <p>Upload Your Resume <span>*</span></p>
  <p>Apply faster! We'll use the information in your resume to help you fill out this application.</p>
  <p>Choose where you want to upload your resume from. We accept .DOCX, .PDF, .DOC files up to 5 MB.</p>
 <div className="uploads313131">
  <div>
  <button className="line" onClick={handleMyDeviceClick}>
    <FontAwesomeIcon icon={faComputer} /> My Device</button>
  <input
    id="fileInput"
    type="file"
    accept=".pdf,.DOCX, .DOC"
    onChange={handleFileChange}
    style={{ opacity:"0" }} 
    required
    // Hide the input visually
  />
  {selectedFiles.length > 0 && (
    <div className="selected3131">
      <h2>Selected Files:</h2>
      <ul>
        {selectedFiles.map((file, index) => (
          <li key={index}>
            Name: {file.name}, Size: {file.size} bytes, Type: {file.type}
            {/* <button onClick={() => handleDownload(file)}>Submit</button> */}
          </li>
        ))}
      </ul>
    </div>
  )}

  </div>


  <div className="img313131">
          <img src={googleDrive} alt="" />
  </div>
 </div>

</div>

</div>
<div className="terms31">
<div className="checkbox12">
  <ul className="checkboxline">
    <li className="checkboxline"><input type="checkbox"
      id="check1"
      // name="check1"
      value={formData.check1}
      onChange={handleInputChange}
      required 
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
        }
      }}/> <span className="sp" >*</span> I understand that, as part of the provision of their services to me, IT Monks may contact me regarding my employment, future opportunities, marketing or advertisement related to the services at the phone number provided, including SMS and pre-recorded messages through the use of automated technology. I understand that I may opt out at any time as stated in the <span className="sp1" > Terms & Conditions.</span> You can view our <span className="sp1" > Privacy Notice</span> here.</li> <br />
    <li className="checkboxline"><input type="checkbox"
      id="check2"
      // name="check2"
      value={formData.check2}
      onChange={handleInputChange}
      required
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
        }
      }} /> <span className="sp" >*</span> By submitting this application, I agree to the <span className="sp1" >Terms & Conditions.</span></li>
  </ul>
</div>

</div>
<button 
  onClick={()=>{ 
   
      const email = emailInputRef.current.value;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
     
    


      

    if(firstInputRef.current.value === ""){
      firstInputRef.current.style.borderColor = "red"
      spanFristInputRef.current.innerHTML = "Please enter your First Name"
      spanFristInputRef.current.style.color = "red"
      
    }else{
      firstInputRef.current.style = "none"
      spanFristInputRef.current.innerHTML = ""
    }


     if(secondNameRef.current.value === ""){
      secondNameRef.current.style.borderColor = "red"
      spansecondNameRef.current.innerHTML = "Please enter your Last Name"
      spansecondNameRef.current.style.color = "red"
    }
    else{
      secondNameRef.current.style = "none"
      spansecondNameRef.current.innerHTML = ""
    }


     if(emailInputRef.current.value === "" ){
      emailInputRef.current.style.borderColor = "red"
      spanEmailInputRef.current.innerHTML = "Please enter a valid Email address"
      spanEmailInputRef.current.style.color = "red"
    }
    else if(!emailRegex.test(email)){
      emailInputRef.current.style.borderColor = "red"
      spanEmailInputRef.current.innerHTML = "Please enter a valid Email address"
      spanEmailInputRef.current.style.color = "red"

    }
    else{
      emailInputRef.current.style = "none"
      spanEmailInputRef.current.innerHTML = ""
    }

    if(phoneInputRef.current.value === "" ){
      phoneInputRef.current.style.borderColor = "red"
      spanPhoneInputRef.current.innerHTML = "Please enter a vaild Phone Number"
      spanPhoneInputRef.current.style.color = "red"
    } 
    else if(phoneInputRef.current.value.length < 10){
      
        phoneInputRef.current.style.borderColor = "red"
      spanPhoneInputRef.current.innerHTML =`Invalid Phone Number (Minimum 10 Digits)`
      spanPhoneInputRef.current.style.color = "red"
    
     
    }
    else{
      phoneInputRef.current.style = "none"
      spanPhoneInputRef.current.innerHTML = ""
    }
    if(streetInputRef.current.value===""){
      streetInputRef.current.style.borderColor = "red"
      spanStreetInnputRef.current.innerHTML = "Please enter Street address"
      spanStreetInnputRef.current.style.color = "red"
    }
    else{
      streetInputRef.current.style = "none"
      spanStreetInnputRef.current.innerHTML = ""
    }

    if(cityInputRef.current.value === ""){
      cityInputRef.current.style.borderColor = "red"
      spanCityInputRef.current.innerHTML = "Please enter City Name"
      spanCityInputRef.current.style.color = "red"
    }
    else{
      cityInputRef.current.style = "none"
      spanCityInputRef.current.innerHTML = ""
    }

    if(countryInputRef.current.value === ""){
      countryInputRef.current.style.borderColor = "red"
      spanCountryInputRef.current.innerHTML = "Please enter your Country Name"
      spanCountryInputRef.current.style.color = "red"
    }
    else{
      countryInputRef.current.style = "none"
      spanCountryInputRef.current.innerHTML = ""
    }

    if(postalCodeInputRef.current.value === "" ){
      postalCodeInputRef.current.style.borderColor = "red"
      spanPostalInputRef.current.innerHTML = "Please enter a valid Pin Code"
      spanPostalInputRef.current.style.color = "red"
    }
    else if(postalCodeInputRef.current.value.length < 6){
      
      if(postalCodeInputRef.current.value === ""){
        postalCodeInputRef.current.style.borderColor = "red"
        spanPostalInputRef.current.innerHTML = `Invalid Pin Code`
        spanPostalInputRef.current.style.color = "red"
      }
    }
    else{
      postalCodeInputRef.current.style = "none"
      spanPostalInputRef.current.innerHTML = ""
    }

    if(rjobTitleInputRef.current.value === ""){
      rjobTitleInputRef.current.style.borderColor = "red"
      spanJobInputRef.current.innerHTML = "Please provide your Recent Job Title"
      spanJobInputRef.current.style.color = "red"
    }
    else{
      rjobTitleInputRef.current.style = "none"
      spanJobInputRef.current.innerHTML = ""
    }

    if(selecetdSkills.length === 0){
      skillsInputRef.current.style.borderColor = "red"
      spanSkillsInputRef.current.innerHTML = "Please provide your Skills "
      spanSkillsInputRef.current.style.color = "red"
    }
    else{
      skillsInputRef.current.style = "none"
      spanSkillsInputRef.current.innerHTML = ""
    }

    

    
  }}

className="submit1" ref={buttonSubmitRef} onMouseOver={handlePhoneInpValidation} id="formsubmitButton">
  Submit</button>


</form>
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

    </section>

    </>
)
}
export default Apply;