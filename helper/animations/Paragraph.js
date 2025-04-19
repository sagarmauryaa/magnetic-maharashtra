import GSAP from "gsap";
import { splitByWords, calculateLines } from "../utils/splitText";
import { EventEmitter } from "events";
export default class Paragraph extends EventEmitter {
	constructor({ element }) {
		super();
		this.element = element;
		this.elementInnerHTML = this.element.innerHTML;
		this.animationDelay = this.element.getAttribute("animation-delay") ? parseFloat(this.element.getAttribute("animation-delay")) : 0;
		splitByWords(this.element);
		this.wordWrappers = this.element.querySelectorAll(".wordWrapper");
		this.words = this.element.querySelectorAll(".word");
		this.lines = calculateLines(this.wordWrappers);
		this.animateOut();
	}
	animateIn() {
		if (this.isAnimatedIn) return;
		this.isAnimatedIn = true;
		this.animationEntry = GSAP.timeline({ delay: this.animationDelay });
		this.animationEntry.set(this.element, {
			opacity: 1,
		});
		this.animationEntry.fromTo(
			this.words,
			{
				opacity: 0,
				skewX: -30,
				y: 20,
			},
			{
				opacity: 1,
				skewX: 0,
				rotationZ: 0,
				y: 0,
				duration: 0.6,
				stagger: 0.019,
				ease: "sine.out",
				force3D: true,
			},
			0
		);
	}
	animateOut() {
		if (this.isAnimatedIn) {
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
				y: 20,
				force3D: true,
			},
			0
		);
	}
	onFontsLoaded() {
		this.elementsLines = calculateLines(this.elementLineSpans);
	}
	onResize() {
		this.elementsLines = calculateLines(this.elementLineSpans);
	}
}
