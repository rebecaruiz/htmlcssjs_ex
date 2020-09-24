/*Escriba un programa JavaScript para 
mover los últimos tres caracteres al 
comienzo de una cadena determinada. 
La longitud de la cadena debe ser 
mayor o igual a tres. */

const pangrama = "El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja."

const nuevopangrama = pangrama.slice(-3).concat(pangrama.slice(0, pangrama.length-3));

document.getElementById('ex110solucion').innerText = nuevopangrama;