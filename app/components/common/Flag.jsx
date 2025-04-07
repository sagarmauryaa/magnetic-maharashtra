import styles from "./Flag.module.css";
import { useEffect, useState } from "react";

const Flag = () => {
  const [isIOS, setIsIOS] = useState(false);

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
  }, []);

  return (
    <main className={styles.flagContainer}>
      <video
        className={styles.flagVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        controls={false}
        style={{
          backgroundColor: "transparent",
          objectFit: "contain",
          mixBlendMode: "screen",
          WebkitMaskImage: "-webkit-radial-gradient(white, black)",
        }}
      >
        {isIOS ? (
          <source src="/videos/Flag_iOS.mp4" type="video/mp4" />
        ) : (
          <source src="/videos/Flag.mp4" type="video/mp4" />
        )}
      </video>
    </main>
  );
};

export default Flag;
