import React from "react";
import styles from "../../privacyPolicy/privacyPolicy.module.css";
function Disclaimer() {
  return (
    <div className={styles.privacyContainer}>
      <h2 className={styles.heading}>Disclaimer</h2>
      <div className={styles.privacyBody}>
        <div>
          <p>
            Although information and content in this portal has been put with
            care and diligence, MIDC does not take responsibility on how this
            information is used or the consequences of its use. In case of any
            inconsistency/confusion, the user should contact the concerned
            Officer of Maharashtra Industrial Development Corporation for
            further clarifications
          </p>
        </div>
      </div>
    </div>
  );
}

export default Disclaimer;
