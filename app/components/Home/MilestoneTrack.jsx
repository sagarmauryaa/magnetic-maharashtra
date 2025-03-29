import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import Image from "next/image";
import { useRef } from "react";

function MilestoneTrack() {
  const trackRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trackRef.current,
        start: "top 85%",
        markers: false,
        toggleActions: "play none none none",
      },
    });

    // Create a more sophisticated reveal animation
    tl.from(trackRef.current, {
      clipPath: "inset(0 100% 0 0)",
      opacity: 0,
      duration: 2,
      ease: "power3.inOut",
    }).from(
      "#track-elements > *",
      {
        opacity: 0,
        x: -50,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=1.5"
    );
  });

  return (
    <div ref={trackRef} style={{ width: "100%", overflow: "scroll" }}>
      <div id="track-elements">
        <Image
          src="/images/Milestones/FullTrack.svg"
          alt="Milestone Track"
          style={{ width: "100%", height: "auto" }}
          width={1000}
          height={100}
        />
      </div>
    </div>
  );
}
export default MilestoneTrack;
