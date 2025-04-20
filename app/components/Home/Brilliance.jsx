import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import gsap from "gsap";

import styles from "./Brilliance.module.css";

function Brilliance() {
  const pathRef = useRef([]);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.brilliance}`,
        ease: "ease.in",
        start: "top 75%",
        end: "bottom 50%",
      },
    });

    tl.from(`.${styles.brillianceElement}`, {
      opacity: 0,
      y: 100,
      stagger: 0.03,
    });

    pathRef.current.forEach((path) => {
      if (path) {
        const length = path.getTotalLength();
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;
        gsap.to(path, {
          strokeDashoffset: 0, // Animate the stroke to reveal from left to right
          duration: 0.75, // Duration of the animation
          ease: "power2.out", // Easing function
          scrollTrigger: {
            trigger: `.${styles.brilliance}`,
            ease: "ease.in",
            start: "top 75%",
          },
        });
      }
    });
  });
  return (
    <div className={styles.brillianceContainer}>
      <div className={styles.brilliance}>
        <div className={styles.brillianceLeft}>
          <div className={styles.brillianceTitle} observer-animation="title">The Base of Brilliance</div>
        </div>
        <div className={styles.brillianceRight}>
          <div className={styles.brillianceElements}>
            <div className={styles.brillianceElement} observer-animation-classes="animateAllLinesIn, animateImagesIn" observer-animation="cssClass">
              <div
                className={
                  styles.brillianceLeft + " " + styles.brillianceSubtitle
                }
              >
                Empowering Through Knowledge
              </div>
              <div
                className={styles.brillianceRight + " " + styles.brillianceBody}
              >
                Home to premier institutions like IIT Bombay, TISS, and
                Symbiosis, driving innovation in diverse fields.
              </div>
            <span class="anim-line -bottom" observer-animation="cssClass" observer-animation-classes="animateSingleLineIn" transform-origin="top left"></span>
            </div>
          </div>
          <div className={styles.brillianceElements}>
            <div className={styles.brillianceElement} observer-animation-classes="animateAllLinesIn, animateImagesIn" observer-animation="cssClass">
              <div
                className={
                  styles.brillianceLeft + " " + styles.brillianceSubtitle
                }
              >
                India’s Financial <br />
                Capital
              </div>
              <div
                className={styles.brillianceRight + " " + styles.brillianceBody}
              >
                Hosts RBI, NSE, BSE, and SEBI, shaping India’s financial
                policies and global markets.
              </div>
            <span class="anim-line -bottom" observer-animation="cssClass" observer-animation-classes="animateSingleLineIn" transform-origin="top left"></span>
            </div>
          </div>
          <div className={styles.brillianceElements}>
            <div className={styles.brillianceElement} observer-animation-classes="animateAllLinesIn, animateImagesIn" observer-animation="cssClass">
              <div
                className={
                  styles.brillianceLeft + " " + styles.brillianceSubtitle
                }
              >
                Most Industrialised <br />
                State
              </div>
              <div
                className={styles.brillianceRight + " " + styles.brillianceBody}
              >
                Combines infrastructure, skilled workforce, and strategic
                location to remain India’s industrial backbone.
              </div>
            <span class="anim-line -bottom" observer-animation="cssClass" observer-animation-classes="animateSingleLineIn" transform-origin="top left"></span>
            </div>
          </div>
          <div className={styles.brillianceElements}>
            <div className={styles.brillianceElement} observer-animation-classes="animateAllLinesIn, animateImagesIn" observer-animation="cssClass">
              <div
                className={
                  styles.brillianceLeft + " " + styles.brillianceSubtitle
                }
              >
                India’s Biggest <br />
                Employable Talent Pool
              </div>
              <div
                className={styles.brillianceRight + " " + styles.brillianceBody}
              >
                With 70% employable talent, it powers advanced industries and
                drives economic growth.
              </div>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brilliance;
