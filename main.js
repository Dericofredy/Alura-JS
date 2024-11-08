function tocaSomPom(){
        document.querySelector('#som_tecla_pom').play();
}

const listaTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador<9){
        listaTeclas[contador].onclick = tocaSomPom;

        contador = contador+1;
        console.log(contador);
}