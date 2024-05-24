import React from 'react'
import FocusServices from "../Home/focusServices"
import FeedBack from '../Home/feedback';
import Pagetwo from "../Home/pagetwo"
import Pageone from "../Home/pageone"
import ResNavbar from '../Navbar/ResNavbar';
import TeamMembers from "../Home/teamMembers"
import Premium from "../Home/premium-services"
import Footer from "../Footer/Footer/Blackfooter";
const HomeComponent = () => {
  return (
    <div>
      <ResNavbar/>
      
      <Pagetwo/>
      <Pageone/>
       <FocusServices/>
       <Premium/>
       <TeamMembers/>
       <FeedBack/> 
       <Footer/>
       

    </div>
  )
}

export default HomeComponent
