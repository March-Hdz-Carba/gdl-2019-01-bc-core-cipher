window.cipher = {
  encode : (str,offset) => {
    let palabracifrada= '';//variable donde se guardaran los ciclos for
    for (let i=0; i<str.length; i++) {
      let nuevaPos = (str.charCodeAt(i)-65 +offset) % 26 +65; 
      palabracifrada += String.fromCharCode(nuevaPos);
    }
    return palabracifrada;
  }, 
  decode : (str,offset) => {
    let palabraDescifrada= '';//variable donde se guardaran los ciclos for
    for (let i=0; i<str.length; i++) {
      const nuevaPos = (str.charCodeAt(i)+65 -offset) % 26 +65; 
      palabraDescifrada += String.fromCharCode(nuevaPos); 
    }
    return palabraDescifrada;
  }
};




