let numeroSecreto = 0;
let intentos = 0;
let listaNumerosorteado = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

//cim inver ``

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
  //let numeroDeUsuario = querySelector('');->
 let numeroDeUsuario = parseInt(document.getElementById('valorDeUsuario').value)
 

 if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos ===1) ?'vez' : 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
 } else {
    if(numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento('p', 'el numero secreto es menor');
    } else {
        asignarTextoElemento('p','el numero secreto es mayor');
    }
    intentos++;
    limpiarCaja();
 }
  
}


function limpiarCaja (){
    let valorCaja = document.getElementById('valorDeUsuario');
    valorCaja.value = '';
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(numeroGenerado);
    console.log(listaNumerosorteado);
//si ya sortearon todos los numeros
    if (listaNumerosorteado.length == numeroMaximo) {
          asignarTextoElemento('p','Ya se soertearon todos los numeros');
        
    } else {

        //si el numero generado esta en la lista
          if (listaNumerosorteado.includes(numeroGenerado)) {
              return generarNumeroSecreto();
        } else{
              listaNumerosorteado.push(numeroGenerado);
          return numeroGenerado;
         }
            //return secretNumber
    };

}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
intentos = 1;
}


function reiniciarJuego() {
limpiarCaja();
condicionesIniciales();
document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();

