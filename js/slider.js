new Swiper(".image-slider", {
  //скорость прокрутки в ms//
  speed: 500,
  // Стрелки
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Пагинация
  pagination: {
    el: ".swiper-pagination",
    // Буллеты
    clickable: true,
  },
  //включение/выключение автовысоты//
  autoHeight: false,
  //включение/выключение перетаскивание на пк//
  simulateTouch: false,
  //чувствительность срабатывания//
  touchRatio: 2,
  //угол срабатывания перетаскивания//
  touchAngle: 45,
  //курсор перетаскивания//
  grabCursor: false,
});

new Swiper(".posts-block", {
  //скорость прокрутки в ms//
  speed: 500,

  navigation: {
    nextEl: ".post_swiper-button-next",
    prevEl: ".post_swiper-button-prev",
  },
  simulateTouch: false,
  touchRatio: 2,
  //включение колеса мыши//
  mousewheel: {
    //чувствительность колесв мыши//
    sensitivity: 1,
    //класс объекта на котором будет срабатывать прокрутка//
    eventsTarget: ".posts-block",
  },
  //количество слайдов для показа//
  // slidesPerView: 3,
  //расстояние между слайдами в px//
  spaceBetween: 30,
  //количество политываемых слайдов//
  // slidesPerGroup: 3,
  breakpoints: {
    //при значении => заданного срабатывает breakpoints//
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    480: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
});
