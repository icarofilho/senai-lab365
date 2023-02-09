const user = { isLogged: null };
const form = document.querySelector("form"),
  inputArea = document.querySelector(".input-area");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = {
    username: "batatinha",
    password: "frita123",
  };

  if (!user.isLogged) {
    const username = document.querySelector("#username").value,
      password = document.querySelector("#password").value,
      msgArea = document.querySelector("#msg-area");

    if (username == data.username && password == data.password) {
      msgArea.innerHTML = "logado";
      msgArea.style = "color: green";
      localStorage.setItem("isLogged", true);
      location.href = "./page2.html";
    } else {
      msgArea.innerHTML = "credenciais incorretas";
      msgArea.style = "color: red";
    }
  }
});

function logout() {
  localStorage.removeItem("isLogged");
  Location.reload();
}

window.onload = () => {
  if (localStorage.length > 0) {
    var isLogged = JSON.parse(localStorage.getItem("isLogged"));

    if (isLogged) {
      location.href = "./page2.html";
    }
  } else {
    console.log("sem itens no storage");
  }
};
