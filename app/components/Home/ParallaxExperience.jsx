'use client'
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { useRef, useLayoutEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

import styles from "../../page.module.css";

const ParallaxExperience = () => {
  const parallaxRef = useRef();
  const mountainFrontRef = useRef();
  const mountainBackRef = useRef();
  const parallaxTextRef = useRef();

  let mm = gsap.matchMedia();

  // Register ScrollTrigger plugin
  useLayoutEffect(() => {
    if (!ScrollTrigger.isRegistered) {
      gsap.registerPlugin(ScrollTrigger);
    }
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill(false));
    };
  }, []);

  useGSAP(() => {
    mm.add("(min-width: 1024px) and (max-width: 1919px)", () => {
      gsap.set(mountainFrontRef.current, {
        scale: 1,
        transformOrigin: "center center",
      });
      gsap.set(mountainBackRef.current, { yPercent: 0 });
      gsap.set(parallaxTextRef.current, {
        y: "-100%",
        color:"#fff",
      });

      gsap
        .timeline({
          defaults: { duration: 1, ease: "none" },
          scrollTrigger: {
            trigger: parallaxRef.current,
            start: "30% 60%",
            end: "bottom center-=20%",
            markers: false,
            scrub: 0.5,
          },
        })

        .to(mountainBackRef.current, { yPercent: -10 }, "<")
        .to(
          parallaxTextRef.current,
          {
            y: "350%",
            color: "#fff",
            force3D: true,
          },
          "<"
        );
    });

    mm.add("(min-width: 1920px)", () => {
      gsap.set(mountainFrontRef.current, {
        scale: 1,
        transformOrigin: "center center",
      });
      gsap.set(mountainBackRef.current, { yPercent: 0 });
      gsap.set(parallaxTextRef.current, {
        y: "-120%",
        color: "#fff",

      });

      gsap
        .timeline({
          defaults: { duration: 1, ease: "none" },
          scrollTrigger: {
            trigger: parallaxRef.current,
            start: "10% 10%",
            end: "bottom bottom",
            markers: false,
            scrub: 0.1,
          },
        })
        .to(mountainFrontRef.current, {
          scale: 1.1,
          transformOrigin: "center center",
        })
        .to(mountainBackRef.current, { yPercent: -20 }, "<")
        .to(
          parallaxTextRef.current,
          {
            y: "400%",
            color: "#fff",
            force3D: true,
          },
          "<"
        );

    });

    mm.add("(min-width: 320px) and (max-width: 480px)", () => {
      gsap.set(mountainFrontRef.current, {
        scale: 1.05,
        transformOrigin: "center center",
      });
      gsap.set(mountainBackRef.current, { yPercent: 10 });
      gsap.set(parallaxTextRef.current, {
        y: "-150%",
        color: "#fff",
      });

      gsap
        .timeline({
          defaults: { duration: 1, ease: "none" },
          scrollTrigger: {
            trigger: parallaxRef.current,
            start: "0% 20%",
            end: "40%",
            markers: false,
            scrub: 0.1,
            // markers: true,
          },
        })
        .to(mountainFrontRef.current, {
          scale: 1.15,
          transformOrigin: "center center",
        })
        .to(mountainBackRef.current, { yPercent: -15 }, "<")
        .to(
          parallaxTextRef.current,
          {
            color: "#fff",

            y: "280%",
            force3D: true,
          },
          "<"
        );
    });
  });

  return (
    <section ref={parallaxRef} className={styles.parallax}>
      <Image
        width={100}
        height={100}
        ref={mountainBackRef}
        src="/images/Mountain back.png"
        id={styles.mountain2}
        alt="back-image"
        quality={100}
        unoptimized={true}
      />
      <h2
        ref={parallaxTextRef}
        className={styles.text}
        style={{
          willChange: "transform",
          backfaceVisibility: "hidden",
          perspective: 1000,
        }}
      >
        Experience
      </h2>
      <div className={styles.gradientBG}></div>
      <Image
        width={100}
        height={100}
        ref={mountainFrontRef}
        src="/images/Mountain_front.png"
        id={styles.mountain1}
        alt="front-image"
        quality={100}
        unoptimized={true}
      />
      <div className={styles.landOfWonders}>
        A Land&nbsp;<span className={styles.highlight}>
          of
        </span><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wonders
      </div>
      <div className={styles.outerContainer}>
        <div className={styles.outerChildContainer}>
          <div className={styles.innerContainer}>
            <div className={styles.loopTextContainer}>
              <Image
                width={100}
                height={100}
                src="/images/flower.png"
                alt="flower"
                quality={100}
              />
              <p>Discover Vibrant Destinations</p>
            </div>
            <div className={styles.loopTextContainer}>
              <Image
                width={100}
                height={100}
                src="/images/flower.png"
                alt="flower"
              />
              <p>Immerse in Culture</p>
            </div>
            <div className={styles.loopTextContainer}>
              <Image
                width={100}
                height={100}
                src="/images/flower.png"
                alt="flower"
              />
              <p>Adventure Awaits</p>
            </div>
            <div className={styles.loopTextContainer}>
              <Image
                width={100}
                height={100}
                src="/images/flower.png"
                alt="flower"
              />
              <p>Travel Tips</p>
            </div>
            <div className={styles.loopTextContainer}>
              <Image
                width={100}
                height={100}
                src="/images/flower.png"
                alt="flower"
              />
              <p>Discover Vibrant Destinations</p>
            </div>
            <div className={styles.loopTextContainer}>
              <Image
                width={100}
                height={100}
                src="/images/flower.png"
                alt="flower"
              />
              <p>Immerse in Culture</p>
            </div>
            <div className={styles.loopTextContainer}>
              <Image
                width={100}
                height={100}
                src="/images/flower.png"
                alt="flower"
              />
              <p>Adventure Awaits</p>
            </div>
            <div className={styles.loopTextContainer}>
              <Image
                width={100}
                height={100}
                src="/images/flower.png"
                alt="flower"
              />
              <p>Travel Tips</p>
            </div>
            <div className={styles.loopTextContainer}>
              <Image
                width={100}
                height={100}
                src="/images/flower.png"
                alt="flower"
              />
              <p>Discover Vibrant Destinations</p>
            </div>
            <div className={styles.loopTextContainer}>
              <Image
                width={100}
                height={100}
                src="/images/flower.png"
                alt="flower"
              />
              <p>Immerse in Culture</p>
            </div>
            <div className={styles.loopTextContainer}>
              <Image
                width={100}
                height={100}
                src="/images/flower.png"
                alt="flower"
              />
              <p>Adventure Awaits</p>
            </div>
            <div className={styles.loopTextContainer}>
              <Image
                width={100}
                height={100}
                src="/images/flower.png"
                alt="flower"
              />
              <p>Travel Tips</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.paperCutContainer}>
        <img
          width={100}
          height={20}
          className={styles.paperCutImage}
          src="/images/paperCut.webp"
          alt="papercut"
        />
      </div>
    </section>
  );
};

export default ParallaxExperience;
