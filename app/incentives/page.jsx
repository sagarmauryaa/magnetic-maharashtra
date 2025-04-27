"use client";

import CardAccordion from "../components/common/CardAccordion";
import styles from "./incentives.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";

function Incentives() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    // gsap
    //   .timeline()
    //   .to(`.${styles.incentivesHeroImage}`, {
    //     duration: 1,
    //     clipPath: "inset(0 0 0% 0)",
    //     ease: "power2.out",
    //   })
    //   .from(
    //     `.${styles.incentivesHero} .${styles.heroHeading}`,
    //     {
    //       opacity: 0,
    //       y: 100,
    //       ease: "power2.out",
    //     },
    //     "-=0.4"
    //   )
    //   .from(
    //     `.${styles.incentivesHero} .${styles.textBlock}`,
    //     {
    //       opacity: 0,
    //       y: 100,
    //       ease: "power2.out",
    //     },
    //     "-=0.4"
    //   );

    gsap.from(`.${styles.incentivesDivider}`, {
      width: 0,
      duration: 0.65,
      ease: "expo.out",
      scrollTrigger: {
        trigger: `.${styles.incentivesDivider}`,
        start: "top center",
        end: "bottom center",
        markers: false,
      },
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.${styles.howToApply}`,
          start: "top center",
          end: "bottom center",
          markers: false,
        },
      })
      .from(`.${styles.howToApply} h2`, {
        yPercent: 50,
        opacity: 0,
        duration: 0.65,
        ease: "expo.out",
      });

    // gsap
    //   .timeline({
    //     scrollTrigger: {
    //       trigger: `.${styles.stepsContent}`,
    //       start: "top bottom",
    //       end: "bottom center",
    //       markers: false,
    //     },
    //   })
    //   .from(`.${styles.stepsContent} .${styles.left} h2`, {
    //     yPercent: 50,
    //     opacity: 0,
    //     duration: 0.65,
    //     ease: "expo.out",
    //   })
    //   .from(`.${styles.stepsContent} .${styles.right}`, {
    //     yPercent: 50,
    //     opacity: 0,
    //     duration: 0.65,
    //     ease: "expo.out",
    //   });
  });
  return (
    <>
      <section className={styles.incentivesHero} observer-animation-repeat="true" observer-animation-classes="animateAllLinesIn, animateImagesIn" observer-animation="cssClass">
        <div className={styles.incentivesHeroImage + ' anim-imageWrapper'}>
          <Image
            width={100}
            height={100}
            src="/images/IncentivesPage/image.webp"
            alt="Incentives Hero"
            className="anim-image"
            quality={100}
            unoptimized={true}
          />
        </div>
        <div className={styles.flexContainer}>
          <div className={styles.heroHeading} observer-animation="title">Incentives</div>
          <div className={styles.textBlock} observer-animation="title">
            Unleashing <br /> Potential,
            <br /> Empowering Dreams
          </div>
        </div>
        <span className="anim-line -bottom" observer-animation="cssClass" observer-animation-classes="animateSingleLineIn" transform-origin="top left"></span>
      </section>
      <CardAccordion />
      {/* How to Apply */}
      <section className={styles.howToApply} observer-animation-repeat="true" observer-animation-classes="animateAllLinesIn, animateImagesIn" observer-animation="cssClass">
        <h2 observer-animation="title">How to Apply</h2>
      </section>
      {/* <div className='incentives-divider'></div> */}
      <section className={styles.steps}>
        <div className={styles.stepsContainer} observer-animation-repeat="true" observer-animation-classes="animateAllLinesIn, animateImagesIn" observer-animation="cssClass">
          <div className={styles.stepsContent}   observer-animation="fadeInUpPara">
            <div className={styles.left}>
              <h2>1</h2>
            </div>
            <div className={styles.right}>
              <div className={styles.subheading}>
                <h3>Identify Your Needs</h3>
              </div>
              <div className={styles.paragraph}>
                <p>
                  Consider what aspects of your business might benefit most from
                  government support. Are you looking for financial assistance,
                  tax benefits, or perhaps guidance and mentorship? This will
                  help you focus on the most relevant sections of the website.
                </p>
              </div>
            </div>
          </div>
          <span className="anim-line -top" observer-animation="cssClass" observer-animation-classes="animateSingleLineIn" transform-origin="top left"></span>
          <span className="anim-line -bottom" observer-animation="cssClass" observer-animation-classes="animateSingleLineIn" transform-origin="top left"></span>
        </div>
        {/* <div className='incentives-divider'></div> */}
        <div className={styles.stepsContainer} observer-animation-repeat="true" observer-animation-classes="animateAllLinesIn, animateImagesIn" observer-animation="cssClass">
          <div className={styles.stepsContent}   observer-animation="fadeInUpPara">
            <div className={styles.left}>
              <h2>2</h2>
            </div>
            <div className={styles.right}>
              <div className={styles.subheading}>
                <h3>Explore Relevant Sections</h3>
              </div>
              <div className={styles.paragraph}>
                <p>
                  Use the navigation menu to find specific areas of interest.
                  For example:
                </p>
                <section>
                  <div className={styles.paraIncentivesDivider}></div>
                </section>
                <h5>Financial Incentives</h5>
                <p>
                  This section covers grants, subsidies, and other financial
                  aids.
                </p>
                <section>
                  <div className={styles.paraIncentivesDivider}></div>
                </section>
                <h5>Sector-Specific Programs</h5>
                <p>
                  If you&apos;re in tech, agriculture, or manufacturing, look
                  for targeted programs in these sections.
                </p>
              </div>
            </div>
          </div>
          <span className="anim-line -bottom" observer-animation="cssClass" observer-animation-classes="animateSingleLineIn" transform-origin="top left"></span>
        </div>
        {/* <div className='incentives-divider'></div> */}

        <div className={styles.stepsContainer} observer-animation-repeat="true" observer-animation-classes="animateAllLinesIn, animateImagesIn" observer-animation="cssClass">
          <div className={styles.stepsContent}   observer-animation="fadeInUpPara">
            {" "}
            <div className={styles.left}>
              <h2>3</h2>
            </div>
            <div className={styles.right}>
              <div className={styles.subheading}>
                <h3>Check Your Eligibility</h3>
              </div>
              <div className={styles.paragraph}>
                <p>
                  Each program or incentive has its own set of eligibility
                  criteria. Make sure to review these details to determine if
                  your business qualifies. Look for:
                </p>
                <section>
                  <div className={styles.paraIncentivesDivider}></div>
                </section>
                <h5>Business Type and Size:</h5>
                <p>
                  Some incentives are specifically designed for SMEs or
                  startups.
                </p>
                <section>
                  <div className={styles.paraIncentivesDivider}></div>
                </section>
                <h5>Sector Requirements</h5>
                <p>
                  Certain incentives are available only to specific industries.
                </p>
              </div>
            </div>
          </div>
          <span className="anim-line -bottom" observer-animation="cssClass" observer-animation-classes="animateSingleLineIn" transform-origin="top left"></span>
        </div>
        {/* <div className='incentives-divider'></div> */}
        <div className={styles.stepsContainer} observer-animation-repeat="true" observer-animation-classes="animateAllLinesIn, animateImagesIn" observer-animation="cssClass">
          <div className={styles.stepsContent}   observer-animation="fadeInUpPara">
            {" "}
            <div className={styles.left}>
              <h2>4</h2>
            </div>
            <div className={styles.right}>
              <div className={styles.subheading}>
                <h3>Gather Necessary Documents</h3>
              </div>
              <div className={styles.paragraph}>
                <p>
                  Prepare all the necessary documentation you might need to
                  apply. This typically includes business registration details,
                  financial statements, and a detailed business plan.
                </p>
              </div>
            </div>
          </div>
          <span className="anim-line -bottom" observer-animation="cssClass" observer-animation-classes="animateSingleLineIn" transform-origin="top left"></span>
        </div>
        {/* <div className='incentives-divider'></div> */}
        <div className={styles.stepsContainer} observer-animation-repeat="true" observer-animation-classes="animateAllLinesIn, animateImagesIn" observer-animation="cssClass">
          <div className={styles.stepsContent}   observer-animation="fadeInUpPara">
            {" "}
            <div className={styles.left}>
              <h2>5</h2>
            </div>
            <div className={styles.right}>
              <div className={styles.subheading}>
                <h3>Apply Online</h3>
              </div>
              <div className={styles.paragraph}>
                <p>
                  Most incentives allow you to apply directly through this
                  website. Locate the application forms in the respective
                  sections, fill them out with accurate information, and upload
                  any required documents.
                </p>
              </div>
            </div>
          </div>
          <span className="anim-line -bottom" observer-animation="cssClass" observer-animation-classes="animateSingleLineIn" transform-origin="top left"></span>
        </div>
        {/* <div className='incentives-divider'></div> */}
        <div className={styles.stepsContainer} observer-animation-repeat="true" observer-animation-classes="animateAllLinesIn, animateImagesIn" observer-animation="cssClass">
          <div className={styles.stepsContent}   observer-animation="fadeInUpPara">
            {" "}
            <div className={styles.left}>
              <h2>6</h2>
            </div>
            <div className={styles.right}>
              <div className={styles.subheading}>
                <h3>Track Your Application</h3>
              </div>
              <div className={styles.paragraph}>
                <p>
                  After submitting your application, keep track of its status
                  through the website. You can use your application ID to check
                  for updates and respond to any additional requests for
                  information.
                </p>
              </div>
            </div>
          </div>
          <span className="anim-line -bottom" observer-animation="cssClass" observer-animation-classes="animateSingleLineIn" transform-origin="top left"></span>
        </div>
        {/* <div className='incentives-divider'></div> */}
        <div className={styles.stepsContainer} observer-animation-repeat="true" observer-animation-classes="animateAllLinesIn, animateImagesIn" observer-animation="cssClass">
          <div className={styles.stepsContent}   observer-animation="fadeInUpPara">
            {" "}
            <div className={styles.left}>
              <h2>7</h2>
            </div>
            <div className={styles.right}>
              <div className={styles.subheading}>
                <h3>Get Assistance</h3>
              </div>
              <div className={styles.paragraph}>
                <p>
                  If you need help at any step, refer to the &apos;Contact
                  Us&apos; section. Here, you can find phone numbers, email
                  addresses, and sometimes even live chat support to guide you
                  through the application process or clarify any doubts.
                </p>
              </div>
            </div>
          </div>
          <span className="anim-line -bottom" observer-animation="cssClass" observer-animation-classes="animateSingleLineIn" transform-origin="top left"></span>
        </div>
      </section>

      <div className={styles.incentivesDivider}></div>
    </>
  );
}

export default Incentives;
