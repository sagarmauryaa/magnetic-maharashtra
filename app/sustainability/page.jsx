"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./sustainability.module.css";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";

const Sustainability = () => {
  const circularTabRef = useRef([]);
  const circularImageRef = useRef([]);
  const circularSupportingTextRef = useRef([]);
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (tab) => {
    setToggleState(tab);
  };
  function handleInnovationTabChange(location) {
    // Update tabs

    circularTabRef.current.forEach((tab) => {
      if (tab) {
        // Check if tab exists to avoid errors

        const isSelected = tab.dataset.location === location;

        tab.classList.toggle(styles.clicked, isSelected);
      }
    });

    // Update images

    circularImageRef.current.forEach((img) => {
      if (img) {
        const isSelected = img.classList.contains(location);

        img.classList.toggle(styles.visible, isSelected);

        img.classList.toggle(styles.hiddenImage, !isSelected);
      }
    });
    circularSupportingTextRef.current.forEach((text) => {
      if (text) {
        const isSelected = text.classList.contains(location);

        text.classList.toggle(styles.visible, isSelected);

        text.classList.toggle(styles.hiddenText, !isSelected);
      }
    });
  }

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Hero heading animation
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.${styles.sustainabilityHeroHeading}`,
          start: "top 70%",
          end: "bottom top",
          markers: false,
        },
      })
      .from(`.${styles.sustainabilityHeroHeading} h3`, {
        y: 30,
        opacity: 0,
        duration: 0.65,
        ease: "power3.out",
      })
      .from(
        `.${styles.sustainabilityHeroHeading} p`,
        {
          y: 30,
          opacity: 0,
          duration: 0.65,
          ease: "power3.out",
        },
        "<=0.4"
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: `#${styles.smartCities}`,
          start: "top 75%",
          end: "bottom top",
        },
      })
      .from(`.${styles.sectionDetail} h5`, {
        y: 30,
        opacity: 0,
        ease: "power4.out",
        duration: 0.65,
      })
      .from(
        `.${styles.sectionDetail} p`,
        {
          y: 30,
          opacity: 0,
          ease: "power4.out",
          duration: 0.65,
        },
        "<=0.5"
      )
      .from(
        `.${styles.cityAccordionDivider}`,
        {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 0.65,
          stagger: 0.05,
          ease: "power4.out",
        },
        "<=0.2"
      )
      .from(
        `.${styles.cityAccordion} h4`,
        {
          y: 20,
          opacity: 0,
          duration: 0.65,
          stagger: 0.05,
          ease: "power4.out",
        },
        "<=0"
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: `#${styles.transport}`,
          start: "top 80%",
          end: "bottom top",
          markers: false,
        },
      })
      .from(`.${styles.transportDetail} p`, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      })
      .from(
        ".transportImage",
        {
          y: 30,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power4.out",
        },
        "<=0.2"
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: `#${styles.ecoIndustrial}`,
          start: "top 75%",
          end: "center bottom",
          markers: false,
        },
      })
      .from(`.${styles.industrialHeader} h5`, {
        opacity: 0,
        y: 30,
        duration: 0.5,
        ease: "power4.out",
      })

      .from(
        `.${styles.industrialHeader} p`,
        {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: "power4.out",
        },
        "<=0.2"
      )
      .from(
        ".ecoIndustrialImage",
        {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: "power4.out",
          stagger: 0.2,
        },
        "<=0.2"
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: `#${styles.greenProjects}`,
          start: "top 75%",
          end: "center bottom",
          markers: false,
        },
      })
      .from(`.${styles.projectsHeader} h5`, {
        opacity: 0,
        y: 30,
        duration: 0.5,
        ease: "power4.out",
      })

      .from(
        `.${styles.projectsHeader} p`,
        {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: "power4.out",
        },
        "<=0.2"
      )
      .from(
        `.${styles.projectImage}`,
        {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: "power4.out",
          stagger: 0.5,
        },
        "<=0.1"
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: `#${styles.economy}`,
          start: "top 60%",
          end: "center bottom",
          markers: false,
        },
      })
      .from(`.${styles.economyHeader} h5`, {
        opacity: 0,
        y: 30,
        duration: 0.5,
        ease: "power4.out",
      })
      .from(
        `.${styles.economyHeader} p`,
        {
          opacity: 0,
          y: 30,
          duration: 0.5,
          ease: "power4.out",
        },
        "<=0.1"
      )
      .to(`.${styles.economyImage}`, {
        clipPath: "inset(0 0 0% 0)",
        ease: "power2.inOut",
        duration: 1,
      })
      .from(
        `.${styles.economyImage} img`,
        { scale: 1.2, ease: "power2.inOut" },
        "<"
      )
      .from(
        `.${styles.economyBottom} h5`,
        {
          opacity: 0,
          y: 30,
          duration: 0.5,
          ease: "power4.out",
        },
        "<"
      )
      .from(
        `.${styles.economyBottom} p`,
        {
          opacity: 0,
          y: 30,
          duration: 0.5,
          ease: "power4.out",
        },
        "<=0.3"
      );

    const initialStates = () => {
      gsap.set(`.${styles.initiativeItem}:nth-child(2)`, {
        xPercent: -100,
        opacity: 0,
      });
      gsap.set(`.${styles.initiativeItem}:nth-child(3)`, {
        xPercent: -200,
        opacity: 0,
      });
    };
    const animateBoxes = () => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: `.${styles.initiativeItem}`,
          // markers: true,
          start: "top bottom",
          end: "bottom bottom",
          ease: "expo.out",
          duration: 4,
        },
      });
      tl.to(`.${styles.initiativeItem}`, {
        xPercent: 0,
        stagger: 0.35,
        opacity: 1,
      });
      return tl;
    };

    initialStates();
    animateBoxes();

    gsap.utils
      .toArray(`.${styles.impactContainer} .${styles.gridItem}`)
      .forEach((item, index) => {
        let anim = gsap
          .timeline()
          .fromTo(
            item,
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, delay: index * 0.1 }
          );

        ScrollTrigger.create({
          animation: anim,
          trigger: `.${styles.impactContainer}`,
          start: "top center",
        });
      });
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <main>
      <section id={styles.sustainabilityHeroSection}>
        <div className={styles.sustainabilityHeroHeading}>
          <h3>
            Creating a<br />
            better future.
          </h3>
          <p>
            Maharashtra is at the forefront of pioneering a sustainable future.
            Through transformative initiatives like Smart Cities, Eco-Industrial
            Zones, and Green Projects, we are shaping our state into a cleaner
            and greener space. <br />
            <br />
            Dive in to witness our bold strides!
          </p>
        </div>
      </section>
      <div className={styles.sectionDividerSus}>
        <div className={styles.heroDivide}></div>
      </div>

      {/* Smart Cities */}
      <section id={styles.smartCities}>
        <div className={styles.sectionDetail}>
          <h5>Smart Cities</h5>
          <p>
            Maharashtra is leading the way in creating a greener future. Through
            various projects like Smart Cities, Eco-Industrial Zones, and Green
            Projects, we&apos;re making our state cleaner and more sustainable.
            Let&apos;s explore how we&apos;re doing this.
          </p>
        </div>
        <div className={styles.cityAccordion}>
          <h4>PUNE</h4>
          <div className={styles.cityAccordionDivider}></div>
          <h4>SOLAPUR</h4>
          <div className={styles.cityAccordionDivider}></div>
          <h4>KALYAN-DOMBIVALI</h4>
          <div className={styles.cityAccordionDivider}></div>
          <h4>NAGPUR</h4>
          <div className={styles.cityAccordionDivider}></div>
          <h4>NASHIK</h4>
          <div className={styles.cityAccordionDivider}></div>
          <h4>THANE</h4>
          <div className={styles.cityAccordionDivider}></div>
          <h4>CHHATRAPATI SAMBHAJI NAGAR</h4>
          <div className={styles.cityAccordionDivider}></div>
          <h4>NAVI MUMBAI</h4>
          <div className={styles.cityAccordionDivider}></div>
          <h4>AMRAVATI</h4>
          <div className={styles.cityAccordionDivider}></div>
          <h4>DHULE</h4>
          <div className={styles.cityAccordionDivider}></div>
        </div>
      </section>

      {/* Transport Section */}
      <section id={styles.transport}>
        <div className={styles.transportDetail}>
          <p>In these cities, we&apos;re focusing on:</p>
        </div>
        <div className={styles.transportImageContainer}>
          <div className={`${styles.largeImage} transportImage`}>
            <img
              loading="lazy"
              src="/images/SustainabilityPage/transport.webp"
              alt="transport"
            />
            <div className={styles.sustainImageContent}>
              {" "}
              <h5>Better transport</h5>
              <p>
                Introducing electric buses and improving public transport to
                reduce pollution.
              </p>
            </div>
          </div>
          <div className={`${styles.smallImage} transportImage`}>
            <img
              loading="lazy"
              src="/images/SustainabilityPage/energy efficiency.webp"
              alt="energy-efficiency"
            />
            <div className={styles.sustainImageContent}>
              {" "}
              <h5>Energy efficiency</h5>
              <p>
                Promoting buildings that use less energy and are better for the
                environment.
              </p>
            </div>
          </div>
          <div className={`${styles.largeImage} transportImage`}>
            <img
              loading="lazy"
              src="/images/SustainabilityPage/water and waste.webp"
              alt="water&waste"
            />
            <div className={styles.sustainImageContent}>
              <h5>
                Water and waste
                <br />
                management
              </h5>
              <p>
                Using smart systems to manage water usage and recycle waste
                effectively.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.sectionDividerSus}></div>

      {/* Eco Industrial */}
      <section id={styles.ecoIndustrial}>
        <div className={styles.industrialHeader}>
          <h5>Eco-Industrial Zones</h5>
          <p>
            We&apos;re developing industrial areas that care for the environment
            while supporting businesses. Some of
            <br />
            these eco-friendly industrial zones include:
          </p>
        </div>
        <div className={styles.imageContainer}>
          <div className={`${styles.smallImage} ecoIndustrialImage`}>
            <img
              loading="lazy"
              src="/images/SustainabilityPage/butiburi.webp"
              alt="butiburi"
            />
            <div className={styles.sustainImageContent}>
              {" "}
              <h5>Butibori industrial area near Nagpur</h5>
              <p>
                One of the largest industrial areas, working to reduce waste and
                use energy efficiently.
              </p>
            </div>
          </div>
          <div className={`${styles.largeImage} ecoIndustrialImage`}>
            <img
              loading="lazy"
              src="/images/SustainabilityPage/Ranjangaon.webp"
              alt="ranjangaon"
            />
            <div className={styles.sustainImageContent}>
              <h5>Ranjangaon industrial area near Pune</h5>
              <p>
                Encouraging industries to adopt renewable energy and green
                practices.
              </p>
            </div>
          </div>
          <div className={`${styles.smallImage} ecoIndustrialImage`}>
            <img
              loading="lazy"
              src="/images/SustainabilityPage/tarapur.webp"
              alt="tarapur"
            />
            <div className={styles.sustainImageContent}>
              <h5>Tarapur industrial estate in Palghar district</h5>
              <p>
                Implementing pollution control measures and proper waste
                management systems.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.ecoSub}>
          These zones aim to balance industrial growth with environmental care
          by promoting clean technologies and sustainable practices.
        </div>
      </section>
      <div className={styles.sectionDividerSus}></div>

      {/* Green Projects */}

      <section id={styles.greenProjects}>
        <div className={styles.projectsHeader}>
          <h5>Green Projects</h5>
          <p>
            Maharashtra is home to many green projects that help us protect the
            environment:
          </p>
        </div>
        <div className={styles.projectContainer}>
          <div className={styles.projectImage}>
            <img
              loading="lazy"
              src="/images/SustainabilityPage/bhimashankar.webp"
              alt="bhimashankar"
            />
            <div className={styles.sustainImageContent}>
              <h5>Bhimashankar Wind Farm (Pune District)</h5>
              <p>
                Generates clean energy from wind, reducing our reliance on
                fossil fuels.
              </p>
            </div>
          </div>
          <div className={styles.projectImage}>
            <img
              loading="lazy"
              src="/images/SustainabilityPage/solar power.webp"
              alt="solar-power"
            />
            <div className={styles.sustainImageContent}>
              <h5>Solar power plants in Ahmednagar and Beed districts</h5>
              <p>
                Harnessing the power of the sun to provide electricity to
                thousands of homes.
              </p>
            </div>
          </div>
          <div className={styles.projectImage}>
            <img
              loading="lazy"
              src="/images/SustainabilityPage/mangrove.webp"
              alt="mangrove"
            />
            <div className={styles.sustainImageContent}>
              <h5>Mangrove Conservation in Mumbai and Coastal areas</h5>
              <p>
                Protecting and restoring mangrove forests, which are vital for
                coastal ecosystems.
              </p>
            </div>
          </div>
          <div className={styles.projectImage}>
            <img
              loading="lazy"
              src="/images/SustainabilityPage/metro.webp"
              alt="mumbai-metro"
            />
            <div className={styles.sustainImageContent}>
              <h5>Mumbai Metro Project</h5>
              <p>
                Offering a clean and efficient public transport option to reduce
                traffic congestion and air pollution.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.ecoSub}>
          These projects show our commitment to using renewable energy,
          conserving nature, and building a sustainable future for everyone.
        </div>
      </section>
      <div className={styles.sectionDividerSus}></div>

      {/* Circular Economy Shaping */}
      <section id={styles.economy}>
        <div className={styles.economyHeader}>
          <h5>
            Circular Economy
            <br />
            Shaping a Sustainable Future
          </h5>
          <p>Driving Maharashtra Towards Zero-Waste and Infinite Growth</p>
        </div>
        <div className={styles.economyImage}>
          <picture>
            <source
              srcSet="images/SustainabilityPage/sus_eco_mobile.webp"
              media="(max-width:480px)"
            />
            <img
              loading="lazy"
              src="/images/SustainabilityPage/economy.webp"
              alt="economy"
            />
          </picture>
        </div>
        <div className={styles.economyBottom}>
          <h5>
            Make. Use. Recycle.
            <br />
            Remake.
          </h5>
          <p>
            By minimizing waste and reusing resources, we aim to reduce
            environmental impact while boosting economic growth. Our focus on
            renewable resources, sustainable industries, and eco-conscious
            practices paves the way for a greener tomorrow.
          </p>
        </div>
      </section>
      <div className={styles.sectionDividerSus}></div>

      {/* Key Initiative */}
      <section id={styles.keyInitiative}>
        <div className={styles.initiativeHeading}>
          <h2>
            <span>Key Initiatives</span>
          </h2>
        </div>
        <div id={styles.keyInitiativeGrid}>
          <div className={styles.initiativeItem}>
            <img
              loading="lazy"
              src="/images/SustainabilityPage/smart_manufacturing.svg"
            />
            <h3>Smart Manufacturing</h3>
            <p>Zero-waste production lines and biopolymer integration.</p>
          </div>
          <div className={styles.initiativeItem}>
            <img
              loading="lazy"
              src="/images/SustainabilityPage/green_urban_spaces.svg"
            />
            <h3>Green Urban Spaces</h3>
            <p>
              Smart cities with integrated recycling and energy-efficient
              infrastructure.
            </p>
          </div>
          <div className={styles.initiativeItem}>
            <img
              loading="lazy"
              src="/images/SustainabilityPage/biodegradable.svg"
            />
            <h3>Biodegradable Plastics</h3>
            <p>
              Leading the adoption of compostable materials under globally
              recognized standards (ASTM D6400, ISO17088).
            </p>
          </div>
        </div>
      </section>
      <div className={styles.sectionDividerSus}></div>

      {/* Circular Economy */}
      <section className={styles.circularSection}>
        <div className={styles.circularHeader}>
          <div className={styles.circularHeading}>
            <h2>
              Circular Economy
              <br />
              in Action
            </h2>
          </div>
        </div>
        <div className={styles.circularContainer}>
          <div className={styles.circularTitleContainer}>
            <div className={styles.innovationDividerTop}></div>
            <h3
              ref={(el) => (circularTabRef.current[0] = el)}
              className={`${styles.circularLocation} clicked`}
              data-location="talegaon"
              onMouseOver={(e) =>
                handleInnovationTabChange(e.currentTarget.dataset.location)
              }
            >
              Talegaon Green Zone
            </h3>
            <div className={styles.innovationDivider}></div>
            <h3
              ref={(el) => (circularTabRef.current[1] = el)}
              className={`${styles.circularLocation}`}
              data-location="navimumbai"
              onMouseOver={(e) =>
                handleInnovationTabChange(e.currentTarget.dataset.location)
              }
            >
              Navi Mumbai&apos;s Biopolymer
            </h3>
            <div className={styles.innovationDivider}></div>
            <h3
              ref={(el) => (circularTabRef.current[2] = el)}
              className={`${styles.circularLocation}`}
              data-location="plants"
              onMouseOver={(e) =>
                handleInnovationTabChange(e.currentTarget.dataset.location)
              }
            >
              Waste-to-Energy Plants
            </h3>
            <div className={styles.innovationDivider}></div>
          </div>
          <div className={styles.circularImageContainer}>
            <div className={styles.imageBox}>
              <img
                loading="lazy"
                ref={(el) => (circularImageRef.current[0] = el)}
                className={`${styles.visible} talegaon`}
                src="/images/SustainabilityPage/Talegaon.webp"
                alt="Talegaon"
              />
              <img
                loading="lazy"
                ref={(el) => (circularImageRef.current[1] = el)}
                className={`${styles.hiddenImage} navimumbai`}
                src="/images/SustainabilityPage/Navi-mumbai.webp"
                alt="Navi Mumbai"
              />
              <img
                loading="lazy"
                ref={(el) => (circularImageRef.current[2] = el)}
                className={`${styles.hiddenImage} plants`}
                src="/images/SustainabilityPage/plants.webp"
                alt="Plants"
              />
            </div>
            <div
              className={`${styles.supportingText} talegaon ${styles.visible}`}
              ref={(el) => (circularSupportingTextRef.current[0] = el)}
            >
              <p>
                {" "}
                India&apos;s first industrial area to operate on 100% recycled
                and reused materials.
              </p>
            </div>
            <div
              className={`${styles.supportingText} navimumbai ${styles.hiddenText}`}
              ref={(el) => (circularSupportingTextRef.current[1] = el)}
            >
              <p>
                A flagship initiative to replace 80% of single-use plastics with
                compostable alternatives by 2026.
              </p>
            </div>
            <div
              className={`${styles.supportingText} plants ${styles.hiddenText}`}
              ref={(el) => (circularSupportingTextRef.current[2] = el)}
            >
              <p>
                Projects in Nagpur and Nashik converting 500,000 tons of waste
                annually into renewable energy.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.circularContainerMobile}>
          <div className={styles.tabsContainer}>
            <div
              className={
                toggleState === 1
                  ? `${styles.tab} ${styles.active}`
                  : styles.tab
              }
              onClick={() => toggleTab(1)}
            >
              Talegaon Green Zone
            </div>
            <div
              className={
                toggleState === 2
                  ? `${styles.tab} ${styles.active}`
                  : styles.tab
              }
              onClick={() => toggleTab(2)}
            >
              Navi Mumbai&apos;s Biopolymer
            </div>
            <div
              className={
                toggleState === 3
                  ? `${styles.tab} ${styles.active}`
                  : styles.tab
              }
              onClick={() => toggleTab(3)}
            >
              Waste-to-Energy Plants
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
              <img
                className={styles.circularImageMobile}
                loading="lazy"
                src="/images/SustainabilityPage/Talegaon.webp"
                alt=""
              />
              <p>
                India&apos;s first industrial area to operate on 100% recycled
                and reused materials.
              </p>
            </div>
            <div
              className={
                toggleState === 2
                  ? `${styles.content} ${styles.activeContent}`
                  : styles.content
              }
            >
              <img
                className={styles.circularImageMobile}
                loading="lazy"
                src="/images/SustainabilityPage/Navi-mumbai.webp"
                alt=""
              />
              <p>
                A flagship initiative to replace 80% of single-use plastics with
                compostable alternatives by 2026.
              </p>
            </div>
            <div
              className={
                toggleState === 3
                  ? `${styles.content} ${styles.activeContent}`
                  : styles.content
              }
            >
              <img
                className={styles.circularImageMobile}
                loading="lazy"
                src="/images/SustainabilityPage/plants.webp"
                alt=""
              />
              <p>
                Projects in Nagpur and Nashik converting 500,000 tons of waste
                annually into renewable energy.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.sectionDividerSus}></div>

      {/* Impact Numbers */}
      <section id={styles.impactNumbers}>
        <div className={styles.impactHeading}>
          <h2>Impact in Numbers</h2>
        </div>
        <div className={styles.impactGradientGlow}></div>
        <div id={styles.impactContainer}>
          <div className={styles.gridItem}>
            <h3 className={styles.gridItemTitle}>
              25<span>%</span>
            </h3>
            <p>
              Reduction in industrial carbon emissions through resource reuse.
            </p>
          </div>

          <div className={styles.gridItem}>
            <h3 className={styles.gridItemTitle}>
              2.5 <span>M</span>
            </h3>
            <p>Tons of waste repurposed through circular economy initiatives</p>
          </div>

          <div className={styles.gridItem}>
            <h3 className={styles.gridItemTitle}>300,000</h3>
            <p>
              Jobs created in Maharashtra&apos;s green and circular industries.
            </p>
          </div>

          <div className={styles.gridItem}>
            <h3 className={styles.gridItemTitle}>
              40<span>%</span>
            </h3>
            <p>
              Growth in renewable energy production, powering industries
              sustainably.
            </p>
          </div>
        </div>
      </section>
      <div className={styles.sectionDividerSus}></div>

      <section className={styles.lastSection}>
        <div>
          <h2 style={{ textAlign: "center" }}>
            Partner with Us.
            <br /> Be Part of the Revolution.{" "}
          </h2>
        </div>
        <div className={styles.contactUs} role="button" aria-label="Contact Us">
          Contact us
        </div>
        <div className={styles.futureGradientGlow1}></div>
        {/* <div className="futureGradientGlow2"></div> */}
      </section>
      <div className={styles.sectionDividerSus}></div>
    </main>
  );
};

export default Sustainability;
