import React from "react";
import styles from "../../privacyPolicy/privacyPolicy.module.css";
function Copyright() {
  return (
    <div className={styles.privacyContainer}>
      <h2 className={styles.heading} observer-animation="title">Copyright Policy</h2>
      <div className={styles.privacyBody} observer-animation="fadeInUpPara">
        <div>
          <p>
            Material featured on this portal may be reproduced free of charge in
            any format or media without requiring specific permission. This is
            subject to the material being reproduced accurately and not being
            used in a derogatory manner or in a misleading context. Where the
            material is being published or issued to others, the source must be
            prominently acknowledged. However, the permission to reproduce this
            material does not extend to any material on this site which is
            identified as being the copyright of the third party. Authorisation
            to reproduce such material is obtained from the copyright holders
            concerned.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Copyright;
