var imgH = document.querySelector(".logo-menuH");
var imgX = document.querySelector(".logo-close");
var menuHamburguesa = document.querySelector(".menu-hamburguesa");
var html = document.querySelector("html");
var linkInicio = document.querySelector(".menu-inicio");
var linkSobreMi = document.querySelector(".menu-sobre-mi");
var linkHabilidades = document.querySelector(".menu-habilidades");
var linkPortafolio = document.querySelector(".menu-portafolio");
var linkContacto = document.querySelector(".menu-contacto");


imgH.onclick = mostrarMenuH;
imgX.onclick = quitarMenuH;
linkInicio.onclick = quitarMenuH;
linkSobreMi.onclick = quitarMenuH;
linkHabilidades.onclick = quitarMenuH;
linkPortafolio.onclick = quitarMenuH;
linkContacto.onclick = quitarMenuH;

function mostrarMenuH(){
    /*menuHamburguesa.classList.remove("oculto");*/
    menuHamburguesa.classList.remove("volver");
    menuHamburguesa.classList.add("trasladar");
    imgH.classList.add("oculto");
    imgX.classList.remove("oculto")
    html.classList.add("overflowH");
}

function quitarMenuH(){
    /*menuHamburguesa.classList.add("oculto");*/
    menuHamburguesa.classList.remove("trasladar");
    menuHamburguesa.classList.add("volver")
    imgH.classList.remove("oculto");
    imgX.classList.add("oculto")
    html.classList.remove("overflowH");
}

