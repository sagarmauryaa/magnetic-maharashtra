import styles from "./CityOfGates.module.css";

const CityOfGates = () => {
  return (
    <section className={styles.gatesContainer}>
      <div className={styles.gates}>
        <div className={styles.gatesImages}>
          <div className={styles.image}>
            <img src="/images/CityOfGates/gates1.webp" alt="" />
          </div>
          {/* <div className='inner-grid-wrapper'>
              <div className='image'>
                <img src={gates2} alt='' />
              </div>
              <div className='image '>
                <img src={gates3} alt='' />
              </div>
            </div> */}
          <div className={styles.innerGridWrapper}>
            <div className={styles.image}>
              <img src="/images/CityOfGates/gates2.webp" alt="" />
            </div>
            <div className={styles.image}>
              <img src="/images/CityOfGates/gates3.webp" alt="" />
            </div>
          </div>
          <div className={`${styles.image} ${styles.gatesSubtitle}`}>
            <img src="/images/CityOfGates/gates4.webp" alt="" />
            <p>
              Chhatrapati Sambhaji Nagar is known as the City of Gates and is
              celebrated for its proximity to the Ajanta & Ellora Caves,
              attracting global tourists and preserving India’s ancient artistic
              heritage.
            </p>
          </div>

          {/* <div className='inner-grid-wrapper'>
              <div className='image'>
                <img src={gates5} alt='' />
              </div>
              <div className='image'>
                <img src={gates6} alt='' />
              </div>
            </div> */}
          <div className={styles.innerGridWrapper}>
            <div className={styles.image}>
              <img src="/images/CityOfGates/gates5.webp" alt="" />
            </div>
            <div className={styles.image}>
              <img src="/images/CityOfGates/gates6.webp" alt="" />
            </div>
          </div>
        </div>
        <div className={styles.gatesImagesMobile}>
          <div className={styles.imageMobileContainer}>
            <div className={styles.innerMobileImages}>
              <div className={styles.image}>
                <img src="/images/CityOfGates/gates1.webp" alt="" />
              </div>
              <div className={styles.image}>
                <img src="/images/CityOfGates/gates2.webp" alt="" />
              </div>
              <div className={styles.image}>
                <img src="/images/CityOfGates/gates3.webp" alt="" />
              </div>
              <div className={styles.image}>
                <img src="/images/CityOfGates/gates4.webp" alt="" />
              </div>
              <div className={styles.image}>
                <img src="/images/CityOfGates/gates5.webp" alt="" />
              </div>
              <div className={styles.image}>
                <img src="/images/CityOfGates/gates6.webp" alt="" />
              </div>
            </div>
          </div>
          <p>
            Chhatrapati Sambhaji Nagar is known as the City of Gates and is
            celebrated for its proximity to the Ajanta & Ellora Caves,
            attracting global tourists and preserving India’s ancient artistic
            heritage.
          </p>
        </div>
        <div className={styles.gatesText}>
          <img src="/images/CityOfGates/CityOfGates.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default CityOfGates;
