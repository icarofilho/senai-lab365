class Conta {
  saldo;
  #senha;
  constructor(senha, saldo = 0) {
    this.#senha = senha;
    this.saldo = saldo;
  }

  depositar(senha, valor) {
    senha == this.#senha && (this.saldo += valor);
    senha != this.#senha && console.log("Senha invalida");
  }

  retirar(senha, valor) {
    if (this.saldo == 0 || this.saldo - valor < 0) {
      console.log("Saldo insuficiente");
      return;
    } else {
      senha == this.#senha && (this.saldo -= valor);
      senha != this.#senha && console.log("Senha invalida");
    }
  }

  extrato() {
    console.log(this.saldo);
  }
}

const contaCorrente = new Conta("1234", 30);

contaCorrente.depositar("1234", 20);
contaCorrente.extrato();
contaCorrente.retirar("1234", 100);
contaCorrente.extrato();
