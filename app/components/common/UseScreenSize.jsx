import React, { useState, useEffect } from "react";

const UseScreenSize = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Assuming 768px as mobile breakpoint

  useEffect(() => {
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
