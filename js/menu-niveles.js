function escribeNiveles() {
    //buscamos el elemento ul
    var menuNiveles = document.querySelector(".selecciona-nivel ul");
    //por cada nivel creamos un li
    niveles.forEach(function(elemento, indice) {
      var controlNivel = document.createElement("li");
      controlNivel.innerHTML =
        "<button class='nivel' data-nivel=" +
        indice +
        ">Nivel " +
        (indice + 1) +
        "</button>";
        //agregamos un hijo nuevo que es el li que creamos arriba
      menuNiveles.appendChild(controlNivel);
    });
  }
  
  function cambiaNivel() {
      //cada btn tiene un data-nivel diferente (correspondiente al indice)
      //recogemos el nivel de la propiedad quecomienza con data que  tiene el tag
      // parsea el data a entero (porque es un valor textual ->string)
    var nivel = parseInt(this.dataset.nivel);
    //coloca como nivel actual al nivel que se eligio
    nivelActual = nivel;
    actualizaNivel();
    iniciar();
  }
  
  //pone visible el menu para elegir niveles
  function muestraMenuNiveles(evento) {
      //cdo se hace click en un elemento el evento se propaga a todos los padres
      //para evitar que  se propague el evento se usa stopPropagacion
      //si no estuviera stopPropagacion cdo hago click en el btn se ejecutaria 
      // tanto muestraMenuNiveles como clickFueraDeMenu porque el body tendria los
      //dos eventos asociados (por propagacion)
    evento.stopPropagation();
    document.querySelector(".selecciona-nivel").classList.toggle("visible");
  }
  
  //cierra (o pone invisible) el menu para elegir niveles
  function ocultaMenuNiveles() {
    document.querySelector(".selecciona-nivel").classList.remove("visible");
  }
  
  //si hago click fuera delmenu lo cierra
  function clickFueraDeMenu(evento) {
      //evaluamos si se hace click en la etiqueta main dentro del body
      //que tiene la clase selecciona-nivel

      //target es el elemento que se hace click
      //con closest evaluamos que dentro de la linea gerarquica
      //hacia arriba (padre-abuelo-etc) tiene la clase
      //no haga nada (por el return)
    if (evento.target.closest(".selecciona-nivel")) {
      return;
    }
    //sino , no salede la funcion y se oculta el menu
    document.querySelector(".selecciona-nivel").classList.remove("visible");
  }

  function teclaEscCierraMenu(evento) {
    console.log(evento.key);
    if (evento.key === "Escape") {
      ocultaMenuNiveles();
    }
  }