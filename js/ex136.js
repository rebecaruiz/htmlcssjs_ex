window.onload = () => {
    let str, str1
    const form = document.getElementById("form")
    form.onsubmit = (e) => {
        str = document.getElementById("chain")
        str1 = str.slice(0, 3)
        if (str.length >= 3) {
            str1 = str1.toLowerCase()
        } else {
            str1 = str1.toUpperCase()
        }
    }
    console.log(str1)
}