"use client";

import { useEffect } from "react";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    let locomotiveScroll;

    const initLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      locomotiveScroll = new LocomotiveScroll({
        lenisOptions: {
          lerp: 0.1,
          wheelMultiplier: 0.7,
          gestureOrientation: "vertical",
          normalizeWheel: false,
          smoothTouch: false,
        },
      });
    };

    initLocomotiveScroll();

    // Cleanup function
    return () => {
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
      }
    };
  }, []);

  return <div data-scroll-container>{children}</div>;
}
