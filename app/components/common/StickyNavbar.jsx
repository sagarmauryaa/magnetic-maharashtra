"use client";

import { useState, useEffect, useRef, useContext } from "react";

import styles from "./StickyNavbar.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FlyoutLink from "./FlyoutLink";
// import { AppContext } from "../../App";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
// const menuItems = {
//   Business: "Business",
//   Tourism: "Tourism",
//   art: "Art and Culture",
//   Incentives: "Incentives",
//   news: "News and Events",
// };

const menuItems = [
  {
    label: "Sectors",
    url: "#",
    subMenu: [
      { label: "Automobile", url: "/sectors/automobile" },
      { label: "Textile & Apparels", url: "/sectors/textile" },
      { label: "Aerospace & Defence", url: "/sectors/aerospace" },
      { label: "Gems & Jewellery", url: "/sectors/gem&jewellery" },
      { label: "Petroleum & Crude Products", url: "/sectors/petroleum" },
      { label: "IT/ITeS & Emerging Tech", url: "/sectors/emergingTech" },
      { label: "Toys & Games", url: "/sectors/toys&games" },
      { label: "Food Processing", url: "/sectors/food" },
      { label: "Chemicals", url: "/sectors/chemicals" },
      { label: "Pharma & Bulk Drugs", url: "/sectors/pharma&bulk" },
      { label: "Electronics & ESDM", url: "/sectors/electronics" },
      { label: "AI & Smart Manufacturing", url: "/aismartmanufacturing" },
    ],
  },
  {
    label: "Locations",
    url: "#",
    subMenu: [
      { label: "Mumbai", url: "/locations/mumbai" },
      { label: "Pune", url: "/locations/pune" },
      { label: "Nashik", url: "/locations/nashik" },
      {
        label: "Chhatrapati Sambhaji Nagar",
        url: "/locations/chhatrapatisambhajinagar",
      },
      { label: "Nagpur", url: "/locations/nagpur" },
    ],
  },
  { label: "Incentives", url: "/incentives" },
  {
    label: "Discover Maharashtra",
    url: "#",
    subMenu: [
      { label: "Tourism", url: "/tourism" },
      { label: "Art And Culture", url: "/artAndCulture" },
    ],
  },
  // { label: "News and Events", url: "/newsAndEvents" },
];
const StickyNavbar = () => {
  const menuRefs = useRef({});
  const [menuPositions, setMenuPositions] = useState({});

  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);

  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const scrollTimeoutRef = useRef(null);
  const pauseTimeoutRef = useRef(null);
  const [menuCloseTimeoutRef, setMenuCloseTimeoutRef] = useState(null);

  // const { setIsSectorInsightsSticky } = useContext(AppContext);

  // Use a small threshold to prevent minor scroll fluctuations from triggering visibility changes
  const scrollThreshold = 5;

  // Simplified scroll handler for more reliable behavior
  const handleScroll = () => {
    if (typeof window === undefined) return;

    const currentScrollY = window.scrollY;
    const currentPath = window.location.pathname;
    const isHomePage = currentPath === "/" || currentPath === "/artAndCulture";

    // Update isAtTop state
    setIsAtTop(currentScrollY === 0);

    // Set scrolling state to true
    setIsScrolling(true);

    // Determine scroll direction with threshold
    const isScrollingUp = lastScrollY - currentScrollY > scrollThreshold;
    const isScrollingDown = currentScrollY - lastScrollY > scrollThreshold;

    // Clear any existing pause timeout
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }

    // Clear any existing scroll timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    // Simple rules:
    // 1. At top (scrollY = 0): Hide navbar ONLY on homepage
    // 2. Scrolling up: Always show navbar
    // 3. Scrolling down past 20px: Show navbar initially
    // 4. Scrolling down past 100vh: Hide navbar

    if (currentScrollY === 0 && isHomePage) {
      // At the very top on homepage - hide navbar
      setIsVisible(false);
    } else if (currentScrollY === 0 && !isHomePage) {
      // At the very top on other pages - show navbar
      setIsVisible(true);
    } else if (isScrollingDown) {
      // When scrolling down, visibility depends on position
      if (currentScrollY > 20 && currentScrollY < window.innerHeight) {
        setIsVisible(true);
      } else if (currentScrollY >= window.innerHeight) {
        setIsVisible(false);
      }
    } else if (isScrollingUp) {
      // ALWAYS show navbar when scrolling up, regardless of position
      setIsVisible(true);
    }

    // Update last scroll position
    setLastScrollY(currentScrollY);

    // Reset active menu when scrolling
    setActiveMenu(null);

    // Set timeout to show navbar when scrolling pauses
    pauseTimeoutRef.current = setTimeout(() => {
      if (currentScrollY > 0 || (currentScrollY === 0 && !isHomePage)) {
        setIsVisible(true);
        // setIsSectorInsightsSticky(true);
      }
    }, 200);

    // Set timeout to detect when scrolling has stopped
    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
      // Show navbar when scrolling stops, except at top of homepage
      if (!(currentScrollY === 0 && isHomePage)) {
        setIsVisible(true);
        // setIsSectorInsightsSticky(false);
      }
    }, 100); // 500ms without scroll events is considered "stopped scrolling"
  };

  // Add touch event handlers for mobile devices
  const handleTouchStart = () => {
    // When user touches the screen, prepare for potential scroll
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
  };

  const handleTouchEnd = () => {
    // When touch ends, set a timeout to show navbar after a brief delay
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
      const currentScrollY = window.scrollY;
      const currentPath = window.location.pathname;
      const isHomePage = currentPath === "/";

      // Show navbar when touch ends, except at top of homepage
      if (!(currentScrollY === 0 && isHomePage)) {
        setIsVisible(true);
      }
    }, 100);
  };

  useEffect(() => {
    // Initial setup
    const initialScrollY = window.scrollY;
    const route = window.location.pathname;
    const isHomePage = route === "/";

    // Set initial isAtTop state
    setIsAtTop(initialScrollY === 0);

    // Set initial visibility
    if (initialScrollY === 0 && isHomePage) {
      // At top of homepage - hide navbar
      setIsVisible(false);
    } else {
      // Either not at top, or not on homepage - show navbar
      setIsVisible(true);
    }

    // Set initial scroll position
    setLastScrollY(initialScrollY);

    // Add scroll event listener with passive option for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Add resize event listener to update viewport height calculations
    window.addEventListener("resize", handleScroll, { passive: true });

    // Add touch event listeners for mobile devices
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
      if (menuCloseTimeoutRef) {
        clearTimeout(menuCloseTimeoutRef);
      }
    };
  }, [menuCloseTimeoutRef]);

  useEffect(() => {
    const getMenuPositions = () => {
      const positions = {};
      menuItems.forEach((menu) => {
        if (menuRefs.current[menu.label]) {
          const rect = menuRefs.current[menu.label].getBoundingClientRect();
          positions[menu.label] = rect.left;
        }
      });
      setMenuPositions(positions);
    };

    // Get initial positions
    getMenuPositions();

    // Add resize listener to update positions when window is resized
    window.addEventListener("resize", getMenuPositions);

    // Cleanup
    return () => {
      window.removeEventListener("resize", getMenuPositions);
    };
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline();

    if (isMenuOpen) {
      tl.from(`.${styles.mobileInnerMenu}`, {
        height: "0dvh",
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: "",
      }).from(
        `.${styles.mobileLinks} a`,
        {
          yPercent: 100,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
        },
        "<0.35"
      );
    } else {
      tl.to(`.${styles.mobileInnerMenu}`, {
        height: "100dvh",
        duration: 0.8,
        ease: "power2.out",
      }).from(
        `.${styles.mobileLinks} a`,
        {
          yPercent: 100,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
        },
        "<0.35"
      );
    }
  }, [isMenuOpen]);
  let { push } = useRouter();

  const mobilehandleMenu = (e, menunav) => {
    e.preventDefault();

    if (
      menunav.label == "Sectors" ||
      menunav.label == "Locations" ||
      menunav.label == "Discover Maharashtra"
    ) {
      // console.log(menunav);
      e.preventDefault();
    } else {
      console.log("else:", menunav.url);
      push(menunav.url, { replace: true });
      setisMenuOpen(!isMenuOpen);
    }
  };

  const handleMenuEnter = (menu) => {
    // Clear any existing timeout immediately
    if (menuCloseTimeoutRef) {
      clearTimeout(menuCloseTimeoutRef);
      setMenuCloseTimeoutRef(null);
    }
    // Set active menu immediately
    setActiveMenu(menu.label);
  };

  const handleMenuLeave = () => {
    // Clear any existing timeout first
    if (menuCloseTimeoutRef) {
      clearTimeout(menuCloseTimeoutRef);
    }
    // Set new timeout for closing with a longer delay
    const timeout = setTimeout(() => {
      setActiveMenu(null);
    }, 500); // Increased delay to 500ms for smoother transition
    setMenuCloseTimeoutRef(timeout);
  };

  const handleFlyoutMenuEnter = () => {
    // Clear any existing timeout immediately
    if (menuCloseTimeoutRef) {
      clearTimeout(menuCloseTimeoutRef);
      setMenuCloseTimeoutRef(null);
    }
  };

  const handleFlyoutMenuLeave = () => {
    // Clear any existing timeout first
    if (menuCloseTimeoutRef) {
      clearTimeout(menuCloseTimeoutRef);
    }
    // Set new timeout for closing with a longer delay
    const timeout = setTimeout(() => {
      setActiveMenu(null);
    }, 500); // Increased delay to 500ms for smoother transition
    setMenuCloseTimeoutRef(timeout);
  };

  return (
    <header
      className={styles.StickyNavbar}
      style={{
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "white",
        color: "black",
        // padding: "10px",
        transition: "transform 0.3s ease-in-out",
        transform: isVisible ? "translateY(0)" : "translateY(-100%)",
        zIndex: 10000,
        willChange: "transform",
        isolation: "isolate",
      }}
    >
      <nav className={styles.navbar + " " + styles.onDesktop}>
        <div className={styles.logo}>
          <Link href="/">
            <div>
              <Image
                src="/images/StickyNavbar/Logo.svg"
                alt=""
                width={40}
                height={40}
              />
            </div>
            <div className={styles.logoText}>
              Magnetic <br />
              Maharashtra
            </div>
          </Link>
        </div>

        <div className={styles.navItems + " " + styles.onDesktop}>
          {menuItems.map((menu) => (
            <li
              key={menu.label}
              onMouseEnter={() => handleMenuEnter(menu)}
              onMouseLeave={handleMenuLeave}
              className={
                activeMenu === menu.label ? styles.activeMenu : styles.menuItem
              }
              style={
                menu.label === "Sectors" ||
                menu.label === "Locations" ||
                menu.label === "Discover Maharashtra"
                  ? { cursor: "default" }
                  : { cursor: "pointer" }
              }
            >
              <a
                ref={(el) => (menuRefs.current[menu.label] = el)}
                href={menu.url}
              >
                {menu.label}
              </a>

              {menu.subMenu && (
                <div
                  className={`${styles.desktopFlyoutMenu} ${menu.label
                    .toLowerCase()
                    .replace(/\s+/g, "-")}-menu`}
                  style={{
                    display: activeMenu === menu.label ? "flex" : "none",
                    height: activeMenu === menu.label ? "auto" : 0,
                    visibility:
                      activeMenu === menu.label ? "visible" : "hidden",
                    transition: "height 0.3s ease-in-out",
                  }}
                  onMouseEnter={handleFlyoutMenuEnter}
                  onMouseLeave={handleFlyoutMenuLeave}
                >
                  <div className={styles.desktopFlyoutMenuInner}>
                    <ul
                      style={{
                        padding: 0,
                        margin: 0,
                        listStyle: "none",
                        width: "100%",
                      }}
                    >
                      {menu.subMenu.map((menuInner, index) => (
                        <li
                          className={styles.desktopFlyoutMenuItem}
                          key={index}
                        >
                          <Link
                            href={menuInner.url}
                            style={{
                              paddingLeft: `${
                                menuPositions[menu.label] || 0
                              }px`,
                            }}
                            onClick={() => setActiveMenu(null)}
                          >
                            {menuInner.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </li>
          ))}
        </div>

        <div className={styles.contact + " " + styles.onDesktop}>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>

      <nav
        className={`${styles.mobileNavbar} ${
          isScrolling ? "is-scrolling" : ""
        }`}
      >
        <div
          className={`${styles.mobileNavContent} ${styles.onMobile} ${
            isAtTop ? "at-top" : ""
          }`}
        >
          <div className={`${styles.logo} ${isAtTop ? "logo-at-top" : ""}`}>
            <Link href="/">
              <div>
                <Image
                  src="/images/StickyNavbar/Logo.svg"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div>
                Magnetic <br />
                Maharashtra
              </div>
            </Link>
          </div>
          <button
            onClick={() => {
              setisMenuOpen(!isMenuOpen);
            }}
          >
            <Image
              src="/images/StickyNavbar/menu.svg"
              alt=""
              width={30}
              height={30}
            />
          </button>
        </div>
        {isMenuOpen && (
          <div className={styles.mobileInnerMenu}>
            <div
              className={`${styles.mobileNavContent} ${styles.onMobile} ${
                isAtTop ? "at-top" : ""
              }`}
            >
              <div className={`${styles.logo} ${isAtTop ? "logo-at-top" : ""}`}>
                <Link href="/">
                  <div>
                    <Image
                      src="/images/StickyNavbar/whiteLogo.svg"
                      alt=""
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    Magnetic <br />
                    Maharashtra
                  </div>
                </Link>
              </div>
              <button
                onClick={() => {
                  setisMenuOpen(!isMenuOpen);
                }}
              >
                <Image
                  src="/images/StickyNavbar/close.svg"
                  alt=""
                  width={30}
                  height={30}
                />
              </button>
            </div>
            <div className={styles.mobileLinks}>
              <div>
                {menuItems.map((menu) => {
                  return (
                    <li
                      key={menu.label}
                      onClick={(e) => mobilehandleMenu(e, menu)}
                    >
                      {menu?.subMenu ? (
                        <a style={{ width: "100%" }}>
                          <FlyoutLink
                            menuItem={menu.subMenu}
                            menu={menu.label}
                            setisMenuOpen={setisMenuOpen}
                            isMenuOpen={isMenuOpen}
                          >
                            {menu.label}
                          </FlyoutLink>
                        </a>
                      ) : (
                        <Link href={menu.url}>{menu.label}</Link>
                      )}
                    </li>
                  );
                })}
              </div>
              <div className={styles.mobileContact}>
                {" "}
                <Link href="/contact">Contact</Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default StickyNavbar;
