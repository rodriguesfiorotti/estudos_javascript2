let vagas = []

function exibirMenu() {
  return prompt(
    "VAGAS DE EMPREGO:\n" +
    "1. Listar vagas disponíveis\n" +
    "2. Criar vaga\n" +
    "3. Visualizar uma vaga\n" +
    "4. Inscrever candidato\n" +
    "5. Excluir uma vaga\n" +
    "6. Sair\n"
  )
}

function criarVaga() {
    let vaga = {}

    vaga.nomeVaga = prompt('Informe o nome da Vaga:')
    vaga.descricao = prompt('Informe a descrição da vaga:')
    vaga.datalimite = prompt('Informe a data limite para essa vaga:')

    const confirmacao = confirm(
        'Confirma os dados da vaga?\n\n' +
        'Nome: ' + vaga.nomeVaga + '\n' +
        'Descrição: ' + vaga.descricao + '\n' +
        'Data Limite: ' + vaga.datalimite
    )

    if (confirmacao) {
        alert('Vaga salva com sucesso!')
        return vaga
    } else {
        alert('A vaga não foi inserida')
        return null
    }
}

function listarVagas() {
    if (vagas.length === 0) {
        alert("Não há vagas cadastradas.")
        return
    }

    let mensagem = ''
    vagas.forEach(function (vaga, indice) {
        mensagem += (indice+1) + ". " + vaga.nomeVaga + " (Candidatos: " + (vaga.candidatos ? vaga.candidatos.length : 0) + ")\n"
    })
    return(mensagem)
}

function InscreverCandidato() {
    if (vagas.length === 0) {
        alert("Não há vagas cadastradas.")
        return
    }

    const nomeCandidato = prompt('Informe o nome do candidato: ')

    let vagasDisponiveis = listarVagas()

    const indiceVaga = prompt('Informe o índice de uma das seguintes vagas disponíveis:\n' + vagasDisponiveis)

    const confirmacao = confirm(
        'Confirma a inscrição?\n\n' +
        'Candidato: ' + nomeCandidato + '\n' +
        'Vaga: ' + vagas[indiceVaga-1].nomeVaga
    )

    if (confirmacao) {
        if (vagas[indiceVaga-1].candidatos) {
            vagas[indiceVaga-1].candidatos.push(nomeCandidato)
        } else {
            vagas[indiceVaga-1].candidatos = []
            vagas[indiceVaga-1].candidatos.push(nomeCandidato)
        }
        
        alert(nomeCandidato + ' foi inscrito com sucesso na vaga para ' + vagas[indiceVaga-1].nomeVaga)
    } else {
        alert('O candidato não foi inscrito!')
    }
}

function obterNomesCandidatos(indiceVaga) {
    const vaga = vagas[indiceVaga - 1]
    if (!vaga.candidatos || vaga.candidatos.length === 0) {
        return 'Nenhum candidato inscrito.'
    }

    return vaga.candidatos.join(', ')
}

function visualizarVaga() {
    if (vagas.length === 0) {
        alert("Não há vagas cadastradas.")
        return
    }

    let vagasDisponiveis = listarVagas()
    
    const indiceVaga = prompt('Informe o índice de uma das seguintes vagas disponíveis \n' + vagasDisponiveis)
    
    vagas.forEach(function (vaga, indice) {
        let nomes = obterNomesCandidatos(indiceVaga, indice)
        let mensagem = 'Informações da Vaga: \n\n' 

        mensagem += 'Indice: ' + indiceVaga + '\n' +
        'Nome da Vaga: ' + vagas[indiceVaga-1].nomeVaga + '\n' +
        'Descrição: ' + vagas[indiceVaga-1].descricao + '\n' +
        'Data Limite: ' + vagas[indiceVaga-1].datalimite + '\n' +
        'Total de candidatos: ' + vagas[indiceVaga-1].candidatos.length + '\n' +
        'Nome dos candidatos: ' + nomes

        alert(mensagem)
    })
}



function excluirVaga() {
     if (vagas.length === 0) {
        alert("Não há vagas cadastradas.")
        return
    }

    let vagasDisponiveis = listarVagas()
    
    const indiceVaga = prompt('Informe o índice da vaga que deseja excluir:\n' + vagasDisponiveis)
    
}

do {
    opcao = exibirMenu()

    switch (opcao) {
        case "1":
        const listaVagas = listarVagas()
        alert("Vagas Disponíveis:\n\n" + listaVagas)
        break
      case "2":
        const novaVaga = criarVaga()
        if (novaVaga !== null) {
            vagas.push(novaVaga)
        }
        break
      case "3":
        visualizarVaga()
        break
      case "4":
        InscreverCandidato()
        break
      case "5":
        resultado = excluirVaga()
        break
      case "6":
        alert("Saindo...")
        break
      default:
        alert("Opção inválida!")
        break
    }
} while (opcao !== '6')

