import { useRef } from "react";
import styles from "./Sustainability.module.css";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import Link from "next/link";
import Image from "next/image";

function Sustainability() {
  const sustainImageContainerRef = useRef();
  const sustainImageRef = useRef();
  const sustainTitleRef = useRef();
  const sustainSubtitleRef = useRef();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    let sustainTimeline = gsap.timeline({ defaults: { duration: 1 } });

    sustainTimeline
      .to(sustainImageContainerRef.current, {
        clipPath: "inset(0 0 0% 0)",
        ease: "power2.inOut",
      })
      .from(sustainImageRef.current, { scale: 1.2, ease: "power2.inOut" }, "<")
      .from(
        sustainTitleRef.current,
        { opacity: 0, y: 100, ease: "power2.inOut" },
        "<=0.1"
      )
      .from(
        sustainSubtitleRef.current,
        { opacity: 0, y: 100, ease: "power2.inOut" },
        "<"
      );

    ScrollTrigger.create({
      trigger: sustainTitleRef.current,
      animation: sustainTimeline,
      start: "top bottom+=100px",
    });
  });

  return (
    <div className={styles.sustainabilityContainer}>
      <div className={styles.hSustainability}>
        <div ref={sustainImageContainerRef} className={styles.sustainImage}>
          <picture>
            <source
              srcSet="/images/Sustainability/Sustainability.webp"
              media="(min-width:960px)"
            />
            <source
              srcSet="/images/Sustainability/Sustainability.webp"
              media="(min-width:360px)"
            />
            <Image
              ref={sustainImageRef}
              src="/images/Sustainability/Sustainability.webp"
              alt="Naturally Better"
              width={100}
              height={100}
            />
          </picture>
        </div>
        <div className={styles.sustainTitles}>
          <div ref={sustainTitleRef} className={styles.sustainTitle}>
            Sustainability -
            <span>
              Business,
              <br />
              Naturally Better
            </span>
          </div>
          <div ref={sustainSubtitleRef} className={styles.sustainSubtitle}>
            Building for tomorrow, without compromising today—Maharashtra&apos;s
            commitment to sustainability is as strong as its drive to grow.
            <Link href="/sustainability" className={styles.sustainReadMore}>
              <button>Read More </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sustainability;
