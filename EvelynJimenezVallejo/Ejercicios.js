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

//5.Fila del Banco 
let fila = ["Ana", "Luis", "Carlos", "Maria"]
 fila.splice(1,1)
 console.log(fila)
 fila.splice(1,0, "Jorge")
 console.log(fila)

 //6.Mazo de Cartas
 let mazo = ["As", "Rey", "Reina", "Jota"]
mazo.reverse()
console.log(mazo)
let cartaArriba= mazo.shift()
console.log(cartaArriba)

//7.Gestión de Asientos de Cine
let asientos = ["Ocupado", "Libre", "Libre", "Libre", "Ocupado"]
asientos.fill("Reservado", 1, 4)
console.log(asientos)

//8.Reemplazar Elemento
let productos = ["Monitor", "Teclado", "Mouse Roto", "Webcam"]
productos.splice(2,1)
console.log(productos)
productos.splice(2,0,"Mouse Nuevo")
console.log(productos)





