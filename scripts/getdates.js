const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;

document.getElementById("year").textContent = currentYear;
document.getElementById("lastModified").textContent = lastModified;

