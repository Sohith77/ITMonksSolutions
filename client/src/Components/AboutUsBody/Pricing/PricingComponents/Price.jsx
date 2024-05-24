import React from 'react'
import Pric from '../../../Photos/Price.png';
// import "./ResNavbar.css";
import './Pricing2.css'
function Price() {
  return (
  <>
  <div>
  </div>
  <div style={{marginTop:"95px"}}>
    <div style={{display:"flex", flexDirection:"column" ,justifyContent:"center", alignItems:"center", backgroundColor:"black", padding:"3%"}}>
    <h1 style={{color:"white"}}>How Much Will Your <span style={{color:"goldenrod"}}>Project Cost ?</span></h1>
  <p style={{color:"white"}}>
    Fill in the form below to share the project details and get its deep analysis and estimation from our team
  </p>

    </div>
 

      <img className ="ant"src ={Pric} alt='ok'/>
  </div>
</>
  )
}
export default Price;