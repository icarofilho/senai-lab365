//! Semana 1
//* Exercício 1
console.log("Exercício 1");
const listOfStudents = [
  {
    nome: "Alice Milena Tatiane Araújo",
    idade: 73,
    cpf: "083.439.424-34",
    rg: "15.526.488-6",
    data_nasc: "01/02/1950",
    sexo: "Feminino",
    signo: "Aquário",
    mae: "Ayla Heloise",
    pai: "Gael Eduardo Diego Araújo",
    email: "alicemilenaaraujo@transporteveloz.com.br",
    senha: "1TAkjE0ybS",
    cep: "35171-218",
    endereco: "Rua Dois",
    numero: 553,
    bairro: "Caladinho",
    cidade: "Coronel Fabriciano",
    estado: "MG",
    telefone_fixo: "(31) 2931-4651",
    celular: "(31) 98380-9499",
    altura: "1,61",
    peso: 45,
    tipo_sanguineo: "AB-",
    cor: "vermelho",
  },
  {
    nome: "Elza Alice Pietra Santos",
    idade: 34,
    cpf: "601.942.382-45",
    rg: "12.449.043-8",
    data_nasc: "01/02/1989",
    sexo: "Feminino",
    signo: "Aquário",
    mae: "Agatha Jaqueline",
    pai: "André Leonardo Santos",
    email: "elza_santos@slb.com.br",
    senha: "Rqz4mxAMPm",
    cep: "76813-532",
    endereco: "Rua Mário Andreazza",
    numero: 791,
    bairro: "Mariana",
    cidade: "Porto Velho",
    estado: "RO",
    telefone_fixo: "(69) 2880-6127",
    celular: "(69) 99820-2108",
    altura: "1,50",
    peso: 58,
    tipo_sanguineo: "O+",
    cor: "laranja",
  },
  {
    nome: "Gabriela Rita Sophia Ribeiro",
    idade: 47,
    cpf: "606.507.027-00",
    rg: "34.436.198-6",
    data_nasc: "01/02/1976",
    sexo: "Feminino",
    signo: "Aquário",
    mae: "Luiza Marli",
    pai: "André Miguel Ribeiro",
    email: "gabriela.rita.ribeiro@lineubravo.com.br",
    senha: "GlOnuKbgTS",
    cep: "69090-697",
    endereco: "Beco São Francisco",
    numero: 946,
    bairro: "Cidade Nova",
    cidade: "Manaus",
    estado: "AM",
    telefone_fixo: "(92) 2586-4835",
    celular: "(92) 99881-9141",
    altura: "1,61",
    peso: 51,
    tipo_sanguineo: "AB+",
    cor: "vermelho",
  },
  {
    nome: "Francisco César Carlos dos Santos",
    idade: 80,
    cpf: "613.144.602-42",
    rg: "23.409.015-7",
    data_nasc: "07/01/1943",
    sexo: "Masculino",
    signo: "Capricórnio",
    mae: "Daniela Aline Andreia",
    pai: "Renan Augusto dos Santos",
    email: "francisco_dossantos@innovatis.com.br",
    senha: "xjN2PAt0iF",
    cep: "69918-138",
    endereco: "Travessa Boa Esperança",
    numero: 848,
    bairro: "Doca Furtado",
    cidade: "Rio Branco",
    estado: "AC",
    telefone_fixo: "(68) 3892-6612",
    celular: "(68) 98462-6413",
    altura: "1,61",
    peso: 59,
    tipo_sanguineo: "A-",
    cor: "laranja",
  },
  {
    nome: "Ian Breno Gomes",
    idade: 75,
    cpf: "264.053.324-03",
    rg: "11.973.404-7",
    data_nasc: "17/01/1948",
    sexo: "Masculino",
    signo: "Capricórnio",
    mae: "Beatriz Nina Fátima",
    pai: "Carlos Eduardo Vitor Vinicius Gomes",
    email: "ian.breno.gomes@bravo.com.br",
    senha: "LJ4gnhK69l",
    cep: "66050-200",
    endereco: "Vila Henrique",
    numero: 439,
    bairro: "Umarizal",
    cidade: "Belém",
    estado: "PA",
    telefone_fixo: "(91) 2525-2031",
    celular: "(91) 98647-0629",
    altura: "1,93",
    peso: 93,
    tipo_sanguineo: "B+",
    cor: "azul",
  },
];

listOfStudents.forEach((student) => {
  console.log("Ficha do aluno");
  console.log("nome: " + student.nome);
  console.log("altura: " + student.altura);
  console.log("idade: " + student.idade);
  console.log("sexo: " + student.sexo);
  console.log("sala: " + student.numero);
  console.log("\n");
});

//* Exercício 2
console.log("\nExercício 2");

for (index in listOfStudents) {
  listOfStudents[index]["Matemática"] = {
    nota1: Math.floor(Math.random() * 10) + 1,
    nota2: Math.floor(Math.random() * 10) + 1,
  };
  const { nota1, nota2 } = listOfStudents[index]["Matemática"];
  listOfStudents[index]["Matemática"].media = (nota1 + nota2) / 2;
  console.log(listOfStudents[index].nome);
  console.log(
    `possui a nota 1 : ${nota1}, a nota 2 : ${nota2}, e a média igual a  : ${listOfStudents[index]["Matemática"].media}`
  );
}

//* Exercício 3
console.log("\nExercício 3");

for (std of listOfStudents) {
  const { media } = std["Matemática"];
  std["Matemática"]["aprovado"] = media >= 7 ? true : false;
  if (media >= 7) {
    console.log(
      std.nome + `: ${media >= 7 ? "%caprovado" : "%creprovado"}`,
      "background: 	#00BFFF; color: #000"
    );
  } else {
    console.log(
      std.nome + `: ${media >= 7 ? "%caprovado" : "%creprovado"}`,
      "background: #FF4500; color: #FFF"
    );
  }
}

//* Extra
const containerS1Ex1 = document.getElementById("semana1");
const cards = listOfStudents.map((std) => {
  const status = std["Matemática"].aprovado == true ? "aprovado" : "reprovado";
  const { nota1, nota2, media } = std["Matemática"];

  return `<div class='card-container ${status}'>
            <div>
              <p>Nome: ${std.nome}</p>
            </div>
            <div class='card-data'>
              <p>Altura: ${std.altura}</p>
              <p>Idade: ${std.idade}</p>
            </div>
            <div class='card-data'>
              <p>Sexo: ${std.sexo}</p>
              <p>Sala: ${std.numero}</p>
            </div>
            <div class='card-data'>
              <p>nota 1: ${nota1}</p>
              <p>nota 2: ${nota2}</p>
              <p>media: ${media}</p>
            </div>
            <div class='card-data'>
              <p>O aluno foi ${status}</p>
            </div>
        </div>`;
});

containerS1Ex1.innerHTML += cards.join("");
