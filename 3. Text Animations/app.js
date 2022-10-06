const tl = gsap.timeline({ 
    defaults: { duration: 0.75, ease: Power3.easeOut },
});

tl.fromTo('.hero-img', { 
    scale: 1.3,
    borderRadius: '0rem'
},
{
    scale: 1,
    borderRadius: '2rem',
    delay: 0.35,
    duration: 2.5,
    ease: Elastic.easeOut.config(1.5, 1) 
});

// Requires the span container of this text to have a block display for the movement to work
tl.fromTo('.cta1', { x: '100%', opacity: 0 }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo('.cta3', { x: '-100%', opacity: 0 }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo('.cta2', { y: '100%', opacity: 0 }, { y: 0, opacity: 1 }, "<20%");
tl.fromTo('.cta4', { x: '100%', opacity: 0 }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo('.cta6', { x: '-100%', opacity: 0 }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo('.cta5', { y: '100%', opacity: 0 }, { y: 0, opacity: 1 }, "<20%");

tl.fromTo('.cta-btn', { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, "<");