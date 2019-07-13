let inputj1 = document.getElementById('inputj1')
let inputj2 = document.getElementById('inputj2')
// console.log(inputj1)
// console.log(inputj2)

let eleccionj1min = inputj1.value.toLowerCase()
let eleccionj2min = inputj2.value.toLowerCase()
// console.log(eleccionj1)
// console.log(eleccionj2)

// let a =  eleccionj1.toLowerCase()
// let b = eleccionj2.toLowerCase()

// let eleccionj1min =  eleccionj1.toLowerCase()
// let eleccionj2min = eleccionj2.toLowerCase()

let botonJugar = document.getElementById('botonJugar')
let botonJugarDeNuevo = document.getElementById('botonJugarDeNuevo')

let card = document.getElementById('card')

let ganador = document.getElementById('ganador')


const jugar = () =>{
      
    if(eleccionj1min === eleccionj2min){
        ganador.innerHTML = 'Empate'
    }else if(eleccionj1min === 'piedra' && eleccionj2min === 'tijera'){
        ganador.innerHTML = '<-- Gana jugador 1'
    }else if(eleccionj1min === 'papel' && eleccionj2min === 'piedra'){
        ganador.innerHTML = '<-- Gana jugador 1'
    }else if(eleccionj1min === 'tijera' && eleccionj2min === 'papel'){
        ganador.innerHTML = '<-- Gana jugador 1'
    }else if(eleccionj1min === 'piedra' && eleccionj2min === 'papel'){
        ganador.innerHTML = 'Gana jugador 2 -->'
    }else if(eleccionj1min === 'papel' && eleccionj2min === 'tijera'){
        ganador.innerHTML = 'Gana jugador 2 -->'
    }else if(eleccionj1min === 'tijera' && eleccionj2min === 'piedra'){
        ganador.innerHTML = 'Gana jugador 2 -->'
    }else{
        ganador.innerHTML = 'Intenta otra vez'
    }

    card.classList.remove('desaparecer')
    botonJugarDeNuevo.classList.remove('desaparecer')

    console.log(eleccionj1min)
    console.log(eleccionj2min)
}

botonJugar.addEventListener('click', jugar)