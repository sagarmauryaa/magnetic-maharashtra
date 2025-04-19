import { EventEmitter } from "events";
export default class Gif extends EventEmitter {
	constructor({ element }) {
		super();
		this.gif = element;
		this.gifSrc = this.gif.dataset.src;
		let image = new Image();
		image.src = this.gifSrc;
	}
	animateIn() {
		if (this.isAnimatedIn) return;
		this.isAnimatedIn = true;
		setTimeout(() => {
			this.gif.src = this.gifSrc;
		}, 500);
	}
	animateOut() {
		if (this.isAnimatedIn) {
			this.emit("unobserve", this.gif);
			return;
		}
	}
}
