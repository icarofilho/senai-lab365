## [M1S06] Ex 4 - Rotas com express

#### TASK

Crie uma rota HTTP com express para simular o envio do seu nome como parâmetro da url e imprima em um `console.log()` a mensagem:
`Rota de API criada pelo(a): {nome}`

- OBS: substitua o {nome} pelo nome que é passado como parâmetro da url.
- OBS: utilize a plataforma de API que você preferir.

tecnologias utilizadas:
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)

#### Como usar

- Primeiro clone o repositório
- Utilize um gerenciador de pacote para instalar os pacotes necessários
  ```shell
  yarn
  # ou
  npm install
  ```
- Com o servidor rodando, basta acessar a uri (`localhost:3333/`) informando o nome após a barra:
  Ex.: `localhost:3333/[meu-nome]`
  saida esperada: `Rota de API criada pelo(a): [meu-nome]`
