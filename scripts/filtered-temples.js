const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;

document.getElementById("year").textContent = currentYear;
document.getElementById("lastModified").textContent = lastModified;


const menuButton = document.getElementById('menu-toggle');
const nav = document.querySelector('.navigation');
const titulo = document.querySelector('h1');

menuButton.addEventListener('click', () => {
  nav.classList.toggle('open');
  titulo.classList.toggle('opened');

    
  if (nav.classList.contains('open')) {
    menuButton.textContent = '❌';
  } else {
    menuButton.textContent = '☰';
  }
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Santo Domingo",
    location: "Sto Dgo, Dom Rep",
    dedicated: "2000, September, 17",
    area: 67000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/santo-domingo-dominican-republic-temple/santo-domingo-dominican-republic-temple-1444-main.jpg"
  },
  {
    templeName: "Monterrey Mexico Temple",
    location: "Monterrey, Mexico",
    dedicated: "2002, Abril, 28",
    area: 16498,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/monterrey-mexico-temple/monterrey-mexico-temple-1068-main.jpg"
  },
  {
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019, March, 10-12",
    area: 41000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
  }
];

createTempleCard(temples);

const oldsLink = document.querySelector("#olds");

oldsLink.addEventListener("click", () => {
  const filtered = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year < 1900;
  });
  createTempleCard(filtered);
  nav.classList.remove('open');
  menuButton.textContent = '☰';
  titulo.classList.remove('opened');
});

document.querySelector("#after2000").addEventListener("click", () => {
  const filtered = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year > 2000;
  });
  createTempleCard(filtered);
  nav.classList.remove('open');
  menuButton.textContent = '☰';
  titulo.classList.remove('opened');
});

const largeLink = document.querySelector("#large");
largeLink.addEventListener("click", () => {
  const filtered = temples.filter(temple => temple.area > 90000);
  createTempleCard(filtered);
  nav.classList.remove('open');
  menuButton.textContent = '☰';
  titulo.classList.remove('opened');
});

const smallLink = document.querySelector("#small");
smallLink.addEventListener("click", () => {
  const filtered = temples.filter(temple => temple.area < 10000);
  createTempleCard(filtered);
  nav.classList.remove('open');
  menuButton.textContent = '☰';
  titulo.classList.remove('opened');
});

const homeButton = document.querySelector("#home");
homeButton.addEventListener("click", () => {
  createTempleCard(temples);
  nav.classList.remove('open');
  menuButton.textContent = '☰';
  titulo.classList.remove('opened');
});

function createTempleCard(filteredTemples) { 
  document.querySelector(".grid-gallery").innerHTML = "";
  filteredTemples.forEach(temple => { 
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
    img.setAttribute( "src", temple.imageUrl );
    img.setAttribute( "alt", `${temple.templeName} Temple` );
    img.setAttribute("loading", "lazy" );
      
      card.appendChild( name );
      card.appendChild( location );
      card.appendChild( dedication );
      card.appendChild( area );
      card.appendChild( img );

      document.querySelector(".grid-gallery" ).appendChild(card);
    });
}