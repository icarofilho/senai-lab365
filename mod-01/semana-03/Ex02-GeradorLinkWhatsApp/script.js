//? DOM do input onde leva o numero de telefone
const input_phone = document.querySelector("#phone");

//? DOM evita o reset do Form
document.querySelector("#form").addEventListener("submit", (e) => {
  e.preventDefault();
});

//? Adiciona o numero clicado no input
const handlerAddNumber = (e) => {
  input_phone.value += e.value;
};

//? Remove o ultimo digito do input
const handlerRemoveNumber = () => {
  const number = input_phone.value;
  const arr = number.split("");
  arr.pop();
  input_phone.value = arr.join("");
};

//? Gera o Link do Whatsapp passando o numero e o texto
const handlerLinkGenerator = (number, message) => {
  const text = handlerAddSpaces(message);
  const url = `https://api.whatsapp.com/send?phone=${number}&text=${text}`;
  document.querySelector(
    "#link"
  ).innerHTML = `<a href="${url}" target="_blank">Whatsapp</a>`;
};

//? substitui os espaços pelo caractere '%20'
const handlerAddSpaces = (message) => {
  return message.replace(/\s+/g, "%20");
};

//? Função que será chamada no HTML para gerar o LINK
function generate() {
  handlerLinkGenerator(
    document.querySelector("#phone").value,
    document.querySelector("#textarea").value
  );
}
