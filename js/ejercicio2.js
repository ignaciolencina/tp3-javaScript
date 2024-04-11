// 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

let ciudades = [];

while (true) {
  let nuevaCiudad = prompt("Ingrese el nombre de una ciudad:");
  if (nuevaCiudad !== null && nuevaCiudad !== "") {
    ciudades.push(nuevaCiudad);
  } else {
    document.write("<ul>");
    document.write(
      `<li> El arreglo de ciudades tiene ${ciudades.length} elementos </li>`
    );
    document.write("<h2>Posiciones:</h2>");
    document.write(`<li> Primera posición: ${ciudades[0]} </li>`);
    document.write(`<li> Tercera posición: ${ciudades[2]} </li>`);
    document.write(
      `<li> Última posición: ${ciudades[ciudades.length - 1]} </li>`
    );
    ciudades.push("París");
    document.write(
      `<li> Agregado a la última posición: ${ciudades[ciudades.length - 1]} </li>`
    );
    ciudades[1] = "Barcelona";
    document.write(`<li> Se sustituyó la ciudad de la segunda posición por: ${ciudades[1]} </li>`);
    document.write("</ul>");
    break;
  }
}
