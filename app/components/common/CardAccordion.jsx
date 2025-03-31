"use client";

import { useGSAP } from "@gsap/react";
import styles from "./cardAccordion.module.css";
import { useRef, useState } from "react";
import gsap from "gsap/all";

const CardAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRef = useRef([]);
  const accordionItems = [
    {
      title: "Financial Incentives",
      cards: [
        {
          image: "/images/IncentivesPage/rebate_on_state_levies.webp",
          title: "Rebate on State Levies",
          description:
            "Get rebates on state taxes to reduce your operational costs and enhance profitability.",
        },
        {
          image: "/images/IncentivesPage/capital_investment_subsidies_.webp",
          title: "Capital Investment Subsidies",
          description:
            "Receive financial backings for your initial capital expenditure to lower entry barriers.",
        },
        {
          image: "/images/IncentivesPage/co_working_spaces_.webp",
          title: "Interest Rate Subsidy",
          description:
            "Reduce your borrowing costs with subsidized interest rates on business loans.",
        },
        {
          image:
            "/images/IncentivesPage/logistics_and_supply_chain_support.webp",
          title: "Export Promotion Subsidy",
          description:
            "Financial support for businesses that are entering international markets, helping to cover marketing and export-related expenses.  ",
        },
      ],
    },
    {
      title: "Sector-Specific Support",
      cards: [
        {
          image: "/images/IncentivesPage/biotechnology_firms.webp",
          title: "Biotechnology Firms",
          description:
            "Tailored support for biotech firms, including subsidies for research and development and collaboration with universities.",
        },
        {
          image: "/images/IncentivesPage/automotive_industry_advancements.webp",
          title: "Automotive Industry Advancements",
          description:
            "Incentives for auto manufacturers and component suppliers, including grants for adopting green technologies.",
        },
        {
          image: "/images/IncentivesPage/information_technology.webp",
          title: "Information Technology",
          description:
            "Special zones for IT companies with tax exemptions and infrastructure support.",
        },
        {
          image:
            "/images/IncentivesPage/infrastructure_and_startup_ecosystem.webp",
          title: "Tourism and Hospitality",
          description:
            "Development grants and marketing support for projects that enhance Maharashtra's tourism potential.",
        },
      ],
    },
    {
      title: "Regional Focus",
      cards: [
        {
          image:
            "/images/IncentivesPage/vidarbha_and_marathwada_development.webp",
          title: "Vidarbha and Marathwada Development",
          description:
            "Enhanced incentives for businesses setting up in these less developed regions to stimulate economic growth.",
        },
        {
          image: "/images/IncentivesPage/konkan_belt_initiatives.webp",
          title: "Konkan Belt Initiatives",
          description:
            "Incentives for industries that settle in this coastal region, focusing on sustainable practices and tourism.",
        },
        {
          image: "/images/IncentivesPage/western_maharashtra_growth_plans.webp",
          title: "Western Maharashtra Growth Plans",
          description:
            "Support for agriculture and agro-based industries in this fertile region.",
        },
        {
          image: "/images/IncentivesPage/urban_renewal_projects.webp",
          title: "Urban Renewal Projects",
          description:
            "Incentives for businesses participating in urban redevelopment and smart city projects.",
        },
      ],
    },
    {
      title: "Infrastructure and Startup Ecosystem",
      cards: [
        {
          image: "/images/IncentivesPage/industrial_parks.webp",
          title: "Industrial Parks",
          description:
            "Plug-and-play facilities in designated industrial areas, complete with regulatory support and utility setups.",
        },
        {
          image: "/images/IncentivesPage/capital_investment_subsidies_.webp",
          title: "Technology Incubators",
          description:
            "Institutions that provide startups with technical advice, lab space, and access to high-tech resources.",
        },
        {
          image: "/images/IncentivesPage/co_working_spaces_.webp",
          title: "Co-Working Spaces",
          description:
            "Subsidized co-working spaces available across major cities, fostering collaboration among entrepreneurs.",
        },
        {
          image:
            "/images/IncentivesPage/logistics_and_supply_chain_support.webp",
          title: "Logistics and Supply Chain Support",
          description:
            "Incentives for developing advanced logistics networks to improve efficiency and reduce costs.",
        },
      ],
    },
  ];

  useGSAP(() => {
    gsap.from(".accordionContainer", {
      yPercent: 50,
      opacity: 0,
      duration: 0.65,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".accordion-container",
        start: "top bottom",
        end: "bottom center",
        markers: false,
      },
    });
  });

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);

    if (activeIndex === index) {
      cardRef.current[index]?.scrollTo(0, 0);
    }

    if (activeIndex !== index && index !== null) {
      const element = cardRef.current[index];
      if (element) {
        const headerOffset = 70;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <>
      <div className={styles.accordionContainer}>
        {accordionItems.map((item, index) => (
          <>
            <div
              className={`${styles.accordionItem} ${
                activeIndex === index ? "active" : ""
              }`}
              key={index}
            >
              <div
                className={styles.accordionHeader}
                onClick={() => toggleAccordion(index)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => e.key === "Enter" && toggleAccordion(index)}
              >
                <h2>{item.title}</h2>
                <img
                  style={{
                    transform:
                      activeIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                  src="/images/IncentivesPage/icon.svg"
                  alt="Arrow"
                />
                {/* <span>{activeIndex === index ? "−" : "+"}</span> */}
              </div>
              <div
                ref={(el) => (cardRef.current[index] = el)}
                className={`${styles.accordionContent} ${
                  activeIndex === index ? styles.show : ""
                }`}
              >
                <div className={styles.cardsContainer}>
                  {item.cards.map((card, cardIndex) => (
                    <div className={styles.card} key={cardIndex}>
                      <img src={card.image} alt={card.title} />
                      <div className={styles.cardContent}>
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.accordionDivider}></div>
          </>
        ))}
      </div>
    </>
  );
};

export default CardAccordion;
