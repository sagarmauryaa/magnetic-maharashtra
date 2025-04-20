import React from "react";
import styles from "../../privacyPolicy/privacyPolicy.module.css";
function Hyperlink() {
  return (
    <div className={styles.privacyContainer}>
      <h2 className={styles.heading} observer-animation="title">Hyperlinking Policies</h2>
      <div className={styles.privacyBody} >
        <div observer-animation="fadeInUpPara">
          <h4 className={styles.heading}>Links to External Websites/Portals</h4>

          <p>
            At many places in this portal, you shall find links to other
            websites/portals created and maintained by other Government,
            non-Government/private organisations. These links have been placed
            for your convenience. When you select a link you are navigated to
            that website. Once on that website, you are subject to the privacy
            and security policies of the owners/sponsors of the website.
            Maharashtra Industrial Development Corporation (MIDC) is not
            responsible for the contents and reliability of the linked websites
            and does not necessarily endorse the views expressed in them. Mere
            presence of the link or its listing on this portal should not be
            assumed as endorsement of any kind.
          </p>
        </div>
        <div observer-animation="fadeInUpPara">
          <h4 className={styles.heading}>
            Links to the Portal by Other Websites/Portals
          </h4>
          <p>
            We do not object you for linking directly to the information that is
            hosted on our site and no prior permission is required for the same.
            We do not permit our pages to be loaded into frames on your site.
            Our pages must load into a newly opened browser window of the user.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hyperlink;
