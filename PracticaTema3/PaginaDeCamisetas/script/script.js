import {
  arrayRopaUnoH,
  arrayRopaDosH,
  arrayRopaTresH,
  arrayRopaCuatroH,
  arraysRopaH,
} from "./utilidades.js";

import {
  arrayRopaUnoM,
  arrayRopaDosM,
  arrayRopaTresM,
  arrayRopaCuatroM,
  arraysRopaM,
} from "./utilidades.js";

document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelectorAll("#logo");
  const idioma = document.querySelector(".idioma");

  mostrarMenu();
  moverCarrousel();

  logo.forEach((e) => {
    e.addEventListener("click", () => {
      linkHome();
    });
  });

  idioma.addEventListener("click", (e) => {
    cambiarIdioma(e);
  });

  if (document.title === "Hombre" || document.title === "Mujer") {
    const menuCatalogo = document.querySelector(".menuCatalogo");
    [...menuCatalogo.children].forEach((e) => {
      e.addEventListener("click", (e) => {
        document.title === "Hombre"
          ? moverCatalogoHombre(e)
          : moverCatalogoMujer(e);
      });
    });
  }

  if (document.title === "Custom Hombre" || document.title === "Custom Mujer") {
    const tiposDeCamiseta = document.querySelectorAll(".opcionCustom");
    tiposDeCamiseta.forEach((e) => {
      e.addEventListener("click", (e) => {
        document.title === "Custom Hombre"
          ? cambiarDeCamisetaH(e)
          : cambiarDeCamisetaM(e);
      });
    });
  }
});

function linkHome() {
  window.location.href = "home.html";
}

function mostrarMenu() {
  const btnMenu = document.querySelector(".btnMenu");
  const nav = document.querySelector(".nav");
  btnMenu.addEventListener("click", () => {
    nav.classList.toggle("activo");
  });
}

function cambiarIdioma(e) {
  const arrayidiomas = [
    "iconos/icons8-spain-48.png",
    "iconos/icons8-great-britain-48.png",
    "iconos/icons8-germany-48.png",
    "iconos/icons8-japan-48.png",
  ];

  let imgActual = arrayidiomas.indexOf(e.target.getAttribute("src"));

  if (imgActual === arrayidiomas.length - 1) {
    e.target.src = arrayidiomas[0];
  } else {
    e.target.src = arrayidiomas[imgActual + 1];
  }
}

function moverCarrousel() {
  const containerImg = document.querySelector(".containerImg");
  const punto = document.querySelectorAll(".punto");

  punto.forEach((e, i) => {
    punto[i].addEventListener("click", () => {
      let posicion = i;
      let desplazamiento = posicion * -33.33;

      containerImg.style.transform = `translateX(${desplazamiento}%)`;

      punto.forEach((e, i) => {
        punto[i].classList.remove("activo");
      });
      punto[i].classList.add("activo");
    });
  });
}

function moverCatalogoHombre(e) {
  let itemMenuClicado = e.target.textContent;
  let flechaClicada = e.target.getAttribute("id");

  if (itemMenuClicado === "1") {
    cambiarImgsRopaHombre(arraysRopaH[itemMenuClicado - 1]);
    return;
  } else if (itemMenuClicado === "2") {
    cambiarImgsRopaHombre(arraysRopaH[itemMenuClicado - 1]);
    return;
  } else if (itemMenuClicado === "3") {
    cambiarImgsRopaHombre(arraysRopaH[itemMenuClicado - 1]);
    return;
  } else if (itemMenuClicado === "4") {
    cambiarImgsRopaHombre(arraysRopaH[itemMenuClicado - 1]);
    return;
  }

  if (flechaClicada === "flechaAtrasHombre") {
    cambiarImgsRopaHombreFlechas(flechaClicada);
    return;
  } else if (flechaClicada === "flechaDelanteHombre") {
    cambiarImgsRopaHombreFlechas(flechaClicada);
    return;
  }
}

function cambiarImgsRopaHombreFlechas(idFlecha) {
  let imgActual = document.querySelector("#imgHombre img").getAttribute("src");

  let arrayActual = 0;

  if (arrayRopaUnoH.includes(imgActual)) {
    arrayActual = arraysRopaH.indexOf(arrayRopaUnoH);
  } else if (arrayRopaDosH.includes(imgActual)) {
    arrayActual = arraysRopaH.indexOf(arrayRopaDosH);
  } else if (arrayRopaTresH.includes(imgActual)) {
    arrayActual = arraysRopaH.indexOf(arrayRopaTresH);
  } else {
    arrayActual = arraysRopaH.indexOf(arrayRopaCuatroH);
  }

  if (idFlecha === "flechaAtrasHombre") {
    if (arrayActual !== 0) {
      cambiarImgsRopaHombre(arraysRopaH[arrayActual - 1]);
    }
  }
  if (idFlecha === "flechaDelanteHombre") {
    if (arrayActual !== 3) {
      cambiarImgsRopaHombre(arraysRopaH[arrayActual + 1]);
    }
  }
}

