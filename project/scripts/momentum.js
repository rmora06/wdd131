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
      localStorage.setItem("isSubscribed", "true");
    });
  }

  // deactivate subscribe button
  const subscribeButton = document.querySelector('#subscribe');
  const subsButton = document.querySelector('#subs');
  if (localStorage.getItem("isSubscribed") === "true" && subscribeButton) {
    subscribeButton.textContent = "Subscribed";
    subscribeButton.classList.add("disabled");
    subscribeButton.setAttribute("aria-disabled", "true");
    subscribeButton.style.pointerEvents = "none";

    subsButton.textContent = "Subscribed";
    subsButton.classList.add("disabled");
    subsButton.setAttribute("aria-disabled", "true");
    subsButton.style.pointerEvents = "none";
  }
});

document.getElementById("suggestionForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thanks for your suggestion!");
  this.reset();
   });