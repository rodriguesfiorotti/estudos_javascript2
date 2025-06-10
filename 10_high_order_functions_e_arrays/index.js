const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

// -----------------------------------------------------------------------------
// MAP: 

// const nomes = []
// for (let i = 0; i < personagens.length; i++) {
//   const personagem = personagens[i]
//   nomes.push(personagem.nome)
// }

// map: permite obter um novo array a partir de um array existente
const nomes = personagens.map(function (personagem) {
  return personagem.nome
})

console.log(nomes)

// -----------------------------------------------------------------------------

// FILTER: 

// const orcs = []
// for (let i = 0; i < personagens.length; i++) {
//   const personagem = personagens[i]
//   if (personagem.raca === "Orc") {
//     orcs.push(personagem)
//   }
// }

// filter: permite obter um novo array contendo apenas elementos específicos de um array existente
const orcs = personagens.filter(function (personagem) {
  return personagem.raca === "Orc"
})

console.log(orcs)


// -----------------------------------------------------------------------------

// REDUCE: 


// let nivelTotal = 0
// for (let i = 0; i < personagens.length; i++) {
//   nivelTotal += personagens[i].nivel
// }


// reduce: serve para reduzir um array existente a um valor final qualquer,
// passando um valor entre cada iteração sobre esse array e retornando ele no final
const nivelTotal = personagens.reduce(function (acumulador, personagem) {
  return acumulador + personagem.nivel
}, 0)

console.log(nivelTotal)

const racas = personagens.reduce(function (acumulador, personagem) {
  if (acumulador[personagem.raca]) {  // caso a chave (exemplo: orc) já exista, ele cria a chave e adiciona o personagem:
    acumulador[personagem.raca].push(personagem)
  } else { // caso não exista a chave, ele cria essa chave e já adiciona o personagem na lista.
    acumulador[personagem.raca] = [personagem]
  }
  return acumulador
}, {})  // queremos que raca comece como um objeto vazio

console.log(racas)

// -----------------------------------------------------------------------------

// SORT: 

// sort: ordena os elementos de um array a partir de comparações entre duplas de elementos
personagens.sort(function (a, b) { // O sort, altera o array original!!!
  return a.nivel - b.nivel  // Aqui estamos ordenando o array pelo nivel do personagem (do menor pro menor), pois se A for maior que B o resultado da subtração será positivo e vai para frente, se A for menor que b o resultado é negativo e vai jogar antes na função.
})


console.log(personagens)


// para fazermos o sort, sem alterar o array original, usamos o SLICE:

const personagensReOrdenados = personagens.slice().sort(function (a, b) {
  return b.nivel - a.nivel
})


console.log(personagensReOrdenados)