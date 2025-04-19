import { EventEmitter } from "events";
export default class Video extends EventEmitter {
	constructor({ element }) {
		super();
		this.video = element;
		this.videoContainer = this.video.closest(".-videoContainer");
		this.animateOut();
		this.videoContainer.addEventListener("click", this.toggleVideoPlayState.bind(this));
		this.videoContainers = document.querySelectorAll(".-videoContainer");
	}
	animateIn() {
		if (this.isAnimatedIn) return;
		this.isAnimatedIn = true;
		if (this.videoContainer.hasAttribute("muted")) {
			this.videoContainer.classList.toggle("is-playing");
			this.video.play();
		}
	}
	/**
	 * Play Video
	 */
	toggleVideoPlayState(event) {
		this.pauseOtherVideos();
		this.videoContainer.classList.toggle("is-playing");
		if (this.videoContainer.classList.contains("is-playing")) {
			this.video.play();
		} else {
			this.video.pause();
		}
	}
	/**
	 * Pause All Videos
	 */
	pauseOtherVideos() {
		this.videoContainers.forEach((videoContainer) => {
			const video = videoContainer.querySelector("video");
			if (video !== this.video) {
				videoContainer.classList.remove("is-playing");
				video.pause();
			}
		});
	}
	/**
	 * Pause Video
	 */
	pauseVideo(event) {
		if (this.videoContainer.classList.contains("is-playing")) {
			this.videoContainer.classList.remove("is-playing");
			this.video.pause();
		}
	}
	animateOut() {
		if (this.isAnimatedIn) {
			this.videoContainer.classList.remove("is-playing");
			this.video.pause();
			/* this.emit("unobserve", this.video); */
			return;
		}
	}
}
