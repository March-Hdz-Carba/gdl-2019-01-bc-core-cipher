//Funcion para cifrar
const cipherWord = () => {
    const str = document.getElementById("safeWord").value;//Trae el valor a cifrar
    const offset = parseInt(document.getElementById("offset").value);//Trae el valor de offset cifar
    let cipherOne = window.cipher.encode(offset,str);
    document.getElementById("yourSafeWord").innerHTML = cipherOne;
    return cipherOne;
 };
document.getElementById("passwordNuevo").addEventListener("click",cipherWord);//Llama a la funcion para cifrar

//funcion para descifrar
const decipherWord = () => {
    const str = document.getElementById("safeWordecode").value;//Trae el valor a cifrar
    const offset = parseInt(document.getElementById("offsetTwo").value);//Trae el valor de offset cifar
    let decipherOne = window.cipher.decode(offset,str);
    document.getElementById("decifradoSafeWord").innerHTML = decipherOne;
    return decipherOne;
 };
document.getElementById("generaPasswordNuevo").addEventListener("click",decipherWord);//Llama a la funcion descifrar

//Funcion para volver a cifrar con el nuevo offset dado por usuario
const cipherWordNew = () => {
    const str = decipherWord();
    //console.log(str()); //document.getElementById("decifradoSafeWord").value;//Trae el valor a cifrar
    const offset = parseInt(document.getElementById("nuevoOffset").value);//Trae el valor de offset cifar
    let cipherTwo = window.cipher.encode(offset,str);
    document.getElementById("yourSafeWord").innerHTML = cipherTwo;
    console.log(cipherTwo);
    return cipherTwo; 
 };
document.getElementById("changePassword").addEventListener("click",cipherWordNew);//Llama a la funcion para cifrar, la nueva palabra

//Cambio de pantallas
let idPantallaActual = "root";
document.getElementById("pantallaGenerarPassword").style.display ="none";
document.getElementById("pantallaPasswordActual").style.display ="none";
document.getElementById("pantallaPasswordActualDescifrado").style.display ="none";
document.getElementById("yourPassword").style.display ="none";
document.getElementById(idPantallaActual).style.display="block";

//Cambio de pantallas
const GenerarPassword = () => {
    document.getElementById("root").style.display ="none";
    document.getElementById("pantallaGenerarPassword").style.display ="block";
    document.getElementById("pantallaPasswordActual").style.display ="none";
    document.getElementById("pantallaPasswordActualDescifrado").style.display ="none";
    document.getElementById("yourPassword").style.display ="none";
};
document.getElementById("GenerarPassword").addEventListener("click",GenerarPassword);

//Cambio de pantallas
const CambiarPasswordActual= () => {
    document.getElementById("root").style.display ="none";
    document.getElementById("pantallaGenerarPassword").style.display ="none";
    document.getElementById("pantallaPasswordActual").style.display ="block";
    document.getElementById("pantallaPasswordActualDescifrado").style.display ="none";
    document.getElementById("yourPassword").style.display ="none";
};
document.getElementById("CambiarPasswordActual").addEventListener("click",CambiarPasswordActual);

//Cambio de pantallas
const passwordNuevo= () => {
    document.getElementById("root").style.display ="none";
    document.getElementById("pantallaGenerarPassword").style.display ="none";
    document.getElementById("pantallaPasswordActual").style.display ="none";
    document.getElementById("pantallaPasswordActualDescifrado").style.display ="none";
    document.getElementById("yourPassword").style.display ="block";
};
document.getElementById("passwordNuevo").addEventListener("click",passwordNuevo);


//Cambio de pantallas
const generaPasswordNuevo= () => {
    document.getElementById("root").style.display ="none";
    document.getElementById("pantallaGenerarPassword").style.display ="none";
    document.getElementById("pantallaPasswordActual").style.display ="none";
    document.getElementById("pantallaPasswordActualDescifrado").style.display ="block";
    document.getElementById("yourPassword").style.display ="none";
};
document.getElementById("generaPasswordNuevo").addEventListener("click",generaPasswordNuevo);

//Cambio de pantallas
const changePassword= () => {
    document.getElementById("root").style.display ="none";
    document.getElementById("pantallaGenerarPassword").style.display ="none";
    document.getElementById("pantallaPasswordActual").style.display ="none";
    document.getElementById("pantallaPasswordActualDescifrado").style.display ="none";
    document.getElementById("yourPassword").style.display ="block";
};
document.getElementById("changePassword").addEventListener("click",changePassword);


//Cambio de pantallas
const star= () => {
    document.getElementById("root").style.display ="block";
    document.getElementById("pantallaGenerarPassword").style.display ="none";
    document.getElementById("pantallaPasswordActual").style.display ="none";
    document.getElementById("pantallaPasswordActualDescifrado").style.display ="none";
    document.getElementById("yourPassword").style.display ="none";
    document.getElementById("safeWord").value= " "; 
    document.getElementById("safeWordecode").value= " ";
    document.getElementById("offset").value= " ";
    document.getElementById("offsetTwo").value= " ";
    document.getElementById("decifradoSafeWord").value= " ";
    document.getElementById("nuevoOffset").value= " ";
};
document.getElementById("star").addEventListener("click",star);






