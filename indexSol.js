function validar(string){
    var expresiones= /[A-Záéíóú]/;
    return (string.length > 0 && expresiones.test(string))
}

var campoForm = document.querySelector("#textInput");

campoForm.addEventListener("input", mostrarError);

function mostrarError(){
    var errorTexto = document.querySelector("#error-texto");
    if(validar(campoForm.value)){
        errorTexto.classList.remove("invisible");
    }else{
        errorTexto.classList.add("invisible");
    }
};

var botonEncriptar = document.querySelector("#btn-encriptar");

botonEncriptar.addEventListener("click", encriptar);

function encriptar() {
    if (!validar(campoForm.value)){
        alert('te encripto todo');
        console.log('te encripto todo');
    } else {
        alert('no encripto nada');
        console.log('no encripto nada');
    }
}
