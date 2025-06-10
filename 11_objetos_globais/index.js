// Escopo global (window):

// window.alert("Oi")

// alert("Oi, também")


// É diferente, aqui os exemplos:


let pessoa = Object()
console.log(pessoa)

// Sem informar nada:
let lista = Array()
console.log(lista)

// Passando valores
lista = Array("A", "B", "C")
console.log(lista)


// Sem informar nada:
let texto = String()
console.log(texto)

// Passando valores
texto = String(42)
console.log(texto)

// Sem informar nada:
let numero = Number()
console.log(numero)

// Passando valores
console.log(Number.isInteger(42.5))
console.log(Number.isInteger(45))


console.log(Date()) //devolve a data atual


console.log(Math.PI) //retorna o valor de PI

console.log(Math.sqrt(144))  //retorna a raiz quadrada de um valor