function tocaSom(seletorAudio){
      const elemento =  document.querySelector(seletorAudio);
      
        if(elemento!=null && elemento.localName === 'audio'){
        elemento.play();     
        }  
        else{
                alert('Elemento não encontrado ou seletor invalido')    
        }   
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
                //Seleção das teclas que acionam sos sons.
                if ((evento.code === 'Space' || evento.code === 'Enter') && evento.code !== 'NumpadEnter') {
                  tecla.classList.add('ativa');
                }

        } 
        
        tecla.onkeyup = function () {
                tecla.classList.remove('ativa');
        }

}
