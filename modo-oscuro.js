const $activadorTema = document.querySelector(".contenedor-icono-tema");

let indicadorModoNoche = false;

function cambiarAModoNoche() {
  if (indicadorModoNoche === false) {
    const $cuerpoDelHmlt = document.querySelector("body");
    $cuerpoDelHmlt.classList = "body-modo-noche";
    indicadorModoNoche = true;
  } else {
    return false;
  }
}

function cambiarAModoDia() {
  if (indicadorModoNoche === true) {
    const $cuerpoDelHmlt = document.querySelector("body");
    $cuerpoDelHmlt.classList = "";
    indicadorModoNoche = false;
  } else {
    return false;
  }
}

function cambiarTema() {
  if (indicadorModoNoche === false) {
    cambiarAModoNoche();
  } else {
    cambiarAModoDia();
  }
}

function cambiarIconoTema() {
  if (indicadorModoNoche === true) {
    const $iconoModoDia = document.querySelector(".icono-modo-dia");
    $iconoModoDia.remove();

    const iconoModoNoche = document.createElement("i");
    iconoModoNoche.className = "fa-solid fa-moon";

    $activadorTema.appendChild(iconoModoNoche);
    $activadorTema.id = "resaltar-color-modo-noche";
  } else {
    const $iconoModoNoche = document.querySelector("i");
    $iconoModoNoche.remove();

    const iconoModoDia = document.createElement("i");
    iconoModoDia.className = "fa-regular fa-sun icono-modo-dia";

    $activadorTema.appendChild(iconoModoDia);
    $activadorTema.id = "";
  }
}

$activadorTema.onclick = function () {
  cambiarTema();
  cambiarIconoTema();
};
