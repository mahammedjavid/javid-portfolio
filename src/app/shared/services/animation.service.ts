import { Injectable } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  constructor() {
    gsap.registerPlugin(ScrollTrigger, TextPlugin);
  }

  initializeHeroAnimation(element: HTMLElement) {
    const tl = gsap.timeline();
    
    // Animate the background first
    tl.from('.hero-bg', {
      opacity: 0,
      duration: 1.5,
      ease: 'power2.out'
    })
    
    // Animate the name with a typing effect
    .from('.name', {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power4.out'
    })
    
    // Animate the role with a typewriter effect
    .to('.designation', {
      duration: 1,
      text: {
        value: "Full Stack Developer",
        delimiter: ""
      },
      ease: "none"
    })
    
    // Animate tech stack icons
    .from('.tech-icon', {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      ease: 'back.out(1.7)',
      duration: 0.5
    });

    // Parallax effect on scroll
    gsap.to('.hero-bg', {
      scrollTrigger: {
        trigger: element,
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      },
      y: 100,
      opacity: 0.5
    });
  }

  initializeProjectCards() {
    const cards = gsap.utils.toArray('.project-card');
    const animations = new Map();
    
    cards.forEach((card: any, i) => {
      const cardTl = gsap.timeline({ paused: true });
      cardTl.to(card, {
        y: -10,
        scale: 1.02,
        boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
        duration: 0.2,
        ease: 'power2.out'
      });

      const onEnter = () => cardTl.play();
      const onLeave = () => cardTl.reverse();

      // Store handlers for potential cleanup
      animations.set(card, { timeline: cardTl, handlers: { enter: onEnter, leave: onLeave } });

      card.addEventListener('mouseenter', onEnter);
      card.addEventListener('mouseleave', onLeave);

      // Scroll animation
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top bottom-=100',
          end: 'top center',
          toggleActions: 'play none none reverse'
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: i * 0.1
      });
    });

    // Return cleanup function
    return () => {
      animations.forEach((anim, card) => {
        card.removeEventListener('mouseenter', anim.handlers.enter);
        card.removeEventListener('mouseleave', anim.handlers.leave);
        anim.timeline.kill();
      });
      animations.clear();
    };
  }

  initializeParticleBackground() {
    // Add particle background animation
    gsap.to('.particle', {
      duration: 'random(1, 3)',
      y: 'random(-100, 100)',
      x: 'random(-100, 100)',
      opacity: 'random(0.3, 0.7)',
      repeat: -1,
      yoyo: true,
      ease: 'none',
      stagger: {
        amount: 2,
        from: 'random'
      }
    });
  }

  initializeTerminalAnimation() {
    // Set initial states
    gsap.set(['.terminal-container', '.command-block', '.action-button', '.terminal-controls .control'], {
      opacity: 0,
      y: 30
    });

    const tl = gsap.timeline({
      defaults: {
        ease: 'power3.out'
      }
    });
    
    // Create proper animation sequence
    tl.to('.terminal-container', {
      opacity: 1,
      y: 0,
      duration: 0.4
    })
    .to('.terminal-controls .control', {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.4,
      stagger: 0.1,
      ease: 'back.out(1.7)'
    })
    .to(['.command-block', '.action-button'], {
      opacity: 1,
      y: 0,
      duration: 0.3,
      stagger: 0.1
    })
    .add(() => {
      const commands = [
        { el: '.command-block:nth-child(1) .command', text: "whoami" },
        { el: '.command-block:nth-child(2) .command', text: "ls -la /programming-language/" },
        { el: '.command-block:nth-child(3) .command', text: "./show-actions.sh" },
        { el: '.command-input .typed-text', text: "contact --send-message" }
      ];

      commands.forEach((cmd, index) => {
        tl.to(cmd.el, {
          duration: 0.3,
          text: {
            value: cmd.text,
            delimiter: ""
          },
          ease: "none"
        }, `-=0.${2 * index}`);
      });
    })
    .from('.tech-item', {
      y: 20,
      opacity: 0,
      duration: 0.4,
      stagger: 0.1,
      ease: 'back.out(1.7)'
    })
    .to('.action-button', {
      x: 0,
      duration: 0.4,
      stagger: 0.2,
      clearProps: 'all'
    });
    
    // Add hover animations for tech items
    gsap.utils.toArray('.tech-item').forEach((item: any) => {
      const hoverTl = gsap.timeline({ paused: true });
      hoverTl
        .to(item, {
          y: -5,
          duration: 0.2,
          ease: 'power2.out'
        })
        .to(item.querySelector('img'), {
          scale: 1.1,
          duration: 0.2,
          ease: 'power2.out'
        }, 0);

      item.addEventListener('mouseenter', () => hoverTl.play());
      item.addEventListener('mouseleave', () => hoverTl.reverse());
    });

    // Add hover animations for action buttons
    gsap.utils.toArray('.action-button').forEach((button: any) => {
      const hoverTl = gsap.timeline({ paused: true });
      hoverTl
        .to(button, {
          scale: 1.05,
          duration: 0.2,
          ease: 'power2.out'
        })
        .to(button.querySelector('i'), {
          rotate: 15,
          duration: 0.2,
          ease: 'power2.out'
        }, 0);

      button.addEventListener('mouseenter', () => hoverTl.play());
      button.addEventListener('mouseleave', () => hoverTl.reverse());
    });
  }
} 