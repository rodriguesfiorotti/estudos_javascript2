// Retorno é a saída da função

// O retorno é usado para armazenarmos a saída da função em uma variável
// Se não explicitarmos qual deve ser a saída da função, sua saída será undefined
function calcularMedia(a, b) {
  const media = (a + b) / 2
}
const resultado = calcularMedia(5, 9)
console.log(resultado)  // Ou seja, isso não vai funcionar, retornando undefined




// Para dizer qual é a saída de uma função usamos o return
function criarProduto(nome, preco) {
  const produto = { nome, preco, estoque: 1 }
  return produto
}
const notebook = criarProduto("Notebook Intel Core i3 8GB", 3000)
console.log(notebook)



// Também podemos jogar a saída de uma função dentro dos parâmetros de outra
console.log(criarProduto("Smartphone Samsung Galaxy", 1000))




// E o retorno não precisa ser uma variável,
// pode ser o resultado de qualquer expressão
function areaRetangular(base, altura) {
  return base * altura  // Ou seja, não precisou declarar uma variavel
}
console.log(areaRetangular(3, 5))

// Ou até o retorno de outra função
function areaQuadrada(lado) {
  return areaRetangular(lado, lado)
}
console.log(areaQuadrada(8))




// Uma função só pode ter uma saída, depois do return nada é executado
// Repare que o VS Code nos avisa que nosso código não será executado
function olaMundo() {
  let texto = "..."
  return texto
  texto = "Olá, mundo!"
  console.log(texto)
}
console.log(olaMundo())



// No entanto, diferentes ramificações dentro
// da função podem ter diferentes retornos
function maioridade(idade) {
  if (idade >= 18) {
    return "Maior de idade"
  } else {
    return "Menor de idade"
  }
}
console.log(maioridade(20))
console.log(maioridade(13))