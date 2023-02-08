/* 
  [M1S01] Ex 2 - [App SaveCollege] Média dos alunos
  A escola precisa saber a média de nota dos alunos de uma determinada série. Para isso precisamos de sua ajuda. Crie uma 
  propriedade dentro de cada objeto aluno chamado Matemática com um valor fictício e utilize operadores aritméticos para obter a 
  média dos alunos e imprimir no terminal.
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

listOfStudents[0]["Matemática"] = {
  gradeOne: Math.floor(Math.random() * 10) + 1,
  gradeTwo: Math.floor(Math.random() * 10) + 1,
  average: null,
};
listOfStudents[0]["Matemática"].average =
  (listOfStudents[0]["Matemática"].gradeOne +
    listOfStudents[0]["Matemática"].gradeTwo) /
  2;

listOfStudents[1]["Matemática"] = {
  gradeOne: Math.floor(Math.random() * 10) + 1,
  gradeTwo: Math.floor(Math.random() * 10) + 1,
  average: null,
};
listOfStudents[1]["Matemática"].average =
  (listOfStudents[1]["Matemática"].gradeOne +
    listOfStudents[1]["Matemática"].gradeTwo) /
  2;

listOfStudents[3]["Matemática"] = {
  gradeOne: Math.floor(Math.random() * 10) + 1,
  gradeTwo: Math.floor(Math.random() * 10) + 1,
  average: null,
};
listOfStudents[3]["Matemática"].average =
  (listOfStudents[3]["Matemática"].gradeOne +
    listOfStudents[3]["Matemática"].gradeTwo) /
  2;

listOfStudents[4]["Matemática"] = {
  gradeOne: Math.floor(Math.random() * 10) + 1,
  gradeTwo: Math.floor(Math.random() * 10) + 1,
  average: null,
};
listOfStudents[4]["Matemática"].average =
  (listOfStudents[4]["Matemática"].gradeOne +
    listOfStudents[4]["Matemática"].gradeTwo) /
  2;

console.log(listOfStudents);
