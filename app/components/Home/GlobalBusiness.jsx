'use client'
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { globalBusinessData } from "../../globalDestinationData";
import styles from "../../page.module.css";
import Image from "next/image";
import { useAppContext } from "../AppContext";
import Popup from "./Popup";

const GlobalBusiness = () => {
  const globalBusinessRef = useRef();
  const scrollSectionRef = useRef();
  const scrollTriggerRef = useRef();
  const cardRef = useRef([]);
  const { state, setState } = useAppContext();

  useGSAP(() => {
    let mm = gsap.matchMedia();

    // Clear any existing ScrollTriggers to prevent conflicts
    ScrollTrigger.getAll().forEach((st) => {
      if (st.vars.trigger === globalBusinessRef.current) {
        st.kill();
      }
    });

    // mm.add("(min-width:768px) and (max-width:1598px)", () => {
    //   const scrollWidth =
    //     scrollSectionRef.current.scrollWidth -
    //     scrollSectionRef.current.clientWidth;

    //   gsap.to(scrollSectionRef.current, {
    //     x: -scrollWidth,
    //     ease: "none",
    //     scrollTrigger: {
    //       trigger: globalBusinessRef.current,
    //       markers: false, // Set to false in production
    //       start: "35% top",
    //       end: `+=${scrollWidth}`,
    //       scrub: 1,
    //       pin: true,
    //       pinSpacing: true,
    //       invalidateOnRefresh: true,
    //       refreshPriority: 5,
    //       anticipatePin: 1,
    //       onLeave: (self) => {
    //         // Ensure proper unpinning when leaving section
    //         self.disable(false);
    //         setTimeout(() => self.enable(false), 100);
    //       },
    //     },
    //   });
    // });

    // mm.add("(min-width:1599px)", () => {
    //   const scrollWidth =
    //     scrollSectionRef.current.scrollWidth -
    //     scrollSectionRef.current.clientWidth;

    //   gsap.to(scrollSectionRef.current, {
    //     x: -scrollWidth,
    //     ease: "linear",
    //     scrollTrigger: {
    //       trigger: globalBusinessRef.current,
    //       markers: false, // Set to false in production
    //       start: "top top",
    //       end: `+=${scrollWidth}`, // Add extra space for larger screens
    //       scrub: 0.6,
    //       pin: true,
    //       pinSpacing: true,
    //       invalidateOnRefresh: true,
    //       anticipatePin: 1,
    //       onLeaveBack: (self) => {
    //         globalBusinessRef.current.style.marginBottom = "0px";
    //       },
    //       onLeave: (self) => {
    //         // Force unpin when section is left
    //         self.disable(false);
    //         setTimeout(() => self.enable(false), 100);
    //         globalBusinessRef.current.style.marginBottom = "0px";
    //       },
    //     },
    //   });
    // });
    // Inside your useGSAP hook, update the animation configurations:


    const scrollWidth =
      scrollSectionRef.current.scrollWidth -
      scrollSectionRef.current.clientWidth;

    gsap.to(scrollSectionRef.current, {
      x: -scrollWidth,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: globalBusinessRef.current,
        start: "top top",
        end: `+=${scrollWidth}`,
        scrub: 1.5,
        pin: true,
        pinSpacing: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        smoothTouch: true,
        snap: {
          snapTo: 1,
          duration: 0.5,
          ease: "power1.inOut",
        },
      },
    });



  });

  const handleCardClick = (id) => {
    setState((prev) => ({ ...prev, selectedIndex: id, isActive: true }));
  };

  return (
    <section ref={globalBusinessRef} className={styles.globalBusiness} observer-animation-classes="animateAllLinesIn, animateImagesIn" observer-animation="cssClass">
      <span className="anim-line -top" observer-animation="cssClass" observer-animation-classes="animateSingleLineIn" transform-origin="top left"></span>
      <h1 observer-animation="fadeInUpPara" >
        Global Business
        <br /> Destination
      </h1>
      <div className={styles.description1} observer-animation="fadeInUpPara">
        <p>
          We offer everything you need—great resources, talented
          <br />
          people, and a supportive environment.
        </p>
      </div>
      <h2 observer-animation="title">The Stories of Success</h2>
      <div ref={scrollTriggerRef}>
        <div ref={scrollSectionRef} className={styles.scrollSection}>
          {globalBusinessData.map((business, index) => (
            <div
              ref={(el) => (cardRef.current[index] = el)}
              className={`${styles.globalBusinessCard} ${business.class === "largeCard"
                ? styles.largeCard
                : styles.smallCard
                }`}
              observer-animation="cssClass" observer-animation-classes="animateImagesIn" observer-animation-repeat="true"
              key={business.id}
              onClick={() => handleCardClick(business.id)}
              onKeyDown={(e) =>
                e.key === "Enter" && handleCardClick(business.id)
              }
              role="button"
              tabIndex={0}
            >
              <div className={`${styles.globalBusinessImgWrapper} anim-imageContainer`}>
                <div className="anim-imageWrapper">
                  <Image
                    className="anim-image"
                    src={business.imgPath}
                    alt={business.name}
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized
                  />
                </div>
              </div>
              <h3>{business.name}</h3>
            </div>
          ))}
        </div>
      </div>
      <Popup />
    </section>
  );
};

export default GlobalBusiness;
