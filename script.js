//Selección de elementos del DOM:

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnsOpenModal = document.querySelectorAll('.show-modal')
/*
element.classList.add(nombreClase)
element.classList.remove(nombreClase)
*/

// Funciones de apertura y cierre del modal:

const openModal = function () {
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}
const closeModal = function () {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}

//Event Listeners: Se agregan event listeners a los botones para abrir el modal

// iteración sobre botones para abrir modal y control de cierre con teclado
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal)
btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)
document.addEventListener('keydown', function (e) {
  // console.log(e, e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal()
  }
})
