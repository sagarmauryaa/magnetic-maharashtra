"use client";

import { useEffect, useRef } from "react";
import styles from "./SmoothScroll.module.css";

export default function SmoothScroll({ children }) {
  const locomotiveScrollRef = useRef(null);

  useEffect(() => {
    let locomotiveScroll;

    const initLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      locomotiveScroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        lerp: 0.1,
        multiplier: 0.7,
        smartphone: {
          smooth: true,
          lerp: 0.1,
          multiplier: 0.7,
        },
        tablet: {
          smooth: true,
          lerp: 0.1,
          multiplier: 0.7,
        },
      });

      locomotiveScrollRef.current = locomotiveScroll;
    };

    initLocomotiveScroll();

    // Handle window resize
    const handleResize = () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.update();
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
      }
    };
  }, []);

  return (
    <div data-scroll-container className={styles.smoothScroll}>
      {children}
    </div>
  );
}
