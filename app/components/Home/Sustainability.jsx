
import styles from "./Sustainability.module.css";
import Link from "next/link";
import Image from "next/image";

function Sustainability() {

  return (
    <div className={styles.sustainabilityContainer} observer-animation="cssClass" observer-animation-classes="animateImagesIn" observer-animation-repeat="true">
      <div className={styles.hSustainability}>
        <div className={styles.sustainImage + ' anim-imageContainer'}>
          <picture className="anim-imageWrapper">
            <source
              srcSet="/images/Sustainability/Sustainability.webp"
              media="(min-width:960px)"
            />
            <source
              srcSet="/images/Sustainability/Sustainability.webp"
              media="(min-width:360px)"
            />
            <Image
              src="/images/Sustainability/Sustainability.webp"
              alt="Naturally Better"
              width={100}
              height={100}
              className={` anim-image`}
              quality={10}
              priority
            />
          </picture>
        </div>
        <div className={styles.sustainTitles}>
          <div className={styles.sustainTitle} observer-animation="title">
            Sustainability - 
              Business,
              <br />
              Naturally Better 
          </div>
          <div className={styles.sustainSubtitle} observer-animation="fadeInUpPara">
           <p>
              Building for tomorrow, without compromising today—Maharashtra&apos;s
              commitment to sustainability is as strong as its drive to grow.
           </p>
            <Link href="/sustainability" className={styles.sustainReadMore}>
              <button>Read More </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sustainability;
