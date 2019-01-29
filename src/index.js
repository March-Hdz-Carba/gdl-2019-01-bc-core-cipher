let idPantallaActual = "root";
document.getElementById("screenGenerarPassword").style.display ="none";
document.getElementById("screenCambiarPasswordActual").style.display ="none";
document.getElementById("screenChangePassword").style.display ="none";
document.getElementById("yourPassword").style.display ="none";
document.getElementById(idPantallaActual).style.display="block";

screenGenerarPassword= () => {
    document.getElementById("root").style.display ="none";
    document.getElementById("yourPassword").style.display ="none";
    document.getElementById("screenGenerarPassword").style.display ="block";
}

screenCambiarPasswordActual= () => {
    document.getElementById("root").style.display ="none";
    document.getElementById("screenGenerarPassword").style.display ="none";
    document.getElementById("yourPassword").style.display ="none";
    document.getElementById("screenCambiarPasswordActual").style.display ="block";
}

generarPasswordNuevo= () => {
    document.getElementById("screenChangePassword").style.display ="block";
    document.getElementById("root").style.display ="none";
    document.getElementById("screenGenerarPassword").style.display ="none";
    document.getElementById("screenCambiarPasswordActual").style.display ="none";
    document.getElementById("yourPassword").style.display ="none";
}

PasswordNuevo= () => {
    document.getElementById("screenChangePassword").style.display ="none";
    document.getElementById("root").style.display ="none";
    document.getElementById("screenGenerarPassword").style.display ="none";
    document.getElementById("screenCambiarPasswordActual").style.display ="none";
    document.getElementById("yourPassword").style.display ="block";
}

changePassword= () => {
    document.getElementById("screenChangePassword").style.display ="none";
    document.getElementById("root").style.display ="none";
    document.getElementById("screenGenerarPassword").style.display ="none";
    document.getElementById("screenCambiarPasswordActual").style.display ="none";
    document.getElementById("yourPassword").style.display ="block";
}

star= () => {
    document.getElementById("screenChangePassword").style.display ="none";
    document.getElementById("root").style.display ="block";
    document.getElementById("screenGenerarPassword").style.display ="none";
    document.getElementById("screenCambiarPasswordActual").style.display ="none";
    document.getElementById("yourPassword").style.display ="none"; 
}

