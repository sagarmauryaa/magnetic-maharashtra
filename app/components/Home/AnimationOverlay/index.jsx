'use client';
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import './index.scss';
import { usePathname } from "next/navigation";
const AnimationOverlay = () => {
    const pathname = usePathname();
    useGSAP(() => {
        gsap.fromTo('.c-overlay', 
            {
                opacity: 1,
            },
            {
                opacity: 0,
                duration: 1.5,
                ease: 'power2.inOut'
            }
        )
    },[pathname])

    return (
        <div className='c-overlay'></div>
    )
}

export default AnimationOverlay