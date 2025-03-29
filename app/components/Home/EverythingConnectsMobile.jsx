import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  { text: "Airports", imageIndex: 0 },
  { text: "Sea Ports", imageIndex: 1 },
  { text: "Roads", imageIndex: 2 },
  { text: "Everything", imageIndex: 2 },
  { text: "Yes. Everything", imageIndex: 2 },
];

// CSS for image spacing
const imageSpacing = {
  marginRight: "4px",
};

const EverythingConnectsMobile = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!isAnimating) {
      const timeout = setTimeout(() => {
        setIsAnimating(true);
        setTimeout(() => {
          setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
          setIsAnimating(false);
        }, 1000); // Duration of the exit animation
      }, 2000); // Wait time before starting next animation

      return () => clearTimeout(timeout);
    }
  }, [activeIndex, isAnimating]);

  return (
    <div className="everything-wrapper">
      <section className="everything-content-section">
        <div className="everything-text-content">
          <h2 className="everything-heading">Everything Just</h2>

          {/* Animated Word Section */}
          <h1 className="everything-animated-heading">
            Connects.&nbsp;
            <div className="everything-marquee-wrapper">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  className="everything-marquee"
                  initial={{ y: 50 }}
                  animate={{ y: 0 }}
                  exit={{ y: -50 }}
                  transition={{
                    duration: 0.5,
                    ease: "linear",
                  }}
                  onAnimationStart={() => setIsAnimating(true)}
                  onAnimationComplete={() => setIsAnimating(false)}
                >
                  {slides[activeIndex].text}
                </motion.div>
              </AnimatePresence>
            </div>
          </h1>

          <div className="everything-description">
            <p>
              Airports, roads, and seaports link Maharashtra seamlessly to India
              and the world, fueling business growth.
            </p>
          </div>
        </div>

        {/* Image Animation */}
        <div className="everything-image-content">
          <AnimatePresence mode="wait">
            {slides[activeIndex].imageIndex === 0 && (
              <motion.div
                key="airports"
                className="single-image airportsImg"
                style={imageSpacing}
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <img src="/images/Everything/air.webp" alt="Airports" />
              </motion.div>
            )}

            {slides[activeIndex].imageIndex === 1 && (
              <motion.div
                key="seaports"
                className="single-image seaportsImg"
                style={imageSpacing}
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <img src="/images/Everything/sea.webp" alt="Seaports" />
              </motion.div>
            )}

            {slides[activeIndex].imageIndex === 2 && (
              <motion.div
                key="roads"
                className="single-image roadImg"
                style={imageSpacing}
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <img src="/images/Everything/road.webp" alt="Roads" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default EverythingConnectsMobile;
