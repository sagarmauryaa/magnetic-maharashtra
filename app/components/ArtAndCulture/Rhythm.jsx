"use client";

import React, { useState } from "react";
import { useRef } from "react";
import gsap from "gsap/all";
import styles from "../ArtAndCulture/Rhythm.module.css";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { ScrollTrigger } from "gsap/all";

function Rhythm() {
  const rhythm = useRef();
  const scrollSectionRef = useRef();
  const scrollTriggerRef = useRef();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    let mm = gsap.matchMedia();
    mm.add("(min-width:768px)", () => {
      const scrollWidth =
        scrollSectionRef.current.scrollWidth -
        scrollSectionRef.current.clientWidth;

      gsap.to(scrollSectionRef.current, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: `.${styles.rhythm}`,
          start: "20% top",
          end: `+=${scrollWidth}`,
          scrub: true,
          pin: true,
          pinSpacing: true,
          invalidateOnRefresh: true,
          refreshPriority: 5,
          markers: false,
        },
      });
      // gsap.from(".rhythm-heading", {
      //   yPercent: 50,
      //   scrollTrigger: {
      //     trigger: ".rhythm-container",
      //     // markers: true,
      //     start: "top 60%",
      //   },
      // });
    });
  });

  // dragScroll

  // const rhythmRef = useRef(null);
  // const [isMouseDown, setIsMouseDown] = useState(false);
  // const [startX, setStartX] = useState(0);
  // const [scrollLeft, setScrollLeft] = useState(0);

  // const handleMouseDown = (e, ref) => {
  //   setIsMouseDown(true);
  //   setStartX(e.pageX - -ref.current.offsetLeft);
  //   setScrollLeft(ref.current.scrollLeft);
  // };
  // const handleMouseLeave = (e) => {
  //   setIsMouseDown(false);
  // };
  // const handleMouseUp = (e) => {
  //   setIsMouseDown(false);
  // };
  // const handleMouseMove = (e, ref) => {
  //   if (isMouseDown == false) return;
  //   e.preventDefault();
  //   const x = e.pageX - ref.current.offsetLeft;
  //   const walk = (x - startX) * 1.2;
  //   ref.current.scrollLeft = scrollLeft - walk;
  // };

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.rhythmContainer}`,
        start: "top center",
      },
    });
    tl.from(`.${styles.rhythmHeading}`, {
      yPercent: 30,
      opacity: 0,
      duration: 0.65,
      ease: "expo.Out",
    })
      .from(
        `.${styles.rhythmPara} p`,
        {
          yPercent: 30,
          opacity: 0,
          duration: 0.65,
          ease: "expo.Out",
        },
        "<=0.3"
      )
      .from(
        [
          `.${styles.scrollImageContainer} > div`,
          `.${styles.rhythmMobileImageWrapper}`,
        ],
        {
          yPercent: 30,
          opacity: 0,
          duration: 0.65,
          ease: "expo.Out",
          stagger: 0.1,
        },
        "<=0.3"
      );

    // gsap
    //   .timeline({
    //     scrollTrigger: {
    //       trigger: ".cultureSignificance",
    //       start: "top center",
    //       end: "bottom center",
    //       markers: false,
    //     },
    //   })
    //   .from(".cultureSignificance hr", {
    //     width: 0,
    //     duration: 0.65,
    //     ease: "expo.Out",
    //   })
    //   .from(
    //     ".cultureSignificance #cultureSignificanceTitle",
    //     {
    //       yPercent: 30,
    //       opacity: 0,
    //       duration: 0.65,
    //       ease: "expo.Out",
    //     },
    //     "<=0.2"
    //   )
    //   .from(
    //     ".cultureSignificance #cultureSignificanceBody",
    //     {
    //       yPercent: 30,
    //       opacity: 0,
    //       duration: 0.65,
    //       ease: "expo.Out",
    //     },
    //     "<0.2"
    //   );
  });

  return (
    <div className={styles.rhythmContainer}>
      <div className={styles.rhythm} ref={rhythm}>
        <div className={styles.rhythmHeading}>
          The <span>Rhythms</span> of Maharashtra
        </div>
        <div className={styles.rhythmPara}>
          <p>
            {" "}
            Music and dance are the heartbeat of Maharashtra’s rich heritage –
            celebrating life, culture, and stories through vibrant expressions.
          </p>
        </div>
        <div className={styles.rhythmScroll} ref={scrollTriggerRef}>
          <div
            className={styles.scrollImageContainer}
            ref={scrollSectionRef}
            style={{
              width: `100%`,
              // display: `flex`,
              // gap: `2rem`,
              // overflowX: `auto`,
              scrollbarColor: `transparent transparent`,
              userSelect: `none`,
              // backgroundColor: `rgba(213, 213, 213, 0.963)`,
            }}
            // ref={rhythmRef}
            // onMouseDown={(e) => handleMouseDown(e, rhythmRef)}
            // onMouseLeave={handleMouseLeave}
            // onMouseUp={handleMouseUp}
            // onMouseMove={(e) => handleMouseMove(e, rhythmRef)}
          >
            <div>
              <img src="/images/Art&Culture_page/classicalMusic.webp" alt="" />
              <div>
                <div className={styles.rhythmTitle}>Classical Music</div>
                <p className={styles.rhythmBody}>
                  Pune is a key hub for classical music, hosting prestigious
                  events like the Sawai Gandharva Festival.
                </p>
              </div>
            </div>
            <div>
              <img src="/images/Art&Culture_page/img2.webp" alt="" />
              <div>
                <div className={styles.rhythmTitle}>Natya Sangeet</div>
                <p className={styles.rhythmBody}>
                  A unique blend of drama and music that preserves Marathi
                  cultural heritage through theatre and performance.
                </p>
              </div>
            </div>
            <div>
              <img src="/images/Art&Culture_page/img3.webp" alt="" />
              <div>
                <div className={styles.rhythmTitle}>Lavani</div>
                <p className={styles.rhythmBody}>
                  This is a popular dance form associated with the spirited
                  rhythms of Dholki, performed traditionally by female artists.
                  It is characterized by powerful, sensual dance movements and
                  is often used to tell stories or discuss social issues through
                  poetry.
                </p>
              </div>
            </div>

            <div>
              <img src="/images/Art&Culture_page/tamasha.webp" alt="" />
              <div>
                <div className={styles.rhythmTitle}>Tamasha</div>
                <p className={styles.rhythmBody}>
                  Derived from the Mughal era, this theatrical entertainment
                  includes singing, dancing, and playing musical instruments. It
                  is known for its lively performances and is traditionally
                  associated with the traveling theatre troupes of Maharashtra.
                </p>
              </div>
            </div>
            <div>
              <img src="/images/Art&Culture_page/img4.webp" alt="" />
              <div>
                <div className={styles.rhythmTitle}>Dholki</div>
                <p className={styles.rhythmBody}>
                  A percussion instrument widely used in rural Maharashtra to
                  accompany folk dances and music performances.
                </p>
              </div>
            </div>
            <div>
              <img src="/images/Art&Culture_page/lezim.webp" alt="" />
              <div>
                <div className={styles.rhythmTitle}>Lezim</div>
                <p className={styles.rhythmBody}>
                  The state has a long tradition of pottery and terracotta
                  works, ranging from household items to decorative murals,
                  showcasing the versatility of the local artisans.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rhythmMobileImageContainer}>
          <div className={styles.rhythmMobileImageWrapper}>
            <div className={styles.rhythmTitle}>Classical Music</div>
            <div>
              <img src="/images/Art&Culture_page/classicalMusic.webp" alt="" />
              <div className={styles.rhythmWrapper}>
                <p className={styles.rhythmBody}>
                  Maharashtra has a storied history of classical music,
                  contributing significantly to both the Hindustani and Carnatic
                  music traditions. Pune, especially, is known as a major center
                  for classical music, hosting prestigious events like the Sawai
                  Gandharva Music Festival.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.rhythmMobileImageWrapper}>
            <div className={styles.rhythmTitle}>Natya Sangeet</div>
            <div>
              <img src="/images/Art&Culture_page/img2.webp" alt="" />
              <div className={styles.rhythmWrapper}>
                <p className={styles.rhythmBody}>
                  A musical theatre genre that is a blend of drama and music,
                  Natya Sangeet plays a crucial role in Marathi culture, used in
                  both folk theatre and modern performances. It originated to
                  convey devotional and social themes to the masses through an
                  engaging medium.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.rhythmMobileImageWrapper}>
            <div className={styles.rhythmTitle}>Folk Dances</div>
            <div>
              <img src="/images/Art&Culture_page/img3.webp" alt="" />
              <div className={styles.rhythmWrapper}>
                <div className={styles.rhythmInnerTitle}>Lavani</div>
                <p className={styles.rhythmBody}>
                  This is a popular dance form associated with the spirited
                  rhythms of Dholki, performed traditionally by female artists.
                  It is characterized by powerful, sensual dance movements and
                  is often used to tell stories or discuss social issues through
                  poetry.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.rhythmMobileImageWrapper}>
            <div className={styles.rhythmTitle}>Tamasha</div>
            <div>
              <img src="/images/Art&Culture_page/tamasha.webp" alt="" />
              <div className={styles.rhythmWrapper}>
                <div className={styles.rhythmInnerTitle}>Tamasha</div>
                <p className={styles.rhythmBody}>
                  Derived from the Mughal era, this theatrical entertainment
                  includes singing, dancing, and playing musical instruments. It
                  is known for its lively performances and is traditionally
                  associated with the traveling theatre troupes of Maharashtra.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.rhythmMobileImageWrapper}>
            <div className={styles.rhythmTitle}>Folk Instruments</div>
            <div>
              <img src="/images/Art&Culture_page/img4.webp" alt="" />
              <div className={styles.rhythmWrapper}>
                <div className={styles.rhythmInnerTitle}>Dholki</div>
                <p className={styles.rhythmBody}>
                  A percussion instrument widely used in rural Maharashtra to
                  accompany folk dances and music performances.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.rhythmMobileImageWrapper}>
            <div className={styles.rhythmTitle}>Lezim</div>
            <div>
              <img src="/images/Art&Culture_page/lezim.webp" alt="" />
              <div className={styles.rhythmWrapper}>
                <div className={styles.rhythmInnerTitle}>Lezim</div>
                <p className={styles.rhythmcBody}>
                  The state has a long tradition of pottery and terracotta
                  works, ranging from household items to decorative murals,
                  showcasing the versatility of the local artisans.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cultureSignificance}>
          <hr />
          <div>
            <div id={styles.cultureSignificanceTitle}>
              #Cultural Significance
            </div>
            <div id={styles.cultureSignificanceBody}>
              Each craft not only reflects Maharashtra’s artistic legacy but
              also sustains local artisans, preserving traditions and boosting
              economic stability.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rhythm;
