import styles from "./cardAccordion.module.css";
import { useState } from "react";

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

const sectors = [
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

const locations = [
  { label: "Mumbai", url: "/locations/mumbai" },
  { label: "Pune", url: "/locations/pune" },
  { label: "Nashik", url: "/locations/nashik" },
  { label: "Chhatrapati Sambhaji Nagar", url: "/locations/aurangabad" },
  { label: "Nagpur", url: "/locations/nagpur" },
];

const accordianLinks = [
  { title: "Explore", inner: explore },
  { title: "Sectors", inner: sectors },
  { title: "Locations", inner: locations },
  { title: "Important Links", inner: importantLinks },
  { title: "Quick Links", inner: quickLinks },
];

const FooterAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className={styles.footerAccordionContainer}>
        <div className={styles.footerAccordionDivider}></div>
        {accordianLinks.map((item, index) => (
          <>
            <div
              className={`${styles.footerAccordionItem} ${
                activeIndex === index ? styles.active : ""
              }`}
              key={index}
            >
              <div
                className={styles.footerTitle}
                onClick={() => toggleAccordion(index)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => e.key === "Enter" && toggleAccordion(index)}
              >
                <span>{item.title}</span>
                {/* <img
                  style={{
                    transform:
                      activeIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                  src='/images/IncentivesPage/icon.svg'
                  alt='Arrow'
                /> */}
                <span
                  style={{
                    transform:
                      activeIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.73s ease",
                  }}
                >
                  {/* {activeIndex === index ? "−" : "+"} */}
                  {activeIndex === index ? (
                    <img src="/images/Footer/minus.svg" />
                  ) : (
                    <img src="/images/Footer/add.svg" />
                  )}
                </span>
              </div>
              <div
                className={`${styles.footerAccordionContent} ${
                  activeIndex === index ? styles.show : ""
                }`}
              >
                <div className={styles.footerCardsContainer}>
                  {item.inner.map((card, cardIndex) => (
                    <div key={cardIndex}>
                      <a href={card.url}>{card.label}</a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.footerAccordionDivider}></div>
          </>
        ))}
      </div>
    </>
  );
};

export default FooterAccordion;
