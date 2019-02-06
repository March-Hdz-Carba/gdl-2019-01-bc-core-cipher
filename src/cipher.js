window.cipher = {
  encode : (offset,str) => {
    let palabracifrada= '';//variable donde se guardaran los ciclos for
     for (let i=0; i<str.length; i++) {
      if (str[i]=== " "){palabracifrada += " ";} 
      else {let nuevaPos = (str.charCodeAt(i)-65 +offset) % 26 +65;
        palabracifrada += String.fromCharCode(nuevaPos);
      } 
    }
    return palabracifrada;
  }, 
  decode : (offset,str) => {
    let palabraDescifrada= '';//variable donde se guardaran los ciclos for
    for (let i=0; i<str.length; i++) {
      if (str[i]=== " "){palabraDescifrada += " ";}
      else {const nuevaPos = (str.charCodeAt(i)+65 -offset) % 26 +65; 
      palabraDescifrada += String.fromCharCode(nuevaPos); 
      }
    }
    return palabraDescifrada;
  }
};




