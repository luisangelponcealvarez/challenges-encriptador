function focus() {
  let input = document.getElementById("input-texto");
  input.focus();
}

function value() {
  let input = document.getElementById("input-texto");
  input.value = "";
}

function encriptar() {
  let texto = document.getElementById("input-texto").value;
  let txt_cifrado = texto.replace(/e/gm, "enter");
  txt_cifrado = txt_cifrado.replace(/o/gm, "ober");
  txt_cifrado = txt_cifrado.replace(/i/gm, "imes");
  txt_cifrado = txt_cifrado.replace(/a/gm, "ai");
  txt_cifrado = txt_cifrado.replace(/u/gm, "ufat");

  if (/[^a-zñ ]/.test(texto)) {
  } else if (texto.length === 0) {
  } else {
    document.getElementById("text-mensaje").style.display = "inline-block";
    document.getElementById("texto-1").style.display = "none";
    document.getElementById("texto-1").style.display = "none";
    document.getElementById("output-texto").innerHTML = txt_cifrado;

    value();
  }
}

function desencriptar() {
  let texto = document.getElementById("input-texto").value;
  let txt_cifrado = texto.replace(/enter/gm, "e");
  txt_cifrado = txt_cifrado.replace(/ober/gm, "o");
  txt_cifrado = txt_cifrado.replace(/imes/gm, "i");
  txt_cifrado = txt_cifrado.replace(/ai/gm, "a");
  txt_cifrado = txt_cifrado.replace(/ufat/gm, "u");

  if (texto.length === 0) {
  } else {
    document.getElementById("texto-1").style.display = "none";
    document.getElementById("texto-1").style.display = "none";
    document.getElementById("texto-1").style.display = "none";
    document.getElementById("output-texto").innerHTML = txt_cifrado;
    value();
  }
}

function copiar() {
  let contenido = document.querySelector("#output-texto");
  contenido.select();
  document.execCommand("copy");
}

focus();
value();
