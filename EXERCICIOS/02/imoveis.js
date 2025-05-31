let opcao
let imoveis = []

do {

    opcao = prompt(
        "Quantidade de Imóveis Atuais: " +
        imoveis.length +
        "\nEscolha uma opção:\n" +
        "  1. Salvar um imóvel\n  2. Mostrar todos os imóveis\n  3. Sair\n"
    )
        
    switch(opcao) {
        case "1":
            let imovel = {}
            imovel.proprietario = prompt("Informe o nome do proprietário:")
            imovel.quartos = prompt("Informe a quantidade de quartos:")
            imovel.banheiros = prompt("Informe a quantidade de banheiros:")
            imovel.garagem = prompt("Informe se possui garagem (Sim/Não)")
            imoveis.push(imovel)
            break
        case "2":    
            if (imoveis.length > 0) {
                for (let i = 0; i < imoveis.length; i++) {
                    let informacaoImovel = (
                        "Imóvel " + (i + 1) + ":" +
                        "\n  Proprietário: " + imoveis[i].proprietario +
                        "\n  Quantidade de Quartos: " + imoveis[i].quartos +
                        "\n  Quantidade de Banheiros: " + imoveis[i].banheiros +
                        "\n  Possui Garagem: " + imoveis[i].garagem
                    )
                    alert (informacaoImovel)
                }
            } else {
                alert("Ainda não há imóveis cadastrados!")
            }
            break
        case "3":
            break
        default:
            alert("Opção Inválida!")
    }

} while(opcao !== "3")
