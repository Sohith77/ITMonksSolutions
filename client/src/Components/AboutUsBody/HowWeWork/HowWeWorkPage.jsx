import React from "react";
import Footer from "../../Footer/Footer/Blackfooter";
import ResNavbar from "../../Navbar/ResNavbar";
import HowWeWork from "./Howwework";
import ProjectOrganization from "./ProjectOrganization";
import Development from "./SoftwareDevelopment";
import ToolsAndKnowledge from "./Toolsandknowledge";
import OurProjects from "./ourprojects";

function HowWeWorkPage(){
    return(
        <>
        <ResNavbar/>
        <HowWeWork/>
        <OurProjects/>
        <ProjectOrganization/>
        <Development/>
        <ToolsAndKnowledge/>
        <Footer/>
        </>
    )
}
export default HowWeWorkPage;