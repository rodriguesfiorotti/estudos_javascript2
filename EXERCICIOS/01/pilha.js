let opcao
let baralho = []

do {

    opcao = prompt(
        "Quantidade de Cartas no Baralho: " + 
        baralho.length +
        "\n\nSelecione uma opção:" +
        "\n  1. Adicionar uma Carta\n  2. Puxar uma Carta\n  3. Sair"
    )

    switch (opcao) {
        case "1":
            baralho.push(prompt("Informe o nome da carta:"))
            alert(baralho[baralho.length - 1] + " adicionada ao baralho com sucesso!")
            break
        case "2":
            if (baralho.length > 0) {
                alert("Você puxou a carta '" + baralho.pop() + "' do baralho!")
            } else {
                alert("Não há cartas no baralho!")
            }
            break
        case "3":
            alert("Saindo do Programa...")
            break
        default:
            alert("Opção inválida!")
    }

} while (opcao !== "3")