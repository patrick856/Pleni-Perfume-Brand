
/* auto scroll on load */
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}

const lenis = new Lenis({
  duration: 0.5,
  easing: (t) => 1 - Math.pow(1 - t, 3)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

setTimeout(() => {
  lenis.scrollTo(334, { duration: 0.6, onComplete: () => lenis.destroy() })  
}, 300)

/* navbar scroll effect  DO NOT TOUCH */
if (window.location.pathname === '/' || window.location.pathname.includes('index.html')) {
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar-home')
  if (window.scrollY > 272) {
    navbar.classList.add('navbar--scrolled')
  } else {
    navbar.classList.remove('navbar--scrolled')
  }
})
}

/* hero title fade in on scroll */
const heroTitle = document.querySelector('.hero__title')

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY
  const maxScroll = 334 // tune this — how many px of scroll before fully visible

  const progress = Math.min(scrolled / maxScroll, 1)

  heroTitle.style.opacity = progress
  heroTitle.style.transform = `translateY(${(1 - progress) * 30}px)`
})

/* separator contact */
const separatorDiagonal = document.querySelector('.separator-lines')

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY
  separatorDiagonal.style.backgroundPositionX = (1501 - scrolled * 0.3) + 'px'
})
