// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение операционной системы на мобильных
import { mobileCheck } from "./functions/mobile-check";

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-меню
import { burger } from "./functions/burger";

// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from "./functions/disable-scroll";

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from "./functions/enable-scroll";

// Реализация модального окна
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();

// Реализация табов
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');

// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Подключение свайпера
import Swiper, {EffectFade, Navigation, Pagination, Scrollbar, Thumbs, } from "swiper";

Swiper.use([EffectFade, Navigation, Pagination, Scrollbar, Thumbs,]);

const swiper_programs = new Swiper('.swiper-programs', {
  slidesPerView: 1,
  spaceBetween: 10,
  
  navigation: {
    prevEl: ".programs__nav .prev",
    nextEl: ".programs__nav .next"
  },


  speed: 1000,
})

const swiper_zone = new Swiper('.swiper-zone', {
  slidesPerView: 1,
  spaceBetween: 10,
  grabCursor: true,

  
  effect: 'fade',

 
})

const swiper_zone_2 = new Swiper('.swiper-zone-2', {
  slidesPerView: 3,
  thumbs: {
    swiper: swiper_zone
  },
  navigation: {
    prevEl: '.zone .slider-navigation .prev',
    nextEl: '.zone .slider-navigation .next'
  },

  speed: 500,
})

const swiper_hero = new Swiper('.swiper-hero', {
  slidesPerView: 1,
  spaceBetween: 10,

  navigation: {
    prevEl: '.hero .slider-navigation .prev',
    nextEl: '.hero .slider-navigation .next'
  },
  pagination: {
    el: ".hero .pagination",
    type: "fraction",
    renderFraction: function (currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>'; // Только текущий слайд
    },
    formatFractionCurrent: function (number) {
      return number < 10 ? '0' + number : number; // Добавляем ведущий 0
    },
  },

  speed: 1000,
  on: {
    slideChange: function () {
      updateProgress(swiper_hero.realIndex);
    }
  }
})

if (document.querySelector('.progress-dot')) {
function updateProgress(realIndex) {
  const progressDots = document.querySelectorAll('.progress-dot');
  const activeDot = document.querySelector('.progress-dot.progress-dot-active');
  if (activeDot) activeDot.classList.remove('progress-dot-active')
  progressDots.forEach((item, index) => {
    index === realIndex ? item.classList.add('progress-dot-active') : '';
  })
}


function customProgressBar () {
  const slider = document.querySelector('.hero .swiper-hero');
  const slides = slider.querySelectorAll('.swiper-slide');
  const customProgress = document.querySelector('.hero .progress-items');
  const progressLine  = slider.querySelector('.progress-line');

  slides.forEach((slide, index) => {
    let classActive = index === 0 ? 'progress-dot progress-dot-active' : 'progress-dot'
    const template = `
      <span class="${classActive}"></span>
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

// Подключение плавной прокрутки к якорям
// import SmoothScroll from "smooth-scroll";
// const scroll = new SmoothScroll('a[href*="#"]', {
//   header: "[data-scroll-header]",
// });

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

// validateForms('.form-1', rules1, afterForm);

import { accordion } from "./functions/accordion";
import { MY_SELECT } from "./functions/my-select";
import { listener } from "./functions/listener";
accordion();

window.addEventListener('scroll', () => {
  let scrollY = window.scrollY;
  const header = document.querySelector('.header');

  if (scrollY >= 200) {
    header.classList.add('header--fixed');
  } else {
    header.classList.remove('header--fixed');
  }
})
