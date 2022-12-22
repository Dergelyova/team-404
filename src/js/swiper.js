import Swiper from 'swiper';
// // import Swiper styles
import 'swiper/css';

const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    bulletActiveClass: 'swiper-pagination-bullet-active',
  },

  //   direction: 'vertical',
  // loop: true,
  //   Navigation arrows
  //   navigation: {
  //     nextEl: '.swiper-next',
  //     prevEl: '.swiper-prev',
  //   },

  //   effect: 'slide',
});
