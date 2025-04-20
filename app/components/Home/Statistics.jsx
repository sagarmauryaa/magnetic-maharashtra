 
import styles from "./Statistics.module.css"; 
import Image from "next/image";

const Statistics = () => {
  
  const statsData = [
    {
      heading: "<span><span class='higlight'>Manufacturing&nbsp;&hyphen;&nbsp;</span></span>  Made in Maharashtra",
      content: " We lead in automotive, electronics, and textiles, driving innovation and quality.",
      "img": "/images/Statistics/Manufacturing.png",
      alt: "Manufacturing",
      "stats": "/images/Statistics/Manufacturing.svg"
    },
    {
      heading: "<span><span class='higlight'>Services&nbsp;&hyphen;&nbsp;</span></span>  Innovation Delivered",
      content: " From IT to healthcare, Maharashtra’s service sector is booming, powering growth across industries.",
      "img": "/images/Statistics/Services.webp",
      alt: "Services",
      "stats": "/images/Statistics/Services.svg"
    },
    {
      heading: "<span><span class='higlight'>Infrastructure&nbsp;&hyphen;&nbsp;</span></span>  Built to Grow",
      content: "With world-class roads, ports, and airports, Maharashtra’s infrastructure connects people and opportunities seamlessly.",
      "img": "/images/Statistics/Infrastructure.png",
      alt: "Infrastructure",
      "stats": "/images/Statistics/Infrastructure.svg"
    }
  ]

  return (
    <section id={styles.statisticsSection} observer-animation="cssClass" observer-animation-classes="animateImagesIn" observer-animation-repeat="true">
      <div className={styles.dataContainer}>
        {
          statsData.map((data, index) =>
            <div
              key={index} 
              className={styles.parentContainer}
              observer-animation="cssClass" observer-animation-classes="animateImagesIn" observer-animation-repeat="true"
            >
              <div 
                className={styles.contentContainer}
              >
                <h2 className={styles.heading} observer-animation="title" dangerouslySetInnerHTML={{ __html: data.heading }} />

                <p observer-animation="fadeInUpPara">
                  {data.content}
                </p>
              </div>
              <div 
                className={styles.contentImage + ' anim-imageContainer'}
              >
                <div className="anim-imageWrapper">
                  <Image
                    src={data.img}
                    className={` anim-image`}
                    alt={data.alt}
                    width={410}
                    height={507}
                    quality={100}
                    priority
                  />
                </div>
              </div>

              <div 
                className={styles.svgContainer}
              >
                <Image
                  src={data.stats}
                  alt={data.alt}
                  width={442}
                  height={277}
                  quality={100}
                />
              </div>
              {
                index < statsData.length - 1 &&
                <span className="anim-line -bottom" observer-animation="cssClass" observer-animation-classes="animateSingleLineIn" transform-origin="top left"></span>
              }
            </div>
          )
        }
      </div>
      <span className="anim-line -bottom" observer-animation="cssClass" observer-animation-classes="animateSingleLineIn" transform-origin="top left"></span>
    </section>
  );
};

export default Statistics;
