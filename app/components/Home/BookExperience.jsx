'use client'
import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect } from "react";
import { Experience } from "./Experience";
import gsap, { ScrollTrigger } from "gsap/all";

import styles from "../../page.module.css";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const BookExperience = () => {
  const [active, setActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const checkScreenSize = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 768);
      }
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [active]);

  return (
    <>
      <div
        className={styles.book}
        onClick={() => setActive(true)}
        style={{
          cursor: "pointer",
        }}
      >
        <img
          className={styles.bookImage}
          src="/images/History_Book.png"
          alt="History"
        />
      </div>


      {active && isClient && (
        <div
          className={styles.bookModalOverlay}
          onClick={() => setActive(false)}
        >
          <div
            className={styles.bookModalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.closeButtonContainer}>
              <button
                className={styles.closeButton}
                onClick={() => setActive(false)}
                aria-label="Close book"
              >
                <img
                  src="/images/cursor.png"
                  width={"24px"}
                  height={"24px"}
                  alt="close"
                />
              </button>
            </div>
            <Canvas
              shadows
              camera={{ position: [-0.5, 1, 4], fov: isMobile ? 80 : 35 }}
            >
              <Suspense fallback={null}>
                <Experience />
              </Suspense>
            </Canvas>
            <p className={styles.note}>For better experience view this section on web version.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default BookExperience;
