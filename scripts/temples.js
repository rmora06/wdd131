const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;

document.getElementById("year").textContent = currentYear;
document.getElementById("lastModified").textContent = lastModified;


const menuButton = document.getElementById('menu-toggle');
const nav = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
  nav.classList.toggle('open');

  // Cambiar ícono entre ☰ y ❌
  if (nav.classList.contains('open')) {
    menuButton.textContent = '❌';
  } else {
    menuButton.textContent = '☰';
  }
});