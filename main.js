function tocaSom(idElementaudio){
        document.querySelector(idElementaudio).play(); /*parametro id tag audio */
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador<listaDeTeclas.length) {

        instrumento = listaDeTeclas[contador].classList[1];
        console.log(instrumento);

        listaDeTeclas[contador].onclick = function(){ /* função anonima  */
                tocaSom('#som_tecla_pom');
        };

        contador = contador+1;
        console.log(contador);
}