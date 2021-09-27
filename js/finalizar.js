function finalizar(){
    //limpiamos el cronometro
    clearInterval(cronometro);
    
    //comprobamos si no llegamos el final de noveles disponibles
    //si quedan niveles, sacamos el puntaje y mostramos la pantalla para subir de nivel
    // si no mostramos la pantalla que se acabó el juego
    if(nivelActual<niveles.length - 1){
        puntaje();
        document.querySelector("#subeNivel").classList.add("visible");
    }else{
        document.querySelector("#endGame").classList.add("visible");
    }
    
}