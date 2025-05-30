let opcao
let fila = []
let paciente
let nomesFila

do {

    if (fila.length > 0) {
        nomesFila = ""
        for (let indice = 0; indice < fila.length; indice++) {
            let elemento = fila[indice]
            nomesFila += (indice + 1) + "º " + elemento
            
            if ((indice + 1) < fila.length) {
                nomesFila += ", "
            } else {
                nomesFila += "\n\n"
            }
        }
    } else {
        nomesFila = "  Nenhum Paciente na Fila!\n\n"
    }
     

    opcao = prompt(
        "Fila de Pacientes atual: \n" +
        nomesFila +
        "Informe o número de uma opção: \n" +
        "  1. Novo Paciente\n  2. Consultar Paciente\n  3. Sair\n"
    )

    switch (opcao) {
        case "1":
            fila.push(prompt("Informe o nome do Paciente:"))
            alert(fila[(fila.length - 1)] + " foi adicionado a fila!") 
            break
        case "2":
            if (fila.length > 0) {
                paciente = fila.shift()
                alert(paciente + " foi consultado com sucesso!")
            } else {
                alert("Não há pacientes na fila!")
            }
            break
        case "3":
            alert("Finalizando Programa...")
            break
        default:
            alert("Opção Inválida!")
    }

} while (opcao !== "3")