function cambiarImgsRopaHombre(arrayRopa) {
  const imgsRopaHombre = document.querySelectorAll("#imgHombre img");

  imgsRopaHombre.forEach((e, i) => {
    e.src = arrayRopa[i];
  });
}

// MUJER

function moverCatalogoMujer(e) {
  let itemMenuClicado = e.target.textContent;
  let flechaClicada = e.target.getAttribute("id");

  if (itemMenuClicado === "1") {
    cambiarImgsRopaMujer(arraysRopaM[itemMenuClicado - 1]);
    return;
  } else if (itemMenuClicado === "2") {
    cambiarImgsRopaMujer(arraysRopaM[itemMenuClicado - 1]);
    return;
  } else if (itemMenuClicado === "3") {
    cambiarImgsRopaMujer(arraysRopaM[itemMenuClicado - 1]);
    return;
  } else if (itemMenuClicado === "4") {
    cambiarImgsRopaMujer(arraysRopaM[itemMenuClicado - 1]);
    return;
  }

  if (flechaClicada === "flechaAtrasMujer") {
    cambiarImgsRopaMujerFlechas(flechaClicada);
    return;
  } else if (flechaClicada === "flechaDelanteMujer") {
    cambiarImgsRopaMujerFlechas(flechaClicada);
    return;
  }
}

function cambiarImgsRopaMujerFlechas(idFlecha) {
  let imgActual = document.querySelector("#imgMujer img").getAttribute("src");

  let arrayActual = 0;

  if (arrayRopaUnoM.includes(imgActual)) {
    arrayActual = arraysRopaM.indexOf(arrayRopaUnoM);
  } else if (arrayRopaDosM.includes(imgActual)) {
    arrayActual = arraysRopaM.indexOf(arrayRopaDosM);
  } else if (arrayRopaTresM.includes(imgActual)) {
    arrayActual = arraysRopaM.indexOf(arrayRopaTresM);
  } else {
    arrayActual = arraysRopaM.indexOf(arrayRopaCuatroM);
  }

  if (idFlecha === "flechaAtrasMujer") {
    if (arrayActual !== 0) {
      cambiarImgsRopaMujer(arraysRopaM[arrayActual - 1]);
    }
  }
  if (idFlecha === "flechaDelanteMujer") {
    if (arrayActual !== 3) {
      cambiarImgsRopaMujer(arraysRopaM[arrayActual + 1]);
    }
  }
}

function cambiarImgsRopaMujer(arrayRopa) {
  const imgsRopaMujer = document.querySelectorAll("#imgMujer img");

  imgsRopaMujer.forEach((e, i) => {
    e.src = arrayRopa[i];
  });
}

function cambiarDeCamisetaH(e) {
  const camiseta = document.querySelector(".camiseta");

  if (e.target.textContent === "Tipo A") {
    camiseta.style.backgroundImage =
      "url('imagenes/CamisetasHombre/camisetaNegra2.jpg')";
  } else if (e.target.textContent === "Tipo B") {
    camiseta.style.backgroundImage =
      "url('imagenes/CamisetasHombre/camisetaMorada3.jpg')";
  } else if (e.target.textContent === "Tipo C") {
    camiseta.style.backgroundImage =
      "url('imagenes/CamisetasHombre/camisetaVerde2.jpg')";
  }
}

function cambiarDeCamisetaM(e) {
  const camiseta = document.querySelector(".camiseta");
  if (e.target.textContent === "Tipo A") {
    camiseta.style.backgroundImage =
      "url('imagenes/CamisetasMujer/8049443743_2_4_3.jpg')";
  } else if (e.target.textContent === "Tipo B") {
    camiseta.style.backgroundImage =
      "url('imagenes/CamisetasMujer/8049443800_2_4_3.jpg')";
  } else if (e.target.textContent === "Tipo C") {
    camiseta.style.backgroundImage =
      "url('imagenes/CamisetasMujer/8049443502_2_4_3.jpg')";
  }
}
