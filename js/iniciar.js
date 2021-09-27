function iniciar(){
    
    //reiniciamos la cantidad de movimientos a 0
    movimientos=0;
    //reiniciamos el tag html de movimientos en 00
    document.querySelector("#mov").innerText="00";
    //rellenamos el numero de movimientos maximo que depende del nivel
    maxContador();
    //repartimos las cartas
    replicarTrajetas(niveles[nivelActual].tarjetas);
    clearInterval(cronometro);

   

    //sacamos la clase visible de la capa feedback para que despues de reiniciar 
    //el juevo se vea la pantalla 
  
   document.querySelector(".selecciona-nivel").classList.remove("visible");
   document.querySelector("#endGame").classList.remove("visible");
   document.querySelector("#timeOver").classList.remove("visible");
   document.querySelector("#gameOver").classList.remove("visible");
   document.querySelector("#subeNivel").classList.remove("visible");

    document.querySelectorAll(".tarjeta").forEach(function (elemento) {
        elemento.addEventListener("click", descubrir);
    });

    //si modo relax es false iniciamos el cronometro y colocamos el puntaje , movimientos y cronometro visible
    //sino ocultamos el puntaje , movimientos y cronometro visible
    if(!modoRelax){
        iniciaCronometro();
        if(nivelActual ==0){
            reiniciarPuntaje();
        }
        document.querySelector("#cronometro").classList.remove("cronometro-oculto");
        document.querySelector("#mov-total").classList.remove("cronometro-oculto");
        document.querySelector("#puntaje").classList.remove("cronometro-oculto");
    }
    else{
        
        document.querySelector("#cronometro").classList.add("cronometro-oculto");
        document.querySelector("#mov-total").classList.add("cronometro-oculto");
        document.querySelector("#puntaje").classList.add("cronometro-oculto");
    }
   
}

function reiniciar(){
   
    actualizaNivel();
    iniciar();
    
    reiniciarPuntaje();
}


function iniciaJuegoNormal() {
    nivelActual=0;
    actualizaNivel();
   
     
    modoRelax = false;
    document.querySelector("#bienvenida").classList.remove("visible");
    iniciar();
    document.querySelector(".control-nivel").classList.add("control-oculto");
    
  }
  
  function iniciaJuegoRelax() {
    nivelActual=0;
    actualizaNivel();
    
   // iniciar();
    reiniciarPuntaje();
    modoRelax = true;
    document.querySelector("#bienvenida").classList.remove("visible");
    iniciar();
    document.querySelector(".control-nivel").classList.remove("control-oculto");
  }
  
