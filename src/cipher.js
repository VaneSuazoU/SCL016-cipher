const cipher = {

    encode: (teXt1, disPlace) => {
        let msjListo = '';
    for (let i = 0; i < teXt1.length; i++)
    // Si  usuario ingresa letras en minuscula
    if (teXt1.charCodeAt(i) >= 97 && teXt1.charCodeAt(i) <= 122) {
        let cipher = (teXt1.charCodeAt(i) - 97 + parseInt(disPlace)) % 26 + 97;
        msjListo += String.fromCharCode(cipher);
        // Si usuario ingresa mayúsculas
      } else if (teXt1.charCodeAt(i) >= 65 && teXt1.charCodeAt(i) <= 90) {
        let cipher = (teXt1.charCodeAt(i) - 65 + parseInt(offsetCode)) % 26 + 65;
        msjListo += String.fromCharCode(cipher);
        // En caso de espacios y carácteres especiales
      } else {
        msjListo += teXt1[i];
      };
      return msjListo;

    }
 }
 
 
 export default cipher;
  
