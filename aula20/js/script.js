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
        const imc = peso/(altura**2);
        let status;

        if (imc < 18.5){
            status = 'Abaixo do Peso';
        }

        else if (imc<25){
            status = 'Normal'
        }

        else if (imc<30){
            status = 'Sobrepeso';
        }

        else{
            status = 'Obesidade'
        }

        const dados = { nome, sobrenome, peso, altura, imc, status};
        pessoas.push(dados);
        console.log(pessoas);

        form.reset();

    

        resultado.innerHTML += `
                                <div class="dadoscontainer">
                                <h2 class="yes"> ${nome} ${sobrenome}</h2>
                                <p>Peso: ${peso}kg</p>
                                <p>Altura: ${altura}m</p>
                                <p>IMC: ${(imc).toFixed(2)}</p>
                                <p>Status: ${status}</p>
                                </div>`};
    
    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();
