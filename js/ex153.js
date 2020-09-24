window.onload = () => {
//    const form = document.getElementById("form")
//    form.onsubmit = (e) => {
        let num1, num2
        num1 = document.getElementById("num1")
        num2 = document.getElementById("num2")
        let result = 0
        if ((100 - num1) > (100 - num2)) {
            result = num1
        } else {
            result = num2
        }
        console.log(result + " es el número más cercano a 100")
//    }
}