const db = require("../database/db");

class UserController {
  //? função que adiciona um usuário ao banco de dados
  async store(req, res) {
    //? desestruturação
    const {
      body: { nome, idade, cargo, senha },
    } = req;

    //? Verifica se os campos necessários estão vazios
    if (!nome || !idade || !cargo || !senha) {
      console.log("Está faltando dados para concluir a operação");
      return res
        .status(406)
        .send({ message: "Está faltando dados para concluir a operação" });
    }

    //? Verifica a idade do usuário
    if (idade < 21) {
      console.log("Usuário não possui idade suficiente");
      res.status(400).send({ message: "Usuário não possui idade suficiente" });
      return;
    }
    //? Adiciona um novo usuário ao banco de dados
    db.add({ nome, idade, cargo, senha });
    res.status(200).send({ message: "Criado com sucessoCriado com sucesso" });
    return;
  }

  //? função que exibe os usuários
  show(req, res) {
    console.log(db.getData());
    const users = db.getData();
    res.status(200).send(users);
    return;
  }

  delete(req, res) {
    //? Desestruturação para obter o ID
    const {
      query: { id },
    } = req;

    //? Verifica se o ID foi informado
    if (!id) {
      console.log("Está faltando dados para concluir a operação");
      res
        .status(406)
        .send({ message: "Está faltando dados para concluir a operação" });
      return;
    }

    //? Executa a exclusão do usuário
    const wasDeleted = db.delete(id);

    //? Caso o usuário não tenha sido excluído, será informado
    if (!wasDeleted) {
      res.status(400).send({ message: "Usuário não localizado" });
      return;
    }

    //? Retorno com sucesso
    res.status(200).send({ message: "Deletado com sucesso" });
    return;
  }
}

module.exports = new UserController();
