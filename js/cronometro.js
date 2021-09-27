
function iniciaCronometro(){
    var segundos =59;
    var minutos=0;
    var segundosTexto;
    var minutosTexto;
   

    function actualizarContador(){
     
     //RESTAMOS DE A UN SEGUNDO
     segundos--;

     //CUANDO LOS SEGUNDOS LLEGAN A CERO , REINICIAMOS LOS SEGUNDOS A 59 
     //Y RESTAMOS UN MINUTOS
     if(segundos<0){
         segundos=59;
         minutos--;
     }

     //CUANDO LOS MINUTOS LLEGAN A CERO, REINICIAMOS LOS MINUTOS Y SEGUNDOS A 0
     //Y LIMPIAMOS EL CRONOMETRO (que ejecuta la funcion a cada segundo) 
     if(minutos<0){
        segundos=0;
        minutos=0;
        clearInterval(cronometro);
        //lanzamos la pantalla de timeOver
        timeOver();
    }
     //GUARAMOS LOS MINUTOS Y SEGUNTOS EN LAS VARIABES DE TEXTO
     segundosTexto=segundos;
     minutosTexto=minutos;

     //PARA CONTINUAR TENIENDO DOS DIGITOS AUNQUE SEA UN NUMERO MENOR A 10
     //AGREGAMOS UN CERO DELANTE DEL TEXTO CORRESPONDIENTE A LOS SEGUNDOS
     if(segundos<10){
         segundosTexto= '0'+segundos;
     }

     //HACEMOS LO MISMO CON MINUTOS
     if(minutos<10){
         minutosTexto='0'+minutosTexto;
     }

     //colocamos el texto dentro del tag html (buscando el elemento por css)
     document.querySelector("#minutos").innerText=minutosTexto;
     document.querySelector("#segundos").innerText=segundosTexto;

    }
    //en el intervalo de un segundo ejecuta la funcion actualizarContador
    cronometro=setInterval(actualizarContador, 1000);

}