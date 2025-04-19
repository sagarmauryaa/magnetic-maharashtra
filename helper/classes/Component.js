import DeviceDetection from "./DeviceDetection";
import { EventEmitter } from "events";
export default class Component extends EventEmitter {
	constructor({ parentElement, singleOccurrenceElements, multipleOccurrenceElements }) {
		super();
		this.parentElement = parentElement;
		this.singleOccurrenceElements = {
			...singleOccurrenceElements,
		};
		this.multipleOccurrenceElements = {
			...multipleOccurrenceElements,
		};
		this.scroll = {
			last: 0,
			current: 0,
		};
		this.windowWidth = window.innerWidth;
		this.windowHeight = window.innerHeight;
		this.create();
		this.addEventListeners();
	}
	create() {
		this.queryDOM();
	}
	queryDOM() {
		if (this.parentElement instanceof window.HTMLElement) {
			this.element = this.parentElement;
		} else {
			this.element = document.querySelector(this.parentElement);
		}
		this.elements = {};
		for (const key in this.singleOccurrenceElements) {
			let selector = this.singleOccurrenceElements[key];
			if (selector instanceof window.HTMLElement || selector instanceof window.SVGElement) {
				this.elements[key] = selector;
			} else {
				this.elements[key] = this.element.querySelector(selector);
			}
		}
		for (const key in this.multipleOccurrenceElements) {
			let selector = this.multipleOccurrenceElements[key];
			if (selector instanceof window.NodeList) {
				this.elements[key] = Array.prototype.slice.call(selector);
			} else {
				this.elements[key] = Array.prototype.slice.call(this.element.querySelectorAll(selector));
			}
		}
	}
	/**
	 *  Get Design Resolution - Viewports below 1024 take on the mobile design
	 */
	get designResolution() {
		if (this.windowWidth < 1024) {
			return "phone";
		} else {
			return "desktop";
		}
	}
	/**
	 * Get Device
	 */
	get device() {
		if (DeviceDetection.isPhone()) {
			return "phone";
		} else if (DeviceDetection.isIpadTouchDevice()) {
			return "ipad";
		} else {
			return "desktop";
		}
	}
	/**
	 * On Scroll
	 */
	onScroll(lastScrollY, currentScrollY) {
		this.scroll.last = lastScrollY;
		this.scroll.current = currentScrollY;
	}
	/**
	 * On Resize
	 */
	onResize() {
		this.windowWidth = window.innerWidth;
		this.windowHeight = window.innerHeight;
	}
	/**
	 * Add Event Listeners
	 */
	addEventListeners() {}
}
