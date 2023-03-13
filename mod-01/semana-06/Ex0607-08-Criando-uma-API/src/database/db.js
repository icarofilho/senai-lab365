//? Classe que simula um banco de dados
class Database {
  data = [];
  id = 0;

  //? Método que adiciona um novo usuário
  add(obj) {
    const { nome, idade, cargo, senha } = obj;
    this.id++;
    this.data.push({ id: this.id, nome, idade, cargo, senha });
  }

  //? Método que retorna o banco de dados
  getData() {
    return this.data;
  }

  //? Método que exibe no consolo os usuários
  show() {
    for (let user of this.data) {
      console.log(user.name);
    }
  }

  //? Método para remover um usuário
  delete(id) {
    //? Busca se existe o usuário e em qual posição esta
    const pos = this.data.findIndex((user) => user.id === +id);

    //? Caso o usuário não exista, será retornado '-1'
    if (pos == -1) {
      return false;
    }
    //? Remoção do usuário
    this.data.splice(pos, 1);
    return true;
  }
}
const db = new Database();
module.exports = db;
