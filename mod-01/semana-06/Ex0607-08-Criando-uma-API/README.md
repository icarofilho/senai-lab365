### Ex 6 | 7 | 8 - Criando uma API

> Task I

Você foi convocado para criar uma API completa, levando todo o conhecimento aprendido, incluindo a arquitetura vista no slide Aula 01 página 09, crie duas rotas HTTP: uma para o envio de um novo usuário para o banco de dados, e outra para deletar o usuário.

Apenas crie a conexão do servidor node e as rotas em arquivos separados.

Não será necessária a implementação das funcionalidades;Você foi convocado para criar uma API completa, levando todo o conhecimento aprendido, incluindo a arquitetura vista no **slide Aula 01 página 09** , crie duas rotas HTTP: uma para o envio de um novo usuário para o banco de dados, e outra para deletar o usuário.

**Apenas crie a conexão do servidor node e as rotas em arquivos separados.**
**Não será necessária a implementação das funcionalidades**

> Task II

Agora continuando o exercício anterior no módulo de controlador siga as seguintes regras de negócio de cada rota:

**Envio de um novo usuário:**

- O objeto a ser enviado no corpo da requisição para controlador deve seguir o seguinte formato :
  ```json
  {
    "nome": "Fulano",
    "idade": 18,
    "cargo": "junior",
    "senha": "12345678"
  }
  ```
- O método HTTP será o post com a rota da sua escolha;
- Caso o usuário tenha idade menor que 21 anos não deverá prosseguir com a requisição, então retorne o objeto **{“mensagem”: “Usuário não possui idade suficiente”}**;
- Caso na requisição não seja enviado nada no seu corpo retorne com status 406 com o objeto **{“mensagem”: “Está faltando dados para concluir a operação”}**;
- Caso a operação seja um sucesso, retorne com status 200 o objeto **{“mensagem”: “Criado com sucesso”}**;

**Deletar o usuário:**

- Deverá ser passado n- a URL da requisição um **id**;
- Verifique na url se o id é passado, caso contrário retorne com status **406** com o objeto **{“mensagem”: “Está faltando dados para concluir a operação”}**;
- Caso a operação seja um sucesso, retorne com status 200 o objeto **{“mensagem”: “Deletado com sucesso”}**;

**OBS**: lembre de alterar os dados para que passe em todos os testes e sua API esteja 100%.

> Task III

Agora para deixar nossa aplicação do exercício anterior mais completa, na rota de **Envio de um novo** usuário adicione um middleware que irá capturar o cargo do usuário. Só poderá prosseguir para a seguinte função se o cargo do usuário for igual a string “líder”.

**Lembre-se**: um middleware é uma função que fica antes da chamada para o controlador ou antes da função da rota.

---

#### Recursos utilizados no projeto:

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg??style=flat&logo=appveyor&logo=visual-studio-code&logoColor=white) ![Git](https://img.shields.io/badge/git-%23F05033.svg??style=flat&logo=appveyor&logo=git&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F??style=flat&logo=appveyor&logo=node.js&logoColor=white) ![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg??style=flat&logo=appveyor&logo=nodemon&logoColor=%BBDEAD) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg??style=flat&logo=appveyor&logo=express&logoColor=%2361DAFB) ![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg??style=flat&logo=appveyor&logo=yarn&logoColor=white)

---

#### Utilização

O projeto comporta três ações, sendo elas: Adicionar, Remover e Listar

- Adicionado um usuário (sem validação de cargo).
  Acessamos o ENDPOINT: **`http://localhost:3333/add`** com o verbo `POST`
  Para adicionar um novo usuário, será obrigatório informa um objeto com as seguintes propriedades:

  ```json
  {
    "nome": "Fulano",
    "idade": 18,
    "cargo": "junior",
    "senha": "12345678"
  }
  ```

- Adicionando um usuário (com validação de cargo).
  Acessamos o ENDPOINT: **`http://localhost:3333/add-lider`** com o verbo `POST`
  Para adicionar um novo usuário, será obrigatório informa um objeto com as seguintes propriedades (lembrando que o valor do cargo deve ser obrigatoriamente `lider`):

  ```json
  {
    "nome": "Fulano",
    "idade": 18,
    "cargo": "lider",
    "senha": "12345678"
  }
  ```

- Exibindo usuários cadastrados:
  Para exibir os usuários cadastrados basta acessar o ENDPOINT `http://localhost:3333/show` com o verbo `GET`

- Removendo um usuário:
  Para removermos um usuário, devemos informar o seu ID por **_Query_** com o ENDPOINT: `http://localhost:3333/delete?id=x` , onde `X` é o numero do ID do usuário
  (**OBS:** Caso queira saber o ID de um usuário, basta utilizar a _listagem de usuários_)
