// Import the necessary GSAP libraries
import { gsap } from 'gsap';

// Function to display text messages in sequence and handle preloader removal
function handlePreloader() {
  const messages = [
    'Hello',
    'Bonjour',
    'स्वागत हे',
    'Ciao',
    'Olá',
    'おい',
    'Hallå',
    'Guten tag',
    'Hallo',
  ];

  const messageContainer = document.querySelector('.preloader-message');

  gsap.to(messageContainer, {
    duration: 1.5, // Total duration for all messages
    repeat: 0, // Play the animation once
    keyframes: messages.map((message, index) => ({
      innerText: message,
      delay: index === 0 ? 0.3 : 0.1, // Delay for each message
    })),
  });

  // Scale and opacity animation for the preloader
  gsap.to('.preloader', {
    duration: 1.5, // Duration for the animation
    opacity: 1, 
    ease: 'power4.easeOut', // Use a different ease for a dynamic effect
    onComplete: () => {
      // Remove the preloader element from the DOM
      const preloader = document.querySelector('.preloader');
      if (preloader) {
        preloader.remove();

        // After the preloader is done, trigger animations for header and hero sections
        animateHeader();
        animateHero();
      }
    },
  });
}

// Function to animate the header section
function animateHeader() {
  const header = document.querySelector('header');

  // Set initial styles (hidden at the top)
  gsap.set(header, { opacity: 0, y: -50 });

  // Animate the header with translateY and easing
  gsap.to(header, { opacity: 1, y: 0, duration: 1, ease: 'power4.out' });
}

// Function to animate the hero section
function animateHero() {
  const hero = document.querySelector('.hero');

  // Set initial styles (hidden at the top)
  gsap.set(hero, { opacity: 0, y: -50 });

  // Animate the hero section with translateY and easing
  gsap.to(hero, { opacity: 1, y: 0, duration: 1, ease: 'power4.out', delay: 0.5 });
}

// Export the function to make it accessible from other files if needed
export { handlePreloader };
