import React, { useEffect, useRef } from "react";
import CSSClass from "./CSSClass";
import Title from "./Title";
import Paragraph from "./Paragraph";
import FadeInUp from "./FadeInUp";
import FadeInUpPara from "./FadeInUpPara";
import Video from "./Video";
import Gif from "./Gif";
import DeviceDetection from "../classes/DeviceDetection";
import { usePathname } from "next/navigation";


const AnimationObserver = () => {
  const elementRef = useRef();
  const pathname = usePathname();
  const animationSelectors = {
    cssClassAnimations: '[observer-animation="cssClass"]',
    titleAnimations: '[observer-animation="title"]',
    paragraphAnimations: '[observer-animation="paragraph"]',
    fadeInUpAnimations: '[observer-animation="fadeInUp"]',
    fadeInUpParaAnimations: '[observer-animation="fadeInUpPara"]',
    videoAnimations: '[observer-animation="video"]',
    gifAnimations: '[observer-animation="gif"]',
  };

  const elementsRef = useRef({});
  const animationInstancesRef = useRef([]);
  const intersectionObserverRef = useRef(null);

  useEffect(()=>{ 
    elementRef.current =  document.documentElement
  }, [pathname]);
  useEffect(() => {
    queryDOM();
    createObserver();
    observe();

    return () => {
      unobserve();
    };
  }, [elementRef, pathname]);

  const queryDOM = () => {
    const elements = {};
    for (const key in animationSelectors) {
      const selector = animationSelectors[key];
      elements[key] = Array.from(elementRef.current.querySelectorAll(selector));
    }
    elementsRef.current = elements;
  };

  const createObserver = () => {
    const deviceRootMargin = DeviceDetection.isPhone() ? -50 : -80;
    intersectionObserverRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.animationInstance.animateIn();
          } else {
            entry.target.animationInstance.animateOut();
          }
        });
      },
      {
        rootMargin: `0px 0px ${deviceRootMargin}px 0px`,
      }
    );
  };

  const observe = () => {
    const animationInstances = [];
    const elements = elementsRef.current;

    elements.cssClassAnimations.forEach((cssClassAnimationElement) => {
      cssClassAnimationElement.animationInstance = new CSSClass({ element: cssClassAnimationElement });
      animationInstances.push(cssClassAnimationElement.animationInstance);
      if (!cssClassAnimationElement.hasAttribute("trigger-manually")) {
        intersectionObserverRef.current.observe(cssClassAnimationElement);
      }
    });

    elements.titleAnimations.forEach((title) => {
      if (title.innerHTML.trim() !== "") {
        title.animationInstance = new Title({ element: title });
        animationInstances.push(title.animationInstance);
        if (!title.hasAttribute("trigger-manually")) {
          intersectionObserverRef.current.observe(title);
        }
      }
    });

    elements.paragraphAnimations.forEach((paragraph) => {
      if (paragraph.innerHTML.trim() !== "") {
        paragraph.animationInstance = new Paragraph({ element: paragraph });
        animationInstances.push(paragraph.animationInstance);
        intersectionObserverRef.current.observe(paragraph);
      }
    });

    elements.fadeInUpAnimations.forEach((fadeInUpElement) => {
      fadeInUpElement.animationInstance = new FadeInUp({ element: fadeInUpElement });
      animationInstances.push(fadeInUpElement.animationInstance);
      intersectionObserverRef.current.observe(fadeInUpElement);
    });

    elements.fadeInUpParaAnimations.forEach((fadeInUpElement) => {
      fadeInUpElement.animationInstance = new FadeInUpPara({ element: fadeInUpElement });
      animationInstances.push(fadeInUpElement.animationInstance);
      intersectionObserverRef.current.observe(fadeInUpElement);
    });

    elements.videoAnimations.forEach((videoElement) => {
      videoElement.animationInstance = new Video({ element: videoElement });
      animationInstances.push(videoElement.animationInstance);
      intersectionObserverRef.current.observe(videoElement);
    });

    elements.gifAnimations.forEach((gifElement) => {
      gifElement.animationInstance = new Gif({ element: gifElement });
      animationInstances.push(gifElement.animationInstance);
      intersectionObserverRef.current.observe(gifElement);
    });

    animationInstancesRef.current = animationInstances;
  };

  const unobserve = () => {
    animationInstancesRef.current.forEach((animationInstance) => {
      animationInstance.on("unobserve", (element) => {
        intersectionObserverRef.current.unobserve(element);
      });
    });
  };

  return null;
};

export default AnimationObserver;
