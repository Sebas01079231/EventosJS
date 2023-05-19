const divCard =  document.querySelector('.card');

const image = divCard.children[0];
image.classList.add('img');

divCard.addEventListener('click', e =>{
    
    if(e.target.classList.contains('img')){
        console.log('Diste click en imagen');
    };
    if(e.target.classList.contains('info')){
        console.log('Diste click en info');
    };
    if(e.target.classList.contains('concierto')){
        console.log('Diste click en concierto');
    };
    if(e.target.classList.contains('titulo')){
        console.log('Diste click en titulo');
    };
    if(e.target.classList.contains('precio')){
        console.log('Diste click en precio');
    };
    // console.log(e.target.classList);
});