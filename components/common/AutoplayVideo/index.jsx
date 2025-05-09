'use client';
import { useEffect, useRef } from "react";
 
const AutoplayVideo = ({
    desktopSrc,
    mobileSrc,
    poster,
    basePath = "",
    wrapperClass = "",
    videoClass = "",
    preload = ""
}) => { 
    const videoRef = useRef(null);
    const isClient = typeof window !== "undefined";

    useEffect(() => {
        if (!isClient) return;

        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.intersectionRatio > 0.01) { // Changed from 0.1 to 0.01 (1%)
                    video.play().catch((error) => console.warn("Auto-play blocked:", error));
                } else {
                    video.pause();
                }
            },
            { threshold: 0.01 } // Changed from 0.5 to 0.01 to detect 1% visibility
        );

        observer.observe(video);
        return () => observer.disconnect();
    }, [isClient]);

    if (!desktopSrc) return null;

    return (
        <div className={wrapperClass}
        >
            <video
                ref={videoRef}
                className={videoClass}
                poster={basePath + poster}
                controls={false}
                loop={true}
                controlsList="nodownload noplaybackrate"
                disablePictureInPicture
                width={"100%"}
                height={"100%"}
                muted={true}
                playsInline={true}
                preload={preload}
            >
                {desktopSrc && mobileSrc ? (
                    <>
                        <source src={basePath + desktopSrc} media="(min-width: 768px)" />
                        <source src={basePath + mobileSrc} media="(max-width: 768px)" />
                    </>
                ) : desktopSrc ? (
                    <source src={desktopSrc} />
                ) : null}
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default AutoplayVideo;
