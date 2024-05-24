import React, { useEffect, useRef } from 'react'
import "../AboutUsPage/imsHome.css"
import CountUp from 'react-countup';


function ImsHome() {

    return (

        <div className="wholeDiv1">
            {/* <div style={{ height: "330px", width: "100" }}> */}


                <h1 className='imsHeader'>About IMS</h1>
                <div className="imsBody">


                    <div className="firstdiv hello78">


                        <div className="hello3" style={{ color: "goldenRod" }} >

                            <h1 className='hello4'><CountUp start={0} end={78} duration={10.98}></CountUp></h1>
                        </div>
                        <div className="hello3desc">
                            Satisfaction Rate
                        </div>
                    </div>

                    <div className="firstdiv  hello77">

                        <div className="hello3" style={{ color: "goldenRod" }} >
                            <h1 className='hello4'><CountUp start={0} end={45} duration={10.98}></CountUp></h1>


                        </div>
                        <div className="hello3desc1" >
                            Successful Projects
                        </div>
                    </div>

                    <div className="firstdiv  hello66">

                        <div className="hello3" style={{ color: "goldenRod" }} >
                            <h1 className='hello4'><CountUp start={0} end={14} duration={10.98}></CountUp>+</h1>

                        </div>
                        <div className="hello3desc">
                            Countries
                        </div>
                    </div>


                    <div className="firstdiv hello55">

                        <div className="hello3" style={{ color: "goldenRod" }} id='sixthclass'>
                            <h1 className='hello4'><CountUp start={0} end={9} duration={10.98}></CountUp></h1>

                        </div>
                        <div className="hello3desc">
                            Years on
                            Market
                        </div>
                    </div>


                </div>



            {/* </div> */}
        </div>
    )
}

export default ImsHome;