"use client";
import { useRef } from "react";

import styles from "./Milestone.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

function Milestones() {
  const milestoneContainerRef = useRef();
  const mileClipPathRef = useRef();
  const revolutionRef = useRef();
  const infrastructureRef = useRef();
  const businessRef = useRef();
  const developmentRef = useRef();
  const milestonesRef = useRef();

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      // const master = gsap.timeline();

      const initialStates = () => {
        gsap.set(`.${styles.infrastructure}`, {
          xPercent: -130,
          opacity: 0,
        });
        gsap.set(`.${styles.business}`, {
          xPercent: -200,
          opacity: 0,
        });
        gsap.set(`.${styles.development}`, {
          xPercent: -300,
          opacity: 0,
        });
      };

      const animateBoxes = () => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: `.${styles.box}`,
            ease: "power2.inOut",
            start: "top 60%",
          },
        });

        tl.to(`.${styles.box}`, {
          xPercent: 0,
          stagger: 0.2,
          opacity: 1,
        });

        return tl;
      };

      const animateMilestone = () => {
        gsap.to(mileClipPathRef.current, {
          clipPath: "inset(0 0 0  100% )",
          ease: "ease.in",
          duration: 2,
          scrollTrigger: {
            trigger: mileClipPathRef.current,
            start: "top 70%",
            markers: false,
          },
        });
        gsap.from(`.${styles.milestoneElements} .${styles.item}`, {
          opacity: 0,
          stagger: 0.3,
          scrollTrigger: {
            trigger: `.${styles.mileClipPath}`,
            start: "top 70%",
            // markers: true,
          },
        });
      };
      initialStates();
      animateBoxes();
      animateMilestone();
    },
    { scope: milestoneContainerRef.current }
  );
  return (
    <div ref={milestoneContainerRef} className={styles.milestoneContainer}>
      <div ref={milestonesRef} className={styles.milestones}>
        <div className={styles.milestoneTitle}>
          Maharashtra&apos;s Path to a $1 Trillion Economy
        </div>
        <div className={styles.pillars}>
          <div className={styles.subtitle}>The Pillars</div>
          <div className={styles.elements}>
            <div
              ref={revolutionRef}
              className={styles.box + " " + styles.revolution}
            >
              <div className={styles.icon}>
                <Image
                  src="/images/Milestones/buildings.svg"
                  alt=""
                  width={50}
                  height={50}
                />
              </div>
              <div className={styles.boxTitle}>Industrial Revolution 4.0</div>
              <div className={styles.boxBody}>
                Pioneering smart manufacturing and cutting-edge technologies to
                position Maharashtra as a global leader.
              </div>
            </div>

            <div
              ref={infrastructureRef}
              className={styles.box + " " + styles.infrastructure}
            >
              <div className={styles.icon}>
                <Image
                  src="/images/Milestones/infrastructure.svg"
                  alt=""
                  width={50}
                  height={50}
                />
              </div>
              <div className={styles.boxTitle}>World-Class Infrastructure</div>
              <div className={styles.boxBody}>
                Building unmatched connectivity with global markets through
                world-class infrastructure projects.
              </div>
            </div>

            <div
              ref={businessRef}
              className={styles.box + " " + styles.business}
            >
              <div className={styles.icon}>
                <Image
                  src="/images/Milestones/business.svg"
                  alt=""
                  width={50}
                  height={50}
                />
              </div>
              <div className={styles.boxTitle}>Ease of Doing Business</div>
              <div className={styles.boxBody}>
                Creating a seamless, business-friendly environment with
                simplified regulations and transparent governance.
              </div>
            </div>

            <div
              ref={developmentRef}
              className={styles.box + " " + styles.development}
            >
              <div className={styles.icon}>
                <Image
                  src="/images/Milestones/development.svg"
                  alt=""
                  width={50}
                  height={50}
                />
              </div>
              <div className={styles.boxTitle}>Talent Development</div>
              <div className={styles.boxBody}>
                Nurturing a world-class talent pool ready to drive innovation
                and growth.
              </div>
            </div>
          </div>
        </div>

        <div className={styles.milestone}>
          <div className={styles.subtitle}>Milestones </div>
          <div ref={mileClipPathRef} className={styles.mileClipPath}>
            <div className={styles.track}>
              {/* <MilestoneTrack /> */}
              {/* <img src={Track} alt='' /> */}
            </div>
          </div>
          <div className={styles.milestoneElements}>
            <div className={styles.item}>
              <div className={styles.itemNumber}>2024</div>
              <div className={styles.line}>
                <picture>
                  <Image
                    src="/images/Milestones/NewTrack.svg"
                    alt=""
                    width={100}
                    height={100}
                  />
                </picture>
              </div>
              <div className={styles.itemBody}>
                Launch smart industrial zones, implement single-window
                clearance.
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.itemNumber}>2026</div>
              <div className={styles.line}>
                <Image
                  src="/images/Milestones/NewTrack.svg"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div className={styles.itemBody}>
                Expand renewable energy, complete Navi Mumbai Airport, grow
                metro network.
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.itemNumber}>2028</div>
              <div className={styles.line}>
                <Image
                  src="/images/Milestones/NewTrack.svg"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div className={styles.itemBody}>
                Complete smart cities, reach $800B GDP, expand global
                partnerships.
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.itemNumber}>2030</div>
              <div className={styles.line}>
                <Image
                  src="/images/Milestones/NewLastTrack.svg"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div className={styles.itemBody}>
                Achieve Vision 2030: Transform into a $1 trillion economy and a
                premier global investment destination.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Milestones;
