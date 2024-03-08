import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register the plugin
gsap.registerPlugin(ScrollTrigger);

const setupHorizontalScroll = (container) => {
    const totalWidth = container.scrollWidth;
    gsap.to(container, {
        x: () => `-${totalWidth - window.innerWidth}`,
        ease: "none",
        scrollTrigger: {
            trigger: container,
            start: "top top",
            end: () => `+=${totalWidth}`,
            scrub: true,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            markers: true // Add this line for debugging
        }
    });
};

export default setupHorizontalScroll;
