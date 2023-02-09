const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const multiply = document.querySelector("#select-number").value;
  const msgArea = document.querySelector("#msg-area");

  let text = "<ul>";
  for (let i = 0; i <= 10; i++) {
    text += `<li>${multiply} x ${i} = ${multiply * i}</li>`;
  }
  text += "</ul>";
  msgArea.innerHTML = text;
});
