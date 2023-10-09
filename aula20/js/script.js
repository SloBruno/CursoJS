function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')

    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome').value;
        const sobrenome = form.querySelector('.sobrenome').value;
        const peso = form.querySelector('.peso').value;
        const altura = form.querySelector('.altura').value;

        const dados = { nome, sobrenome, peso, altura };
        pessoas.push(dados);
        console.log(pessoas);

        form.reset();



        resultado.innerHTML += `
                                <div class="dadoscontainer">
                                <h2 class="yes">${nome} ${sobrenome}</h2>
                                <p>Peso:${peso}</p>
                                <p>Altura${altura}</p>
                                <p>IMC:${(peso / (altura * altura)).toFixed(2)}
                                </div>`};
    
    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();
