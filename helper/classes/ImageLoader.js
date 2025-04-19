import DeviceDetection from "../classes/DeviceDetection";
export default class ImageLoader {
  constructor() {
    this.deviceType = this.getDeviceType();
    this.isResizing = false;
    this.imgList = [];
    this.miscellaneousImages = [];
    this.loadImagesToDOMSerially(this.getImgList());
    this.addResizeListener();
  }
  reinit() {
    this.deviceType = this.getDeviceType();
    this.loadImagesToDOMParallely(this.getImgList());
  }
  getDeviceType() {
    if (DeviceDetection.isPhone()) {
      return "mobile";
    } else {
      return "desktop";
    }
  }
  getImgList() {
    this.imgList = [];
    var imageElements = Array.prototype.slice.call(document.querySelectorAll("[postload-image]"));
    this.imgList = imageElements.filter((imageEl) => {
      if (imageEl.hasAttribute("common-src")) {
        imageEl.dataset.src = imageEl.getAttribute("common-src");
        return true;
      }
      if (imageEl.hasAttribute("mobile-src") && this.deviceType === "mobile") {
        imageEl.dataset.src = imageEl.getAttribute("mobile-src");
        return true;
      }
      if (imageEl.hasAttribute("desktop-src") && this.deviceType === "desktop") {
        imageEl.dataset.src = imageEl.getAttribute("desktop-src");
        return true;
      }
      return false;
    });
    if (this.imgList.length === 0) {
      var emptyImgEl = new Image();
      emptyImgEl.dataset.src = "assets/common/images/empty.png";
      return [emptyImgEl];
    }
    return this.imgList;
  }
  loadImagesToDOMSerially(images, index) {
    var _this = this;
    index = index || 0;
    if (images.length > index) {
      var imgEl = images[index];
      var img = new Image();
      img.src = imgEl.dataset.src;
      img.onerror = function () {
        console.log("image loading error:: " + img.src);
        img.src = "assets/common/images/empty.png";
      };
      img.onload = () => {
        switch (imgEl.tagName) {
          case "IMG":
            imgEl.src = img.src;
            break;
          default:
            imgEl.style.backgroundImage = `url(${img.src})`;
        }
        imgEl.classList.add("is-loaded");
        this.loadImagesToDOMSerially(images, index + 1);
      };
    }
  }
  onResize() {
    this.loadImagesToDOMSerially(this.getImgList());
  }
  addResizeListener() {
    window.addEventListener(
      "resize",
      () => {
        window.clearTimeout(this.isResizing);
        this.isResizing = setTimeout(() => {
          if (this.deviceType !== this.getDeviceType()) {
            this.deviceType = this.getDeviceType();
            this.onResize();
          }
        });
      },
      false
    );
  }
}
