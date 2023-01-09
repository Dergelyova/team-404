const swiperModal = new Swiper('.modalSwiper', {
  direction: 'horizontal',
  loop: true,
  speed: 400,
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
