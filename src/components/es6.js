//** forEach **//

// EJERCICIO 1

// const ironhackers = ['Antonio', 'Diego', 'Israel', 'Marco', 'Ana Paola'];

// for(var i = 0; i < ironhackers.length; i++) {
//   console.log(ironhackers[i]);
// }

// ironhackers.forEach((ironhacker, index) => {
//   console.log(index, ironhacker);
// });

// EJERCICIO 2

// const compra = [
//   {cantidad: 2, precio: 100},
//   {cantidad: 5, precio: 75},
//   {cantidad: 3, precio: 90}
// ];

// compra.forEach((e, i) => {
//   console.log(`$${(e.cantidad * e.precio)}`);
// });


//** map **//

// EJERCICIO 1

// const numeros = [1,2,3,4,5,6];
// const otrosNumeros = [];

// for(var i = 0; i < numeros.length; i++) {
//   otrosNumeros.push(numeros[i]*2);
// }

// console.log(otrosNumeros);

// const numerosMapeados = numeros.map((numero, index) => {
//   return {id: index, numero: numero * 5};
// });

// console.log(numerosMapeados);


//** filter **//

// EJERCICIO 1

// const productos = [
//   {nombre: 'iPad', categoria: 'Electrónica'},
//   {nombre: 'TV', categoria: 'Electrónica'},
//   {nombre: 'Lavadora', categoria: 'Línea blanca'},
//   {nombre: 'Sofá', categoria: 'Muebles'},
// ];
// const compraConvencional = [];

// for(var i = 0; i < productos.length; i++) {
//   if(productos[i].categoria == 'Muebles') {
//     compraConvencional.push(productos[i]);
//   }
// }

// console.log(compraConvencional);

// const compraFiltrada = productos.filter(e => {
//   return e.categoria == 'Electrónica';
// });

// console.log(compraFiltrada);


//** find **//

// EJERCICIO 1

// const productos = [
//   {nombre: 'iPad', categoria: 'Electrónica'},
//   {nombre: 'TV', categoria: 'Electrónica'},
//   {nombre: 'Lavadora', categoria: 'Línea blanca'},
//   {nombre: 'Sofá', categoria: 'Muebles'},
// ];

// const resultado = productos.find(producto => {
//   return producto.categoria == 'Electrónica';
// });

// console.log(resultado);


//** every and some **//

// EJERCICIO 1 EVERY

// const estudiantes = [
//   {nombre: 'Santiago', calificacion: 15},
//   {nombre: 'Noé', calificacion: 86},
//   {nombre: 'Daniel', calificacion: 89}
// ];

// let estudiantesPasan = false;

// for(var i = 0; i < estudiantes.length; i++) {
//   let estudiante = estudiantes[i];
//   if(estudiante.calificacion < 70) {
//     estudiantesPasan = false;
//     break
//   } else {
//     estudiantesPasan = true;
//   }
// }

// console.log(estudiantesPasan);

// let estudiantesPasanEvery = estudiantes.every(estudiante => {
//   return estudiante.calificacion > 70;
// });

// console.log(estudiantesPasanEvery);

// EJERCICIO 1 SOME

//  const estudiantes = [
//   {nombre: 'Santiago', calificacion: 15},
//   {nombre: 'Noé', calificacion: 86},
//   {nombre: 'Daniel', calificacion: 89}
// ];

// let algunosEstudiantesPasan = false;

// for(var i = 0; i < estudiantes.length; i++) {
//   let estudiante = estudiantes[i];
//   if(estudiante.calificacion >= 70) {
//     algunosEstudiantesPasan = true;
//     break
//   } else {
//     algunosEstudiantesPasan = false;
//   }
// }

// console.log(algunosEstudiantesPasan);

// let estudiantesPasanSome = estudiantes.some(estudiante => {
//   return estudiante.calificacion >= 70;
// });

// console.log(estudiantesPasanSome);


//** reduce **//

// EJERCICIO 1

// const productos = [
//   {producto: 'Guitarra', precio: 450},
//   {producto: 'Batería', precio: 400},
//   {producto: 'Bajo', precio: 350},
// ];

// const total = productos.reduce((suma, producto) => {
//   return suma + producto.precio;
// }, 0);

// console.log(total);


//** for of && for in **//

// EJERCICIO 1

// const tas = ['Joss', 'Harland', 'JP'];
// const nombres = {
//   pm: 'Anahi',
//   lt: 'Germán'
// }

// for(let ta of tas) {
//   console.log(ta);
// }

// for(let nombre in nombres) {
//   console.log(nombres[nombre]);
// }


//** rest operators **//

// EJERCICIO 1

// function myFun(a, b, ...manyMoreArgs) {
//   console.log("a", a); 
//   console.log("b", b);
//   console.log("manyMoreArgs", manyMoreArgs); 
// }

// myFun("one", "two", "three", "four", "five", "six");


//** spread operators **//

// EJERCICIO 1

// const marcas = ['Ford', 'Nissan'];
// const otrasMarcas = ['BMW', 'Audi'];

// const marcasJuntas = [...marcas, ...otrasMarcas];
// console.log(marcasJuntas);

// const usuario = {
//   nombre: 'JP',
//   edad: 32
// }

// const mismoUsuario = {...usuario}
// console.log(mismoUsuario);


//** classes **//

// EJERCICIO 1

// function Auto() {
  
// }

// Auto.prototype.status = 'Nuevo';
// Auto.prototype.color = 'Negro';
// Auto.prototype.marca = 'Nissan';


// var auto = new Auto();
// console.log(auto.__proto__);

// class Carro {
//   constructor(opciones) {
//     this.status= opciones.status;
//     this.color= opciones.color;;
//     this.marca= opciones.marca;
//   }
// }

// const carro = new Carro({
//                 status: 'Viejo',
//                 color: 'Rojo',
//                 marca: 'VW'
//               });

// console.log(carro)



//** destructuring **//

// EJERCICIO 1

// const ta = {
//   nombre: 'JP',
//   edad: 32
// }

// const {nombre, edad} = ta;
// console.log(nombre, edad);