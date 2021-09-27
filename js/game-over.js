function gameOver(){
    //hago un clearInterval para parar el cronometro
    clearInterval(cronometro);
    //muestro la pantalle de que perdio por exceder el total de movimientos
    document.querySelector("#gameOver").classList.add("visible");
}

//muertro la pantalla de que perdio por exceder el tiempo maximo
function timeOver(){
    document.querySelector("#timeOver").classList.add("visible");
}