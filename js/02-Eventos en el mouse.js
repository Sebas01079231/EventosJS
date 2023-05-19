const nav = document.querySelector('.navegacion');

nav.addEventListener('click', () =>{
    console.log('Diste click');
});
nav.addEventListener('dblclick', () =>{
    console.log('Diste doble click');
});
nav.addEventListener('mouseout', () =>{
    console.log('quitaste el mouse en nav');
});
nav.addEventListener('mouseenter', () =>{
    console.log('pusiste el mouse en nav');
});
nav.addEventListener('mousedown', () =>{
    console.log('mousedown');
});
nav.addEventListener('mouseup', () =>{
    console.log('mouseup');
});
