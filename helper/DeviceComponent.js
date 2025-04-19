'use client';
import { useEffect } from 'react';

const DeviceComponent = () => {
    useEffect(() => {
        if (typeof document !== "undefined") {

            const detectDevice = () => {
                if (navigator.userAgent.search("Windows") !== -1) {
                    document.body.classList.add("is-windows");
                }
                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent)) {
                    document.body.classList.add("is-phone");
                }
                if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
                    document.body.classList.add("using-touch");
                }
            };

            const onMouseMove = () => {
                document.body.classList.add("using-mouse");
                document.body.classList.remove("using-keyboard");
            };

            const onKeyDown = () => {
                document.body.classList.remove("using-mouse");
                document.body.classList.add("using-keyboard");
            };

            detectDevice();

            document.body.addEventListener("mousemove", onMouseMove);
            document.body.addEventListener("keydown", onKeyDown);

            return () => {
                document.body.removeEventListener("mousemove", onMouseMove);
                document.body.removeEventListener("keydown", onKeyDown);
            };
        }
    }, []);

    return null;
};

export default DeviceComponent;
