// код для слайдера з сайту https://swiperjs.com/get-started
// Use Swiper from CDN
// Add Swiper HTML
// LayoutInitialize Swiper
const swiper = new Swiper(".slider-materials", {
  // Optional parameters
  loop: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// для покращення коду идемо на https://swiperjs.com/swiper-api#pagination де є список властивостей.

window.addEventListener("scroll", function () {
  scrollY > 0
    ? document.querySelector(".header").classList.add("scroll")
    : document.querySelector(".header").classList.remove("scroll");
});
