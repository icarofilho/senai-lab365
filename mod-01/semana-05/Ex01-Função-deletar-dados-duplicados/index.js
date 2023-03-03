const list = [
  "Pedro",
  "José",
  "Aderbal",
  "Danilo",
  "Luisa",
  "Vitoria",
  "Luis",
  "Danilo",
  "José",
];

const filteredList = [];
const duplicatedNames = [];

list.forEach((n, i) => {
  if (filteredList.includes(n)) {
    duplicatedNames.push(n);
  } else {
    filteredList.push(n);
  }
});

console.log(filteredList.join(", "));
console.log(duplicatedNames.join(", "));
