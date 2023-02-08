/*
  [M1S01] Ex 1 - [App SaveCollege] Dados dos alunos
  Uma escola precisa armazenar os dados dos alunos e realizar várias operações. Primeiro crie uma lista que guarda 5 objetos 
  chamados aluno, e adicione 5 propriedades contendo informações pessoais como “name, altura, idade, sexo e sala”. Por fim, 
  imprima os alunos no terminal.
*/
const listOfStudents = [
  {
    name: "Alice Milena Tatiane Araújo",
    age: 73,
    gender: "Feminino",
    classroom: 553,
  },
  {
    name: "Elza Alice Pietra Santos",
    age: 34,
    gender: "Feminino",
    classroom: 791,
  },
  {
    name: "Gabriela Rita Sophia Ribeiro",
    age: 47,
    gender: "Feminino",
    classroom: 946,
  },
  {
    name: "Francisco César Carlos dos Santos",
    age: 80,
    gender: "Masculino",
    classroom: 848,
  },
  {
    name: "Ian Breno Gomes",
    age: 75,
    gender: "Masculino",
    classroom: 439,
  },
];

console.table(listOfStudents);
