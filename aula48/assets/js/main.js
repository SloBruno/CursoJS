const input_tarefa = document.querySelector('.input-tarefa');
const btn_tarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    return document.createElement('li');
}

function criaBotao(li) {
    li.innerText += '   ';
    const botaoApagar = document.createElement('button');
    const botaoEditar = document.createElement('button');
    botaoApagar.innerText = 'apagar';
    botaoEditar.innerText = 'editar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoEditar.setAttribute('class', 'editar');
    li.appendChild(botaoApagar);
    li.appendChild(botaoEditar);
}




function criaTarefa(textoInput) {
    const li = criaLi();
    li.setAttribute('data-texto', textoInput);
    li.innerText = textoInput;
    tarefas.appendChild(li);
    LimpaInput(li);
    let botoes = li.querySelector('.editar');
    console.log(botoes);
    criaBotao(li);    
    console.log(li.classList.value);    
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

document.addEventListener('click', function(e){
    const el = e.target;

    if(el.classList.contains('editar')){
        console.log('Editar')
    }
})

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const ListaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefa.getAttribute('data-texto');
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
