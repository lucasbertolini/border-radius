

function atualizar(){
    //Pega todos os valores dos inputs
    const cimaEsquerda = document.getElementById("top-left").value;
    const cimaDireita = document.getElementById("top-right").value;
    const  baixoEsqueda = document.getElementById("bottom-left").value;
    const  baixoDireita = document.getElementById("bottom-right").value;

    //Aplica o border radius indivídualmente
     quadrado = document.getElementById("borda").style.borderTopLeftRadius =cimaEsquerda + "px";
     quadrado = document.getElementById("borda").style.borderTopRightRadius =cimaDireita + "px";
     quadrado = document.getElementById("borda").style.borderBottomRightRadius =baixoDireita + "px";
     quadrado = document.getElementById("borda").style.borderBottomLeftRadius =baixoEsqueda + "px";

     //Mostra na tela o código CSS
     texto.value = `border-radius: ${cimaEsquerda}px ${cimaDireita}px ${baixoEsqueda}px ${baixoDireita}px;`
     
}

function resetar(){
    //Reseta a borda para 20px
    quadrado = document.getElementById("borda").style.borderRadius ="20px";
    document.getElementById("top-left").value = 20;
    document.getElementById("top-right").value = 20;
    document.getElementById("bottom-left").value = 20;
    document.getElementById("bottom-right").value = 20;

    //Mostra na tela o código CSS 

    texto.value = `border-radius: 20px;`
    

}

function aleatorio(){
    let numero 
    let texto = document.getElementById("texto");

    //Gera um valor aleatório para cada canto
    const elementos = [0,1,2,3]
   for (var i = 0 ; i< elementos.length; i++){
        elementos[i] = parseInt(Math.random() *100);
        if (numero == elementos[i]){
            elementos[i] = parseInt(Math.random()*100);
        }
   }

   //Exibe o valor aleatório no input 
   document.getElementById("top-left").value = elementos[0];
   document.getElementById("top-right").value = elementos[1];
   document.getElementById("bottom-left").value = elementos[2];
   document.getElementById("bottom-right").value = elementos[3];

   //Aplica o border radius
   quadrado = document.getElementById("borda").style.borderTopLeftRadius =elementos[0] + "px";
   quadrado = document.getElementById("borda").style.borderTopRightRadius =elementos[1] + "px";
   quadrado = document.getElementById("borda").style.borderBottomRightRadius =elementos[2] + "px";
   quadrado = document.getElementById("borda").style.borderBottomLeftRadius =elementos[3] + "px";

   //Mostra o texto na tela
   texto.value = `border-radius: ${elementos[0]}px ${elementos[1]}px ${elementos[2]}px ${elementos[3]}px;`


}
