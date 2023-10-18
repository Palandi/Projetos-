class CONTACORRENTE extends CONTABANCARIA {
    #nome
    #sobrenome
    #numeroConta
    #dataAbertura
    #saldoInicial
    #cidade
    #estado

    get nome() {
        return this.#nome
    }

    set nome(value) {
        this.#nome = value
    }

    get sobrenome() {
        return this.#sobrenome
    }

    set sobrenome(value) {
        this.#sobrenome = value
    }

    get numeroConta() {
        return this.#numeroConta
    }

    set numeroConta(value) {
        this.#numeroConta = value
    }

    get dataAbertura() {
        return this.#dataAbertura
    }

    set dataAbertura(value) {
        this.#dataAbertura = value
    }

    get saldoInicial() {
        return this.#saldoInicial
    }

    set saldoInicial(value) {
        this.#saldoInicial = value
    }

    get cidade() {
        return this.#cidade
    }

    set cidade(value) {
        this.#cidade = value
    }

    get estado() {
        return this.#estado
    }

    set estado(value) {
        this.#estado = value
    }

    ImprimirDados() {
        return `
        ${super.ImprimirDados()}
        Nome: ${this.#nome}<br>
        Sobrenome: ${this.#sobrenome}<br>

       Número Da Conta: ${this.#numeroConta}<br>
       Data Da Abertura: ${this.#dataAbertura}<br>
       Saldo Inicial: ${this.#saldoInicial}<br>
        Cidade: ${this.#cidade}<br>
        Estado: ${this.#estado}<br>


      `
    }
}
