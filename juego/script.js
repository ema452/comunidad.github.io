// script.js
const colores = ["rojo", "azul", "verde", "amarillo", "blanco", "celeste", "negro", "verde"];

let contadorCorrectos = 0;
let imagenActualIndex = 0;

const imagenColor = document.getElementById("color-image");
const botonColor = document.querySelectorAll(".boton-color");
const contadorCorrectosElemento = document.getElementById("contador-correctos");

function mostrarSiguienteImagen() {
    const siguienteColor = colores[imagenActualIndex];
    const imagenURL = `./colores/${siguienteColor}.png`;
    imagenColor.src = imagenURL;
    imagenColor.alt = siguienteColor;
}

function verificarRespuesta(colorSeleccionado) {
    const colorCorrecto = imagenColor.alt;
    if (colorSeleccionado === colorCorrecto) {
        contadorCorrectos++;
        contadorCorrectosElemento.textContent = contadorCorrectos;
    }
    imagenActualIndex = (imagenActualIndex + 1) % colores.length;
    mostrarSiguienteImagen();
}

botonColor.forEach((boton) => {
    boton.addEventListener("click", () => {
        verificarRespuesta(boton.getAttribute("data-color"));
    });
});

// Iniciar el juego mostrando la primera imagen
mostrarSiguienteImagen();
