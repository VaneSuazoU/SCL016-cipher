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

document.getElementById("original").addEventListener("keyup", mayuscula);

function mayuscula() {
  const teXt1 = document.getElementById("original");
  teXt1.value = teXt1.value.toUpperCase();
}

console.log(cipher);
