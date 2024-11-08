function tocaSom(idElementaudio){
        document.querySelector(idElementaudio).play(); /*parametro id tag audio */
}

const listaTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador<listaTeclas.length) {
        listaTeclas[contador].onclick = function(){ /* função anonima  */
                tocaSom('#som_tecla_pom');
        };

        contador = contador+1;
        console.log(contador);
}