// Слайдер "Тренеры"

var swiper = new Swiper(".trainers-slider", {
  slidesPerView: 4,
  spaceBetween: 40,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1199: {
      slidesPerView: 4,
      spaceBetween: 40
    },

    991: {
      slidesPerView: 4,
      spaceBetween: 30
    },

    576: {
      slidesPerView: 2,
      spaceBetween: 30
    },

    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
  }
});

// Слайдер "Отзывы"

var swiper = new Swiper(".reviews-slider", {
  grabCursor: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

AOS.init();