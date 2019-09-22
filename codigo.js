function leerForm(){

let inputnom = document.querySelector ('.inputnom');
let nombre = inputnom.value;
console.log(nombre);

let inputape = document.querySelector('.inputape');
let apellido = inputape.value;
console.log(apellido);

let inputmail = document.querySelector('.inputmail');
let mail = inputmail.value;
console.log(mail);

let inputtel = document.querySelector('.inputtel');
let telefono = inputtel.value;
console.log(telefono);

let inputcon = document.querySelector('.inputcon');
let consultas = inputcon.value;
console.log(consultas);

if (nombre ==="") {
 return alert("El campo nombre esta vacío.");
}

if (apellido ==="") {
return alert("El campo apellido esta vacío.");
}

if (mail ==="") {
return alert("El campo mail esta vacío.");
}

if (telefono ==="") {
return alert("El campo teléfono esta vacío.");
}

if (consultas ==="") {
return alert("El campo consultas esta vacío.");
}

}




