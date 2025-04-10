"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ai.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import Image from "next/image";

const AiSmartManufacturing = () => {
  const coreTabRef = useRef([]);
  const coreImageRef = useRef([]);
  const coreSupportingTextRef = useRef([]);

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (e, tab) => {
    e.preventDefault();
    if (tab == toggleState) return;
    setToggleState(tab);
  };
  function handleInnovationTabChange(location) {
    // Update tabs

    coreTabRef.current.forEach((tab) => {
      if (tab) {
        // Check if tab exists to avoid errors

        const isSelected = tab.dataset.location === location;

        tab.classList.toggle(styles.clicked, isSelected);
      }
    });

    // Update images

    coreImageRef.current.forEach((img) => {
      if (img) {
        const isSelected = img.classList.contains(location);

        img.classList.toggle(styles.visible, isSelected);

        img.classList.toggle(styles.hiddenImage, !isSelected);
      }
    });

    coreSupportingTextRef.current.forEach((text) => {
      if (text) {
        const isSelected = text.classList.contains(location);

        text.classList.toggle(styles.visible, isSelected);

        text.classList.toggle(styles.hiddenText, !isSelected);
      }
    });
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, []);

  useGSAP(() => {
    gsap
      .timeline()
      .fromTo(
        `.${styles.aiImage}`,
        { clipPath: "inset(0 0 100% 0)" },
        { clipPath: "inset(0 0 0% 0)", duration: 1, ease: "power2.inOut" }
      )
      .fromTo(
        `.${styles.aiHeroText}`,
        { yPercent: 30, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
          stagger: 0.2,
        }
      )
      .fromTo(
        `.${styles.aiHeroSubheading}`,
        { yPercent: 30, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
          stagger: 0.2,
        },
        "<=0.5"
      );

    // Add smooth floating animation for gradient glows in the last section
    gsap.to(`.${styles.aiGradientGlow1}`, {
      xPercent: "random(-150, 150)",
      yPercent: "random(-100,100)",
      duration: 10,
      repeat: -1,
      repeatRefresh: true,
      ease: "sine.inOut",
    });

    gsap.to(`.${styles.aiGradientGlow2}`, {
      xPercent: "random(-150, 150)",
      yPercent: "random(-100, 100)",
      duration: 12,
      repeat: -1,
      repeatRefresh: true,
      ease: "sine.inOut",
      delay: 0.5,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#whyItMatters",
          start: "top center",
          end: "bottom top",
        },
      })
      .from(`.${styles.mattersHeading}`, { yPercent: 30, opacity: 0 })
      .from(
        `.${styles.mattersItem}`,
        { xPercent: -100, opacity: 0, stagger: 0.2 },
        "<=0.3"
      );

    const dividers = gsap.utils.toArray(`.${styles.divider}`);
    dividers.forEach((divider) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: `.${styles.divider}`,
            start: "top bottom",
            end: "bottom top",
          },
        })
        .from(divider, { width: "0%", duration: 1, ease: "power2.inOut" });
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.${styles.coreSection}`,
          start: "top center",
          end: "bottom top",
        },
      })
      .from(`.${styles.coreHeading} h2`, { yPercent: 30, opacity: 0 })
      .from(`.${styles.coreTitleContainer} > h3`, {
        yPercent: 40,
        opacity: 0,
        duration: 0.65,
        ease: "power2.inOut",
        stagger: 0.05,
      })
      .from(
        `.${styles.coreTitleContainer} > .${styles.innovationDivider}`,
        {
          width: "0%",
          duration: 0.65,
          ease: "power2.inOut",
          stagger: 0.05,
        },
        "<"
      )
      .from(
        `.${styles.imageBox}`,
        {
          yPercent: 30,
          opacity: 0,
          duration: 0.65,
          ease: "power2.inOut",
        },
        "<=0.3"
      )
      .from(`.${styles.supportingText}`, {
        yPercent: 30,
        opacity: 0,
        duration: 0.65,
        ease: "power2.inOut",
      });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#sectorsOfImpact",
          start: "top center",
          end: "bottom top",
        },
      })
      .from(`.${styles.sectionDivider}`, {
        width: "0%",
        opacity: 0,
        duration: 0.65,
        ease: "power2.inOut",
      });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.${styles.sectorsContainer}`,
          start: "top center",
          end: "bottom top",
        },
      })
      .from(`.${styles.sectorsHead} h3`, { yPercent: 30, opacity: 0 })
      .from(
        `.${styles.sectorsContent} img`,
        {
          opacity: 0,
          clipPath: "inset(0 0 100% 0)",
          yPercent: 30,
          duration: 0.65,
          ease: "power2.inOut",
        },
        "<=0.2"
      )
      .from(
        `.${styles.sectorsContent} p`,
        {
          opacity: 0,
          yPercent: 30,
          duration: 0.65,
          ease: "power2.inOut",
        },
        "<=0.2"
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.${styles.aiLastSection}`,
          start: "top center",
          end: "bottom top",
        },
      })
      .from(
        `.${styles.aiContactUs} h2`,
        {
          yPercent: 30,
          opacity: 0,
          duration: 0.65,
          stagger: 0.2,
          ease: "power2.inOut",
        },
        "<=0.1"
      )
      .from(
        `.${styles.contactUs}`,
        {
          yPercent: 30,
          opacity: 0,
          duration: 0.65,
          ease: "power2.inOut",
        },
        "<=0.4"
      );
  });

  return (
    <main>
      <section id={styles.aiHeroSection}>
        <div className={styles.aiImage}>
          <img loading="lazy" src="/images/Ai/image.webp" alt="AI Hero Image" />
        </div>
        <div className={styles.aiHeroText}>
          <h2 className={styles.aiHeroHeading}>
            <span>AI</span> & Smart Manufacturing
          </h2>
          <p className={styles.aiHeroSubheading}>
            Building the Future of Industry
          </p>
        </div>
        <div
          className={styles.aiGradientGlow}
          style={{ backgroundColor: "#01A29A" }}
        ></div>
      </section>
      <div className={styles.divider}></div>

      <section id={styles.whyItMatters}>
        <div className={styles.mattersHeader}>
          <div className={styles.mattersHeading}>
            <h2>Why it Matters</h2>
          </div>
        </div>
        <div className={styles.mattersGrid}>
          <div className={styles.mattersItem}>
            <img loading="lazy" src="/images/Ai/icon 1.svg" alt="30% boost" />
            <p> 30% boost in operational efficiency</p>
          </div>
          <div className={styles.mattersItem}>
            <img loading="lazy" src="/images/Ai/icon 2.svg" alt="predictive" />
            <p>Real-time predictive maintenance</p>
          </div>
          <div className={styles.mattersItem}>
            <img
              loading="lazy"
              src="/images/Ai/icon 3.svg"
              alt="AI-driven insights"
            />
            <p>AI-driven insights for precision</p>
          </div>
          <div className={styles.mattersItem}>
            <img loading="lazy" src="/images/Ai/icon 4.svg" alt="Data-driven" />
            <p>Data-driven decision making</p>
          </div>
        </div>
      </section>
      <div className={styles.divider}></div>

      <section className={styles.coreSection}>
        <div className={styles.coreHeader}>
          <div className={styles.coreHeading}>
            <h2>The Core</h2>
          </div>
        </div>
        <div className={styles.coreContainer}>
          <div className={styles.coreTitleContainer}>
            <div className={styles.innovationDividerTop}></div>
            <h3
              ref={(el) => (coreTabRef.current[0] = el)}
              className={`${styles.coreTitleContainer} clicked`}
              data-location="industrial"
              onMouseOver={(e) =>
                handleInnovationTabChange(e.currentTarget.dataset.location)
              }
            >
              Industrial Automation
            </h3>
            <div className={styles.innovationDivider}></div>
            <h3
              ref={(el) => (coreTabRef.current[1] = el)}
              className={styles.coreTitleContainer}
              data-location="robotics"
              onMouseOver={(e) =>
                handleInnovationTabChange(e.currentTarget.dataset.location)
              }
            >
              Robotics & AI Integration
            </h3>
            <div className={styles.innovationDivider}></div>
            <h3
              ref={(el) => (coreTabRef.current[2] = el)}
              className={styles.coreTitleContainer}
              data-location="analytics"
              onMouseOver={(e) =>
                handleInnovationTabChange(e.currentTarget.dataset.location)
              }
            >
              IoT & Predictive Analytics
            </h3>
            <div className={styles.innovationDivider}></div>
            <h3
              ref={(el) => (coreTabRef.current[3] = el)}
              className={styles.coreTitleContainer}
              data-location="digi-tech"
              onMouseOver={(e) =>
                handleInnovationTabChange(e.currentTarget.dataset.location)
              }
            >
              Digital Twin Technology
            </h3>
            <div className={styles.innovationDivider}></div>
          </div>
          <div className={styles.coreImageContainer}>
            <div className={styles.imageBox}>
              <Image
                loading="lazy"
                ref={(el) => (coreImageRef.current[0] = el)}
                className={`${styles.visible} industrial`}
                src="/images/Ai/wildlife.webp"
                alt="Industrial"
                width={100}
                height={100}
                quality={100}
                unoptimized
              />
              <Image
                loading="lazy"
                ref={(el) => (coreImageRef.current[1] = el)}
                className={`${styles.hiddenImage} robotics`}
                src="/images/Ai/robotics_ai_integration.webp"
                alt="Robotics"
                width={100}
                height={100}
                quality={100}
                unoptimized
              />
              <Image
                loading="lazy"
                ref={(el) => (coreImageRef.current[2] = el)}
                className={`${styles.hiddenImage} analytics`}
                src="/images/Ai/iot_predictive_analytics.webp"
                alt="Analytics"
                width={100}
                height={100}
                quality={100}
                unoptimized
              />
              <Image
                loading="lazy"
                ref={(el) => (coreImageRef.current[3] = el)}
                className={`${styles.hiddenImage} digi-tech`}
                src="/images/Ai/digital_twin_technology.webp"
                alt="Digital Tech"
                width={100}
                height={100}
                quality={100}
                unoptimized
              />
            </div>
            <div
              className={`${styles.supportingText} industrial ${styles.visible}`}
              ref={(el) => (coreSupportingTextRef.current[0] = el)}
            >
              <p>Automated material handling.</p>
              <p>Precision in assembly lines.</p>
              <p>Minimal downtime.</p>
            </div>
            <div
              className={`${styles.supportingText} robotics ${styles.hiddenText}`}
              ref={(el) => (coreSupportingTextRef.current[1] = el)}
            >
              <p>AI-powered robots handle repetitive tasks.</p>
              <p>AI systems make dynamic adjustments.</p>
              <p>Enhanced safety protocols.</p>
            </div>
            <div
              className={`${styles.supportingText} analytics ${styles.hiddenText}`}
              ref={(el) => (coreSupportingTextRef.current[2] = el)}
            >
              <p>IoT-enabled machines.</p>
              <p>Predictive maintenance models.</p>
              <p>Energy efficiency tracking.</p>
            </div>
            <div
              className={`${styles.supportingText} digi-tech ${styles.hiddenText}`}
              ref={(el) => (coreSupportingTextRef.current[3] = el)}
            >
              <p>Virtual prototyping of factory layouts.</p>
              <p>Simulation of production processes.</p>
              <p>Continuous process optimization.</p>
            </div>
          </div>
        </div>

        <div className={styles.coreContainerMobile}>
          <div className={styles.coreTabsContainer}>
            <div
              role="tablist"
              className={
                toggleState === 1
                  ? `${styles.tab} ${styles.coreActive}`
                  : styles.tab
              }
              onClick={(e) => toggleTab(e, 1)}
            >
              Industrial Automation
            </div>
            <div
              role="tablist"
              className={
                toggleState === 2
                  ? `${styles.tab} ${styles.coreActive}`
                  : styles.tab
              }
              onClick={(e) => toggleTab(e, 2)}
            >
              Robotics & AI Integration
            </div>
            <div
              role="tablist"
              className={
                toggleState === 3
                  ? `${styles.tab} ${styles.coreActive}`
                  : styles.tab
              }
              onClick={(e) => toggleTab(e, 3)}
            >
              IoT & Predictive Analytics
            </div>
            <div
              role="tablist"
              className={
                toggleState === 4
                  ? `${styles.tab} ${styles.coreActive}`
                  : styles.tab
              }
              onClick={(e) => toggleTab(e, 4)}
            >
              Digital Twin Technology
            </div>
          </div>
          <div className={styles.contentTabs}>
            <div
              className={
                toggleState === 1
                  ? `${styles.content} ${styles.activeContent}`
                  : styles.content
              }
            >
              <Image
                className={styles.contentImageMobile}
                loading="lazy"
                src="/images/Ai/wildlife.webp"
                alt=""
                width={100}
                height={100}
              />
              <p>
                <p>Automated material handling.</p>
                <p>Precision in assembly lines.</p>
                <p>Minimal downtime.</p>
              </p>
            </div>
            <div
              className={
                toggleState === 2
                  ? `${styles.content} ${styles.activeContent}`
                  : styles.content
              }
            >
              <Image
                className={styles.contentImageMobile}
                loading="lazy"
                src="/images/Ai/robotics_ai_integration.webp"
                alt=""
                width={100}
                height={100}
              />
              <p>
                <p> AI-powered robots handle repetitive tasks.</p>{" "}
                <p>AI systems make dynamic adjustments.</p>{" "}
                <p>Enhanced safety protocols.</p>
              </p>
            </div>
            <div
              className={
                toggleState === 3
                  ? `${styles.content} ${styles.activeContent}`
                  : styles.content
              }
            >
              <Image
                className={styles.contentImageMobile}
                loading="lazy"
                src="/images/Ai/iot_predictive_analytics.webp"
                alt=""
                width={100}
                height={100}
              />
              <p>
                <p>IoT-enabled machines.</p>{" "}
                <p>Predictive maintenance models.</p>{" "}
                <p>Energy efficiency tracking.</p>
              </p>
            </div>
            <div
              className={
                toggleState === 4
                  ? `${styles.content} ${styles.activeContent}`
                  : styles.content
              }
            >
              <Image
                className={styles.contentImageMobile}
                loading="lazy"
                src="/images/Ai/digital_twin_technology.webp"
                alt=""
                width={100}
                height={100}
              />
              <p>
                <p>Virtual prototyping of factory layouts.</p>
                <p>Simulation of production processes.</p>
                <p>Continuous process optimization.</p>
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.divider}></div>

      <section id={styles.sectorsOfImpact}>
        <div className={styles.sectorsHead}>
          <h2>Sectors of Impact</h2>
        </div>
        <div className={styles.sectionDivider}></div>
        <div className={styles.sectorsContainer}>
          <div className={styles.sectorsHead}>
            <h3>Textile & Apparels</h3>
          </div>
          <div className={styles.sectorsContent}>
            <img
              loading="lazy"
              src="/images/Ai/Textile & Apparels.webp"
              alt="Textile & Apparels"
            />
            <div className={styles.sectorsText}>
              <p>
                AI-driven quality control and automated stitching lines reduce
                defects and improve production speeds.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.sectionDivider}></div>
        <div className={styles.sectorsContainer}>
          <div className={styles.sectorsHead}>
            <h3>Auto & Auto Parts</h3>
          </div>
          <div className={styles.sectorsContent}>
            <img
              loading="lazy"
              src="/images/Ai/Auto & Auto Parts.webp"
              alt="Autoparts"
            />
            <div className={styles.sectorsText}>
              <p>
                Automated assembly lines, AI for design optimization, and
                IoT-enabled supply chain monitoring boost efficiency.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.sectionDivider}></div>
        <div className={styles.sectorsContainer}>
          <div className={styles.sectorsHead}>
            <h3>Pharma & Bulk Drugs</h3>
          </div>
          <div className={styles.sectorsContent}>
            <img
              loading="lazy"
              src="/images/Ai/Pharma & Bulk Drugs.webp"
              alt="Bulk-drugs"
            />
            <div className={styles.sectorsText}>
              <p>
                AI optimizes pharmaceutical production, ensuring accuracy in
                drug formulation and reducing waste.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.sectionDivider}></div>
        <div className={styles.sectorsContainer}>
          <div className={styles.sectorsHead}>
            <h3>Aerospace & Defence</h3>
          </div>
          <div className={styles.sectorsContent}>
            <img
              loading="lazy"
              src="/images/Ai/Aerospace & Defence.webp"
              alt="defence"
            />
            <div className={styles.sectorsText}>
              <p>
                Precision manufacturing and digital twin technology enhance
                design accuracy and reduce errors.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.sectionDivider}></div>
        <div className={styles.sectorsContainer}>
          <div className={styles.sectorsHead}>
            <h3>IT/ITeS & Emerging Tech</h3>
          </div>
          <div className={styles.sectorsContent}>
            <img
              loading="lazy"
              src="/images/Ai/IT_ITeS & Emerging Tech.webp"
              alt="emerging-tech"
            />
            <div className={styles.sectorsText}>
              <p>
                AI integration in chip manufacturing and data analytics ensures
                smarter, faster tech production.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.sectionDivider}></div>
        <div className={styles.sectorsContainer}>
          <div className={styles.sectorsHead}>
            <h3>Electronics & ESDM</h3>
          </div>
          <div className={styles.sectorsContent}>
            <img
              loading="lazy"
              src="/images/Ai/Electronics & ESDM.webp"
              alt="electronics"
            />
            <div className={styles.sectorsText}>
              <p>
                AI and automation streamline electronic component manufacturing
                and assembly.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.divider}></div>
      <section className={styles.aiLastSection}>
        <div className={styles.aiContactUs}>
          <h2>Let&apos;s Redefine Manufacturing</h2>
          <h2>Together, We Lead.</h2>
        </div>
        <div className={styles.contactUs} role="button" aria-label="Contact Us">
          Contact us
        </div>
        <div className={styles.aiGradientGlow1}></div>
        <div className={styles.aiGradientGlow2}></div>
      </section>
      <div className={styles.divider}></div>
    </main>
  );
};

export default AiSmartManufacturing;
