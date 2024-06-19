import React, { useEffect } from "react"
import "./pagetwo.css";
import hero1 from "../Photos/hero-1.jpg";
import hero2 from "../Photos/hero-2.jpg";
import hero3 from "../Photos/hero-3.jpg";

const Slide = () => {
    return (
        <div id="carouselExampleControls" class="carousel slide explore-carousel" data-bs-ride="carousel" >
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img id="scroll" src={hero1} class="d-block w-100" alt="..." />
                    <div className="hello col-12 col-md-12">
                        <div className="animi">
                            <h3 className=" Our " > 5m+ Trusted  Our Clients</h3>
                        </div>
                        <div className="animi1">
                            <h1 className="expertise"> Empower Your business Journey with it Expertise</h1>
                        </div>
                        {/* <button className="Explore" id="exploreBtnId">Explore Our Service</button> */}
                    </div>
                </div>
                <div class="carousel-item">
                    <img id="scroll" src={hero2} class="d-block w-100" alt="..." />
                    <div className="hello col-12 col-md-12">
                        <div className="animi">
                            <h3 className=" Our " > 5m+ Trusted  Our Clients</h3>
                        </div>
                        <div className="animi1">
                            <h1 className="expertise"> Empower Your business Journey with it Expertise</h1>
                        </div>
                        {/* <div className="explorebutton">
                            <button className="Explore" >Explore Our Service</button>
                        </div> */}
                    </div>
                </div>
                <div class="carousel-item">

                    <img id="scroll" src={hero3} class="d-block w-100" alt="..." />
                    <div className="hello col-12 col-md-12">
                        <div className="animi">
                            <h3 className=" Our " > 5m+ Trusted  Our Clients</h3>
                        </div>
                        <div className="animi1">
                            <h1 className="expertise"> Empower Your business Journey with it Expertise</h1>
                        </div>
                        {/* <button className="Explore">Explore Our Service</button> */}
                    </div>
                </div>
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true" ></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}
export default Slide