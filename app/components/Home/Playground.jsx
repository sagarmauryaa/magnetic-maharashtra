import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../page.module.css";
import sectorsData from "../../data";

const Playground = () => {
  return (
    <section className={styles.playgroundSection}>
      <div className={styles.container}>
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
        <div className={styles.sectorInsights}>
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
        {/* {isSticky && (
        <div
          className="sector-insights-spacer"
          style={{ height: `${spacerHeight}px` }}
        ></div>
      )} */}
        <div className={styles.playgroundGrid}>
          {sectorsData.map((item, index) => (
            <Link
              // ref={(el) => (sectorsRef.current[index] = el)}
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
