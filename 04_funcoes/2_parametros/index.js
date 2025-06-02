// O parâmetro é a entrada da função.

// Ele é como uma variável que fica disponível dentro da função
// mas que é informada na hora de chamar a função

// x é o parametro dessa função:
function dobro(x) {
  console.log("O dobro de " + x + " é " + (x * 2))
}
dobro(5)
dobro(7)




// Se uma função for chamada sem informar o parâmetro
// o valor usado para ele será o undefined
dobro()




// Mas podemos declarar um valor padrão para um parãmetro, assim, 
// se ele não for informado, o valor padrão será usado no lugar do undefined
function dizerOla(nome = "mundo") {
  console.log("Olá, " + nome + "!")
}
dizerOla("Isaac")
dizerOla()




// Uma função pode ter quantos parâmetros quisermos, basta separá-los por vírgula
function soma(a, b) {
  console.log("O resultado da soma é: " + (a + b))
}
soma(1, 1)
soma(34, 5)




// Ao usar vários parâmetros, é recomendado deixar aqueles com valor padrão por último
function criarUsuario(nome, email, senha, tipo = "leitor") {
  const usuario = { nome, email, senha, tipo }

  // O comando acima, é o mesmo que fazer o seguinte:
  // const usuario = { 
  //     nome: nome,
  //     email: email,
  //     senha: senha,
  //     tipo: tipo 
  // }

  console.log(usuario)
}

function novoUsuario(nome, tipo = "leitor", email, senha) {
  const usuario = { nome, email, senha, tipo }
  console.log(usuario)
}

criarUsuario("Isaac", "isaac@email.com", "1234")
novoUsuario("Isaac", "isaac@email.com", "1234") // Essa foi feita para mostrar que a ordem dos parâmetros importam!! mesmo que haja valor padrão, ele tem que ser informado nesses casos Exemplo correto: novoUsuario("Isaac", undefined,"isaac@email.com", "1234"), mas o padrão é sempre deixar os parametros que possuem valor padrão fiquem no final da função Exemplo: function novoUsuario(nome, email, senha, tipo = "leitor") {...} 




// Ao criarmos uma função com muitos parâmetros,
// uma boa prática é substituí-los por um objeto
function parametrosDoJeitoErrado(nome, telefone, endereco, aniversario, email, senha) {
  // ...
}
function parametrosDoJeitoCerto(usuario) {
  // ...
}

// Além de facilitar na chamada da função, a ordem dos parâmetros se torna irrelevante

parametrosDoJeitoErrado("nome", "telefone", "endereco", "aniversario", "email", "senha")




const dadosDoUsuario = {
  nome: "",
  telefone: "",
  email: "",
  senha: "",
  aniversario: "",
  endereco: ""
}

parametrosDoJeitoCerto(dadosDoUsuario)