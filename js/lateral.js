var pochocles = [{
        nombre: 'Another',
        img: "./img/another/another.jpg",
    },
    {
        nombre: 'Blood C',
        img: "./img/blood c/blood c.jpg",
    },

    {
        nombre: 'violeta ervergarden',
        img: "./img/violeta evergarden/violet evergarden.jpg",
    },

];



for (i = 0; i <= pochocles.length; i++) {

    var opciones = document.write('<div class="lista">' + '<img src="' + pochocles[i].img + '"alt="aqui deberria haber una foto"></img>' + '<h6 class="text-mute">' + pochocles[i].nombre + '</h6>' + '</div>' + "<br>");

}