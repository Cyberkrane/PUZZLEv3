var pochocles = [{
        nombre: 'Dark Souls',
        img: "./img/dark Souls/ds.jpg",
    },
    {
        nombre: 'Another',
        img: "./img/another/another.jpg",
    },
    {
        nombre: 'Blood C',
        img: "./img/blood c/blood c.jpg",
    },
    {
        nombre: 'cry of fear',
        img: "./img/cry of fear/cry of fear.jpg",
    },
    {
        nombre: 'dead space',
        img: "./img/dead space/dead space.jpg",
    },
    {
        nombre: 'diablo 2',
        img: "./img/diablo2/diablo2.jpg",
    },
    {
        nombre: 'Doom',
        img: "./img/doom/DOOM.jpg",
    },
    {
        nombre: 'FMA',
        img: "./img/FMA/fma.jpg",
    },
    {
        nombre: 'Half Life',
        img: "./img/half-life/Half-life.jpg",
    },
    {
        nombre: 'Hell Girl',
        img: "./img/hell-girl/hg.jpg",
    },
    {
        nombre: 'kf-dlc',
        img: "./img/kf-dlc/kf-dlc.jpg",
    },
    {
        nombre: 'killing floor',
        img: "./img/killing floor/killing floor.jpg",
    },
    {
        nombre: 'killing floor2',
        img: "./img/killing floor2/kf2.jpg",
    },
    {
        nombre: 'one punch man',
        img: "./img/one-punch-man/one punch man.jpg",
    },
    {
        nombre: 'parasite',
        img: "./img/parasite/parasite.png",
    },
    {
        nombre: 'quake',
        img: "./img/quake/quake.jpg",
    },
    {
        nombre: 'skyrim',
        img: "./img/skyrim/Skyrim.jpg",
    },
    {
        nombre: 'solaire',
        img: "./img/solaire/solaire.jpg",
    },
    {
        nombre: 'tokio-ghoul',
        img: "./img/tokio-ghoul/tokyo-ghoul.jpg",
    },
    {
        nombre: 'violeta ervergarden',
        img: "./img/violeta evergarden/violet evergarden.jpg",
    },

];



for (i = 0; i <= pochocles.length; i++) {

    var opciones = document.write('<div class="lista">' + '<img src="' + pochocles[i].img + '"alt="aqui deberria haber una foto"></img>' + '<h6 class="text-mute">' + pochocles[i].nombre + '</h6>' + '</div>' + "<br>");

}