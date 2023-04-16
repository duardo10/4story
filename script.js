const slides = document.querySelector(".slides");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let currentIndex = 0;

prev.addEventListener("click", () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.children.length - 1;
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
});

next.addEventListener("click", () => {
  currentIndex = currentIndex < slides.children.length - 1 ? currentIndex + 1 : 0;
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
});