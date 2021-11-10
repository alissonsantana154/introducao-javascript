var titulo = document.querySelector('.titulo')
titulo.textContent = 'aparecida Nutricionista'

var paciente = document.querySelector('.paciente')

var pacientes = document.querySelectorAll('.paciente')

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i]

    var tdPeso = paciente.querySelector('.info-peso')
    var peso = tdPeso.textContent

    var tdAltura = paciente.querySelector('.info-altura')
    var altura = tdAltura.textContent

    var tdImc = paciente.querySelector('.info-imc')

    var pesoEhValido = true
    var alturaEhValida = true

    if (peso <= 0 || peso >= 1000) {
        console.log('Peso inválido!')
        pesoEhValido = false
        tdImc.textContent = 'peso inválido!'
        paciente.classList.add('paciente-invalido')
    }

    if (altura <= 0 || altura >= 3.0) {
        console.log('Altura inválida!')
        alturaEhValida = false
        tdImc.textContent = 'Altura inválido!'
        paciente.classList.add('paciente-invalido')
    }

    if (alturaEhValida && pesoEhValido) {
        var imc = peso / (altura * altura)
        tdImc.textContent = imc.toFixed(2)
    }
}

var botaoadicionar = document.querySelector('#adicionar-paciente')
botaoadicionar.addEventListener('click', function (event) {
    event.preventDefault()
    console.log('Oi eu sou o botao e fui clicado')
})

titulo.addEventListener('click', function () {
    console.log('fui clicado')
})
