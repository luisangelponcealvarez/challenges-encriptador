function focus(){
    let input = document.getElementById("input-texto");
    input.focus();
}
function value(){
    let input = document.getElementById("input-texto");
    input.value = "";
}

function encriptar(){
    let texto = document.getElementById("input-texto").value;
    let txt_cifrado = texto.replace(/e/gm, "enter");
    txt_cifrado = txt_cifrado.replace(/o/gm, "ober");
    txt_cifrado = txt_cifrado.replace(/i/gm, "imes");
    txt_cifrado = txt_cifrado.replace(/a/gm, "ai");
    txt_cifrado = txt_cifrado.replace(/u/gm, "ufat");
    if (/[^a-zñ ]/.test(texto)) {
        Swal.fire({
            icon: 'error',
            iconColor: '#b9ab9c',
            background: '#E3E0DE',
            title: 'Oops...',
            confirmButtonColor: '#b9ab9c',
            text: 'Solo se permiten letras minusculas y sin acento',
          });
    }







}

focus();
value();