"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

import Popup from "./components/Popup";
import Playground from "./components/Home/Playground";
import Brilliance from "./components/Home/Brilliance";
import ProofofProgress from "./components/Home/ProofofProgress";
import Statistics from "./components/Home/Statistics";
import Sustainability from "./components/Home/Sustainability";
import EverythingConnectsMobile from "./components/Home/EverythingConnectsMobile";
import EverythingConnects from "./components/Home/EverythingConnects";
import GlobalBusiness from "./components/Home/GlobalBusiness";
import RoadMap from "./components/Home/RoadMap";
import Milestones from "./components/Home/Milestone";
import Incentives from "./components/Home/Incentives";
import Arts from "./components/Home/Arts";
import BookExperience from "./components/Home/BookExperience";
import ParallaxExperience from "./components/Home/ParallaxExperience";
import Bollywood from "./components/Home/Bollywood";
import Envelop from "./components/Home/Envelop";

export default function Home() {
  const heroHeadingSectionRef = useRef();
  const heroHeadingRef = useRef();
  const [videoSources, setVideoSources] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile or desktop
  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <main>
        <div className={styles.heroVideoContainer}>
          <video className={styles.heroVideo} autoPlay muted loop>
            <source src="/videos/DesktopHeroVideoHQ.mp4" type="video/mp4" />
            <source
              src="/videos/MobileHeroVideo.mp4"
              type="video/mp4"
              media="all and (max-width: 480px)"
            />
          </video>
        </div>
      </main>

      <section
        // ref={heroHeadingSectionRef}
        className={styles.heroHeadingSectionContainer}
      >
        <section
          // ref={heroHeadingRef}
          className={styles.heroHeadingSection}
        >
          <h1 className={styles.heroHeading}>
            <span className={styles.heroHeadingSpan}>
              <span className={styles.heroHeadingSpanHighlight}>
                {" "}
                Magnetic Maharashtra
              </span>{" "}
              is your hub for
            </span>{" "}
            growth, with endless opportunities, smart policies, and dedicated
            support to ensure your success. Here, your ambitions can truly take
            flight.
          </h1>
        </section>
      </section>

      <Popup />
      <ProofofProgress />
      <Playground />
      <Brilliance />
      <Statistics />
      <Sustainability />
      {isMobile ? <EverythingConnectsMobile /> : <EverythingConnects />}
      <GlobalBusiness />
      <Milestones />
      <RoadMap />
      <Incentives />
      <Arts />
      <BookExperience />
      <ParallaxExperience />
      <Bollywood />
      <Envelop />
    </>
  );
}
