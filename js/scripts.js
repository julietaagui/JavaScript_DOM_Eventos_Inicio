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
// enlaces[0].href = 'http://google.com';

// getElementById
const heading2 = document.getElementById('heading');
console.log(heading);

