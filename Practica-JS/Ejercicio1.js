// Filtrar Números Pares
// Crear una función que reciba un array de números y devuelva un nuevo array que
// contenga solo los números pares.


// creamos un array vacio
let lista =[]

//declaramos una funcion flecha dentro de una variable que va ir agregando numeros 
// a un array desde un argumento
const numbers = (inicio)=>{
    while(inicio<20){
        inicio +=1
        lista.push(inicio)
    }
    return lista
}
// creaomos una variable que guarda el array que retorna la variable al retornar la function en la ejecucion
lista = numbers(0)

// creamos una variable para guardar el nuevo array que nos devuelve la funcioon filter
let lista_pares = lista.filter(x => x % 2 === 0)

// utilizamos el foreach para mostrar los elementos dentro del nuvo array obtenido de filter
lista_pares.forEach(elemento => console.log(elemento))
