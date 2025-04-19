'use client';
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import './index.scss';
const AnimationOverlay = () => {
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
    })

    return (
        <div className='c-overlay'></div>
    )
}

export default AnimationOverlay