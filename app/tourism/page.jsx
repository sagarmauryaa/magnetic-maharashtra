"use client";

import { useRef, useState } from "react";
import styles from "./tourism.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import Image from "next/image";

const seasonDetails = {
  season1: "(MARCH TO JUNE)",
  season2: "(JULY TO SEPTEMBER)",
  season3: "(OCTOBER TO FEBRUARY)",
};

const experienceTourism = [
  {
    name: "Chronicles",
    img: "/images/TourismPage/Chronicles-mobile.webp",
  },
  {
    name: "Heritage",
    img: "/images/TourismPage/forts-mobile.webp",
  },
  {
    name: "Festivals",
    img: "/images/TourismPage/Festivals-mobile.webp",
  },
  {
    name: "Forts",
    img: "/images/TourismPage/Forts.png",
  },

  {
    name: "Art",
    img: "/images/TourismPage/Art-mobile.webp",
  },
  {
    name: "Folk Dance",
    img: "/images/TourismPage/folk-mobile.webp",
  },
  {
    name: "Food",
    img: "/images/TourismPage/food-mobile.webp",
  },
  {
    name: "Beaches",
    img: "/images/TourismPage/Beaches-mobile.webp",
  },
  {
    name: "Landscapes",
    img: "/images/TourismPage/Landscapes-mobile.webp",
  },
  {
    name: "Hill Stations",
    img: "/images/TourismPage/Hill-Stations-mobile.webp",
  },
  {
    name: "Wildlife",
    img: "/images/TourismPage/Wildlife-mobile.webp",
  },
  {
    name: "Sports",
    img: "/images/TourismPage/Sports-mobile.webp",
  },
];

