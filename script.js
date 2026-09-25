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
/* =========================================
   GARZA - SOLO EN AVES DE XOCHIMILCO
========================================= */

const aveCruzando =
    document.getElementById("ave-cruzando");

const vueloGarza =
    document.getElementById("vuelo-garza");

const seccionAves =
    document.getElementById("aves-xochimilco");

let garzaActiva = false;
let temporizadorGarza = null;
let animacionGarza = null;


/* =========================================
   LANZAR GARZA
========================================= */

function lanzarAve() {

    if (
        !garzaActiva ||
        !aveCruzando ||
        !vueloGarza ||
        !seccionAves
    ) return;


    /* Cancelamos cualquier vuelo anterior */

    if (animacionGarza) {
        animacionGarza.cancel();
    }


    /* =====================================
       MEDIDAS DE LA SECCIÓN VERDE
    ===================================== */

    const ancho =
        seccionAves.offsetWidth;

    const alto =
        seccionAves.offsetHeight;


    /*
       La garza volará únicamente dentro
       de esta zona vertical de la sección.
    */

    const y1 = alto * 0.18;
    const y2 = alto * 0.30;
    const y3 = alto * 0.22;


    /* =====================================
       DIRECCIÓN ALEATORIA
    ===================================== */

    const izquierdaADerecha =
        Math.random() > 0.5;

    const duracion =
        Math.random() * 4 + 10;


    /* =====================================
       IZQUIERDA → DERECHA
    ===================================== */

    if (izquierdaADerecha) {

        aveCruzando.classList.remove(
            "mira-izquierda"
        );

        aveCruzando.classList.add(
            "mira-derecha"
        );


        animacionGarza =
            vueloGarza.animate(

                [
                    {
                        transform:
                            `translate(-250px, ${y1}px) scale(0.55)`,
                        opacity: 0
                    },

                    {
                        transform:
                            `translate(${ancho * 0.20}px, ${y2}px) scale(0.85)`,
                        opacity: 1
                    },

                    {
                        transform:
                            `translate(${ancho * 0.50}px, ${y3}px) scale(1.1)`,
                        opacity: 1
                    },

                    {
                        transform:
                            `translate(${ancho * 0.78}px, ${y2}px) scale(0.85)`,
                        opacity: 1
                    },

                    {
                        transform:
                            `translate(${ancho + 250}px, ${y1}px) scale(0.55)`,
                        opacity: 0
                    }
                ],

                {
                    duration:
                        duracion * 1000,

                    easing:
                        "ease-in-out",

                    fill:
                        "none"
                }
            );
    }


    /* =====================================
       DERECHA → IZQUIERDA
    ===================================== */

    else {

        aveCruzando.classList.remove(
            "mira-derecha"
        );

        aveCruzando.classList.add(
            "mira-izquierda"
        );


        animacionGarza =
            vueloGarza.animate(

                [
                    {
                        transform:
                            `translate(${ancho + 250}px, ${y1}px) scale(0.55)`,
                        opacity: 0
                    },

                    {
                        transform:
                            `translate(${ancho * 0.78}px, ${y2}px) scale(0.85)`,
                        opacity: 1
                    },

                    {
                        transform:
                            `translate(${ancho * 0.50}px, ${y3}px) scale(1.1)`,
                        opacity: 1
                    },

                    {
                        transform:
                            `translate(${ancho * 0.20}px, ${y2}px) scale(0.85)`,
                        opacity: 1
                    },

                    {
                        transform:
                            `translate(-250px, ${y1}px) scale(0.55)`,
                        opacity: 0
                    }
                ],

                {
                    duration:
                        duracion * 1000,

                    easing:
                        "ease-in-out",

                    fill:
                        "none"
                }
            );
    }


    /* =====================================
       AL TERMINAR
    ===================================== */

    animacionGarza.onfinish =
        function () {

            if (!garzaActiva) return;

            programarSiguienteAve();
        };
}


/* =========================================
   PROGRAMAR SIGUIENTE APARICIÓN
========================================= */

function programarSiguienteAve() {

    if (!garzaActiva) return;

    clearTimeout(
        temporizadorGarza
    );


    /*
       Nueva aparición entre
       3 y 7 segundos.
    */

    const espera =
        Math.random() * 4000 + 3000;


    temporizadorGarza =
        setTimeout(
            lanzarAve,
            espera
        );
}


/* =========================================
   DETECTAR SECCIÓN AVES
========================================= */

