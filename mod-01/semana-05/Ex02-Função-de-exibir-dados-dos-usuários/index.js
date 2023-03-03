const names = ["Pedro", "José", "Aderbal", "Danilo", "Luisa", "Vitoria"],
  fruit = ["Banana", "Morango", "Maçã", "Uva", "Pêra", "Laranja"];

const revertedFruitList = fruit.reverse().map((f) => f);
const group = names.map((n, i) => `${n} - ${fruit[i]}`);

console.log(group);
