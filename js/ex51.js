const X = [12, 57, 22];
const n = X.length;
let solucion = 'Ninguno de los valores cumple la condición.'
for (i = 0; i < n; i++) {
    for (j = (i + 1) % n; j != i; j = (j + 1) % n) {
        if (X[i] >= 20 && X[i] < X[j]) {
            solucion = `${X[i]} es mayor o igual que veinte y menor que ${X[j]}.`;
        } 
    }
}
document.getElementById('respuestax90').innerText = solucion;
