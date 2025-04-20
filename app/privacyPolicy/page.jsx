import React from "react";
import styles from "./privacyPolicy.module.css";
import Hyperlink from "../components/privacyPolicy/Hyperlink";
import Termsconditions from "../components/privacyPolicy/Terms&conditions";
import Privacy from "../components/privacyPolicy/Privacy";
import Copyright from "../components/privacyPolicy/Copyright";
import Disclaimer from "../components/privacyPolicy/Disclaimer";

function PrivacyPolicy() {
  return (
    <section className={styles.policyWrapper}>
      <div className={styles.privacyPolicyContainer} observer-animation="cssClass" observer-animation-classes="animateAllLinesIn, animateImagesIn">
        <div className={styles.privacyPolicy}>
          <Hyperlink />
        </div>
        <span className="anim-line -bottom" observer-animation="cssClass" observer-animation-classes="animateSingleLineIn" transform-origin="top left"></span>
      </div>
      <div className={styles.privacyPolicyContainer} observer-animation="cssClass" observer-animation-classes="animateAllLinesIn, animateImagesIn">
        <div className={styles.privacyPolicy}>
          <Termsconditions />
        </div>
        <span className="anim-line -bottom" observer-animation="cssClass" observer-animation-classes="animateSingleLineIn" transform-origin="top left"></span>
      </div>
      <div className={styles.privacyPolicyContainer} observer-animation="cssClass" observer-animation-classes="animateAllLinesIn, animateImagesIn">
        <div className={styles.privacyPolicy}>
          <Privacy />
        </div>
        <span className="anim-line -bottom" observer-animation="cssClass" observer-animation-classes="animateSingleLineIn" transform-origin="top left"></span>
      </div>
      <div className={styles.privacyPolicyContainer} observer-animation="cssClass" observer-animation-classes="animateAllLinesIn, animateImagesIn">
        <div className={styles.privacyPolicy}>
          <Copyright />
        </div>
        <span className="anim-line -bottom" observer-animation="cssClass" observer-animation-classes="animateSingleLineIn" transform-origin="top left"></span>
      </div>
      <div className={styles.privacyPolicyContainer} observer-animation="cssClass" observer-animation-classes="animateAllLinesIn, animateImagesIn">
        <div className={styles.privacyPolicy}>
          <Disclaimer />
        </div>
        <span className="anim-line -bottom" observer-animation="cssClass" observer-animation-classes="animateSingleLineIn" transform-origin="top left"></span>
      </div>
    </section>
  );
}

export default PrivacyPolicy;
