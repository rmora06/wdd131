const menuButton = document.getElementById('menu-toggle');
  const nav = document.querySelector('.navigation');

  menuButton.addEventListener('click', () => {
    nav.classList.toggle('open');

    menuButton.textContent = nav.classList.contains('open') ? '❌' : '☰';
  });


//   document.addEventListener("DOMContentLoaded", () => {
//   const form = document.querySelector("#subscribeForm");
//   const submitButton = form.querySelector("button[type='submit']");

//   form.addEventListener("submit", (event) => {
//     submitButton.disabled = true;
//     submitButton.textContent = "Suscrito";
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#subscribeForm");

  if (form) {
    form.addEventListener("submit", () => {
      // Guardar en localStorage que ya se suscribió
      localStorage.setItem("isSubscribed", "true");
    });
  }

  // Desactivar botón si ya se suscribió
  const subscribeButton = document.querySelector('#subscribe');
  if (localStorage.getItem("isSubscribed") === "true" && subscribeButton) {
    subscribeButton.textContent = "Suscrito";
    subscribeButton.classList.add("disabled");
    subscribeButton.setAttribute("aria-disabled", "true");
    subscribeButton.style.pointerEvents = "none";
  }
});