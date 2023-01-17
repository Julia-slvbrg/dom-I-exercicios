const frutas = ["laranja", "limão", "uva"];

const fruta1 = document.getElementById("fruta-1")
const fruta2 = document.getElementById("fruta-2")
const fruta3 = document.getElementById("fruta-3")

fruta1.innerHTML = frutas[0]
fruta2.innerHTML = frutas[1]
fruta3.innerHTML = frutas[2] 


const adicionarFruta = function(){
    const frutaNova = document.getElementById("frutaInput").value
    const fruta4 = document.getElementById("fruta-4")
    fruta4.innerHTML = frutaNova
    
    document.getElementById("frutaInput").value = " "
    
}