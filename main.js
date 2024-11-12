function tocaSom(idElementaudio){
        document.querySelector(idElementaudio).play(); /*parametro id tag audio */
}

const listaDeTeclas = document.querySelectorAll('.tecla');

/* USANDO WHILE
let contador = 0;

while (contador<listaDeTeclas.length) {

        const tecla = listaDeTeclas[contador];
        
        instrumento = tecla.classList[1];
        console.log(instrumento);
        //Template String
        const idAudio = `#som_${instrumento}`;
        console.log(idAudio);

        tecla.onclick = function(){ //função anonima
                tocaSom(idAudio);
        };

        contador = contador+1;
        console.log(contador);
}
*/
// OPÇAO COM USO DE FOR PARA INTERAR POR TODA A LISTA
for (contador =0; contador <listaDeTeclas.length; contador++){

        const tecla = listaDeTeclas[contador];
        const instrumento = tecla.classList[1];
        const idAudio = `#som_${instrumento}`; // template string

        tecla.onclick = function (){
                tocaSom(idAudio);
        } 
        
        tecla.onkeydown = function (evento){
               console.log(evento.code);
                if('Espaço'){
                  tecla.classList.add('ativa');
                }
        } 
        
        tecla.onkeyup = function () {
                tecla.classList.remove('ativa');
        }

}
