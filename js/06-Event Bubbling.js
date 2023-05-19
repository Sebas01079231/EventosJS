const divCard = document.querySelector('.card');
const divInfo = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

divCard.addEventListener('click', e =>{
    e.stopPropagation();
    console.log('click en divCard');
});
divInfo.addEventListener('click', e =>{
    e.stopPropagation();
    console.log('click en divInfo');
});
titulo.addEventListener('click', e =>{
    e.stopPropagation();
    console.log('click en titulo');
});