const observadorAves =
    new IntersectionObserver(

        function (entradas) {

            entradas.forEach(
                function (entrada) {

                    /* =====================
                       ENTRAMOS A LA SECCIÓN
                    ===================== */

                    if (entrada.isIntersecting) {

                        garzaActiva = true;

                        /*
                           Primera aparición
                           relativamente rápida.
                        */

                        clearTimeout(
                            temporizadorGarza
                        );

                        temporizadorGarza =
                            setTimeout(
                                lanzarAve,
                                1000
                            );
                    }


                    /* =====================
                       SALIMOS DE LA SECCIÓN
                    ===================== */

                    else {

                        garzaActiva = false;

                        clearTimeout(
                            temporizadorGarza
                        );

                        if (animacionGarza) {

                            animacionGarza.cancel();

                            animacionGarza = null;
                        }

                        vueloGarza.style.opacity =
                            "0";
                    }

                }
            );

        },

        {
            /*
               Consideramos activa la sección
               cuando aproximadamente 20 %
               está visible.
            */

            threshold: 0.20
        }
    );


if (seccionAves) {

    observadorAves.observe(
        seccionAves
    );
}
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
/* =========================================
   GALLINETA AMBIENTAL
   SOLO EN AVES DE XOCHIMILCO
========================================= */

const gallinetaAmbiente =
    document.getElementById("gallineta-ambiente");


function mostrarGallineta() {

    if (!gallinetaAmbiente) return;

    gallinetaAmbiente.classList.add("visible");
}


function ocultarGallineta() {

    if (!gallinetaAmbiente) return;

    gallinetaAmbiente.classList.remove("visible");
}


/* =========================================
   DETECTAR SECCION AVES
========================================= */

if (seccionAves && gallinetaAmbiente) {

   const observadorGallineta =
    new IntersectionObserver(

        function (entradas) {

            entradas.forEach(
                function (entrada) {

                    if (entrada.isIntersecting) {

                        mostrarGallineta();

                    } else {

                        ocultarGallineta();

                    }

                }
            );

        },

        {
            threshold: 0.01
        }
    );


observadorGallineta.observe(
    seccionAves
);
}

/* =========================================
   INTERACCION GALLINETA
========================================= */

const gallinetaInteractiva =
    document.getElementById("gallineta-interactiva");

/* =========================================
   DESCUBRIR GALLINETA
========================================= */

const fichaGallineta =
    document.getElementById("ficha-gallineta");

const cerrarFichaGallineta =
    document.getElementById("cerrar-ficha-gallineta");


/* ABRIR FICHA */

gallinetaInteractiva.addEventListener("click", function () {

    /* DESTELLO */

    gallinetaAmbiente.classList.remove("descubierta");

    void gallinetaAmbiente.offsetWidth;

    gallinetaAmbiente.classList.add("descubierta");


    /* ABRIR FICHA DESPUÉS DEL DESTELLO */

    setTimeout(function () {

         fichaGallineta.style.display = "flex";

         descubrirGallineta();

     }, 450);

});


/* CERRAR CON LA X */

cerrarFichaGallineta.addEventListener("click", function () {

    fichaGallineta.style.display = "none";

});


/* CERRAR TOCANDO EL FONDO */

fichaGallineta.addEventListener("click", function (evento) {

    if (evento.target === fichaGallineta) {

        fichaGallineta.style.display = "none";

    }

});
/* =========================================
   COLECCION - GALLINETA DESCUBIERTA
========================================= */

const tarjetaGallineta =
    document.getElementById("tarjeta-gallineta");


function descubrirGallineta() {

    console.log("ENTRÓ A descubrirGallineta");
    console.log("Tarjeta encontrada:", tarjetaGallineta);

    if (!tarjetaGallineta) return;

    localStorage.setItem(
        "gallinetaDescubierta",
        "si"
    );

    tarjetaGallineta.classList.remove(
        "especie-misteriosa"
    );

    tarjetaGallineta.innerHTML = `
        <div class="mini-ficha-imagen">

            <img
                src="imagenes/gallareta1.jpg"
                alt="Gallineta frente roja en Xochimilco"
            >

        </div>

        <div class="mini-ficha-info">

            <span class="estado-especie">
                ave nativa de America.
            </span>

            <h3>Gallineta frente roja</h3>

            <p class="mini-cientifico">
                Gallinula galeata
            </p>

            <p class="mini-tamano">
                Familia: Rallidae. Tamaño: aprox. 30–38 cm de long. 
            </p>

        </div>
    `;

}
/* =========================================
   RECUPERAR DESCUBRIMIENTOS
========================================= */

