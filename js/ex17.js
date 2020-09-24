/* Escriba un programa para verificar si 
un carácter específico existe dentro de 
la 2ª a la 4ª posición en una cadena dada. */

const pangrama = "El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja.";

const respuesta = prompt("Escribe un carácter cualquiera y comprueba si está entre la segunda y cuarta posición de nuestra frase secreta.");

alert (`Has escogido ${respuesta}`);

const posicion = pangrama.slice(1,4).includes(respuesta);

alert(posicion?'Carácter encontrado':'Carácter no encontrado');
