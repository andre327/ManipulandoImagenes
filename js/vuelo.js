class Vuelos {
    constructor(horaSalida, horaLlegada, destino){
        this.horaSalida = horaSalida;
        this.horaLlegada = horaLlegada;
        this.destino = destino;
    }
}
var numberFormat = new Intl.NumberFormat('co-CO');

let horaSalida1 = new Date(2022, 03, 18, 02, 00, 0);
let horaLlegada1 = new Date(2022, 03, 18, 06, 10, 0);

let horaSalida2 = new Date(2022, 03, 25, 11, 00, 0);
let horaLlegada2 = new Date(2022, 03, 25, 12, 00, 0);



let vuelos = [
    {
        horaSalida : horaSalida1,
        horaLlegada : horaLlegada1,
        destino : "ADZ",
        precio : 1662000
    },
    {
        horaSalida : horaSalida2,
        horaLlegada : horaLlegada2,
        destino : "ADZ",
        precio : 562000
    }
];



let destinoT = '';
let horaSalidaTXT = '';
let horaLlegadaTXT = '';


function InsertarInfo(destino, horaSalida, horaLlegada, precio){
    let hSalida = horaSalida.getHours() + ":" + horaSalida.getMinutes();
    let hLlegada = horaLlegada.getHours() + ":" + horaLlegada.getMinutes();

    let priceTXT = 'COP ' + numberFormat.format(precio);

    let diff = horaLlegada.getTime() - horaSalida.getTime();
    let minutos = (diff/(1000*60));
    let horas = parseInt(minutos/60);
    let minutosrestantes = minutos - (horas*60);
    duracionTiempo = horas + 'h y '+minutosrestantes+'m';

    contenedor = document.getElementById('main-content');
    vueloDiv = document.createElement('div');
    vueloDiv.setAttribute('class', 'vuelo');

    masEconomicoDiv = document.createElement('div');
    masEconomicoDiv.setAttribute('class', 'mas-economico');

    masEconomicoSpan = document.createElement('span');
    masEconomicoSpan.appendChild(document.createTextNode(' Más económicos /'));
    masEconomicoSpan.appendChild(document.createTextNode(' Más rápido'));
    masEconomicoDiv.appendChild(masEconomicoSpan);

    horaSalidaDiv = document.createElement('div');
    horaSalidaDiv.setAttribute('class', 'hora-salida');
    horaSalidaTXT = document.createTextNode(hSalida + 'a.m.');
    horaSalidaDiv.appendChild(horaSalidaTXT);

    duracionDiv = document.createElement('div');
    duracionDiv.setAttribute('class', 'duracion')
    duracionDiv.appendChild(document.createTextNode('Duración'));

    horaLlegadaDiv = document.createElement('div');
    horaLlegadaDiv.setAttribute('class', 'hora-llegada');
    horaLlegadaTXT = document.createTextNode(hLlegada + ' a.m.');
    horaLlegadaDiv.appendChild(horaLlegadaTXT);

    inicSalida = document.createElement('div');
    inicSalida.appendChild(document.createTextNode('DOG'));
    inicSalida.setAttribute('class', 'izquierda');

    tiempoLlegada = document.createElement('div');
    tiempoLlegada.appendChild(document.createTextNode(duracionTiempo));
    tiempoLlegada.setAttribute('class', 'tiempo');

    inicLlegada = document.createElement('div');
    inicLlegada.appendChild(document.createTextNode('ADZ'));
    inicLlegada.setAttribute('class', 'derecha');

    directoDiv = document.createElement('div');
    directoDiv.appendChild(document.createTextNode('Directo'));
    directoDiv.setAttribute('class', 'directo');

    precioTotalDiv = document.createElement('div');
    precioTotalDiv.setAttribute('class', 'desde');
    adultosDesdeDiv = document.createElement('div');
    adultosDesdeDiv.setAttribute('class', 'adultos-desde');
    adultosDesdeDiv.appendChild(document.createTextNode('Desde'));

    precioDiv = document.createElement('div');
    precioDiv.appendChild(document.createTextNode(priceTXT));
    precioDiv.setAttribute('class', 'price');

    precioTotalDiv.appendChild(adultosDesdeDiv);
    precioTotalDiv.appendChild(precioDiv);
    
    vueloDiv.appendChild(masEconomicoDiv);

    vueloDiv.appendChild(horaSalidaDiv);
    vueloDiv.appendChild(duracionDiv);
    vueloDiv.appendChild(horaLlegadaDiv);

    vueloDiv.appendChild(inicSalida);
    vueloDiv.appendChild(tiempoLlegada);
    vueloDiv.appendChild(inicLlegada);

    vueloDiv.appendChild(directoDiv);
    vueloDiv.appendChild(precioTotalDiv);

    contenedor.appendChild(vueloDiv);
}

vuelos.forEach(vuelo => {
    InsertarInfo(vuelo.destino, vuelo.horaSalida, vuelo.horaLlegada, vuelo.precio)
});


