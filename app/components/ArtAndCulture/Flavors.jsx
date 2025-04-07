"use client";

import React, { useState } from "react";
import styles from "./Flavors.module.css";
import flavor from "../../flavor";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";

function Flavors() {
  useGSAP(() => {
    gsap.from(`.${styles.flavors} .${styles.heading}`, {
      yPercent: 50,
      opacity: 0,
      duration: 0.65,
      ease: "expo.Out",
      scrollTrigger: {
        trigger: `.${styles.flavorContainer}`,
        // markers: true,
        start: "top 60%",
      },
    });
    gsap.from(`.${styles.flavorGridItem}`, {
      opacity: 0,
      yPercent: 50,
      stagger: 0.2,
      scrollTrigger: {
        trigger: `.${styles.flavorGrid}`,
        start: "top 30%",
        // markers: true,
      },
    });
  });

  const [show, setShow] = useState(false);

  return (
    <div className={styles.flavorContainer}>
      <div className={styles.flavors}>
        <h1 className={styles.heading}>
          <span>Flavors</span> of Maharashtra
        </h1>

        <div className={styles.flavorGrid}>
          {flavor.slice(0, show ? flavor.length : 3).map((item, index) => {
            return (
              <div className={styles.flavorGridItem} key={index}>
                <div className={styles.flavorTitle}>{item.title}</div>
                <div className={styles.flavorImage}>
                  <img src={item.img} alt="" />
                </div>
                <div className={styles.flavorBody}>{item.body}</div>
              </div>
            );
          })}

          <button
            className={styles.flavorButton}
            onClick={() => setShow(!show)}
          >
            {show ? "See Less" : "See more"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Flavors;
