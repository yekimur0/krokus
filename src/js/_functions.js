import Swiper, {EffectFade, Navigation, Pagination, Scrollbar, Thumbs, } from "swiper";

Swiper.use([EffectFade, Navigation, Pagination, Scrollbar, Thumbs,]);



const swiper_gallery_2 = new Swiper('.modal-gallery-swiper-2', {
  slidesPerView: 'auto',
  spaceBetween : 12,

  
  breakpoints: {
    320: {
      direction: 'horizontal',
      slidesPerView: 2,
    },
    992: {
      direction: 'vertical',
    }
  }
})

const swiper_gallery = new Swiper('.modal-gallery-swiper', {
  slidesPerView: 1,
  spaceBetween : 10,

  thumbs: {
    swiper: swiper_gallery_2
  },

  navigation: {
    prevEl: '.modal-gallery__nav .prev',
    nextEl: '.modal-gallery__nav .next'
  }

})

const swiper_programs = new Swiper('.swiper-programs', {
  slidesPerView: 1,
  spaceBetween : 10,

  navigation: {
    prevEl: ".programs__nav .prev",
    nextEl: ".programs__nav .next"
  },


  speed: 1000,
})

const swiper_zone = new Swiper('.swiper-zone', {
  slidesPerView: 1,
  spaceBetween : 10,
  grabCursor   : true,


  effect: 'fade',


})

const swiper_zone_2 = new Swiper('.swiper-zone-2', {
  slidesPerView: 3,
  thumbs       : {
    swiper: swiper_zone
  },
  navigation: {
    prevEl: '.zone .slider-navigation .prev',
    nextEl: '.zone .slider-navigation .next'
  },

  speed: 500,
})

if (document.querySelector('.swiper-hero')) {
const swiper_hero = new Swiper('.swiper-hero', {
  slidesPerView: 1,
  spaceBetween : 10,

  navigation: {
    prevEl: '.hero .slider-navigation .prev',
    nextEl: '.hero .slider-navigation .next'
  },
  pagination: {
    el            : ".hero .pagination",
    type          : "fraction",
    renderFraction: function (currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>';  // Только текущий слайд
    },
    formatFractionCurrent: function (number) {
      return number < 10 ? '0' + number: number;  // Добавляем ведущий 0
    },
  },

  speed: 1000,
  on   : {
    slideChange: function () {
      updateProgress(swiper_hero.realIndex);
    }
  }
})


function updateProgress(realIndex) {
  const progressDots = document.querySelectorAll('.progress-dot');
  const activeDot    = document.querySelector('.progress-dot.progress-dot-active');
  if (activeDot) activeDot.classList.remove('progress-dot-active')
  progressDots.forEach((item, index) => {
    index === realIndex ? item.classList.add('progress-dot-active') : '';
  })
}


function customProgressBar () {
  const slider         = document.querySelector('.hero .swiper-hero');
  const slides         = slider.querySelectorAll('.swiper-slide');
  const customProgress = document.querySelector('.hero .progress-items');
  const progressLine   = slider.querySelector('.progress-line');

  slides.forEach((slide, index) => {
    let   classActive = index === 0 ? 'progress-dot progress-dot-active' : 'progress-dot'
    const template    = `
      <span class = "${classActive}"></span>
    `

    customProgress.insertAdjacentHTML('beforeend', template);
  })

}

customProgressBar();
}
// Подключение анимаций по скроллу
// import AOS from "aos";

// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');


import { accordion } from "./functions/accordion";
import { MY_SELECT } from "./functions/my-select";
import { listener } from "./functions/listener";
accordion();

window.addEventListener('scroll', () => {
  let   scrollY = window.scrollY;
  const header  = document.querySelector('.header');

  if (scrollY >= 200) {
    header.classList.add('header--fixed');
  } else {
    header.classList.remove('header--fixed');
  }
})
