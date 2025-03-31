import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import styles from "../../page.module.css";

gsap.registerPlugin(ScrollTrigger);

const Envelop = () => {
  const ikeaRef = useRef();
  const comfortRef = useRef();
  const commerceRef = useRef();
  const cultureRef = useRef();
  const universityRef = useRef();
  const gdpRef = useRef();
  const airplaneRef = useRef();
  const sustainbilityRef = useRef();
  const cameraRef = useRef();
  const incentivesRef = useRef();
  const manufacturingRef = useRef();
  const bookRef = useRef();
  const greyContainerRef = useRef();
  const envelopSectionRef = useRef();
  const flapOpenRef = useRef();

  const mm = gsap.matchMedia();

  useGSAP(() => {
    // gsap.set(ikeaRef.current, {
    //   top: "35%",
    //   left: "32%",
    //   zIndex: 998,
    //   rotate: "-40deg",
    // });
    // gsap.set(comfortRef.current, {
    //   top: "30%",
    //   left: "45%",
    //   zIndex: 998,
    //   rotate: "15deg",
    // });
    // gsap.set(commerceRef.current, {
    //   top: "-10%",
    //   left: "20%",
    //   zIndex: 998,
    //   rotate: "-40deg",
    // });
    // gsap.set(universityRef.current, {
    //   top: "-15%",
    //   left: "45%",
    //   zIndex: 998,
    //   rotate: "50deg",
    // });
    // gsap.set(cultureRef.current, {
    //   top: "-45%",
    //   left: "45%",
    //   zIndex: 998,
    //   rotate: "20deg",
    // });
    // gsap.set(gdpRef.current, {
    //   top: "-45%",
    //   left: "15%",
    //   zIndex: 998,
    //   rotate: "-20deg",
    // });
    // gsap.set(airplaneRef.current, {
    //   top: "-80%",
    //   left: "5%",
    //   zIndex: 998,
    //   rotate: "-15deg",
    // });
    // gsap.set(sustainbilityRef.current, {
    //   top: "-80%",
    //   left: "45%",
    //   zIndex: 998,
    //   rotate: "-10deg",
    // });
    // gsap.set(cameraRef.current, {
    //   top: "-80%",
    //   right: "15%",
    //   zIndex: 998,
    //   rotate: "20deg",
    // });
    // gsap.set(incentivesRef.current, {
    //   top: "-110%",
    //   right: "15%",
    //   zIndex: 998,
    //   rotate: "20deg",
    // });
    // gsap.set(manufacturingRef.current, {
    //   top: "-115%",
    //   left: "35%",
    //   zIndex: 998,
    //   rotate: "40deg",
    // });
    // gsap.set(bookRef.current, {
    //   top: "-145%",
    //   left: "10%",
    //   zIndex: 998,
    //   rotate: "-20deg",
    // });
    // gsap.set(flapOpenRef.current, {
    //   top: "34%",
    //   rotate: "-9.5deg",
    // });

    // gsap
    //   .timeline({
    //     defaults: {
    //       rotate: "0deg",
    //       zIndex: 998,
    //       duration: 1,
    //       ease: "linear",
    //     },
    //     scrollTrigger: {
    //       trigger: greyContainerRef.current,
    //       start: "top 5%",
    //       end: "bottom top",
    //       markers: false,
    //       pin: true,
    //       pinSpacing: true,
    //       scrub: 1,
    //     },
    //   })
    //   .to(ikeaRef.current, { top: "50%", left: "45%" })
    //   .to(comfortRef.current, { top: "55%", left: "45%" }, "<")
    //   .to(commerceRef.current, { top: "50%", left: "45%" }, "<=0.05")
    //   .to(universityRef.current, { top: "50%", left: "45%" }, "<")
    //   .to(cultureRef.current, { top: "50%", left: "45%" }, "<")
    //   .to(gdpRef.current, { top: "50%", left: "45%" }, "<")
    //   .to(
    //     airplaneRef.current,
    //     { top: "50%", left: "45%", rotate: "100deg" },
    //     "<"
    //   )
    //   .to(sustainbilityRef.current, { top: "50%", left: "45%" }, "<")
    //   .to(
    //     cameraRef.current,
    //     { top: "50%", left: "40%", zIndex: 998, rotate: "90deg" },
    //     "<"
    //   )
    //   .to(incentivesRef.current, { top: "50%", left: "45%" }, "<")
    //   .to(manufacturingRef.current, { top: "50%", left: "45%" }, "<")
    //   .to(bookRef.current, { top: "50%", left: "45%" }, "<")
    //   .to(flapOpenRef.current, {
    //     top: "36%",
    //     rotateX: "180deg",
    //     rotate: "-9.5deg",
    //     zIndex: 1111,
    //     ease: "power2.in",
    //   });

    mm.add("(min-width: 998px)", () => {
      gsap.set(ikeaRef.current, {
        top: "35%",
        left: "32%",
        zIndex: 998,
        rotate: "-40deg",
      });
      gsap.set(comfortRef.current, {
        top: "30%",
        left: "45%",
        zIndex: 998,
        rotate: "15deg",
      });
      gsap.set(commerceRef.current, {
        top: "-10%",
        left: "20%",
        zIndex: 998,
        rotate: "-40deg",
      });
      gsap.set(universityRef.current, {
        top: "-15%",
        left: "45%",
        zIndex: 998,
        rotate: "50deg",
      });
      gsap.set(cultureRef.current, {
        top: "-45%",
        left: "45%",
        zIndex: 998,
        rotate: "20deg",
      });
      gsap.set(gdpRef.current, {
        top: "-45%",
        left: "15%",
        zIndex: 998,
        rotate: "-20deg",
      });
      gsap.set(airplaneRef.current, {
        top: "-80%",
        left: "5%",
        zIndex: 998,
        rotate: "-15deg",
      });
      gsap.set(sustainbilityRef.current, {
        top: "-80%",
        left: "45%",
        zIndex: 998,
        rotate: "-10deg",
      });
      gsap.set(cameraRef.current, {
        top: "-80%",
        right: "15%",
        zIndex: 998,
        rotate: "20deg",
      });
      gsap.set(incentivesRef.current, {
        top: "-110%",
        right: "15%",
        zIndex: 998,
        rotate: "20deg",
      });
      gsap.set(manufacturingRef.current, {
        top: "-115%",
        left: "35%",
        zIndex: 998,
        rotate: "40deg",
      });
      gsap.set(bookRef.current, {
        top: "-145%",
        left: "10%",
        zIndex: 998,
        rotate: "-20deg",
      });
      gsap.set(flapOpenRef.current, {
        top: "34%",
        rotate: "-9.5deg",
      });

      gsap
        .timeline({
          defaults: {
            rotate: "0deg",
            zIndex: 998,
            duration: 1,
            ease: "linear",
          },
          scrollTrigger: {
            trigger: envelopSectionRef.current,
            start: "top top",
            end: "bottom center",
            markers: false,
            pin: false,
            pinSpacing: false,
            scrub: true,
          },
        })
        .to(ikeaRef.current, { top: "50%", left: "45%" })
        .to(comfortRef.current, { top: "55%", left: "45%" }, "<")
        .to(commerceRef.current, { top: "50%", left: "45%" }, "<=0.05")
        .to(universityRef.current, { top: "50%", left: "45%" }, "<")
        .to(cultureRef.current, { top: "50%", left: "45%" }, "<")
        .to(gdpRef.current, { top: "50%", left: "45%" }, "<")
        .to(
          airplaneRef.current,
          { top: "50%", left: "45%", rotate: "100deg" },
          "<"
        )
        .to(sustainbilityRef.current, { top: "50%", left: "45%" }, "<")
        .to(
          cameraRef.current,
          { top: "50%", left: "40%", zIndex: 998, rotate: "90deg" },
          "<"
        )
        .to(incentivesRef.current, { top: "50%", left: "45%" }, "<")
        .to(manufacturingRef.current, { top: "50%", left: "45%" }, "<")
        .to(bookRef.current, { top: "50%", left: "45%" }, "<")
        .to(
          flapOpenRef.current,
          {
            top: "36%",
            rotateX: "180deg",
            rotate: "-9.5deg",
            zIndex: 1111,
            ease: "power2.in",
          },
          "<0.45"
        );
    });
    mm.add("(min-width: 768px) and (max-width: 997px)", () => {
      gsap.set(ikeaRef.current, {
        top: "35%",
        left: "20%",
        zIndex: 998,
        rotate: "-40deg",
        scale: 0.7,
      });
      gsap.set(comfortRef.current, {
        top: "40%",
        left: "40%",
        zIndex: 998,
        rotate: "15deg",
        scale: 0.7,
      });
      gsap.set(commerceRef.current, {
        top: "12%",
        left: "15%",
        zIndex: 998,
        rotate: "-40deg",
        scale: 0.7,
      });
      gsap.set(universityRef.current, {
        top: "1%",
        left: "45%",
        zIndex: 998,
        rotate: "45deg",
        scale: 0.7,
      });
      gsap.set(cultureRef.current, {
        top: "-15%",
        left: "45%",
        zIndex: 998,
        rotate: "20deg",
        scale: 0.7,
      });
      gsap.set(gdpRef.current, {
        top: "-35%",
        left: "15%",
        zIndex: 998,
        rotate: "-20deg",
        scale: 0.7,
      });
      gsap.set(airplaneRef.current, {
        top: "-60%",
        left: "5%",
        zIndex: 998,
        rotate: "-15deg",
        scale: 0.7,
      });
      gsap.set(sustainbilityRef.current, {
        top: "-40%",
        left: "45%",
        zIndex: 998,
        rotate: "10deg",
        scale: 0.7,
      });
      gsap.set(cameraRef.current, {
        top: "-75%",
        left: "70%",
        zIndex: 998,
        rotate: "20deg",
        scale: 0.7,
      });
      gsap.set(incentivesRef.current, {
        top: "-90%",
        left: "77%",
        zIndex: 998,
        rotate: "-20deg",
        scale: 0.7,
      });
      gsap.set(manufacturingRef.current, {
        top: "-77%",
        left: "45%",
        zIndex: 998,
        rotate: "-30deg",
        scale: 0.7,
      });
      gsap.set(bookRef.current, {
        top: "-90%",
        left: "10%",
        zIndex: 998,
        rotate: "-20deg",
        scale: 0.7,
      });
      gsap.set(flapOpenRef.current, {
        // top: "50%",
        left: "12%",
        rotateX: "0deg",
        rotate: "-20.5deg",
        scale: 0.7,
      });

      gsap
        .timeline({
          defaults: {
            rotate: "0deg",
            zIndex: 998,
            duration: 1,
            ease: "linear",
          },
          scrollTrigger: {
            trigger: envelopSectionRef.current,
            start: "top top",
            end: "bottom center",
            markers: false,
            pin: true,
            pinSpacing: true,
            scrub: 1,
          },
        })
        .to(ikeaRef.current, { top: "50%", left: "30%" })
        .to(comfortRef.current, { top: "50%", left: "30%" }, "<")
        .to(commerceRef.current, { top: "50%", left: "30%" }, "<=0.05")
        .to(universityRef.current, { top: "50%", left: "30%" }, "<")
        .to(cultureRef.current, { top: "50%", left: "30%" }, "<")
        .to(gdpRef.current, { top: "50%", left: "30%" }, "<")
        .to(
          airplaneRef.current,
          { top: "48%", left: "30%", rotate: "100deg" },
          "<"
        )
        .to(sustainbilityRef.current, { top: "50%", left: "30%" }, "<")
        .to(
          cameraRef.current,
          { top: "48%", left: "32%", zIndex: 998, rotate: "90deg" },
          "<"
        )
        .to(incentivesRef.current, { top: "50%", left: "30%" }, "<")
        .to(manufacturingRef.current, { top: "50%", left: "30%" }, "<")
        .to(bookRef.current, { top: "50%", left: "30%" }, "<")
        .to(
          flapOpenRef.current,
          {
            // top: "37%",
            rotateX: "180deg",
            zIndex: 1111,
            ease: "power2.in",
          },
          "<0.45"
        );
    });
    mm.add("(max-width: 320px)", () => {
      gsap.set(ikeaRef.current, {
        top: "35%",
        left: "0%",
        zIndex: 998,
        rotate: "-40deg",
        scale: 0.5,
      });
      gsap.set(comfortRef.current, {
        top: "30%",
        left: "25%",
        zIndex: 998,
        rotate: "15deg",
        scale: 0.5,
      });
      gsap.set(commerceRef.current, {
        top: "10%",
        left: "-15%",
        zIndex: 998,
        rotate: "-40deg",
        scale: 0.5,
      });
      gsap.set(universityRef.current, {
        top: "5%",
        left: "35%",
        zIndex: 998,
        rotate: "20deg",
        scale: 0.5,
      });
      gsap.set(cultureRef.current, {
        top: "-5%",
        left: "25%",
        zIndex: 998,
        rotate: "20deg",
        scale: 0.5,
      });
      gsap.set(gdpRef.current, {
        top: "-15%",
        left: "5%",
        zIndex: 998,
        rotate: "-20deg",
        scale: 0.5,
      });
      gsap.set(airplaneRef.current, {
        top: "-35%",
        left: "-20%",
        zIndex: 998,
        rotate: "-15deg",
        scale: 0.5,
      });
      gsap.set(sustainbilityRef.current, {
        top: "-40%",
        left: "30%",
        zIndex: 998,
        rotate: "10deg",
        scale: 0.5,
      });
      gsap.set(cameraRef.current, {
        top: "-75%",
        left: "55%",
        zIndex: 998,
        rotate: "20deg",
        scale: 0.5,
      });
      gsap.set(incentivesRef.current, {
        top: "-70%",
        left: "15%",
        zIndex: 998,
        rotate: "-20deg",
        scale: 0.5,
      });
      gsap.set(manufacturingRef.current, {
        top: "-95%",
        left: "5%",
        zIndex: 998,
        rotate: "-30deg",
        scale: 0.5,
      });
      gsap.set(bookRef.current, {
        top: "-120%",
        left: "10%",
        zIndex: 998,
        rotate: "-20deg",
        scale: 0.5,
      });
      gsap.set(flapOpenRef.current, {
        // top: "34%",
        left: "-38%",
        rotate: "-9.5deg",
        scale: 0.5,
      });

      gsap
        .timeline({
          defaults: {
            rotate: "0deg",
            zIndex: 998,
            duration: 1,
            ease: "linear",
          },
          scrollTrigger: {
            trigger: envelopSectionRef.current,
            start: "0% 0%",
            end: "100% 50%",
            markers: false,
            pin: false,
            pinSpacing: true,
            scrub: 1,
          },
        })
        .to(ikeaRef.current, { top: "42%", left: "15%" })
        .to(comfortRef.current, { top: "42%", left: "15%" }, "<")
        .to(commerceRef.current, { top: "42%", left: "15%" }, "<=0.05")
        .to(universityRef.current, { top: "42%", left: "15%" }, "<")
        .to(cultureRef.current, { top: "42%", left: "15%" }, "<")
        .to(gdpRef.current, { top: "42%", left: "15%" }, "<")
        .to(
          airplaneRef.current,
          { top: "38%", left: "15%", rotate: "100deg" },
          "<"
        )
        .to(sustainbilityRef.current, { top: "42%", left: "15%" }, "<")
        .to(
          cameraRef.current,
          { top: "38%", left: "15%", zIndex: 998, rotate: "90deg" },
          "<"
        )
        .to(incentivesRef.current, { top: "44%", left: "15%" }, "<")
        .to(manufacturingRef.current, { top: "42%", left: "15%" }, "<")
        .to(bookRef.current, { top: "42%", left: "15%" }, "<")
        .to(
          flapOpenRef.current,
          {
            top: "36%",
            rotateX: "180deg",
            rotate: "-9.5deg",
            zIndex: 1111,
            ease: "power2.in",
          },
          "<0.45"
        );
    });

    mm.add("(max-width: 480px)", () => {
      gsap.set(ikeaRef.current, {
        top: "35%",
        left: "0%",
        zIndex: 998,
        rotate: "-40deg",
        scale: 0.5,
      });
      gsap.set(comfortRef.current, {
        top: "30%",
        left: "25%",
        zIndex: 998,
        rotate: "15deg",
        scale: 0.5,
      });
      gsap.set(commerceRef.current, {
        top: "10%",
        left: "-15%",
        zIndex: 998,
        rotate: "-40deg",
        scale: 0.5,
      });
      gsap.set(universityRef.current, {
        top: "5%",
        left: "35%",
        zIndex: 998,
        rotate: "20deg",
        scale: 0.5,
      });
      gsap.set(cultureRef.current, {
        top: "-5%",
        left: "25%",
        zIndex: 998,
        rotate: "20deg",
        scale: 0.5,
      });
      gsap.set(gdpRef.current, {
        top: "-15%",
        left: "5%",
        zIndex: 998,
        rotate: "-20deg",
        scale: 0.5,
      });
      gsap.set(airplaneRef.current, {
        top: "-35%",
        left: "-20%",
        zIndex: 998,
        rotate: "-15deg",
        scale: 0.5,
      });
      gsap.set(sustainbilityRef.current, {
        top: "-40%",
        left: "30%",
        zIndex: 998,
        rotate: "10deg",
        scale: 0.5,
      });
      gsap.set(cameraRef.current, {
        top: "-75%",
        left: "55%",
        zIndex: 998,
        rotate: "20deg",
        scale: 0.5,
      });
      gsap.set(incentivesRef.current, {
        top: "-70%",
        left: "15%",
        zIndex: 998,
        rotate: "-20deg",
        scale: 0.5,
      });
      gsap.set(manufacturingRef.current, {
        top: "-95%",
        left: "5%",
        zIndex: 998,
        rotate: "-30deg",
        scale: 0.5,
      });
      gsap.set(bookRef.current, {
        top: "-120%",
        left: "10%",
        zIndex: 998,
        rotate: "-20deg",
        scale: 0.5,
      });
      gsap.set(flapOpenRef.current, {
        // top: "34%",
        left: "-10%",
        rotate: "-9.5deg",
        scale: 0.5,
      });

      gsap
        .timeline({
          defaults: {
            rotate: "0deg",
            zIndex: 998,
            duration: 1,
            ease: "linear",
          },
          scrollTrigger: {
            trigger: envelopSectionRef.current,
            start: "0% 0%",
            end: "100% 70%",
            markers: false,
            pin: false,
            pinSpacing: true,
            scrub: 1,
          },
        })
        .to(ikeaRef.current, { top: "46%", left: "15%" })
        .to(comfortRef.current, { top: "46%", left: "15%" }, "<")
        .to(commerceRef.current, { top: "46%", left: "15%" }, "<=0.05")
        .to(universityRef.current, { top: "46%", left: "15%" }, "<")
        .to(cultureRef.current, { top: "46%", left: "15%" }, "<")
        .to(gdpRef.current, { top: "46%", left: "15%" }, "<")
        .to(
          airplaneRef.current,
          { top: "38%", left: "15%", rotate: "100deg" },
          "<"
        )
        .to(sustainbilityRef.current, { top: "46%", left: "15%" }, "<")
        .to(
          cameraRef.current,
          { top: "38%", left: "25%", zIndex: 998, rotate: "90deg" },
          "<"
        )
        .to(incentivesRef.current, { top: "46%", left: "18%" }, "<")
        .to(manufacturingRef.current, { top: "46%", left: "15%" }, "<")
        .to(bookRef.current, { top: "42%", left: "15%" }, "<")
        .to(
          flapOpenRef.current,
          {
            top: "37%",
            rotateX: "180deg",
            rotate: "-9.5deg",
            zIndex: 1111,
            ease: "power2.in",
          },
          "<0.45"
        );
    });

    mm.add("(min-width: 321px) and (max-width: 479px)", () => {
      gsap.set(flapOpenRef.current, {
        left: "-25%",
        rotate: "-9.5deg",
        scale: 0.5,
      });
    });

    mm.add("(max-width: 375px)", () => {
      gsap.set(flapOpenRef.current, {
        left: "-22%",
        rotate: "-9.5deg",
        scale: 0.5,
      });
    });
  });

  return (
    <section ref={envelopSectionRef} className={styles.envelopSection}>
      <div ref={greyContainerRef} className={styles.greyContainer}>
        <img
          id={styles.flowerTop}
          src="/images/EnvelopImages/flowers.png"
          alt="FlowerImage"
        />
        <img
          id={styles.flowerBottom}
          src="/images/EnvelopImages/flowers.png"
          alt="FlowerImage"
        />
        <img
          id={styles.backEnvelop}
          src="/images/EnvelopImages/backEnvelop.png"
          alt="backEnvelop"
        />
        {/* <img id="frontEnvelopBack" src={frontEvelopBack} alt="frontEnvelop" />  */}
        <img
          id={styles.frontEnvelopFront}
          src="/images/EnvelopImages/FrontEnvelop_front_part.png"
          alt="frontEnvelop"
        />

        <svg
          id={styles.frontEnvelopBack}
          width="650"
          height="422"
          viewBox="0 0 650 422"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="FrontEnvelop_front_part">
            <g id="back" filter="url(#filter0_d_785_320)">
              <path
                d="M568.675 81.3273L568.184 348.824C568.179 351.372 566.108 353.433 563.56 353.425L15.4718 351.597C12.9056 351.588 10.8406 349.485 10.8788 346.919L14.8693 79.0247C14.9069 76.499 16.9705 74.4742 19.4965 74.4845L564.085 76.7101C566.626 76.7205 568.68 78.786 568.675 81.3273Z"
                fill="#FAFAFA"
              />
            </g>
            <g id="sides">
              <g id="Vector 11" filter="url(#filter1_d_785_320)">
                <path
                  d="M44.6219 86.2328L16.1993 75.6367L12.9145 345.536C12.8747 348.805 15.5603 351.452 18.8286 351.365L45.389 350.658L48.3701 91.6973C48.3981 89.2676 46.8987 87.0816 44.6219 86.2328Z"
                  fill="#FAFAFA"
                  shapeRendering="crispEdges"
                />
                <path
                  d="M44.6219 86.2328L16.1993 75.6367L12.9145 345.536C12.8747 348.805 15.5603 351.452 18.8286 351.365L45.389 350.658L48.3701 91.6973C48.3981 89.2676 46.8987 87.0816 44.6219 86.2328Z"
                  stroke="url(#paint0_linear_785_320)"
                  strokeWidth="1.15221"
                  shapeRendering="crispEdges"
                />
              </g>
              <g id="Vector 12" filter="url(#filter2_d_785_320)">
                <path
                  d="M538.862 83.8427L564.351 76.8896L565.045 336.173C565.066 343.848 558.831 350.071 551.156 350.036L533.334 349.956L533.768 90.5007C533.773 87.3876 535.859 84.6619 538.862 83.8427Z"
                  fill="#FAFAFA"
                  shapeRendering="crispEdges"
                />
                <path
                  d="M538.862 83.8427L564.351 76.8896L565.045 336.173C565.066 343.848 558.831 350.071 551.156 350.036L533.334 349.956L533.768 90.5007C533.773 87.3876 535.859 84.6619 538.862 83.8427Z"
                  stroke="url(#paint1_linear_785_320)"
                  strokeWidth="1.15221"
                  shapeRendering="crispEdges"
                />
              </g>
            </g>

            {/* <g ref={flapOpenRef} id="Flap" filter="url(#filter3_d_785_320)">
                                            <path d="M548.808 24.3672L572.177 79.9957L17 76.8333L30.2383 28.4063C32.8735 16.0089 42.2354 7.98625 57.1618 7.03611L515.786 7.92488C531.72 7.77764 545.329 13.0222 548.808 24.3672Z" fill="#FAFAFA"/>
                                            </g> */}
          </g>
          <defs>
            <filter
              id="filter0_d_785_320"
              x="0.508381"
              y="68.7233"
              width="578.537"
              height="299.68"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4.60885" />
              <feGaussianBlur stdDeviation="5.18496" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_785_320"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_785_320"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d_785_320"
              x="8.88137"
              y="70.2017"
              width="45.8263"
              height="286.351"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="1.15221" />
              <feGaussianBlur stdDeviation="2.30443" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_785_320"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_785_320"
                result="shape"
              />
            </filter>
            <filter
              id="filter2_d_785_320"
              x="525.613"
              y="71.2964"
              width="42.5428"
              height="284.155"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="-2.30443" />
              <feGaussianBlur stdDeviation="2.41965" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_785_320"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_785_320"
                result="shape"
              />
            </filter>
            <filter
              id="filter3_d_785_320"
              x="13"
              y="0.0361328"
              width="563.177"
              height="80.96"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="-3" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_785_320"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_785_320"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_785_320"
              x1="49.9996"
              y1="88.1354"
              x2="20.4057"
              y2="94.5307"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.119797" stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_785_320"
              x1="536.966"
              y1="81.2708"
              x2="571.822"
              y2="93.2077"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.172101" stopColor="white" />
              <stop offset="0.508995" stopColor="#F4F4F4" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <img
          ref={ikeaRef}
          id={styles.ikea}
          src="/images/EnvelopImages/ikea.png"
          alt="Ikea"
        />
        <div
          ref={comfortRef}
          id={styles.comfort}
          className={styles.envelopCard + " " + styles.comfort}
        >
          <p>Comfort</p>
        </div>
        <div
          ref={commerceRef}
          id={styles.commerce}
          className={styles.envelopCard + " " + styles.commerce}
        >
          <p>Commerce</p>
        </div>
        <div
          ref={cultureRef}
          id={styles.culture}
          className={styles.envelopCard + " " + styles.culture}
        >
          <p>Culture</p>
        </div>
        <img
          ref={universityRef}
          id={styles.university}
          src="/images/EnvelopImages/university.png"
          alt="Ikea"
        />
        <div ref={gdpRef} className={styles.gdp}>
          <p>Largest GDP</p>
          <h1>$510B</h1>
        </div>
        <img
          ref={airplaneRef}
          id={styles.airplane}
          src="/images/EnvelopImages/airplane.png"
          alt="airplane"
        />
        <img
          ref={sustainbilityRef}
          id={styles.sustainbility}
          src="/images/EnvelopImages/sustainbilty.png"
          alt="sustainbility"
        />
        <img
          ref={cameraRef}
          id={styles.camera}
          src="/images/EnvelopImages/camera.png"
          alt="camera"
        />
        <img
          ref={incentivesRef}
          id={styles.incentivesImg}
          src="/images/EnvelopImages/incentives.png"
          alt="incentives"
        />
        <img
          ref={manufacturingRef}
          id={styles.manufacturing}
          src="/images/EnvelopImages/manufacturing.png"
          alt="manufacturing"
        />
        <img
          ref={bookRef}
          id={styles.book}
          src="/images/EnvelopImages/book.png"
          alt="book"
        />

        {/* <div id="Flap"></div> */}
        <svg
          id={styles.FlapSvg}
          ref={flapOpenRef}
          xmlns="http://www.w3.org/2000/svg"
          width="548"
          height="134"
          viewBox="0 0 548 134"
          fill="none"
        >
          <g id="Flap" filter="url(#filter3_d_785_320)">
            <path
              d="M548.808 24.3672L572.177 79.9957L17 76.8333L30.2383 28.4063C32.8735 16.0089 42.2354 7.98625 57.1618 7.03611L515.786 7.92488C531.72 7.77764 545.329 13.0222 548.808 24.3672Z"
              fill="#FAFAFA"
            />
          </g>
        </svg>
        <p className={styles.containerText}>
          The perfect place for business growth, rich cultural experiences, and
          a comfortable lifestyle.
        </p>
      </div>
    </section>
  );
};

export default Envelop;
