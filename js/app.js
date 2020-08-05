Swal.fire({
    title: 'Esta version del rompecabezas requiere una resolucion de video de 1280 x 960.',
    width: 400,
    padding: '3em',
    background: '#fff url(./img/alert.jpg)',

});

window.onload = init();

function init() {
    // funcion que devuelve n numeros aleatorios sin repetirse
    const random = (n) => {
        let elem = Array.from({
            length: n
        }, (v, i) => i);
        return Array.from({
            length: n
        }).reduce((acum) => {
            let pos = Math.floor(Math.random() * elem.length);
            acum.push(elem[pos]);
            elem.splice(pos, 1);
            return acum;
        }, []);
    };

    var puzzles = [{
            nombre: 'Dark Souls',
            img: "./img/dark Souls/",
        },
        {
            nombre: 'Another',
            img: "./img/another/",
        },
        {
            nombre: 'Blood C',
            img: "./img/blood c/",
        },
        {
            nombre: 'cry of fear',
            img: "./img/cry of fear/",
        },
        {
            nombre: 'dead space',
            img: "./img/dead space/",
        },
        {
            nombre: 'diablo 2',
            img: "./img/diablo2/",
        },
        {
            nombre: 'Doom',
            img: "./img/doom/",
        },
        {
            nombre: 'Full Metal Alchemist',
            img: "./img/FMA/",
        },
        {
            nombre: 'Half Life',
            img: "./img/half-life/",
        },
        {
            nombre: 'Hell Girl',
            img: "./img/hell-girl/",
        },
        {
            nombre: 'killing floor - dlc',
            img: "./img/kf-dlc/",
        },
        {
            nombre: 'killing floor',
            img: "./img/killing floor/",
        },
        {
            nombre: 'killing floor2',
            img: "./img/killing floor2/",
        },
        {
            nombre: 'one punch man',
            img: "./img/one-punch-man/",
        },
        {
            nombre: 'parasite',
            img: "./img/parasite/",
        },
        {
            nombre: 'quake',
            img: "./img/quake/",
        },
        {
            nombre: 'skyrim',
            img: "./img/skyrim/",
        },
        {
            nombre: 'solaire',
            img: "./img/solaire/",
        },
        {
            nombre: 'tokyo-ghoul',
            img: "./img/tokio-ghoul/",
        },
        {
            nombre: 'violeta evergarden',
            img: "./img/violeta evergarden/",
        },

    ];

    selectedPuzzle = puzzles[Math.floor(Math.random() * puzzles.length)];

    // ponemos las imagenes aleatoriamente
    document.getElementById("puzzleName").innerHTML = '<h2 class="display-4 text-white">' +
        selectedPuzzle.nombre + '</h2>';

    random(18).forEach(el => {
        document.getElementById("imagenes").innerHTML += "<img id='i" + el + "' draggable='true' src='" + selectedPuzzle.img + el + ".jpg'>";
    });

    puzzle();
}

function puzzle() {

    // cremos los eventos para iniciar a arrastrar las imagenes
    const imgOrigin = document.querySelectorAll("#imagenes img");
    imgOrigin.forEach(el => {
        el.addEventListener("dragstart", dragStart, false);
    });

    // creamos los eventos para mover y soltar
    const imgDest = document.querySelectorAll("#contenedor div");
    imgDest.forEach(el => {
        el.addEventListener("dragenter", dragEnter, false);
        el.addEventListener("dragover", dragOver, false);
        el.addEventListener("dragleave", dragLeave, false);
        el.addEventListener("drop", drop, false);
    });

    function dragStart(e) {
        e.dataTransfer.effectAllowed = 'move';

        // guardamos el id del elemento que estamos moviendo
        e.dataTransfer.setData("text/plain", this.id);
    }

    function dragEnter(e) {
        e.dataTransfer.dropEffect = 'move';
        e.preventDefault();
    }

    function dragOver(e) {
        e.dataTransfer.dropEffect = 'move';
        this.classList.add("over");
        e.preventDefault();
    }

    function dragLeave(e) {
        this.classList.remove("over");
        e.preventDefault();
    }

    function drop(e) {
        this.classList.remove("over");

        // obtenemos el id de la imagen que estamos moviendo
        const imgID = e.dataTransfer.getData("text/plain");
        const img = document.getElementById(imgID);

        if (this.innerHTML) {
            if (img.parentElement.parentElement.id == "contenedor") {
                // movemos una imagen encima de otra imagen dentro del contenedor

                // cogemos los valores de la imagen que se encuentra en el destino
                const orig = this.querySelector("img");
                // cogemos el contenedor de la imagen original
                const dest = img.parentElement;

                // movemos la imagen que arrastramos
                moverImagen(img, this);
                // movemos la imagen que se encuentra en el contenedor donde
                // hemos arrastrado la imagen
                moverImagen(orig, dest);
            }
        } else {
            // movemos la imagen a un contenedor vacio
            moverImagen(img, this);
        }
        e.preventDefault();

        completado();
    }

    /**
     * Funcion para mover una imagen.
     *
     * @param {object} origen - imagen a mover
     * @param {object} destino - contenedor donde poner la imagen
     */
    function moverImagen(origen, destino) {
        const fragment = document.createDocumentFragment();
        fragment.appendChild(origen);
        destino.appendChild(fragment);
    }

    /**
     * Funcion que verifica si se ha completado
     */
    function completado() {
        const resultado = document.getElementById("resultado");
        resultado.classList.add("hide");

        const imgs = document.querySelectorAll("#contenedor img");
        if (imgs.length != 18) {
            return false;
        }

        if ([...imgs].every((el, index) => el.id == "i" + index)) {
            resultado.classList.remove("hide");

        }
    }
}