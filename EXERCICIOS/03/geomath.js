//Estou ajustando ainda....

let opcao

function areaTriangulo(base, altura) {
    return base * altura / 2
}

function areaRetangulo(base, altura) {
    return base * altura
}

function areaQuadrado(lado) {
    return lado * lado
}

function areaTrapezio(baseMaior, baseMenor, altura) {
    return (baseMaior + baseMenor) * altura / 2
}

function areaCirculo(raio) {
    return 3.14 * (raio * raio)
}

function perguntaMedida(objeto) {
    for (let i = 0; i < objeto.medida.length; i++) {
        let medidaInformada = parseFloat(prompt("Informe o valor da " + objeto.medida[i] + " do " + objeto.nome))

        if (isNaN(medidaInformada)) {
                do {
                    medidaInformada = parseFloat(prompt("Informe o valor da " + objeto.medida[i] + " do " + objeto.nome + " válida:"))
                } while (isNaN(medidaInformada))
            }
        
        objeto[objeto.medida[i]] = medidaInformada
    }
}

do {
    let objeto = {}

    opcao = prompt(
        "CALCULADORA GEOMÉTRICA:\n\n Escolha uma das operações para calcular:" +
        "\n  1. Área de um Triângulo." +
        "\n  2. Área de um Retângulo." +
        "\n  3. Área de um Quadrado." +
        "\n  4. Área de um Trapézio." +
        "\n  5. Área de um Círculo." +
        "\n  6. Sair." 
    )

    switch (opcao) {
        case "1":
            objeto.nome = "triângulo"
            objeto.medida = ["base", "altura"]
            perguntaMedida(objeto)
            alert("A área do triângulo é igual a: " + areaTriangulo(objeto.base, objeto.altura))
            break
        case "2":
            objeto.nome = "retângulo"
            objeto.medida = ["base", "altura"]
            perguntaMedida(objeto)
            alert("A área do retângulo é igual a: " + areaRetangulo(objeto.base, objeto.altura))
            break
        case "3":
            objeto.nome = "quadrado"
            objeto.medida = "lado"
            perguntaMedida(objeto)
            alert("A área do quadrado é igual a: " + areaQuadrado(objeto.lado))
            break
        case "4":
            objeto.nome = "trapézio"
            objeto.medida = ["maiorBase", "menorBase", "altura"]
            perguntaMedida(objeto)
            alert("A área do trapézio é igual a: " + areaTrapezio(objeto.baseMaior, objeto.baseMenor, objeto.altura))
            break
        case "5":
            objeto.nome = "círculo"
            objeto.medida = "raio"
            perguntaMedida(objeto)
            alert("A área do círculo é igual a: " + areaCirculo(objeto.raio))
            break
        case "6":
            break
        default:
            alert("Opção inválida!!")
    }

} while(opcao !== "6")