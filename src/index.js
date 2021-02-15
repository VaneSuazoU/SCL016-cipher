import cipher from './cipher.js';

//declarando variables

const ejecCIfrar = document.getElementById("cifrar");
const ejecDescifrar = document.getElementById("descifrar");

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

    console.log(document.getElementById("resultado"));
    console.log(disPlace);
    console.log(teXt1);    
}



console.log(cipher);
