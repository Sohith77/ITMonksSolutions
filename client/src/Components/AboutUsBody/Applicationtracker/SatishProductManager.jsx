import React from 'react'
import image from "../../Photos/developer.jpeg"
import './SatishProductManager.css'
import Footer from '../../Footer/Footer/Blackfooter'
function SatishProductManager() {
    return (
        <div id='forCentering'>
            <div id="mainContainer">

                <div id="applicationDetailsDiv">Applicant Details</div>

                <div id='twoCardsDiv'>

                    <div id="leftCard">

                        <div id="imageWithName">
                            <div id="userImage"></div>
                            <div id="userDetails">
                                <h3>Satish G</h3>
                                <h5>BackEnd Developer</h5>
                                <h5>4 *</h5>
                            </div>
                        </div>

                        <div id='appliedJobCard'>
                            <div id='appliedJobHead'>
                                <h6>Applied Job</h6>
                                <h6>2 Days Ago</h6>
                            </div>

                            <div id='blackLine'></div>

                            <h5>Backend-Developer</h5>
                            
                        </div>
                        <div id='blackLine'></div>
                          
                        <div id='interviewStage'>

                            <div id='interviewStageHead'>
                                <h5>Stage</h5>
                                <h5>Interview</h5>
                            </div>

                            <div id='levelGrading'>
                                <div className='points'></div>
                                <div className='points'></div>
                                <div className='points'></div>
                                <div className='points'></div>
                            </div>

                        </div>
                        <div id='blackLine'></div>

                        <div id='schedulingInterview'>
                            <div id='bookInterview'>Schedule Interview</div>
                            <div id='msgDiv'></div>
                        </div>

                        <div id='contactCard'>
                            <h3>Contact</h3>
                            <h6>Email : satishdeveloper@gmail.com</h6>
                            <h6>Phone : 9666869969</h6>
                        </div>
                    </div>




                    <div id="rightCard">

                        <div id='buttonComponents'>
                            <button className='buttonComponentsCss'>Applicant Profile</button>
                            <button className='buttonComponentsCss'>Hiring Process</button>
                            <button className='buttonComponentsCss'>Interview Schedule</button>
                        </div>

                        <div id='userContactDetails'>

                            <div id="imageWithName">
                                <div id="userImage"></div>
                                <div id="userDetails">
                                    <h3>Satish G</h3>
                                    <h5>BackEnd Developer</h5>
                                    <h5>4 *</h5>
                                </div>
                            </div>

                            <div id='contact'>
                                <h2 style={{ marginBottom: "6px" }}>Contact</h2>
                                <h6>Email : satishdeveloper@gmail.com</h6>
                                <h6>Phone : 9666869969</h6>
                                <h6>LinkidIn : Satish1999</h6>
                                <h6>Instagram : satish.rocks</h6>
                            </div>

                        </div>


                        <div id='skillsDiv'>

                            <div id='skillsHead'>Skills</div>

                            <div id='skillsContent'>
                                <h4>java</h4>
                                <h4>python</h4>
                                <h4>html</h4>
                                <h4>css</h4>
                                <h4>javaScript</h4>
                                <h4>.net</h4>
                                <h4>php</h4>
                                <h4>node js</h4>
                                <h4>express js</h4>
                                <h4>mongo Db</h4>
                                <h4>sql</h4>
                                <h4>Go</h4>
                            </div>
                        </div>

                        <div id='line'></div>

                        <div id='experienceDiv'>

                            <div id='experienceHead'>Experience</div>

                            <div id='experienceContent'>
                                <h4>TCS</h4>
                                <h4>2 Years</h4>
                                <h4>Backend-Developer</h4>
                                <h4>2020-2023</h4>
                            </div>

                        </div>

                        <div id='line'></div>

                        <div id='hiringProcessDiv'>

                            <div id='hiringProcessHead'>
                                <div id='currentStage'>Current Stage</div>
                                <div id='ratingDiv'>Give Rating</div>
                            </div>

                            <div id='hiringButtonsContainer'>
                                <div className='hiringButtons'>In review</div>
                                <div className='hiringButtons'>Short-Listed</div>
                                <div className='hiringButtons'>Interview</div>
                                <div className='hiringButtons'>Hired/Diclined</div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>

    )
    
}
<Footer/>

export default SatishProductManager
