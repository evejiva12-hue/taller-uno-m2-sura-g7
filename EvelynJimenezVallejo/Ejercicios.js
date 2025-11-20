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

//9.Orden Alfabético
 let estudiantes = ["Zapata", "Alvarez", "Gomez", "Bernal"]
 estudiantes.sort()
 console.log(estudiantes)

//10.Vaciar un Arreglo
let puntuaciones = [100, 85, 92, 78]
puntuaciones.fill(0,0)
console.log(puntuaciones)

//11. Carrito de Compras
let carrito = []
carrito.push("Camisa","Pantalón")
console.log(carrito)
carrito.unshift("Zapatos")
console.log(carrito)
carrito.splice(1,1)
console.log(carrito)

//12.Control de Versiones
let commits = ["v1.0", "v1.1"]
commits.push("v1.2")
console.log(commits)
commits.splice(2,1)
console.log(commits)
commits.splice(2,0,"v1.2-corregido")
 
//13.Receta de Cocina
let receta = ["Paso 2: Mezclar ingredientes", "Paso 3: Hornear"]
receta.unshift("Paso 1: Pre-calentar horno")
console.log(receta)
receta.push("Paso 4: Servir")
console.log(receta)

//14.Invertir y Reemplazar
let palabras = ["uno", "dos", "cuatro"]
palabras.reverse()
palabras.splice(0,1)
console.log(palabras)
palabras.splice(0,0,"tres")
console.log(palabras)

//15.Equipo de Proyecto
let equipo = ["Ana (Líder)", "Juan (Dev)", "Maria (Diseñadora)"]
equipo.splice(1,1)
console.log(equipo)
equipo.push("Pedro (Dev)","Luisa (Dev)")
console.log(equipo)

//16.Puestos de Estacionamiento
let parking = ["CarroA", "Libre", "Libre", "CarroB"]
parking.splice(0,1)
console.log(parking)
parking.splice(0,2,"moto1","moto2")
console.log(parking)

//17.Manejo de Feed (Red Social)
let feed = ["Foto de Ana", "Video de Juan", "Noticia de Empresa"]
feed.unshift("Alerta de Sistema")
console.log(feed)
feed.pop()
console.log(feed)

//18.Lista de Invitados VIP
let invitados = ["Carlos", "Beatriz", "David", "Ana"]
invitados.sort()
console.log(invitados)
invitados.splice(1,1)
console.log(invitados)

//19.Tablero de Juego
let tablero = ["Inicio", null, null, null, null, "Fin"]
tablero.fill("Casilla Vacía",1,5)
console.log(tablero)

// 20.Desafío Final 
let codigos = ["A-10", "C-30", "B-20", "D-40"]
codigos.sort()
console.log(codigos)
codigos.splice(2,1)
console.log(codigos)
codigos.unshift("X-99")
console.log(codigos)
codigos.reverse()
console.log(codigos)






