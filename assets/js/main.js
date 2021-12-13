const menu = document.getElementById('nav-menu'),
      abrirMenu = document.getElementById('nav-toggle'),
      cerrarMenu = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(abrirMenu){
    abrirMenu.addEventListener('click', () =>{
        menu.classList.add('show-menu')
    })
}

if(cerrarMenu){
    cerrarMenu.addEventListener('click', () =>{
        menu.classList.remove('show-menu')
    })
}
/* ---------------------------------------------------------- */

/* Funcion para eliminar el menu desplegable */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/* ---------------------------------------------------------- */

/* Background */
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) 
        header.classList.add('scroll-header'); 
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
/* ---------------------------------------------------------- */

/* Carrusel para los Adornos */
let newSwiper = new Swiper(".adornos-swiper", {
    spaceBetween: 30,
    loop: 'true',
    slidesPerView: 'auto',
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true
    },
    breakpoints: {
        992: {
          spaceBetween: 80,
        },
    },
});
/* ---------------------------------------------------------- */

/* Funcion para que se mueva en la página con los href */
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
/* ---------------------------------------------------------- */

/* Mostrar la flecha para subir */ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    
    if(this.scrollY >= 350) 
        scrollUp.classList.add('show-scroll'); 
    else scrollUp.classList.remove('show-scroll')
  }
  window.addEventListener('scroll', scrollUp)
/* ---------------------------------------------------------- */

/* Modo Oscuro */ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/* Efecto en los index */
const sr = ScrollReveal ({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 400,
})

sr.reveal(`.home__img`)
sr.reveal(`.home__data`, {delay: 300})
sr.reveal(`.informacion__img`, {origin: 'right'}, {interval: 100})
sr.reveal(`.informacion__title`, {origin: 'right'}, {interval: 100})
sr.reveal(`.informacion__description`, {origin: 'right'}, {interval: 100})

