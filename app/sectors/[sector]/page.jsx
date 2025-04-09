"use client";

import { useEffect, useState } from "react";
import styles from "./sectors.module.css";
import { useRef } from "react";
import sectorsData from "./sectorsData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { useParams } from "next/navigation";
import UseScreenSize from "@/app/components/common/UseScreenSize";
import Link from "next/link";
import Image from "next/image";

const Sectors = () => {
  const isMobile = UseScreenSize();
  // console.log(isMobile);
  const tab1Ref = useRef(null);
  const tab2Ref = useRef(null);
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (tab) => {
    setToggleState(tab);
  };

  const tab1ContainerRef = useRef(null);
  const tab2ContainerRef = useRef(null);

  const [activeTab, setActiveTab] = useState("tab1");

  const innovationTabRef = useRef([]);
  const innovationImageRef = useRef([]);
  const innovationSupportingTextRef = useRef([]);

  const [filteredData, setFilteredData] = useState([]);

  const route = useParams();

  const loadData = () => {
    if (!route.sector) return;

    const selectedSector = sectorsData.find(
      (item) => item.pathName === route.sector
    );
    const newSectorData = selectedSector ? [selectedSector] : [];

    setFilteredData(newSectorData);
  };

  useEffect(() => {
    loadData();
  }, [route.sector]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    tab1Ref.current.classList.remove(styles.selected);
    tab2Ref.current.classList.remove(styles.selected);

    if (tab === "tab1") {
      tab1Ref.current.classList.add(styles.selected);
    } else {
      tab2Ref.current.classList.add(styles.selected);
    }
  };

  function handleInnovationTabChange(location) {
    // Update tabs

    innovationTabRef.current.forEach((tab) => {
      if (tab) {
        // Check if tab exists to avoid errors

        const isSelected = tab.dataset.location === location;

        tab.classList.toggle(styles.clicked, isSelected);
      }
    });

    // Update images

    innovationImageRef.current.forEach((img) => {
      if (img) {
        const isSelected = img.classList.contains(location);

        img.classList.toggle(styles.visible, isSelected);

        img.classList.toggle(styles.hiddenImage, !isSelected);
      }
    });

    innovationSupportingTextRef.current.forEach((text) => {
      if (text) {
        const isSelected = text.classList.contains(location);

        text.classList.toggle(styles.visible, isSelected);

        text.classList.toggle(styles.hiddenText, !isSelected);
      }
    });
  }

  const { sector } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [sector]);

  useGSAP(() => {
    if (sector != "" && filteredData.length > 0) {
      gsap
        .timeline()
        .from(`.${styles.heroSection} > div`, {
          clipPath: "inset(0 0 100% 0)",
          opacity: 0,
          duration: 1,
          ease: "expo.out",
        })
        .from(
          `.${styles.heroImage}  img`,
          {
            scale: 1.1,
            duration: 1,
            ease: "expo.out",
          },
          "<"
        )
        .from(`.${styles.heroText} .${styles.heroHeading}`, {
          yPercent: 30,
          opacity: 0,
          duration: 0.65,
          ease: "expo.out",
        })
        .from(
          `.${styles.heroText} .${styles.heroSubheading}`,
          {
            yPercent: 30,
            opacity: 0,
            duration: 0.65,
            ease: "expo.out",
          },
          "<0.2"
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: `.${styles.sectorAtAGlance}`,
            start: "top center",
            end: "bottom center+=400px",
          },
        })
        .from(`.${styles.sectionHead}`, {
          yPercent: 30,
          opacity: 0,
          duration: 0.65,
          ease: "expo.out",
        })
        .to(
          `.${styles.sectorsGridItem}`,
          {
            y: 0,
            opacity: 1,
            duration: 0.35,
            ease: "expo.out",
            stagger: 0.2,
          },
          "<"
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: `.${styles.sectorsIncentives}`,
            start: "top center",
            end: "bottom center",
          },
        })
        .from(
          `.${styles.sectorsIncentivesHeadingContainer} h2`,
          {
            yPercent: 30,
            opacity: 0,
            duration: 0.65,
            ease: "expo.out",
          },
          "<0.2"
        )
        .from(
          `.${styles.sectorsIncentivesHeadingContainer} p`,
          {
            yPercent: 30,
            opacity: 0,
            duration: 0.65,
            ease: "expo.out",
          },
          "<0.2"
        )
        .from(`.${styles.gridItem}`, {
          yPercent: 30,
          opacity: 0,
          duration: 0.65,
          ease: "expo.out",
          stagger: 0.2,
        });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: `.${styles.initiativesOpportunities}`,
            start: "top center",
            end: "bottom center",
          },
        })

        .from(
          `.${styles.initiativesOpportunities} .${styles.sectionDividerInner}`,
          {
            width: "0%",
            duration: 1,
            ease: "power2.inOut",
          }
        )
        .from(
          `.${styles.initiativesOpportunities} .${styles.opportunitiesContainer}`,
          {
            yPercent: 30,
            opacity: 0,
            duration: 1,
            ease: "expo.out",
            stagger: 0.4,
          },
          "<"
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: `.${styles.innovationSection}`,
            start: "top center",
            end: "bottom center",
          },
        })
        .from(`.${styles.innovationSection} .${styles.innovationHeading}`, {
          yPercent: 30,
          opacity: 0,
          duration: 0.65,
          ease: "expo.out",
        })
        .from(
          `.${styles.innovationSection} .${styles.innovationSubheading}`,
          {
            yPercent: 30,
            opacity: 0,
            duration: 0.65,
            ease: "expo.out",
          },
          "<0.2"
        )
        .from(
          `.${styles.innovationSection} .${styles.innovationTitleContainer} .${styles.innovationDividerTop}`,
          {
            width: "0%",
            duration: 0.65,
            ease: "expo.out",
          },
          "<0.2"
        )
        .from(
          `.${styles.innovationSection} .${styles.innovationTitleContainer} .${styles.innovationTitleItem} h3`,
          {
            yPercent: 50,
            opacity: 0,
            duration: 0.65,
            ease: "expo.out",
            stagger: 0.2,
          },
          "<0.2"
        )
        .from(
          `.${styles.innovationSection} .${styles.innovationTitleContainer} .${styles.innovationTitleItem} .${styles.innovationDivider}`,
          {
            width: "0%",
            duration: 1,
            ease: "expo.out",
          },
          "<=0.2"
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: `.${styles.growthDrivers}`,
            start: "top center",
            end: "bottom center",
          },
        })
        .from(`${styles.gridBox}`, {
          yPercent: 30,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
          stagger: 0.2,
        });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: `.${styles.smartManufacturing}`,
            start: "top 30%",
            end: "bottom center",
          },
        })
        .from(
          `.${styles.smartManufacturing} .${styles.manufacturingContainer} .${styles.manufacturingImage}`,
          {
            clipPath: "inset(0 0 100% 0)",
            duration: 1,
            ease: "expo.out",
          }
        )

        .from(
          `.${styles.smartManufacturing} .${styles.manufacturingText} .${styles.manufacturingHeader} h2`,
          {
            yPercent: 30,
            opacity: 0,
            duration: 0.65,
            ease: "expo.out",
          },
          "<0.2"
        )
        .from(
          `.${styles.smartManufacturing} .${styles.manufacturingText} .${styles.manufacturingHeader} p`,
          {
            yPercent: 30,
            opacity: 0,
            duration: 0.65,
            ease: "expo.out",
          }
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: `.${styles.sustainability}`,
            start: "top center",
            end: "bottom center",
          },
        })
        .from(`.${styles.sustainabilityHeading}`, {
          yPercent: 30,
          opacity: 0,
          duration: 0.65,
          ease: "expo.out",
        })
        .from(
          `.${styles.sustainabilitySubheading}`,
          {
            yPercent: 30,
            opacity: 0,
            duration: 0.65,
            ease: "expo.out",
          },
          "<0.2"
        );
    }

    const dividers = gsap.utils.toArray(`.${styles.divider}`);

    dividers.forEach((divider) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: divider,
            start: "top bottom",
            end: "bottom center",
          },
        })
        .from(divider, {
          width: "0%",
          duration: 1,
          ease: "power2.inOut",
        });

      const initialStates = () => {
        gsap.set(`.${styles.sustainabilityItem}:nth-child(2)`, {
          xPercent: -100,
          opacity: 0,
        });
        gsap.set(`.${styles.sustainabilityItem}:nth-child(3)`, {
          xPercent: -200,
          opacity: 0,
        });
      };
      const animateBoxes = () => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: `.${styles.sustainabilityItem}`,
            // markers: true,
            start: "top bottom",
            end: "bottom bottom",
            ease: "expo.out",
            duration: 4,
          },
        });
        tl.to(`.${styles.sustainabilityItem}`, {
          xPercent: 0,
          stagger: 0.2,
          opacity: 1,
        });
        return tl;
      };

      initialStates();
      animateBoxes();

      // Add smooth floating animation for gradient glows in the last section
      gsap.to(`.${styles.futureGradientGlow1}`, {
        xPercent: "random(-250, 250)",
        yPercent: "random(-100,100)",
        duration: 6,
        repeat: -1,
        repeatRefresh: true,
        ease: "sine.inOut",
      });

      gsap.to(`.${styles.futureGradientGlow2}`, {
        xPercent: "random(-250, 250)",
        yPercent: "random(-100, 100)",
        duration: 5,
        repeat: -1,
        repeatRefresh: true,
        ease: "sine.inOut",
        delay: 0.5,
      });
    });
  }, [filteredData]);

  return filteredData.map((data) => (
    <main key={data.id}>
      <section className={styles.heroSection}>
        <div>
          <picture id={styles.heroImage}>
            <source
              srcSet={data?.heroSection?.imageUrl}
              media="(min-width:960px)"
            />
            <source
              srcSet={data?.heroSection?.imageMobileUrl}
              media="(min-width:360px)"
            />
            <img
              loading="lazy"
              src={data?.heroSection?.imageUrl}
              alt={data?.heroSection?.headingTitle}
            />
          </picture>
        </div>
        <div id={styles.heroText}>
          <h2 className={styles.heroHeading}>
            {data?.heroSection?.headingTitle}
          </h2>
          <p className={styles.heroSubheading}>{data?.heroSection?.desc}</p>
        </div>
      </section>
      <div className={styles.divider}></div>

      {/* Glance */}
      <section className={styles.sectorAtAGlance}>
        <div id={styles.sectionHead}>
          <h2>Sector at a Glance</h2>
        </div>

        <div className={styles.glanceGradientGlow}></div>
        <div id={styles.gridContainer}>
          {data?.secondSection?.cardsData.map((cardData) => (
            <div
              style={{ gridArea: `${cardData.gridArea}` }}
              className={styles.sectorsGridItem}
              key={cardData.title}
            >
              <h3>
                {cardData.title}
                <sup>{cardData.titleSuperScript}</sup>
              </h3>
              <p>{cardData.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <div className={styles.divider}></div>

      {/* Fueling */}
      <section className={styles.sectorsIncentives}>
        <div
          className={styles.sectorsIncentivesContentWrapper}
          style={{
            minHeight: "585px",
            aspectRatio: isMobile ? "41/70" : "80/39",
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${
              isMobile
                ? data?.thirdSection?.imageMobile
                : data?.thirdSection?.imageUrl
            })`,
          }}
        >
          <div id={styles.sectorsIncentivesHeadingContainer}>
            <h2 className={styles.sectorsIncentivesHead}>Incentives</h2>
            <p className={styles.sectorsIncentivesSubheading}>
              Fueling Investment
              <br />
              at every turn
            </p>
          </div>
          <div className={styles.innerContainer}>
            <div className={styles.tabContainer}>
              <div className={styles.emptyDiv}></div>
              <div
                ref={tab1Ref}
                className={styles.tab1 + " " + styles.selected}
                onClick={() => handleTabChange("tab1")}
                role="button"
              >
                MSMEs
              </div>
              <div
                ref={tab2Ref}
                className={styles.tab2}
                onClick={() => handleTabChange("tab2")}
                role="button"
              >
                Large Enterprises
              </div>
            </div>

            <div className={styles.tabDataContainer}>
              {activeTab === "tab1" ? (
                <div ref={tab1ContainerRef} className={styles.Tab1}>
                  <div className={styles.gridItemEmpty}></div>
                  {data?.thirdSection?.tabsData?.tab1Data.map((tabData) => (
                    <div className={styles.gridItem} key={tabData.title}>
                      <Image
                        src={tabData.icon}
                        alt={tabData.title}
                        width={100}
                        height={100}
                      />
                      <p className={styles.gridHead}>{tabData.title}</p>
                      <p className={styles.gridText}>{tabData.desc}</p>
                    </div>
                  ))}
                  <div className={styles.gridItemEmptyMobile}></div>
                </div>
              ) : (
                <div ref={tab2ContainerRef} className={styles.Tab2}>
                  <div className={styles.emptyDiv}></div>
                  {data?.thirdSection?.tabsData?.tab2Data.map((tabData) => (
                    <div className={styles.gridItem} key={tabData.title}>
                      <Image
                        src={tabData.icon}
                        alt={tabData.title}
                        width={100}
                        height={100}
                      />
                      <p className={styles.gridHead}>{tabData.title}</p>
                      <p className={styles.gridText}>{tabData.desc}</p>
                    </div>
                  ))}
                  <div className={styles.gridItemEmptyMobile}></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <div className={styles.divider}></div>

      {/* Initiavtives */}
      <section className={styles.initiativesOpportunities}>
        <div id={styles.sectionHead}>
          <h2>New Initiatives & Opportunities</h2>
        </div>
        {data?.fourthSection?.opportunitiesData.map((opportunity) => (
          <div
            key={opportunity.title}
            className={styles.opportunitiesContainer}
          >
            <div className={styles.sectionDividerInner}></div>

            <div className={styles.sectorsContentContainer}>
              <div className={styles.contentHead}>
                <h3>{opportunity.title}</h3>
              </div>
              <div className={styles.sectorsImageContent}>
                <img src={opportunity.imageUrl} alt={opportunity.title} />
                <div className={styles.bodyText}>
                  <p>{opportunity.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
      <div className={styles.divider}></div>

      {/* Innovations */}
      <section className={styles.innovationSection}>
        <div className={styles.innovationHeader}>
          <div className={styles.innovationHeading}>
            <h2>
              Powerhouses
              <br />
              of Innovation
            </h2>
          </div>
          <div className={styles.innovationSubheading}>
            <h3>{data?.fifthSection?.desc}</h3>
          </div>
        </div>
        <div className={styles.innovationContainer}>
          <div className={styles.innovationTitleContainer}>
            <div className={styles.innovationDividerTop}></div>
            {data?.fifthSection?.powerhouseData.map((data, index) => (
              <div key={data.title} className={styles.innovationTitleItem}>
                <h3
                  ref={(el) => (innovationTabRef.current[index] = el)}
                  className={index === 0 ? styles.clicked : ""}
                  data-location={data.dataLocation}
                  onMouseOver={(e) =>
                    handleInnovationTabChange(e.currentTarget.dataset.location)
                  }
                >
                  {data.title}
                </h3>
                <div className={styles.innovationDivider}></div>
              </div>
            ))}
          </div>

          <div className={styles.innovationImageContainer}>
            <div className={styles.imageBox}>
              {data?.fifthSection?.powerhouseData.map((data, index) => (
                <Image
                  key={data.title}
                  width={100}
                  height={100}
                  ref={(el) => (innovationImageRef.current[index] = el)}
                  className={`${data.dataLocation} ${styles.visible}
                  `}
                  src={data.imageUrl}
                  alt={data.title}
                  style={{ objectFit: "cover" }}
                />
              ))}
            </div>
            {data?.fifthSection?.powerhouseData.map((data, index) => (
              <div
                className={`${styles.supportingText} ${data.dataLocation} ${
                  index === 0 ? styles.visible : styles.hiddenText
                }`}
                key={data.title}
                data-location={data.dataLocation}
                ref={(el) => (innovationSupportingTextRef.current[index] = el)}
              >
                <p>{data.imageDescription.descOne}</p>
                <p>{data.imageDescription.descTwo}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.mobileInnovationContainer}>
          <div className={styles.innoTabsContainer}>
            {data?.fifthSection?.powerhouseData.map((data, index) => (
              <div
                key={data.title}
                className={
                  toggleState === index + 1
                    ? `${styles.innoTab} ${styles.active}`
                    : styles.innoTab
                }
                onClick={() => toggleTab(index + 1)}
              >
                {data.title}
              </div>
            ))}
          </div>
          <div className={styles.contentTabs}>
            {data?.fifthSection?.powerhouseData.map((data, index) => (
              <div
                key={data.title}
                className={
                  toggleState === index + 1
                    ? `${styles.content} ${styles.activeContent}`
                    : styles.content
                }
              >
                <img src={data.imageUrl} alt="" />
                <p
                  style={{
                    paddingBottom: `${data.imageDescription.descTwo && "1rem"}`,
                  }}
                >
                  {data.imageDescription.descOne}
                </p>
                <p> {data.imageDescription.descTwo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className={styles.divider}></div>

      {/* Growth Drivers */}
      <section className={styles.growthDrivers}>
        <div
          id={styles.sectionHead}
          className={styles.growthDriversSectionHead}
        >
          <h2>Growth drivers</h2>
        </div>
        <div className={styles.gridDriver}>
          {data?.sixthSection?.growthCardsData.map((cardData, index) => (
            <div className={styles.gridBox} key={cardData.title}>
              <div className={styles.driverTitle}>
                <h3 className={styles.driverHead}>{cardData.title}</h3>
                <p>{(index + 1).toString().padStart(2, "0")}</p>
              </div>
              <p className={styles.driverText}>{cardData.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <div className={styles.divider}></div>

      {/* Smart Manufacturing */}
      <section className={styles.smartManufacturing}>
        <div className={styles.manufacturingContainer}>
          <div className={styles.manufacturingImage}>
            <Image
              width={100}
              height={100}
              quality={100}
              src={data?.seventhSection?.imageUrl}
              alt={data?.seventhSection?.title}
              unoptimized
            />
          </div>
          <div className={styles.manufacturingContent}>
            <div className={styles.manufacturingSpacer}>
              <div
                style={{
                  backgroundColor: `${data?.seventhSection?.glowColor}`,
                }}
                className={styles.manufacturingGradientGlow}
              ></div>
            </div>
            <div className={styles.manufacturingText}>
              <div className={styles.manufacturingHeader}>
                <h2>{data?.seventhSection?.title}</h2>
                <p>{data?.seventhSection?.desc}</p>
              </div>
              <div className={styles.manufacturingGrid}>
                {data?.seventhSection?.gridData.map((item) => (
                  <div className={styles.manufacturingText} key={item.title}>
                    <div className={styles.manufacturingDivider}></div>
                    <p className={styles.driverText}>
                      <span>{item.spanContent}</span> {item.title}
                    </p>
                  </div>
                ))}

                <div className={styles.manufacturingEmpty}></div>
              </div>
              <Link href={"/aismartmanufacturing"} className={styles.learnMore}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.divider}></div>

      {/* Sustainability */}
      <section className={styles.sustainability}>
        <div className={styles.sustainabilityHeader}>
          <div className={styles.sustainabilityHeading}>
            <h2>
              <span>Sustainability</span>
              <br />
              Initiatives
            </h2>
          </div>
          <div className={styles.sustainabilitySubheading}>
            <h3>{data?.eightSection?.desc}</h3>
          </div>
        </div>
        <div id={styles.sustainabilityGrid}>
          {data?.eightSection?.cardsData.map((cardData) => (
            <div className={styles.sustainabilityItem} key={cardData.desc}>
              <h3>
                {cardData.value}
                <sup>{cardData.valueSuperScript}</sup>
              </h3>
              <p>{cardData.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <div className={styles.divider}></div>

      {/* Brands */}
      <section className={styles.branding}>
        <div className={styles.brandingHeading}>
          <h2>
            The World&apos;s Biggest
            <br />
            <span>Brands</span> Choose
            <br />
            Maharashtra
          </h2>
        </div>
        <div className={styles.brandingGrid}>
          {data?.ninthSection?.brandsData.map((brand) => (
            <div className={styles.brandingText} key={brand.title}>
              <img loading="lazy" src={brand.icon} alt={brand.title} />
              <div className={styles.textWrapper}>
                <p className={styles.brandingText}>{brand.title}</p>
                <div className={styles.brandingDivider}></div>
              </div>
            </div>
          ))}

          {/* <div className='branding-emptyItem'></div> */}
        </div>
      </section>
      <div className={styles.divider}></div>

      {/* Future */}
      <section className={styles.lastSection}>
        <div className={styles.contactUsContainer}>
          <h2 className={styles.sectorContact}>
            Ready to invest in the future{" "}
          </h2>
        </div>
        <div
          className={styles.contactUs}
          role="button"
          aria-label="Contact Us"
          onClick={() => (window.location.href = "/contact")}
          style={{ cursor: "pointer" }}
        >
          Contact us
        </div>
        <div
          style={{ backgroundColor: `${data?.tenthSection?.gradientGlow1}` }}
          className={styles.futureGradientGlow1}
        ></div>
        <div
          style={{ backgroundColor: `${data?.tenthSection?.gradientGlow2}` }}
          className={styles.futureGradientGlow2}
        ></div>
      </section>
      <div className={styles.divider}></div>
    </main>
  ));
};

export default Sectors;
