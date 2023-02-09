const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const cash = document.querySelector("#cash").value;
  const msgArea = document.querySelector("#msg-area");

  const price = convertToFloat(cash);

  let text = "";
  let table_row_min = 1;
  let table_row_max = 10;

  for (let tables = 1; tables <= 5; tables++) {
    text += "<table >";
    text += `<thead>
              <tr>
                <td>Qtd</td>
                <td>Valor</td>
              </tr>
            </thead>`;

    text += `<tbody >`;

    for (table_row_min; table_row_min <= table_row_max; table_row_min++) {
      text += `<tr><td>${table_row_min}</td><td>R$ ${(
        table_row_min * price
      ).toFixed(2)}</td></tr>`;
    }

    text += "</tbody></table>";

    msgArea.innerHTML = text;
    table_row_max += 10;
  }
});

function convertToFloat(money) {
  return parseFloat(money.replace(/\,/g, "."));
}
