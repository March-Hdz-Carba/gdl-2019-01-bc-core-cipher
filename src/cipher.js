window.cipher = {
  encode : (str,offset) => {
    let palabracifrada= '';//variable donde se guardaran los ciclos for
    for (let i=0; i<str.length; i++) {
      const nuevaPos = (str.charCodeAt(i)-65 +offset) % 26 +65; 
      palabracifrada += String.fromCharCode(nuevaPos);
    }
    return palabracifrada;
  }, 
  decode : (strTwo,offsetTwo) => {
    let palabraDescifrada= '';//variable donde se guardaran los ciclos for
    for (let i=0; i<strTwo.length; i++) {
      const nuevaPos = (strTwo.charCodeAt(i)+65 -offsetTwo) % 26 +65; 
      palabraDescifrada += String.fromCharCode(nuevaPos); 
    }
    return palabraDescifrada;
  },
  encodeAgain : (strAgain,offsetNew) => {
    let palabracifradaNuev= '';//variable donde se guardaran los ciclos for
    for (let i=0; i<strAgain.length; i++) {
      const nuevaPos = (strAgain.charCodeAt(i)-65 +offsetNew) % 26 +65; 
      palabracifradaNuev += String.fromCharCode(nuevaPos);
    }
    return palabracifradaNuev;
  }

};




