var btnEnviar = document.querySelector(".btn-enviar");
var inputNombre = document.querySelector(".input-nombre");
var inputEmail = document.querySelector(".input-email");
var inputAsunto = document.querySelector(".input-asunto");
var area = document.querySelector(".area");

var mensajeExitoso = document.querySelector(".mensaje-exitoso");
var errores = document.querySelector(".errores");


var listaErrores = [];
btnEnviar.onclick = enviarFormulario;


function enviarFormulario(){
    mensajeExitoso.textContent = "";
    removeAllChilds(errores);
    validarInputs();
    validarMensaje();
}

function validarInputs(){
    validarNombre();
    validarEmail();
    validarAsunto();
    validarArea();
}

function validarNombre(){
    inputNombre.classList.remove("borde-rojo");
    if(inputNombre.value == ""){
        listaErrores.push("Campo nombre vacío");
        inputNombre.classList.add("borde-rojo");
    }
    if(inputNombre.value.length > 50){
        listaErrores.push("El nombre debe ser menor a 50 caracteres");
        inputNombre.classList.add("borde-rojo");
    }

}

function validarEmail(){
    inputEmail.classList.remove("borde-rojo");
    if(inputEmail.value == ""){
        listaErrores.push("Campo email vacío");
        inputEmail.classList.add("borde-rojo");
    }

    if(!inputEmail.value.includes("@") || !inputEmail.value.toLowerCase().includes(".com")){
        listaErrores.push("Ingresa un email válido");
        inputEmail.classList.add("borde-rojo");
    }

    if(inputEmail.value.length > 50){
        listaErrores.push("El email debe ser menor a 50 caracteres");
        inputEmail.classList.add("borde-rojo");
    }
}

function validarAsunto(){
    inputAsunto.classList.remove("borde-rojo");
    if(inputAsunto.value == "") {
        listaErrores.push("Campo asunto vacío");
        inputAsunto.classList.add("borde-rojo");
    }

    if(inputAsunto.value.length > 50){
        listaErrores.push("El asunto debe ser menor a 50 caracteres");
        inputAsunto.classList.add("borde-rojo");
    }
}

function validarArea(){
    area.classList.remove("borde-rojo");
    if(area.value == ""){
        listaErrores.push("Campo mensaje vacío");
        area.classList.add("borde-rojo");
    }

    if(area.value.length > 300){
        listaErrores.push("El mensaje debe ser menor a 300 caracteres");
        area.classList.add("borde-rojo");
    }
}

function validarMensaje(){
    if(listaErrores == ""){
        mensajeExitoso.textContent = "Mensaje Enviado con Éxito!"
        inputNombre.value = "";
        inputEmail.value = "";
        inputAsunto.value = "";
        area.value = "";
    }else{
        for(var elemento of listaErrores){
            var h3 = document.createElement("h3");
            h3.textContent = elemento
            errores.appendChild(h3);
        }
        listaErrores = [];
    }
}

function removeAllChilds(a){
    while(a.hasChildNodes())
	a.removeChild(a.firstChild);	
 }
