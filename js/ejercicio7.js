// 7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

function tablaMultipliacion(numero) {
  document.write(`<h2> La tabla del ${numero} es: </h2>`);
  document.write("<ul>");
  for (let i = 0; i <= 10; i++) {
    let resultado = numero * i;
    document.write(`<li> ${numero} x ${i} = ${resultado} </li>`);
  }
  document.write("</ul>");
}

let ingresarNumero = Number(prompt("Ingrese un número:"));

if (!isNaN(ingresarNumero)) {
  tablaMultipliacion(ingresarNumero);
} else {
  alert("Dale hno ya son las 3 de la mañana, haceme caso");
}
