const countVowels = (string) => {
  typeof string !== "string" &&
    console.log("Err: Argumento não é do tipo string");

  const vowels = ["a", "e", "i", "o", "u"];

  for (v of vowels) {
    const pos = string.indexOf(v);
    if (pos >= 0) {
      console.log("A primeira vogal fica na posição", pos);
      return;
    }
    console.log("Nenhuma vogal encontrada");
  }
};

countVowels("caio");
