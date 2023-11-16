const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')

let minhaListaDeItens = []

function adicionarNovaTarefa() {
    minhaListaDeItens.push(input.value)

    console.log(minhaListaDeItens)
}

function mostrarTarefas() {
    
}

button.addEventListener('click', adicionarNovaTarefa)
