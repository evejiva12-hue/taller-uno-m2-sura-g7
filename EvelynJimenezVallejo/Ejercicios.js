/*1. Lista Supermercado
let compras = ["manzanaz"]
console.log(compras)
//agregar al final 
compras.push("leche", "pan")
//agregar al inicio
compras.unshift("huevos")
//eliminar(posicion, cantidad a eliminar)
compras.splice(1,1)
console.log(compras)*/


//2. Pila de Tareas Pendientes (LIFO)
let tareas = ["Revisar emails"]
tareas.unshift("Llamar al cliente")
console.log(tareas)
tareas.unshift("Preparar reporte")
console.log(tareas)
//shift elimina primer arreglo
tareas.shift()
console.log(tareas)
tareas.shift()
console.log(tareas)


