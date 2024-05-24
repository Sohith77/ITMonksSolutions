import React, { useState, useEffect } from "react";
import "../Pricing/Pricing.css"
import { useNavigate } from 'react-router';
import Price from "./PricingComponents/Price";
import ResNavbar from "../../Navbar/ResNavbar";
import Footer from "../../Footer/Footer/Blackfooter";

function Pricing() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [k, setK] = useState();
    const handleRadioChange = (event) => { 

        const value = event.target.value;
        if (k === value) {
            setK('');
        } else {
            setK(value);
        }
    };
    const navigate = useNavigate()
    return (
        <>
            <ResNavbar />
            <Price />
                    <div className="ladder">
                        <div>
                        <p className="rope">Free analysis and estimation for our project</p>
                        <h2 className="Para" style={{ paddingLeft: "25px" }}>What do you want a <span className="quote2" >quote</span><br /> for?</h2>
                        </div>

                    
                        <div id="radioItems">
                            <div className="button06">
                              <label htmlFor="k1"> <input type="radio" className="yo" id="k1"
                                    value="IT Services"
                                    checked={k === 'IT Services'}
                                    onChange={handleRadioChange}
                                    name="k" />IT Services</label> 
                            </div>
                            <div className="button06">
                            <label htmlFor="k3"> <input type="radio" className="yo"  id="k3"
                                    value="HR Services"
                                    checked={k === 'HR Services'}
                                    onChange={handleRadioChange}
                                    name="k" />HR Services</label>
                    
                            </div>
                            <div className="button06">
                            <label htmlFor="k2">  <input type="radio" className="yo" id="k2"
                                    value="Payroll Management"
                                    checked={k === 'Payroll Management'}
                                    onChange={handleRadioChange}
                                    name="k" />Payroll Management</label> 
                            </div>
                            
                        <button className="next" disabled={!k} onClick={() => {
                            navigate("/CardsPage")
                        }}>NEXT</button>
                          </div>
                    </div>
                    <br></br><br></br>
            <Footer />
        </>
    )
}
export default Pricing;