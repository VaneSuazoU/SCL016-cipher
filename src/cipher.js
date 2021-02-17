const cipher = {
  
  encode: (teXt1, disPlace) => {
    let msjListo = '';
    for (let i = 0; i < teXt1.length; i++)
    if (teXt1.charCodeAt(i) >= 65 && teXt1.charCodeAt(i) <= 90) {
      let cipher = (teXt1.charCodeAt(i) - 65 + parseInt(disPlace)) % 26 + 65;
      msjListo += String.fromCharCode(cipher);
    } else {
      msjListo += teXt1[i];
    }
    
    return msjListo;
    
  },
  
  decode: (teXt1, disPlace) => {
    let msjListo = '';
    for (let i = 0; i < teXt1.length; i++)
    if (teXt1.charCodeAt(i) >= 65 && teXt1.charCodeAt(i) <= 90) {
      let cipher = (teXt1.charCodeAt(i) + 65 - parseInt(disPlace)) % 26 + 65;
      msjListo += String.fromCharCode(cipher);
    } else {
      msjListo += teXt1[i];
    }
    
    return msjListo;
    
  }
  
}

export default cipher;