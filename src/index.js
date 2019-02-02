//Variables donde se guardan los valores para cifrar, descifrar y los desplazamientos
const strTwo = document.getElementById("safeWordecode").value;//Trae el valor a descifrar
const offsetTwo = parseInt(document.getElementById("offsetTwo").value);//Trae el valor de offset para descifrar
const strAgain = document.getElementById("decifradoSafeWord").value;//Trae el valor del password cifrado
const offsetNew = parseInt(document.getElementById("nuevoOffset").value);//Trae el valor de offset para descifrar

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


const cipherWord = () => {
    const str = document.getElementById("safeWord").value;//Trae el valor a cifrar
    const offset = parseInt(document.getElementById("offset").value);//Trae el valor de offset cifar
    let cipherOne = window.cipher.encode(str,offset);
    document.getElementById("yourSafeWord").innerHTML = cipherOne;
    return cipherOne;
 };
document.getElementById("passwordNuevo").addEventListener("click",cipherWord);

/*document.getElementById("safeWordecode").innerHTML.addEventListener("click",cipher.decode(strTwo,offsetTwo));
document.getElementById("yourSafeWord").innerHTML.addEventListener("click",cipher.encodeAgain(strAgain,offsetNew));*/

/*   
const bottonNewPassword = () => {document.getElementById("PasswordNuevo")
bottonNewPassword.addEventListener("click",encode())}
const bottonDechiperPassword = () => {document.getElementById("generaPasswordNuevor")
bottonNewPassword.addEventListener("click",decode())}
const bottonPasswordForOther = () => {document.getElementById("changePassword")
bottonNewPassword.addEventListener("click",encode())}
*/


