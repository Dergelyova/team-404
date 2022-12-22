// import Swiper from 'swiper';
// // // import Swiper styles
// import 'swiper/css';
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

import 'swiper/scss';
import 'swiper/modules/pagination/pagination.scss';
import 'swiper/scss/bundle';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

const swiper = new Swiper('.mySwiper', {
  //   modules: [Navigation, Pagination],
  direction: 'vertical',
  loop: true,
  speed: 400,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});
