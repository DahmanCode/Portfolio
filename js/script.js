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


// ===== Moving Text Animation ===== // 

let movement = document.querySelector('.heading')
var x = window.matchMedia("(max-width: 700px)")

window.addEventListener('mousemove', (e) => {

  if (e.pageX <= window.innerWidth ) {
    if (x.matches) {
      movement.style.left = (window.innerWidth / 6) - e.pageX + 'px'
    } else {
      movement.style.left = (window.innerWidth / 2) - e.pageX + 'px'
    }
  }
})



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

