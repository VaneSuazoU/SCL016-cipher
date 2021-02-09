import cipher from './cipher.js';

//Guardando datos ingresados

const ejecCIfrar = document.getElementById("cifrar");
const ejecDescifrar = document.getElementById("descifrar");

ejecCIfrar.onclick = function(){
    const disPlace = document.getElementById("desplazamiento").value;
    const teXt1 = document.getElementById("original").value;
    
    console.log(disPlace);
    console.log(teXt1);
}

ejecDescifrar.onclick = function(){
    const disPlace = document.getElementById("desplazamiento").value;
    const teXt1 = document.getElementById("original").value;
    
    console.log(disPlace);
    console.log(teXt1);    
}

// Pasando letras a mayuscula

document.getElementById("original").addEventListener("keyup", myFunction);

function myFunction() {
  const x = document.getElementById("original");
  x.value = x.value.toUpperCase();
}



console.log(cipher);