function Tourism() {
  const experienceImageRef = useRef([]);
  const experienceTitleRef = useRef([]);

  const exploreTab1Ref = useRef(null);
  const exploreTab2Ref = useRef(null);
  const exploreTab3Ref = useRef(null);

  const [exploreActiveTab, setExploreActiveTab] = useState("tab1");

  const seasonTimeRef = useRef(null);
  const summerTabRef = useRef(null);
  const monsoonTabRef = useRef(null);
  const winterTabRef = useRef(null);

  const [seasonActiveTab, setSeasonActiveTab] = useState("season1");

  const handleTabChange = (tab) => {
    setExploreActiveTab(tab);
    exploreTab1Ref.current.classList.remove(styles.active);
    exploreTab2Ref.current.classList.remove(styles.active);
    exploreTab3Ref.current.classList.remove(styles.active);

    if (tab === "tab1") {
      exploreTab1Ref.current.classList.add(styles.active);
    }
    if (tab === "tab2") {
      exploreTab2Ref.current.classList.add(styles.active);
    }
    if (tab === "tab3") {
      exploreTab3Ref.current.classList.add(styles.active);
    }
  };

  const handleSeasonTabChange = (tab) => {
    setSeasonActiveTab(tab);
    summerTabRef.current.classList.remove(styles.active);
    monsoonTabRef.current.classList.remove(styles.active);
    winterTabRef.current.classList.remove(styles.active);

    if (tab === "season1") {
      summerTabRef.current.classList.add(styles.active);
      setTimeout(() => {
        seasonTimeRef.current.textContent = seasonDetails.season1;
        seasonTimeRef.current.classList.add(styles.active);
      }, 300);
    }
    if (tab === "season2") {
      monsoonTabRef.current.classList.add(styles.active);
      setTimeout(() => {
        seasonTimeRef.current.textContent = seasonDetails.season2;
        seasonTimeRef.current.style.opacity = "1";
        seasonTimeRef.current.classList.add(styles.active);
      }, 300);
    }
    if (tab === "season3") {
      winterTabRef.current.classList.add(styles.active);
      setTimeout(() => {
        seasonTimeRef.current.textContent = seasonDetails.season3;
        seasonTimeRef.current.style.opacity = "1";
        seasonTimeRef.current.classList.add(styles.active);
      }, 300);
    }
  };

  function handleInnovationTabChange(experience) {
    // Update tabs
    experienceTitleRef.current.forEach((tab) => {
      if (tab) {
        const isSelected = tab.dataset.location === experience;
        tab.classList.toggle(styles.clicked, isSelected);
      }
    });

    // Update images
    experienceImageRef.current.forEach((img) => {
      if (img) {
        // First remove visible class from all images

        const isSelected = img.dataset.location === experience;

        img.classList.remove(styles.visible);
        // Then add visible class only to the selected image
        if (isSelected) {
          img.classList.add(styles.visible);
          // Also ensure the hiddenImage class is present
          img.classList.add(styles.hiddenImage);
        }
      }
    });
  }

  useGSAP(() => {
    // gsap
    //   .timeline()
    //   .from(`#${styles.tourismHeroSection} img`, {
    //     clipPath: "inset(0 0 100% 0)",
    //     opacity: 0,
    //     duration: 1,
    //     ease: "power2.inOut",
    //   })
    //   .from(
    //     `.${styles.heroHeading}`,
    //     {
    //       yPercent: 30,
    //       opacity: 0,
    //       duration: 1,
    //       ease: "power2.inOut",
    //     },
    //     "<=0.2"
    //   )
    //   .from(
    //     `.${styles.tTextBlock}`,
    //     {
    //       yPercent: 30,
    //       opacity: 0,
    //       duration: 1,
    //       ease: "power2.inOut",
    //     },
    //     "<=0.2"
    //   );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: `#${styles.tourismExperiences}`,
          start: "top center",
          end: "bottom top",
        },
      })
      .from(`.${styles.sectionHeading}`, {
        yPercent: 30,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      })
      .from(
        `.${styles.tourismImageBox}`,
        {
          yPercent: 30,
          duration: 0.65,
          ease: "power2.inOut",
        },
        "<"
      )
      .from(
        `.${styles.tourismTitleContainer} h5`,
        {
          yPercent: 50,
          opacity: 0,
          duration: 0.65,
          ease: "power2.inOut",
          stagger: 0.1,
        },
        "<=0.4"
      )
      .from(
        `.${styles.experienceDivider}`,
        {
          width: 0,
          duration: 0.65,
          ease: "power2.inOut",
          stagger: 0.1,
        },
        "<=0.1"
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: `#${styles.exploreByInterest}`,
          start: "top center",
          end: "bottom center",
        },
      })
      .from([`.${styles.exploreHead}`, `.${styles.exploreSubheading}`], {
        yPercent: 30,
        opacity: 0,
        duration: 0.65,
        ease: "power2.inOut",
        stagger: 0.2,
      })
      .from(
        `.${styles.seasonsTabDivider}`,
        {
          width: 0,
          transformOrigin: "left center",
          duration: 0.65,
          ease: "power2.inOut",
        },
        "<=0.2"
      )
      .from(
        `.${styles.exploreTabContainer} > div`,
        {
          yPercent: 30,
          opacity: 0,
          duration: 0.65,
          ease: "power2.inOut",
          stagger: 0.2,
          onComplete: () => {
            exploreTab1Ref.current.classList.add(styles.active);
          },
        },
        "<=0.3"
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: `#${styles.seasons}`,
          start: "top center",
          end: "bottom center",
        },
      })
      .from(`.${styles.headingContainer}`, {
        yPercent: 30,
        opacity: 0,
        duration: 0.65,
        ease: "power2.inOut",
      })
      .from(
        `.${styles.exploreInnerContainer} .${styles.seasonsTabDivider}`,
        {
          width: 0,
          transformOrigin: "left center",
          duration: 0.65,
          ease: "power2.inOut",
        },
        "<=0.2"
      )
      .from(
        `.${styles.seasonContainer} > div`,
        {
          yPercent: 30,
          opacity: 0,
          duration: 0.65,
          ease: "power2.inOut",
          stagger: 0.2,
          onComplete: () => {
            summerTabRef.current.classList.add(styles.active);
          },
        },
        "<=0.2"
      )
      .from(
        seasonTimeRef.current,
        {
          yPercent: 30,
          opacity: 0,
          duration: 0.65,
          ease: "power2.inOut",
        },
        "<=0.3"
      );
  });

  useGSAP(() => {
    gsap.from(`.${styles.exploreGridItem}`, {
      yPercent: 30,
      opacity: 0,
      duration: 0.65,
      stagger: 0.2,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: `.${styles.exploreDataContainer}`,
        start: "top center",
        end: "bottom center",
      },
    });
  }, [exploreActiveTab]);

  useGSAP(() => {
    gsap.from(`.${styles.seasonsInnerSummer}`, {
      yPercent: 30,
      opacity: 0,
      duration: 0.65,
      stagger: 0.2,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: [
          `.${styles.summerContainer}`,
          `.${styles.monsoonContainer}`,
          `.${styles.winterContainer}`,
        ],
        start: "top center",
        end: "bottom center",
      },
    });
  }, [seasonActiveTab]);



  return (
    <main>
      <section id={styles.tourismHeroSection} observer-animation-repeat="true" observer-animation-classes="animateAllLinesIn, animateImagesIn" observer-animation="cssClass">
        <div className={styles.tourismHeroSectionImg + ' anim-imageWrapper'}>

          <Image
            src="/images/TourismPage/Hero-image.png"
            alt="Hero Image"
            width={100}
            height={100}
            className="anim-image"
            quality={100}
            unoptimized={true}
          />
        </div>
        <div className={styles.tFlexContainer}>
          <div className={styles.heroHeading} observer-animation="title">Experience</div>
          <div className={styles.tTextBlock} observer-animation="fadeInUpPara">
            Beyond the Map, <br />
            into the Soul
          </div>
        </div>
        <span className="anim-line -bottom" observer-animation="cssClass" observer-animation-classes="animateSingleLineIn" transform-origin="top left"></span>
      </section> 
      <section id={styles.tourismExperiences} observer-animation-repeat="true" observer-animation-classes="animateAllLinesIn, animateImagesIn" observer-animation="cssClass">
        <span className="anim-line -bottom" observer-animation="cssClass" observer-animation-classes="animateSingleLineIn" transform-origin="top left"></span>
        <div className={styles.tContentContainer}>
          <div className={styles.sectionHeading}>
            <h4 observer-animation="fadeInUpPara">
              Experiences beyond <br />
              expectations
            </h4>
          </div>
          <div className={styles.tourismExperienceContainer}>
            <div className={styles.circularImageContainer}>
              <div className={styles.tourismImageBox}>
                <Image
                  ref={(el) => (experienceImageRef.current[0] = el)}
                  className={`${styles.hiddenImage} ${styles.visible} ${styles.img0} chronicles`}
                  src="/images/TourismPage/Chronicles.webp"
                  alt="Chronicles"
                  data-location="chronicles"
                  width={100}
                  height={100}
                  quality={100}
                  unoptimized={true}
                />
                <Image
                  ref={(el) => (experienceImageRef.current[1] = el)}
                  className={`${styles.hiddenImage} ${styles.img1} heritage`}
                  src="/images/TourismPage/Heritage.png"
                  alt="Heritage"
                  data-location="heritage"
                  width={100}
                  height={100}
                  quality={100}
                  unoptimized={true}
                />
                <Image
                  ref={(el) => (experienceImageRef.current[2] = el)}
                  className={`${styles.hiddenImage} ${styles.img2} festivals`}
                  src="/images/TourismPage/Festivals.webp"
                  alt="Festivals"
                  data-location="festivals"
                  width={100}
                  height={100}
                  quality={100}
                  unoptimized={true}
                />
                <Image
                  ref={(el) => (experienceImageRef.current[3] = el)}
                  className={`${styles.hiddenImage} ${styles.img3} forts`}
                  src="/images/TourismPage/forts.webp"
                  alt="Forts"
                  data-location="forts"
                  width={100}
                  height={100}
                  quality={100}
                  unoptimized={true}
                />
                <Image
                  ref={(el) => (experienceImageRef.current[4] = el)}
                  className={`${styles.hiddenImage} ${styles.img4} art`}
                  src="/images/TourismPage/Art.webp"
                  alt="Art"
                  data-location="art"
                  width={100}
                  height={100}
                  quality={100}
                  unoptimized={true}
                />
                <Image
                  ref={(el) => (experienceImageRef.current[5] = el)}
                  className={`${styles.hiddenImage} ${styles.img5} folk-dance`}
                  src="/images/TourismPage/folk_dance.webp"
                  alt="Folk-dance"
                  data-location="folk-dance"
                  width={100}
                  height={100}
                  quality={100}
                  unoptimized={true}
                />
                <Image
                  ref={(el) => (experienceImageRef.current[6] = el)}
                  className={`${styles.hiddenImage} ${styles.img6} food`}
                  src="/images/TourismPage/Food.webp"
                  alt="Food"
                  data-location="food"
                  width={100}
                  height={100}
                  quality={100}
                  unoptimized={true}
                />
                <Image
                  ref={(el) => (experienceImageRef.current[7] = el)}
                  className={`${styles.hiddenImage} ${styles.img7} beaches`}
                  src="/images/TourismPage/Beaches.webp"
                  alt="Beaches"
                  data-location="beaches"
                  width={100}
                  height={100}
                  quality={100}
                  unoptimized={true}
                />
                <Image
                  ref={(el) => (experienceImageRef.current[8] = el)}
                  className={`${styles.hiddenImage} ${styles.img8} landscapes`}
                  src="/images/TourismPage/hill_stations.webp"
                  alt="Hill Stations"
                  data-location="landscapes"
                  width={100}
                  height={100}
                  quality={100}
                  unoptimized={true}
                />
                <Image
                  ref={(el) => (experienceImageRef.current[9] = el)}
                  className={`${styles.hiddenImage} ${styles.img9} hill-stations`}
                  src="/images/TourismPage/Landscapes.webp"
                  alt="Landscapes"
                  data-location="hill-stations"
                  width={100}
                  height={100}
                  quality={100}
                  unoptimized={true}
                />
                <Image
                  ref={(el) => (experienceImageRef.current[10] = el)}
                  className={`${styles.hiddenImage} ${styles.img10} wildlife`}
                  src="/images/TourismPage/Wildlife.webp"
                  alt="Wildlife"
                  data-location="wildlife"
                  width={100}
                  height={100}
                  quality={100}
                  unoptimized={true}
                />
                <Image
                  ref={(el) => (experienceImageRef.current[11] = el)}
                  className={`${styles.hiddenImage} ${styles.img11} sports`}
                  src="/images/TourismPage/Sports.webp"
                  alt="Sports"
                  data-location="sports"
                  width={100}
                  height={100}
                  quality={100}
                  unoptimized={true}
                />
              </div>
            </div>
            <div className={styles.tourismTitleContainer} observer-animation="fadeInUpPara">
              <h5
                ref={(el) => (experienceTitleRef.current[0] = el)}
                className={styles.clicked}
                data-location="chronicles"
                onMouseOver={(e) =>
                  handleInnovationTabChange(e.currentTarget.dataset.location)
                }
              >
                Chronicles
                <span className="anim-line -top" observer-animation="cssClass" observer-animation-classes="animateSingleLineIn" transform-origin="top left"></span>
                <span className="anim-line -bottom" observer-animation="cssClass" observer-animation-classes="animateSingleLineIn" transform-origin="top left"></span>
              </h5>
              {/* <div className={styles.experienceDivider}></div> */}
              <h5
                ref={(el) => (experienceTitleRef.current[1] = el)}
                data-location="heritage"
                onMouseOver={(e) =>
                  handleInnovationTabChange(e.currentTarget.dataset.location)
                }
              >
                Heritage
                <span className="anim-line -bottom" observer-animation="cssClass" observer-animation-classes="animateSingleLineIn" transform-origin="top left"></span>
              </h5>
              {/* <div className={styles.experienceDivider}></div> */}
              <h5
                ref={(el) => (experienceTitleRef.current[2] = el)}
                data-location="festivals"
                onMouseOver={(e) =>
                  handleInnovationTabChange(e.currentTarget.dataset.location)
                }
              >
                Festivals
                <span className="anim-line -bottom" observer-animation="cssClass" observer-animation-classes="animateSingleLineIn" transform-origin="top left"></span>
              </h5>
              {/* <div className={styles.experienceDivider}></div> */}
              <h5
                ref={(el) => (experienceTitleRef.current[3] = el)}
                data-location="forts"
                onMouseOver={(e) =>
                  handleInnovationTabChange(e.currentTarget.dataset.location)
                }
              >
                Forts
                <span className="anim-line -bottom" observer-animation="cssClass" observer-animation-classes="animateSingleLineIn" transform-origin="top left"></span>
              </h5>
              {/* <div className={styles.experienceDivider}></div> */}
              <h5
                ref={(el) => (experienceTitleRef.current[4] = el)}
                data-location="art"
                onMouseOver={(e) =>
                  handleInnovationTabChange(e.currentTarget.dataset.location)
                }
              >
                Art
                <span className="anim-line -bottom" observer-animation="cssClass" observer-animation-classes="animateSingleLineIn" transform-origin="top left"></span>
              </h5>
              {/* <div className={styles.experienceDivider}></div> */}
              <h5
                ref={(el) => (experienceTitleRef.current[5] = el)}
                data-location="folk-dance"
                onMouseOver={(e) =>
                  handleInnovationTabChange(e.currentTarget.dataset.location)
                }
              >
                Folk-dance
                <span className="anim-line -bottom" observer-animation="cssClass" observer-animation-classes="animateSingleLineIn" transform-origin="top left"></span>
              </h5>
              {/* <div className={styles.experienceDivider}></div> */}
              <h5
                ref={(el) => (experienceTitleRef.current[6] = el)}
                data-location="food"
                onMouseOver={(e) =>
                  handleInnovationTabChange(e.currentTarget.dataset.location)
                }
              >
                Food
                <span className="anim-line -bottom" observer-animation="cssClass" observer-animation-classes="animateSingleLineIn" transform-origin="top left"></span>
              </h5>
              {/* <div className={styles.experienceDivider}></div> */}
              <h5
                ref={(el) => (experienceTitleRef.current[7] = el)}
                data-location="beaches"
                onMouseOver={(e) =>
                  handleInnovationTabChange(e.currentTarget.dataset.location)
                }
              >
                Beaches
                <span className="anim-line -bottom" observer-animation="cssClass" observer-animation-classes="animateSingleLineIn" transform-origin="top left"></span>
              </h5>
              {/* <div className={styles.experienceDivider}></div> */}
              <h5
                ref={(el) => (experienceTitleRef.current[8] = el)}
                data-location="landscapes"
                onMouseOver={(e) =>
                  handleInnovationTabChange(e.currentTarget.dataset.location)
                }
              >
                Landscapes
                <span className="anim-line -bottom" observer-animation="cssClass" observer-animation-classes="animateSingleLineIn" transform-origin="top left"></span>
              </h5>
              {/* <div className={styles.experienceDivider}></div> */}
              <h5
                ref={(el) => (experienceTitleRef.current[9] = el)}
                data-location="hill-stations"
                onMouseOver={(e) =>
                  handleInnovationTabChange(e.currentTarget.dataset.location)
                }
              >
                Hill Stations
                <span className="anim-line -bottom" observer-animation="cssClass" observer-animation-classes="animateSingleLineIn" transform-origin="top left"></span>
              </h5>
              {/* <div className={styles.experienceDivider}></div> */}
              <h5
                ref={(el) => (experienceTitleRef.current[10] = el)}
                data-location="wildlife"
                onMouseOver={(e) =>
                  handleInnovationTabChange(e.currentTarget.dataset.location)
                }
              >
                Wildlife
                <span className="anim-line -bottom" observer-animation="cssClass" observer-animation-classes="animateSingleLineIn" transform-origin="top left"></span>
              </h5>
              {/* <div className={styles.experienceDivider}></div> */}
              <h5
                ref={(el) => (experienceTitleRef.current[11] = el)}
                data-location="sports"
                onMouseOver={(e) =>
                  handleInnovationTabChange(e.currentTarget.dataset.location)
                }
              >
                Sports
                <span className="anim-line -bottom" observer-animation="cssClass" observer-animation-classes="animateSingleLineIn" transform-origin="top left"></span>
              </h5>
            </div>
          </div>
          <div className={styles.tourismExperienceContainerMobile}>
            {experienceTourism.map((item, index) => {
              return (
                <div
                  className={styles.tourismExperienceContainerMobileItem}
                  key={index}
                >
                  <Image
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized={true}
                  />
                  {item.name}
                </div>
              );
            })}
          </div>
        </div>
      </section> 
      <section id={styles.exploreByInterest} observer-animation-repeat="true" observer-animation-classes="animateAllLinesIn, animateImagesIn" observer-animation="cssClass">
        <div className={styles.exploreContainer}>
          <h2 className={styles.exploreHead} observer-animation="title">
            Explore by <br />
            Interest
          </h2>
          <p className={styles.exploreSubheading} observer-animation="fadeInUpPara">
            Explore Maharashtra by your interest, <br />
            whether it&apos;s the thrill of Adventure <br />
            Tourism with trekking in the Sahyadri <br />
            mountains, or Cultural Tourism through <br />
            the vibrant festivals and historic forts. For <br />
            those seeking peace, immerse yourself in <br />
            Spiritual Tourism, visiting sacred sites like <br />
            Shirdi, Trimbakeshwar, and the ancient <br />
            temples of Nashik.
          </p>
        </div>
        <div className={styles.exploreInnerContainer}>
          <div className={styles.exploreTabContainer} observer-animation="fadeInUpPara">
            <div
              ref={exploreTab1Ref}
              className={styles.tab1}
              role="button"
              onClick={() => handleTabChange("tab1")}
            >
              ADVENTURE
            </div>
            <div
              ref={exploreTab2Ref}
              className={styles.tab2}
              role="button"
              onClick={() => handleTabChange("tab2")}
            >
              CULTURE
            </div>
            <div
              ref={exploreTab3Ref}
              className={styles.tab3}
              role="button"
              onClick={() => handleTabChange("tab3")}
            >
              SPIRITUAL
            </div>
          </div>
          <div className={styles.seasonsTabDivider}></div>
          <div className={styles.exploreDataContainer} observer-animation="fadeInUpPara">
            {exploreActiveTab === "tab1" ? (
              <div className={styles.Tab1}>
                <div className={styles.exploreGridItem}>
                  <Image
                    src="/images/TourismPage/trekking_in_the_sahyadris.webp"
                    alt="Trekking"
                    loading="lazy"
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized
                  />
                  <h5 className={styles.gridHead}>Trekking in the Sahyadris</h5>
                  <p className={styles.gridText}>
                    Explore the rugged terrain of the Sahyadris with treks that
                    cater to all levels of expertise. Whether it&apos;s the
                    historic Rajmachi Fort trek or the challenging ascents of
                    Kalsubai, the highest peak in Maharashtra, each trail offers
                    breathtaking views and a chance to connect with nature.
                  </p>
                </div>
                <div className={styles.exploreGridItem}>
                  <Image
                    src="/images/TourismPage/rock_climbing_and_rappelling.webp"
                    alt="Rock-Rappeling"
                    loading="lazy"
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized
                  />
                  <h5 className={styles.gridHead}>
                    Rock Climbing and Rappelling
                  </h5>
                  <p className={styles.gridText}>
                    Maharashtra&apos;s diverse landscape offers numerous rock
                    climbing and rappelling spots, particularly in the
                    Sahyadris. Popular locations like Duke&apos;s Nose in
                    Lonavala and Harishchandragad provide thrilling climbs and
                    are perfect for adrenaline junkies looking to test their
                    limits.
                  </p>
                </div>
                <div className={styles.exploreGridItem}>
                  <Image
                    src="/images/TourismPage/water_sports.webp"
                    alt="Water-Sports"
                    loading="lazy"
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized
                  />
                  <h5 className={styles.gridHead}>Water Sports</h5>
                  <p className={styles.gridText}>
                    From kayaking in the serene backwaters of Kolad to jet
                    skiing and banana boat rides on the beaches of Alibaug,
                    Maharashtra offers water sports enthusiasts a variety of
                    activities to beat the heat and add some excitement to their
                    beach visits.
                  </p>
                </div>
                <div className={styles.exploreGridItem}>
                  <Image
                    src="/images/TourismPage/paragliding.webp"
                    alt="Paragliding"
                    loading="lazy"
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized
                  />
                  <h5 className={styles.gridHead}>Paragliding</h5>
                  <p className={styles.gridText}>
                    Soar high above the landscape and enjoy panoramic views of
                    Maharashtra&apos;s stunning scenery. Destinations like
                    Kamshet are renowned for paragliding, offering experiences
                    that combine adventure with unforgettable views.
                  </p>
                </div>
                <div className={styles.exploreGridItem}>
                  <Image
                    src="/images/TourismPage/camping.webp"
                    alt="Camping"
                    loading="lazy"
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized
                  />
                  <h5 className={styles.gridHead}>Camping</h5>
                  <p className={styles.gridText}>
                    Immerse yourself in the beauty of Maharashtra&apos;s
                    countryside with a camping trip. Whether it&apos;s setting
                    up a tent beside the Pawna Lake or in the midst of the thick
                    forests of Bhandardara, camping is a perfect way to unwind
                    and reconnect with nature.
                  </p>
                </div>
                <div className={styles.exploreGridItem}>
                  <Image
                    src="/images/TourismPage/spelunking.webp"
                    alt="Spelunking"
                    loading="lazy"
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized
                  />
                  <h5 className={styles.gridHead}>Spelunking</h5>
                  <p className={styles.gridText}>
                    For the adventurous at heart, spelunking or cave exploration
                    in Maharashtra offers a unique underground experience. The
                    caves of Ajanta and Ellora are not only rich in history but
                    also provide a glimpse into the geological and cultural
                    tapestry of the region.
                  </p>
                </div>
              </div>
            ) : null}

            {exploreActiveTab === "tab2" ? (
              <div className={styles.Tab2}>
                <div className={styles.exploreGridItem}>
                  <Image
                    src="/images/TourismPage/forts.webp"
                    alt="Heritage-Forts"
                    loading="lazy"
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized
                  />
                  <h5 className={styles.gridHead}>Heritage Forts</h5>
                  <p className={styles.gridText}>
                    Maharashtra is dotted with over 350 forts, each narrating
                    tales of valor and history. Explore the majestic Raigad, the
                    capital of Chhatrapati Shivaji Maharaj&apos;s kingdom, or
                    visit the sea fort of Murud-Janjira, which remained
                    undefeated through history.
                  </p>
                </div>
                <div className={styles.exploreGridItem}>
                  <Image
                    src="/images/TourismPage/folk_dance.webp"
                    alt="Folk-Arts"
                    loading="lazy"
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized
                  />
                  <h5 className={styles.gridHead}>Folk Arts</h5>
                  <p className={styles.gridText}>
                    Maharashtra&apos;s folk arts are a vibrant expression of its
                    cultural identity. From the energetic Lezim dances to the
                    storytelling traditions of Tamasha, these arts are deeply
                    rooted in the social fabric of the state and continue to
                    enchant audiences.
                  </p>
                </div>
                <div className={styles.exploreGridItem}>
                  <Image
                    src="/images/TourismPage/festivals_fairs.webp"
                    alt="Festivals&Fairs"
                    loading="lazy"
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized
                  />
                  <h5 className={styles.gridHead}>Festivals & Fairs</h5>
                  <p className={styles.gridText}>
                    Festivals like Ganesh Chaturthi see the streets come alive
                    with music and decorations, while the Kumbh Mela in Nashik
                    draws millions of pilgrims. Fairs such as the Warli Festival
                    showcase tribal art and culture, offering a glimpse into the
                    rich traditions of the region.
                  </p>
                </div>
                <div className={styles.exploreGridItem}>
                  <Image
                    src="/images/TourismPage/caves_sculptures.webp"
                    alt="Caves & Sculptures"
                    loading="lazy"
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized
                  />
                  <h5 className={styles.gridHead}>Caves & Sculptures</h5>
                  <p className={styles.gridText}>
                    Visit the ancient rock-cut caves of Ajanta and Ellora,
                    UNESCO World Heritage sites that feature stunning murals and
                    sculptures that date back to the 2nd century BCE. These
                    caves represent the epitome of Indian art and architectural
                    prowess.
                  </p>
                </div>
                <div className={styles.exploreGridItem}>
                  <Image
                    src="/images/TourismPage/museums.webp"
                    alt="Museums"
                    loading="lazy"
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized
                  />
                  <h5 className={styles.gridHead}>Museums</h5>
                  <p className={styles.gridText}>
                    Dive into Maharashtra&apos;s history at the Chhatrapati
                    Shivaji Maharaj Vastu Sangrahalaya in Mumbai or explore the
                    Raja Dinkar Kelkar Museum in Pune. These museums house rare
                    artifacts and exhibitions that tell the story of
                    Maharashtra&apos;s heritage and evolution.
                  </p>
                </div>
                <div className={styles.exploreGridItem}>
                  <Image
                    src="/images/TourismPage/traditional_crafts.webp"
                    alt="Traditional-Crafts"
                    loading="lazy"
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized
                  />
                  <h5 className={styles.gridHead}>Traditional Crafts</h5>
                  <p className={styles.gridText}>
                    Maharashtra is renowned for its handicrafts like Paithani
                    sarees, known for their vibrant colors and intricate
                    designs, and Kolhapuri chappals, celebrated for their
                    durability and craftsmanship. These traditional crafts
                    reflect the skilled artistry of local artisans.
                  </p>
                </div>
              </div>
            ) : null}

            {exploreActiveTab === "tab3" ? (
              <div className={styles.Tab3}>
                <div className={styles.exploreGridItem}>
                  <Image
                    src="/images/TourismPage/ashtavinayak_temples.webp"
                    alt="Ashtavinayak Temples"
                    loading="lazy"
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized
                  />
                  <h5 className={styles.gridHead}>Ashtavinayak Temples</h5>
                  <p className={styles.gridText}>
                    Embark on a sacred pilgrimage to the Ashtavinayak Temples, a
                    revered group of eight Ganesh temples in Maharashtra, each
                    signifying a different aspect of the elephant-headed god.
                    This spiritual journey not only offers a chance to seek
                    divine blessings but also to witness the unique
                    architectural styles of each temple.
                  </p>
                </div>
                <div className={styles.exploreGridItem}>
                  <Image
                    src="/images/TourismPage/mahalakshmi_temple.webp"
                    alt="Mahalakshmi Temple"
                    loading="lazy"
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized
                  />
                  <h5 className={styles.gridHead}>Mahalakshmi Temple</h5>
                  <p className={styles.gridText}>
                    Visit the Mahalakshmi Temple in Kolhapur, one of the Shakti
                    Peethas listed in various Puranas of Hinduism. Dedicated to
                    the goddess Mahalakshmi, the temple is known for its
                    beautiful architecture and the legendary belief that the
                    goddess presence increases the spiritual energy of devotees.
                  </p>
                </div>
                <div className={styles.exploreGridItem}>
                  <Image
                    src="/images/TourismPage/jyotirlingas.webp"
                    alt="Jyotirlingas"
                    loading="lazy"
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized
                  />
                  <h5 className={styles.gridHead}>Jyotirlingas</h5>
                  <p className={styles.gridText}>
                    Explore the sacred sites of the Jyotirlingas in Maharashtra,
                    which include the revered temples of Trimbakeshwar in Nashik
                    and Bhimashankar in Pune. These temples are among the twelve
                    traditional &apos;self-born&apos; lingas of Shiva, providing
                    devotees with a deeply spiritual experience.
                  </p>
                </div>
                <div className={styles.exploreGridItem}>
                  <Image
                    src="/images/TourismPage/shirdi_sai_baba_temple_.webp"
                    alt="Shirdi"
                    loading="lazy"
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized
                  />
                  <h5 className={styles.gridHead}>Shirdi (Sai Baba Temple)</h5>
                  <p className={styles.gridText}>
                    Visit Shirdi, the home of Sai Baba, where thousands of
                    devotees gather to pay homage to one of India&apos;s most
                    respected saints. The Sai Baba Temple attracts pilgrims from
                    all over the world, drawn by his teachings of love,
                    forgiveness, and charity.
                  </p>
                </div>
                <div className={styles.exploreGridItem}>
                  <Image
                    src="/images/TourismPage/ellora_and_ajanta_caves.webp"
                    alt="Ellora-and-Ajanta-Caves"
                    loading="lazy"
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized
                  />
                  <h5 className={styles.gridHead}>Ellora and Ajanta Caves</h5>
                  <p className={styles.gridText}>
                    Discover the awe-inspiring Ellora and Ajanta Caves, UNESCO
                    World Heritage sites that house ancient Buddhist, Hindu, and
                    Jain temples carved right out of rock. These caves are
                    famous for their monumental sculptures and exquisite murals
                    that depict various religious stories and figures.
                  </p>
                </div>
                <div className={styles.exploreGridItem}>
                  <Image
                    src="/images/TourismPage/pandharpur_vithoba_temple_.webp"
                    alt="Vithoba Temple"
                    loading="lazy"
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized
                  />
                  <h5 className={styles.gridHead}>
                    Pandharpur (Vithoba Temple)
                  </h5>
                  <p className={styles.gridText}>
                    Join the millions who flock to Pandharpur, the spiritual
                    heart of Maharashtra, home to the beloved Vithoba Temple.
                    This temple is central to the practice of Bhakti yoga in
                    Hinduism and is the focus of a massive pilgrimage during the
                    Ashadhi Ekadashi festival.
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>
      <div className={styles.divider}></div>

      <section id={styles.seasons}>
        <div className={styles.headingContainer}>
          <h3>Plan your visit</h3>
        </div>
        <div className={styles.seasonsTab}>
          <div className={styles.seasonContainer}>
            <div
              ref={summerTabRef}
              className={styles.season1}
              role="button"
              onClick={() => handleSeasonTabChange("season1")}
            >
              Summer
            </div>
            <div
              ref={monsoonTabRef}
              className={styles.season2}
              role="button"
              onClick={() => handleSeasonTabChange("season2")}
            >
              Monsoon
            </div>
            <div
              ref={winterTabRef}
              className={styles.season3}
              role="button"
              onClick={() => handleSeasonTabChange("season3")}
            >
              Winter
            </div>
          </div>
          <div className={styles.seasonDetails}>
            <div ref={seasonTimeRef} className={styles.seasonD}>
              (March to June)
            </div>
          </div>
        </div>
        <div className={styles.seasonsTabDivider}></div>
        {/* Summer */}
        {seasonActiveTab === "season1" ? (
          <div className={styles.summerContainer}>
            <div className={styles.adventureDivider}></div>
            <div className={styles.seasonsInnerSummer}>
              <div className={styles.seasonsTitle}>
                <h3>Places to Visit</h3>
              </div>
              <div className={styles.seasonsGrid}>
                <div className={styles.seasonsItem}>
                  <Image
                    src="/images/TourismPage/hill_stations.webp"
                    alt="hill_stations"
                    loading="lazy"
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized
                  />
                  <h5>Hill stations</h5>
                </div>
                <div className={styles.seasonsItem}>
                  <Image
                    src="/images/TourismPage/seaside_escapades.webp"
                    alt="Seaside-Escapades"
                    loading="lazy"
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized
                  />
                  <h5>Seaside Escapades</h5>
                </div>
                <div className={styles.emptyDiv}></div>
              </div>
            </div>
            <div className={styles.adventureDivider}></div>
            <div className={styles.seasonsInnerSummer}>
              <div className={styles.seasonsTitle}>
                <h3>Activities</h3>
              </div>
              <div className={styles.seasonsGrid}>
                <div className={styles.seasonsItem}>
                  <Image
                    src="/images/TourismPage/trekking_in_the_sahyadris.webp"
                    alt="Trekking-regions"
                    loading="lazy"
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized
                  />
                  <h5>Trekking in cooler hill regions</h5>
                </div>
                <div className={styles.seasonsItem}>
                  <Image
                    src="/images/TourismPage/paragliding_in_kamshet.webp"
                    alt="Paragliding in Kamshet"
                    loading="lazy"
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized
                  />
                  <h5>Paragliding in Kamshet</h5>
                </div>
                <div className={styles.seasonsItem}>
                  <Image
                    src="/images/TourismPage/mango_picking_tours_in_the_kokan_region.webp"
                    alt="mango-picking"
                    loading="lazy"
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized
                  />
                  <h5>
                    Mango picking tours in the
                    <br /> Kokan region
                  </h5>
                </div>
              </div>
            </div>
            <div className={styles.adventureDivider}></div>
            <div className={styles.seasonsInnerSummer}>
              <div className={styles.seasonsTitle}>
                <h3>Food</h3>
              </div>
              <div className={styles.seasonsGrid}>
                <div className={styles.seasonsItem}>
                  <Image
                    src="/images/TourismPage/seasonal_mango_dishes_like_aamras_mango_shrikhand_.webp"
                    alt="mango"
                    loading="lazy"
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized
                  />
                  <h5>
                    Seasonal mango dishes like
                    <br /> Aamras, Mango Shrikhand
                  </h5>
                </div>
                <div className={styles.seasonsItem}>
                  <Image
                    src="/images/TourismPage/lighter_meals_like_kairi_panhe_raw_mango_drink_sol_kadhi_.webp"
                    alt="Seaside-Escapades"
                    loading="lazy"
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized
                  />
                  <h5>
                    Lighter meals like (raw mango <br />
                    drink), Sol Kadhi
                  </h5>
                </div>
                <div className={styles.emptyDiv}></div>
              </div>
            </div>
            <div className={styles.adventureDivider}></div>
            <div className={styles.seasonsInnerSummer}>
              <div className={styles.seasonsTitle}>
                <h3>Festivals</h3>
              </div>
              <div className={styles.seasonsGrid}>
                <div className={styles.seasonsItem}>
                  <Image
                    src="/images/TourismPage/gudi_padwa_marathi_new_year_.webp"
                    alt="Gudipadwa"
                    loading="lazy"
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized
                  />
                  <h5>Gudi Padwa (Marathi New Year)</h5>
                </div>
                <div className={styles.seasonsItem}>
                  <Image
                    src="/images/TourismPage/holi_the_festival_of_colours_.webp"
                    alt="Holi"
                    loading="lazy"
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized
                  />
                  <h5>Holi - The festival of colours</h5>
                </div>
                <div className={styles.emptyDiv}></div>
              </div>
            </div>
          </div>
        ) : null}

        {/* Monsoon */}
        {seasonActiveTab === "season2" ? (
          <div className={styles.monsoonContainer}>
            <div className={styles.seasonsInnerSummer}>
              <div className={styles.seasonsTitle}>
                <h3>Places to Visit</h3>
              </div>
              <div className={styles.seasonsGrid}>
                <div className={styles.seasonsItem}>
                  <Image
                    src="/images/TourismPage/hill_station-Monsoon.webp"
                    alt="sahyadri"
                    loading="lazy"
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized
                  />
                  <h5>
                    Sahyadri Ranges for lush green, <br />
                    treks
                  </h5>
                </div>
                <div className={styles.seasonsItem}>
                  <Image
                    src="/images/TourismPage/Waterfalls.webp"
                    alt="Waterfalls "
                    loading="lazy"
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized
                  />
                  <h5>Waterfalls </h5>
                </div>
                <div className={styles.seasonsItem}>
                  <Image
                    src="/images/TourismPage/kolad.webp"
                    alt="river-rafting "
                    loading="lazy"
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized
                  />
                  <h5>Kolad for river rafting </h5>
                </div>
              </div>
            </div>
            <div className={styles.adventureDivider}></div>
            <div className={styles.seasonsInnerSummer}>
              <div className={styles.seasonsTitle}>
                <h3>Activities</h3>
              </div>
              <div className={styles.seasonsGrid}>
                <div className={styles.seasonsItem}>
                  <Image
                    src="/images/TourismPage/trekking to forts.webp"
                    alt="Trekking-to-forts"
                    loading="lazy"
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized
                  />
                  <h5>Trekking to forts</h5>
                </div>
                <div className={styles.seasonsItem}>
                  <Image
                    src="/images/TourismPage/waterfall rapelling.webp"
                    alt="Waterfall-rappelling"
                    loading="lazy"
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized
                  />
                  <h5>Waterfall rappelling</h5>
                </div>
                <div className={styles.seasonsItem}>
                  <Image
                    src="/images/TourismPage/photography tours.webp"
                    alt="Photography-tours"
                    loading="lazy"
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized
                  />
                  <h5>Photography tours</h5>
                </div>
              </div>
            </div>
            <div className={styles.adventureDivider}></div>
            <div className={styles.seasonsInnerSummer}>
              <div className={styles.seasonsTitle}>
                <h3>Food</h3>
              </div>
              <div className={styles.seasonsGrid}>
                <div className={styles.seasonsItem}>
                  <Image
                    src="/images/TourismPage/local snack.webp"
                    alt="Vadapav"
                    loading="lazy"
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized
                  />
                  <h5>
                    Hot and spicy local snacks like <br />
                    Bhajiyas, Vada Pav
                  </h5>
                </div>
                <div className={styles.seasonsItem}>
                  <Image
                    src="/images/TourismPage/warm soup.webp"
                    alt="warm-soup"
                    loading="lazy"
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized
                  />
                  <h5>Warm soups and stews</h5>
                </div>
                <div className={styles.emptyDiv}></div>
              </div>
            </div>
            <div className={styles.adventureDivider}></div>
            <div className={styles.seasonsInnerSummer}>
              <div className={styles.seasonsTitle}>
                <h3>Festivals</h3>
              </div>
              <div className={styles.seasonsGrid}>
                <div className={styles.seasonsItem}>
                  <Image
                    src="/images/TourismPage/nagpanchami.webp"
                    alt="nagpanchami"
                    loading="lazy"
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized
                  />
                  <h5>
                    Nag Panchami with traditional <br />
                    rituals
                  </h5>
                </div>
                <div className={styles.seasonsItem}>
                  <Image
                    src="/images/TourismPage/ganesh chaturthi.webp"
                    alt="Ganesh-Chaturthi"
                    loading="lazy"
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized
                  />
                  <h5>Ganesh Chaturthi</h5>
                </div>
                <div className={styles.emptyDiv}></div>
              </div>
            </div>
          </div>
        ) : null}

        {/* Winter */}
        {seasonActiveTab === "season3" ? (
          <div className={styles.winterContainer}>
            <div className={styles.seasonsInnerSummer}>
              <div className={styles.seasonsTitle}>
                <h3>Places to Visit</h3>
              </div>
              <div className={styles.seasonsGrid}>
                <div className={styles.seasonsItem}>
                  <Image
                    src="/images/TourismPage/Aurangabad.webp"
                    alt="Chhatrapati Sambhaji Nagar"
                    loading="lazy"
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized
                  />

                  <h5>
                    Chhatrapati Sambhaji Nagar for
                    <br />
                    the Ajanta and Ellora caves
                  </h5>
                </div>
                <div className={styles.seasonsItem}>
                  <Image
                    src="/images/TourismPage/Nashik.webp"
                    alt="Nashik"
                    loading="lazy"
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized
                  />
                  <h5>Nashik for vineyard tours</h5>
                </div>
                <div className={styles.seasonsItem}>
                  <Image
                    src="/images/TourismPage/Wildlife.webp"
                    alt="Wildlife-sanctuaries"
                    loading="lazy"
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized
                  />
                  <h5>Wildlife sanctuaries</h5>
                </div>
              </div>
            </div>
            <div className={styles.adventureDivider}></div>
            <div className={styles.seasonsInnerSummer}>
              <div className={styles.seasonsTitle}>
                <h3>Activities</h3>
              </div>
              <div className={styles.seasonsGrid}>
                <div className={styles.seasonsItem}>
                  <Image
                    src="/images/TourismPage/Bird watch.webp"
                    alt="Bhigwan"
                    loading="lazy"
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized
                  />
                  <h5>Bird watching in Bhigwan</h5>
                </div>
                <div className={styles.seasonsItem}>
                  <Image
                    src="/images/TourismPage/heritage walks.webp"
                    alt="Heritage-walks"
                    loading="lazy"
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized
                  />
                  <h5>
                    Heritage walks in Pune and
                    <br /> Mumbai
                  </h5>
                </div>
                <div className={styles.emptyDiv}></div>
              </div>
            </div>
            <div className={styles.adventureDivider}></div>
            <div className={styles.seasonsInnerSummer}>
              <div className={styles.seasonsTitle}>
                <h3>Food</h3>
              </div>
              <div className={styles.seasonsGrid}>
                <div className={styles.seasonsItem}>
                  <Image
                    src="/images/TourismPage/saoji chicken.webp"
                    alt="saoji-chicken"
                    loading="lazy"
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized
                  />
                  <h5>
                    Rich dishes like Saoji Chicken,
                    <br /> Bhakri and Puran Poli
                  </h5>
                </div>
                <div className={styles.seasonsItem}>
                  <Image
                    src="/images/TourismPage/seasonal gravy.webp"
                    alt="spicy-gravy"
                    loading="lazy"
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized
                  />
                  <h5>
                    Seasonal vegetables in spicy
                    <br /> gravies
                  </h5>
                </div>
                <div className={styles.emptyDiv}></div>
              </div>
            </div>
            <div className={styles.adventureDivider}></div>
            <div className={styles.seasonsInnerSummer}>
              <div className={styles.seasonsTitle}>
                <h3>Festivals</h3>
              </div>
              <div className={styles.seasonsGrid}>
                <div className={styles.seasonsItem}>
                  <Image
                    src="/images/TourismPage/diwali.webp"
                    alt="diwali"
                    loading="lazy"
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized
                  />
                  <h5>Diwali</h5>
                </div>
                <div className={styles.seasonsItem}>
                  <Image
                    src="/images/TourismPage/makarsankranti.webp"
                    alt="Makarsankranti"
                    loading="lazy"
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized
                  />
                  <h5>Makar Sankranti</h5>
                </div>
                <div className={styles.emptyDiv}></div>
              </div>
            </div>
          </div>
        ) : null}
      </section>

      <div className={`${styles.divider} ${styles.last}`}></div>
    </main>
  );
}

export default Tourism;
