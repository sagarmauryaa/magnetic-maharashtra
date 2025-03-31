"use client";

import Link from "next/link";
import Flag from "./Flag";
import styles from "./Footer.module.css";
import FooterAccordion from "./FooterAccordion";

import UseScreenSize from "./UseScreenSize";

const explore = [
  { label: "Incentives", url: "/incentives" },
  { label: "Tourism ", url: "/tourism" },
  { label: "Art and Culture", url: "/artAndCulture" },
];

const importantLinks = [
  { label: "MIDC Official Website", url: "/midcOfficialWebsite" },
  { label: "Maharashtra Tourism", url: "/maharashtraTourism" },
  { label: "Incredible India ", url: "/incredibleIndia " },
  { label: "Ease of Doing Business", url: "/easeofDoingBusiness" },
];

const quickLinks = [
  { label: "Tenders", url: "/tenders" },
  { label: "Contact Us", url: "/contact" },
  { label: "News & Events", url: "/newsAndEvents " },
  { label: "Public Notices", url: "/publicNotices" },
  { label: "FAQs", url: "/FAQs" },
];

const Sectors = [
  { label: "Automobile", url: "sectors/automobile" },
  { label: "Textile & Apparels", url: "sectors/textile" },
  { label: "Aerospace & Defence", url: "sectors/aerospace" },
  { label: "Gems & Jewellery", url: "sectors/gem&jewellery" },
  { label: "Petroleum & Crude Products", url: "sectors/petroleum" },
  { label: "IT/ITeS & Emerging Tech", url: "sectors/emergingTech" },
  { label: "Toys & Games", url: "sectors/toys&games" },
  { label: "Food Processing", url: "sectors/food" },
  { label: "Chemicals", url: "sectors/chemicals" },
  { label: "Pharma & Bulk Drugs", url: "sectors/pharma&bulk" },
  { label: "Electronics & ESDM", url: "sectors/electronics" },
  { label: "AI & Smart Manufacturing", url: "/aismartmanufacturing" },
];

const Location = [
  { label: "Mumbai", url: "/locations/mumbai" },
  { label: "Pune", url: "/locations/pune" },
  { label: "Nashik", url: "/locations/nashik" },
  {
    label: "Chhatrapati Sambhaji Nagar",
    url: "/locations/aurangabad",
  },
  { label: "Nagpur", url: "/locations/nagpur" },
];

function Footer() {
  const isMobile = UseScreenSize();
  return (
    <section
      className={styles.footerContainer}
      style={{
        paddingTop: isMobile ? "350px" : "1300px",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: isMobile ? "100%" : "100%",
          top: "0%",
          zIndex: -1,
          userSelect: "none",
          opacity: isMobile ? 1 : 1,
        }}
      >
        <Flag />
      </div>
      <div className={styles.footerLinks}>
        <div className={styles.footerLogo}>
          <img src="/images/Footer/Logo.svg" alt="Magnetic Maharashtra Logo" />
          <div>
            Magnetic <br />
            Maharashtra
          </div>
        </div>
        <div className={styles.footerExplore}>
          <div>Explore</div>
          {explore.map((menu, index) => {
            return (
              <li key={`explore-${index}`}>
                <Link href={menu.url}>{menu.label}</Link>
              </li>
            );
          })}
        </div>
        <div className={styles.footerExplore}>
          <div>Sectors</div>
          {Sectors.map((menu, index) => {
            return (
              <li key={`sector-${index}`}>
                <Link href={menu.url}>{menu.label}</Link>
              </li>
            );
          })}
        </div>
        <div className={styles.footerExplore}>
          <div>Locations</div>
          {Location.map((menu, index) => {
            return (
              <li key={`location-${index}`}>
                <Link href={menu.url}>{menu.label}</Link>
              </li>
            );
          })}
        </div>
        <div className={styles.footerImportantLinks}>
          <div>Important Links</div>
          {importantLinks.map((menu, index) => {
            return (
              <li key={`important-${index}`}>
                <Link href={menu.url}>{menu.label}</Link>
              </li>
            );
          })}
        </div>
        <div className={styles.footerQuickLinks}>
          <div>Quick Links</div>
          {quickLinks.map((menu, index) => {
            return (
              <li key={`quick-${index}`}>
                <Link href={menu.url}>{menu.label}</Link>
              </li>
            );
          })}
        </div>
      </div>
      <div className={styles.mobileContainer}>
        <div className={styles.mobileFooterLinks}>
          <div className={styles.footerLogo}>
            <img
              src="/images/Footer/Logo.svg"
              alt="Magnetic Maharashtra Logo"
            />
            <div>
              Magnetic <br />
              Maharashtra
            </div>
          </div>
          <FooterAccordion />
        </div>
      </div>
      <div className={styles.socialsFooter}>
        <div className={styles.footerSocials}>
          <div className={styles.footerLeft}>
            <Link href="/privacyPolicy">Privacy Policy</Link>
            <Link href="/disclaimer">Disclaimer</Link>
            <Link href="/sitemap">Sitemap</Link>
          </div>
          <div className={styles.footerRight}>
            <div>
              <img src="/images/Footer/facebook.svg" alt="Facebook" />
            </div>
            <div>
              <img src="/images/Footer/twitter.svg" alt="Twitter" />
            </div>
            <div>
              <img src="/images/Footer/instagram.svg" alt="Instagram" />
            </div>
            <div>
              <img src="/images/Footer/youtube.svg" alt="YouTube" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <div>
          Copyright © 2024 Government of Maharashtra. All Rights Reserved.
        </div>
        {/* <div>Website by Stuvio</div> */}
      </div>
    </section>
  );
}

export default Footer;
