'use client';
 
if (typeof window !== 'undefined') {
    window.scrollPosition = 0;
}

export const disableScroll = () => {
    const body = typeof document !== 'undefined' ? document.body : null;
    const main = document.querySelector('main');
    if (!body || !main) return;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    body.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
    body.setAttribute("data-scroll-locked", 'true');
    main.setAttribute('inert', '');
};

export const enableScroll = () => {
    const body = typeof document !== 'undefined' ? document.body : null;
    const main = document.querySelector('main');
    if (!body || !main) return;
    body.removeAttribute("data-scroll-locked");
    body.style.removeProperty('--scrollbar-width');
    main.removeAttribute('inert');
};

