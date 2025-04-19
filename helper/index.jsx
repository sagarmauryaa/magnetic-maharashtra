"use client";

import dynamic from "next/dynamic";
import AnimationObserver from "@/helper/animations/AnimationObserver";

// Dynamically import components (client-side only)
const MotionObserver = dynamic(() => import("@/helper/MotionObserver").then((mod) => mod.default), { ssr: false, loading: () => null }); 

// Title is instantiated as a class, not used as a React component 

const Helper = () => {
	return (
		<> 
			<MotionObserver /> 
			<AnimationObserver/>
			{/* Title is not a React component, so it cannot be used here */}
		</>
	);
};

export default Helper;
