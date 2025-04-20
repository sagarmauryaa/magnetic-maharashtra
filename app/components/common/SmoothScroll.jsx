"use client"; 
import { disableScroll, enableScroll } from "@/helper/utils/scroll";
import styles from "./SmoothScroll.module.css";
import { useEffect, useRef, createContext, useContext } from "react";

const ScrollContext = createContext(null);

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScroll must be used within a SmoothScrollProvider");
  }
  return context;
};

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

    return () => {
      window.removeEventListener("resize", handleResize);
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
      }
    };
  }, []);

  const lockScroll = () => {
    if (locomotiveScrollRef.current) { 
      disableScroll()
      locomotiveScrollRef.current.stop();
    }
  };
  
  const unlockScroll = () => {
    if (locomotiveScrollRef.current) {
      enableScroll()
      locomotiveScrollRef.current.start();
    }
  };

  return (
    <ScrollContext.Provider value={{ lockScroll, unlockScroll }}>
      <div data-scroll-container className={styles.smoothScroll}>
        {children}
      </div>
    </ScrollContext.Provider>
  );
}
