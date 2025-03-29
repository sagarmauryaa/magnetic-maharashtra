import bollywood1 from "/images/Bollywood/bollywood1.webp";
import bollywood2 from "/images/Bollywood/bollywood2.webp";
import bollywood3 from "/images/Bollywood/bollywood3.webp";
import bollywood4 from "/images/Bollywood/bollywood4.webp";
import bollywood5 from "/images/Bollywood/bollywood5.webp";
import bollywood6 from "/images/Bollywood/bollywood6.webp";
import LEFTo from "/images/Bollywood/BO.svg";
import RIGHTo from "/images/Bollywood/LYWood.svg";

import "../Home/Bollywood.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Lottie from "lottie-react";
import animationData from "../../assets/lottie/bollywood.json";
import { useRef } from "react";
function Bollywood() {
  const bollyTabRef = useRef();
  const scrollSectionRef = useRef();
  const scrollTriggerRef = useRef();
  useGSAP(() => {
    // gsap.set(".rightB", { xPercent: 14 });

    const animateImages = () => {
      gsap.from(" .image", {
        duration: 1,
        opacity: 0,
        stagger: 0.1,
        y: 50,
        scrollTrigger: {
          trigger: ".bollywood-container",
          markers: false,
          start: "top bottom",
          ease: "ease.in",
        },
      });
    };

    const animateBollywoodText = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".bolly-text",
          // markers: true,
          start: "top 60%",
        },
      });

      tl.to(".bolly-camera", {
        duration: 1,
        opacity: 1,
        visibility: "visible", // make it visible during animation
        display: "inline-block", // set display to inline-block before animation starts
        onStart: function () {
          // Ensure the element is set to inline-block before animation starts
          gsap.set(".bolly-camera", { display: "inline-block" });
        },
      });
    };

    let mm = gsap.matchMedia();
    mm.add("(min-width:768px) and (max-width: 1023px)", () => {
      const scrollWidth =
        scrollSectionRef.current.scrollWidth -
        scrollSectionRef.current.clientWidth;

      gsap.to(scrollSectionRef.current, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: bollyTabRef.current,
          start: "0 top",
          end: `+=${scrollWidth}`,
          scrub: true,
          pin: true,
          pinSpacing: true,
          invalidateOnRefresh: true,
          refreshPriority: 5,
          markers: true,
        },
      });
    });

    animateImages();
    // animateBollywoodText();
  });

  return (
    <section className="bollywood-container" ref={bollyTabRef}>
      <div className="bollywood" ref={scrollTriggerRef}>
        <div className="bolly-images" ref={scrollSectionRef}>
          <div className="image">
            <img loading="lazy" src={bollywood1} alt="" />
          </div>
          {/* <div className='inner-grid-wrapper'>
            <div className='image'>
              <img src={bollywood2} alt='' />
            </div>
            <div className='image '>
              <img src={bollywood3} alt='' />
            </div>
          </div> */}
          <div className="inner-grid-wrapper">
            <div className="image">
              <img loading="lazy" src={bollywood2} alt="" />
            </div>
            <div className="image">
              <img loading="lazy" src={bollywood3} alt="" />
            </div>
          </div>
          <div className="image bolly-subtitle ">
            <img loading="lazy" src={bollywood4} alt="" />
            <p>
              Bollywood makes Maharashtra the center of India’s film industry,
              boosting business in production, talent, and creative arts.
            </p>
          </div>

          {/* <div className='inner-grid-wrapper'>
            <div className='image'>
              <img src={bollywood5} alt='' />
            </div>
            <div className='image'>
              <img src={bollywood6} alt='' />
            </div>
          </div> */}
          <div className="inner-grid-wrapper">
            <div className="image">
              <img src={bollywood5} alt="" />
            </div>
            <div className="image">
              <img src={bollywood6} alt="" />
            </div>
          </div>
        </div>
        <div className="bolly-images-mobile">
          <div className="image-mobile-conatiner">
            <div className="inner-mobile-images">
              <div className="image">
                <img src={bollywood1} alt="" />
              </div>
              <div className="image">
                <img src={bollywood2} alt="" />
              </div>
              <div className="image">
                <img src={bollywood3} alt="" />
              </div>
              <div className="image">
                <img src={bollywood4} alt="" />
              </div>
              <div className="image">
                <img src={bollywood5} alt="" />
              </div>
              <div className="image">
                <img src={bollywood6} alt="" />
              </div>
            </div>
          </div>
          <p>
            Bollywood makes Maharashtra the center of India’s film industry,
            boosting business in production, talent, and creative arts
          </p>
        </div>
        <div className="bolly-text">
          <p>
            <div className="leftB">
              <img src={LEFTo} alt="" />
            </div>
            <div className="bolly-camera">
              <div>
                <Lottie
                  animationData={animationData}
                  loop={true}
                  speed={0.01}
                  autoplay={true}
                />
              </div>
            </div>
            <div className="rightB">
              <img src={RIGHTo} alt="" />
            </div>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Bollywood;
