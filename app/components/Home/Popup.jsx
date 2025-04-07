import { useContext, useEffect, useRef } from "react";
import styles from "../../page.module.css";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { globalBusinessData } from "../../globalDestinationData";
import { useAppContext } from "../AppContext";
// import SplitType from "split-type"

const Popup = () => {
  const { state, setState } = useAppContext();
  const { selectedIndex, isActive } = state;

  let cursor = useRef();
  let popup = useRef();
  let popupDesc = useRef();
  let popupImage = useRef();
  let imgOverlay = useRef();
  // let text = new SplitType('.popupDescription', { types: 'lines' })

  function initalizePopup(index) {
    if (
      typeof index === "undefined" ||
      index < 0 ||
      index >= globalBusinessData.length
    ) {
      console.warn("Invalid index for popup:", index);
      return;
    }

    const business = globalBusinessData[index];
    if (popupDesc.current) {
      popupDesc.current.innerHTML = business.description;
    }
    if (popupImage.current) {
      popupImage.current.src = business.imgPath;
      popupImage.current.alt = business.name;
    }
  }

  function moveCursor(e) {
    if (cursor.current) {
      cursor.current.style.display = "block";
      let x = e.clientX;
      let y = e.clientY;
      cursor.current.style.left = `${x - 10}px`;
      cursor.current.style.top = `${y - 10}px`;
    }
  }

  useGSAP(() => {
    let popuptl = gsap.timeline();

    popuptl
      .to(popup.current, {
        scaleY: isActive ? "1" : "0",
        opacity: isActive ? "1" : "0",
        pointerEvents: isActive ? "all" : "none",
        duration: 0.65,
        ease: "power1.inOut",
      })
      .to(popupDesc.current, {
        opacity: isActive ? "1" : "0",
        duration: "0.65",
      })
      .to(
        `.${styles.imgOverlay}`,
        { x: isActive ? "100%" : "0%", duration: "1" },
        "<=0.1"
      );
  }, [isActive]);

  useEffect(() => {
    if (typeof selectedIndex !== "undefined") {
      initalizePopup(selectedIndex);
    }
  }, [selectedIndex]);

  const handleClose = () => {
    setState((prev) => ({ ...prev, isActive: false }));
  };

  return (
    <div
      ref={popup}
      role="presentation"
      className={styles.popup}
      onMouseMove={moveCursor}
      onClick={handleClose}
    >
      <div ref={cursor} className={styles.cursor}></div>
      <p ref={popupDesc} className={styles.popupDescription}></p>
      <div className={styles.popupImageContainer}>
        <img ref={popupImage} className={styles.popupImage} />
        <div ref={imgOverlay} className={styles.imgOverlay}></div>
      </div>
    </div>
  );
};

export default Popup;
