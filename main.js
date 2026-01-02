/* ============================================= */
/* === MÓDULO 1: MENÚ MÓVIL (HAMBURGUESA) ====== */
/* ============================================= */

/* 1. Seleccionamos los elementos del DOM */
// Seleccionamos el botón que abre/cierra el menú (el 'toggle')
const navToggle = document.getElementById('nav-toggle');
// Seleccionamos el contenedor del menú que queremos mostrar/ocultar
const navMenu = document.getElementById('nav-menu');

/* 2. Verificamos que los elementos existan (Buena práctica) */
// Si navToggle y navMenu existen en la página...
if (navToggle && navMenu) {
  
  /* 3. Añadimos el Event Listener */
  // Le decimos al botón 'toggle' que "escuche" el evento 'click'
  navToggle.addEventListener('click', () => {
    
    /* 4. La acción: Alternar la clase */
    // Cada vez que se haga clic, alterna (añade si no la tiene, 
    // quita si sí la tiene) la clase 'show-menu' en el elemento 'navMenu'.
    navMenu.classList.toggle('show-menu');
    
  });
}


/* ============================================= */
/* === MÓDULO 2: CERRAR MENÚ AL HACER CLIC ===== */
/* ============================================= */
/* * Para mejorar la experiencia de usuario (UX) en la One-Page,
 * haremos que el menú se cierre automáticamente cuando
 * el usuario haga clic en uno de los enlaces (Ej: "Sobre Mí").
*/

// 1. Seleccionamos TODOS los enlaces del menú
const navLinks = document.querySelectorAll('.navbar__link');

// 2. Creamos una función para reutilizar
function linkAction() {
  // Cuando se llama, esta función QUITA la clase 'show-menu'
  navMenu.classList.remove('show-menu');
}

// 3. Añadimos el listener a CADA enlace
// Recorremos la lista de enlaces y a cada uno le añadimos
// el listener de 'click' que ejecuta la función 'linkAction'.
navLinks.forEach(link => {
  link.addEventListener('click', linkAction);
});


/* ============================================= */
/* === MÓDULO 3: SCROLL REVEAL (Observer) ====== */
/* ============================================= */

const observerOptions = {
    threshold: 0.15 // El elemento se activa cuando el 15% es visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Seleccionamos todos los elementos con la clase .reveal y los observamos
const revealElements = document.querySelectorAll('.reveal');
revealElements.forEach(el => observer.observe(el));