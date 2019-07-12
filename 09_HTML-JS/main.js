//document hace referencia a mi archivo HTML con getElemntByID

// let etiqueta = document.getElementById('etiqueta')
// let texto = document.getElementById('texto')
// let input = document.getElementById('input')
// let boton = document.getElementById('boton')

// console.log(etiqueta)
// console.log(texto)

//innerHTML  pinta el nueva valor en mi archivo HTML

// etiqueta.innerHTML = 'Es un nuevo saludo'
// texto.innerHTML = 'Es un nuevo texto'

// const cambiar = () =>{

//     etiqueta.innerHTML = 'Es un nuevo saludo'
//     texto.innerHTML = 'Es un nuevo texto'

// }

// boton.addEventListener('click', cambiar)

// function operacion (a,b,c,d,e){

//     console.log(( a + b - c - d ) * e)
// }

// operacion(5,4,3,2,9)

// let contraseña = document.getElementById('contraseña')
// let ingresa = document.getElementById('ingresa')
// if(contraseña === 'gatitos13'){
//     const cambia = () =>{
//         ingresa.innerHTML = 'Bienvenido'

// }else{
//         ingresa.innerHTML = 'No pasas'}
// }

// boton.addEventListener('click', cambia)

// let ingresa = document.getElementById('ingresa')
// let contraseña = document.getElementById('contraseña')

// let usuario = 'Hola'
// const password = 'gatitos13'

// const login = (a,b) => {

// if( a === b ){
//     console.log('Bienvenido')
// }else{
//     console.log('Contraeña incorrecta')
// }
// }
// login(usuario, password)

// const login = () => {
//     let user = prompt('Ingresa')
//     const password = 'gatitos13'
//     if( user === password ){
//         console.log('Bienvenido')
//     }else{
//         console.log('Contraeña incorrecta')
//     }
// }
// login()

let titulo = document.getElementById('titulo')
let subtitulo = document.getElementById('subtitulo')
let boton = document.getElementById('boton')
let input = document.getElementById('input')
let mostrar = document.getElementById('mostrar')

const cambiar = () =>{
    titulo.innerHTML = 'Estoy cambiando por una función'
    subtitulo.innerHTML = 'Esto tambien cambia'
}

const mostrarInput = () =>{

let texto = input.value

mostrar.innerHTML = texto

}

boton.addEventListener('click', mostrarInput)
boton.addEventListener('click', cambiar)

// titulo.innerHTML = 'Soy el titulo cambiado'