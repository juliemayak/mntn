import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const headerAnimation = gsap
  .from('.header', {
    yPercent: -100,
    paused: true,
    duration: 0.2,
  })
  .progress(1);

ScrollTrigger.create({
  start: 'top top',
  end: 99999,
  toggleClass: { targets: '.header', className: 'header--scrolled' },
  onUpdate: (self) => {
    self.direction === -1 ? headerAnimation.play() : headerAnimation.reverse();
  },
});
