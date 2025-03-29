import React from "react";
import styles from "../page.module.css";
import Image from "next/image";

const Popup = () => {
  return (
    <div className={styles.popup}>
      <div className={styles.cursor}></div>
      <p className={styles.popupDescription}></p>
      {/* <Image src="" alt=''/> */}
    </div>
  );
};

export default Popup;
