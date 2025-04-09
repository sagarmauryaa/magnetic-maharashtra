import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { globalBusinessData } from "../../globalDestinationData";
import styles from "../../page.module.css";
import Image from "next/image";
import { useAppContext } from "../AppContext";
import Popup from "./Popup";

const GlobalBusiness = () => {
  const globalBusinessRef = useRef();
  const scrollSectionRef = useRef();
  const scrollTriggerRef = useRef();
  const cardRef = useRef([]);
  const { state, setState } = useAppContext();
  const { selectedIndex, isActive } = state;

  useGSAP(() => {
    let mm = gsap.matchMedia();

    // Clear any existing ScrollTriggers to prevent conflicts
    ScrollTrigger.getAll().forEach((st) => {
      if (st.vars.trigger === globalBusinessRef.current) {
        st.kill();
      }
    });

    mm.add("(min-width:768px) and (max-width:1598px)", () => {
      const scrollWidth =
        scrollSectionRef.current.scrollWidth -
        scrollSectionRef.current.clientWidth;

      gsap.to(scrollSectionRef.current, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: globalBusinessRef.current,
          markers: false, // Set to false in production
          start: "35% top",
          end: `+=${scrollWidth}`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
          invalidateOnRefresh: true,
          refreshPriority: 5,
          anticipatePin: 1,
          onLeave: (self) => {
            // Ensure proper unpinning when leaving section
            self.disable(false);
            setTimeout(() => self.enable(false), 100);
          },
        },
      });
    });

    mm.add("(min-width:1599px)", () => {
      const scrollWidth =
        scrollSectionRef.current.scrollWidth -
        scrollSectionRef.current.clientWidth;

      gsap.to(scrollSectionRef.current, {
        x: -scrollWidth,
        ease: "linear",
        scrollTrigger: {
          trigger: ".globalBusiness",
          markers: false, // Set to false in production
          start: "top top",
          end: `+=${scrollWidth}`, // Add extra space for larger screens
          scrub: 0.6,
          pin: true,
          pinSpacing: true,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onLeaveBack: (self) => {
            globalBusinessRef.current.style.marginBottom = "0px";
          },
          onLeave: (self) => {
            // Force unpin when section is left
            self.disable(false);
            setTimeout(() => self.enable(false), 100);
            globalBusinessRef.current.style.marginBottom = "0px";
          },
        },
      });
    });
  });

  const handleCardClick = (id) => {
    setState((prev) => ({ ...prev, selectedIndex: id, isActive: true }));
  };

  return (
    <section ref={globalBusinessRef} className={styles.globalBusiness}>
      <h1>
        Global Business
        <br /> Destination
      </h1>
      <div className={styles.description1}>
        <p>
          We offer everything you need—great resources, talented
          <br />
          people, and a supportive environment.
        </p>
      </div>
      <h2>The Stories of Success</h2>
      <div ref={scrollTriggerRef}>
        <div ref={scrollSectionRef} className={styles.scrollSection}>
          {globalBusinessData.map((business, index) => (
            <div
              ref={(el) => (cardRef.current[index] = el)}
              className={`${
                business.class === "largeCard"
                  ? styles.largeCard
                  : styles.smallCard
              }`}
              key={business.id}
              onClick={() => handleCardClick(business.id)}
              onKeyDown={(e) =>
                e.key === "Enter" && handleCardClick(business.id)
              }
              role="button"
              tabIndex={0}
            >
              <Image
                src={business.imgPath}
                alt={business.name}
                width={100}
                height={100}
                quality={100}
                unoptimized
              />
              <h3>{business.name}</h3>
            </div>
          ))}
        </div>
      </div>
      <Popup />
    </section>
  );
};

export default GlobalBusiness;
