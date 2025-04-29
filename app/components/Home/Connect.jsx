"use client";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 
import styles from "./Connect.module.css";
import UseScreenSize from "../common/UseScreenSize";

gsap.registerPlugin(ScrollTrigger);

function Connect() {
  const connectRef = useRef(null);

  useEffect(() => {
    const connectEl = connectRef.current;
    const railContianer = connectEl.querySelector("#rail");
    const roadContianer = connectEl.querySelector("#road");
    const portContianer = connectEl.querySelector("#port");
    const airContianer = connectEl.querySelector("#air");

    const rail_title_El = connectEl.querySelector("#rail_title");
    const road_title_El = connectEl.querySelector("#road_title");
    const port_title_El = connectEl.querySelector("#port_title");
    const air_title_El = connectEl.querySelector("#air_title");
    const everyhthing_El = connectEl.querySelector("#everything_title");

    let railAnimated = false;
    let roadAnimated = false;
    let portlAnimated = false;
    let airAnimated = false;

    let connect_tl = gsap.timeline({
      defaults: {
        ease: "linear",
      },
      scrollTrigger: {
        trigger: connectRef.current,
        start: "top top",
        end: `${window.innerHeight * 10}`,
        pin: true,
        scrub: true,
        markers: true,
        onUpdate: () => {
          const progress = connect_tl.progress();
          const percent = Math.round(progress * 100);
          // console.log(percent);

          if (percent >= 12 && !railAnimated) {
            gsap.to(rail_title_El, { clipPath: "inset(0% 100% 0% 0%)" });
            gsap.to(road_title_El, { clipPath: "inset(0% 0% 0% 0%)" });
            railAnimated = true;
          } else if (percent <= 12 && railAnimated) {
            gsap.to(rail_title_El, { clipPath: "inset(0% 0% 0% 0%)" });
            gsap.to(road_title_El, { clipPath: "inset(0% 0% 0% 100%)" });
            railAnimated = false;
          }

          if (percent >= 42 && !roadAnimated) {
            gsap.to(road_title_El, { clipPath: "inset(0% 100% 0% 0%)" });
            gsap.to(air_title_El, { clipPath: "inset(0% 0% 0% 0%)" });
            roadAnimated = true;
          } else if (percent <= 42 && roadAnimated) {
            gsap.to(road_title_El, { clipPath: "inset(0% 0% 0% 0%)" });
            gsap.to(air_title_El, { clipPath: "inset(0% 0% 0% 100%)" });
            roadAnimated = false;
          }

          if (percent >= 70 && !airAnimated) {
            gsap.to(air_title_El, { clipPath: "inset(0% 100% 0% 0%)" });
            gsap.to(port_title_El, { clipPath: "inset(0% 0% 0% 0%)" });
            airAnimated = true;
          } else if (percent <= 70 && airAnimated) {
            gsap.to(air_title_El, { clipPath: "inset(0% 0% 0% 0%)" });
            gsap.to(port_title_El, { clipPath: "inset(0% 0% 0% 100%)" });
            airAnimated = false;
          }
          if (percent >= 90 && !airAnimated) {
            gsap.to(everyhthing_El, { clipPath: "inset(0% 100% 0% 0%)" });
            gsap.to(air_title_El, { clipPath: "inset(0% 0% 0% 0%)" });
            airAnimated = true;
          } else if (percent <= 70 && airAnimated) {
            gsap.to(everyhthing_El, { clipPath: "inset(0% 0% 0% 0%)" });
            gsap.to(air_title_El, { clipPath: "inset(0% 0% 0% 100%)" });
            airAnimated = false;
          }
        },
      },
    });

    connect_tl
      .to(
        railContianer,
        {
          x: "-100%",
          ease: "linear",
          duration: 0.5,
        },
        "a"
      )
      .to(
        railContianer,
        {
          x: "-200%",
          ease: "linear",
          duration: 0.5,
        },
        "b"
      )

      .to(
        roadContianer,
        {
          x: "-100%",
          ease: "linear",
          duration: 0.5,
        },
        "d"
      )
      .to(
        roadContianer,
        {
          x: "-200%",
          ease: "linear",
          duration: 0.5,
        },
        "e"
      )

      .to(
        airContianer,
        {
          x: "-100%",
          ease: "linear",
          duration: 0.5,
        },
        "g"
      )
      .to(
        airContianer,
        {
          x: "-200%",
          ease: "linear",
          duration: 0.5,
        },
        "h"
      )

      .to(
        portContianer,
        {
          x: "-100%",
          ease: "linear",
          duration: 0.5,
        },
        "j"
      )
      .to(
        portContianer,
        {
          x: "-200%",
          ease: "linear",
          duration: 0.5,
        },
        "k"
      );
  }, []);

  return (
    <section
      ref={connectRef}
      // className="h-screen w-full py-[60px] flex flex-col"
      className={styles.connectSection}
    >
      <div
        // className="grid grid-cols-4  gap-[15px] px-2 sm:px-[15px]"
        className={styles.connectSectionGrid}
      >
        <h2
          // className="font-montreal font-medium leading-[105%] col-span-4 text-bigheading3 sm:col-span-2 sm:tracking-[-2.4px]"
          className={styles.connectSectionHeading}
        >
          Everything Just <br /> Connects.
        </h2>
        <p
          // className="font-montreal font-normal leading-[120%] text-[gray] col-start-1 text-body col-span-4 lg:col-start-4 lg:col-span-1 md:col-span-2 md:col-start-1"
          className={styles.connectSectionDescription}
        >
          Airports, roads, and seaports link Maharashtra seamlessly to India and
          the world, fueling business growth.
        </p>
      </div>

      <div
        // className="w-[200%] flex flex-1 justify-center items-center overflow-x-visible"
        className={styles.connectSectionContainer}
      >
        <div
          // className="relative -z-10 w-[50%] h-full flex justify-center items-center"
          className={styles.connectSectionTitleContainer}
        >
          <h1
            id="rail_title"
            // className="absolute text-center font-montrealMd text-orange text-bigheading3 xl:text-[120px]"
            className={styles.connectSectionTitle}
            style={{ clipPath: "inset(0% 0% 0% 0%)" }}
          >
            Rail Connectivity
          </h1>
          <h1
            id="air_title"
            className={styles.connectSectionTitle}
            style={{ clipPath: "inset(0% 0% 0% 100%)" }}
          >
            Airports
          </h1>
          <h1
            id="port_title"
            className={styles.connectSectionTitle}
            style={{ clipPath: "inset(0% 0% 0% 100%)" }}
          >
            Sea Ports
          </h1>
          <h1
            id="roads_title"
            className={styles.connectSectionTitle}
            style={{ clipPath: "inset(0% 0% 0% 100%)" }}
          >
            Roads
          </h1>
          <h1
            id="everything_title"
            className={styles.connectSectionTitle}
            style={{ clipPath: "inset(0% 0% 0% 100%)" }}
          >
            Yes, Everything.
          </h1>
        </div>
        <div
          // className="w-[50%] h-full relative"
          className={styles.connectSectionImageContainer}
        >
          <div
            id="rail"
            // className="absolute top-0 left-0 w-full h-full flex justify-center items-center"
            className={styles.connectSectionImage}
          >
            <div className={styles.image}>
              <Image
                src="/images/home-every/rail.webp"
                alt="rail"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
          <div id="road" className={styles.connectSectionImage}>
            <div className={styles.image}>
              <Image
                src="/images/home-every/car.webp"
                alt="road"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
          <div id="air" className={styles.connectSectionImage}>
            <div className={styles.image}>
              <Image
                src="/images/home-every/air.webp"
                alt="air"
                fill
                style={{
                  top: UseScreenSize() ? "-4%" : "-16%",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
          <div id="port" className={styles.connectSectionImage}>
            <div className={styles.image}>
              <Image
                src="/images/home-every/boat.webp"
                alt="boat"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Connect;
