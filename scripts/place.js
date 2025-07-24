const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;

document.getElementById("year").textContent = currentYear;
document.getElementById("lastModified").textContent = lastModified;

 const temperatura = 30;
  const viento = 12;

  function calcularWindChillCelsius(T, V) {
    return (
      13.12 +
      0.6215 * T -
      11.37 * Math.pow(V, 0.16) +
      0.3965 * T * Math.pow(V, 0.16)
    ).toFixed(1) + "°C";
  }

  document.addEventListener("DOMContentLoaded", () => {
    let resultado;

    if (temperatura <= 30 && viento > 4.8) {
      resultado = calcularWindChillCelsius(temperatura, viento);
    } else {
      resultado = "N/A";
    }

    document.getElementById("windchill").textContent = resultado;
  });