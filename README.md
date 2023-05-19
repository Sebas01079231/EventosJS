# eventos -> 
  son acciones que suceden en un elemento HTML. practicamente cuando sucede algo se ejecuta un codigo

# DOMContentLoaded -> 
  se ejecuta cuando el html esta listo

# eventos con el mouse ->
    click -> cuando se da click
    dblclick -> doble click
    mouseenter -> cuando se pone el mouse en la zona del elemento
    mouseout -> cuando se quita el mouse en la zona del elemento
    mousedown -> similar a click, la diferencia radica en que este se ejecuta con solo dar click y 'click' con dar click y soltarlo
    mouseup -> cuando sueltas el mouse

# Eventos en los inputs ->
    keydown -> se ejecuta cuando se presiona una tecla en el input

    keyup ->  se ejecuta cuando se suelta la tecla

    blur -> se ejecuta cuando estamos en un input y damos click por fuera de el. (es excelente para validaciones)

    copy -> se ejecuta cuando se copia el texto del input

    paste -> se ejecuta cuando se pega un texto en el input

    cut -> se ejecuta cuando se corta un texto en el input

    input -> ejecuta todos los eventos anteriores excepto el blur.

    se puede declarar un parametro dentro de los parentesis de la funcion anonima, este corresponde a el evento que se esta presentando y te da muchos valores que puedes checar, 
    
    -uno muy habitual es el '.type', que te dice que tipo de elemento se le esta aplicando el evento

    -'.target' me dice en que elemento especifico se esta aplicando 

    -la combinacion que veras mucho es: 
        .targe.value -> me muestra en consola lo que el usuario esta digitando en el input. y este me sirve para validar formularios, ejemplo:

        input.addEventListener('input', (e) =>{
            if (e.target.value == '') {
                console.log('Validacion incorrecta')
            }
        });

        me dice que si el usuario ha dejado vacio ese campo no tendra una validacion correcta

# Evento submit en el formulario -> 
  Este evento es muy usado, y me permite ejecutar una accion cuando se presiona un submit antes de ser enviado a su url indicado en su action. para que esto funcione es necesario un metodo llamado:

    -preventDefault() -> es un método que se utiliza para detener la acción predeterminada de un evento que se desencadena en un elemento HTML.
        Por ejemplo, cuando un usuario hace clic en un enlace (<a>), se activa el evento "click" y la acción predeterminada de este evento es llevar al usuario a la URL especificada en el atributo href del enlace. Sin embargo, si se llama al método preventDefault() dentro del controlador de eventos "click", la acción predeterminada se detendrá y el usuario no será redirigido a la URL.

    ejemplo:

    formulario.addEventListener('submit', (e) =>{
        e.preventDefault();

        console.log('Consultar una api');
        console.log(e.target.action);
    });

# Eventos al dar scroll con el mouse ->
    window -> es un objeto global que representa la ventana del navegador. Este objeto proporciona métodos y propiedades para interactuar con la ventana del navegador y su contenido.

    getBoundingClientRect -> es un método que devuelve un objeto con información sobre la posición de un elemento en relación con la ventana del navegador. 

    -un uso real que se le puede dar al poner eventos al scroll seria animar elementos al llegar a su posicion.

# El Event Bubbling o burbujeo de eventos -> 
  es un comportamiento que ocurre en el modelo de eventos de JavaScript, donde un evento disparado en un elemento específico en el DOM se propaga a través de sus padres hacia arriba en la jerarquía del DOM hasta llegar al elemento raíz. Esto significa que cuando se dispara un evento en un elemento, dicho evento también se disparará en todos los elementos que tambien tengan registrado un evento.

    formas de prevenir el event bubbling:

    stopPropagation() -> 
        detiene la propagación del evento en el punto actual, evitando que se propague más allá del elemento actual. 
            event.stopPropagation();

    Delegation -> 
        en esta forma se va declarando condicionales para que se ejecute el evento si es que la condicion es verdadera. ejemplo:

        const divCard =  document.querySelector('.card');

        divCard.addEventListener('click', e =>{
            
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
            // console.log('Diste click en card');
        });
    
        de esta manera se evita que se propague el evento.

    por metodo -> 
        esta forma se suele usar cuando se genera html desde js.

            const parrafo3 = document.createElement('p');
            parrafo3.textContent = '$800 por persona';
            parrafo3.classList.add('precio');

            parrafo3.onclick = function() {
                nuevaFuncion(1);
            };

            function nuevaFuncion (id) {
                console.log('desde nueva funcion', id);
            }
