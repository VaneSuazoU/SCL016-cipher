import cipher from './cipher.js';

//declarando variables

const ejecCIfrar = document.getElementById("cifrar");
const ejecDescifrar = document.getElementById("descifrar");

// Pasando letras a mayuscula

document.getElementById("original").addEventListener("keyup", myFunction);

function myFunction() {
  const x = document.getElementById("original");
  x.value = x.value.toUpperCase();
}

ejecCIfrar.onclick = () => {
   const disPlace = document.getElementById("desplazamiento").value;
   const teXt1 = document.getElementById("original") .value;
   const msjeOk = cipher.encode(teXt1, disPlace);
   document.getElementById ("resultado").value = msjeOk;
   
    
    console.log(disPlace);
    console.log(teXt1);


}

ejecDescifrar.onclick = () => {
    const disPlace = document.getElementById("desplazamiento").value;
    const teXt1 = document.getElementById("original").value;
    document.getElementById("resultado").value = teXt1;
    const msjeOk = cipher.decode(teXt1, disPlace);
    document.getElementById ("resultado").value = msjeOk;

    console.log(document.getElementById("resultado"));
    console.log(disPlace);
    console.log(teXt1);    
}



console.log(cipher);
