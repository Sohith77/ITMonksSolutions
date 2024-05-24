import React, { useState, useEffect, useRef } from "react";
import Typed from 'typed.js'
import './forms.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer } from "@fortawesome/free-solid-svg-icons";

function FillForm() {

  const typedTextRef1 = useRef(null);
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

  const [formData, setFormData] = useState({

    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    ExpectedCTC: '',
    Role: '',
    altPhone: '',
    CurrentCTC: '',
    city: '',
    Country: '',
    Skills:'',
    check1: '', check2: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isFormDataFilled = Object.values(formData).some(value => value !== '');
    if (isFormDataFilled) {
      console.log('Form submitted:', formData);
    } else {
      // No form field is filled, do nothing or show an error message
      alert('Please Fill the Fields');
      console.log('No form data to submit');
    }
  };
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
  return (
    <>
      <div className="top6" >
        <div className="ctn1"> <span >Your<span className="imgtext" ref={typedTextRef1}></span><br />Optimized </span> </div><br />
        <div className="ctn2"><span className="quote">Choose a job you love, and you will never <br /> have to work a day in your life." <span className="imgtext">- Confucius</span></span></div>

      </div>
      <div className="texts3131">
        <h1> Explore <span>Jobs</span></h1>
      </div>
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
                  value={formData.firstname}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="inpblock3131">
                <label htmlFor="lastname">Last Name <span>*</span></label>
                <input
                  className="inp1"
                  type="text"
                  id="lastname"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="contact3131">
              <div className="inpblock3125">
                <label htmlFor="email">Email <span>*</span></label>
                <input
                  className="inp1"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="inpblock3125">
                <label htmlFor="phone">Phone <span>*</span></label>
                <input
                  className="inp1"
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="type2531">
                <label htmlFor="contactType">Contact Type</label>
                <select
                  id="contactType"
                  value={selectedOption}
                  onChange={handleOptionChange}
                >
                  <option value="">Select...</option>
                  <option value="Mobile">Mobile</option>
                  <option value="Landline">Landline</option>
                </select>
              </div>
            </div>

            <div className="Role3131">
              <div className="inpblock3121">
                <label htmlFor="streetaddress">Role <span>*</span></label>
                <input
                  className="inp1"
                  type="text"
                  id="streetaddress"
                  name="streetaddress"
                  value={formData.streetaddress}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="names3131">
              <div className="inpblock3131">
                <label htmlFor="city">city <span>*</span></label>
                <input
                  className="inp1"
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="inpblock3131">
                <label htmlFor="country">country <span>*</span></label>
                <input
                  className="inp1"
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>


            <div className="names3131">
              <div className="inpblock3131">
                <label htmlFor="state">state <span>*</span></label>
                <input
                  className="inp1"
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="inpblock3131">
                <label htmlFor="postalcode">postalcode <span>*</span></label>
                <input
                  className="inp1"
                  type="number"
                  id="postalcode"
                  name="postalcode"
                  value={formData.postalcode}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>




            <div className="Role3131">
              <div className="inpblock3121">
                <label htmlFor="mostrecentjob">Current/Most Recent Job Title <span>*</span></label>
                <input
                  className="inp1"
                  type="text"
                  id="mostrecentjob"
                  name="mostrecentjob"
                  value={formData.mostrecentjob}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>



          </div>

          <div className="desc31">
            <div className="upload" >
              <p>Upload Your Resume <span>*</span></p>
              <p>Apply faster! We'll use the information in your resume to help you fill out this application.</p>
              <p>Choose where you want to upload your resume from. We accept .DOCX, .DOC, .PDF files up to 5 MB.</p>
              <button className="line" onClick={handleMyDeviceClick}>
                <FontAwesomeIcon icon={faComputer} /> My Device</button>
              <input
                id="fileInput"
                type="file"
                onChange={handleFileChange}
                multiple
                style={{ display: 'none' }} // Hide the input visually
              />
              {selectedFiles.length > 0 && (
                <div className="selected3131">
                  <h2>Selected Files:</h2>
                  <ul>
                    {selectedFiles.map((file, index) => (
                      <li key={index}>
                        Name: {file.name}, Size: {file.size} bytes, Type: {file.type}
                        <button onClick={() => handleDownload(file)}>Submit</button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

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
                  required /> <span className="sp" >*</span> I understand that, as part of the provision of their services to me, IT Monks may contact me regarding my employment, future opportunities, marketing or advertisement related to the services at the phone number provided, including SMS and pre-recorded messages through the use of automated technology. I understand that I may opt out at any time as stated in the <span className="sp1" > Terms & Conditions.</span> You can view our <span className="sp1" > Privacy Notice</span> here.</li> <br />
                <li className="checkboxline"><input type="checkbox"
                  id="check2"
                  // name="check2"
                  value={formData.check2}
                  onChange={handleInputChange}
                  required /> <span className="sp" >*</span> By submitting this application, I agree to the <span className="sp1" >Terms & Conditions.</span></li>
              </ul>
            </div>

          </div>
          <button className="submit">Submit</button>

          {/* onClick={handleSubmit}  type="submit"  */}



          {/* <a href={user.id}  className="apply" onClick={() => handleApplyNow(user)}>Apply Now</a> */}

        </form>

      </div>

    </>

  )
}


export default FillForm;