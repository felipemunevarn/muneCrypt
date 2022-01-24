// function validacionCaracteres(){
    var campoForm = document.querySelector("#textInput");
    campoForm.addEventListener("input", function(){
        var expresiones= /[A-Záéíóú]/;
        var errorTexto = document.querySelector("#error-texto");
        if(campoForm.value.length > 0 && expresiones.test(campoForm.value)){
            errorTexto.classList.remove("invisible");
        }else{
            errorTexto.classList.add("invisible");
        }        
    });
// }