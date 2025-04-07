"use client";

import React from "react";
import styles from "../ArtAndCulture/Festivals.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
function Festivals() {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".festivals",
          start: "top center",
          end: "center center",
          ease: "expo.out",
          duration: 1,
        },
      })
      .from(".festivals .heading", {
        yPercent: 50,
        opacity: 0,
        duration: 0.65,
        ease: "expo.out",
      })
      .from(".festivals .festival-container", {
        yPercent: 50,
        opacity: 0,
        duration: 0.65,
        ease: "expo.out",
        stagger: 0.2,
      });
  });
  return (
    <section className={styles.festivalsContainer}>
      <div className={styles.festivals}>
        <h1 className={styles.heading}>
          <span>Festivals and Celebrations</span>
          <br />
          in Maharashtra
        </h1>

        <div className={styles.festivalContainer}>
          <div className={styles.festivalImage}>
            <picture>
              <source
                srcSet="/images/Art&Culture_page/gudiPadwaMobile.webp"
                media="(max-width:480px)"
              />
              <img src="/images/Art&Culture_page/gudiPadwa.webp" alt="" />
            </picture>
          </div>
          <div className={styles.festivalContent}>
            <div className={styles.festivalTitle}>Gudi Padwa</div>
            <div className={styles.festivalBody}>
              Gudi Padwa welcomes the New Year with festive flags, sweet dishes,
              and colorful rangoli, symbolizing prosperity and the arrival of
              spring.
            </div>
          </div>
        </div>
        <div className={styles.festivalContainer}>
          <div className={styles.festivalImage}>
            <picture>
              <source
                srcSet="/images/Art&Culture_page/AshadhiEkadashi_mobile.webp"
                media="(max-width:480px)"
              />
              <img src="/images/Art&Culture_page/AshadhiEkadashi.webp" alt="" />
            </picture>
          </div>
          <div className={styles.festivalContent}>
            <div className={styles.festivalTitle}>Ashadhi Ekadashi</div>
            <div className={styles.festivalBody}>
              Thousands of devotees walk to Pandharpur, singing and celebrating
              God Vithoba, reflecting devotion, unity, and spiritual fervor.
            </div>
          </div>
        </div>
        <div className={styles.festivalContainer}>
          <div className={styles.festivalImage}>
            <picture>
              <source
                srcSet="/images/Art&Culture_page/nag.webp"
                media="(max-width:480px)"
              />
              <img src="/images/Art&Culture_page/NagPanchami.webp" alt="" />
            </picture>
          </div>
          <div className={styles.festivalContent}>
            <div className={styles.festivalTitle}>Nag Panchami</div>
            <div className={styles.festivalBody}>
              Nag Panchami honors snakes with offerings of milk and flowers,
              celebrating their role in agriculture and the balance of nature.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Festivals;
