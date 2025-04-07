"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import styles from "../ArtAndCulture/ArtHero.module.css";
import Image from "next/image";

function ArtHero() {
  // useGSAP(() => {
  //   let mm = gsap.matchMedia();
  //   // mm.add("(min-width:786px)", () => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".ArtCulture-container",
  //       // markers: true,
  //       start: "center top+=300px",
  //       end: "bottom center",
  //       // scrub: true,
  //       duration: 1,
  //     },
  //   });
  //   gsap.set(".img1", {
  //     x: 250,
  //     y: 350,
  //     marginTop: 0,
  //   });

  //   gsap.set(".img2", {
  //     x: 50,
  //     y: 350,
  //     marginTop: 0,
  //   });

  //   gsap.set(".img3", {
  //     x: -250,
  //     y: 350,
  //     marginTop: 0,
  //   });

  //   gsap.set(".img4", {
  //     x: 150,
  //     // y: -250,
  //     marginTop: 0,
  //   });

  //   gsap.set(".img5", {
  //     x: -150,
  //     // y: -250,
  //     marginTop: 0,
  //   });

  //   gsap
  //     .timeline()
  //     .from(".artsCultureTitle", {
  //       yPercent: 30,
  //       opacity: 0,
  //       duration: 0.65,
  //       ease: "expo.Out",
  //     })
  //     .from(".artHeroBody", {
  //       yPercent: 30,
  //       opacity: 0,
  //       duration: 0.65,
  //       ease: "expo.Out",
  //     });

  //   tl.to(".img1", {
  //     transform: "rotate(1.68deg)",
  //     marginTop: "-4rem",
  //     ease: "power4.inOut",

  //     duration: 0.35,
  //   })
  //     .to(
  //       ".img2",
  //       {
  //         transform: "rotate(-4.285deg)",
  //         // marginTop: "3rem",

  //         duration: 0.35,
  //       },
  //       "<=0.1"
  //     )
  //     .to(
  //       ".img3",
  //       {
  //         transform: "rotate(3.479deg)",
  //         marginTop: "-3rem",

  //         duration: 0.35,
  //       },
  //       "<=0.1"
  //     )
  //     .to(
  //       ".img4",
  //       {
  //         transform: "rotate(-5.598deg)",
  //         marginTop: "-2rem",

  //         duration: 0.35,
  //       },
  //       "<=0.1"
  //     )
  //     .to(
  //       ".img5",
  //       {
  //         transform: "rotate(7.329deg)",
  //         // marginTop: "-10rem",

  //         duration: 0.35,
  //       },
  //       "<=0.1"
  //     );
  //   // });
  // });

  return (
    <div className={styles.artContainer}>
      <div className={styles.ArtCultureContainer}>
        <div className={styles.artHeroContainer}>
          <section className={styles.artHero}>
            <div className={styles.topRight}>
              {/* <video
              src="/images/Art&Culture_page/color_ios.mp4"
              autoPlay
              muted
              loop
            /> */}
              <img
                src="/images/Art&Culture_page/top-right-element.png"
                alt=""
              />
            </div>
            <div className={styles.flagCulture}>
              <img src="/images/Art&Culture_page/artFlag.png" alt="" />
              {/* <video
                src={colorSplash}
                autoPlay
                muted
                loop
                controls={false}
              ></video> */}
            </div>
            <div className={styles.artHeading}>
              <h1 className={styles.artsCultureTitle}>
                <span className={styles.artsTitle}>Art</span>
                <span className={styles.andTitle}>
                  <div>&</div>
                </span>
                <span className={styles.cultureTitle}>Culture</span>
              </h1>
            </div>
            <div className={styles.artHeroBody}>
              <span>
                Maharashtra&apos;s rich tapestry of arts and crafts reflects the
                cultural diversity and historical depth of the region.{" "}
              </span>
              <span>
                Each piece, whether it is a delicately woven fabric or a
                meticulously carved artifact, tells a story of age-old
                traditions and skilled craftsmanship that have been passed down
                through generations.
              </span>
            </div>
            <div className={styles.imgContainer}>
              <div className={styles.artHeroImage}>
                <div className={styles.img1}>
                  <div className={styles.cardArtImage}>
                    <div className={styles.cardImage}>
                      <Image
                        src="/images/Art&Culture_page/potcode.webp"
                        alt=""
                        width={100}
                        height={100}
                        objectFit="contain"
                      />
                    </div>
                    <div className={styles.cardArtTitle}>Pottery</div>
                  </div>
                </div>
                <div className={styles.img2}>
                  {" "}
                  <div className={styles.cardArtImage}>
                    <div className={styles.cardImage}>
                      <Image
                        src="/images/Art&Culture_page/leather_mobile.webp"
                        alt=""
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className={styles.cardArtTitle}>Leather Works</div>
                  </div>
                </div>
                <div className={styles.img3}>
                  {" "}
                  <div className={styles.cardArtImage}>
                    <div className={styles.cardImage}>
                      <Image
                        src="/images/Art&Culture_page/warli_mobile.webp"
                        alt=""
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className={styles.cardArtTitle}>Warli Painting</div>
                  </div>
                </div>
              </div>
              <div className={styles.artHeroImage}>
                <div className={styles.img4}>
                  {" "}
                  <div className={styles.cardArtImage}>
                    <div className={styles.cardImage}>
                      <Image
                        src="/images/Art&Culture_page/textile_mobile.webp"
                        alt=""
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className={styles.cardArtTitle}>Textiles</div>
                  </div>
                </div>
                <div className={styles.img5}>
                  <div className={styles.cardArtImage}>
                    <div className={styles.cardImage}>
                      <Image
                        src="/images/Art&Culture_page/bidiware_mobile.webp"
                        alt=""
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className={styles.cardArtTitle}>Bidriware</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.imgContainerMobile}>
              <div className={styles.cardArtImage}>
                <div className={styles.cardImage}>
                  <Image
                    src="/images/Art&Culture_page/pottery_mobile.webp"
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                <div className={styles.cardArtTitle}>Pottery</div>
              </div>

              <div className={styles.cardArtImage}>
                <div className={styles.cardImage}>
                  <Image
                    src="/images/Art&Culture_page/leather_mobile.webp"
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                <div className={styles.cardArtTitle}>Leather Works</div>
              </div>

              <div className={styles.cardArtImage}>
                <div className={styles.cardImage}>
                  <Image
                    src="/images/Art&Culture_page/warli_mobile.webp"
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                <div className={styles.cardArtTitle}>Warli Painting</div>
              </div>

              <div className={styles.cardArtImage}>
                <div className={styles.cardImage}>
                  <Image
                    src="/images/Art&Culture_page/textile_mobile.webp"
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                <div className={styles.cardArtTitle}>Textiles</div>
              </div>

              <div className={styles.cardArtImage}>
                <div className={styles.cardImage}>
                  <Image
                    src="/images/Art&Culture_page/bidiware_mobile.webp"
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                <div className={styles.cardArtTitle}>Bidriware</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ArtHero;
