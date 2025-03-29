import { useGSAP } from "@gsap/react";
import styles from "./Statistics.module.css";
import gsap, { MotionPathPlugin } from "gsap/all";
import { useRef } from "react";
import Image from "next/image";

gsap.registerPlugin(MotionPathPlugin);

const Statistics = () => {
  const heroContentRef = useRef([]);
  const containerRef = useRef([]);
  const imageRef = useRef([]);
  const svgContentRef = useRef([]);
  const pathsRef = useRef([]);

  useGSAP(() => {
    containerRef.current.forEach((item) => {
      gsap.set(item, { opacity: 0, yPercent: 100 });
    });

    svgContentRef.current.forEach((item) => {
      gsap.set(item, { opacity: 0 });
    });

    heroContentRef.current.forEach((heroContent, idx) => {
      gsap.timeline({
        scrollTrigger: {
          trigger: heroContent,
          start: "top 75%",
          onEnter: () => {
            gsap
              .timeline()
              .to(containerRef.current[idx], {
                duration: 1,
                yPercent: 0,
                opacity: 1,
                ease: "power4.inOut",
              })
              .to(
                imageRef.current[idx],
                {
                  duration: 1,
                  clipPath: "inset(0 0 0% 0)",
                  ease: "power4.inOut",
                },
                "<=0.2"
              )
              .to(
                svgContentRef.current[idx],
                {
                  duration: 1,
                  opacity: 1,
                  ease: "power4.inOut",
                  onComplete: () => {
                    pathsRef.current.forEach((pathId, idx) => {
                      // console.log(pathsRef.current[idx]);
                      if (!pathId) {
                        return;
                      }

                      gsap.to(pathId, {
                        strokeDashoffset: 1,
                        duration: 0.5,
                        ease: "linear",
                        delay: idx * 0.1,
                      });
                    });
                  },
                },
                "<=0.2"
              );
          },
        },
      });
    });
  });

  return (
    <section id={styles.statisticsSection}>
      <div className={styles.dataContainer}>
        <div
          ref={(el) => (heroContentRef.current[0] = el)}
          className={styles.parentContainer}
        >
          <div
            ref={(el) => (containerRef.current[0] = el)}
            className={styles.contentContainer}
          >
            <h2 className={styles.heading}>
              <span>
                Manufacturing <span>-</span>{" "}
              </span>
              <br></br>
              Made in Maharashtra
            </h2>
            <p>
              We lead in automotive, electronics, and textiles, driving
              innovation and quality.
            </p>
          </div>
          <div
            ref={(el) => (imageRef.current[0] = el)}
            className={styles.contentImage}
          >
            <Image
              src="/images/Statistics/Manufacturing.png"
              alt="Manufacturing"
              width={410}
              height={507}
            />
          </div>

          <div
            ref={(el) => (svgContentRef.current[0] = el)}
            className={styles.svgContainer}
          >
            <Image
              src="/images/Statistics/Manufacturing.svg"
              alt="Manufacturing"
              width={442}
              height={277}
            />
          </div>
        </div>
        <div
          ref={(el) => (heroContentRef.current[1] = el)}
          className={styles.parentContainer}
        >
          <div
            ref={(el) => (containerRef.current[1] = el)}
            className={styles.contentContainer}
          >
            <h2 className={styles.heading}>
              <span>
                Services <span>-</span>{" "}
              </span>
              <br></br>
              Innovation Delivered
            </h2>
            <p>
              From IT to healthcare, Maharashtra’s service sector is booming,
              powering growth across industries.
            </p>
          </div>
          <div
            ref={(el) => (imageRef.current[1] = el)}
            className={styles.contentImage}
          >
            <Image
              src="/images/Statistics/Services.png"
              alt="Services"
              width={100}
              height={100}
            />
          </div>

          <div
            ref={(el) => (svgContentRef.current[1] = el)}
            className={styles.svgContainer}
          >
            <Image
              src="/images/Statistics/Services.svg"
              alt="Services"
              width={442}
              height={277}
            />
          </div>
        </div>
        <div
          ref={(el) => (heroContentRef.current[2] = el)}
          className={styles.parentContainer}
        >
          <div
            ref={(el) => (containerRef.current[2] = el)}
            className={styles.contentContainer}
          >
            <h2 className={styles.heading}>
              <span>
                Infrastructure <span>-</span>{" "}
              </span>
              <br></br>
              Built to Grow
            </h2>
            <p>
              With world-class roads, ports, and airports, Maharashtra’s
              infrastructure connects people and opportunities seamlessly.
            </p>
          </div>
          <div
            ref={(el) => (imageRef.current[2] = el)}
            className={styles.contentImage}
          >
            <Image
              src="/images/Statistics/Infrastructure.png"
              alt="Infrastructure"
              width={100}
              height={100}
            />
          </div>

          <div
            ref={(el) => (svgContentRef.current[2] = el)}
            className={styles.svgContainer}
          >
            <Image
              src="/images/Statistics/Infrastructure.svg"
              alt="Infrastructure"
              width={442}
              height={277}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
