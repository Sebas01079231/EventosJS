window.addEventListener('scroll', () =>{
    // console.log('scrolling');

    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();

    // console.log(ubicacion);

    if (ubicacion.top < 791) {
        console.log('El elemento es visible');
    } else{
        console.log('estas lejos del elemento');
    }
});