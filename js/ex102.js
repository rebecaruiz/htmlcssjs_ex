/* Escriba un programa JavaScript para crear 
una nueva cadena de 4 copias de los últimos 
3 caracteres de una cadena original dada. 
La longitud de la cadena dada debe ser de 3 o más. */


const pangrama = "El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja."

const final = pangrama.slice(-3).repeat(4);

document.getElementById('ex105solucion').innerText = final;
