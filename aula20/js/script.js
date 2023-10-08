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

        resultado.innerHTML += `<p>Nome:${nome}; Sobrenome:${sobrenome}; Peso:${peso}; Altura${altura}</p>`

       
    };

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();
