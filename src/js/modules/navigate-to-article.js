import { customScrollTo } from '../utils/scroll-to';

const scrollDownBtn = document.querySelector('.scroll-down-btn');
const firstArticle = document.getElementById('01');
const sliderLinks = document.querySelectorAll('.link-to-article');

scrollDownBtn?.addEventListener('click', () => {
  if (!firstArticle) {
    return;
  }
  customScrollTo(firstArticle);
});

sliderLinks.forEach((link, index) => {
  link.addEventListener('click', () => {
    const articleId = `0${index + 1}`;
    const article = document.getElementById(articleId);
    if (article) {
      customScrollTo(article, { offsetY: 10 });
    }
  });
});
