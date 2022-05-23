// estado de la app
let colorCielo = "white";


function divClicado() {
    console.log("Me has clicado, pero ahora estoy en dinodom.js");
}

// Cread un función que si la invoco, me oculta el dinoseto del DOM
function ocultarDinoseto() {

    // 1. querySelector obtener el dinoseto del DOM
    let dinoseto = document.querySelector("#dinoseto img");

    // 2. Establecer su propiedad style.display a "none"
    dinoseto.style.display = "none";
}

// Asociar evento click a un elemento del DOM

// 1. Selecciono el elemento del DOM
let botonDinoseto = document.querySelector("#dinoBoton");

// 2. Establecemos su propiedad onmouseclick; con la función que debe ejecutar
botonDinoseto.onclick = ocultarDinoseto;


// Usar addEventListener para asociar el evento click al título de la página
let titulo = document.querySelector("#title");
titulo.addEventListener("click", function () {
    console.log("Has hecho click en el título");
});

titulo.addEventListener("click", function () {
    console.log("Yo también me ejecuto");
});

// Ejercicio 1: Cielo Azul. Al hacer click en el botón, el body se pinta de color azul

// Ejercicio 1-BONUS(hacer al final): El texto del botón cambia a Cielo Blanco; y al hacer click en el, el body cambia al color blanco

// Si la variable de estado es "white", debemos pintar el cielo a azul; cambiar el texto del botón a "Cielo Blanco", y actualizar la variable de estado a "blue"

// Si la variable de estado es "blue", debemos pintar el cielo a blanco; cambiar el texto del botón a "Cielo Azul", y actualizar la variable de estado a "white"

// Ejercicio 2: Poner huevo. Al hacer click en el botón poner huevo, se crea un nodo del tipo 'img' y hay que añadirlo como hijo del contenedor #dinoseto

document.querySelector("#nuevo-huevo").addEventListener("click", function () {

    let huevo = document.createElement('img'); // crea un objeto del tipo HTMLNodeImg
    huevo.src = "./img/dinohuevo.png"; // actuliza el atributo/propiedad del objeto 
    huevo.id = Math.random();

    huevo.addEventListener("dblclick", function (event) {
        console.log("Has hecho dbl click encima de un huevo");
        console.log(event.target.id)

        event.target.src = "./img/eclosion.png"
    })


    document.querySelector("#dinoseto").appendChild(huevo);


});


// Ejercicio 3- MEGA BONUS (es necesario utilizar el objeto evento  que mañana): Al hacer doble click en el huevo, hacer eclosionar.
// Asociar evento 'dblclick' cada vez que creais una 'img' del huevo
// en la función del 'dblclick' cambiar el atributo .src por la nueva imagen


// Queremos mostrar por consola, las teclas que el usuario pulsa
document.body.addEventListener("keyup", function (event) {
    console.log("Tecla pulsada! ");
    console.dir(event.key);
})

// Recorrer todas las <p> y les voy añadir un evento click

let allParagraphs = document.querySelectorAll("p");

allParagraphs.forEach(nodo => {
    // asociar un evento click en cada uno de los nodos. Quiero mostrar por consola el .textContent de cada nodo cuando hagamos click en el

    nodo.addEventListener("click", function (event) {
        console.log(event.target.textContent);
    });
});