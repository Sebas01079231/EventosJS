const input = document.querySelector('.busqueda');

// input.addEventListener('keydown', () =>{
//     console.log('Se presiono una tecla');
// });
// input.addEventListener('keyup', () =>{
//     console.log('Se despresiono una tecla');
// });
// input.addEventListener('copy', () =>{
//     console.log('Se copio el texto');
// });
// input.addEventListener('cut', () =>{
//     console.log('Se corto algo');
// });
// input.addEventListener('paste', () =>{
//     console.log('Se pego algo');
// });


input.addEventListener('blur', () =>{
    console.log('se ejecuto un blur');
});


// input.addEventListener('input', () =>{
//     console.log('se ejecuto un input');
// });


input.addEventListener('input', (e) =>{
    if (e.target.value == '') {
        console.log('Validacion incorrecta')
    }

    // console.log(e);
});


