import styles from "./Education.module.css";
import Image from "next/image";

const Education = () => {
  return (
    <section className={styles.educationContainer}>
      <div className={styles.education}>
        <div className={styles.educationImages}>
          <div className={styles.image}>
            <Image
              src="/images/Education/education1.webp"
              alt=""
              width={100}
              height={100}
              quality={100}
              unoptimized
            />
          </div>
          {/* <div className='inner-grid-wrapper'>
              <div className='image'>
                <img src={education2} alt='' />
              </div>
              <div className='image '>
                <img src={education3} alt='' />
              </div>
            </div> */}
          <div className={styles.innerGridWrapper}>
            <div className={styles.image}>
              <Image
                src="/images/Education/education2.webp"
                alt=""
                width={100}
                height={100}
                quality={100}
                unoptimized
              />
            </div>
            <div className={styles.image}>
              <Image
                src="/images/Education/education3.webp"
                alt=""
                width={100}
                height={100}
                quality={100}
                unoptimized
              />
            </div>
          </div>
          <div className={`${styles.image} ${styles.educationSubtitle}`}>
            <Image
              src="/images/Education/education4.webp"
              alt=""
              width={100}
              height={100}
              quality={100}
              unoptimized
            />
            <p>
              Pune is renowned for its world-class educational institutions and
              universities, making it a leading center for learning, research,
              and innovation in India.
            </p>
          </div>

          {/* <div className='inner-grid-wrapper'>
              <div className='image'>
                <img src={education5} alt='' />
              </div>
              <div className='image'>
                <img src={education6} alt='' />
              </div>
            </div> */}
          <div className={styles.innerGridWrapper}>
            <div className={styles.image}>
              <Image
                src="/images/Education/education5.webp"
                alt=""
                width={100}
                height={100}
                quality={100}
                unoptimized
              />
            </div>
            <div className={styles.image}>
              <Image
                src="/images/Education/education6.webp"
                alt=""
                width={100}
                height={100}
                quality={100}
                unoptimized
              />
            </div>
          </div>
        </div>
        <div className={styles.educationImagesMobile}>
          <div className={styles.imageMobileContainer}>
            <div className={styles.innerMobileImages}>
              <div className={styles.image}>
                <Image
                  src="/images/Education/education1.webp"
                  alt=""
                  width={100}
                  height={100}
                  quality={100}
                  unoptimized
                />
              </div>
              <div className={styles.image}>
                <Image
                  src="/images/Education/education2.webp"
                  alt=""
                  width={100}
                  height={100}
                  quality={100}
                  unoptimized
                />
              </div>
              <div className={styles.image}>
                <Image
                  src="/images/Education/education3.webp"
                  alt=""
                  width={100}
                  height={100}
                  quality={100}
                  unoptimized
                />
              </div>
              <div className={styles.image}>
                <Image
                  src="/images/Education/education4.webp"
                  alt=""
                  width={100}
                  height={100}
                  quality={100}
                  unoptimized
                />
              </div>
              <div className={styles.image}>
                <Image
                  src="/images/Education/education5.webp"
                  alt=""
                  width={100}
                  height={100}
                  quality={100}
                  unoptimized
                />
              </div>
              <div className={styles.image}>
                <Image
                  src="/images/Education/education6.webp"
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
            Pune is renowned for its world-class educational institutions and
            universities, making it a leading center for learning, research, and
            innovation in India.
          </p>
        </div>
        <div className={styles.educationText}>
          <Image
            src="/images/Education/Education.svg"
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

export default Education;