if (
    localStorage.getItem("gallinetaDescubierta")
    === "si"
) {

    descubrirGallineta();

}
/* =========================================
   ZAMBULLIDOR AMBIENTAL
========================================= */

const zambullidorAmbiente =
    document.getElementById("zambullidor-ambiente");

const zambullidorInteractivo =
    document.getElementById("zambullidor-interactivo");


function mostrarZambullidor() {

    if (!zambullidorAmbiente) return;

    zambullidorAmbiente.classList.add("visible");

}

/* =========================================
   ZAMBULLIDOR SOLO EN AVES DE XOCHIMILCO
========================================= */

function ocultarZambullidor() {

    if (!zambullidorAmbiente) return;

    zambullidorAmbiente.classList.remove("visible");
}


/* APARECE AL ENTRAR A LA SECCION VERDE */

if (seccionAves && zambullidorAmbiente) {

    const observadorZambullidor =
        new IntersectionObserver(

            function (entradas) {

                entradas.forEach(
                    function (entrada) {

                        if (entrada.isIntersecting) {

                            mostrarZambullidor();

                        } else {

                            ocultarZambullidor();

                        }

                    }
                );

            },

            {
                threshold: 0.01
            }
        );


    observadorZambullidor.observe(
        seccionAves
    );
}
/* =========================================
   DESCUBRIR ZAMBULLIDOR
========================================= */

const fichaZambullidor =
    document.getElementById("ficha-zambullidor");

const cerrarFichaZambullidor =
    document.getElementById("cerrar-ficha-zambullidor");

const tarjetaZambullidor =
    document.getElementById("tarjeta-zambullidor");


/* =========================================
   ABRIR FICHA
========================================= */

if (
    zambullidorInteractivo &&
    fichaZambullidor
) {

    zambullidorInteractivo.addEventListener(
        "click",
        function () {

            /* DESTELLO */

            zambullidorAmbiente.classList.remove(
                "descubierta"
            );

            void zambullidorAmbiente.offsetWidth;

            zambullidorAmbiente.classList.add(
                "descubierta"
            );


            /* ABRIR FICHA */

            setTimeout(function () {

                fichaZambullidor.style.display =
                    "flex";

                descubrirZambullidor();

            }, 450);

        }
    );
}


/* =========================================
   CERRAR CON LA X
========================================= */

if (cerrarFichaZambullidor) {

    cerrarFichaZambullidor.addEventListener(
        "click",
        function () {

            fichaZambullidor.style.display =
                "none";

        }
    );
}


/* =========================================
   CERRAR TOCANDO EL FONDO
========================================= */

if (fichaZambullidor) {

    fichaZambullidor.addEventListener(
        "click",
        function (evento) {

            if (
                evento.target ===
                fichaZambullidor
            ) {

                fichaZambullidor.style.display =
                    "none";

            }

        }
    );
}


/* =========================================
   COLECCION - ZAMBULLIDOR DESCUBIERTO
========================================= */

function descubrirZambullidor() {

    if (!tarjetaZambullidor) return;


    /* GUARDAMOS EL DESCUBRIMIENTO */

    localStorage.setItem(
        "zambullidorDescubierto",
        "si"
    );


    /* QUITAMOS EL SIGNO ? */

    tarjetaZambullidor.classList.remove(
        "especie-misteriosa"
    );


    /* CONVERTIMOS LA TARJETA */

    tarjetaZambullidor.innerHTML = `

        <div class="mini-ficha-imagen">

            <img
                src="imagenes/Zambullidor.jpg"
                alt="Zambullidor en Xochimilco"
            >

        </div>


        <div class="mini-ficha-info">

            <span class="estado-especie">
                Ave nativa de América
            </span>

            <h3>
                Zambullidor
            </h3>

            <p class="mini-cientifico">
                Tachybaptus dominicus
            </p>

            <p class="mini-tamano">
               Familia: Podicipedidae, Tamaño: aprox. 21–27 cm
            </p>

        </div>

    `;

}


/* =========================================
   RECUPERAR DESCUBRIMIENTO
========================================= */

if (
    localStorage.getItem(
        "zambullidorDescubierto"
    ) === "si"
) {

    descubrirZambullidor();

}