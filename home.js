// Toggle class active search
const searchForm = document.querySelector('.search-form');
const searchBok = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBok.focus()
    e.preventDefault();
}

// Slider
const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;

let currentIndex = 0;

// Function to move to the next slide
function moveToNextSlide() {
  currentIndex = (currentIndex + 1) % slideCount;
  const offset = currentIndex * -100;
  slides.style.transform = `translateX(${offset}%)`;
}

// Auto slide every 3 seconds
setInterval(moveToNextSlide, 3000);

// Toggle Shopping Cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-button').onclick = (e) => {
  shoppingCart.classList.toggle('active');
  e.preventDefault();
};

// Payment