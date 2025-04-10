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
      <div className={styles.privacyPolicyContainer}>
        <div className={styles.privacyPolicy}>
          <Hyperlink />
        </div>
      </div>
      <div className={styles.privacyPolicyContainer}>
        <div className={styles.privacyPolicy}>
          <Termsconditions />
        </div>
      </div>
      <div className={styles.privacyPolicyContainer}>
        <div className={styles.privacyPolicy}>
          <Privacy />
        </div>
      </div>
      <div className={styles.privacyPolicyContainer}>
        <div className={styles.privacyPolicy}>
          <Copyright />
        </div>
      </div>
      <div className={styles.privacyPolicyContainer}>
        <div className={styles.privacyPolicy}>
          <Disclaimer />
        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicy;
