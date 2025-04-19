'use client'
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import styles from "./Arts.module.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

function Arts() {
  const firstImageRef = useRef(null);
  const secondImageRef = useRef(null);
  const thirdImageRef = useRef(null);
  const fourthImageRef = useRef(null);
  const fifthImageRef = useRef(null);
  const artsRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(min-width:768px) and (max-width: 1023px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: artsRef.current,
          // markers: true,
          start: "top 50%",
          end: "top 30%",
          // scrub: true,
          duration: 1,
        },
      });
      //   gsap.set(".img1", {
      //     x: 250,
      //     y: 350,
      //     marginTop: 0,
      //   });

      //   gsap.set(".img2", {
      //     x: 50,
      //     y: 350,
      //     marginTop: 0,
      //   });

      //   gsap.set(".img3", {
      //     x: -250,
      //     y: 350,
      //     marginTop: 0,
      //   });

      //   gsap.set(".img4", {
      //     x: 150,
      //     // y: -250,
      //     marginTop: 0,
      //   });

      //   gsap.set(".img5", {
      //     x: -150,
      //     // y: -250,
      //     marginTop: 0,
      //   });

      //   tl.from(".arts span", {
      //     y: 200,
      //     duration: 1,
      //     stagger: 0.1,
      //     ease: "power4.out",
      //   })
      //     .to(".img1", {
      //       transform: "rotate(-5deg) scale(0.7)",
      //       marginTop: "-4rem",
      //       // marginLeft: "4rem",
      //       ease: "power4.inOut",
      //       delay: 0.1,
      //       duration: 0.35,
      //     })
      //     .to(".img2", {
      //       transform: "rotate(14deg) scale(0.7)",
      //       // marginTop: "3rem",
      //       delay: 0.1,
      //       // marginLeft: "-2rem",
      //       duration: 0.35,
      //     })
      //     .to(".img3", {
      //       transform: "rotate(-6deg) scale(0.7)",
      //       marginTop: "-3rem",
      //       // marginLeft: "-3rem",
      //       delay: 0.1,
      //       duration: 0.35,
      //     })
      //     .to(".img4", {
      //       transform: "rotate(-6deg) scale(0.7)",
      //       // marginTop: "-2rem",
      //       delay: 0.1,
      //       duration: 0.35,
      //     })
      //     .to(".img5", {
      //       transform: "rotate(10deg) scale(0.7)",
      //       // marginTop: "-10rem",
      //       delay: 0.1,
      //       duration: 0.35,
      //     });
    });

    mm.add("(min-width:1024px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: artsRef.current,
          // markers: true,
          start: "top 50%",
          end: "top 30%",
          // scrub: true,
          duration: 1,
        },
      });
      gsap.set(firstImageRef.current, {
        x: 250,
        y: 350,
        marginTop: 0,
      });

      gsap.set(secondImageRef.current, {
        x: 50,
        y: 350,
        marginTop: 0,
      });

      gsap.set(thirdImageRef.current, {
        x: -250,
        y: 350,
        marginTop: 0,
      });

      gsap.set(fourthImageRef.current, {
        x: 150,
        // y: -250,
        marginTop: 0,
      });

      gsap.set(fifthImageRef.current, {
        x: -150,
        // y: -250,
        marginTop: 0,
      });

      tl.to(
        firstImageRef.current,
        {
          transform: "rotate(-5deg)",
          marginTop: "-4rem",
          ease: "power4.inOut",
          delay: 0.1,
          duration: 0.65,
        },
        "<0.35"
      )
        .to(
          secondImageRef.current,
          {
            transform: "rotate(14deg)",
            // marginTop: "3rem",
            delay: 0.1,
            duration: 0.65,
          },
          "<0.1"
        )
        .to(
          thirdImageRef.current,
          {
            transform: "rotate(-6deg)",
            marginTop: "-3rem",
            delay: 0.1,
            duration: 0.65,
          },
          "<0.1"
        )
        .to(
          fourthImageRef.current,
          {
            transform: "rotate(-6deg)",
            marginTop: "-2rem",
            delay: 0.1,
            duration: 0.65,
          },
          "<0.1"
        )
        .to(
          fifthImageRef.current,
          {
            transform: "rotate(10deg)",
            // marginTop: "-10rem",
            delay: 0.1,
            duration: 0.65,
          },
          "<0.1"
        );
    });
  });

  return (
    <section ref={artsRef} className={styles.arts}>
      <div className={styles.artContainer}>
        <h1 className={styles.artsCultureTitle}>
          <span className={styles.artsTitle}>Arts</span>
          <span className={styles.andTitle}>&</span>
          <span className={styles.cultureTitle}>Culture</span>
        </h1>

        <div className={styles.imgContainer}>
          <div className={styles.artImage}>
            <div ref={firstImageRef} className={styles.img1}>
              <Image
                src="/images/Art/cinema.png"
                width={260}
                height={333}
                alt=""
              />
            </div>
            <div ref={secondImageRef} className={styles.img2}>
              <Image
                src="/images/Art/folkArt.png"
                width={260}
                height={333}
                alt=""
              />
            </div>
            <div ref={thirdImageRef} className={styles.img3}>
              <Image
                src="/images/Art/crafts.png"
                width={260}
                height={333}
                alt=""
              />
            </div>
          </div>
          <div className={styles.artImage}>
            <div ref={fourthImageRef} className={styles.img4}>
              <Image
                src="/images/Art/landmark.png"
                width={260}
                height={333}
                alt=""
              />
            </div>
            <div ref={fifthImageRef} className={styles.img5}>
              <Image
                src="/images/Art/bollywood.png"
                width={260}
                height={333}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Arts;
