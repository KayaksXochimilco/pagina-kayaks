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
/* =========================
   FAUNA AMBIENTAL
========================= */

const aveCruzando =
    document.getElementById("ave-cruzando");

const vueloGarza =
    document.getElementById("vuelo-garza");


function lanzarAve() {

    // Elegimos una de cuatro trayectorias
    const trayectoria =
        Math.floor(Math.random() * 4);

    // Duración entre 13 y 19 segundos
    const duracion =
        Math.random() * 6 + 13;


    /* =========================
       1. IZQUIERDA → DERECHA
    ========================= */

    if (trayectoria === 0) {

        // Volteamos únicamente la imagen
        // para que el pico mire hacia la derecha
        aveCruzando.classList.remove("mira-izquierda");
        aveCruzando.classList.add("mira-derecha");

        vueloGarza.animate(
            [
                {
                    transform:
                        "translate(100px, 30vh) scale(0.2) rotate(0deg)",
                    opacity: 0
                },

                {
                    transform:
                        "translate(20vw, 25vh) scale(0.8) rotate(-3deg)",
                    opacity: 1
                },

                {
                    transform:
                        "translate(50vw, 40vh) scale(1.5) rotate(3deg)",
                    opacity: 1
                },

                {
                    transform:
                        "translate(80vw, 30vh) scale(1) rotate(-2deg)",
                    opacity: 1
                },

                {
                    transform:
                        "translate(115vw, 20vh) scale(0.5) rotate(0deg)",
                    opacity: 0
                }
            ],

            {
                duration: duracion * 1000,
                easing: "ease-in-out",
                fill: "none"
            }
        );
    }


    /* =========================
       2. DERECHA → IZQUIERDA
    ========================= */

    else if (trayectoria === 1) {

        // Orientación original del GIF
        aveCruzando.classList.remove("mira-derecha");
        aveCruzando.classList.add("mira-izquierda");

        vueloGarza.animate(
            [
                {
                    transform:
                        "translate(115vw, 20vh) scale(0.1) rotate(0deg)",
                    opacity: 0
                },

                {
                    transform:
                        "translate(80vw, 32vh) scale(1) rotate(2deg)",
                    opacity: 1
                },

                {
                    transform:
                        "translate(52vw, 25vh) scale(1.5) rotate(-3deg)",
                    opacity: 1
                },

                {
                    transform:
                        "translate(25vw, 38vh) scale(0.9) rotate(2deg)",
                    opacity: 1
                },

                {
                    transform:
                        "translate(-350px, 30vh) scale(0.4) rotate(0deg)",
                    opacity: 0
                }
            ],

            {
                duration: duracion * 1000,
                easing: "ease-in-out"
            }
        );
    }


    /* =========================
       3. DIAGONAL ABAJO → ARRIBA
       siempre hacia la derecha
    ========================= */

    else if (trayectoria === 2) {

        aveCruzando.classList.remove("mira-izquierda");
        aveCruzando.classList.add("mira-derecha");

        vueloGarza.animate(
            [
                {
                    transform:
                        "translate(5vw, 110vh) scale(1.5) rotate(-10deg)",
                    opacity: 0
                },

                {
                    transform:
                        "translate(25vw, 75vh) scale(1.3) rotate(-8deg)",
                    opacity: 1
                },

                {
                    transform:
                        "translate(48vw, 50vh) scale(1) rotate(-5deg)",
                    opacity: 1
                },

                {
                    transform:
                        "translate(72vw, 25vh) scale(0.7) rotate(-3deg)",
                    opacity: 1
                },

                {
                    transform:
                        "translate(100vw, -200px) scale(0.35) rotate(0deg)",
                    opacity: 0
                }
            ],

            {
                duration: duracion * 1000,
                easing: "ease-out"
            }
        );
    }


    /* =========================
       4. VUELO ONDULANTE
       SIN VOLAR HACIA ATRÁS
    ========================= */

    else {

        aveCruzando.classList.remove("mira-izquierda");
        aveCruzando.classList.add("mira-derecha");

        vueloGarza.animate(
            [
                {
                    transform:
                        "translate(-350px, 55vh) scale(0.45) rotate(0deg)",
                    opacity: 0
                },

                {
                    transform:
                        "translate(18vw, 38vh) scale(0.75) rotate(-5deg)",
                    opacity: 1
                },

                {
                    transform:
                        "translate(38vw, 18vh) scale(1.2) rotate(4deg)",
                    opacity: 1
                },

                {
                    transform:
                        "translate(58vw, 35vh) scale(1.6) rotate(-3deg)",
                    opacity: 1
                },

                {
                    transform:
                        "translate(78vw, 22vh) scale(1) rotate(3deg)",
                    opacity: 1
                },

                {
                    transform:
                        "translate(112vw, 40vh) scale(0.45) rotate(0deg)",
                    opacity: 0
                }
            ],

            {
                duration: duracion * 1000,
                easing: "ease-in-out"
            }
        );
    }


    // Cuando termina el vuelo,
    // esperamos y lanzamos otro
    setTimeout(
        programarSiguienteAve,
        duracion * 1000
    );
}


function programarSiguienteAve() {

    // Para probar: aparece entre 2 y 5 segundos
    const esperaInicial =
    Math.random() * 3000 + 1500;

    setTimeout(lanzarAve, esperaInicial);
}

// Arrancamos el ciclo
programarSiguienteAve();
/* =========================================
   FICHA INTERACTIVA - GARZA BLANCA
========================================= */

const fichaGarza =
    document.getElementById("ficha-garza");

const cerrarFichaGarza =
    document.getElementById("cerrar-ficha-garza");


/* ABRIR FICHA */

aveCruzando.addEventListener("click", function () {

    fichaGarza.style.display = "flex";

});


/* CERRAR CON LA X */

cerrarFichaGarza.addEventListener("click", function () {

    fichaGarza.style.display = "none";

});


/* CERRAR TOCANDO EL FONDO */

fichaGarza.addEventListener("click", function (evento) {

    if (evento.target === fichaGarza) {

        fichaGarza.style.display = "none";

    }

});