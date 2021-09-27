var puntajeTotal=0;
var puntajeTexto;
function puntaje(){
    
    //sacamos la cantidad de movimientos  sobrantes para llegar al maximo de movimientos permitidos en el nivel
    var puntaje=niveles[nivelActual].movimientosMax-movimientos;

    //sumamos el  puntaje del nivel al total de puntos que teniamos
    puntajeTotal=puntajeTotal+puntaje;

    //si el puntaje el menor a cero ponemos el puntajeTotal a cero 
    //(para garantizarnos que no haya numeros negativos)
    if(puntajeTotal<0){
        puntajeTotal=0;
    }

    puntajeTexto=puntajeTotal;
    
    //colocamos un cero delante si el menor a 10 para que siempre tenga dos digitos
    if(puntajeTotal<10){
        puntajeTexto= "0" + puntajeTotal;
    }
    
    document.querySelector("#puntosValor").innerText=puntajeTexto;
    
}

//Reiniciamos las variables de puntaje
function reiniciarPuntaje(){
    puntajeTotal=0;
    puntajeTexto=puntajeTotal;
    if(puntajeTotal<10){
        puntajeTexto= "0" + puntajeTotal;
    }
    document.querySelector("#puntosValor").innerText=puntajeTexto;
}

