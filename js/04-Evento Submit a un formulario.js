const formulario = document.querySelector('#formulario');


formulario.addEventListener('submit', (e) =>{
    e.preventDefault();

    console.log('Consultar una api');

    console.log(e.target.action);
});