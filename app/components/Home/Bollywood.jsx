'use client'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import animationData from "../../../public/lottie/bollywood.json";
import { useRef } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import styles from "./Bollywood.module.css";

const DynamicLottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

function Bollywood() {
  const bollyTabRef = useRef();
  const scrollSectionRef = useRef();
  const scrollTriggerRef = useRef();
  useGSAP(() => {
    // gsap.set(".rightB", { xPercent: 14 });

    const animateImages = () => {
      gsap.from([`.${styles.image} , .${styles.bollywoodSubtitle}`], {
        duration: 1,
        opacity: 0,
        stagger: 0.1,
        y: 50,
        scrollTrigger: {
          trigger: `.${styles.bollywoodContainer}`,
          markers: false,
          start: "top center",
          ease: "ease.in",
        },
      });
    };

    const animateBollywoodText = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: `.${styles.bollywoodText}`,
          // markers: true,
          start: "top 60%",
        },
      });

      tl.to(`.${styles.bollywoodCamera}`, {
        duration: 1,
        opacity: 1,
        visibility: "visible", // make it visible during animation
        display: "inline-block", // set display to inline-block before animation starts
        onStart: function () {
          // Ensure the element is set to inline-block before animation starts
          gsap.set(`.${styles.bollywoodCamera}`, { display: "inline-block" });
        },
      });
    };

    let mm = gsap.matchMedia();
    mm.add("(min-width:768px) and (max-width: 1023px)", () => {
      const scrollWidth =
        scrollSectionRef.current.scrollWidth -
        scrollSectionRef.current.clientWidth;

      gsap.to(scrollSectionRef.current, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: bollyTabRef.current,
          start: "0 top",
          end: `+=${scrollWidth}`,
          scrub: true,
          pin: true,
          pinSpacing: true,
          invalidateOnRefresh: true,
          refreshPriority: 5,
          markers: true,
        },
      });
    });

    animateImages();
    // animateBollywoodText();
  });

  return (
    <section className={styles.bollywoodContainer} ref={bollyTabRef}>
      <div className={styles.bollywood} ref={scrollTriggerRef}>
        <div className={styles.bollywoodImages} ref={scrollSectionRef}>
          <div className={styles.image}>
            <Image
              width={100}
              height={460}
              loading="lazy"
              src="/images/Bollywood/bollywood1.webp"
              alt=""
              quality={100}
              unoptimized
              preload="true"
            />
          </div>
          {/* <div className='inner-grid-wrapper'>
            <div className='image'>
              <img src={bollywood2} alt='' />
            </div>
            <div className='image '>
              <img src={bollywood3} alt='' />
            </div>
          </div> */}
          <div className={styles.innerGridWrapper}>
            <div className={styles.image}>
              <Image
                width={100}
                height={230}
                loading="lazy"
                src="/images/Bollywood/bollywood2.webp"
                alt=""
                quality={100}
                unoptimized
                preload="true"
              />
            </div>
            <div className={styles.image}>
              <Image
                width={100}
                height={230}
                loading="lazy"
                src="/images/Bollywood/bollywood3.webp"
                alt=""
                quality={100}
                unoptimized
                preload="true"
              />
            </div>
          </div>
          <div className={styles.bollywoodSubtitle}>
            <Image
              width={320}
              height={460}
              loading="lazy"
              src="/images/Bollywood/bollywood4.webp"
              alt=""
              quality={100}
              unoptimized
              preload="true"
            />
            <p>
              Bollywood makes Maharashtra the center of India’s film industry,
              boosting business in production, talent, and creative arts.
            </p>
          </div>

          {/* <div className='inner-grid-wrapper'>
            <div className='image'>
              <img src={bollywood5} alt='' />
            </div>
            <div className='image'>
              <img src={bollywood6} alt='' />
            </div>
          </div> */}
          <div className={styles.innerGridWrapper}>
            <div className={styles.image}>
              <Image
                width={100}
                height={230}
                loading="lazy"
                src="/images/Bollywood/bollywood5.webp"
                alt=""
                quality={100}
                unoptimized
                preload="true"
              />
            </div>
            <div className={styles.image}>
              <Image
                width={100}
                height={230}
                loading="lazy"
                src="/images/Bollywood/bollywood6.webp"
                alt=""
                quality={100}
                unoptimized
                preload="true"
              />
            </div>
          </div>
        </div>
        <div className={styles.bollywoodImagesMobile}>
          <div className={styles.imageMobileConatiner}>
            <div className={styles.innerMobileImages}>
              <div className={styles.image}>
                <Image
                  width={100}
                  height={215}
                  loading="lazy"
                  src="/images/Bollywood/bollywood1.webp"
                  alt=""
                  quality={100}
                  unoptimized
                  preload="true"
                />
              </div>
              <div className={styles.image}>
                <Image
                  width={100}
                  height={100}
                  loading="lazy"
                  src="/images/Bollywood/bollywood2.webp"
                  alt=""
                  preload="true"
                />
              </div>
              <div className={styles.image}>
                <Image
                  width={100}
                  height={100}
                  loading="lazy"
                  src="/images/Bollywood/bollywood3.webp"
                  alt=""
                  preload="true"
                />
              </div>
              <div className={styles.image}>
                <Image
                  width={100}
                  height={215}
                  loading="lazy"
                  src="/images/Bollywood/bollywood4.webp"
                  alt=""
                  unoptimized
                  preload="true"
                />
              </div>
              <div className={styles.image}>
                <Image
                  width={100}
                  height={100}
                  loading="lazy"
                  src="/images/Bollywood/bollywood5.webp"
                  alt=""
                />
              </div>
              <div className={styles.image}>
                <Image
                  width={100}
                  height={100}
                  loading="lazy"
                  src="/images/Bollywood/bollywood6.webp"
                  alt=""
                  preload="true"
                />
              </div>
            </div>
          </div>
          <p>
            Bollywood makes Maharashtra the center of India’s film industry,
            boosting business in production, talent, and creative arts
          </p>
        </div>
        <div className={styles.bollywoodText}>
          <p>
            <div className={styles.leftB}>
              <img src="/images/Bollywood/BO.svg" alt="" />
            </div>
            <div className={styles.bollywoodCamera}>
              <div>
                <DynamicLottie
                  animationData={animationData}
                  loop={true}
                  speed={0.01}
                  autoplay={true}
                />
              </div>
            </div>
            <div className={styles.rightB}>
              <img src="/images/Bollywood/LYWood.svg" alt="" />
            </div>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Bollywood;
