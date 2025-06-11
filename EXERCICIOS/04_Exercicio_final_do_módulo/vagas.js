let vagas = []

function exibirMenu() {
  return prompt(
    "VAGAS DE EMPREGO:\n" +
    "1. Listar vagas disponíveis\n" +
    "2. Criar vaga\n" +
    "3. Visuazar uma vaga\n" +
    "4. Inscrever candidato\n" +
    "5. Excluir uma vaga\n" +
    "6. Sair\n"
  )
}

function criarVaga() {
    let vaga = {}

    vaga.nome = prompt('Informe o nome da Vaga:')
    vaga.descricao = prompt('Informe a descrição da vaga:')
    vaga.datalimite = prompt('Informe a data limite para essa vaga:')

    const confirmacao = confirm(
        'Confirma os dados da vaga?\n\n' +
        'Nome: ' + vaga.nome + '\n' +
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

    let mensagem = "Vagas Disponíveis:\n\n"
    vagas.forEach(function (vaga, indice) {
        mensagem += indice + ". " + vaga.nome + " (Candidatos: " + (vaga.candidatos ? vaga.candidatos.length : 0) + ")\n"
    })
    alert(mensagem)
}

function InscreverCandidato() {
    if (vagas.length === 0) {
        alert("Não há vagas cadastradas.")
        return
    }

    const nomeCandidato = prompt('Informe o nome do candidato: ')
    const indiceVaga = prompt('Informe o índice da Vaga')

    const confirmacao = confirm(
        'Confirma a inscrição?\n\n' +
        'Candidato: ' + nomeCandidato + '\n' +
        'Vaga: ' + vagas[indiceVaga].nome
    )

    if (confirmacao) {
        if (vagas[indiceVaga].candidatos) {
            vagas[indiceVaga].candidatos.push(nomeCandidato)
        } else {
            vagas[indiceVaga].candidatos = []
            vagas[indiceVaga].candidatos.push(nomeCandidato)
        }
        
        alert(nomeCandidato + ' foi inscrito com sucesso na vaga para ' + vagas[indiceVaga].nome + ' com sucesso!')
    } else {
        alert('O candidato não foi inscrito!')
    }
}

function visualizarVaga() {
    
}



function excluirVaga() {
    
}

do {
    opcao = exibirMenu()

    switch (opcao) {
        case "1":
        listarVagas()
        break
      case "2":
        const novaVaga = criarVaga()
        if (novaVaga !== null) {
            vagas.push(novaVaga)
        }
        break
      case "3":
        resultado = visualizarVaga()
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

