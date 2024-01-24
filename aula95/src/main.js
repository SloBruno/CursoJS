import GeraCPF from './modules/GeraCPF';

import './assets/css/style.css';

(function(){
    const botao = document.querySelector('.novo-cpf');
    botao.addEventListener("click", ()=>     cpfGerado.innerHTML = gera.geraNovoCpf());
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera.geraNovoCpf();
})();

