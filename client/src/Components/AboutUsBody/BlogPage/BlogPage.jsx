import React, { useEffect } from "react";
import Footer from "../../Footer/Footer/Blackfooter";
import ResNavbar from "../../Navbar/ResNavbar";
import Ourclientssays from "../BlogPage/Ourclientssays";
import WhoWeAre from "../BlogPage/WhoWeAre";
import { MyComponent, NewComp, SecondComponent } from "../BlogPage/ourTeamMDDetailsPage";


function BlogPage(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <>
        <ResNavbar/>
        <WhoWeAre/>
        <SecondComponent/>
        <div style={{height:"10px"}}></div>
        <NewComp/>
        <div style={{height:"10px"}}></div>
        <MyComponent/>
        <Ourclientssays/>
        <Footer/>
        </>
    )}
    export default BlogPage;