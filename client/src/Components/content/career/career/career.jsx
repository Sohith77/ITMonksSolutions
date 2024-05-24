import React, { useState, useEffect, useRef, useContext } from "react";
import Typed from 'typed.js'
import './career.css';
import img61 from '../images/itmonks.jpeg';
import img62 from '../images/frame.png';
import img63 from '../images/rec.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
// import { jobDetails } from "../../data"; 
import jobDescriptions from "../../../data";
import { faComputer } from "@fortawesome/free-solid-svg-icons";
import ResNavbarCC from "../contentNav/ResNavbarCC";
import googleDrive from "../images/Rectangle 226.png";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../../Footer/Footer/Blackfooter";

// jobs/src/content/images/Rectangle 208.jpg
function Career() {
  const navigate = useNavigate();
  const typedTextRef1 = useRef(null);


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

  useEffect(() => { 
    const handleKeyDown2 = (e) => {
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        e.preventDefault(); 
      }
    };

    const handleWheel2 = (e) => {
      e.preventDefault(); 
    };

    const handleTouchMove2 = (e) => {
      e.preventDefault(); 
    };

    if (postalCodeInputRef.current) {
      postalCodeInputRef.current.addEventListener('keydown', handleKeyDown2);
      postalCodeInputRef.current.addEventListener('wheel', handleWheel2);
      postalCodeInputRef.current.addEventListener('touchmove', handleTouchMove2);
    }
    if(phoneInputRef.current){
      phoneInputRef.current.addEventListener('keydown', handleKeyDown2);
      phoneInputRef.current.addEventListener('wheel', handleWheel2);
      phoneInputRef.current.addEventListener('touchmove', handleTouchMove2);
    }
    
  }, []);

  const updateFormData = (updatedValues) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      ...updatedValues,
    }));
  };
  const handleSkillSelected = (skill) => {
    if (skill && !selecetdSkills.includes(skill)) {
      const updatedSkills = [...selecetdSkills,skill]
      setSelectedSKills(updatedSkills);
      setInputValue('');
      updateFormData({ Skills: updatedSkills.join(', ') });
      
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


  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(6);
  const [filters, setFilters] = useState({
    category: [],
    type: [],
    jobloc: []
  }); 
  
  useEffect(() => { 
    const pageHeight = document.body.scrollHeight;
    // const scrollToPosition = (pageHeight * 0.2);
    const scrollTopPosition = 0;
    if (currentPage !== 1) {
      window.scrollTo({ top: scrollTopPosition, behavior: 'smooth' });
    }
    else if (currentPage == 1) {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [currentPage]);
  // useEffect(()=>{
  //   window.scroll(0,0)
  // },[])



  useEffect(() => {
    const options = {
      strings: ["Effect", "Capability", "Innovation", "Influence"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    };
    const typed = new Typed(typedTextRef1.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  const [searchTitle, setSearchTitle] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [checkedTitles, setCheckedTitles] = useState({})
  const [checkedLocation, setCheckedLocation] = useState({})
  const [checkedCategory, setcheckCategory] = useState({});
  const [checkedType, setCheckedType] = useState({});
  const [checkedJobLoc, setCheckedJobLoc] = useState({});

  const [buttonContent, setButtonContent] = useState('search');
  const [selectedDate, setSelectedDate] = useState('');
  // const [checkedResponsibilities, setCheckedResponsibilities] = useState({})
  // const [checkedQualification, setCheckedQualification] = useState({})
  const [searchQuery, setSearchQuery] = useState('');
  // const data = useContext(jobDetails);
  const data = jobDescriptions;
  const [filteredData, setFilteredData] = useState([]);
  // const style = Imgtext;

  const inputFields = ()=>{
    toast.warning("please check all the fields",{
      position:"top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",

    })
  }

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

  const verifyEmailOtp = () => {
    // toast("otp has been sent to your Email"); 
    toast.warning("please verify otp to submit", {
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
  
  const handleReqBtn = ()=>{
    const emailInputElement = emailInputRef.current;
    const email = emailInputElement.value;

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValidEmail) {
      
      // Disable the "req-otp" button
      const sendOtpButton = document.getElementById('sendOtpButton3131');
      if (sendOtpButton) {
        sendOtpButton.setAttribute('disabled', true);
      }
    } else {
      console.log('Sending OTP to:', email);
      const sendOtpButton = document.getElementById('sendOtpButton3131')
      if(sendOtpButton){
        sendOtpButton.removeAttribute('disabled');
      }
    }
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


 

  const sendButtonSpanRef = useRef();
  const sendButtonInputRef = useRef(); 
  const verifyOtpInputRef = useRef();
  const verifyButton = useRef();

  const firstInputRef = useRef();
  const lastnameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();
  const streetInputRef = useRef();
  const cityInputRef = useRef();
  const countryInputRef = useRef();
  const postalCodeInputRef = useRef();
  const roleInputRef = useRef();
  const skillsInputRef = useRef();


  const spanFristInputRef = useRef();
  const spanLastNameInputRef = useRef();
  const spanEmailInputRef = useRef();
  const spanPhoneInputRef = useRef();
  const spanStreetInnputRef = useRef();
  const spanCityInputRef = useRef();
  const spanCountryInputRef = useRef();
  const spanPostalInputRef = useRef();
  const spanRoleInputRef = useRef();
  const spanSkillsInputRef = useRef();

  const [phone, setPhone] = useState('');

  const handlePhoneChange = (event) => {
    // setPhone(event.target.value);
    const sanitizedValue = event.target.value.replace(/\D/g, '').slice(0, 10);
    setPhone(sanitizedValue);

  };


  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  // const filterData = (jobs) => {
  //   if (selectedDate === 'recent') {
  //     const recentDate = new Date();
  //     recentDate.setMonth(recentDate.getMonth() - 2);
  //     return jobs.filter(job => new Date(job.date) >= recentDate);
  //   } else if (selectedDate === 'old') {
  //     const recentDate = new Date();
  //     recentDate.setMonth(recentDate.getMonth() - 2);
  //     return jobs.filter(job => new Date(job.date) < recentDate);
  //   } else {
  //     return jobs;
  //   }
  // };

  // useEffect(() => {
  //   const filtered = filterData(jobDescriptions);
  //   setFilteredData(filtered);
  // }, [selectedDate]);



  useEffect(() => {
    const filterData = (jobs) => {
      if (selectedDate === 'recent') {
        const recentDate = new Date();
        recentDate.setMonth(recentDate.getMonth() - 2);
        return jobs.filter(job => new Date(job.date) >= recentDate);
      } else if (selectedDate === 'old') {
        const recentDate = new Date();
        recentDate.setMonth(recentDate.getMonth() - 2);
        return jobs.filter(job => new Date(job.date) < recentDate);
      } else {
        return jobs;
      }
    };

    let filteredResult = jobDescriptions.filter(job => {
      return (
        (filters.category.length === 0 || filters.category.includes(job.Category)) &&
        (filters.type.length === 0 || filters.type.includes(job.type)) &&
        (filters.jobloc.length === 0 || filters.jobloc.includes(job.jobloc))
      );
    });

    if (searchTitle.trim() !== '') {
      filteredResult = filteredResult.filter(item =>
        item.title.toLowerCase().includes(searchTitle.toLowerCase())
      );
    }

    if (searchLocation.trim() !== '') {
      filteredResult = filteredResult.filter(item =>
        item.location.toLowerCase().includes(searchLocation.toLowerCase())
      );
    }

    const finalFilteredResult = filterData(filteredResult);
    setFilteredData(finalFilteredResult);
  }, [jobDescriptions, filters, searchTitle, searchLocation, selectedDate, currentPage]);


  const handleCheckboxChange = (filterType, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterType]: prevFilters[filterType].includes(value)
        ? prevFilters[filterType].filter(item => item !== value)
        : [...prevFilters[filterType], value]
    }));
  };

  const handlePhoneInpValidation = ()=>{
    const phoneInputLength = phoneInputRef.current.value.length;
    const firstInputValue = firstInputRef.current.value.length;
    const lastInputValue = lastnameInputRef.current.value.length;
    const emailInputValue = emailInputRef.current.value;
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInputValue);
    const streetInputValue = streetInputRef.current.value.length;
    const cityInputValue = cityInputRef.current.value.length;
    const countryInputValue = countryInputRef.current.value.length;
    const postalInputValue =postalCodeInputRef.current.value.length;
    const roleInputValue = roleInputRef.current.value.length;
    const skillsInputValue = skillsInputRef.current.value.length;
    if((firstInputValue >= 1)&&(lastInputValue >= 1)&&(isValidEmail)&&((phoneInputLength != 10)||(postalInputValue != 6))&&(streetInputValue >= 1)&&(cityInputValue >= 1)&&(countryInputValue >= 1)&&(roleInputValue != 0)&& (selecetdSkills.length != 0)){

      const phoneInputValidation = document.getElementById('formSubmit31')
      inputFields();
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
        const phoneInputValidation = document.getElementById('formSubmit31');
        if(phoneInputValidation){
          phoneInputValidation.removeAttribute('disabled')
        }
      }
       
      
     
    }
  




  // useEffect(() => {
  //     const selectedTitles = Object.keys(checkedTitles).filter((key) => checkedTitles[key]);
  //     const selectedLocation = Object.keys(checkedLocation).filter((key) => checkedLocation[key]);
  //     const selectedCategory = Object.keys(checkedCategory).filter((key) => checkedCategory[key]);
  //     const selectedType = Object.keys(checkedType).filter((key)=> checkedType[key]);
  //     const selectedJobLoc= Object.keys(checkedJobLoc).filter((key) => checkedJobLoc[key]);

  //     let filteredResult = jobDescriptions;

  //     if (selectedTitles.length > 0) {
  //         filteredResult = filteredResult.filter(item => selectedTitles.includes(item.title));
  //     }

  //     if (selectedLocation.length > 0) {
  //         filteredResult = filteredResult.filter(item => selectedLocation.includes(item.location));
  //     }

  //     if(selectedCategory.length > 0){
  //       filteredResult = filteredResult.filter(item => selectedCategory.includes(item.Category))
  //     }
  //     if(selectedType.length > 0){
  //       filteredResult = filteredResult.filter( item => selectedType.includes(item.type))
  //     }
  //     if(selectedJobLoc.length > 0){
  //       filteredResult = filteredResult.filter(item => selectedJobLoc.includes(item.jobloc))
  //     }

  //     if (searchTitle.trim() !== '') {
  //         filteredResult = filteredResult.filter(item =>
  //             item.title.toLowerCase().includes(searchTitle.toLowerCase())
  //         );
  //     }

  //     if (searchLocation.trim() !== '') {
  //         filteredResult = filteredResult.filter(item =>
  //             item.location.toLowerCase().includes(searchLocation.toLowerCase())
  //         );
  //     }

  //     setFilteredData(filteredResult);
  // }, [checkedCategory, checkedType,checkedJobLoc, searchTitle, searchLocation, currentPage]);


  // const handleTitleChange = (event) => {
  //     const { name, checked } = event.target;
  //     setCheckedTitles(prevState => ({
  //         ...prevState,
  //         [name]: checked
  //     }));
  // };

  // const handleLocationChange = (event) => {
  //     const { name, checked } = event.target;
  //     setCheckedLocation(prevState => ({
  //         ...prevState,
  //         [name]: checked
  //     }));
  // };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };



  const handleSearch = () => {
    // Logic for filtering based on both title and location
    const filteredResult = data.filter(item =>
      (item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (checkedTitles[item.title] || Object.values(checkedTitles).every(value => !value)) &&
      (checkedLocation[item.location] || Object.values(checkedLocation).every(value => !value))
    );

    setFilteredData(filteredResult);
  };

  const updateButtonContent = () => {
    setButtonContent(`search for "${searchTitle}" in "${searchLocation}"`);
  };

  const handleSearchTitleChange = (e) => {
    setSearchTitle(e.target.value);
    updateButtonContent();
  }
  const handleSearchLocationChange = (e) => {
    setSearchLocation(e.target.value);
    updateButtonContent();
  }

  const handleApplyNow = (selectedJob) => {
    console.log("Selected Job:", selectedJob);
  };



  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    ExpectedCTC: '',
    Role: '',
    altphone: '',
    CurrentCTC: '',
    Street: '',
    city: '',
    Country: '',
    postalcode: '',
    Skills: '',
    check1: false,
    check2: false,
    firstnameError: false,
    lastnameError: false,
    emailError: false,
    phoneError: false,
    roleError: false,
    streetError: false,
    cityError: false,
    countryError: false,
    postalError: false,
    skillsError: false,

  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value // handle checkboxes separately
    }));
  };




  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const inputValue = requiredInputRef.current.value;

  //   // Check if the required input field is empty
  //   if (inputValue.trim() === '') {
  //     // If it's empty, focus on the input field
  //     requiredInputRef.current.focus();
  //     // Scroll the input field into view with options to center it vertically
  //     requiredInputRef.current.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'center',
  //     });
  //   } else {
  //     // Otherwise, proceed with form submission
  //     // Your form submission logic goes here
  //   }
  // };

  // const handleSubmit = (event) => {


  //   const isFormDataFilled = Object.values(formData).some(value => value !== '');
  //   if (isFormDataFilled) {
  //     console.log('Form submitted:', formData);
  //   } else {
  //     window.scrollTo(0,10);
  //     requiredInputRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
  //     alert('Please Fill the Fields');


  //   }
  // };
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    const fileList = Array.from(files).map(file => ({
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


  const handleSubmit = (event) => {
    event.preventDefault();

    const hasErrors = Object.keys(formData).some(key => key.endsWith('Error') && formData[key]);

    if (hasErrors) {
      // Display an error message or handle it as needed

    }

    // Proceed with form submission logic
    // If the form is valid, you can submit it using Web3Forms API or any other method
    // Example:
    const form = document.getElementById('formDetails');
    form.submit();
  }

  const uniqueLocations = [...new Set(data.map(item => item.location))];
  const uniqueJobTitles = [...new Set(data.map(item => item.title))];

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredData.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>

      {/* <ResNavbarCC/> */}




      <div className="top6">
        <div className="ctn1"> <span >Your<span className="imgtext" ref={typedTextRef1}></span><br />Optimized </span> </div><br />
        <div className="ctn2"><span className="quote">Choose a job you love, and you will never <br /> have to work a day in your life." <span className="imgtext">- Confucius</span></span></div>

      </div>
      {/* </div> */}
      <div className="texts3131">
        <h1> Explore <span>Jobs</span></h1>
      </div>
      <div className="search313131">
        <input
          type="text"
          placeholder="Search by job title , keyword"
          value={searchTitle}
          onChange={handleSearchTitleChange}
          className="searchinp31" 
        />

        <input
          type="text"
          placeholder="Enter City , State or Zip"
          value={searchLocation}
          onChange={handleSearchLocationChange}
          className="searchinp31"
        />
        <button className="searchbtn31" onClick={updateButtonContent}>Search</button>
      </div>


      <div className="datablock6">
        <div className="filter6">


          <hr className="hr6" />
          <div className="boxes3131">
            <h3>Category</h3>
            {Array.from(new Set(jobDescriptions.map(job => job.Category))).map(category => (
              <label key={category}>
                <input
                className="filters"
                  type="checkbox"
                  value={category}
                  checked={filters.category.includes(category)}
                  onChange={() => handleCheckboxChange('category', category)}
                />
                {category}
              </label>
            ))}
          </div>
          <div className="boxes3131">
            <h3>Type</h3>
            {Array.from(new Set(jobDescriptions.map(job => job.type))).map(type => (
              <label key={type}>
                <input
                 className="filters"
                  type="checkbox"
                  value={type}
                  checked={filters.type.includes(type)}
                  onChange={() => handleCheckboxChange('type', type)}
                />
                {type}
              </label>
            ))}
          </div>
          <div className="boxes3131">
            <h3>Job Location</h3>
            {Array.from(new Set(jobDescriptions.map(job => job.jobloc))).map(jobloc => (
              <label key={jobloc}>
                <input
                 className="filters"
                  type="checkbox"
                  value={jobloc}
                  checked={filters.jobloc.includes(jobloc)}
                  onChange={() => handleCheckboxChange('jobloc', jobloc)}
                />
                {jobloc}
              </label>
            ))}
          </div>
          {/* <div className="Fillform31">
                    <button className="apply31" onClick={()=>{
                                    // handleApplyNow(user);
                                    navigate("/FillForm");
                                    
                                }}>click here </button>
                    </div> */}
        </div>





        <div className="job6">

          <div className="job63131">
            <hr className="linehr" />
            <div className="dateFilter3131">
              <div className="result3131">
                <p>{filteredData.length} results</p>

              </div>


              <div className="sortby3131">
                <p>Sort by<span className="sort">--</span></p>

                <select value={selectedDate} onChange={handleDateChange}>
                  <option value="">All Postings</option>
                  <option value="recent">Recent</option>
                  <option value="old">Old</option>
                </select>

              </div>

            </div>
            <hr className="linehr" />


            <ul className="ul">

              {currentJobs.map(user => (
                <li key={user.id} className="jobline">
                  {/* <a href={user.id}  className="apply" onClick={() => handleApplyNow(user)}>Apply Now</a>  */}
                  {/* <a href={user.id} className="apply"> 
                                <button className="apply" onClick={()=>{
                                    handleApplyNow(user);
                                    // navigate("/signIn");  
                                    if (localStorage.getItem("email") && localStorage.getItem("password")) { 
                                        // navigate("/jobId"); 
                                        handleApplyNow(user);
                                    } else {
                                        navigate("/signIn"); 
                                    }
                                }}>Apply Now</button> <br />
                              </a> */}
                  {/* {localStorage.getItem("email") === "true" && localStorage.getItem("password") === "true" ? (
    <button className="apply" onClick={() => {
        handleApplyNow(user);
        if (localStorage.getItem("email") && localStorage.getItem("password")) {
            // handleApplyNow(user);
            // This part should navigate to a specific job ID, assuming user.id is the job ID
            // navigate(`/jobId/${user.id}`);
            window.location.href = `/${user.id}`;
        } else {
            navigate("/signIn");
        }
    }}>
        Apply Now
    </button>
) : (
    <a href={`/${user.id}`} className="apply" onClick={() => handleApplyNow(user)}>
        Apply Now
    </a>
)}
*/}
                  <button className="apply" onClick={() => {

                    // navigate("/signIn");  
                    // if (localStorage.getItem("email") && localStorage.getItem("password")) {
                    //   navigate("/jobId", { state: { data: user } });
                    //   handleApplyNow(user); 
                    
                      // handleApplyNow(user); 
                      //   {<Link  to={`/jobId/${user.id}`}>
                      //     </Link> 

                      //     }  

                      // handleApplyNow(user);
                      //    <a href={user.id}  className="apply" onClick={() => handleApplyNow(user)}>Apply Now</a>  
                    // }
                    if(localStorage.getItem("registerStatus") == "success" || localStorage.getItem("loginSuccess") == "success") {
                      navigate("/jobId", { state: { data: user } });
                      handleApplyNow(user); 
                     } else {
                      navigate("/signIn", { state: { data: user } });
                    }
                  }}
                  >Apply Now</button> <br />

                  <span className="title6">{user.title}</span> <br />

                  <br /><span>Location:</span>{user.location},
                  <br /><span>Salary:</span>{user.salary},<br />
                  <span> Responsibilities: </span>{user.responsibilities}

                  {/* <span>Qualifications:</span>{user.qualifications} */}
                  <hr className="linehr" />
                </li>
              ))}
            </ul>
          </div>



          {filteredData.length > 0 && (
            <ul className="pagination31">


              <li className="page-item31">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  className="page-link"
                  disabled={currentPage === 1}
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
              </li>
              {Array.from({ length: Math.ceil(filteredData.length / jobsPerPage) }).map((_, index) => (
                <li key={index}>
                  <button onClick={() => paginate(index + 1)} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
                    style={{ color: currentPage == index + 1 ? '#FFD600' : '' }}>
                    {index + 1}
                  </button>
                </li>
              ))}
              <li className="page-item1">
                <button
                  onClick={() => paginate(currentPage + 1)}
                  className="page-link"
                  disabled={currentPage === Math.ceil(filteredData.length / jobsPerPage)}
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </li>
            </ul>
          )}

          <div className="NOJObs3131">
            {filteredData.length === 0 && (
              <div className="form-container">
                <br /><br />
                <p>There are no jobs for your search criteria.</p><br />
                <div className="refrain3131">
                  <h2>Please Refine your search</h2>
                </div>

                {/* Your form JSX code goes here */}
                <div className="forms">
                  {/* onSubmit={handleSubmit} */}
                  {/* <form id="formDetails" action="https://api.web3forms.com/submit"  method="POST" type='submit'> 
        <input type="hidden" name="access_key" value="022648fc-f0d0-42ce-b08d-d18131fba2c5"></input> 
          <input name="inputs" type="text"></input> 
          <input name="inputs" type="text"></input> 
          <input name="inputs" type="text"></input> 
          <input name="inputs" type="text"></input> 
          <button>submit</button>
        </form> */}


                  <form id="formDetails" action="https://api.web3forms.com/submit" method="POST" type='submit' onSubmit={handleSubmit}   >
                    <input type="hidden" name="access_key" value="022648fc-f0d0-42ce-b08d-d18131fba2c5"></input>
                    <div className="userdata3131">

                      <div className="names3131">
                        <div className="inpblock3131">
                          <label htmlFor="firstname">First Name <span>*</span></label>
                          <input
                            className={formData.firstnameError ? 'error' : ''}
                            type="text"
                            id="firstname"
                            name="firstname"
                            placeholder="Enter your first name"
                            value={formData.firstname}
                            onChange={handleInputChange}
                            required
                            ref={firstInputRef}
                            onKeyPress={(e) => {
                              if (e.key === 'Enter') {
                                e.preventDefault();
                              }
                            }}

                          />
                          <span ref={spanFristInputRef}></span>
                        </div>
                        <div className="inpblock3131">
                          <label htmlFor="lastname">Last Name <span>*</span></label>
                          <input
                            className={formData.lastnameError ? 'error' : ''}
                            type="text"
                            id="lastname"
                            name="lastname"
                            placeholder="Enter your last name"
                            value={formData.lastname}
                            onChange={handleInputChange}
                            required
                            ref={lastnameInputRef}
                            onKeyPress={(e) => {
                              if (e.key === 'Enter') {
                                e.preventDefault();
                              }
                            }}
                          />
                          <span ref={spanLastNameInputRef}></span>
                        </div>
                      </div>

                      <div className="names3131">
                        <div className="inpblock3131">
                          <label htmlFor="email">Email <span>*</span></label>
                          <input
                            className={formData.emailError ? 'error' : ''}
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email address"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            ref={emailInputRef}
                            onKeyPress={(e) => {
                              if (e.key === 'Enter') {
                                e.preventDefault();
                              }
                            }}
                          />
                          <span ref={spanEmailInputRef}></span>
                        </div>

                        <div className="inpblock3131">
                        <label htmlFor="altphone">Verify Otp <span style={{color:'red'}}>*</span></label>
                          <div id="verifyDiv">

                            <button ref={sendButtonInputRef} id="sendOtpButton3131" type="button" onMouseOver={handleReqBtn} onClick={() => {
                              sendOtp();
                            }}>Req-Otp</button>


                            <input style={{ visibility: "hidden" }} ref={verifyOtpInputRef} type="number" id="registerInput3131" onChange={(event) => {
                              verifyOtpInputRef.current.value = event.target.value.slice(0, 4);
                            }}></input>


                            <button ref={verifyButton} style={{ visibility: "hidden",}} id="verifyOtpButton3131" type="button" onClick={() => {
                              verifyOtp();
                            }}>Verify</button> 
                            
                            <br></br>
                            {/* <span ref={sendButtonSpanRef}>HH</span> */}


                          </div>
                          
                        </div>

                      </div>

                      <div className="names3131">

                        <div className="inpblock3131">
                          <label htmlFor="ExpectedCTC">Expected CTC </label>
                          <input
                            className="inp1"
                            type="text"
                            id="ExpectedCTC"
                            name="ExpectedCTC"
                            placeholder="What is your expected CTC"
                            value={formData.ExpectedCTC}
                            onChange={handleInputChange}
                            onKeyPress={(e) => {
                              if (e.key === 'Enter') {
                                e.preventDefault();
                              }
                            }}
                          />
                        </div>

                        <div className="inpblock3131">
                          <label htmlFor="Role">Role <span>*</span></label>
                          <input
                            className={formData.roleError ? 'error' : ''}
                            type="text"
                            id="Role"
                            name="Role"
                            value={formData.Role}
                            required
                            placeholder="Enter the role you are looking for"
                            ref={roleInputRef}
                            onChange={handleInputChange}
                            onKeyPress={(e) => {
                              if (e.key === 'Enter') {
                                e.preventDefault();
                              }
                            }}
                          />
                          <span ref={spanRoleInputRef}></span>
                        </div>
                      </div>
                      <div className="names3131">
                        <div className="inpblock3131">
                        <label htmlFor="phone">Phone <span>*</span></label>
                          <input
                            className={formData.phone ? 'error' : ''}
                            type="number"
                            id="phone"
                            name="phone"
                            placeholder="Enter your phone number"
                            value={formData.phone.slice(0, 10)}
                            onChange={handleInputChange}
                            pattern="^(\+\d{1,2}\s)?\(?(\d{3})\)?[\s.-]\d{3}[\s.-]\d{4}$"
                            // maxLength={10}
                            minLength={10}
                            required
                            ref={phoneInputRef}
                            onKeyPress={(e) => {
                              if (e.key === 'Enter') {
                                e.preventDefault();
                              }
                            }}
                          />
                          <span ref={spanPhoneInputRef}></span>
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

                      <div className="names3131">
                        <div className="inpblock3131">
                          <label htmlFor="Street">Street <span>*</span></label>
                          <input
                            className={formData.streetError ? 'error' : ''}
                            type="text"
                            id="Street"
                            name="Street"
                            placeholder="Enter your street address"
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
                          <span ref={spanStreetInnputRef}></span>
                        </div>

                        <div className="inpblock3131">
                          <label htmlFor="city">City <span>*</span></label>
                          <input
                            className={formData.cityError ? 'error' : ''}
                            type="text"
                            id="city"
                            name="city"
                            placeholder="Enter your city name"
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
                          <span ref={spanCityInputRef}></span>
                        </div>
                      </div>


                      <div className="names3131">
                        <div className="inpblock3131">
                          <label htmlFor="Country">Country <span>*</span></label>
                          <input
                            className={formData.countryError ? 'error' : ''}
                            type="text"
                            id="Country"
                            name="Country"
                            placeholder="Enter your country name"
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
                          <span ref={spanCountryInputRef}></span>
                        </div>
                        <div className="inpblock3131">
                          <label htmlFor="postalcode">Pin Code <span>*</span></label>
                          <input
                            className={formData.postalError ? 'error' : ''}
                            type="number"
                            id="postalcode"
                            name="postalcode"
                            placeholder="Enter pin code"
                            value={formData.postalcode.slice(0, 6)}
                            onChange={handleInputChange}
                            required
                            ref={postalCodeInputRef}
                            onKeyPress={(e) => {
                              if (e.key === 'Enter') {
                                e.preventDefault();
                              }
                            }}
                          />
                          <span ref={spanPostalInputRef}></span>
                        </div>
                      </div>




                      <div className="Role3131">
                        <div className="inpblock3121">
                          <label htmlFor="Skills">Skills <span>*</span></label>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', alignItems: 'center' }}>
        {selecetdSkills.map((skill) => (
          <div
            key={skill}
            id="skillsSelected"
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
          placeholder="Mention all your skills"
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
                          <span ref={spanSkillsInputRef}></span>
                        </div> 
                        <input id="hiddenInput"></input>
                      </div>

                    </div>

                    <div className="desc31">
                      <div className="upload" >
                        <p>Upload Your Resume <span>*</span></p>
                        <p>Apply faster! We'll use the information in your resume to help you fill out this application.</p>
                        <p>Choose where you want to upload your resume from. We accept .DOCX, .DOC, .PDF files up to 5 MB.</p>
                        <div className="uploads313131">
                          <div>
                            <button className="line" onClick={handleMyDeviceClick}>
                              <FontAwesomeIcon icon={faComputer} /> My Device</button>
                            <input
                              id="fileInput"
                              type="file"
                              accept=".pdf,.DOCX, .DOC"
                              onChange={handleFileChange}
                              style={{ opacity: "0" }}
                              required// Hide the input visually
                              onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                  e.preventDefault();
                                }
                              }}
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
                            }}
                          /> <span className="sp" >*</span> I understand that, as part of the provision of their services to me, IT Monks may contact me regarding my employment, future opportunities, marketing or advertisement related to the services at the phone number provided, including SMS and pre-recorded messages through the use of automated technology. I understand that I may opt out at any time as stated in the <span className="sp1" > Terms & Conditions.</span> You can view our <span className="sp1" > Privacy Notice</span> here.</li> <br />
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
                            }}
                          /> <span className="sp" >*</span> By submitting this application, I agree to the <span className="sp1" >Terms & Conditions.</span></li>
                        </ul>
                      </div>

                    </div>


                    <button

                      onClick={() => {


                        const email = emailInputRef.current.value;
                        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;





                        if (firstInputRef.current.value === "") {
                          spanFristInputRef.current.innerHTML = "Please enter your first name"
                          firstInputRef.current.style.borderColor = "red"
                          spanFristInputRef.current.style.color = "red"
                        }
                        else {
                          firstInputRef.current.style = "none"
                          spanFristInputRef.current.innerHTML = ""
                        }

                        if (lastnameInputRef.current.value === "") {
                          lastnameInputRef.current.style.borderColor = "red"
                          spanLastNameInputRef.current.innerHTML = "Please enter your last name"
                          spanLastNameInputRef.current.style.color = "red"
                        }
                        else {
                          lastnameInputRef.current.style = "none"
                          spanLastNameInputRef.current.innerHTML = ""
                        }
                        if (emailInputRef.current.value === "" || !emailRegex.test(email)) {
                          emailInputRef.current.style.borderColor = "red"
                          spanEmailInputRef.current.innerHTML = "Please enter a valid email address"
                          spanEmailInputRef.current.style.color = "red"
                        }
                        else {
                          emailInputRef.current.style = "none"
                          spanEmailInputRef.current.innerHTML = ""
                        }

                        if (phoneInputRef.current.value === "") {
                          phoneInputRef.current.style.borderColor = "red"
                          spanPhoneInputRef.current.innerHTML = "Please enter a vaild phone number"
                          spanPhoneInputRef.current.style.color = "red"
                        }
                        else if (phoneInputRef.current.value.length < 10) {
                          // const tempPhone = phoneInputRef.current.value;
                          // phoneInputRef.current.value = "";
                          if (phoneInputRef.current.value === "") {
                            phoneInputRef.current.style.borderColor = "red"
                            spanPhoneInputRef.current.innerHTML = `Invalid Phone number (minimum 10 Digits)`
                            spanPhoneInputRef.current.style.color = "red"
                          }

                        }
                        else {
                          phoneInputRef.current.style = "none"
                          spanPhoneInputRef.current.innerHTML = ""
                        }

                        if (roleInputRef.current.value === "") {
                          roleInputRef.current.style.borderColor = "red"
                          spanRoleInputRef.current.innerHTML = "Please enter the role you are looking for"
                          spanRoleInputRef.current.style.color = "red"
                        }
                        else {
                          roleInputRef.current.style = "none"
                          spanRoleInputRef.current.innerHTML = ""
                        }
                        if (streetInputRef.current.value === "") {
                          streetInputRef.current.style.borderColor = "red"
                          spanStreetInnputRef.current.innerHTML = "Please enter street address"
                          spanStreetInnputRef.current.style.color = "red"
                        }
                        else {
                          streetInputRef.current.style = "none"
                          spanStreetInnputRef.current.innerHTML = ""
                        }

                        if (cityInputRef.current.value === "") {
                          cityInputRef.current.style.borderColor = "red"
                          spanCityInputRef.current.innerHTML = "Please enter city name"
                          spanCityInputRef.current.style.color = "red"
                        }
                        else {
                          cityInputRef.current.style = "none"
                          spanCityInputRef.current.innerHTML = ""
                        }

                        if (countryInputRef.current.value === "") {
                          countryInputRef.current.style.borderColor = "red"
                          spanCountryInputRef.current.innerHTML = "Please enter your country name"
                          spanCountryInputRef.current.style.color = "red"
                        }
                        else {
                          countryInputRef.current.style = "none"
                          spanCountryInputRef.current.innerHTML = ""
                        }

                        if (postalCodeInputRef.current.value === "") {
                          postalCodeInputRef.current.style.borderColor = "red"
                          spanPostalInputRef.current.innerHTML = "Please enter a valid pin code"
                          spanPostalInputRef.current.style.color = "red"
                        }
                        else if (postalCodeInputRef.current.value.length < 6) {
                          // const tempPinCode = postalCodeInputRef.current.value;
                          // postalCodeInputRef.current.value = "";
                          if (postalCodeInputRef.current.value === "") {
                            postalCodeInputRef.current.style.borderColor = "red"
                            spanPostalInputRef.current.innerHTML = `Invalid Pin Code `
                            spanPostalInputRef.current.style.color = "red"
                          }
                        }
                        else {
                          postalCodeInputRef.current.style = "none"
                          spanPostalInputRef.current.innerHTML = ""
                        }
                        if (selecetdSkills.length === 0) {
                          skillsInputRef.current.style.borderColor = "red"
                          spanSkillsInputRef.current.innerHTML = "Please provide your skills "
                          spanSkillsInputRef.current.style.color = "red"
                        }
                        else {
                          skillsInputRef.current.style = "none"
                          spanSkillsInputRef.current.innerHTML = ""
                        }
                        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInputRef.current.value);
                       if(verifyButton.current.innerHTML != "verified" && (isValidEmail)){
                        verifyEmailOtp();
                        document.getElementById("hiddenInput").setAttribute("required",true);
                       } 
                       else {
                        document.getElementById("hiddenInput").removeAttribute("required");
                       }
 
                      }}

                      onMouseOver={handlePhoneInpValidation}

                      className="submit" id="formSubmit31" >Submit</button>

                    {/* onClick={handleSubmit} type="submit"  */}



                    {/* <a href={user.id}  className="apply" onClick={() => handleApplyNow(user)}>Apply Now</a> */}

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
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
      <Footer/>
    </>
   
  )
  
}

export default Career;
