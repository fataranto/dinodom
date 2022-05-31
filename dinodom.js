// Variables de estado
let numHuevos = 0;

// a capturar el evento 'submit'. Este es el evento que se captura cuando un usuario hace click en el botón de submit de un formulario

let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // manera 1 de recuperar el valor de un campo del formulario
    let width = document.querySelector("#width").value;

    document.querySelector("img").style.width = width + "px";

    // otra manera de recuperar los datos de un formulario
    let formData = new FormData(form);

    // recupero el color que el usuario ha introducido el control
    let color = formData.get("color");
    // width = formData.get("width")
    document.querySelector("img").style.border = `5px dashed ${color}`;
});

function pintarCielo() {
    // Pintar el cielo de azul es cambiar el color de fondo del body a azul
    //document.querySelector("body").style.backgroundColor = "blue";

    document.body.style.backgroundColor = "blue";
}

function ocultarDinoseto() {
    document.querySelector("#dinoseto").style.display = "none";
}

/**
 * JavaScript nos va a proporcionar un objeto del tipo 'event'. Este objeto contiene información interesante sobre el evento que se acaba de caputrar
 * 
 * 1. Quién ha capturado el evento (ha sido un botón? Ha sido un div? ha sido una imagen?)
 * 2. Información interesante asociada al evento, que dependerá del tipo de evento capturado
 *   2.1 evento de tipo 'click', una posible información inetersante son las coordenadas X,Y donde el usuario ha hecho click
 *  2.2 evento keyup, puede ser información sobre la tecla pulsada
 */
function ponerHuevo() {
    // 1. Crear un nuevo elemento del tipo img
    // 2. Voy a establecer el valor del atributo .src con la ruta a la imagen del huevo
    // 3. Añadir el elemento creado como hijo de #dinoseto

    let huevo = document.createElement("img");
    huevo.src = "./img/dinohuevo.png";
    huevo.style.width = "200px";

    // Asociar de forma dinámica un evento del tipo 'dblclick'
    huevo.addEventListener("dblclick", function (event) {
        // el elemento del DOM que ha capturado el evento 'dblclick', cámbiale el valor de la propiedad .src por la nueva imagen
        event.target.src = "./img/eclosion.png";
    });

    document.querySelector("#dinoseto").appendChild(huevo);
}

// tenemos un objeto DOM en la variable btnOcultarDinoseto
let btnOcultarDinoseto = document.querySelector("#dinoBoton");

// la propiedad onclick toma por valor una función. Pero no toma por la valor la ejecucución de la función

// btnOcultarDinoseto.onclick = ocultarDinoseto(); <-- INCORRECTO

btnOcultarDinoseto.onclick = ocultarDinoseto;

// asociar evento mediante un listener
let btnPonerHuevo = document.querySelector("#nuevo-huevo");
btnPonerHuevo.addEventListener("click", ponerHuevo);


// asociar otro evento click al btnPonerHuevo que haga que por consola el dinosaurio diga "He puesto un nuevo! Y la fecha es ..."
btnPonerHuevo.addEventListener("click", function () {

    numHuevos = numHuevos + 1;
    console.log(`He puesto mi huevo número ${numHuevos} y son las ` + Date());
});

document.body.addEventListener("keyup", function (event) {
    // console.log("He pulsado una tecla");
    // console.dir(event.key);
});

// Primer ejemplo de código asíncrono

// Variable va a decirnos el número de segundos que ha pasado desde que hemos abierto la app
let segundos = 0;

// Ejecutame la función cada 1000ms (1 segundo)
// setInterval(() => {
//     segundos++;
//     console.log("hola hola! Desde que abriste la app han pasado estos segundos: " + segundos);
// }, 1000);


// evento change
let questionarioDino = document.querySelector("#questionario");
questionarioDino.addEventListener("change", function (event) {

    let resultado = document.querySelector("#resultado-test");
    resultado.style.display = "block";

    if (event.target.value == "1") {
        resultado.style.color = "green";
        resultado.textContent = "¡Respuesta Correcta!";
    }

    else {
        resultado.style.color = "red";
        resultado.textContent = "Necesitas mejorar en tus conocimientos réptiles";
    }

});

// evento input
document.querySelector("#cambiaTexto").addEventListener("change", (event) => {

    let nuevoTexto = event.target.value;

    document.querySelector("h1").textContent = nuevoTexto;
});

// evento input a través de la propiedad oninput
document.querySelector("#cambiaColorFondo").oninput = function (event) {
    let nuevoColor = event.target.value;

    document.body.style.backgroundColor = nuevoColor;
}

// Recuperar todos los elementos del tipo <p> que esten dentro del id="animales"
let animales = document.querySelectorAll("#animales p");

animales.forEach(animal => {
    animal.addEventListener("click", function (event) {
        console.log(event.target.textContent);
    })
})

animales.forEach(animal => {
    // para cada nodo <p> le asociamos un evento
    animal.addEventListener("mouseenter", function (event) {
        event.target.style.backgroundColor = "yellow";
    });

    animal.addEventListener("mouseleave", function (event) {
        event.target.style.backgroundColor = "white";
    });
});
