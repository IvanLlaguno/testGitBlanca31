const jugar = () => {
    let inputj1 = document.getElementById('inputj1')
    let inputj2 = document.getElementById('inputj2')
    let inputj1min = inputj1.value.toLowerCase()
    let inputj2min = inputj2.value.toLowerCase()
    let ganador = document.getElementById('ganador')
    let contenedor = document.getElementById('contenedor')
    let botonJugar = document.getElementById('botonJugar')



if(inputj1min === inputj2min){
    ganador.innerHTML = 'Empate'
}else if( inputj1min === 'piedra' && inputj2min === 'tijera'){
    ganador.innerHTML = '<--- Gana jugador 1'
}else if( inputj1min === 'papel' && inputj2min === 'piedra'){
    ganador.innerHTML = '<--- Gana jugador 1'
}else if( inputj1min === 'tijera' && inputj2min === 'papel'){
    ganador.innerHTML = '<--- Gana jugador 1'
}else if( inputj1min === 'piedra' && inputj2min === 'papel'){
    ganador.innerHTML = 'Gana jugador 2--->'
}else if( inputj1min === 'papel' && inputj2min === 'tijera'){
    ganador.innerHTML = 'Gana jugador 2--->'
}else if( inputj1min === 'tijera' && inputj2min === 'piedra'){
    ganador.innerHTML = 'Gana jugador 2--->'
}else{
    ganador.innerHTML = 'Introduce otro valor'
}

contenedor.classList.remove('desaparecer')

console.log(inputj1min)
console.log(inputj2min)

}

botonJugar.addEventListener('click', jugar)

