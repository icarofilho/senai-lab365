function shopping() {
  addItensToCart();
  checkout();
}

function checkout() {
  const cart = getFromLocalStorage();
  console.log(cart);

  const total = cart.reduce((acc, price) => {
    return parseFloat(acc) + parseFloat(price);
  }, 0);

  document.querySelector("#footer").innerHTML = `
  <div>
    <span class='text'>Total de itens: ${cart.length}</span>
    <span class='text'>Total da compra: R$ ${total.toFixed(2)}</span>
  </div>`;
  addCards(cart);
}

function addCards(arr) {
  const card = document.querySelector("#body");
  card.innerHTML = "";
  arr.map((p, i) => insertCard(card, i + 1, p));
}

function addItensToCart() {
  const cart = [];
  let price;

  do {
    // abre o prompt
    price = prompt("Insira o valor do produto: ");
    // adicionar caso o valor seja diferente de 0 / null / undefined
    price != 0 && price && cart.push(formatPrice(price));
    // contador
  } while (price != 0);

  // adiciona no localStorage
  addToLocalStorage(cart);
}

function insertCard(element, number, price) {
  // injeta o produto no html
  element.innerHTML += `<span>Produto ${number} : ${price}</span>`;
}

function formatPrice(price) {
  // remove as virgulas e retorna o preço em formato numérico
  return parseFloat(price.replace(/\,/, ".").replace(/\,-:;/g, "")).toFixed(2);
}

function getFromLocalStorage() {
  // retorna os valores de 'cart' do local storage
  return JSON.parse(localStorage.getItem("cart"));
}

function addToLocalStorage(item) {
  //grava no local storage
  localStorage.setItem("cart", JSON.stringify(item));
}

function cartHistory() {
  const cart = getFromLocalStorage();

  const card = document.querySelector("#body");
  if (cart.length == 0) {
    card.innerHTML = "Sem histórico de compras";
  } else {
    cart.map((p, i) => insertCard(card, i + 1, p));
  }
}

window.onload = () => {
  // adiciona no local storage caso não exista
  !getFromLocalStorage() && addToLocalStorage([]);
  cartHistory();
};
