import styles from "./WineEstate.module.css";

const WineEstate = () => {
  return (
    <section className={styles.wineContainer}>
      <div className={styles.wine}>
        <div className={styles.wineImages}>
          <div className={styles.image}>
            <img src="/images/WineEstate/wine1.webp" alt="" />
          </div>
          {/* <div className='inner-grid-wrapper'>
              <div className='image'>
                <img src={wine2} alt='' />
              </div>
              <div className='image '>
                <img src={wine3} alt='' />
              </div>
            </div> */}
          <div className={styles.innerGridWrapper}>
            <div className={styles.image}>
              <img src="/images/WineEstate/wine2.webp" alt="" />
            </div>
            <div className={styles.image}>
              <img src="/images/WineEstate/wine3.webp" alt="" />
            </div>
          </div>
          <div className={`${styles.image} ${styles.wineSubtitle}`}>
            <img src="/images/WineEstate/wine4.webp" alt="" />
            <p>
              Nashik is renowned as India’s largest producer of wine, with its
              vineyards and wineries contributing to over 80% of India’s wine
              production.
            </p>
          </div>

          {/* <div className='inner-grid-wrapper'>
              <div className='image'>
                <img src={wine5} alt='' />
              </div>
              <div className='image'>
                <img src={wine6} alt='' />
              </div>
            </div> */}
          <div className={styles.innerGridWrapper}>
            <div className={styles.image}>
              <img src="/images/WineEstate/wine5.webp" alt="" />
            </div>
            <div className={styles.image}>
              <img src="/images/WineEstate/wine6.webp" alt="" />
            </div>
          </div>
        </div>
        <div className={styles.wineImagesMobile}>
          <div className={styles.imageMobileContainer}>
            <div className={styles.innerMobileImages}>
              <div className={styles.image}>
                <img src="/images/WineEstate/wine1.webp" alt="" />
              </div>
              <div className={styles.image}>
                <img src="/images/WineEstate/wine2.webp" alt="" />
              </div>
              <div className={styles.image}>
                <img src="/images/WineEstate/wine3.webp" alt="" />
              </div>
              <div className={styles.image}>
                <img src="/images/WineEstate/wine4.webp" alt="" />
              </div>
              <div className={styles.image}>
                <img src="/images/WineEstate/wine5.webp" alt="" />
              </div>
              <div className={styles.image}>
                <img src="/images/WineEstate/wine6.webp" alt="" />
              </div>
            </div>
          </div>
          <p>
            Nashik is renowned as India’s largest producer of wine, with its
            vineyards and wineries contributing to over 80% of India’s wine
            production.
          </p>
        </div>
        <div className={styles.wineText}>
          <img src="/images/WineEstate/WineEstate.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default WineEstate;
