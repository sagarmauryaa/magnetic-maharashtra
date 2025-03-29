import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

import styles from "../../page.module.css";

gsap.registerPlugin(ScrollTrigger);

const imageStaggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const imageCardVariants = {
  initial: { opacity: 0, x: 100, scale: 0.9 },
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    x: -100,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const EverythingConnects = () => {
  const sectionRef = useRef(null);
  const word1Ref = useRef(null);
  const word2Ref = useRef(null);
  const word3Ref = useRef(null);
  const word4Ref = useRef(null);
  const word5Ref = useRef(null);

  const airportsRef = useRef(null);
  const seaportsRef = useRef(null);
  const roadsRef = useRef(null);

  const [useFramerFallback] = useState(false);

  useEffect(() => {
    if (useFramerFallback) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=300%",
          scrub: true,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          pinType: "fixed",
        },
      });

      gsap.set(word2Ref.current, { yPercent: 100 });
      gsap.set(word3Ref.current, { yPercent: 100 });

      tl.to(word1Ref.current, { yPercent: -100, ease: "linear" }, 0);
      tl.to(word2Ref.current, { yPercent: -100, ease: "linear" }, 0);

      tl.to(airportsRef.current, { y: "-100%", opacity: 0, ease: "linear" }, 0);
      tl.to(
        seaportsRef.current,
        {
          x: "-90%",
          y: "20%",
          scale: 1,
          zIndex: 999,
          opacity: 1,
          ease: "linear",
        },
        0
      );
      tl.to(
        roadsRef.current,
        {
          x: "-160%",
          y: "20%",
          scale: 0.9,
          zIndex: 99,
          opacity: 1,
          ease: "linear",
        },
        0
      );

      tl.to(word2Ref.current, { yPercent: -200, ease: "linear" }, 1);
      tl.to(word3Ref.current, { yPercent: -200, ease: "linear" }, 1);

      tl.to(seaportsRef.current, { y: "-100%", ease: "linear", opacity: 0 }, 1);
      tl.to(
        roadsRef.current,
        {
          x: "-190%",
          scale: 1,
          zIndex: 999,
          ease: "linear",
        },
        1
      );

      tl.to(roadsRef.current, {
        x: "-190%",
        y: "-100%",
        scale: 1,
        zIndex: 999,
        ease: "linear",
        opacity: 0,
      });

      tl.to(word3Ref.current, { yPercent: -300, ease: "linear" }, 2);
      tl.to(word4Ref.current, { yPercent: -300, ease: "linear" }, 2);

      tl.to(roadsRef.current, { y: "-100%", opacity: 0, ease: "linear" }, 2);

      tl.set(airportsRef.current, { x: "100%", y: "20%" }, 2.1);
      tl.set(seaportsRef.current, { x: "100%", y: "20%" }, 2.1);
      tl.set(roadsRef.current, { x: "100%", y: "20%" }, 2.1);

      tl.to(
        airportsRef.current,
        {
          x: "0%",
          y: "20%",
          scale: 1,
          zIndex: 9999,
          opacity: 1,
          ease: "linear",
          duration: 1.2,
        },
        2.1
      );

      tl.to(
        seaportsRef.current,
        {
          x: "-70%",
          y: "20%",
          scale: 0.9,
          zIndex: 999,
          opacity: 1,
          ease: "linear",
          duration: 1.2,
        },
        2.1
      );

      tl.set(roadsRef.current, { x: "120%", y: "20%", opacity: 0 }, 2.1);

      tl.to(
        roadsRef.current,
        {
          x: "-140%",
          y: "20%",
          scale: 0.8,
          zIndex: 9,
          opacity: 1,
          ease: "linear",
          duration: 1.2,
        },
        2.1
      );

      tl.to(word4Ref.current, { yPercent: -400, ease: "linear" }, 4);
      tl.to(word5Ref.current, { yPercent: -400, ease: "linear" }, 4);
    }, sectionRef);

    return () => ctx.revert();
  }, [useFramerFallback]);

  return (
    <>
      <div className={styles.everythingWrapper}>
        <section className={styles.everythingContentSection} ref={sectionRef}>
          <div className={styles.everythingTextContent}>
            <h2 className={styles.everythingHeading}>Everything</h2>
            <h1 className={styles.everythingAnimatedHeading}>
              Just Connects.&nbsp;
              <span className={styles.everythingMarquee}>
                <span ref={word1Ref} className={styles.word}>
                  Airports
                </span>
                <span ref={word2Ref} className={styles.word}>
                  Sea Ports
                </span>
                <span ref={word3Ref} className={styles.word}>
                  Roads
                </span>
                <span ref={word4Ref} className={styles.word}>
                  Everything
                </span>
                <span
                  ref={word5Ref}
                  className={styles.word}
                  style={{ letterSpacing: "-2px" }}
                >
                  Yes.Everything
                </span>
              </span>
            </h1>
            <div className={styles.everythingDescription}>
              <p>
                Airports, roads, and seaports link Maharashtra seamlessly to
                India and the world, fueling business growth.
              </p>
            </div>
          </div>

          <div className={styles.everythingImageContent}>
            {useFramerFallback ? (
              <motion.div
                className={styles.cardContainer}
                variants={imageStaggerContainer}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <div className={styles.imageWrapper}>
                  <motion.div
                    className={styles.airportsImg}
                    variants={imageCardVariants}
                  >
                    <img
                      src="/images/Everything/air.webp"
                      alt="Airports"
                      loading="lazy"
                    />
                  </motion.div>
                  <motion.div
                    className={styles.seaportsImg}
                    variants={imageCardVariants}
                  >
                    <img
                      src="/images/Everything/sea.webp"
                      alt="Seaports"
                      loading="lazy"
                    />
                  </motion.div>
                  <motion.div
                    className={styles.roadImg}
                    variants={imageCardVariants}
                  >
                    <img
                      src="/images/Everything/road.webp"
                      alt="Roads"
                      loading="lazy"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ) : (
              <div className={styles.cardContainer}>
                <div className={styles.imageWrapper}>
                  <div className={styles.airportsImg} ref={airportsRef}>
                    <img
                      src="/images/Everything/air.webp"
                      alt="Airports"
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.seaportsImg} ref={seaportsRef}>
                    <img
                      src="/images/Everything/sea.webp"
                      alt="Seaports"
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.roadImg} ref={roadsRef}>
                    <img
                      src="/images/Everything/road.webp"
                      alt="Roads"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
      <div style={{ height: "100vh" }}></div>
    </>
  );
};

export default EverythingConnects;
