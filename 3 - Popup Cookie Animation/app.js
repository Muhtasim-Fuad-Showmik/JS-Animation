// Define only the endpoint of an animation from its initial state as defined by css
// gsap.to('.text', { y: 100, opacity: 0, duration: 1 })

// Define starting and ending point of an animation
// gsap.fromTo('.text', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 })

/* 
   Define animation using timeline and add default configurations
   ease values can be found if you google "gsap ease" and enter the first link.
   The ease visualizer shows animation styles and the necessary settings at the
   bottom which can be customized from the web interface and then copied into
   your own code.
*/
const tl = gsap.timeline({ defaults: { duration: 0.75, ease: Power1.easeOut }});

// timeline configurations are being added to every element under the tl variable
tl.fromTo('.cookie-container', { scale: 0 }, { scale: 1, ease: Elastic.easeOut.config( 1, 0.4 ), duration: 1.5 });
// The '<50%' parameter indicates that the animation should being halfway through the previous animation
tl.fromTo('.cookie', { opacity: 0, x: -50, rotation: '-45deg' }, { opacity: 1, x: 0, rotation: '0deg' }, '<50%');
/*
   The '<' parameter indicates that the animation should begin along with the previous animation.
   Without it, the animation would wait for the previous one to end before it begins.
*/
tl.fromTo('.text', { x: 30, opacity: 0 }, { x: 0, opacity: 1 }, '<');

// Implementing the cookie jump animation
tl.fromTo('.cookie', { y: 0, rotation: '0deg' }, { y: -20, rotation: '-20deg', yoyo: true, repeat: -1 });
tl.fromTo('#Crumbs', { y: 0, x: 0 }, { y: -15, x: 10, yoyo: true, repeat: -1 }, '<');

// Fading the cookie elements out on click of the button
const button = document.querySelector('button');

button.addEventListener('click', () => {
   gsap.to('.cookie-container', { opacity: 0, y: 100, duration: 0.75, ease: Power1.easeOut });
});