const urlApi = 'https://thronesapi.com/api/v2/Characters';

async function buscarPersonaje(name) {
    try {
        // Promesa
        const response = await fetch(urlApi);
        if (!response.ok) {
            throw new Error('Error ' + response.status);
        }
        
        const datos = await response.json();
        // console.log (datos);

        // Busco el personaje por su nombre (Ned Stark)
        // const personaje = datos.find(personaje => personaje.fullName === name);
        // console.log(personaje);
    } catch (error) {
        console.log('Error', error);
    }
}
// buscarPersonaje("Ned Stark");
// Recupero todos los personajes disponibles
// buscarPersonaje();

// leo el archivo de personajes JSON.
const fs = require('fs');

function leerPersojanes() {
const datos = fs.readFileSync('./personajes.json', 'utf-8');
return JSON.parse(datos);
}
// console.log(personajes);
function escribirpersonajes (personajes) {
fs.writeFileSync('./personajes.json', JSON.stringify(personajes, null, 2), 'utf-8');
}

// function filtrarporfamilia (familia) {
//     return personajes.filter(personaje => personaje.family === familia);
// }

// const personajesHouseStark = filtrarporfamilia ('House Stark');
// // console.log (personajesHouseStark);

 function crearpersonaje (personajenuevo){
    let personajes = leerPersojanes();
 personajes.push(personajenuevo);
 escribirpersonajes (personajes);

}

crearpersonaje({"id": 53,
      "firstName": 'Maria',
      "lastName": "Stark",
      "fullName": "Maria Stark",
      "title": "No One",
      "family": "House Stark",
      "image": "",
      "imageUrl": "",
    });
// console.log (personajes)

function eliminarpersonajes (){
    let personajes = leerPersojanes();
    personajes.filter(personaje => personaje.id <= 25);
    escribirpersonajes (personajes);
}
console.log(personajes);
eliminarpersonajes();





