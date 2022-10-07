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

// Split Text alternative
const logo = document.querySelector('.logo');
const letters = logo.textContent.split('');

logo.textContent = "";

letters.forEach((letter) => {
    logo.innerHTML += `<span class="letter">${letter}</span>`;
});
// We need to set the display of each letter to "inline-block" as otherwise the animations won't work on the spans
gsap.set('.letter', { display: 'inline-block' });
// Stagger makes the animations trigger one after another after with delays set depending on the value we pass into it
gsap.fromTo('.letter', { y: '100%' }, { y: 0, delay: 2, stagger: 0.05, ease: Back.easeOut.config(3) });