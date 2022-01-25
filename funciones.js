import { validar, campoForm } from "./indexSol";

var botonEncriptar = document.querySelector("#btn-encriptar");

botonEncriptar.addEventListener("clic", encriptar);

console.log(campoForm.value);

function encriptar() {
    if (validar(campoForm.value)){
        alert('te encripto todo');
        console.log('te encripto todo');
    } else {
        alert('no encripto nada');
        console.log('no encripto nada');
    }
}