window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar')
  if (window.scrollY > 172) {
    navbar.classList.add('navbar--scrolled')
  } else {
    navbar.classList.remove('navbar--scrolled')
  }
})