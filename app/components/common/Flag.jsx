"use client";

import styles from "./Flag.module.css";
import { useEffect, useRef, useState } from "react";

export default function Flag() {
  const flagVideoRef = useRef(null);

  useEffect(() => {
    const videoEl = flagVideoRef.current;
    if (!videoEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const playPromise = videoEl.play();
            if (playPromise !== undefined) {
              playPromise.catch((err) => {
                console.warn("Play blocked:", err);
              });
            }
          }
        });
      },
      {
        threshold: 0.25, // Play when 25% of video is visible
      }
    );

    observer.observe(videoEl);

    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={flagVideoRef}
      className={styles.flagVideo}
      muted
      playsInline
      loop
      preload="auto"
      controls={false}
      fetchPriority="high"
      style={{ width: "100%", height: "auto", objectFit: "cover" }}
    >
      <source src="/videos/Flag.mp4" type="video/mp4" />
    </video>
  );
}
