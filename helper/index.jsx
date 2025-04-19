"use client"; 
import dynamic from "next/dynamic";  
const MotionObserver = dynamic(() => import("@/helper/MotionObserver").then((mod) => mod.default), { ssr: false, loading: () => null }); 
const AnimationObserver = dynamic(() => import("@/helper/animations/AnimationObserver").then((mod) => mod.default), { ssr: false, loading: () => null }); 
const ViewportProvider = dynamic(() => import("@/helper/ViewportProvider").then((mod) => mod.default), { ssr: false, loading: () => null }); 
 

const Helper = () => {
	return (
		<> 
			<MotionObserver /> 
			<AnimationObserver/>
			<ViewportProvider /> 
		</>
	);
};

export default Helper;
