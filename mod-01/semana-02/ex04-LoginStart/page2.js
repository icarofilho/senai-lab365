document.querySelector("#profile-form").addEventListener("click", (e) => {
  e.preventDefault();
});

function store() {
  const avatarUrl = document.querySelector("#avatar-input").value,
    displayName = document.querySelector("#display-name").value,
    newPassword = document.querySelector("#new-password").value,
    oldPassword = document.querySelector("#old-password").value;

  const user = getFromLocalStorage("user");

  const password = user.password;

  user.avatar =
    !avatarUrl || avatarUrl == "informe uma URL" ? user.avatar : avatarUrl;
  user.displayName = displayName || user.displayName;
  user.password = newPassword || user.password;
  user.isLoggedIn = user.isLoggedIn;
  user.username = user.username;

  console.log("user", user.password);
  console.log(oldPassword);
  console.log(user);

  oldPassword == password && setAtLocalStorage("user", user);
  // location.reload();
}

function preview() {
  const avatar = document.querySelector("#avatar-photo");
  const url = document.querySelector("#avatar-input");
  url.value && (avatar.src = url.value);
  !url.value && (url.value = "informe uma URL");
}

function logout() {
  const user = getFromLocalStorage("user");
  user.isLoggedIn = false;
  setAtLocalStorage("user", user);

  location.href = "./index.html";
}

function getFromLocalStorage(name) {
  return JSON.parse(localStorage.getItem(name));
}

function setAtLocalStorage(name, value) {
  localStorage.setItem(name, JSON.stringify(value));
}

window.onload = () => {
  const user = getFromLocalStorage("user");

  !user && (location.href = "./index.html");
  user.isLoggedIn != true && (location.href = "./index.html");

  const userName = document.querySelector("#user-name");
  userName.innerHTML = user.displayName;

  const avatar = document.querySelector("#avatar-photo");
  avatar.src = user.avatar;
};
