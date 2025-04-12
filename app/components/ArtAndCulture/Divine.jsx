"use client";

import React from "react";
import styles from "../ArtAndCulture/Divine.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";

function Divine() {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.${styles.divineContainer}`,
          start: "top center",
          end: "bottom center",
        },
      })
      .from(`.${styles.imageContentBodyTitle}`, {
        yPercent: 50,
        opacity: 0,
        duration: 0.65,
        ease: "expo.Out",
      })
      .from(
        `.${styles.imageContentBodyBody}`,
        {
          yPercent: 50,
          opacity: 0,
          duration: 0.65,
          ease: "expo.Out",
        },
        "<0.2"
      )
      .from(
        `.${styles.divineBox}`,
        {
          opacity: 0,
          yPercent: 50,
          stagger: 0.2,
        },
        "<0.2"
      );

    // gsap
    //   .timeline({
    //     scrollTrigger: {
    //       trigger: ".cultureSignificance",
    //       start: "top center",
    //       end: "bottom center",
    //     },
    //   })
    //   .from(".cultureSignificance hr", {
    //     width: 0,
    //     duration: 0.65,
    //     ease: "expo.Out",
    //   })
    //   .from(".cultureSignificance #cultureSignificanceTitle", {
    //     yPercent: 50,
    //     opacity: 0,
    //     duration: 0.65,
    //     ease: "expo.Out",
    //   })
    //   .from(".cultureSignificance #cultureSignificanceBody", {
    //     yPercent: 50,
    //     opacity: 0,
    //     duration: 0.65,
    //     ease: "expo.Out",
    //   });
  });
  return (
    <div className={styles.divineContainer}>
      <div className={styles.divine}>
        <div className={styles.artImageContent}>
          <picture loading="lazy" className={styles.divineImage}>
            <source
              srcSet="/images/Art&Culture_page/temple.webp"
              media="(min-width:360px) and (max-width:480px)"
            />
            <source
              srcSet="/images/Art&Culture_page/divine_tab.webp"
              media="(min-width:768px) and (max-width:1023px)"
            />
            <img src="/images/Art&Culture_page/divine.webp" alt="" />
          </picture>
          <div>
            <div className={styles.imageContentBody}>
              <div className={styles.imageContentBodyTitle}>
                A journey to the divine
              </div>
              <div className={styles.imageContentBodyBody}>
                Maharashtra’s spiritual landmarks attract millions, offering
                peace and enlightenment.
              </div>
            </div>
          </div>
          <div className={styles.boxContainer}>
            <div className={styles.divineBox}>
              <div className={styles.title}>Shirdi Sai Baba Temple</div>
              <div className={styles.body}>
                A global pilgrimage site symbolizing love, forgiveness, and
                faith.
              </div>
            </div>
            <div className={styles.divineBox}>
              <div className={styles.title}>Ashtavinayak Temples </div>
              <div className={styles.body}>
                A circuit of eight temples dedicated to Lord Ganesha, celebrated
                for their unique architecture and legends.
              </div>
            </div>
            <div className={styles.divineBox}>
              <div className={styles.title}>Jyotirlingas in Maharashtra</div>
              <div className={styles.body}>
                Maharashtra has three sacred Jyotirlingas—Trimbakeshwar,
                Bhimashankar, and Grishneshwar—revered for their divinity.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cultureSignificance}>
          <hr />
          <div>
            <div>#Cultural Significance</div>
            <div>
              Maharashtra’s pilgrimage sites are more than places of worship –
              they are cultural hubs where rituals, music, and community
              celebrations preserve vibrant heritage and timeless traditions.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Divine;
