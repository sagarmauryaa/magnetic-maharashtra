import GSAP from "gsap";
import { splitByWords, calculateLines } from "../utils/splitText";
import { EventEmitter } from "events";

export default class Title extends EventEmitter {
	constructor({ element }) {
		super();
		this.element = element;
		this.elementInnerHTML = this.element.innerHTML;
		this.animationRepeat = this.element.getAttribute("observer-animation-repeat");
		this.animationDelay = this.element.getAttribute("animation-delay") ? parseFloat(this.element.getAttribute("animation-delay")) : 0;
		splitByWords(this.element);
		this.wordWrappers = this.element.querySelectorAll(".wordWrapper");
		this.lines = calculateLines(this.wordWrappers);
		this.words = this.element.querySelectorAll(".word");
		this.animateOut();
	}
	animateIn() {
		if (this.isAnimatedIn) return;
		this.isAnimatedIn = true;
		this.animationEntry = GSAP.timeline({ delay: this.animationDelay });
		this.animationEntry.set(this.element, {
			opacity: 1,
		});
		this.animateLines();
	}
	animateLines() {
		this.animationEntry.fromTo(
			this.words,
			{
				opacity: 0,
				skewX: -3,
				rotationZ: 6,
				y: 40,
			},
			{
				opacity: 1,
				skewX: 0,
				rotationZ: 0,
				y: 0,
				duration: 1.4,
				stagger: 0.05,
				ease: "expo.out",
				force3D: true,
			},
			0
		);
	}
	animateOut() {
		if (this.isAnimatedIn) {
			if (this.animationRepeat && this.animationRepeat === "true") {
				return;
			}
			/* 	this.element.innerHTML = this.elementInnerHTML; - avoid this because it causes layout shifts */
			/* 	this.element.classList.add("is-unobserved"); - this seemed to cause jerkyness in the scroll on old macbooks */
			this.emit("unobserve", this.element);
			return;
		}
		this.animationExit = GSAP.timeline();
		this.animationExit.set(this.element, { opacity: 0 });
		this.animationExit.set(
			this.words,
			{
				opacity: 0,
				y: 40,
				force3D: true,
			},
			0
		);
	}
	onResize() {
		this.elementsLines = calculateLines(this.elementLineSpans);
	}
}
