class CONTABANCARIA {
    #nomeBanco
    #numeroAgencia

    get nomeBanco() {
        return this.#nomeBanco
    }

    get numeroAgencia() {
        return this.#numeroAgencia
    }

    set nomeBanco(valor) {
        this.#nomeBanco = valor
    }

    set numeroAgencia(valor) {
        this.#numeroAgencia = valor
    }

        ImprimirDados() {
        return `
          Nome Do Banco: ${this.#nomeBanco}<br>
          Numero Da Agencia: ${this.#numeroAgencia}<br>
        `
    }
}