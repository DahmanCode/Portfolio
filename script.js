var hamburger = document.querySelector('.hamburger');
var navBar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-links ul li')

hamburger.addEventListener('click', () => {
  navBar.classList.toggle('active');
})

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navBar.classList.remove('active');
  })
});

console.log(navLinks)