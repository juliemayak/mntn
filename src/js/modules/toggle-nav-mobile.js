import gsap from 'gsap';
const burger = document.querySelector('[menu-burger]');
const navMobile = document.querySelector('.nav-mobile');

function toggleNavMobile() {
  if (!navMobile?.classList.contains('active')) {
    navMobile?.classList.add('active');
    gsap.to('.line-1', {
      duration: 0.5,
      rotate: '45',
      y: 5,
    });
    gsap.to('.line-2', {
      duration: 0.5,
      rotate: '-45',
      y: -5,
    });
    gsap.to('.line-3', {
      duration: 0,
      background: 'transparent',
    });
    gsap.to(navMobile, {
      duration: 0.5,
      translateX: '0%',
    });
    gsap.to('#logo', {
      color: '#fbd784',
    });
    document.body.classList.add('lock-position');
  } else {
    navMobile?.classList.remove('active');
    gsap.to('.line-1', {
      duration: 0.5,
      rotate: '0',
      y: 0,
    });
    gsap.to('.line-2', {
      duration: 0.5,
      rotate: '0',
      y: 0,
    });
    gsap.to('.line-3', {
      duration: 0.5,
      background: '#fff',
    });
    gsap.to(navMobile, {
      duration: 0.5,
      translateX: '100%',
    });
    gsap.to('#logo', {
      color: '#fff',
    });
    document.body.classList.remove('lock-position');
  }
}

burger?.addEventListener('click', toggleNavMobile);
