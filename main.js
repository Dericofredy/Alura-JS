function tocaSom(idElementaudio){
        document.querySelector(idElementaudio).play(); /*parametro id tag audio */
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador<listaDeTeclas.length) {

        const tecla = listaDeTeclas[contador];
        
        instrumento = tecla.classList[1];
        console.log(instrumento);
        //Template String
        const idAudio = `#som_${instrumento}`;
        console.log(idAudio);

        tecla.onclick = function(){ /* função anonima  */
                tocaSom(idAudio);
        };

        contador = contador+1;
        console.log(contador);
}