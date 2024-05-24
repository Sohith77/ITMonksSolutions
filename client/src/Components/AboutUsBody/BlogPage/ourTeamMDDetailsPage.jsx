
import React, { useEffect, useState, useRef } from 'react';
import image1 from "../../Photos/bg-image.jpeg"
import image2 from "../../Photos/bgimage2.jpeg"
import "./pages.css"
import "./page1.css"


export const MyComponent = () => {

    
    const [text1, setText1] = useState([]);
    const [showName, setShowName] = useState(false);
    const fullText = `Since our inception in 2020, IT Monks Solutions Pvt Ltd has been steadfast in delivering innovative and tailored IT solutions to our clients. As the Managing Director, I have fostered a deep connection with our company, recognizing its potential to make a significant impact in the technology industry. app development, We take immense pride in leading a team of skilled professionals who share our vision and are passionate about meeting our clients unique needs.`;
    
    const ref = useRef(null);
  
    
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            console.log(entry.isIntersecting)
            if (entry.isIntersecting) {
              const words = fullText.split(/(\s+)/);
              
              
                setText1(words);
                setTimeout(() => {
                  setShowName(true);
                }, words.length*7);
              
            } else{
              setText1([]);
              setShowName(false)
            }
          });
        },
        { threshold: 0.5 }
      );
      if (ref.current) {
        observer.observe(ref.current);
      }
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [fullText]);
    
    const [text12, setText12] = useState([]);
    const [showName12, setShowName12] = useState(false);
    const fullText12 = "- Ramya Krishna G";
    
    const ref12 = useRef(null);
  
    
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            console.log(entry.isIntersecting)
            if (entry.isIntersecting) {
              const words12 = fullText12.split(/(\s+)/);
              
              
                setText12(words12);
                setTimeout(() => {
                  setShowName12(true);
                }, words12.length*7);
              
            } else{
              setText12([]);
              setShowName12(false)
            }
          });
        },
        { threshold: 0.09 }
      );
      if (ref12.current) {
        observer.observe(ref12.current);
      }
      return () => {
        if (ref12.current) {
          observer.unobserve(ref12.current);
        }
      };
    }, [fullText12]);
  
  
  
    return (
      <div className="containerk">
        <img
          className="imagek"
          src={image1}
  
          alt=""
        />
        <div className="textOverlayk">
          <div className='matterk'>
            <h2 className="headk">From our HR Manager</h2>
            <div className="reading-effectk" ref={ref} >
              {text1.map((text, index) => (
                <span key={index} style={{ animationDelay: `${index * 0.005}s` }} className='paragraphk'>{text}</span>
              ))}
              
            </div>
            <div className='reading-effectk namek' ref={ref12}>
            {/* { <p className="namek">- Supriya Chunduru</p>} */}
            {text12.map((text12, index) => (
                <span key={index} style={{ animationDelay: `${index * 0.005}s` }}>{text12}</span>
              ))}
          </div>
          </div>
          
        </div>
  
      </div>
    );
  };
  
  
  export const NewComp = () => {
  
  
  const [text1, setText1] = useState([]);
  const [showName, setShowName] = useState(false);
  const fullText = 'Since our inception in 2020, IT Monks Solutions Pvt Ltd has been steadfast in delivering innovative and tailored IT solutions to our clients. As the Managing Director, I have fostered a deep connection with our company, recognizing its potential to make a significant impact in the technology industry. app development, We take immense pride in leading a team of skilled professionals who share our vision and are passionate about meeting our clients unique needs.';
  const ref = useRef(null);
  
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry.isIntersecting)
          if (entry.isIntersecting) {
            // console.log(".....")
            const words = fullText.split(/(\s+)/);
            
            
              setText1(words);
              setTimeout(() => {
                setShowName(true);
              }, words.length*7);
            
          } else{
            setText1([]);
            setShowName(false)
          }
        });
      },
      { threshold: 0.5 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [fullText]);

  const [text12, setText12] = useState([]);
    const [showName12, setShowName12] = useState(false);
    const fullText12 = `- Jaya Srikar Lanka`;
    
    const ref12 = useRef(null);
  
    
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            console.log(entry.isIntersecting)
            if (entry.isIntersecting) {
              const words12 = fullText12.split(/(\s+)/);
              
              
                setText12(words12);
                setTimeout(() => {
                  setShowName12(true);
                }, words12.length*7);
              
            } else{
              setText12([]);
              setShowName12(false)
            }
          });
        },
        { threshold: 0.5 }
      );
      if (ref12.current) {
        observer.observe(ref12.current);
      }
      return () => {
        if (ref12.current) {
          observer.unobserve(ref12.current);
        }
      };
    }, [fullText12]);
  
  
  
  return (
    <div className="macontainer">
      <img
        className="maimage"
        src={image2}
  
        alt=""
      />
      <div className="matextOverlay">
        <div className='mamatter'>
          <h2 className="mahead">From our Vice - President</h2>
      
          <div className="mareading-effect" ref={ref}>
            {text1.map((text, index) => (
              <span key={index} style={{ animationDelay: `${index * 0.005}s` }} className='maparagraph'>{text}</span>
            ))}

          </div>
        </div>
        <div>
          {/* {showName && <p className="maname">- Supriya Chunduru</p>} */}
        </div>
        <div className='mareading-effect maname' ref={ref12}>
            {/* { <p className="namek">- Supriya Chunduru</p>} */}
            {text12.map((text12, index) => (
                <span key={index} style={{ animationDelay: `${index * 0.005}s` }}>{text12}</span>
              ))}
          </div>
      </div>
  
    </div>
  );
  };
  
  export const SecondComponent = () => {
    const [text1, setText1] = useState([]);
    const [showName, setShowName] = useState(false);
    const fullText = `Since our inception in 2020, IT Monks Solutions Pvt Ltd has been steadfast in delivering innovative and tailored IT solutions to our clients. As the Managing Director, I have fostered a deep connection with our company, recognizing its potential to make a significant impact in the technology industry. app development, We take immense pride in leading a team of skilled professionals who share our vision and are passionate about meeting our clients unique needs.`;
    
    const ref = useRef(null);
  
    
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            console.log(entry.isIntersecting)
            if (entry.isIntersecting) {
              const words = fullText.split(/(\s+)/);
              
              
                setText1(words);
                setTimeout(() => {
                  setShowName(true);
                }, words.length*7);
              
            } else{
              setText1([]);
              setShowName(false)
            }
          });
        },
        { threshold: 0.5 }
      );
      if (ref.current) {
        observer.observe(ref.current);
      }
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [fullText]);
    
    const [text12, setText12] = useState([]);
    const [showName12, setShowName12] = useState(false);
    const fullText12 = `- Supriya Chunduru`;
    
    const ref12 = useRef(null);
  
    
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            console.log(entry.isIntersecting)
            if (entry.isIntersecting) {
              const words12 = fullText12.split(/(\s+)/);
              
              
                setText12(words12);
                setTimeout(() => {
                  setShowName12(true);
                }, words12.length*7);
              
            } else{
              setText12([]);
              setShowName12(false)
            }
          });
        },
        { threshold: 0.5 }
      );
      if (ref12.current) {
        observer.observe(ref12.current);
      }
      return () => {
        if (ref12.current) {
          observer.unobserve(ref12.current);
        }
      };
    }, [fullText12]);
  
  
  
    return (
      <div className="containerk">
        <img
          className="imagek"
          src={image1}
  
          alt=""
        />
        <div className="textOverlayk">
          <div className='matterk'>
            <h2 className="headk"> From our Managing Director</h2>
            <div className="reading-effectk" ref={ref} >
              {text1.map((text, index) => (
                <span key={index} style={{ animationDelay: `${index * 0.005}s` }} className='paragraphk'>{text}</span>
              ))}
              
            </div>
          </div>
          <div className='reading-effectk namek' ref={ref12}>
            {/* { <p className="namek">- Supriya Chunduru</p>} */}
            {text12.map((text12, index) => (
                <span key={index} style={{ animationDelay: `${index * 0.005}s` }}>{text12}</span>
              ))}
          </div>
        </div>
  
      </div>
    );
  };
  