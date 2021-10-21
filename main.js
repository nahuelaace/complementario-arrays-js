const personas = [
    { nombre: "Nahuel", dni: 10382233 },
    { nombre: "Rocio", dni: 30382183 },
    { nombre: "Gonzalo", dni: 40382183 },
    { nombre: "Manuel", dni: 80382183 },
    { nombre: "Gabriel", dni: 60382183 },
    { nombre: "Noelia", dni: 50382183 },
  ];
  
function mostrar(miArray) {
for (const indice of miArray) {
    console.log("Nombre: " + indice.nombre + " - DNI: " + indice.dni);
    }
}

console.log("Estado inicial del array")
console.log(personas);
mostrar(personas);


console.log("\nLista de personas ordenadas por DNI");
const personasPorDni = personas.sort((a, b) => {return a.dni - b.dni;});
console.log(personasPorDni);
mostrar(personasPorDni);
alert("Abra la consola para ver el resultado del ordenamiento");