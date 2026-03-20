
/* navbar scroll effect  DO NOT TOUCH */

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar')
  if (window.scrollY > 272) {
    navbar.classList.add('navbar--scrolled')
  } else {
    navbar.classList.remove('navbar--scrolled')
  }
})

/* parallax effect for separator image */
const parallax = document.querySelector('.separator-image')

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY
  parallax.style.backgroundPositionY = (scrolled * 0.35 + 140) + 'px'
})

/* separator contact */
const separatorDiagonal = document.querySelector('.separator-contact')

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY
  separatorDiagonal.style.backgroundPositionX = (1501 - scrolled * 0.3) + 'px'
})
