const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = {
    username: "batatinha",
    password: "frita123",
  };

  const username = document.querySelector("#username").value,
    password = document.querySelector("#password").value,
    msgArea = document.querySelector("#msg-area");

  if (username == data.username && password == data.password) {
    msgArea.innerHTML = "logado";
    msgArea.style = "color: green";
  } else {
    msgArea.innerHTML = "credenciais incorretas";
    msgArea.style = "color: red";
  }
});
