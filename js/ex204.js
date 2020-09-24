window.onload = () => {
    let chain, chainArray
    const form = document.getElementById("form")
    form.onsubmit = (e) => {
        chain = document.getElementById("chain").toString()
        while (chain.lenght) {
            chainArray.push(chain.slice(0,chain.indexOf(" ")))
        }
        for (let i = 0 ; chainArray.lenght ; i++) {
            let capLet = chainArray[i].slice(0, 1)
            capLet.toUpperCase()
            chainArray[i] = capLet + chainArray[i]
        }
        chain = chainArray.join(" ")
    }
    console.log(chain)
}