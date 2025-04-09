import styles from "./OrangeCity.module.css";
import Image from "next/image";

const OrangeCity = () => {
  return (
    <section className={styles.orangeContainer}>
      <div className={styles.orange}>
        <div className={styles.orangeImages}>
          <div className={styles.image}>
            <Image
              src="/images/OrangeCity/orange1.webp"
              alt=""
              width={100}
              height={100}
              quality={100}
              unoptimized
            />
          </div>
          {/* <div className='inner-grid-wrapper'>
              <div className='image'>
                <img src={orange2} alt='' />
              </div>
              <div className='image '>
                <img src={orange3} alt='' />
              </div>
            </div> */}
          <div className={styles.innerGridWrapper}>
            <div className={styles.image}>
              <Image
                src="/images/OrangeCity/orange2.webp"
                alt=""
                width={100}
                height={100}
                quality={100}
                unoptimized
              />
            </div>
            <div className={styles.image}>
              <Image
                src="/images/OrangeCity/orange3.webp"
                alt=""
                width={100}
                height={100}
                quality={100}
                unoptimized
              />
            </div>
          </div>
          <div className={`${styles.image} ${styles.orangeSubtitle}`}>
            <Image
              src="/images/OrangeCity/orange4.webp"
              alt=""
              width={100}
              height={100}
              quality={100}
              unoptimized
            />
            <p>
              Nagpur is known for its logistics dominance through MIHAN and is
              globally recognized as the Orange Capital of India, contributing
              to 70% of India's orange exports.
            </p>
          </div>

          {/* <div className='inner-grid-wrapper'>
              <div className='image'>
                <img src={orange5} alt='' />
              </div>
              <div className='image'>
                <img src={orange6} alt='' />
              </div>
            </div> */}
          <div className={styles.innerGridWrapper}>
            <div className={styles.image}>
              <Image
                src="/images/OrangeCity/orange5.webp"
                alt=""
                width={100}
                height={100}
                quality={100}
                unoptimized
              />
            </div>
            <div className={styles.image}>
              <Image
                src="/images/OrangeCity/orange6.webp"
                alt=""
                width={100}
                height={100}
                quality={100}
                unoptimized
              />
            </div>
          </div>
        </div>
        <div className={styles.orangeImagesMobile}>
          <div className={styles.imageMobileContainer}>
            <div className={styles.innerMobileImages}>
              <div className={styles.image}>
                <Image
                  src="/images/OrangeCity/orange1.webp"
                  alt=""
                  width={100}
                  height={100}
                  quality={100}
                  unoptimized
                />
              </div>
              <div className={styles.image}>
                <Image
                  src="/images/OrangeCity/orange2.webp"
                  alt=""
                  width={100}
                  height={100}
                  quality={100}
                  unoptimized
                />
              </div>
              <div className={styles.image}>
                <Image
                  src="/images/OrangeCity/orange3.webp"
                  alt=""
                  width={100}
                  height={100}
                  quality={100}
                  unoptimized
                />
              </div>
              <div className={styles.image}>
                <Image
                  src="/images/OrangeCity/orange4.webp"
                  alt=""
                  width={100}
                  height={100}
                  quality={100}
                  unoptimized
                />
              </div>
              <div className={styles.image}>
                <Image
                  src="/images/OrangeCity/orange5.webp"
                  alt=""
                  width={100}
                  height={100}
                  quality={100}
                  unoptimized
                />
              </div>
              <div className={styles.image}>
                <Image
                  src="/images/OrangeCity/orange6.webp"
                  alt=""
                  width={100}
                  height={100}
                  quality={100}
                  unoptimized
                />
              </div>
            </div>
          </div>
          <p>
            Nagpur is known for its logistics dominance through MIHAN and is
            globally recognized as the Orange Capital of India, contributing to
            70% of India's orange exports.
          </p>
        </div>
        <div className={styles.orangeText}>
          <Image
            src="/images/OrangeCity/OrangeCity.svg"
            alt=""
            width={100}
            height={100}
            quality={100}
            unoptimized
          />
        </div>
      </div>
    </section>
  );
};

export default OrangeCity;
