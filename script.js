const fotos = document.querySelectorAll(".foto img");

const lightbox = document.getElementById("lightbox");

const imagenGrande = document.getElementById("lightbox-img");

const cerrar = document.querySelector(".cerrar");

const flechaIzquierda = document.querySelector(".flecha-izquierda");

const flechaDerecha = document.querySelector(".flecha-derecha");

let indiceActual = 0;


fotos.forEach(function(foto, indice) {

    foto.addEventListener("click", function() {

        indiceActual = indice;

        mostrarFoto(indiceActual);

        lightbox.classList.add("activo");

    });

});

function mostrarFoto(indice) {

    imagenGrande.src = fotos[indice].src;

    imagenGrande.classList.remove(
        "giro-izquierda",
        "giro-derecha"
    );

    if (indice % 2 === 0) {

        imagenGrande.classList.add("giro-izquierda");

    } else {

        imagenGrande.classList.add("giro-derecha");

    }

}
flechaDerecha.addEventListener("click", function(evento) {

    evento.stopPropagation();

    indiceActual++;

    if (indiceActual >= fotos.length) {
        indiceActual = 0;
    }

    mostrarFoto(indiceActual);

});
flechaIzquierda.addEventListener("click", function(evento) {

    evento.stopPropagation();

    indiceActual--;

    if (indiceActual < 0) {
        indiceActual = fotos.length - 1;
    }

    mostrarFoto(indiceActual);

});

cerrar.addEventListener("click", function() {

    lightbox.classList.remove("activo");

});


lightbox.addEventListener("click", function(evento) {

    if (evento.target === lightbox) {

        lightbox.classList.remove("activo");

    }

});