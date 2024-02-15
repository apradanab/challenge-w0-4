//# Challenge 04

//Crea todas las funciones en un modulo (e.g. helpers, functions, etc) y crea un archivo index / main.js que importe el modulo y ejecute todas las funciones. Cada función debe ser ejecutada al menos una vez.

//Empezamos creando un proyecto y un repo de git /github para el mismo. Subimos el enlace a discord nada más tener el repo.

//1. Crea una función que elimine el primer y último carácter de un string recibido por parámetros.

const removeFirstandLast = (inputString) => {
  let inputArray = inputString.split('');
  inputArray.pop();
  inputArray.shift();
  return inputArray.join('');
}

console.log(removeFirstandLast('desconsolez'));

//2. Escribe una función que reciba una palabra y revise si es un palíndromo.

const isPalindrome = (word) => {
  let half = Math.ceil(word.length/2);
  for(let i = 0; i < half; i++) {
    if(word[i] !== word[word.length -1 -i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome('radar'))

//3. Crea una función que cuente las vocales que contiene una palabra dada por parámetros.

const vowelCounter  = (inputWord) => {
  let vowels = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú'];
  let counter = 0;
  for (let i = 0; i < inputWord.length; i++) {
  if (vowels.includes(inputWord[i])) {
    counter = counter + 1;
  }
}
return counter;
}

console.log(vowelCounter('león'))

//4. Crea una función que verifique si una cadena de texto recibida por parámetros es un pangrama (contiene todas las letras del abecedario).

//5. Escribe una función que compruebe si una cadena de texto contiene todas las vocales.

const allVowels

//6. Crea una función que realice una cuenta atrás desde un número recibido por parámetros.

//7. Escribe una función que reciba por parámetros el año de nacimiento, y calcule la edad de la persona.

//8. Crea una función que reciba la edad de una persona por parámetros y verifique si es mayor de edad. Imprime por consola un string con el resultado.

//9. Crea una función que simule el lanzamiento de un dado e imprime por consola el resultado cada vez que se ejecuta.
//[16:42]
//10. Crea una función que reciba un año por parámetros y compruebe e imprima por consola si el año es bisiesto o no.

//11. Escribe una función que simula el juego piedra, papel y tijera. Recibirá como parámetro una opción (piedra, papel o tijera) en forma de string. La máquina, elegirá automáticamente una opción aleatoria. Imprime por consola ambas elecciones y en caso de ganar el jugador un mensaje de victoria, y en caso de perder uno de derrota.

//12. Escribe una función generadora de nombres de usuario aleatorios, a partir de dos grupos de palabras dadas. Estos grupos de palabras pueden estar agrupados en arrays. (nombres=['Hugo', 'Luis'], apellidos=['Duro', 'Fabiano']). Retorna un nombre de usuario aleatorio con nombre, apellido y un número aleatorio del 1 al 100. (Por ejemplo -> 'Pepe Pérez 87'.)

//13. Crea una función calculadora de propinas. Debe recibir el total de la cuenta y el porcentaje de propina deseado, con ello deberá calcular e imprimir por consola la cuenta, la propina que corresponde a la cuenta introducida, y el total a pagar. Redondea a dos decimales.

//14. Escribe una función que calcule el descuento aplicado a un precio. La función recibirá el precio y el descuento del artículo en venta, con ellos deberá calcular e imprimir por consola el precio, el descuento y el total del precio una vez aplicado el descuento. Redondea a dos decimales.
