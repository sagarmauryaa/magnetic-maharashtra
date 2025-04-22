'use client'
import { useEffect, useRef } from "react";
import styles from "./RoadMap.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";

function RoadMap() {
  const arrowRef = useRef(null);

  useEffect(() => {
    // This effect will run after the component mounts
    // and the SVG is in the DOM
    const growthArrow = document.getElementById("growth-arrow");

    if (growthArrow) {
      // Set initial styles directly on the SVG element
      growthArrow.style.fill = "none";
      growthArrow.style.stroke = "#FF5100";
      growthArrow.style.strokeWidth = "2px";

      // Use a fixed value for the path length
      // This is a workaround since getTotalLength() might not be available
      const pathLength = 150;
      growthArrow.style.strokeDasharray = pathLength;
      growthArrow.style.strokeDashoffset = pathLength;

      // Create the animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".roadElements",
          start: "top 60%",
        },
      });

      tl.to(growthArrow, {
        strokeDashoffset: 0,
        duration: 1.5,
        ease: "power2.out",
      });
    }
  }, []);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Animation for road elements grid items
    gsap.from(".grid-item", {
      xPercent: -10,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".roadElements",
        start: "top 50%",
      },
    });
  });

  return (
    <section className={styles.roadMapContainer}>
      <div className={styles.roadMap}>
        <div className={styles.imgBg}>
          <picture>
            {/* <source media='(min-width:360px)' srcSet={bgMobile} /> */}
            <source
              srcSet="images/RoadMap/roadMap.png"
              media="(min-width:960px)"
            />
            <source
              srcSet="images/RoadMap/roadMap-mobile.png"
              media="(min-width:360px)"
            />
            <img src="images/RoadMap/roadMap.png" alt="" />
          </picture>
          <div className={styles.imgContent}>
            <div className={styles.title}>
              <div>Ease of Doing Business</div>
              <div className={styles.subtitle}>Success, Simplified</div>
            </div>
            <p>
              With clear regulations, efficient processes, and a supportive
              environment, starting and growing your business has never been
              easier.
            </p>
          </div>
        </div>
        <div className={styles.roadElements + " roadElements"}>
          <div className={styles.elementTitle}>
            <div>
              The Road to Growth{" "}
              <svg
                width="53"
                height="31"
                viewBox="0 0 53 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="growth-arrow"
                  d="M1 30.25L19 12.75L27.5 24.75L52 1.75M52 1.75V13.75M52 1.75H40"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <button>
              <Link href="https://maitri.mahaonline.gov.in/Home/Home">
                Know more
              </Link>

              <span>
                <Image
                  width={12}
                  height={12}
                  src="/images/RoadMap/Union.svg"
                  alt=""
                />
              </span>
            </button>
          </div>
          <div className={styles.roadElementsGrid}>
            <div
              className={
                styles.roadElementsGridItem + " " + styles.item + " grid-item"
              }
            >
              <div className={styles.number}>1</div>
              <hr />
              <div className={styles.roadElementContainer}>
                <div className={styles.title}>Business Registration</div>
                <div className={styles.subtitle}>
                  Say goodbye to long wait times and complex paperwork as we
                  ensure a seamless registration journey.
                </div>
              </div>
            </div>
            <div
              className={
                styles.roadElementsGridItem + " " + styles.arrow + " grid-item"
              }
            >
              <img
                src="/images/RoadMap/rightArrow.svg"
                width={"112px"}
                height={"80px"}
                alt=""
              />
            </div>
            <div
              className={
                styles.roadElementsGridItem + " " + styles.item + " grid-item"
              }
            >
              <div className={styles.number}>2</div>
              <hr />
              <div className={styles.roadElementContainer}>
                <div className={styles.title}>Licensing & Permits</div>
                <div className={styles.subtitle}>
                  Our streamlined systems and expert support help you meet
                  compliance requirements with ease.
                </div>
              </div>
            </div>
            <div
              className={
                styles.roadElementsGridItem + " " + styles.item + " grid-item"
              }
            >
              <div className={styles.number}>3</div>
              <hr />
              <div className={styles.roadElementContainer}>
                <div className={styles.title}>
                  Access to Land & Infrastructure
                </div>
                <div className={styles.subtitle}>
                  From industrial parks to modern office spaces, we help you
                  find the perfect setup.
                </div>
              </div>
            </div>
            <div
              className={
                styles.roadElementsGridItem + " " + styles.arrow + " grid-item"
              }
            >
              <img
                src="/images/RoadMap/rightArrow.svg"
                width={"112px"}
                height={"80px"}
                alt=""
              />
            </div>
            <div
              className={
                styles.roadElementsGridItem + " " + styles.item + " grid-item"
              }
            >
              <div className={styles.number}>4</div>
              <hr />
              <div className={styles.roadElementContainer}>
                <div className={styles.title}>Ease of Compliance</div>
                <div className={styles.subtitle}>
                  With simplified processes and digital tools, you can focus on
                  your business while staying fully compliant.
                </div>
              </div>
            </div>

            <div
              className={
                styles.roadElementsGridItem + " " + styles.item + " grid-item"
              }
            >
              <div className={styles.number}>5</div>
              <hr />
              <div className={styles.roadElementContainer}>
                <div className={styles.title}>Financing & Incentives</div>
                <div className={styles.subtitle}>
                  From loans to tax breaks, we help you explore every available
                  benefit.
                </div>
              </div>
            </div>

            <div
              className={
                styles.roadElementsGridItem + " " + styles.arrow + " grid-item"
              }
            >
              <img
                src="/images/RoadMap/rightArrow.svg"
                width={"112px"}
                height={"80px"}
                alt=""
              />
            </div>

            <div
              className={
                styles.roadElementsGridItem + " " + styles.item + " grid-item"
              }
            >
              <div className={styles.number}>6</div>
              <hr />
              <div className={styles.roadElementContainer}>
                <div className={styles.title}>Operational Setup</div>
                <div className={styles.subtitle}>
                  From supply chain management to technology support, we provide
                  resources and expert guidance to ensure a smooth launch.
                </div>
              </div>
            </div>

            <div
              className={
                styles.roadElementsGridItem + " " + styles.arrow + " grid-item"
              }
            >
              <img
                src="/images/RoadMap/rightArrow.svg"
                width={"112px"}
                height={"80px"}
                alt=""
              />
            </div>

            <div
              className={
                styles.roadElementsGridItem + " " + styles.item + " grid-item"
              }
            >
              <div className={styles.number}>7</div>
              <hr />
              <div className={styles.roadElementContainer}>
                <div className={styles.title}>Hiring Talent</div>
                <div className={styles.subtitle}>
                  Navigate labor laws and find the right talent to help your
                  business succeed.
                </div>
              </div>
            </div>

            <div
              className={
                styles.roadElementsGridItem + " " + styles.item + " grid-item"
              }
            >
              <div className={styles.number}>8</div>
              <hr />
              <div className={styles.roadElementContainer}>
                <div className={styles.title}>Scaling & Expansion</div>
                <div className={styles.subtitle}>
                  Looking to grow? We help you scale seamlessly by providing the
                  right tools, resources, and insights for local and global
                  expansion.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoadMap;
