var botaoadicionar = document.querySelector('#adicionar-paciente')
botaoadicionar.addEventListener('click', function (event) {
    event.preventDefault()

    var form = document.querySelector('#form-adiciona')

    var paciente = obtemPacienteDoFormulario(form)

    var pacienteTr = montaTr(paciente)

    var erros = validapaciente(paciente)

    if (erros.length > 0) {
        var mensagemErro = document.querySelector('#mensagem-erro')
        mensagemErro.textContent = erros
        return
    }

    var tabela = document.querySelector('#tabela-pacientes')

    tabela.appendChild(pacienteTr)

    form.reset()
})

function obtemPacienteDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente
}
function montaTr(paciente) {
    var pacienteTr = document.createElement('tr')
    pacienteTr.classList.add('paciente')

    pacienteTr.appendChild(montaTd(paciente.nome, 'infor-nome'))
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'))
    pacienteTr.appendChild(montaTd(paciente.altura, 'infor-altura'))
    pacienteTr.appendChild(montaTd(paciente.gordura, 'infor-gordura'))
    pacienteTr.appendChild(montaTd(paciente.imc, 'infor-imc'))

    return pacienteTr
}

function montaTd(dado, classe) {
    var td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)

    return td
}

function validapaciente(paciente) {
    var erros = []

    if (validaPeso(paciente.peso)) {
        erros.push('Peso é inválido')
    }

    if (validaAltura(paciente.altura)) {
        erros.push('Altura é inválida!')
    }

    return erros
}
