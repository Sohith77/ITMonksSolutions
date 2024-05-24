import React from "react";
import AboutUsBody from "./Components/AboutUsBody/AboutUsPage/AboutUsBody";

import { Route, Routes } from "react-router-dom";
// import Popup from "../src/Components/POPUP/popup";
import FillForm from '../src/Components/content/FillForm/forms';
import Apply from '../src/Components/content/apply/apply';
import Complete from '../src/Components/content/complete/complete';
import SignIn from '../src/Components/content/login/login';
import Register from '../src/Components/content/login/register';
import BlogPage from "./Components/AboutUsBody/BlogPage/BlogPage";
import HowWeWorkPage from "./Components/AboutUsBody/HowWeWork/HowWeWorkPage";
import OurTeam from "./Components/AboutUsBody/OurTeam/ourteam";
// import { PricingBody } from "./Components/AboutUsBody/Pricing/PricingBody";
import Careers from "./Components/content/career/career";
import Pricing from "./Components/AboutUsBody/Pricing/Pricing";
import CardsPage from "../src/Components/AboutUsBody/Pricing/PricingCardsComponents";
import ResNavbar from "./Components/Navbar/ResNavbar";
import ContactUs from "../src/Components/AboutUsBody/ContactUs/contactPage"
import First from "../src/Components/calender/CalenderFirst"
import Second from "../src/Components/calender/InfoYourCalendar"; 
import Third from "../src/Components/calender/LastComponent";
import Applicationtracker from "../src/Components/AboutUsBody/Applicationtracker/SatishProductManager"
import HomeComponent from "./Components/Home/HomeComponent";
import ECommerce from "../src/Components/Services/E-Commerce";
import Healthcare from "../src/Components/Services/HealthCareServices";
import HRServices from "../src/Components/Services/HRServices";
import MobileApplication from "../src/Components/Services/MoblieApplicationDev";
import Nonit from "../src/Components/Services/Non-It";
import Testing from "../src/Components/Services/testing";
import WebDesign from "../src/Components/Services/WebDesignAndDevelopment"
import Graphic from "../src/Components/Services/graphicdesigning"
import Contentwrite from "../src/Components/Services/contentwriting"
import DigitalMarketing from "../src/Components/Services/Digitalmarketing1"
function App() {
  return (
    <>
      <ResNavbar/>
      <Routes>
        <Route path="/AboutUs" element={<AboutUsBody />}></Route>
        <Route path="/careers" element={<Careers />}></Route>
        <Route path="/signIn" element={<SignIn/>}></Route>
        <Route path="/FillForm" element={<FillForm/>}></Route>
        <Route path="/jobId" element={<Apply />} />
        <Route path="/complete" element={<Complete />} />  
        <Route path="/register" element={<Register/>}></Route> 
        {/* <Route path="/popUp" element={<Popup/>}></Route> */}
        <Route path="/CardsPage" element={<CardsPage/>}></Route>


        <Route path="/About Us" element={<AboutUsBody />}></Route>
        <Route path="/Our Team" element={<OurTeam/>}></Route>
        <Route path="/How We Work" element={<HowWeWorkPage/>}></Route>
        <Route path="/Project Pricing" element={<Pricing/>}></Route>
        <Route path="/BlogPage" element={<BlogPage/>}></Route>
        <Route path="/Contact Us" element={<ContactUs/>}></Route>
        <Route path="/firstCalender" element={<First/>}></Route> 
        <Route path="/secondCalender" element={<Second/>}></Route> 
        <Route path="/thirdCalender" element={<Third/>}></Route>
        <Route path="/tracker" element={<Applicationtracker/>}></Route>
        <Route path="/" element={<HomeComponent/>}></Route>

        <Route path="/E-Commerce" element={<ECommerce/>}></Route>
        <Route path="/Health Care Services" element={<Healthcare/>}></Route>
        <Route path="/HR Services" element={<HRServices/>}></Route>
        <Route path="/Mobile Application Development" element={<MobileApplication/>}></Route>
        <Route path="/Non-IT Services" element={<Nonit/>}></Route>
        <Route path="/Testing Services" element={<Testing/>}></Route>
        {/* <Route path="/Web Design And Development " element={<WebDesign/>}></Route> */}
        <Route path="/Web Design And Development" element={<WebDesign/>}></Route>
        <Route path="/Graphic Designing" element={<Graphic/>}></Route>
        <Route path="/Content Writing And Moderation" element={<Contentwrite/>}></Route>
        <Route path="/Digital Marketing" element={<DigitalMarketing/>}></Route>
      </Routes> 
      
    </>
  );
}

export default App;
