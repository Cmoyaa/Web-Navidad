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