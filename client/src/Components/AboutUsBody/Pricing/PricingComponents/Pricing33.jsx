import React, { useRef, useState, useEffect } from 'react';
import './home212.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ToastContainer, toast } from 'react-toastify';
// import ok from "../assets/ok.png"



function Expert() {


    const [otr2, setOtr2] = useState("");
    const [otr3, setOtr3] = useState("");
    const [otr4, setOtr4] = useState("");
    const [otr5, setOtr5] = useState("");
    const [otr6, setOtr6] = useState("");
    const [otr7, setOtr7] = useState("");
    const [otr8, setOtr8] = useState("");

    const [sld8q1, setSld8q1] = useState("");
    const [sld8q2, setSld8q2] = useState("");
    const [sld8q3, setSld8q3] = useState("");
    const sld8q1q = useRef("");
    const sld8q2q = useRef("");
    const sld8q3q = useRef("");

    //    code for 2nd slide textArea
    const textArea2Ref = useRef();
    const [rows2, setRows2] = useState(1);
    const [cols2, setCols2] = useState(40);
    useEffect(() => {
        const textArea = textArea2Ref.current;
        if (textArea) {
            textArea.style.height = "auto";
            textArea.style.height = textArea.scrollHeight + "px";
        }
    }, [otr2]);

    //    code for 3rd slide textArea
    const textArea3Ref = useRef();
    const [rows3, setRows3] = useState(1);
    const [cols3, setCols3] = useState(40);
    useEffect(() => {
        const textArea = textArea3Ref.current;
        if (textArea) {
            textArea.style.height = "auto";
            textArea.style.height = textArea.scrollHeight + "px";
        }
    }, [otr3]);

    //    code for 4th slide textArea
    const textArea4Ref = useRef();
    const [rows4, setRows4] = useState(1);
    const [cols4, setCols4] = useState(40);
    useEffect(() => {
        const textArea = textArea4Ref.current;
        if (textArea) {
            textArea.style.height = "auto";
            textArea.style.height = textArea.scrollHeight + "px";
        }
    }, [otr4]);

    //    code for 5th slide textArea
    const textArea5Ref = useRef();
    const [rows5, setRows5] = useState(1);
    const [cols5, setCols5] = useState(40);
    useEffect(() => {
        const textArea = textArea5Ref.current;
        if (textArea) {
            textArea.style.height = "auto";
            textArea.style.height = textArea.scrollHeight + "px";
        }
    }, [otr5]);

    //    code for 6th slide textArea
    const textArea6Ref = useRef();
    const [rows6, setRows6] = useState(1);
    const [cols6, setCols6] = useState(40);
    useEffect(() => {
        const textArea = textArea6Ref.current;
        if (textArea) {
            textArea.style.height = "auto";
            textArea.style.height = textArea.scrollHeight + "px";
        }
    }, [otr6]);

    //    code for 7th slide textArea
    const textArea7Ref = useRef();
    const [rows7, setRows7] = useState(1);
    const [cols7, setCols7] = useState(40);
    useEffect(() => {
        const textArea = textArea7Ref.current;
        if (textArea) {
            textArea.style.height = "auto";
            textArea.style.height = textArea.scrollHeight + "px";
        }
    }, [otr7]);

    //    code for 8q1th slide textArea
    const textArea8q1Ref = useRef();
    const [rows8q1, setRows8q1] = useState(1);
    const [cols8q1, setCols8q1] = useState(40);
    useEffect(() => {
        const textArea = textArea8q1Ref.current;
        if (textArea) {
            textArea.style.height = "auto";
            textArea.style.height = textArea.scrollHeight + "px";
        }
    }, [sld8q1]);

    //    code for 8q2th slide textArea
    const textArea8q2Ref = useRef();
    const [rows8q2, setRows8q2] = useState(1);
    const [cols8q2, setCols8q2] = useState(40);
    useEffect(() => {
        const textArea = textArea8q2Ref.current;
        if (textArea) {
            textArea.style.height = "auto";
            textArea.style.height = textArea.scrollHeight + "px";
        }
    }, [sld8q2]);

    //    code for 8q3th slide textArea
    const textArea8q3Ref = useRef();
    const [rows8q3, setRows8q3] = useState(1);
    const [cols8q3, setCols8q3] = useState(40);
    useEffect(() => {
        const textArea = textArea8q3Ref.current;
        if (textArea) {
            textArea.style.height = "auto";
            textArea.style.height = textArea.scrollHeight + "px";
        }
    }, [sld8q3]);

    //    code for otr8 th slide textArea
    const textArea8Ref = useRef();
    const [rows8, setRows8] = useState(1);
    const [cols8, setCols8] = useState(40);
    useEffect(() => {
        const textArea = textArea8Ref.current;
        if (textArea) {
            textArea.style.height = "auto";
            textArea.style.height = textArea.scrollHeight + "px";
        }
    }, [otr8]);

    //backend code/ 
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




    // const textArea2Ref = useRef();
    // const [rows2, setRows2] = useState(2);
    // const [cols2, setCols2] = useState(40);

    // const textArea3Ref = useRef();
    // const [rows3, setRows3] = useState(2);
    // const [cols3, setCols3] = useState(40);

    // const textArea4Ref = useRef();
    // const [rows4, setRows4] = useState(2);
    // const [cols4, setCols4] = useState(40);

    // const textArea5Ref = useRef();
    // const [rows5, setRows5] = useState(2);
    // const [cols5, setCols5] = useState(40);

    // const textArea6Ref = useRef();
    // const [rows6, setRows6] = useState(2);
    // const [cols6, setCols6] = useState(40);

    // const textArea7Ref = useRef();
    // const [rows7, setRows7] = useState(2);
    // const [cols7, setCols7] = useState(40);

    // const textArea8q1Ref = useRef();
    // const [rows8q1, setRows8q1] = useState(1);
    // const [cols8q1, setCols8q1] = useState(40);

    // const textArea8q2Ref = useRef();
    // const [rows8q2, setRows8q2] = useState(1);
    // const [cols8q2, setCols8q2] = useState(40);

    // const textArea8q3Ref = useRef();
    // const [rows8q3, setRows8q3] = useState(1);
    // const [cols8q3, setCols8q3] = useState(40);

    // const textArea8Ref = useRef();
    // const [rows8, setRows8] = useState(2);
    // const [cols8, setCols8] = useState(40);



    // const otr2q = useRef("");
    // const [otr2, setOtr2] = useState("");
    // // const qwerty = useRef(''); 
    // const [otr3, setOtr3] = useState("");
    // const [otr4, setOtr4] = useState("");
    // const [otr6, setOtr6] = useState('');
    // const [otr7, setOtr7] = useState("");
    // const [otr8, setOtr8] = useState("");

    // const [sld8q1, setSld8q1] = useState("");
    // const [sld8q2, setSld8q2] = useState("");
    // const [sld8q3, setSld8q3] = useState("");
    // const sld8q1q = useRef('');
    // const sld8q2q = useRef('');
    // const sld8q3q = useRef('');





    const [email, setEmail] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [TextBox, setTextBox] = useState(false);
    const [textBoxValue, setTextBoxValue] = useState('');

    //code for other check box
    const [isChecked2, setIsChecked2] = useState(false);
    const [isInputVisible2, setIsInputVisible2] = useState(false);

    const [isChecked3, setIsChecked3] = useState(false);
    const [isInputVisible3, setIsInputVisible3] = useState(false);

    const [isChecked4, setIsChecked4] = useState(false);
    const [isInputVisible4, setIsInputVisible4] = useState(false);

    const [isChecked6, setIsChecked6] = useState(false);
    const [isInputVisible6, setIsInputVisible6] = useState(false);

    const [isChecked7, setIsChecked7] = useState(false);
    const [isInputVisible7, setIsInputVisible7] = useState(false);

    const [isChecked8, setIsChecked8] = useState(false);
    const [isInputVisible8, setIsInputVisible8] = useState(false);

    const handleChangem = (event) => {
        setEmail(event.target.value);
    };


    const [swiper, setSwiper] = useState(null); // State to hold the Swiper instance
    const [formData, setFormData] = useState({
        slide1: [],
        slide2: [],
        slide3: [],
        slide4: [],
        slide5: [],
        slide6: [],
        slide7: [],
        slide8: [],
        slide9: [],
        slide10: [],
        // Add more slide objects as needed
    });

    let formout = {}

    formout.Please_select_the_Experts_Needed = formData.slide1;
    formout.What_is_your_Market = formData.slide2;
    formout.What_services_do_you_Need = formData.slide3;
    formout.Which_platform_does_your_app_need_to_support = formData.slide4;
    formout.What_is_the_idea_behind_your_product = formData.slide5;
    formout.Does_your_product_require_any_advanced_techs = formData.slide6;
    formout.Would_you_require_any_integrations = formData.slide7;
    formout.Organizational_questions = formData.slide8;
    formout.Contact_Form_Person_name = formData.slide9;
    formout.Mail_address = formData.slide10;


    const handleOtherCheckBoxChange = (event) => {
        setTextBox(event.target.checked);
    };

    const handleTextBoxChange = (event) => {
        setTextBoxValue(event.target.value)
    };




    var sld10occur;

    // Handle input change
    const handleInputChange = (event, slideIndex) => {
        sld10occur = slideIndex;
        console.log(sld10occur)
        const { name, value, type, checked } = event.target;
        const slideKey = `slide${slideIndex + 1}`;
        // console.log(slideKey)

        // Update the formData state based on input type
        if (type === 'checkbox') {
            if (checked) {
                setFormData(prevData => ({
                    ...prevData,
                    [slideKey]: [...prevData[slideKey], value]
                }));
            } else {
                setFormData(prevData => ({
                    ...prevData,
                    [slideKey]: prevData[slideKey].filter(item => item !== value)
                }));
            }
        } else {
            setFormData(prevData => ({
                ...prevData,
                [slideKey]: [
                    ...prevData[slideKey].slice(0, -1),
                    value
                ]
            }));
        }



    };

    const sld9NameRef = useRef(null);
    // const sld9MailRef = useRef(null);

    const handleFormSubmit = (event) => {
        // console.log(formout)
        // if(otr2 !== ''){
        //     formData.slide2.push(otr2);
        //     console.log(otr2)
        // }

        // if(otr3 !== ''){
        //     formData.slide3.push(otr3);
        // }

        // if(otr4 !== ''){
        //     formData.slide4.push(otr4);
        // }

        // if(otr6 !== ''){
        //     formData.slide6.push(otr6);
        // }

        // if(formData.slide7.length !== 0){

        //     formData.slide7[0] =otr7;
        // }
        // formData.slide7 = Array.from(new Set(formData.slide7))
        // formData.slide7.push(document.getElementById("cards155s").value)
        // console.log(formData.slide7.length);

        // if(otr8 !== ''){
        //     formData.slide8.push(otr8);
        // }
        // if(sld8q1 != ''){
        // formData.slide8.push("Q1"+sld8q1);
        // formData.slide8.push("Q2"+sld8q2);
        // formData.slide8.push("Q3"+sld8q3);
        // }
        formData.slide4 = Array.from(new Set(formData.slide4));
        formData.slide10 = Array.from(new Set(formData.slide10));
        formData.slide10 = formData.slide10.splice(0, formData.slide10.length - 2)
        // let sld10LastElement = formData.slide10[ formData.slide10.length - 1]
        // formData.slide10 = [];
        // formData.slide10.push(sld10LastElement);
        // formData.slide10 = formData.slide10.slice(formData.slide10.length-1)


        console.log(formData.slide8)
        event.preventDefault(); // Prevents default form submission behavior  
        if (sld9NameRef.current.value.length === 0) {
            alert("Please enter your name ");
        }
        else if(emailInputRef.current.value.length === 0 || emailInputRef.current.value.endsWith("gmail.com") || !emailInputRef.current.value.endsWith(".com")|| !emailInputRef.current.value.includes("@") || emailInputRef.current.value.endsWith("@.com")){
            alert("Please enter a valid corporate email and continue ");
        }
        else if(verifyButton.current.innerHTML != "verified"){
            alert("Please verify your OTP");
        }
    //    else if(!email.includes("@") && email.endsWith("@gmail.com") && !email.endsWith(".com")&& email.length ==0) {
        // else if(!emailInputRef.current.value.includes("@") && emailInputRef.current.value.endsWith("@gmail.com")){
        //     alert("Please enter a valid corporate email and continue ");
        // }
    //    else if (verifyButton.current.innerHTML != "verified") {
    //         alert("Please verify your OTP1");
    //     }
        
        // else if (email.includes("@") && !email.endsWith("@gmail.com") && email.endsWith(".com") && verifyButton.current.innerHTML == "verified") {
            else{
            formData.slide10.push(email)
            swiper.slideNext();
        }


        //for showing data in last slide to submit
        console.log(formData)
        document.getElementById("sld10q1").innerHTML = formData.slide1
        document.getElementById("sld10q2").innerHTML = formData.slide2
        document.getElementById("sld10q3").innerHTML = formData.slide3

        document.getElementById("sld10q4").innerHTML = formData.slide4
        document.getElementById("sld10q5").innerHTML = formData.slide5
        document.getElementById("sld10q6").innerHTML = formData.slide6

        document.getElementById("sld10q8a4").innerHTML = formData.slide8
        document.getElementById("sld10q8a4otrout").innerText = otr8

        document.getElementById("sld10q8a1").innerText = sld8q1
        document.getElementById("sld10q8a2").innerText = sld8q2
        document.getElementById("sld10q8a3").innerText = sld8q3

        if (otr7.length === 0) {
            formData.slide7[0] = "No";
        }

        let qwerty7q = document.getElementById("sld10q7");
        if (formData.slide7[0].length !== 0) {
            qwerty7q.innerText = formData.slide7[0]
        }
        else {
            qwerty7q.innerText = otr7;
        }

        //for other input text box  sld10q2otrout
        let otr2qwerty = document.getElementById("sld10q2otrout");
        otr2qwerty.innerText = otr2

        let otr3qwerty = document.getElementById("sld10q3otrout");
        otr3qwerty.innerText = otr3

        let otr4qwerty = document.getElementById("sld10q4otrout");
        otr4qwerty.innerText = otr4
        //sld10q5
        let otr5qwerty = document.getElementById("sld10q5");
        otr5qwerty.innerText = formData.slide5[0]

        //sld10q6
        let otr6q1werty = document.getElementById("sld10q6");
        // let otr6qwerty = document.getElementById("sld10q6otrout");
        if (otr6.length !== 0) {
            otr6q1werty.innerText = otr6;
        }
        else {
            otr6q1werty.innerText = formData.slide6[0];
        }
        // otr6qwerty.innerText= otr6


        // formData.slide4 = Array.from(new Set(formData.slide4));
        // let sld7out = document.getElementById("sld10q7");

        // sld7out.innerHTML= "qeds"+formData.slide7;
        // console.log(formData.slide7)

    };

    //scroll top funtions

    const scrollingTop= ()=>{
        const pageHeight = document.body.scrollHeight;
        const scrollHere = pageHeight * 0.0
        window.scrollTo({top:scrollHere, behavior:'smooth'})
    }

    // Navigate to the next slide only if options are selected
    const goNext = () => {
        if (swiper) {
            const currentSlide = swiper.slides[swiper.activeIndex];
            const inputs = currentSlide.querySelectorAll('input[type="radio"], input[type="checkbox"]');
            const textInput = currentSlide.querySelector('input[type="text"]');
            const isAnyInputSelected = Array.from(inputs).some(input => input.checked) || (textInput && textInput.value.trim() !== '');

            if (isAnyInputSelected) {
                swiper.slideNext();
            } else {
                alert('Please select an option or enter text before proceeding.');
            }
        }
    };

    const goPrev = () => {
        if (swiper) {
            swiper.slidePrev();
        }
    };
    //go next for 2nd slide
    const goNext2 = () => {
        // const redcolor112 = document.querySelector('.sld2checkboxotr')
        // console.log(redcolor112);
        // redcolor112.style.borderBottom="2px solid red";
        const inputs2 = document.querySelectorAll('.sld2checkbox');
        const isAnyInputSelected = Array.from(inputs2).some(input => input.checked);
        let qwerty1 = "" + otr2;
        if (isAnyInputSelected || qwerty1.length !== 0) {
            swiper.slideNext();

            console.log(otr2.length);
        }
        else {
            alert("please select an option or enter text");
        }

        // border-bottom: 2px solid rgb(129, 126, 126);
        // if(otr2 === ''){
        //     redcolor112.style.borderBottom="2px solid red";
        //     // otr2q.current.innerHTML = "please enter your answer"
        //     // otr2q.current.style.color = "red";
        // }else{
        //     // otr2q.current.innerHTML = ""
        // }
    };
    //go next for 3nd slide
    const goNext3 = () => {
        const inputs3 = document.querySelectorAll('.sld3checkbox');
        const isAnyInputSelected = Array.from(inputs3).some(input => input.checked);
        let qwerty3 = "" + otr3;
        if (isAnyInputSelected || qwerty3.length !== 0) {
            swiper.slideNext();

            // console.log(otr3.length);
        }
        else {
            alert("please select an option or enter text");
        }
    };
    //go next for 4nd slide
    const goNext4 = () => {
        const inputs4 = document.querySelectorAll('.sld4checkbox');
        const isAnyInputSelected = Array.from(inputs4).some(input => input.checked);
        let qwerty4 = "" + otr4;
        if (isAnyInputSelected || qwerty4.length !== 0) {
            swiper.slideNext();

            console.log(otr4.length);
        }
        else {
            alert("please select an option or enter text");
        }
    };
    //go next for5th slide
    const goNext5 = () => {
        const inputs5 = document.querySelectorAll('.sld5text');
        // const isAnyInputSelected = Array.from(inputs4).some(input => input.checked);
        // let qwerty4 = ""+otr4;
        // if(inputs5.length !== 0){
        if (textArea5Ref.current.value.length !== 0) {
            swiper.slideNext();

            console.log(inputs5.length);
        }
        else {
            alert("please enter your answer..");
        }
    };
    //go next for 6nd slide
    const goNext6 = () => {
        const inputs6 = document.querySelectorAll('.sld6checkbox');
        const isAnyInputSelected = Array.from(inputs6).some(input => input.checked);
        let qwerty6 = "" + otr6;
        if (isAnyInputSelected && qwerty6.length !== 0) {
            alert("please select only one option or clear input box");
        }
        else if (isAnyInputSelected || qwerty6.length !== 0) {
            swiper.slideNext();

            console.log(otr6.length);
        }
        else {
            alert("please select an option or enter text");
        }
    };

    //go next for 7nd slide
    const goNext7 = () => {
        const inputs7 = document.querySelectorAll('.sld7checkbox');
        const isAnyInputSelected = Array.from(inputs7).some(input => input.checked);
        let qwerty7 = "" + otr7;
        if (isAnyInputSelected && qwerty7.length !== 0) {
            alert("please select only one option or clear input box");
        }
        else if (isAnyInputSelected || qwerty7.length !== 0) {
            swiper.slideNext();

            console.log(otr7.length);
        }
        else {
            alert("please select an option or enter text");
        }

    };



    //go next for 8th slide 🤣
    const goNext8 = () => {
        const inputs8 = document.querySelectorAll('.sld8checkbox');
        const isAnyInputSelected = Array.from(inputs8).some(input => input.checked);
        let qwerty8 = "" + otr8;
        if (sld8q1 !== '' && sld8q2 !== '' && sld8q3 !== '') {
            // swiper.slideNext();
            if (isAnyInputSelected || qwerty8.length !== 0) {
                swiper.slideNext();
            }
            else {
                alert("please select atleast one checkbox or enter your answer in others");
            }
        }
        else {
            alert("please fill the mandatory fields..")
        }
        if (sld8q1 === '') {
            // sld8q1.current.focus()
            sld8q1q.current.innerHTML = "please enter your answer"
            sld8q1q.current.style.color = "red";
            sld8q1q.current.style.marginTop = "-20%";
            // sld8q1q.current.style.marginBottom = "2%";
        } else {
            sld8q1q.current.innerHTML = ""
        }

        if (sld8q2 === '') {

            sld8q2q.current.innerHTML = "please enter your answer"
            sld8q2q.current.style.color = "red";
        } else {
            sld8q2q.current.innerHTML = ""
        }

        if (sld8q3 === '') {

            sld8q3q.current.innerHTML = "please enter your answer"
            sld8q3q.current.style.color = "red";
        } else {
            sld8q3q.current.innerHTML = ""
        }
    }

    return (
        <div >

            <Swiper
                allowTouchMove={false}
                spaceBetween={100}
                slidesPerView={1}
                onSwiper={setSwiper} // Set the Swiper instance in the state
            // className='swiper'
            >


                <SwiperSlide className='slide' >
                    <div className='slideDiv'>
                        <div className='money'>
                            <p className='its' >IT Services</p>
                            <span className='white'>Please select the <span className='yellow'>Expert’s</span></span><br />
                            <span className='yellow'>Needed</span><br />
                            <span className='white'>1 <span className='yellow'>/9</span></span>
                        </div>
                        {/* <label htmlFor="">
                                <input type="checkbox"  id='otherCheckBox1' onClick={() => setCount(count + 1)} />
                                <input type="text" id='other1' />
                            </label> */}

                        <div className='cash whitetext'>
                            <div className='mid'></div>
                            <div className='rightcontent'>
                                <label className='lbl117' htmlFor="cards111">
                                    <br /> <input
                                        id='cards111'
                                        className='inp6'
                                        type="radio"
                                        name="check1"
                                        value="An Idea"
                                        onChange={(e) => handleInputChange(e, 0)}
                                    />An Idea
                                </label>

                                <label className='lbl117' htmlFor="cards112">
                                    <br /> <input
                                        id='cards112'
                                        className='inp6'
                                        type="radio"
                                        name="check1"
                                        value="A ready functional specification"
                                        onChange={(e) => handleInputChange(e, 0)}
                                    />A ready functional specification
                                </label>
                                <label className='lbl117' htmlFor="cards113">
                                    <br /> <input
                                        id='cards113'
                                        className='inp6'
                                        type="radio"
                                        name="check1"
                                        value="An MVP"
                                        onChange={(e) => handleInputChange(e, 0)}
                                    />An MVP
                                </label><br />
                                <label className='lbl117' htmlFor="cards114">
                                    <br /> <input
                                        id='cards114'
                                        className='inp6'
                                        type="radio"
                                        name="check1"
                                        value="Active Development"
                                        onChange={(e) => handleInputChange(e, 0)}
                                    />Active development
                                </label>
                                <label className='lbl117' htmlFor="cards115">
                                    <br /> <input
                                        id='cards115'
                                        className='inp6'
                                        type="radio"
                                        name="check1"
                                        value="A product in need of improvement/evolution"
                                        onChange={(e) => handleInputChange(e, 0)}
                                    />A product in need of improvement/evolution
                                </label>

                                <br /> <button className="btn" onClick={()=>{
                                    goNext()
                                    scrollingTop()
                                }}>Next</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide id='slide2'>
                    <div className='slideDiv'>
                        <div className='money'>
                            <p className='its'>IT Services</p>
                            <span className='white'>What is your <span className='yellow'>Market?</span></span><br />
                            <span className='white'>2 <span className='yellow'>/9</span></span>
                        </div>
                        <div className='cash whitetext' >
                            <div className='mid'></div>
                            <div className='rightcontent'>
                                <label className='lbl117' htmlFor="cards116">
                                    <br /> <input id='cards116' className='inp6 check121 sld2checkbox' type="checkbox" name="check6" value="Web Development Services" onChange={(e) => handleInputChange(e, 1)} />Web Development Services
                                </label>
                                <label className='lbl117' htmlFor="cards117">
                                    <br /> <input id="cards117" className='inp6 sld2checkbox' type="checkbox" name="check8" value="Mobile Application Development" onChange={(e) => handleInputChange(e, 1)} />Mobile Application Development
                                </label>
                                <label className='lbl117' htmlFor="cards118">
                                    <br /> <input id="cards118" className='inp6 sld2checkbox' type="checkbox" name="check6" value="Testing Services" onChange={(e) => handleInputChange(e, 1)} />Testing Services
                                </label>
                                <label className='lbl117' htmlFor="cards119">
                                    <br /> <input id="cards119" className='inp6 sld2checkbox' type="checkbox" name="check8" value="Health Care Services" onChange={(e) => handleInputChange(e, 1)} />Health Care Services
                                </label>
                                <label className='lbl117' htmlFor="cards120">
                                    <br /> <input id='cards120' className='inp6 sld2checkbox' type="checkbox" name="check6" value="Content Writing and Moderation" onChange={(e) => handleInputChange(e, 1)} />Content Writing and Moderation
                                </label>
                                <label className='lbl117' htmlFor="cards121">
                                    <br /> <input id='cards121' className='inp6 sld2checkbox' type="checkbox" name="check8" value="Graphic Designing" onChange={(e) => handleInputChange(e, 1)} />Graphic Designing
                                </label>
                                <label className='lbl117' htmlFor="cards122">
                                    <br /> <input id='cards122' className='inp6 sld2checkbox' type="checkbox" name="check6" value="E-Commerce Projects" onChange={(e) => handleInputChange(e, 1)} />E-Commerce Projects
                                </label>
                                <label className='lbl117' htmlFor="cards123">
                                    <br /> <input id='cards123' className='inp6 sld2checkbox' type="checkbox" name="check8" value="Digital Marketing" onChange={(e) => handleInputChange(e, 1)} />Digital Marketing
                                </label><br />
                                <label className='lbl117' htmlFor="cards124">
                                    <br /> <input id='cards124' className='inp6 sld2checkbox' type="checkbox" name="check6" value="BPO Services" onChange={(e) => handleInputChange(e, 1)} />BPO Services
                                </label><br />
                                <label className='lbl117' htmlFor="cards125">
                                    <br /> <input id='cards125' className='inp6 sld2checkbox' type="checkbox" name="check8" value="Cyber Security" onChange={(e) => handleInputChange(e, 1)} />Cyber Security
                                </label><br />
                                <label className='lbl117' htmlFor="cards126">
                                    <br /> <input id='cards126' className='inp6 sld2checkbox' type="checkbox" name="check6" value="Cloud Managment" onChange={(e) => handleInputChange(e, 1)} />Cloud Managment
                                </label><br />

                                <label className='otrmartop' htmlFor="cards127">

                                    <input
                                        // ref={qwerty}
                                        id='cards127'
                                        className='inp6 otherspace'
                                        type="checkbox"
                                        checked={isChecked2}
                                        onChange={() => {
                                            setIsChecked2(!isChecked2);
                                            setIsInputVisible2(!isInputVisible2);
                                        }}
                                    /> Other :<span className='otherspace1'>__</span><br />

                                    {isInputVisible2 && (

                                        <textarea
                                            ref={textArea2Ref}
                                            rows={rows2}
                                            cols={cols2}
                                            onChange={(e) => {
                                                setOtr2(e.target.value);
                                            }}
                                            // ref={otr2q}
                                            className="otr117 sld2checkboxotr"
                                            type="text"
                                            placeholder="Type here.."
                                            id="ppp3"
                                        //   onChange={(e) => console.log(e.target.value)}
                                        />
                                    )} </label>
                                {/* <textarea rows="4" cols="50"></textarea> */}
                                {/* <span ref={otr2q}></span> */}
                                <br /><div className='CAP'> <button className="btn" onClick={goPrev}>Previous</button>
                                    <button className="btn" onClick={()=>{
                                        goNext2();
                                        scrollingTop();
                                    }}><span className='otherspace1'>__</span>Next<span className='otherspace1'>__</span></button></div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide id="slide3">
                    <div className='slideDiv'>
                        <div className='money'>
                            <p className='its'>IT Services</p>
                            <span className='white'>What services do  <span className='yellow'>you Need?</span></span><br />


                            <br /><span className='white'>3<span className='yellow'>/9</span></span>
                        </div>
                        <div className='cash whitetext' >
                            <div className='mid'></div>
                            <div className='rightcontent'>
                                <label className='lbl117' htmlFor="cards128">
                                    <br /> <input id='cards128' className='inp6 sld3checkbox' type="checkbox" name="check6" value="Product planning" onChange={(e) => handleInputChange(e, 2)} />Product planning
                                </label>
                                <label className='lbl117' htmlFor="cards129">
                                    <br /> <input id='cards129' className='inp6 sld3checkbox' type="checkbox" name="check8" value="UX research and design" onChange={(e) => handleInputChange(e, 2)} />UX research and design
                                </label><br />
                                <label className='lbl117' htmlFor="cards130">
                                    <br /> <input id='cards130' className='inp6 sld3checkbox' type="checkbox" name="check6" value="UI design" onChange={(e) => handleInputChange(e, 2)} />UI design
                                </label><br />
                                <label className='lbl117' htmlFor="cards131">
                                    <br /> <input id='cards131' className='inp6 sld3checkbox' type="checkbox" name="check8" value="Product architecture design/consulting" onChange={(e) => handleInputChange(e, 2)} />Product architecture design/consulting
                                </label>
                                <label className='lbl117' htmlFor="cards132">
                                    <br /> <input id='cards132' className='inp6 sld3checkbox' type="checkbox" name="check6" value="Product software development" onChange={(e) => handleInputChange(e, 2)} />Product software development
                                </label>
                                <label className='lbl117' htmlFor="cards133">
                                    <br /> <input id='cards133' className='inp6 sld3checkbox' type="checkbox" name="check8" value="Team augmentation" onChange={(e) => handleInputChange(e, 2)} />Team augmentation
                                </label>
                                <label className='lbl117' htmlFor="cards134">
                                    <br /> <input id='cards134' className='inp6 sld3checkbox' type="checkbox" name="check6" value="API development" onChange={(e) => handleInputChange(e, 2)} />API development
                                </label><br />
                                <label className='lbl117' htmlFor="cards135">
                                    <br /> <input id='cards135' className='inp6 sld3checkbox' type="checkbox" name="check8" value="Testing and QA" onChange={(e) => handleInputChange(e, 2)} />Testing and QA
                                </label>
                                <label className='otrmartop' htmlFor="cards136"  >

                                    <input
                                        // ref={qwerty}
                                        id='cards136'
                                        className='inp6 otherspace'
                                        type="checkbox"
                                        checked={isChecked3}
                                        onChange={() => {
                                            setIsChecked3(!isChecked3);
                                            setIsInputVisible3(!isInputVisible3);
                                        }}
                                    /> Other :<span className='otherspace1'>__</span>

                                    {isInputVisible3 && (
                                        <textarea
                                            ref={textArea3Ref}
                                            rows={rows3}
                                            cols={cols3}
                                            onChange={(e) => {
                                                setOtr3(e.target.value);
                                            }} // ref={otr2q}
                                            className="otr117 sld3checkboxotr"
                                            type="text"
                                            placeholder="Type here.."
                                        //   onChange={(e) => console.log(e.target.value)}
                                        />
                                    )} </label>
                                <br /><div className='CAP'><button className="btn" onClick={goPrev}>Previous</button>
                                    <button className="btn" onClick={()=>{
                                        goNext3();
                                        scrollingTop();
                                    }}><span className='otherspace1'>__</span>Next<span className='otherspace1'>__</span></button></div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide' id="slide4">
                    <div className='slideDiv'>
                        <div className='money'>
                            <p className='its'>IT Services</p>
                            <span className='white'>Which platform does your app <span className='yellow'>need to support?</span></span><br />

                            <span className='white'>4<span className='yellow'>/9</span></span>
                        </div>
                        <div className='cash whitetext' >
                            <div className='mid'></div>
                            <div className='rightcontent'>
                                <label className='lbl117' htmlFor="cards137">
                                    <br /> <input id='cards137' className='inp6 sld4checkbox' type="checkbox" name="check4" value="Web" onChange={(e) => handleInputChange(e, 3)} />Web
                                </label><br />
                                <label className='lbl117' htmlFor="cards138">
                                    <br /> <input id='cards138' className='inp6 sld4checkbox' type="checkbox" name="check4" value="Mobile" onChange={(e) => handleInputChange(e, 3)} />Mobile
                                </label><br />
                                <label className='lbl117' htmlFor="cards139">
                                    <br /> <input id='cards139' className='inp6 sld4checkbox' type="checkbox" name="check4" value="Desktop" onChange={(e) => handleInputChange(e, 3)} />Desktop
                                </label><br />
                                <label className='lbl117' htmlFor="cards140">
                                    <br /> <input id='cards140' className='inp6 sld4checkbox' type="checkbox" name="check4" value="IoT" onChange={(e) => handleInputChange(e, 3)} />IoT
                                </label>
                                <br />

                                <label className='otrmartop' htmlFor="cards141" >

                                    <input
                                        id='cards141'
                                        // ref={qwerty}
                                        className='inp6 otherspace'
                                        type="checkbox"
                                        checked={isChecked4}
                                        onChange={() => {
                                            setIsChecked4(!isChecked4);
                                            setIsInputVisible4(!isInputVisible4);
                                        }}
                                    /> Other :<span className='otherspace1'>__</span>

                                    {isInputVisible4 && (
                                        <textarea
                                            ref={textArea4Ref}
                                            rows={rows4}
                                            cols={cols4}
                                            onChange={(e) => {
                                                setOtr4(e.target.value);
                                            }}
                                            // ref={otr2q}
                                            className="otr117 sld4checkboxotr"
                                            type="text"
                                            placeholder="Type here.."
                                        //   onChange={(e) => console.log(e.target.value)}
                                        />
                                    )} </label>
                                <div className='CAP'>
                                    <button className="btn" onClick={goPrev}>Previous</button>
                                    <button className="btn" onClick={()=>{
                                        goNext4();
                                        scrollingTop();
                                    }}><span className='otherspace1'>__</span>Next<span className='otherspace1'>__</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide >
                <SwiperSlide className='slide'>
                    <div className='slideDiv'>
                        <div className='money'>
                            <label htmlFor="sld5inp"></label>
                            <p className='its'>IT Services</p>
                            <span className='white'>What is the idea behind </span><br />
                            <span className='yellow'>your product?</span><br />
                            <span className='white'>5<span className='yellow'>/9</span></span>
                        </div>

                        <div className='cash whitetext slide5' id="slide5">
                            <div className='mid'></div>
                            <div className='rightcontent'>
                                <textarea
                                    ref={textArea5Ref}
                                    rows={rows5}
                                    cols={cols5}
                                    onChange={(e) => {
                                        handleInputChange(e, 4);
                                        setOtr5(e.target.value);
                                    }} // ref={otr2q}
                                    id="sld5inp"
                                    className="inp6 othertext sld5text otr117"
                                    type="text"
                                    name="check5"
                                    placeholder="Please describe briefly"
                                //   onChange={(e) => console.log(e.target.value)}
                                />
                                {/* <input
                                
                                    className='inp6 othertext'
                                    type="text"
                                    name="check5"
                                    placeholder='Please describe briefly'
                                    onChange={(e) => handleInputChange(e, 4)}
                                    id='sld5inp'
                                /> */}

                                <br />
                                <div className='CAP'>
                                    <button className="btn" onClick={goPrev}>Previous</button>
                                    <button className="btn" onClick={()=>{
                                        goNext5();
                                        scrollingTop();
                                    }}><span className='otherspace1'>__</span>Next<span className='otherspace1'>__</span></button></div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide className='slide' id="slide6">
                    <div className='slideDiv'>
                        <div className='money'>
                            <p className='its'>IT Services</p>
                            <span className='white'>Does your product require any <span className='yellow'>advanced techs?</span></span><br />

                            <span className='white'>6<span className='yellow'>/9</span></span>
                        </div>
                        <div className='cash whitetext' >
                            <div className='mid'></div>
                            <div className='rightcontent'>
                                <label className='lbl117' htmlFor="cards150">
                                    <br /> <input
                                        id='cards150'
                                        className='inp6 sld6checkbox'
                                        type="radio"
                                        name="radio2"
                                        value="AL/ML"
                                        onChange={(e) => handleInputChange(e, 5)}
                                    />AI/ML
                                </label><br />
                                <label className='lbl117' htmlFor="cards151">
                                    <br /> <input
                                        id='cards151'
                                        className='inp6 sld6checkbox'
                                        type="radio"
                                        name="radio2"
                                        value="Blockchain"
                                        onChange={(e) => handleInputChange(e, 5)}
                                    />Blockchain
                                </label><br />
                                <label className='lbl117' htmlFor="cards152">
                                    <br /> <input
                                        id='cards152'
                                        className='inp6 sld6checkbox'
                                        type="radio"
                                        name="radio2"
                                        value="Virtual reality"
                                        onChange={(e) => handleInputChange(e, 5)}
                                    />Virtual reality
                                </label><br />
                                <label className='lbl117' htmlFor="cards153">
                                    <br /><input
                                        id='cards153'
                                        className='inp6 sld6checkbox'
                                        type="radio"
                                        name="radio2"
                                        value="Augmented reality"
                                        onChange={(e) => handleInputChange(e, 5)}
                                    />Augmented reality
                                </label>
                                <label className='otrmartop' htmlFor="cards154">

                                    <input
                                        id='cards154'
                                        // ref={qwerty}
                                        className='inp6 otherspace'
                                        type="radio"
                                        name="radio2"
                                        checked={isChecked6}
                                        onChange={() => {
                                            setIsChecked6(!isChecked6);
                                            setIsInputVisible6(!isInputVisible6);
                                        }}
                                    /> Other :<span className='otherspace1'>__</span>

                                    {isInputVisible6 && (
                                        <textarea
                                            ref={textArea6Ref}
                                            rows={rows6}
                                            cols={cols6}
                                            onChange={(e) => {
                                                setOtr6(e.target.value);
                                            }}
                                            // ref={otr2q}
                                            className="otr117 sld6checkboxotr"
                                            type="text"
                                            placeholder="Type here.."
                                        //   onChange={(e) => console.log(e.target.value)}
                                        />
                                    )} </label>
                                <br />
                                <div className='CAP'>
                                    <button className="btn" onClick={goPrev}>Previous</button>
                                    <button className="btn" onClick={()=>{
                                        goNext6();
                                        scrollingTop();
                                    }}><span className='otherspace1'>__</span>Next<span className='otherspace1'>__</span></button></div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='slide' >
                    <div className='slideDiv'>
                        <div className='money'>
                            <p className='its'>IT Services</p>
                            <span className='white'>Would you require any</span><br />
                            <span className='yellow'>integrations?</span><br />
                            <span className='white'>7<span className='yellow'>/9</span></span>
                        </div>

                        <div className='cash whitetext' id="sld7box">
                            <div className='mid'></div>
                            <div className='rightcontent'>

                                <label htmlFor="cards155s"> <input
                                    id='cards155s'
                                    className='inp6 sld7checkbox'
                                    type="radio"
                                    name="qwerty"
                                    value="No"
                                    onChange={(e) => handleInputChange(e, 6)}
                                /> NO, I wouldn't</label><br />
                                <label htmlFor="cards1566" className='otrmartop' >

                                    <input
                                        id="cards1566"
                                        // ref={qwerty}
                                        className='inp6 otherspace'
                                        type="radio"
                                        name="qwerty"
                                        checked={isChecked7}
                                        onChange={() => {
                                            setIsChecked7(!isChecked7);
                                            setIsInputVisible7(!isInputVisible7);
                                        }}
                                    /> Other: <span className='otherspace1'>__</span>

                                    {isInputVisible7 && (
                                        <textarea
                                            id="cards155s"
                                            ref={textArea7Ref}
                                            rows={rows7}
                                            cols={cols7}
                                            onChange={(e) => {
                                                handleInputChange(e, 6);
                                                setOtr7(e.target.value);
                                            }}
                                            // ref={otr2q}
                                            className="otr117 sld7checkboxotr"
                                            type="text"
                                            placeholder="Type here.."
                                        //   onChange={(e) => console.log(e.target.value)}
                                        />
                                        //    <input 
                                        //    id='cards155s'
                                        // //    onChange={(e) => setOtr7(e.target.value)}
                                        // onChange={(e) => {handleInputChange(e, 6); setOtr7(e.target.value)}}
                                        //    // ref={otr2}
                                        //    className='otr117 sld3checkboxotr'
                                        //      type="text" 
                                        //      placeholder="here.."
                                        //      name='qwerty'
                                        //    //   onChange={(e) => console.log(e.target.value)} // Example of functionality, logging input value
                                        //    />
                                    )} </label>
                                <div className='CAP'>
                                    <button className="btn" onClick={goPrev}>Previous</button>
                                    <button className="btn" onClick={()=>{
                                        goNext7();
                                        scrollingTop();
                                    }}><span className='otherspace1'>__</span>Next<span className='otherspace1'>__</span></button></div>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide' >
                    <div className='slideDiv'>
                        <div className='money'>
                            <p className='its'>IT Services </p>
                            <span className='white'>Organizational <span className='yellow'>questions</span></span><br />

                            <span className='white'>8 <span className='yellow'>/9</span><br /></span><br />
                            {/* <div className='inp6 whitetext'><br />
                            </div> */}
                        </div>
                        <div className='cash whitetext' id='casher'>
                            <div className='mid'></div>
                            <div className='rightcontent' id='sld8rightContent'>
                                <label className='lbl118' htmlFor="sld8q1">Whats your company type?
                                    <br />
                                    <textarea
                                        id="sld8q1"
                                        ref={textArea8q1Ref}
                                        rows={rows8q1}
                                        cols={cols8q1}
                                        onChange={(e) => {
                                            {setSld8q1(e.target.value)};
                                            if(textArea8q1Ref.current.value !== ""){
                                                sld8q1q.current.innerText = ""
                                            }
                                            else{
                                                sld8q1q.current.innerText = "please enter your answer"
                                            }
                                        }} // ref={otr2q}
                                        className="inp6 sld8q otr117"
                                        type="text"
                                        placeholder="Enterprice"
                                    //   onChange={(e) => console.log(e.target.value)}
                                  
                                    />
                                    {/* <input
                                    // ref={sld8q1}

                                    className='inp6 othertext'
                                    type="text"
                                    name="check5"
                                    placeholder='Enterprise'
                                    onChange={(e) => setSld8q1(e.target.value)}
                                    id='sld5inp'
                                /> */}

                                    <br />  <span ref={sld8q1q}></span>
                                </label>

                                <br />
                                <label className='lbl118' htmlFor="sld8q2">Do you have a deadline for your project?
                                    <textarea
                                        id="sld8q2"
                                        ref={textArea8q2Ref}
                                        rows={rows8q2}
                                        cols={cols8q2}
                                        onChange={(e) => {
                                            setSld8q2(e.target.value);
                                            if(textArea8q2Ref.current.value !== ""){
                                                sld8q2q.current.innerText = ""
                                            }
                                            else{
                                                sld8q2q.current.innerText = "please enter your answer"
                                            }
                                        }} // ref={otr2q}
                                        className="inp6 sld8q otr117"
                                        type="text"
                                        placeholder="Enterprice"
                                    //   onChange={(e) => console.log(e.target.value)}
                                    />{" "} <br /><span ref={sld8q2q}></span>
                                </label>

                                <br />
                                <label className='lbl118' htmlFor="sld8q3">Do you have any budget limits? If  yes, please, specify the range.
                                    <textarea
                                        id="sld8q3"
                                        ref={textArea8q3Ref}
                                        rows={rows8q3}
                                        cols={cols8q3}
                                        onChange={(e) => {
                                            setSld8q3(e.target.value);
                                            if(textArea8q3Ref.current.value !== ""){
                                                sld8q3q.current.innerText = ""
                                            }
                                            else{
                                                sld8q3q.current.innerText = "please enter your answer"
                                            }
                                        }} // ref={otr2q}
                                        className="inp6 sld8q otr117"
                                        type="text"
                                        placeholder="Type here.."
                                    //   onChange={(e) => console.log(e.target.value)}
                                    /><br></br> <span ref={sld8q3q}></span>
                                </label>

                                <br />
                                <b>Define top 3 priorities for choosing a partner to work with</b><br /><br />
                                <div id='sld8checkbox'>
                                    <label htmlFor="cards160" className='lbl117'> <input id="cards160" className='inp6 sld8checkbox' type="checkbox" value="Cost of work" onChange={(e) => handleInputChange(e, 7)} />Cost of work</label><br />
                                    <label htmlFor="cards161" className='lbl117'> <input id="cards161" className='inp6 sld8checkbox' type="checkbox" value="Quality of work" onChange={(e) => handleInputChange(e, 7)} />Quality of work</label><br />
                                    <label htmlFor="cards162" className='lbl117'><input id="cards162" className='inp6 sld8checkbox' type="checkbox" value="Speed of work" onChange={(e) => handleInputChange(e, 7)} />Speed of work</label><br />
                                    <label htmlFor="cards163" className='lbl117'><input id="cards163" className='inp6 sld8checkbox' type="checkbox" value="Stick to timelines" onChange={(e) => handleInputChange(e, 7)} />Stick to timelines</label><br />
                                    <label htmlFor="cards164" className='lbl117'><input id="cards164" className='inp6 sld8checkbox' type="checkbox" value="Robust processes" onChange={(e) => handleInputChange(e, 7)} />Robust processes</label><br />
                                    <label htmlFor="cards165" className='lbl117'><input id="cards165" className='inp6 sld8checkbox' type="checkbox" value="Tranparency in collaboration" onChange={(e) => handleInputChange(e, 7)} />Tranparency in collaboration</label><br />
                                    <label htmlFor="cards166" className='lbl117'><input id="cards166" className='inp6 sld8checkbox' type="checkbox" value="Proven by testimonials expertise" onChange={(e) => handleInputChange(e, 7)} />Proven by testimonials expertise</label><br />
                                    <label htmlFor="cards167" className='otrmartop' >

                                        <input
                                            id='cards167'
                                            className='inp6 otherspace'
                                            type="checkbox"
                                            checked={isChecked8}
                                            onChange={() => {
                                                setIsChecked8(!isChecked8);
                                                setIsInputVisible8(!isInputVisible8);
                                            }}
                                        /> Other :<span className='otherspace1'>__</span>

                                        {isInputVisible8 && (
                                            //    <input 
                                            // //    ref={otr8}
                                            // onChange={(e) => setOtr8(e.target.value)}
                                            //    className='otr117'
                                            //      type="text" 
                                            //      placeholder="here.."
                                            //    //   onChange={(e) => console.log(e.target.value)} // Example of functionality, logging input value
                                            //    />
                                            <textarea
                                                ref={textArea8Ref}
                                                rows={rows8}
                                                cols={cols8}
                                                onChange={(e) => {
                                                    setOtr8(e.target.value);
                                                }} // ref={otr2q}
                                                className="otr117 sld8checkboxotr"
                                                type="text"
                                                placeholder="Type here.."
                                            //   onChange={(e) => console.log(e.target.value)}
                                            />
                                        )} </label>
                                </div>
                                <div className='CAP'>
                                    <button className='btn' onClick={goPrev}>Previous</button>
                                    <button className='btn' onClick={()=>{
                                        goNext8();
                                        scrollingTop();
                                    }}><span className='otherspace1'>__</span>Next<span className='otherspace1'>__</span></button>
                                </div>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='slide'>
                    <div className='slideDiv'>
                        <div className='money' >
                            <p className='its'>IT Services</p>
                            <span className='white'>Contact </span><span className='yellow'>Form</span>
                            <br />
                            <span className='white'>9<span className='yellow'>/9</span></span>
                        </div>

                        <div className='cash whitetext' id="sld9box">
                            <div className='mid'></div>
                            <div className='rightcontent' id='sld9box'>
                                <label htmlFor="sld9name"><span>Name </span> </label>
                                <br />
                                <input
                                    id='sld9name'
                                    className='inp6 other slide5 otr117'
                                    type="text"
                                    name="check5"
                                    placeholder='YourName'
                                    onChange={(e) => handleInputChange(e, 8)}
                                    ref={sld9NameRef}
                                />

                                <br />
                                <label htmlFor="sld9mail"><span>Corporate mail </span> </label>
                                <br /> <input
                                    id='sld9mail'
                                    className='inp6 other slide5 otr117'
                                    required
                                    type="text"
                                    name="check5"
                                    placeholder='Enter your mail..'
                                    onChange={handleChangem}
                                    ref={emailInputRef}
                                />
                                <br />

                                <div id='verificationContainer'>
                                    <button id="requestOtpButton" ref={sendButtonInputRef} onClick={() => {
                                        // if (!emailInputRef.current.value.includes("@") && emailInputRef.current.value.endsWith("gmail.com") && !emailInputRef.current.value.endsWith(".com")) {
                                        //     alert("please enter corporate email to send otp request");
                                        // } else {
                                        //     sendOtp();
                                        // }
                                        if(emailInputRef.current.value.length === 0 || emailInputRef.current.value.endsWith("gmail.com") || !emailInputRef.current.value.endsWith(".com")|| !emailInputRef.current.value.includes("@")||emailInputRef.current.value.endsWith("@.com")){
                                            alert("Please enter a valid corporate email and continue ");
                                        }
                                        else{
                                            sendOtp();
                                        }
                                    
                                    }}>Req-Otp</button>
                                    <input type='number' id='otpInputField' ref={verifyOtpInputRef} maxLength={4} onChange={(event) => {
                                        verifyOtpInputRef.current.value = event.target.value.slice(0, 4);
                                    }}></input>
                                    <button id='verificationButton' ref={verifyButton} onClick={() => {
                                         if(emailInputRef.current.value.length === 0 || emailInputRef.current.value.endsWith("gmail.com") || !emailInputRef.current.value.endsWith(".com")|| !emailInputRef.current.value.includes("@")||emailInputRef.current.value.endsWith("@.com")){
                                            // alert("Please enter a valid corporate email and continue ");
                                        }
                                        else{
                                            verifyOtp();
                                        }
                                        // verifyOtp();
                                    }}>Verify</button>

                                </div>

                                <div className='CAP'>
                                    <button className='btn' onClick={goPrev}>Previous</button>
                                    <button className='btn' onClick={handleFormSubmit}><span className='otherspace1'>__</span>Next<span className='otherspace1'>__</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide
                    // id='lastSlide'
                    // className='slide'
                    id='sld10'
                >
                    <div
                        id='sld10Div'
                    // className='slideDiv'
                    //  id='lastSlideDiv' 
                    >
                        <div id='finaloutdata'>
                            <div id='sldInfo'>
                                <h6 className='goldenrod10' id='sld10paddingtop'>Your Requirement</h6>
                                <br />
                                <p className='yellow10'>Please select the Expert’s Needed</p>
                                <p className='sldAns' id='sld10q1'></p>


                                <p className='yellow10'>What is your Market?</p>
                                <p className='sldAns' id='sld10q2'></p>
                                <p className='sldAns' id='sld10q2otrout'></p>


                                <p className='yellow10'>What services do you Need?</p>
                                <p className='sldAns' id='sld10q3'></p>
                                <p className='sldAns' id='sld10q3otrout'></p>


                                <p className='yellow10'>Which platform does your app need to support?</p>
                                <p className='sldAns' id='sld10q4'></p>
                                <p className='sldAns' id='sld10q4otrout'></p>

                                <p className='yellow10'>What is the idea behind your product?</p>
                                <p className='sldAns' id='sld10q5'></p>

                                <p className='yellow10'>Does your product require any advanced techs?</p>
                                <p className='sldAns' id='sld10q6'></p>
                                {/* <span className='sldAns' id='sld10q6otrout'></span><br /> */}

                                <p className='yellow10'>Would you require any integrations?</p>
                                <p className='sldAns' id='sld10q7'></p>
                                <p className='sldAns' id='sld10q7otrout'></p>

                                <p className='goldenrod11'>Organizational questions</p>  {/* slide 8  */}
                                {/* <p className='sldAns' id='sld10q8'></p> */}

                                <p className='yellow10'>Whats your company type?</p>   {/* slide 8 Q1 */}
                                <p className='sldAns' id='sld10q8a1'></p>

                                <p className='yellow10'>Do you have adeadline for your project?</p>        {/* slide 8 Q2 */}
                                <p className='sldAns' id='sld10q8a2'></p>

                                <p className='yellow10'>Do you have any budget limits? If  yes, please, specify the range</p>        {/* slide 8 Q3 */}
                                <p className='sldAns' id='sld10q8a3'></p>

                                <p className='yellow10'>Define top 3 priorities for choosing a partner to work wit</p>          {/* slide 8 Q4 */}
                                <p className='sldAns' id='sld10q8a4'></p>
                                <p className='sldAns' id='sld10q8a4otrout'></p>


                            </div>
                            <div>  
                                <button className='btn' onClick={goPrev} style={{ position: "static", top: "100px" }} >Previous</button>

                                {/* </div> */}
                                {/* <div className='cash whitetext'> */}
                                {/* <div className='money'> */}
                                {/* <p className='its'>IT Services</p> */}
                                {/* <span className='white'>Thanks! We ‘ll be back with the estimate <span className='yellow'>within 24 hours!</span></span> */}
                                {/* <span className='white'>Meanwhile, check our research for <span className='yellow'>average development rates</span></span> */}
                                {/* <br /><br /> <span className='white'>All the records will be save after click on submit button</span> */}

                                {/* </div> */}
                                {/* </div> */}
                                {/* <div className='cash whitetext'> */}
                                {/* <div className='mid'></div> */}
                                {/* <span><img src={ok} alt="" /></span> */}


                                {/* <div className='rightcontent'> */}
                                {/* <div> */}
                                <form id="formDetails" action="https://api.web3forms.com/submit" method="POST" type='submit'>
                                    <input type="hidden" name="access_key" value="022648fc-f0d0-42ce-b08d-d18131fba2c5"></input>
                                    {/* <button className='btn' onClick={goPrev}>Previous</button>
                                    <button className='btn'>Submit</button> */}
                                     <button className='btn'  style={{ position: "static", top:"10%", left:"300px",marginTop:"-56px", marginLeft:"150px" }}><span style={{opacity:"0"}}>_</span>Submit<span style={{opacity:"0"}}>_</span></button>
                                   
 
                                    <input type="text" id="input1" style={{ visibility: "hidden" }} name="Please_select_the_Experts_Needed" value={formData.slide1} />
                                    <input type="text" id="input2" style={{ visibility: "hidden" }} name="What_is_your_Market" value={formData.slide2+", "+otr2} />
                                    <input type="text" id="input3" style={{ visibility: "hidden" }} name="What_services_do_you_Need" value={formData.slide3+", "+otr3} />
                                    <input type="text" id="input4" style={{ visibility: "hidden" }} name="Which_platform_does_your_app_need_to_support" value={formData.slide4+", "+otr4} />
                                    <input type="text" id="input5" style={{ visibility: "hidden" }} name="What_is_the_idea_behind_your_product" value={formData.slide5} />
                                    <input type="text" id="input6" style={{ visibility: "hidden" }} name="Does_your_product_require_any_advanced_techs" value={formData.slide6+", "+otr6} />
                                    <input type="text" id="input7" style={{ visibility: "hidden" }} name="Would_you_require_any_integrations" value={formData.slide7+", "+otr7} />
                                    {/* <input type="text" id="input8" style={{ visibility: "hidden" }} name="Organizational_questions" value={formData.slide8+", "+sld8q1+", "+sld8q2+", "+sld8q3+", "+otr8} /> */}
                                    <input type="text" id="input8" style={{ visibility: "hidden" }} name="Organizational_questions" value={formData.slide8}/>
                                    <input type="text" id="input81" style={{ visibility: "hidden" }} name="Whats your company type?" value={sld8q1}/>
                                    <input type="text" id="input82" style={{ visibility: "hidden" }} name="Do you have adeadline for your project" value={sld8q2}/>
                                    <input type="text" id="input83" style={{ visibility: "hidden" }} name="Do you have any budget limits? If  yes, please, specify the range." value={sld8q3}/>
                                    <input type="text" id="input9" style={{ visibility: "hidden" }} name="Contact_Form_Person_name" value={formData.slide9} />
                                   
                                     {/* <button className='btn' id='finalsubmitbutton' style={{}}>Submit</button> */}
                                   
 
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                    {/* </div> */}

                </SwiperSlide>


            </Swiper>

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

export default Expert;


