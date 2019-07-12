let inputN = document.getElementById('inputN')
let inputT = document.getElementById('inputT')
let inputP = document.getElementById('inputP')

let mostrarN = document.getElementById('CardNombre')
let mostrarT = document.getElementById('CardTelefono')
let mostrarP = document.getElementById('CardPizza')

let boton = document.getElementById('boton')

let card = document.getElementById('card')

const accion = () =>{

let textoNombre = inputN.value
let textoTelefono = inputT.value
let textoPizza = inputP.value
let pizzamin = textoPizza.toLowerCase()

mostrarN.innerHTML = textoNombre
mostrarT.innerHTML = textoTelefono

if(pizzamin ==='con'){
    mostrarP.innerHTML = ':('    
}else if(pizzamin === 'sin'){
    mostrarP.innerHTML = ':D'
}else{
    mostrarP.innerHTML = 'Introduce otra cosa'
}

//aparece la card
card.classList.remove('desaparecer')


}

boton.addEventListener('click', accion)