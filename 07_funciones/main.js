// function suma (a,b){

//     console.log( a + b)
// }
// suma (5, 6)
// suma (6, 6)
// suma (5, 10)
// suma (5, suma(10,10))

// console.log()
// alert()
// prompt()

// function resta (a,b){
//     return a - b
//     // return me devuelve el valor (a-b) de la operacion de los parametros que indique**
// }
// // console.log(resta (10,4))
// console.log(resta (resta(50,20),4))

// let Lado = Number(prompt('Lado'))
// function area (a){
//     return a * a
// }
// console.log(area (Lado))


//=> arrow function (pasar cursor encima)
//{bloque de codigo}

// let Lado = Number(prompt('Lado')) 
// const areaC = (a) =>{
//     return a*a
// }
// console.log(areaC(Lado))


// const areaC = (a) =>{
// let Lado = Number(prompt('Lado')) 
//     return a*a
// }
// console.log(areaC(Lado))

let Base = Number(prompt('Ingresa valor\n de Base')) 
let Altura = Number(prompt('Altura')) 
const areaT = (a,b) =>{
    return a * b / 2
}
console.log(areaT(Base,Altura))

//Funcion que sume mis parametros a y b, reste c y d y multiplique por e

// function operacion (a,b,c,d,e){

//     console.log( ( a + b - c - d ) * e)
// }
// operacion(5,4,3,2,1)

// console.log(operacion)