document.addEventListener('DOMContentLoaded', () => {

  //cursor effect
  const cursor = document.querySelector('.cursor');

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
  });



  const page = window.location.pathname;
  const isIndex = page === '/' || page.endsWith('index.html');

  if (isIndex) {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
    window.scrollTo({ top: 0, behavior: 'instant' })

  setTimeout(() => {
    window.scrollTo({ top: 334, behavior: 'smooth' })
  }, 150)
  }

  /* navbar scroll effect  DO NOT TOUCH */
  if (isIndex) {
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

  /* auto-grow textarea */
  const textarea = document.querySelector('.contact-form-input div textarea')
  if (textarea) {
    const minHeight = 62
    const maxHeight = 200
    
    const adjustHeight = () => {
      textarea.style.height = minHeight + 'px'
      textarea.style.height = Math.min(textarea.scrollHeight, maxHeight) + 'px'
      textarea.style.overflowY = textarea.scrollHeight > maxHeight ? 'auto' : 'hidden'
    }

    textarea.addEventListener('input', adjustHeight)
    // set initial height
    adjustHeight()
  }
})