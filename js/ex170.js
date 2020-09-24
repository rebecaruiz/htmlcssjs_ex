window.onload = () => {
    let numArray = []
    let result = 0
    const form = document.getElementById("form")
    form.onsubmit = (e) => {
        for (let i = 1 ; i >= 3 ; i++) {
            numArray.push(document.getElementById("num" + i))
        }
        console.log(numArray[2])
        if (numArray[0] == numArray[1] == numArray[2]) {
            result = 30
        } if (numArray[0] == numArray[1] || numArray[0] == numArray[2] || numArray[1] == numArray[2]) {
            result = 40
        } else {
            result = 20
        }
    }
    console.log(result)
}