let scrollPosition = window.scrollY;
let scrollTarget = window.scrollY;
const scrollSpeed = 0.01;
let isWheelScrolling = false;

document.addEventListener('wheel', (event) => {
  // Проверяем, произошло ли событие в попапе (замените '.popup' на селектор вашего попапа)
  const isInPopup = event.target.closest('.header-menu__wrapper');
  
  // Если событие в попапе - не обрабатываем плавный скролл
  if (isInPopup) {
    // Дополнительная проверка, если попап имеет свой собственный скролл
    const popupContent = event.target.closest('.popup-content');
    if (popupContent && popupContent.scrollHeight > popupContent.clientHeight) {
      return;
    }
  } else {
    event.preventDefault();
    scrollTarget += event.deltaY;
    scrollTarget = Math.max(0, Math.min(scrollTarget, document.body.scrollHeight - window.innerHeight));
  }
}, { passive: false });

document.addEventListener('scroll', () => {
  if (!isWheelScrolling) {
    scrollPosition = window.scrollY;
    scrollTarget = window.scrollY;
  }
});

function smoothScroll() {
  if (Math.abs(scrollTarget - scrollPosition) > 0.5) {
    isWheelScrolling = true;
    scrollPosition += (scrollTarget - scrollPosition) * scrollSpeed;
    window.scrollTo(0, scrollPosition);
  } else {
    isWheelScrolling = false;
  }
  requestAnimationFrame(smoothScroll);
}

smoothScroll();