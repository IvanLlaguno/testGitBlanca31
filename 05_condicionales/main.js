// if(condicion){
//     Bloque de codigo en caso de que se cumpla la condición

// condicion
// }else{
//     Bloque de codigo en caso de que se cumpla la condición
// }

// if(condicion){
//     console.log(':D')
// }else{
//     console.log(':(')
// }

// let edad = prompt('Edad')

// Number(edad)

// if(edad>=18){
//     console.log('Entra al bar U w U')
// }else{
//     console.log('Te la pelaste, no entras')
// }

// let edad = prompt('Ingresa tu edad')
// if (edad < 16){
//     console.log ('No puedes sacar tu permiso')
// }else if(edad >=16 || edad === 17 ){
//     console.log ('Puedes sacar tu permiso')
// }else{
//     console.log ('Puedes sacar tu licencia')
// }

// si mi numero es par: Escribe en la consola *Número* es par
// si mi número es impar: Escribe en la consola *Número* es inpar

// let num =  prompt('Ingresa un número')

// // let result = (num/2)

// if (num % 2 === 0){
//     console.log ('El' + ' ' + num + ' ' + 'es par')
// }else{
// console.log ('El' + ' ' + num + ' ' + 'es impar')
// }

let jug1 = prompt('Elige: Piedra, Papel o Tijera')
let jug2 = prompt('Elige: Piedra, Papel o Tijera')

if (jug1 === jug2){
    console.log ('Es un empate')
}else if (jug1 === 'Piedra' && jug2 === 'Tijera'){
    console.log ('Gana jugador 1')
}else if (jug1 === 'Papel' && jug2 === 'Piedra'){
    console.log ('Gana jugador 1')
}else if (jug1 === 'Tijera' && jug2 === 'Papel'){
    console.log ('Gana jugador 1')
// }else {console.log ('Gana jugador 2')}
}else if (jug1 === 'Tijera' && jug2 === 'Piedra'){
    console.log ('Gana jugador 2')
}else if (jug1 === 'Piedra' && jug2 === 'Papel'){
    console.log ('Gana jugador 2')
}else if (jug1 === 'Papel' && jug2 === 'Tijera'){
    console.log ('Gana jugador 2')
}else { 
    console.log ('No te entendí, vuelve a intentar')
}


