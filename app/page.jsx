"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

import Popup from "./components/Home/Popup";
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
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import UseScreenSize from "./components/common/UseScreenSize";
import Flag from "./components/common/Flag";
import { useRouter } from "next/navigation";

export default function Home() {
  const heroHeadingSectionRef = useRef();
  const heroHeadingRef = useRef();
  const [videoSources, setVideoSources] = useState({});
  const isMobile = UseScreenSize();

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: heroHeadingSectionRef.current,
          start: "0% 80%",
          end: "bottom bottom",
          markers: false,
          toggleActions: "play none none reverse",
        },
      })
      .from(heroHeadingRef.current, {
        opacity: 0,
        yPercent: 60,
        ease: "power1.inOut",
      });
  });

  const videoRef = useRef(null);
  const wrapperRef = useRef(null);

  // // Video caching effect
  // useEffect(() => {
  //   // Function to fetch and cache video
  //   const fetchAndCacheVideo = async (src, videoId) => {
  //     try {
  //       // Check if video is already cached in localStorage
  //       const isCached = localStorage.getItem(`video_cached_${videoId}`);

  //       if (isCached) {
  //         // Try to get video from IndexedDB
  //         const cachedBlob = await getVideoFromIndexedDB(videoId);
  //         if (cachedBlob) {
  //           const objectURL = URL.createObjectURL(cachedBlob);
  //           setVideoSources((prev) => ({ ...prev, [videoId]: objectURL }));
  //           return;
  //         }
  //       }

  //       // If not cached or not found in IndexedDB, fetch and cache
  //       const response = await fetch(src);
  //       if (!response.ok)
  //         throw new Error(`Failed to fetch video: ${response.statusText}`);

  //       const blob = await response.blob();
  //       await saveVideoToIndexedDB(videoId, blob);

  //       const objectURL = URL.createObjectURL(blob);
  //       setVideoSources((prev) => ({ ...prev, [videoId]: objectURL }));
  //     } catch (error) {
  //       console.error(`Error caching video ${videoId}:`, error);
  //     }
  //   };

  //   // Determine which videos to cache based on screen width
  //   const width = window.innerWidth;

  //   if (width >= 1024) {
  //     fetchAndCacheVideo("/videos/DesktopHeroVideoHQ.mp4", "desktop-mp4");
  //   } else if (width >= 481) {
  //     fetchAndCacheVideo("/videos/tablet.mp4", "tablet-mp4");
  //   } else {
  //     fetchAndCacheVideo("/videos/MobileHeroVideo.mp4", "mobile-mp4");
  //   }

  //   // Cleanup function to revoke object URLs
  //   return () => {
  //     Object.values(videoSources).forEach((url) => {
  //       URL.revokeObjectURL(url);
  //     });
  //   };
  // }, []);

  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      router.push("/");
    }
  });

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px) and (max-width: 1599px)", () => {
      // New padding animation
      gsap.to(wrapperRef.current, {
        maxWidth: "1600px",
        padding: "2.5rem",
        ease: "linear",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "+=300",
          scrub: 0,
          markers: false,
        },
      });
    });

    mm.add("(min-width: 1600px)", () => {
      gsap.to(wrapperRef.current, {
        maxWidth: "1600px",
        ease: "linear",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "+=300",
          scrub: 0,
          markers: false,
        },
      });
    });
  });

  // useGSAP(() => {
  //   gsap
  //     .timeline({
  //       scrollTrigger: {
  //         trigger: heroHeadingSectionRef.current,
  //         start: "0% 80%",
  //         end: "bottom bottom",
  //         markers: false,
  //       },
  //     })
  //     .from(heroHeadingRef.current, {
  //       opacity: 0,
  //       yPercent: 60,
  //       ease: "power1.inOut",
  //     });
  // });

  return (
    <>
      {/* Hero Section */}
      <main>
        <div className={styles.heroVideoWrapper} ref={wrapperRef}>
          <video
            ref={videoRef}
            className={styles.heroVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            fetchPriority="high"
          >
            {/* {videoSources["desktop-webm"] ? (
            <source
              src={videoSources["desktop-webm"]}
              media="all and (min-width: 1024px)"
              type="video/webm"
            />
          ) : (
            <source
              src="/videos/DesktopHeroVideoHQ.webm"
              media="all and (min-width: 1024px)"
              type="video/webm"
            />
          )} */}

            {videoSources["desktop-mp4"] ? (
              <source
                src={videoSources["desktop-mp4"]}
                media="all and (min-width: 1024px)"
                type="video/mp4"
              />
            ) : (
              <source
                src="/videos/DesktopHeroVideoHQ.mp4"
                media="all and (min-width: 1024px)"
                type="video/mp4"
              />
            )}

            {/* {videoSources["tablet-webm"] ? (
            <source
              src={videoSources["tablet-webm"]}
              media="(min-width: 481px) and (max-width: 1023px)"
              type="video/webm"
            />
          ) : (
            <source
              src="/videos/tablet.webm"
              media="(min-width: 481px) and (max-width: 1023px)"
              type="video/webm"
            />
          )} */}

            {videoSources["tablet-mp4"] ? (
              <source
                src={videoSources["tablet-mp4"]}
                media="(min-width: 481px) and (max-width: 1023px)"
                type="video/mp4"
              />
            ) : (
              <source
                src="/videos/tablet.mp4"
                media="(min-width: 481px) and (max-width: 1023px)"
                type="video/mp4"
              />
            )}

            {videoSources["mobile-mp4"] ? (
              <source
                src={videoSources["mobile-mp4"]}
                type="video/mp4"
                media="all and (max-width: 480px)"
              />
            ) : (
              <source
                src="/videos/MobileHeroVideo.mp4"
                type="video/mp4"
                media="all and (max-width: 480px)"
              />
            )}
          </video>
        </div>
      </main>

      <section
        ref={heroHeadingSectionRef}
        className={styles.heroHeadingSectionContainer}
      >
        <section ref={heroHeadingRef} className={styles.heroHeadingSection}>
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
