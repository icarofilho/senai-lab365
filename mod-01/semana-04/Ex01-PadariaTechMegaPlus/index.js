class CaixaRegistradora {
  estoque = [];

  constructor() {}

  addStock(codigoBarra, preco, nome) {
    if (!codigoBarra || !preco || !nome) {
      console.log(
        "Todos os campos são obrigatórios. O item não foi adicionado"
      );
    } else {
      this.estoque.push({ codigoBarra, preco, nome });
    }
  }

  startShopping(name) {}

  cart(codigoBarra, quantidade) {}

  show() {
    console.log(this.estoque);
  }
}

const caixa = new CaixaRegistradora();
caixa.addStock("#123", "33.33", "garrafa");
caixa.show();
