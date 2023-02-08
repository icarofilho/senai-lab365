/* [M1S01] Ex 3 - [App SaveCollege] Alunos aprovados
Imprima o nome do aluno e o valor aprovado ou reprovado em seguida utilizando operadores condicionais. 
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

for (let i = 0; i < listOfStudents.length; i++) {
  listOfStudents[i]["Matemática"] = {
    gradeOne: Math.floor(Math.random() * 10) + 1,
    gradeTwo: Math.floor(Math.random() * 10) + 1,
    average: null,
    status: null,
  };
  listOfStudents[i]["Matemática"].average =
    (listOfStudents[i]["Matemática"].gradeOne +
      listOfStudents[i]["Matemática"].gradeTwo) /
    2;
  if (listOfStudents[i]["Matemática"].average >= 7) {
    listOfStudents[i]["Matemática"].status = "Approved";
  } else {
    listOfStudents[i]["Matemática"].status = "Reproved";
  }
}
console.log(listOfStudents);
