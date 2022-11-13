var hamburger = document.querySelector('.hamburger');
var navBar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
  navBar.classList.toggle('active');
})