"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import styles from "../../page.module.css";
import sectorsData from "../../data"; 
const Playground = () => { 
  const sectorInsightsRef = useRef(null);
  const sectionRef = useRef(null);
  const sectionContainerRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [spacerHeight, setSpacerHeight] = useState(10);

  useEffect(() => { 
    if (sectorInsightsRef.current) {
      setSpacerHeight(sectorInsightsRef.current.offsetHeight);
    }



    if (typeof window === "undefined" || !sectionRef.current || !sectorInsightsRef.current) return;
    const handleScroll = () => {
      // Use a debounced RAF for better performance
      let ticking = false;

      if (!ticking) {
        requestAnimationFrame(() => {
          if (!sectionRef.current || !sectorInsightsRef.current) return;

          const sectionRect = sectionRef.current.getBoundingClientRect();
          const insightsRect = sectorInsightsRef.current.getBoundingClientRect();
 
          const shouldBeSticky =
            window.pageYOffset > sectionRect.top &&
            sectionRect.bottom > spacerHeight &&
            sectionRect.top <=0;


          setIsSticky(shouldBeSticky);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [spacerHeight]);

 

  return (
    <section className={styles.playgroundSection} >
      <span className="anim-line -top is-below-1024" observer-animation="cssClass" observer-animation-classes="animateSingleLineIn" transform-origin="top left"></span>

      <div ref={sectionContainerRef} className={styles.container}>
        <div className={styles.headingTitle}>
          <div className={styles.title}>
            <h1 className={styles.sectionTitle} observer-animation="title">India&apos;s Growth <br />
              Engine
            </h1>
          </div>
          <div className={styles.subTitle}>
            <p className="" observer-animation="title">Powering India</p>
            <p className="" observer-animation="title">
              Maharashtra&apos;s contributions shape India&apos;s economic
              landscape, driving both domestic growth and global exports,
              setting benchmarks across diverse key industries.
            </p>
          </div>
        </div>

        <div ref={sectionRef}>
          <div className={`${styles.sectorInsightsWrapper} ${isSticky ? styles.sticky : ""}`} ref={sectorInsightsRef}>
            <div
              className={`${styles.sectorInsights}`}
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
          </div>
          <div
            className={styles.sectorsInsightsSpacer}
            style={{ height: `${spacerHeight}px` }}
          ></div>

          <div className={styles.playgroundGrid}>
            {sectorsData.map((item, index) => (
              <Link 
                href={`sectors/${item.id}`}
                key={index}
                aria-controls=""
                observer-animation="cssClass" observer-animation-classes="animateImagesIn" observer-animation-repeat="true"
                className={styles.playgroundGridItem}
                style={{ gridArea: `${item.gridArea}` }}
              >
                <div className={`${styles.playgroundGridItemImage} anim-imageContainer`}>
                  <div className="anim-imageWrapper">
                    <Image
                      className={` anim-image`}
                      src={item.imgPath}
                      alt={item.name}
                      width={400}
                      height={400}
                      quality={100}
                    />
                  </div></div>
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
      </div>
      <span className="anim-line -bottom" observer-animation="cssClass" observer-animation-classes="animateSingleLineIn" transform-origin="top left"></span>
    </section>
  );
};

export default Playground;
