const modalBg = document.getElementById('modalBg');
const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');

openModal.addEventListener('click', () => {
  modalBg.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
  modalBg.style.display = 'none';
});s

// Permite cerrar el modal al hacer clic fuera del cuadro
window.addEventListener('click', (e) => {
  if (e.target === modalBg) {
    modalBg.style.display = 'none';
  }
});
