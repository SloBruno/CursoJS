const input_tarefa = document.querySelector('.input-tarefa');
const btn_tarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    return document.createElement('li');
}

function criaBotaoApagar(li) {
    li.innerText += '   ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'apagar';
    botaoApagar.setAttribute('class', 'apagar');
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    LimpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

function LimpaInput() {
    input_tarefa.value = '';
    input_tarefa.focus();
}

input_tarefa.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        if (!input_tarefa.value) return;
        criaTarefa(input_tarefa.value);
    }
});

btn_tarefa.addEventListener('click', function () {
    if (!input_tarefa.value) return;
    criaTarefa(input_tarefa.value);
});

document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
});

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const ListaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('apagar', '').trim();
        ListaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(ListaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {
    const tarefasSalvas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefasSalvas);

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();
