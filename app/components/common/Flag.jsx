import styles from "./Flag.module.css";
import { useEffect, useRef, useState } from "react";

export default function Flag() {
  const flagVideoRef = useRef(null);

  useEffect(() => {
    const video = flagVideoRef.current;
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn("Flag video failed to play:", err);
        });
      }
    }
  }, []);

  return (
    <video
      ref={flagVideoRef}
      className={styles.flagVideo}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      controls={false}
      fetchPriority="high"
    >
      <source src="/videos/Flag.mp4" type="video/mp4" />
    </video>
  );
}
