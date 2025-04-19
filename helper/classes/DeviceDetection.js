class DeviceDetection {
	isTouchDevice() {
		if (!this.isTouchDeviceChecked) {
			this.isTouchDeviceChecked = true;
			this.isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
		}
		return this.isTouch;
	}
	isIpadTouchDevice() {
		return this.isTouchDevice() && !this.isPhone();
	}
	isPhone() {
		if (!this.isPhoneChecked) {
			this.isPhoneChecked = true;
			this.isPhoneCheck = document.documentElement.classList.contains("mobile");
		}
		return this.isPhoneCheck;
	}
	isDesktop() {
		return !this.isPhone();
	}
}

const DetectionManager = new DeviceDetection();

export default DetectionManager;
