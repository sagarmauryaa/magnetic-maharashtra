import { EventEmitter } from "events";
export default class CSSClass extends EventEmitter {
	constructor({ element }) {
		super();
		this.element = element;
		this.animationRepeat = this.element.getAttribute("observer-animation-repeat");
		this.animationClasses = this.element.getAttribute("observer-animation-classes").replace(/\s+/g, "").split(",");
		this.animateOut();
	}
	animateIn() {
		if (this.isAnimatedIn) return;
		this.isAnimatedIn = true;
		if (this.animationClasses && this.animationClasses.length > 0) {
			this.animationClasses.forEach((animationClass) => {
				if (!this.element.classList.contains(animationClass)) this.element.classList.add(animationClass);
			});
			if (this.animationClasses.includes("animateImagesIn")) {
				setTimeout(() => {
					if (!this.element.classList.contains("-disableHover")) this.element.classList.add("permit-hovers");
				}, 1500);
			}
		}
	}
	animateOut() {
		if (this.isAnimatedIn) {
			if (this.animationRepeat && this.animationRepeat === "true") {
				return;
			}
			this.emit("unobserve", this.element);
			return;
		}
	}
}
