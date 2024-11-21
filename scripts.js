// Función para navegar entre diapositivas
function goToSlide(slideNumber) {
  // Ocultar todas las diapositivas
  const slides = document.querySelectorAll('.slide');
  slides.forEach(slide => slide.classList.remove('show'));

  // Si estamos en la diapositiva 1, ocultamos el contenido
  if (slideNumber === 2) {
    document.getElementById('slide1').querySelector('.content').classList.add('hide');
  }

  // Mostrar la diapositiva correspondiente
  const slide = document.getElementById('slide' + slideNumber);
  slide.classList.add('show');
}
