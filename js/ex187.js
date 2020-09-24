window.onload = () => {
    let num1, num2
    let result = 0
    const form = document.getElementById("form")
    form.onsubmit = (e) => {
        num1 = document.getElementById("num1")
        num2 = document.getElementById("num2")
        if (num1 % 11 == 0 || num1 % 7 == 0) {
            result ++
        }
        if (num2 % 11 == 0 || num2 % 7 == 0) {
            result ++
        }
        switch (result) {
            case 0:
                console.log("Ningún número es múltiplo de 11 ó 7")
                break
            case 1:
                console.log("Un número es múltiplo de 11 ó 7")
                break
            case 2:
                console.log("Ámbos números son múltiplos de 11 ó 7")
        }
    }
}