// class Calculadora{
//     constructor(){

//     }
//     sumar(num1,num2){
//         return parseInt(num1) + parseInt (num2);
//     }
//     restar(num1,num2){
//         return parseInt(num1) - parseInt (num2)
//     }
//     multiplicar(num1,num2){
//         return parseInt (num1) * parseInt (num2)
//     }
//     dividir(num1,num2){
//         return parseInt (num1) / parseInt (num2)
//     }
//     potensiar(num,exp){
//     return num**exp
//     }
//     raizcuadrada(num1){
//     return Math.sqrt(num1)
//     }
//     raizcubica(num1){
//     return Math.cbrt(num1)
//     }

// }
// const calculadora = new Calculadora ();

// alert(`¿Que operecion deseas realizar?`)
// let operecion = prompt(` 1.Suma 2.Resta 3.Multiplicar 4.Dividir 5.Potensiar 6.Raiz Cuadrada 7.Raiz Cubica`)

// if (operecion == 1) {
//     let num1 = parseInt(prompt(`Primer termino`))
//     let num2 = parseInt(prompt(`Segundo termino`))
//     resultado = calculadora.sumar(num1,num2);
//     alert(`Tu resultado es ${resultado}`)
// }
// else if (operecion == 2) {
//     let num1 = parseInt(prompt(`Primer termino`))
//     let num2 = parseInt(prompt(`Segundo termino`))
//     resultado = calculadora.restar(num1,num2);
//     alert(`Tu resultado es ${resultado}`)
// }
// else if (operecion == 3) {
//     let num1 = parseInt(prompt(`Primer termino`))
//     let num2 = parseInt(prompt(`Segundo termino`))
//     resultado = calculadora.multiplicar(num1,num2);
//     alert(`Tu resultado es ${resultado}`)
// }
// else if (operecion == 4) {
//     let num1 = parseInt(prompt(`Primer termino`))
//     let num2 = parseInt(prompt(`Segundo termino`))
//     resultado = calculadora.dividir(num1,num2);
//     alert(`Tu resultado es ${resultado}`)
// }
// else if (operecion == 5) {
//     let num1 = parseInt(prompt(`Primer termino`))
//     let num2 = parseInt(prompt(`Segundo termino`))
//     resultado = calculadora.potensiar(num1,num2);
//     alert(`Tu resultado es ${resultado}`)
// }
// else if (operecion == 6) {
//     let num1 = parseInt(prompt(`Primer termino`))
//     resultado = calculadora.raizcuadrada(num1);
//     alert(`Tu resultado es ${resultado}`)
// }
// else if (operecion == 7) {
//     let num1 = parseInt(prompt(`Primer termino`))
//     resultado = calculadora.raizcubica(num1);
//     alert(`Tu resultado es ${resultado}`)
// }
let peliculas = ["pepa","Spiderman","Black Men"]

document.write(peliculas + `<br>`)

peliculas.push("Gladiador")

document.write(peliculas)