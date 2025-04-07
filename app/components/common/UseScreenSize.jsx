import { useState, useEffect } from "react";

const UseScreenSize = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set initial value after component mounts
    setIsMobile(window.innerWidth <= 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};
export default UseScreenSize;
