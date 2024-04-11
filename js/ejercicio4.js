// 4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.



function numerosParImpar(numero) {
  if (!isNaN(numero)) {
    if (numero % 2 === 0) {
      alert(`El número ${numero} es par`);
    } else {
      alert(`El número ${numero} es impar`);
    }
  } else {
    alert("....? Me estas jodiendo?");
  }
}

let numero = Number(prompt("Ingrese un número entero:"));
let resultado = numerosParImpar(numero);