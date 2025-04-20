'use client'
import React, { useRef } from "react";
import styles from "./Incentives.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/all";

function Incentives() {
  const capRef = useRef(null);
  const landscapeRef = useRef(null);
  const environmentalRef = useRef(null);
  const sewRef = useRef(null);
  const laborRef = useRef(null);
  const interestRef = useRef(null);
  const taxRef = useRef(null);
  const singleRef = useRef(null);
  const incentivesRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    let mm = gsap.matchMedia();
    mm.add("(max-width:480px)", () => {
      const master = gsap.timeline({
        duration: 0.75,
        ease: "power2.inOut",
        scrollTrigger: {
          id: "in",
          markers: false,
          trigger: incentivesRef.current,
          start: "top 30%",
        },
      });

      const animate = () => {
        const tl = gsap.timeline();
        tl.from(
          capRef.current,
          {
            xPercent: 50,
            yPercent: 100,
          },
          "-=0.5"
        );

        tl.from(
          environmentalRef.current,
          {
            xPercent: 20,
            yPercent: 20,
          },
          "-=0.5"
        );

        tl.from(
          singleRef.current,
          {
            xPercent: -55,
            yPercent: 50,
            zIndex: 1,
          },
          "-=0.5"
        );

        tl.from(
          landscapeRef.current,
          {
            xPercent: -50,
            yPercent: 100,
          },
          "-=0.5"
        );

        tl.from(
          sewRef.current,
          {
            xPercent: 20,
            yPercent: -50,
          },
          "-=0.5"
        );

        tl.from(
          laborRef.current,
          {
            xPercent: 45,
            yPercent: -180,
          },
          "-=0.5"
        );

        tl.from(
          interestRef.current,
          {
            xPercent: 0,
            yPercent: -50,
          },
          "-=0.5"
        );

        tl.from(
          taxRef.current,
          {
            xPercent: -50,
            yPercent: -110,
          },
          "-=0.5"
        );
        return tl;
      };
      master.add(animate());
    });
    mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
      const master = gsap.timeline({
        duration: 0.75,
        ease: "power2.inOut",
        scrollTrigger: {
          id: "in",
          markers: false,
          trigger: incentivesRef.current,
          start: "top 70%",
        },
      });

      const animate = () => {
        const tl = gsap.timeline();
        tl.from(
          capRef.current,
          {
            xPercent: 50,
            yPercent: 250,
          },
          "-=0.5"
        );

        tl.from(
          environmentalRef.current,
          {
            xPercent: 20,
            yPercent: 20,
          },
          "-=0.5"
        );

        tl.from(
          singleRef.current,
          {
            xPercent: -55,
            yPercent: 200,
            zIndex: 1,
          },
          "-=0.5"
        );

        tl.from(
          landscapeRef.current,
          {
            xPercent: -40,
            yPercent: 200,
          },
          "-=0.5"
        );

        tl.from(
          sewRef.current,
          {
            xPercent: 20,
            yPercent: -150,
          },
          "-=0.5"
        );

        tl.from(
          laborRef.current,
          {
            xPercent: 45,
            yPercent: -180,
          },
          "-=0.5"
        );

        tl.from(
          interestRef.current,
          {
            xPercent: 0,
            yPercent: -30,
          },
          "-=0.5"
        );

        tl.from(
          taxRef.current,
          {
            xPercent: -50,
            yPercent: -110,
          },
          "-=0.5"
        );
        return tl;
      };
      master.add(animate());
    });
    mm.add("(min-width:1024px) and (max-width: 1280px)", () => {
      const master = gsap.timeline({
        duration: 1,
        ease: "power2.InOut",
        scrollTrigger: {
          id: "in",
          markers: false,
          trigger: incentivesRef.current,
          start: "top 80%",
        },
      });
      const initalStates = () => {
        gsap.set(`.${styles.cap}`, {
          scale: 0.8,
        });

        gsap.set(`.${styles.environmental}`, {
          scale: 0.8,
        });

        gsap.set(`.${styles.single}`, {
          scale: 0.8,
        });
        gsap.set(`.${styles.landscape}`, {
          scale: 0.8,
        });

        gsap.set(`.${styles.sew}`, {
          scale: 0.8,
        });

        gsap.set(`.${styles.labor}`, {
          scale: 0.8,
        });

        gsap.set(`.${styles.interest}`, {
          scale: 0.8,
        });

        gsap.set(`.${styles.tax}`, {
          scale: 0.8,
        });
      };
      const animate = () => {
        const tl = gsap.timeline();
        tl.from(
          capRef.current,
          {
            xPercent: 210,
            yPercent: 160,
          },
          "-=0.5"
        );

        tl.from(
          environmentalRef.current,
          {
            xPercent: 85,
            yPercent: 50,
          },
          "-=0.5"
        );

        tl.from(
          singleRef.current,
          {
            xPercent: -55,
            yPercent: 250,
            zIndex: 1,
          },
          "-=0.5"
        );
        tl.from(
          landscapeRef.current,
          {
            xPercent: -175,
            yPercent: 170,
          },
          "-=0.5"
        );

        tl.from(
          sewRef.current,
          {
            xPercent: 150,
            yPercent: -195,
          },
          "-=0.5"
        );

        tl.from(
          laborRef.current,
          {
            xPercent: -25,
            yPercent: -180,
          },
          "-=0.5"
        );

        tl.from(
          interestRef.current,
          {
            xPercent: -20,
            yPercent: -155,
          },
          "-=0.5"
        );

        tl.from(
          taxRef.current,
          {
            xPercent: -150,
            yPercent: -110,
          },
          "-=0.5"
        );
        return tl;
      };
      master.add(animate());
    });
    mm.add("(min-width:1281px)", () => {
      const master = gsap.timeline({
        duration: 1,
        ease: "power2.InOut",
        scrollTrigger: {
          id: "in",
          markers: false,
          trigger: incentivesRef.current,
          start: "top 80%",
        },
      });

      const animate = () => {
        const tl = gsap.timeline();
        tl.from(
          capRef.current,
          {
            xPercent: 210,
            yPercent: 160,
          },
          "-=0.5"
        );

        tl.from(
          environmentalRef.current,
          {
            xPercent: 35,
            yPercent: 80,
          },
          "-=0.5"
        );

        tl.from(
          singleRef.current,
          {
            xPercent: -55,
            yPercent: 250,
            zIndex: 1,
          },
          "-=0.5"
        );
        tl.from(
          landscapeRef.current,
          {
            xPercent: -175,
            yPercent: 170,
          },
          "-=0.5"
        );

        tl.from(
          sewRef.current,
          {
            xPercent: 150,
            yPercent: -195,
          },
          "-=0.5"
        );

        tl.from(
          laborRef.current,
          {
            xPercent: -25,
            yPercent: -180,
          },
          "-=0.5"
        );

        tl.from(
          interestRef.current,
          {
            xPercent: -20,
            yPercent: -155,
          },
          "-=0.5"
        );

        tl.from(
          taxRef.current,
          {
            xPercent: -150,
            yPercent: -110,
          },
          "-=0.5"
        );
        return tl;
      };
      // initalStates();
      master.add(animate());
    });
  }, []);

  return (
    <div className={styles.incentivesContainer}>
      <div ref={incentivesRef} className={styles.incentives}>
        <div className={styles.incentivesTitle}>
          <div className={styles.incentivesTitleTop}>Incentives</div>
          <span>Promises, actually kept.</span>
        </div>
        <div className={styles.incentivesElements}>
          <div ref={capRef} className={styles.cap}>
            <p>Cap Subsidies</p>
          </div>
          <div ref={singleRef} className={styles.single}>
            <div className={styles.singleContent}>
              <p>Single- Window Clearance System</p>
              <div className={styles.singleContentImage}>
                <img
                  src="/images/Incentives/Single_Window.svg"
                  alt="Single Window Clearance System"
                />
              </div>
            </div>
          </div>
          <div ref={landscapeRef} className={styles.landscape}>
            <Image
              src="/images/Incentives/landscape.png"
              alt=""
              width={220}
              height={140}
            />
          </div>

          <div ref={environmentalRef} className={styles.environmental}>
            <div className={styles.environmentalContent}>
              <div className={styles.environmentalContentImage}>
                <img
                  src="/images/Incentives/Environmental_Incentives.svg"
                  alt="Environmental Incentives"
                />
              </div>
              <p>Environmental Incentives</p>
            </div>
          </div>
          <div ref={sewRef} className={styles.sew}>
            <Image
              src="/images/Incentives/sew.png"
              alt=""
              width={220}
              height={140}
            />
          </div>

          <div ref={laborRef} className={styles.labor}>
            <Image
              src="/images/Incentives/Labor_Law.svg"
              alt=""
              width={100}
              height={100}
            />
            <p>Labor Law Flexibility</p>
          </div>

          <div ref={interestRef} className={styles.interest}>
            <div className={styles.interestContent}>
              <p>Interest Subsidy</p>
            </div>
          </div>

          <div ref={taxRef} className={styles.tax}>
            <div className={styles.taxContent}>
              <Image
                src="/images/Incentives/Tax_Incentives.svg"
                alt=""
                width={40}
                height={40}
              />
              <p>₹2,450</p>
            </div>
            <p>Tax Incentives</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Incentives;
