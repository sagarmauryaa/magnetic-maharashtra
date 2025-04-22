'use client';
 
if (typeof window !== 'undefined') {
    window.scrollPosition = 0;
}

export const disableScroll = () => {
    const body = typeof document !== 'undefined' ? document.body : null;
    const main = document.querySelector('main');
    if (!body || !main || body.hasAttribute("data-scroll-locked")) return;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth; 
    
    body.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
    body.setAttribute("data-scroll-locked", 'true');
    main.setAttribute('inert', ''); 
    document.documentElement.style.overflow="hidden";
    document.documentElement.style.paddingInlineEnd ="var(--scrollbar-width)";
    document.body.setAttribute("data-lenis-prevent", "true");
};

export const enableScroll = () => {
    const body = typeof document !== 'undefined' ? document.body : null;
    const main = document.querySelector('main');
    if (!body || !main) return;
    body.removeAttribute("data-scroll-locked");
    body.style.removeProperty('--scrollbar-width');
    main.removeAttribute('inert');
    document.documentElement.style.overflow="";
    document.documentElement.style.paddingInlineEnd ="";
    document.body.setAttribute("data-lenis-prevent", "false");
};
