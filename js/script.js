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

// ===== Unclickable Button ===== //

// const buttonHeight = 50
// const buttonWidth = 150

// const maxWidth = window.innerWidth - buttonWidth
// const maxHeight = window.innerHeight - buttonHeight

// window.addEventListener('DOMContentLoaded', () => {
//   const button = document.getElementById('button')

//   button.addEventListener('mouseover', () => {
//     button.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px'
//     button.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px'
//   })
// })