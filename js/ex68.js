/* Escriba un programa para reemplazar 
cada carácter en una cadena dada 
con el carácter que le sigue en el alfabeto. */


var pangrama = "El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja."

function transform(pangrama) {
    let unamas = pangrama.replace(/[a-z]/gi, function(p) {
        switch (p) {
          case 'z': return 'a';
          case 'Z': return 'A';
          default:  return String.fromCharCode(1 + p.charCodeAt(0));
        }
    });
    return unamas.replace(/[aeiou]+/g, function(vocal) {
        return vocal.toUpperCase();
    });
}

document.getElementById('solucionpangrama').innerText = transform(pangrama);

