import React from "react";
import styles from "../../privacyPolicy/privacyPolicy.module.css";
function Privacy() {
  return (
    <div className={styles.privacyContainer}>
      <h2 className={styles.heading}>Privacy Policy</h2>
      <div className={styles.privacyBody}>
        <div>
          <p>
            As a general rule, this portal does not automatically capture any
            specific personal information from you, (like name, phone number or
            e-mail address), that allows us to identify you individually. This
            portal records your visit and logs the following information for
            statistical purposes, such as Internet Protocol (IP) addresses,
            domain name, browser type, operating system, the date and time of
            the visit and the pages visited. We make no attempt to link these
            addresses with the identity of individuals visiting our site unless
            an attempt to damage the site has been detected We will not identify
            users or their browsing activities, except when a law enforcement
            agency may exercise a warrant to inspect the service provider’s
            logs. If MIDC portal requests you to provide personal information,
            you will be informed how it will be used if you choose to give it
            and adequate security measures will be taken to protect your
            personal information.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
