// querySelector (retorna en ninguno o hasta un elemento que concuerde con el selector)

// .clase
// #id
const heading = document.querySelector('.header__texto h2'); //retorna a 0 o un elemento
heading.textContent = 'Nuevo heading';
// heading.classList.add('nueva-clase'); para agregar clases
console.log(heading);



// querySelectorAll(llama a toodos los que correspondan)

const enlaces = document.querySelectorAll('.navegacion a');
// console.log(enlaces[0]);
enlaces[0].textContent = 'Nuevo Texto para Enlace';
enlaces[0].classList.add('nueva-clase');
// enlaces[0].classList.remove('navegacion__enlace');
// enlaces[0].href = 'http://google.com';


// getElementById
// const heading2 = document.getElementById('heading');
// console.log(heading);

// Generar un nuevo enlace 
//(JavaScript recomienda crear elementos con mayusculas)
const nuevoEnlace = document.createElement('A');

// Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';

//Agregar el texto
nuevoEnlace.textContent = 'Tienda Virtual';

//Agregar la clase 
nuevoEnlace.classList.add('navegacion__enlace');

// Agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);


// Eventos

// console.log(1);

// window.addEventListener('load', function(){ //load espera a que el js y los archivos que dependen del HTML esten listos
//     console.log(2);
// })

// window.onload = function(){
//     console.log(3);
// }


// document.addEventListener('DOMContentLoaded', function() { // Solo espera que se cargue el HTML, pero no espera css o img
//     console.log(4)
// })

// console.log(5);
// window.onscrroll = function(evento){
//     console.log(evento);
// }

// Seleccionar elemnetos y sasociales un evento
// const btnEnviar = document.querySelector('.boton.boton--primario');
// btnEnviar.addEventListener('click', function(evento) {
//     console.log(evento);
//     evento.preventDefault();
// })

// validar formulario

// console.log('Enviando formulario')


// Eventos de los imput y los text area

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto );
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

// Evento de Submit
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    // validar formulario
    const { nombre, email, mensaje } = datos;

    if(nombre === ''|| email === '' || mensaje === ''){
        mostrarError('Todos los campos son obligatorios')
       
        return ; //Corta la ejecucion del codigo
    }

    // Crrear la alerta de Enviar Correctamene
    mostrarAlerta('Mensaje enviado corrrectamente');
    limpiar();
});

function leerTexto(e){
    // console.log(e.target.value);
    datos[e.target.id] = e.target.value;

    // console.log(datos);
}

function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error){
        alerta.classList.add('error');
    }else{
        alerta.classList.add('correcto')
    }

    formulario.appendChild(alerta)

}

function mostrarError(mensaje) {
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;
    alerta.classList.add('error');

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}

//lipiar imput
function limpiar() {
    nombre.value = "";
    email.value = "";
    mensaje.value = "";
}
