//? FETCH dos dados => trás a lista JSON para o Javascript
const users = await fetch("./users.json")
  .then((response) => response.json())
  .then((data) => data);

document.getElementById("search-area").addEventListener("submit", (e) => {
  e.preventDefault();
  const search = document.querySelector("#search-user").value;

  //? validação de campo nulo
  if (!search) {
    cardCreate("");
  } else {
    //? extrai o usuário da lista
    const [user] = users.filter((person) =>
      person.username.toLowerCase().includes(search.toLowerCase())
    );

    //? função para criar o card
    cardCreate(user);
  }
});

function cardCreate(person) {
  //? Area onde será impresso o USER
  const printArea = document.querySelector("#print-area");

  //? validação de existência de usuario
  if (!person) {
    return (printArea.innerHTML = "nenhum usuário localizado");
  }

  return (printArea.innerHTML = `
  <div class='card-container'>
    <div class='card-header line'>
      <b>Name:</b> ${person.name}
    </div>
    <div class='card-body line'>
    <b>Username:</b> ${person.username}
    </div>
  </div>`);
}
