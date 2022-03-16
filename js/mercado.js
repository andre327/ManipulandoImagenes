
class Automovil {
    constructor(marca, modelo, version, anyo, precio, kilometraje, motor, ciudad, imagen) {
        this.marca = marca;
        this.modelo = modelo;
        this.version = version;
        this.anyo = anyo;
        this.precio = precio;
        this.kilometraje = kilometraje;
        this.motor = motor;
        this.ciudad = ciudad;
        this.imagen = imagen;
    }
}

let auto1 = new Automovil("Audi", "Coupe v10", "R8", 2018, 299900000, 27130, 2000, "Bogotá", "img/audir8.jpg");
let auto2 = new Automovil("Audi", "Avant", "RS6", 2019, 451000000, 67000, 2000, "Medellín", "img/audirs6.jpg");
let auto3 = new Automovil("Audi", "Avant", "RS4", 2020, 311000000, 57000, 2000, "Bogotá", "img/audirs4.jpg");
let auto4 = new Automovil("Nissan", " Np300", "Frontier", 2017, 550000000, 47000, 2000, "Pereira", "img/nissan.png");
let auto5 = new Automovil("Nissan", " I6-tw ", "Sport", 2020, 86500000, 68000, 450, "popayán", "img/nissan2020.jpg");

function mostrarCarro(auto) {
    let contenedorPrincipal = document.getElementById("main-content");
    let conteImg = document.createElement("div");
    contenedorPrincipal.appendChild(conteImg);
    conteImg.setAttribute("class", "estilo-contentImg");

    let imgAuto = document.createElement("img");
    imgAuto.setAttribute("src", auto.imagen);
    imgAuto.setAttribute("class", "img-estilo");
    conteImg.appendChild(imgAuto);

    let valorAuto = document.createElement("label");
    let precioFormat = new Intl.NumberFormat('es-ES', {}).format(auto.precio);
    
    
    let textoValorAuto = document.createTextNode("$" + precioFormat);
    valorAuto.appendChild(textoValorAuto);
    valorAuto.setAttribute("class", "estilo-precio");
    conteImg.appendChild(valorAuto);

    let descripcionVehiculo = document.createElement("label");
    let textoDescripcionVehiculo = document.createTextNode(auto.marca + " " + auto.version + " " + auto.modelo);
    descripcionVehiculo.appendChild(textoDescripcionVehiculo);
    descripcionVehiculo.setAttribute("class", "estilo-descripcion");
    conteImg.appendChild(descripcionVehiculo);

    let anyoVehiculo = document.createElement("label");
    let textoAnyoVehiculo = document.createTextNode(auto.anyo);
    anyoVehiculo.appendChild(textoAnyoVehiculo);

    let kilometrajeVehiculo = document.createElement("label");
    let textoKilometrajeVehiculo = document.createTextNode(auto.anyo + " - " + auto.motor + "motor" + " - " + auto.kilometraje + "km" + " - " + auto.ciudad);
    kilometrajeVehiculo.appendChild(textoKilometrajeVehiculo);
    kilometrajeVehiculo.setAttribute("class", "estilo-kilometraje");
    conteImg.appendChild(kilometrajeVehiculo);
    anyoVehiculo.setAttribute("class", "estilo-anyo");
}

window.addEventListener("keydown", function(event) {
    let busqueda = document.getElementById("textoBusqueda").value;
    if(event.key == "Enter") {
        acomodar();
        if (busqueda == "Audi") {
            mostrarCarro(auto1);
            mostrarCarro(auto2);
            mostrarCarro(auto3);
        }
        else if (busqueda == "Nissan") {
            mostrarCarro(auto4);
            mostrarCarro(auto5);
        }
        else {
        this.alert("No tenemos resultados ");
        }
    }
});
function acomodar() {
    document.getElementById("main-content").innerHTML = "";
}
