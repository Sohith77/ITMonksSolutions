import React from "react";
import "../HowWeWork/ourprojects.css";
import img1 from "../../Photos/Rectangle 185 (1).png";
import img2 from "../../Photos/Rectangle 186 (1).png";
import img3 from "../../Photos/Rectangle 187 (1).png";

function OurProjects() {
   return (<>
      <div id="myanime" >

         <div className="header">
            <h1 className="ourprojects-span">Our <span className="project">Projects</span> </h1>
         </div>
         <div class="container">
            <div class="card__container">
               <article class="card__article">
                  <img src={img1} alt="image" class="card__img" />

                  <div class="card__data">
                     <h1 className="card__title">Amazon</h1>
                     <h2 class="card__title">StartDate:12/02/2021</h2>
                     <h2 class="card__title">EndDate:12/02/2021</h2>
                     <a href="#" class="card__button"><span class="card__description">View More</span></a>
                  </div>
               </article>

               <article class="card__article">
                  <img src={img2} alt="image" class="card__img" />

                  <div class="card__data">
                     <h1 className="card__title">Flipkart</h1>
                     <h2 class="card__title">StartDate:12/02/2021</h2>
                     <h2 class="card__title">EndDate:12/02/2021</h2>
                     <a href="#" class="card__button"><span class="card__description">View More</span></a>
                  </div>
               </article>

               <article class="card__article">
                  <img src={img3} alt="image" class="card__img" />

                  <div class="card__data">
                     <h1 className="card__title">Adobe</h1>
                     <h2 class="card__title">StartDate:12/02/2021</h2>
                     <h2 class="card__title">EndDate:12/02/2021</h2>
                     <a href="#" class="card__button"><span class="card__description">View More</span></a>
                  </div>
               </article>
            </div>
         </div>
      </div>

   </>)
}

export default OurProjects;