//funcion que le agrega la clase css que da vuelta la carta
function descubrir() {
    var descubiertas;
    var tarjetasPendientes;
    
    //obtenemos todas las tarjetas que tengan la calse descubierta y no tengan la clase acertada
    var totalDescubiertas=document.querySelectorAll(".descubierta:not(.acertada)");
    console.log(totalDescubiertas);

    //si el total de cartas descubiertas es mayor a uno sale de la funcion
   if(totalDescubiertas.length > 1){
       //si el numero de cartas descubiertas es mayor a uno sale de la funcion 
       //y no da vuelta la siguiente carta
        return;
    }

    this.classList.add("descubierta");

    //agregamos el sonido del audio de dar vuelta la carta
    //clonamos el nodo del sonido para mejorar el audio
    document.querySelector("#sonido-carta").cloneNode().play();

    //COMPROBAR LOS VALORES DE LAS DOS CARTAS
    //obtenemos el total de cartas  descubiertas
    descubiertas=document.querySelectorAll(".descubierta:not(.acertada)");
    //comprobamos la cantidad de cartas dadas vuelta () porque si no tengo un minimo de dos no puedo comparar valores)
    //entonces si son menor a dos sale de la funcion
    if(descubiertas.length<2){
        return;
    }

    //tomamos los valores de los dos elementos de la lista de nodos por texto
    
    comparar(descubiertas);
    actualizarMovimientos();

    //buscamos todas las tarjetas que no tienen la calse acertada
    tarjetasPendientes=document.querySelectorAll(".tarjeta:not(.acertada)");

     //si no quedas mas tarjetas sin que hayan sido acetadas 
     //termino el juego con la funcion finalizar
     if(tarjetasPendientes.length===0){

         //ejecutamos la funcion despues de un segundo
         //para tener tiempo de ver que ganamos

         setTimeout(finalizar(),2500);
     }
   
}

function comparar(tarjetasAComparar){
     //TOMO LOS VALORES DE LAS CARTAS
    //accedo al atributo usando getAttribute
    var cartaDescubierta0=tarjetasAComparar[0].getAttribute("data-valor");
    //accedo al atributo con dataset que es la manera que tiene js a acceder a los atributos que empiezan con  'data'
    var cartaDescubierta1=tarjetasAComparar[1].dataset.valor;
    //compruebo si los valores son iguales
    if(cartaDescubierta0 === cartaDescubierta1){
        acierto(tarjetasAComparar);

    }
    else{
        error(tarjetasAComparar);
    }
}

//FUNCION PARA GIRAR TARJETA
function darVuelta() {
    //Selecciono todas las tarjetas y ejecuto una funcion anonima 
    //que toma cada elemento del array y vincula el  elemento click
    //con el addListener para que cada vez que se clickee sobre un elemento 
    //se ejecute la funcion descubrir en el
    document.querySelectorAll(".tarjeta").forEach(function (elemento) {
        elemento.addEventListener("click", descubrir);
    });
}