import AnimationObserver from "../animations/AnimationObserver";
import Header from "../components/Header";
import BottomNavBar from "../components/BottomNavBar";
import ImageLoader from "./ImageLoader";
import DeviceDetection from "./DeviceDetection";
import Footer from "../components/Footer";
import FooterFaqs from '../components/FooterFaqs';
import ShowcaseBanner from "../components/ShowcaseBanner";
import SubcategoryListing from "../components/SubcategoryListing";
import CategoryMenuSlider from '../components/CategoryMenuSlider'
import Reviews from "../components/Reviews";
import ProTips from "../components/ProTips";
import YouCanAlsoTry from "../components/YouCanAlsoTry";
import ForBestResults from "../components/ForBestResults";
import WorksBestWith from "../components/WorksBestWith";
import ProductDetail from "../components/ProductDetail";
import GetInspiration from "../components/GetInspiration";
import ArtworkPreview from "../components/ArtworkPreview";
import ArtworkshopBanner from "../components/ArtworkshopBanner";
import ArtContestBanner from "../components/ArtContestBanner";
import EditProfilePopup from "../pages/EditProfile/EditProfilePopup";
import TagInput from "../components/FormElements/TagInput";
import DropdownInput from "../components/FormElements/DropdownInput";
import TextareaInput from "../components/FormElements/TextareaInput";
import CommentSection from "../components/CommentSection";
// import SearchPopup from "../components/SearchPopup";
import Trending from "../components/Trending";
import SubMenu from "../components/SubMenu";
import GSAP from "gsap";
import Lottie from "lottie-web";
export default class Page {
  constructor({ pageId, parentElement, singleOccurrenceElements, multipleOccurrenceElements }) {
    this.pageId = pageId;
    this.parentElement = parentElement;
    this.singleOccurrenceElements = {
      ...singleOccurrenceElements,
      showcaseBanner: ".c-showcaseBanner",
      productDetail: ".c-productDetail",
      getInspiration: document.querySelector(".c-getInspiration"),
      header: document.querySelector(".c-headerWrapper"),
      headerCamlinLogo: document.querySelector(".c-header.-camlin .c-header__logo"),
      headerCamlinAnnouncement: document.querySelector(".c-header.-camlin .c-header__announcement"),
      headerCamelLogo: document.querySelector(".c-header.-camel .c-header__logo"),
      headerCamelSearchIcon: document.querySelector(".c-header.-camel .c-header__searchIcon"),
      footer: document.querySelector(".c-footer"),
      footerFaqs:document.querySelector(".c-footer__faqs"),
      bottomNavBar: document.querySelector(".c-bottomNavBar"),
      pageOverlay: document.querySelector(".c-overlay"),
      commentSection: ".c-commentSection",
      searchPopup: document.querySelector(".c-searchPopup"),
      subMenu: ".c-subMenu",
      scrollToTopBtn: ".scrollToTop",
      artworkshopBanner: ".c-artWorkBanner",
      artContestBanner: ".c-artcontest__landing",
    };
    this.multipleOccurrenceElements = {
      ...multipleOccurrenceElements,
      headerCamlinLinks: document.querySelectorAll(".c-header.-camlin .c-header__links>*"),
      headerCamelLinks: document.querySelectorAll(".c-header.-camel .c-header__navLink"),
      reviews: ".c-reviews",
      proTips: ".c-proTips",
      youCanAlsoTry: ".c-youCanAlsoTry",
      forBestResults: ".c-forBestResults",
      worksBestWith: ".c-worksBestWith",
      subcategoryListings: ".c-subcategoryListing",
      CategoryMenuSlider:".c-categoryMenu",
      artworkPreviews: ".c-artworkPreview",
      commentPreviews: ".c-commentSection__comment",

      artistPreviews: ".c-artistIntro__featured",
      editProfilePopups: document.querySelectorAll(".editProfilePopup__container"),
      cTooltips: ".c-tooltip",
      /* form elements */
      tagInputs: ".c-tagInput__wrapper",
      dropdownInputs: ".c-dropdownInput__wrapper",
      textareaInputs: ".c-textareaInput__wrapper",
      trending: ".c-trending",
      /* micro animation elements */
      microAnimEles: "[data-micro-anim]",
    };
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
    this.scroll = {
      last: 0,
      current: 0,
    };
  }
  /**
   * Create
   */
  create() {
    this.queryDOM();
    this.createComponents();
    this.animationObserver = new AnimationObserver();
    this.imageLoader = new ImageLoader();
    if (this.elements.microAnimEles.length > 0) {
      let options = {
        rootMargin: "0px",
        threshold: 1.0,
      };
      let watchMicroAnim = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let cEle = entry.target;
            Lottie.play(`${cEle.dataset.name}`);
            observer.unobserve(cEle);
          }
        });
      };

      let microAnimsObserver = new IntersectionObserver(watchMicroAnim, options);

      this.elements.microAnimEles.forEach((anim) => {
        this.microAnimInit(anim);
        if (anim.dataset.hover != "true") {
          microAnimsObserver.observe(anim);
        }
      });
    }
  }
  /**
   * Query DOM
   */
  queryDOM() {
    this.element = document.querySelector(this.parentElement);
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
   * Create Components
   */
  createComponents() {
    this.componentInstances = [];
    this.elements.getInspiration && this.componentInstances.push(new GetInspiration({ element: this.elements.getInspiration }));
    this.elements.header && this.componentInstances.push(new Header({ element: this.elements.header }));
    this.elements.footer && this.componentInstances.push(new Footer({ element: this.elements.footer }));
    this.elements.footerFaqs && this.componentInstances.push(new FooterFaqs({ element: this.elements.footerFaqs }));
    this.elements.bottomNavBar && this.componentInstances.push(new BottomNavBar({ element: this.elements.bottomNavBar }));
    this.elements.showcaseBanner && this.componentInstances.push(new ShowcaseBanner({ element: this.elements.showcaseBanner }));
    this.elements.productDetail && this.componentInstances.push(new ProductDetail({ element: this.elements.productDetail }));
    this.elements.commentSection && this.componentInstances.push(new CommentSection({ element: this.elements.commentSection }));
    // this.elements.searchPopup && this.componentInstances.push(new SearchPopup({ element: this.elements.searchPopup }));
    this.elements.subMenu && this.componentInstances.push(new SubMenu({ element: this.elements.subMenu }));
    this.elements.artworkshopBanner && this.componentInstances.push(new ArtworkshopBanner({ element: this.elements.artworkshopBanner }));
    this.elements.artContestBanner && this.componentInstances.push(new ArtContestBanner({ element: this.elements.artContestBanner }));
    this.elements.trending.forEach((element) => {
      this.componentInstances.push(new Trending({ element }));
    });
    this.elements.subcategoryListings.forEach((element) => {
      this.componentInstances.push(new SubcategoryListing({ element }));
    });
    this.elements.CategoryMenuSlider.forEach((element) => {
      this.componentInstances.push(new CategoryMenuSlider({ element }));
    });
    this.elements.reviews.forEach((element) => {
      this.componentInstances.push(new Reviews({ element }));
    });
    this.elements.proTips.forEach((element) => {
      this.componentInstances.push(new ProTips({ element }));
    });
    this.elements.youCanAlsoTry.forEach((element) => {
      this.componentInstances.push(new YouCanAlsoTry({ element }));
    });
    this.elements.forBestResults.forEach((element) => {
      this.componentInstances.push(new ForBestResults({ element }));
    });
    this.elements.worksBestWith.forEach((element) => {
      this.componentInstances.push(new WorksBestWith({ element }));
    });
    this.elements.artworkPreviews.forEach((element) => {
      this.componentInstances.push(new ArtworkPreview({ element }));
    });
    // this.elements.commentPreviews.forEach((element) => {
    //   this.componentInstances.push(new ArtworkPreview({ element }));
    // });
    this.elements.artistPreviews.forEach((element) => {
      this.componentInstances.push(new ArtworkPreview({ element }));
    });
    this.elements.editProfilePopups.forEach((element) => {
      this.componentInstances.push(new EditProfilePopup({ element }));
    });
    /* form elements */
    this.elements.dropdownInputs.forEach((element) => {
      this.componentInstances.push(new DropdownInput({ element }));
    });
    this.elements.tagInputs.forEach((element) => {
      this.componentInstances.push(new TagInput({ element }));
    });
    this.elements.textareaInputs.forEach((element) => {
      this.componentInstances.push(new TextareaInput({ element }));
    });
  }
  /**
   * Get Design Resolution
   */
  get designResolution() {
    if (this.windowWidth < 1024) {
      return "phone";
    } else {
      return "desktop";
    }
  }
  /**
   * Check if device is a phone
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
  onScroll() {
    this.scroll.last = this.scroll.current;
    this.scroll.current = window.pageYOffset;
    if (this.componentInstances) {
      for (let i = 0; i < this.componentInstances.length; i++) {
        this.componentInstances[i].onScroll(this.scroll.last, this.scroll.current);
      }
    }
  }
  /**
   * On Resize
   */
  onResize() {
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
    if (this.componentInstances) {
      for (let i = 0; i < this.componentInstances.length; i++) {
        this.componentInstances[i].onResize();
      }
    }
  }
  /**
   * initializ all the lotties
   * @param ele is element
   */
  microAnimInit(ele) {
    let fileName = ele.dataset.name;
    Lottie.loadAnimation({
      container: ele,
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: `assets/micro-animation/${fileName}.json`,
      name: fileName,
    });
  }
  /**
   * Stop or play lotties by their name
   * @param microAnim is element
   */
  playMicroAnim(microAnim) {
    let name = microAnim.dataset.name;
    Lottie.play(`${name}`);
  }
  pauseMicroAnim(microAnim) {
    let name = microAnim.dataset.name;
    Lottie.stop(`${name}`);
  }
  /**
   * Add Event Listeners
   */
  addEventListeners() {
    if (this.elements.scrollToTopBtn) {
      this.elements.scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 1800) {
          GSAP.to(this.elements.scrollToTopBtn, {
            autoAlpha: 1,
            duration: 0.1,
          });
        } else {
          GSAP.to(this.elements.scrollToTopBtn, {
            autoAlpha: 0,
            duration: 0.1,
          });
        }
      });
    }
    if (this.elements.cTooltips.length > 0 && window.innerWidth < 1024) {
      this.elements.cTooltips.forEach((tooltip) => {
        tooltip.addEventListener("click", function (e) {
          e.stopPropagation();
          document.querySelectorAll(".c-tooltip").forEach((tt) => (tt.classList.contains("is-opened") ? tt.classList.remove("is-opened") : null));
          tooltip.classList.toggle("is-opened");
        });
      });
      document.body.addEventListener("click", () => {
        this.elements.cTooltips.forEach((tooltip) => {
          if (tooltip.classList.contains("is-opened")) {
            tooltip.classList.remove("is-opened");
          }
        });
      });
    }
    if (this.elements.microAnimEles.length > 0) {
      this.elements.microAnimEles.forEach((anim) => {
        if (anim.dataset.hover == "true" && (!document.documentElement.classList.contains("tablet") || !document.documentElement.classList.contains("mobile"))) {
          let cParent = anim.parentElement;
          cParent.addEventListener("mouseover", this.playMicroAnim.bind(this, anim));
          cParent.addEventListener("mouseout", this.pauseMicroAnim.bind(this, anim));
        }
      });
    }

    // // Select the node that will be observed for mutations
    // const commentSection = document.querySelector(".c-commentSection__listing");

    // if (commentSection) {
    //   // Options for the observer (which mutations to observe)
    //   const config = { attributes: true, childList: true, subtree: true };

    //   // Callback function to execute when mutations are observed
    //   const callback = (mutationList, observer) => {
    //     for (const mutation of mutationList) {
    //       if (mutation.type === "childList" || mutation.type === "subtree") {

    //         setTimeout(() => {
    //           // new AnimationObserver();

    //           var comtOld = Array.from(this.elements.commentPreviews);
    //           var commentPreviewsNew = Array.from(document.querySelectorAll(".c-commentSection__comment"));

    //           var unquieCmt = commentPreviewsNew.filter((elementB) => !comtOld.includes(elementB));

    //           // this.componentInstances = [];
    //           // console.log("setting element instance", commentPreviewsNew);
    //           // console.log("setting element instance", unquieCmt);
    //           unquieCmt.forEach((element) => {
    //             // let dropdown = element.querySelector(".c-artworkPreview__dropdown");
    //             // if (dropdown) {
    //             //   dropdown.removeEventListener("click", null);
    //             // }
    //             // this.componentInstances.push(new ArtworkPreview({ element }));
    //           });
    //         }, 1500);
    //       }
    //     }
    //   };
    //   // Create an observer instance linked to the callback function
    //   const commentObserver = new MutationObserver(callback);

    //   // Start observing the target node for configured mutations
    //   commentObserver.observe(commentSection, config);
    // }
  }
}
