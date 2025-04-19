"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
const MotionObserver = () => {
	const pathname = usePathname();
	useEffect(() => {
		if (typeof document !== "undefined") {
			const onLoadElements = [...document.querySelectorAll("[data-motion='stagger-fade-on-load']")];
			console.log(onLoadElements);
			
			// if (onLoadElements.length === 0) return;
			setTimeout(() => {
				onLoadElements.forEach((el) => el.classList.add("motion-triggered"));
			});
			const observerElements = [...document.querySelectorAll("[data-motion='stagger-fade']")];
			if (observerElements.length === 0) return; 
			const observer = new IntersectionObserver(
				(entries, observerInstance) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							entry.target.classList.add("motion-triggered");
							observerInstance.unobserve(entry.target); //Unobserve once animated
						}
					});
				},
				{ root: null, threshold: 0, rootMargin: "0px 0px -100px 0px" } //Triggers 100px inside viewport
			);
			observerElements.forEach((el) => observer.observe(el)); 

			return () => observer.disconnect();
		}
	}, [pathname]);
	return null;
};
export default MotionObserver;
