// 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

// La fórmula del perímetro  es p = 2*(a +b)

function calculoPerimetro(num1, num2) {
  return 2 * (num1 + num2);
}

let num1 = parseInt(prompt("Ingrese el largo del rectangulo en cm:"));
let num2 = parseInt(prompt("Ingrese el ancho del rectangulo en cm:"));

let perimetro = calculoPerimetro(num1, num2);
alert(`El perímetro del rectángulo es de: ${perimetro} cm`);
