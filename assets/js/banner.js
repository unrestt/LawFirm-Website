const banner = document.getElementById("banner-section");
const images = [
  "assets/images/background.webp",
  "assets/images/background2.jpg",
  "assets/images/background3.jpg",
];
let currentIndex = 0;

document.querySelector(".arrow-left").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  banner.style.backgroundImage = `url(${images[currentIndex]})`;
});

document.querySelector(".arrow-right").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  banner.style.backgroundImage = `url(${images[currentIndex]})`;
});
