const cateto1 = 5, cateto2 = 6, hipotenusa = 7;
const perimetro = (cateto1 + cateto2 + hipotenusa)/2;
const area = Math.sqrt((perimetro*(perimetro-cateto1)*(perimetro-cateto2)*(perimetro-hipotenusa)));
document.getElementById('areatriangulo').innerText=`El área de un triángulo con lados ${cateto1}, ${cateto2}, ${hipotenusa} es de ${area}`;
