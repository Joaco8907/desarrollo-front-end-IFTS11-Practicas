// Calcular Promedio
//Escribir una función que tome un array de números y calcule el promedio.

let lista = [1,2,3,4,5]

console.log(typeof(lista))

let suma_Array = () => {
    let resul= 0
    lista.forEach(element => resul += element)
    return resul
}

const sumaTotal = lista.reduce((acumulador, numeroActual) => {
  return acumulador + numeroActual;
}, 0);

// Esto tambien se puede hacer con reduce. 

let promedio = (sumaTotal) =>sumaTotal / lista.length


console.log (promedio(sumaTotal))