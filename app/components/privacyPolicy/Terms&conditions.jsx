import React from "react";
import styles from "../../privacyPolicy/privacyPolicy.module.css";
function Termsconditions() {
  return (
    <div className={styles.privacyContainer}>
      <h2 className={styles.heading} observer-animation="title">Terms And Conditions</h2>
      <div className={styles.privacyBody}>
        <div observer-animation="fadeInUpPara">
          <p>
            This portal is designed, developed and maintained by Maharashtra
            Industrial Development Corporation (hereafter MIDC). The content for
            the portal is provided by MIDC and by accessing this portal, you
            unconditionally accept to be legally bound by the terms and
            conditions. If you do not agree to the mentioned terms and
            conditions, please do not access the portal. Efforts have been made
            to ensure that the content in the portal is accurate and up to date;
            however, the same should not be interpreted as a statement of law or
            used for any legal purposes. In case of any ambiguity or doubts,
            users are advised to verify/check with other source(s) and obtain
            appropriate professional advice. Under no circumstances MIDC will be
            liable for any expense, loss or damage including, without
            limitation, indirect or consequential loss or damage or any expense,
            loss or damage whatsoever arising from use, or loss of use, of data,
            arising out of or in connection with the use of this portal. These
            terms and conditions shall be governed by and construed in
            accordance with the Indian Laws. Any dispute arising under these
            terms and conditions shall be subject to the jurisdiction of the
            courts of India.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Termsconditions;
