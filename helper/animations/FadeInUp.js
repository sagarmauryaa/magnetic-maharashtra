import GSAP from "gsap";
import { EventEmitter } from "events";

export default class FadeInUp extends EventEmitter {
	constructor({ element }) {
		super();
		this.element = element;
		this.animationDelay = this.element.getAttribute("animation-delay") ? parseFloat(this.element.getAttribute("animation-delay")) : 0;
		this.animateOut();
	}
	animateIn() {
		if (this.isAnimatedIn) return;
		this.isAnimatedIn = true;
		this.animationEntry = GSAP.timeline({ delay: this.animationDelay });
		this.animationEntry.add(() => {
			this.element.classList.add("fadeInUp");
		});
	}
	animateOut() {
		if (this.isAnimatedIn) {
			this.emit("unobserve", this.element);
			return;
		}
	}
}
