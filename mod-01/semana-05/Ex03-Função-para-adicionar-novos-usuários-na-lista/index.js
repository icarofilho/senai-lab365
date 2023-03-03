const list = ["Pedro", "José", "Aderbal", "Danilo", "Luisa", "Vitoria"];

const addName = (...args) => {
  args.forEach((name) => {
    !list.includes(name) && list.push(name);
  });
};

addName("icaro", "juliana", "Pedro", "josé");
console.log(list);
