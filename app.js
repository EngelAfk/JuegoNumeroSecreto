//alert("hola mundo mi nombre es Engel");
let numeroSecreto=Math.floor(Math.random()*10)+1;
let numeroUsuario=0;
let numeroIntentos=0;
//let palabraVeces="vez";
let intentosMaximo=3
while(numeroUsuario!=numeroSecreto){
    numeroUsuario=parseInt(prompt("Escriba un numero del 1 al 10"));
    numeroIntentos=numeroIntentos+1;
    if(numeroUsuario==numeroSecreto){
         alert(`felicitaciones, el numero secreto es: ${numeroUsuario} Lo hiciste en: ${numeroIntentos} ${numeroIntentos>1 ? `Veces` : `Vez`}`);
    }
    else{
       if(numeroSecreto>numeroUsuario){
           alert("No, el numero es mayor");
       }else{
           alert("No, el numero es menor");
       }
       //palabraVeces="veces";
       if(numeroIntentos==intentosMaximo){
        alert(`has llegado al numero maximo de: ${intentosMaximo} intentos`);
        break;
       }
    }
}



