/* Escriba un programa JavaScript para verificar 
si los caracteres a y b están separados exactamente 
por 3 lugares en cualquier lugar (al menos una vez) 
en una cadena dada. */

const pangrama = "El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja."
let resultado = 'a y b no están separados por tres posiciones.'; 

for (i = 0; i < pangrama.length; i ++) {
    if (pangrama[i] === 'a') {
        if ((i - 3 >= 0 && pangrama[i - 3] === 'b') || (i + 3 < pangrama.length && pangrama[i + 3] === 'b')) {
            resultado = 'a y b están separados por tres posiciones.';
        }
    }
}
document.getElementById('ex100solucion').innerText = resultado;
