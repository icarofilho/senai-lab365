const people = [
  { nome: "luis", idade: 26 },
  { nome: "norma", idade: 16 },
  { nome: "daiana", idade: 26 },
  { nome: "jorge", idade: 16 },
  { nome: "kauan", idade: 16 },
  { nome: "charles", idade: 26 },
  { nome: "marco", idade: 16 },
  { nome: "bruno", idade: 16 },
];

const major = [];
const minor = [];

people.forEach((person) => {
  person.idade > 18 ? major.push(person.nome) : minor.push(person.nome);
});

console.log(major);
console.log(minor);
