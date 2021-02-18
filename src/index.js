import cipher from './cipher.js';

//declarando variables

const ejecCIfrar = document.getElementById("cifrar");
const ejecDescifrar = document.getElementById("descifrar");

// Pasando letras a mayuscula

document.getElementById("original").addEventListener("keyup", myFunction);

function myFunction() {
  let x = document.getElementById("original");
  x.value = x.value.toUpperCase();
}

ejecCIfrar.onclick = () => {
  let disPlace = document.getElementById("desplazamiento").value;
  let teXt1 = document.getElementById("original") .value;
  let msjeOk = cipher.encode(teXt1, disPlace);
  document.getElementById ("resultado").value = msjeOk;
  
  
  //console.log(disPlace);
  //console.log(teXt1);
  
  
}

ejecDescifrar.onclick = () => {
  let disPlace = document.getElementById("desplazamiento").value;
  let teXt1 = document.getElementById("original").value;
  let msjeOk = cipher.decode (teXt1, disPlace);
  document.getElementById ("resultado").value = msjeOk;
  
  //console.log(document.getElementById("resultado"));
  //console.log(disPlace);
  //console.log(teXt1);    
}



//console.log(cipher);
