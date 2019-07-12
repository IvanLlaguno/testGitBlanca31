// alert("Hola")

// let numero = 10

// let texto = 'Hola mundo'

// let booleano = true
// let booleano = false

// let arreglo = []

// let objeto = {}

// const perro = 'salchicha'

// + - / * %

// let num1=10
// let num2=50

// let resultado= num1 + num2 

// console.log(resultado)

// let nombre='Ivan'
// let saludo='Hola'
// console.log(saludo +' '+ nombre)


// let nombre= prompt('Nombre')

// console.log(nombre)

// let cumplea= prompt('Fecha de Cumpleaños')

// console.log(cumplea)

// let correo= prompt('Correo')

// console.log(correo)

// let nacimiento= prompt('Año de nacimiento')

// let edad= 2019-nacimiento

// console.log(edad)

// let nacimiento = prompt('Año de nacimiento')

//     Number(nacimiento)

//     let edad = 2019 - nacimiento

//     console.log(edad)

// let persona = ['Ivan', 'ivanllaguno@hotmail.com', '55555555']

// // console.log(persona)
// console.log(persona[1])

// let animal = ['Perro', 'Gato', 'Cocodrilo', 'Iguana', 'Guacamaya', 'Oso', 'Águila', 'Ratón', 'Hamster', 'Tarántula']
// console.log(animal[5]+' '+animal[9])

// let animal = ['Perro', 'Gato', 'Cocodrilo', 'Oso']

// animal.pop()

// animal.push('Águila', 'Paloma', 'Halcón')


// console.log(animal)

// let numeros = [1,2,3,4,5,6,7,8,9,10]

// numeros.splice(5,1)

// console.log(numeros)

// let objeto = {
//     nombre: 'Ivan',
//     direccion: 'Bretaña',
//     musica: 'Rock',
//     telefono: '5591943141',
//     libros: ['Dracula', 'Frankenstein'],
//     series: {
//         terror: 'Hill House',
//         accion: ['Algo','Otra cosa']
//     }
// }

// console.log(objeto.libros[1])
// console.log(objeto.series.accion[0])

let persona ={
    Nombre: 'Ivan',
    Direccion: 'Bretaña #31',
    Correo: 'ivanllaguno@hotmail.com',
    Telefono: '5591943141',
    Viajes: {
        Nacionales: ['Tabasco','Mexicali','Oaxaca','Zacatecas'],
        Internacionales: ['Canada', 'EEUU']
    },
    Musica: ['Rap', 'Rock', 'Metal', 'Reggae', 'Pop'],
    Peliculas: {
        Terror: ['Anabelle', 'Anabelle 2', 'Anabelle 3', 'El Cojuro'],
        Ficcion: ['Star Wars', 'Star trek', 'Volver al futuro'],
        Infantiles: ['Frozen', 'Monsters Inc', 'Toy Story 4']
    }
}
console.log(persona.Peliculas.Ficcion[2])
console.log(persona.Viajes.Nacionales[3])
console.log(persona.Musica[4])