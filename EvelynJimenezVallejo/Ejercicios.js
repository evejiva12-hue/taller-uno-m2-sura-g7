//1. Lista Supermercado
let compras = ["manzanaz"]
console.log(compras)
//agregar al final 
compras.push("leche", "pan")
//agregar al inicio
compras.unshift("huevos")
//eliminar(posicion, cantidad a eliminar)
compras.splice(1,1)
console.log(compras)


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

//3. Pila de Historial
let historial = ["google.com", "youtube.com", "facebook.com"]
historial.pop()
//elimina el ultimo arreglo
historial.pop()
console.log(historial)

//4.Cola de Impresión
let colaImpresion = ["doc1.pdf", "doc2.png", "doc3.jpg"]
colaImpresion.shift()
console.log(colaImpresion)
colaImpresion.push("doc4.txt")
console.log(colaImpresion)
colaImpresion.shift()
console.log(colaImpresion)





