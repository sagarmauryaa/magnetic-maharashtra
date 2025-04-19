"use client";
import { useEffect } from "react";

const ViewportProvider = () => {
    useEffect(() => {
        const setCSSVariables = () => {
            const width = Math.floor(document.documentElement.getBoundingClientRect().width);
            const height = window.innerHeight; // No need for a check, runs only on the client
            document.documentElement.style.setProperty("--w-viewport", `${width}px`);
            document.documentElement.style.setProperty("--h-viewport", `${height}px`);
        };

        setCSSVariables();

        const resizeObserver = new ResizeObserver(setCSSVariables);
        resizeObserver.observe(document.documentElement);

        return () => resizeObserver.disconnect();
    }, []);

    return null;
};

export default ViewportProvider;
