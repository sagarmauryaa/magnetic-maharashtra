import styles from "./Flag.module.css";
import { useEffect, useRef, useState } from "react";

const Flag = () => {
  const [isIOS, setIsIOS] = useState(false);
  const videoRef = useRef(null);
  useEffect(() => {
    // Detect iOS devices
    const detectIOS = () => {
      if (typeof window === "undefined") return false;
      const userAgent = window.navigator.userAgent.toLowerCase();
      return (
        /iphone|ipad|ipod|macintosh/.test(userAgent) && "ontouchend" in document
      );
    };

    setIsIOS(detectIOS());
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <main className={styles.flagContainer}>
      <video
        ref={videoRef}
        className={styles.flagVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        controls={false}
        fetchPriority="high"
      >
        <source
          src="https://ik.imagekit.io/bn4qs1mj3/Flag_Final.webm/ik-video.mp4?updatedAt=1745003850162"
          type="video/webm"
        />
      </video>
    </main>
  );
};

export default Flag;
