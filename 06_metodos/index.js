let pessoa = {
    nome: "Isaac",
    idade: 26,
    dizerOla() { // Isso é um método, ou seja, uma função dentro de objetos. 
        console.log("Olá, Mundo! Meu nome é " + this.nome) // Use This para referenciar o prório objeto em que se encontra.
    }
}

console.log(pessoa)

pessoa.dizerOla()