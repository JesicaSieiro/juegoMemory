//FUNCION PARA MEZCLAR TARJETAS
function barajarTarjetas(lasTrajetas) {
    //math floor redondea el numero para abajo
    //math.random da un numero aleatorio entre 0 y 0.99 (nunca llega a uno)
    //si multiplico por 10 hago que el resultado vaya de 0 a 9.99
    //poniendo +1 hago que siempre sea de 1 el comienzo
    //var resultado = Math.floor(Math.random() * 10);
    //sort ordena un array a partir del valor que le paso
    //que hago que desde la mitad le reste un numero random 
    //y a partir de ahi ordene al array con tarjetas (para que quede mezclado)

    var totalTargetas = lasTrajetas.concat(lasTrajetas);
    var resultado = totalTargetas.sort(function () {

        return 0.5 - Math.random();
    });
    return resultado;
}

function replicarTrajetas(lasTrajetas) {
    
    //obtener elemento mesa
    var mesa = document.querySelector("#mesa");
    //limpiar div mesa
    mesa.innerHTML = "";
    //MEZCLO LAS TARJETAS
    var barajaMezclada = barajarTarjetas(lasTrajetas);
    //recorrer el array
    barajaMezclada.forEach(function (elemento) {
     
        //creamos un div  para la tarjeta
        var tarjeta = document.createElement("div");
        //dibujar por cada elemento una tarjeta con el emoji dentro
        //colocamos el atributo data-valor con el emoji para poder tomarlo y comparar los valores luego
        tarjeta.innerHTML = "<div  class='tarjeta' data-valor="+ elemento + ">"
            + "<div class='tarjeta__contenido'>"
            + elemento
            + "</div>"
            + "</div>";
        //incorporamos el div  creado dentro del div mesa
        mesa.appendChild(tarjeta);

    })


}