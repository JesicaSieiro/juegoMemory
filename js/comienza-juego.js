// Escribimos los niveles dinámicamente
escribeNiveles();

// Asignamos eventos iniciales
document.querySelectorAll(".reiniciar").forEach(function(elemento) {
  elemento.addEventListener("click", reiniciar);
});

document
  .querySelector("#juego-normal")
  .addEventListener("click", iniciaJuegoNormal);

document
  .querySelector("#juego-relax")
  .addEventListener("click", iniciaJuegoRelax);

document
  .querySelector("#control-nivel")
  .addEventListener("click", muestraMenuNiveles);
document
  .querySelector("#cierra-niveles")
  .addEventListener("click", ocultaMenuNiveles);

//por cada elemento li con clase nivel ejecutamos la funcion cambiaNivel al hacer click 
document.querySelectorAll(".nivel").forEach(function(elemento) {
  elemento.addEventListener("click", cambiaNivel);
});

document.querySelector("#subir").addEventListener("click", cargaNuevoNivel);

//toda la etiqueta body puede recibir el evento 
//clickFueraDeMenu cdo se hace click sobre el
document.querySelector("body").addEventListener("click", clickFueraDeMenu);

//si presiono la tecla escape se lanza la funcion para cerrar el menu
document.addEventListener("keydown", teclaEscCierraMenu);

document.querySelector("#modo").addEventListener("click",mostrarBienvenida);

//Mostramos pantalla de bienvenida
document.querySelector("#bienvenida").classList.add("visible");

