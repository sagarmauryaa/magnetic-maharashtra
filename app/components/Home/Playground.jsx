import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import styles from "../../page.module.css";
import sectorsData from "../../data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";

const Playground = () => {
  const sectorsRef = useRef([]);
  const sectorInsightsRef = useRef(null);
  const sectionRef = useRef(null);
  const sectionContainerRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [spacerHeight, setSpacerHeight] = useState(10);

  useEffect(() => {
    // Store the original height of the sector insights element
    if (sectorInsightsRef.current) {
      setSpacerHeight(sectorInsightsRef.current.offsetHeight);
    }

    // if (isSectorInsightsSticky) {
    //   sectorInsightsRef.current.style.top = "72px";
    // } else {
    //   sectorInsightsRef.current.style.top = "0px";
    // }

    const handleScroll = () => {
      if (sectionRef.current && sectorInsightsRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const sectionBottom = sectionRect.bottom;
        const insightsRect = sectorInsightsRef.current.getBoundingClientRect();
        const insightsTop = insightsRect.top;
        const sectionTop = sectionRect.top;

        // Make sticky only when the insights section reaches the top of viewport
        // And unstick when scrolling back up when original position is visible
        if (
          insightsTop <= 0 &&
          sectionBottom > spacerHeight &&
          sectionTop < -250
        ) {
          if (!isSticky) setIsSticky(true);
        } else {
          if (isSticky) setIsSticky(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isSticky, spacerHeight]);

  useGSAP(
    () => {
      sectorsRef.current.forEach((sectors, idx) => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: sectors,
              start: "top bottom",
              end: "bottom center",
              markers: false,
            },
          })

          .from(sectors, {
            yPercent: 30,
            delay: 0.05 * idx,
            ease: "power2.inOut",
          });
      });
    },
    { scope: sectionContainerRef }
  );

  return (
    <section className={styles.playgroundSection} ref={sectionRef}>
      <div ref={sectionContainerRef} className={styles.container}>
        <div className={styles.headingTitle}>
          <div className={styles.title}>
            <h1 className={styles.sectionTitle}>India&apos;s Growth </h1>
            <h1 className={styles.sectionTitle}>Engine</h1>
          </div>
          <div className={styles.subTitle}>
            <p className="">Powering India</p>
            <p className="">
              Maharashtra&apos;s contributions shape India&apos;s economic
              landscape, driving both domestic growth and global exports,
              setting benchmarks across diverse key industries.
            </p>
          </div>
        </div>

        <div
          className={`${styles.sectorInsights} ${
            isSticky ? styles.sticky : ""
          }`}
          ref={sectorInsightsRef}
        >
          <p className={styles.sectorInsightsTitle}>Sector Insights</p>
          <div className={styles.sectorsInsightsContainer}>
            <div className={styles.layoutHFlex}>
              <div className={styles.circleIndicator}></div>
              <p>Share in India&apos;s Output</p>
            </div>
            <div className={styles.layoutHFlex}>
              <div className={styles.circleIndicator}></div>
              <p>Share in India&apos;s Exports</p>
            </div>
          </div>
        </div>
        {/* Add a spacer div to prevent content jump when sector-insights becomes fixed */}
        {isSticky && (
          <div
            className={styles.sectorsInsightsSpacer}
            style={{ height: `${spacerHeight}px` }}
          ></div>
        )}
        <div className={styles.playgroundGrid}>
          {sectorsData.map((item, index) => (
            <Link
              ref={(el) => (sectorsRef.current[index] = el)}
              href={`sectors/${item.id}`}
              key={index}
              aria-controls=""
              className={styles.playgroundGridItem}
              style={{ gridArea: `${item.gridArea}` }}
              // onClick={() => handleChange(index)}
            >
              <Image
                className={styles.playgroundGridItemImage}
                src={item.imgPath}
                alt={item.name}
                width={100}
                height={100}
              />
              <div className={styles.playgroundContent}>
                <p>{item.name}</p>
                <p className={styles.playgroundPercent}>
                  <span>{item.l1}</span>
                  <span>{item.l2}</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Playground;
