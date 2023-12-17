function Calculadora() {
    this.display = document.querySelector('.display');

    this.clearDisplay = function () {
        this.display.value = '';
    };

    this.apagaUm = function () {
        this.display.value = this.display.value.slice(0, -1);
    };

    this.realizaConta = function () {
        let conta = this.display.value;

        try {
            conta = eval(conta);

            if (!conta) {
                alert("Conta inválida");
                return;
            }

            this.display.value = conta;
        } catch (e) {
            alert("Conta Inválida");
        }
    };

    this.inicia = function () {
        alert('Oi, iniciei');
        this.cliqueBotoes();
    };

    this.cliqueBotoes = function () {
        document.addEventListener('click', (e) => {
            const el = e.target;

            console.log(el);
            if (el.classList.contains('btn-num')) {
                this.btnParaDisplay(el.innerText);
            }

            if (el.classList.contains('btn-clear')) {
                this.clearDisplay();
            }

            if (el.classList.contains('btn-del')) {
                this.apagaUm();
            }

            if (el.classList.contains('btn-eq')) {
                this.realizaConta();
            }
        });
    };

    this.btnParaDisplay = function (valor) {
        this.display.value += valor;
    };
}

const calculadora = new Calculadora();
calculadora.inicia();
