import React  from "react"; 
import "./IndustrySector.css"
function List(){
    // function TextChange(){
    //     let element1 = document.getElementById("button-item1")
    //     element1.style.color = "orange"

    // }
    
    // let element1 =  document.getElementById("Element")
    function MouseOver(event) {
        event.target.style.color = '#fd8d3b';
        event.target.style.fontWeight = "bolder"
        event.target.style.background = "#f2edeb"
        
      }
      function MouseOut(event){
        event.target.style.color="";
        event.target.style.fontWeight = ""
        event.target.style.background = ""
        
      }


    return (<>
    <h1 className="heading"style={{background:"black"}}>Industry <span style={{color:"goldenrod"}}>Sector</span></h1>

<div class="accordion" id="accordionExample">
  {/* <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
        Engineering and Manufacturing
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div> */}

<div class="accordion-item">
    <h2 class="accordion-header" id="headingOne" >
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" id="Element" onMouseOver={MouseOver} onMouseOut={MouseOut} >
      Engineering and Manufacturing
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Transforming ideas into reality, IMS bring a wealth of experience in full-stack software development, with proficiency in [list programming languages and technologies, e.g., Java, Python, JavaScript, etc.]. From concept to deployment, IMS collaborate with cross-functional teams to create scalable, efficient, and user-friendly solutions that address complex business challenges.
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" onMouseOver={MouseOver} onMouseOut={MouseOut}>
        AutoMotive
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Transforming ideas into reality, IMS bring a wealth of experience in full-stack software development, with proficiency in [list programming languages and technologies, e.g., Java, Python, JavaScript, etc.]. From concept to deployment, IMS collaborate with cross-functional teams to create scalable, efficient, and user-friendly solutions that address complex business challenges.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" onMouseOver={MouseOver} onMouseOut={MouseOut}>
        LifeScience and Health Care
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Transforming ideas into reality, IMS bring a wealth of experience in full-stack software development, with proficiency in [list programming languages and technologies, e.g., Java, Python, JavaScript, etc.]. From concept to deployment, IMS collaborate with cross-functional teams to create scalable, efficient, and user-friendly solutions that address complex business challenges.
      </div>
    </div>
  </div>
   <div class="accordion-item">
    <h2 class="accordion-header" id="headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" onMouseOver={MouseOver} onMouseOut={MouseOut}>
        Chemicals
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Transforming ideas into reality, IMS bring a wealth of experience in full-stack software development, with proficiency in [list programming languages and technologies, e.g., Java, Python, JavaScript, etc.]. From concept to deployment, IMS collaborate with cross-functional teams to create scalable, efficient, and user-friendly solutions that address complex business challenges.
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" onMouseOver={MouseOver} onMouseOut={MouseOut}>
        Consumer
      </button>
    </h2>
    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Transforming ideas into reality, IMS bring a wealth of experience in full-stack software development, with proficiency in [list programming languages and technologies, e.g., Java, Python, JavaScript, etc.]. From concept to deployment, IMS collaborate with cross-functional teams to create scalable, efficient, and user-friendly solutions that address complex business challenges.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingSix">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix" onMouseOver={MouseOver} onMouseOut={MouseOut}>
        Energy
      </button>
    </h2>
    <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Transforming ideas into reality, IMS bring a wealth of experience in full-stack software development, with proficiency in [list programming languages and technologies, e.g., Java, Python, JavaScript, etc.]. From concept to deployment, IMS collaborate with cross-functional teams to create scalable, efficient, and user-friendly solutions that address complex business challenges.
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingSeven">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven" onMouseOver={MouseOver} onMouseOut={MouseOut}>
        Technology
      </button>
    </h2>
    <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Transforming ideas into reality, IMS bring a wealth of experience in full-stack software development, with proficiency in [list programming languages and technologies, e.g., Java, Python, JavaScript, etc.]. From concept to deployment, IMS collaborate with cross-functional teams to create scalable, efficient, and user-friendly solutions that address complex business challenges.
      </div>
    </div>
  </div>
</div>



    </>)
}
export default List;