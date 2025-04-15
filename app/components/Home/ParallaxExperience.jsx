import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { useRef, useLayoutEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

import styles from "../../page.module.css";

const ParallaxExperience = () => {
  const parallaxRef = useRef();
  const mountainFrontRef = useRef();
  const mountainBackRef = useRef();
  const parallaxTextRef = useRef();

  let mm = gsap.matchMedia();

  // Register ScrollTrigger plugin
  useLayoutEffect(() => {
    if (!ScrollTrigger.isRegistered) {
      gsap.registerPlugin(ScrollTrigger);
    }
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill(false));
    };
  }, []);

  useGSAP(() => {
    mm.add("(min-width: 1024px) and (max-width: 1919px)", () => {
      gsap.set(mountainFrontRef.current, {
        scale: 1,
        transformOrigin: "center center",
      });
      gsap.set(mountainBackRef.current, { yPercent: 0 });
      gsap.set(parallaxTextRef.current, {
        y: "0%",
      });

      // gsap.timeline({
      //   defaults: { duration: 1 },
      //   scrollTrigger: {
      //     trigger: parallaxRef.current,
      //     start: "10% top",
      //     end: "40% 40%",
      //     markers: false,
      //     onEnter: () => {
      //       gsap
      //         .timeline({ defaults: { duration: 1, ease: "expo.out" } })
      //         .to(mountainFrontRef.current, {
      //           scale: 1,
      //           transformOrigin: "center center",
      //         })
      //         .to(mountainBackRef.current, { yPercent: 0 }, "<")
      //         .to(
      //           parallaxTextRef.current,
      //           {
      //             y: "0%",
      //             force3D: true,
      //           },
      //           "<"
      //         );
      //     },
      //     onLeave: () => {},
      //   },
      // });

      gsap
        .timeline({
          defaults: { duration: 1, ease: "none" },
          scrollTrigger: {
            trigger: parallaxRef.current,
            start: "30% 20%",
            end: "bottom center-=50px",
            markers: false,
            scrub: 0.5,
          },
        })

        .to(mountainBackRef.current, { yPercent: -10 }, "<")
        .to(
          parallaxTextRef.current,
          {
            y: "350%",
            force3D: true,
          },
          "<"
        );
    });

    mm.add("(min-width: 1920px)", () => {
      gsap.set(mountainFrontRef.current, {
        scale: 1.05,
        transformOrigin: "center center",
      });
      gsap.set(mountainBackRef.current, { yPercent: 20 });
      gsap.set(parallaxTextRef.current, {
        y: "400%",
      });

      gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: "top center",
          end: "40% 40%",
          markers: false,
          onEnter: () => {
            gsap
              .timeline({ defaults: { duration: 1, ease: "power2.inOut" } })
              .to(mountainFrontRef.current, {
                scale: 1,
                transformOrigin: "center center",
              })
              .to(mountainBackRef.current, { yPercent: 0 }, "<")
              .to(
                parallaxTextRef.current,
                {
                  y: "0%",
                  force3D: true,
                },
                "<"
              );
          },
          onLeave: () => {
            gsap
              .timeline({
                defaults: { duration: 1, ease: "none" },
                scrollTrigger: {
                  trigger: parallaxRef.current,
                  start: "30% 20%",
                  end: "bottom center-=50px",
                  markers: false,
                  scrub: 0.1,
                },
              })
              .to(mountainFrontRef.current, {
                scale: 1.1,
                transformOrigin: "center center",
              })
              .to(mountainBackRef.current, { yPercent: -5 }, "<")
              .to(
                parallaxTextRef.current,
                {
                  y: "400%",
                  force3D: true,
                },
                "<"
              );
          },
        },
      });
    });

    mm.add("(min-width: 320px) and (max-width: 480px)", () => {
      gsap.set(mountainFrontRef.current, {
        scale: 1.05,
        transformOrigin: "center center",
      });
      gsap.set(mountainBackRef.current, { yPercent: 20 });
      gsap.set(parallaxTextRef.current, {
        y: "200%",
      });

      gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: "top center",
          end: "40% 40%",
          markers: false,
          onEnter: () => {
            gsap
              .timeline({ defaults: { duration: 1, ease: "power2.inOut" } })
              .to(mountainFrontRef.current, {
                scale: 1,
                transformOrigin: "center center",
              })
              .to(mountainBackRef.current, { yPercent: 0 }, "<")
              .to(
                parallaxTextRef.current,
                {
                  y: "0%",
                  force3D: true,
                },
                "<"
              );
          },
          onLeave: () => {
            gsap
              .timeline({
                defaults: { duration: 1, ease: "none" },
                scrollTrigger: {
                  trigger: parallaxRef.current,
                  start: "30% 20%",
                  end: "bottom center-=50px",
                  markers: false,
                  scrub: 0.1,
                },
              })
              .to(mountainFrontRef.current, {
                scale: 1.1,
                transformOrigin: "center center",
              })
              .to(mountainBackRef.current, { yPercent: -10 }, "<")
              .to(
                parallaxTextRef.current,
                {
                  y: "200%",
                  force3D: true,
                },
                "<"
              );
          },
        },
      });
    });
  });

  return (
    <section ref={parallaxRef} className={styles.parallax}>
      <Image
        width={100}
        height={100}
        ref={mountainBackRef}
        src="/images/Mountain back.png"
        id={styles.mountain2}
        alt="back-image"
        quality={100}
        unoptimized={true}
      />
      <h2
        ref={parallaxTextRef}
        className={styles.text}
        style={{
          willChange: "transform",
          backfaceVisibility: "hidden",
          perspective: 1000,
        }}
      >
        Experience
      </h2>
      <div className={styles.gradientBG}></div>
      <Image
        width={100}
        height={100}
        ref={mountainFrontRef}
        src="/images/Mountain_front.png"
        id={styles.mountain1}
        alt="front-image"
        quality={100}
        unoptimized={true}
      />
      <div className={styles.landOfWonders}>
        A Land{" "}
        <span className={styles.highlight}>
          of
          <br />
        </span>{" "}
        Wonders
      </div>
      <div className={styles.outerContainer}>
        <div className={styles.outerChildContainer}>
          <div className={styles.innerContainer}>
            <div className={styles.loopTextContainer}>
              <Image
                width={100}
                height={100}
                src="/images/flower.png"
                alt="flower"
                quality={100}
              />
              <p>Discover Vibrant Destinations</p>
            </div>
            <div className={styles.loopTextContainer}>
              <Image
                width={100}
                height={100}
                src="/images/flower.png"
                alt="flower"
              />
              <p>Immerse in Culture</p>
            </div>
            <div className={styles.loopTextContainer}>
              <Image
                width={100}
                height={100}
                src="/images/flower.png"
                alt="flower"
              />
              <p>Adventure Awaits</p>
            </div>
            <div className={styles.loopTextContainer}>
              <Image
                width={100}
                height={100}
                src="/images/flower.png"
                alt="flower"
              />
              <p>Travel Tips</p>
            </div>
            <div className={styles.loopTextContainer}>
              <Image
                width={100}
                height={100}
                src="/images/flower.png"
                alt="flower"
              />
              <p>Discover Vibrant Destinations</p>
            </div>
            <div className={styles.loopTextContainer}>
              <Image
                width={100}
                height={100}
                src="/images/flower.png"
                alt="flower"
              />
              <p>Immerse in Culture</p>
            </div>
            <div className={styles.loopTextContainer}>
              <Image
                width={100}
                height={100}
                src="/images/flower.png"
                alt="flower"
              />
              <p>Adventure Awaits</p>
            </div>
            <div className={styles.loopTextContainer}>
              <Image
                width={100}
                height={100}
                src="/images/flower.png"
                alt="flower"
              />
              <p>Travel Tips</p>
            </div>
            <div className={styles.loopTextContainer}>
              <Image
                width={100}
                height={100}
                src="/images/flower.png"
                alt="flower"
              />
              <p>Discover Vibrant Destinations</p>
            </div>
            <div className={styles.loopTextContainer}>
              <Image
                width={100}
                height={100}
                src="/images/flower.png"
                alt="flower"
              />
              <p>Immerse in Culture</p>
            </div>
            <div className={styles.loopTextContainer}>
              <Image
                width={100}
                height={100}
                src="/images/flower.png"
                alt="flower"
              />
              <p>Adventure Awaits</p>
            </div>
            <div className={styles.loopTextContainer}>
              <Image
                width={100}
                height={100}
                src="/images/flower.png"
                alt="flower"
              />
              <p>Travel Tips</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.paperCutContainer}>
        <img
          width={100}
          height={20}
          className={styles.paperCutImage}
          src="/images/paperCut.png"
          alt="papercut"
        />
      </div>
    </section>
  );
};

export default ParallaxExperience;
