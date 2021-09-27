
function acierto(tarjetas){
    console.log("acierto");
    tarjetas.forEach(function(elemento){
        elemento.classList.add("acertada")
        console.log(elemento);
    });
    //agregamos el sonido de acierto
    document.querySelector("#sonido-acierto").play();
    
}

function error(tarjetas){
    console.log("error");
    tarjetas.forEach(function(elemento){
        elemento.classList.add("error")
        console.log(elemento);
    });

    //agregamos el sonido de error
    document.querySelector("#sonido-error").play();

    setTimeout(function(){
        tarjetas.forEach(function(elemento){
            elemento.classList.remove("descubierta");
            elemento.classList.remove("error");
        })
    }, 1000);
}
