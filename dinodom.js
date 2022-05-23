// Variables de estado
let numHuevos = 0;

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
