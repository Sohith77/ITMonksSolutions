import React from "react";
import Footer from "../../Footer/Footer/Blackfooter";
import ResNavbar from "../../Navbar/ResNavbar";
import ImsHome from "./ImsHome";
import OurCulturalCode from "./OurCulturalCode";
import Ourclients from "./Ourclients";
import WhyWeChooseUs from "./body_component";
import IndustrySector from "./IndustrySector"


function AboutUsBody() {
  return (
    <>
      <ResNavbar />
      <ImsHome />
      <OurCulturalCode />
      <WhyWeChooseUs />
       <IndustrySector/>
      <Ourclients />
      <Footer />
    </>
  )
}
export default AboutUsBody;