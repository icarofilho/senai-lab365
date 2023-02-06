### Rodando os scripts

- Para rodar o script é necessário ter o `NodeJs` instalado.
- Uma vez com o _node_ instalado, basta abrir o terminal (atalho **_ctrl + "_** no vsc)
- Quando abrir o terminal, estará na dentro da pasta raiz. Navegue ate a pasta da **semana-01**.

  ```{.bash .numberLines }
    cd .\mod-01\semana-01\
  ```

- Uma vez dentro da pasta, basta executar o script com node:

  ```{.bash .numberLines }
    node .\index.js
  ```

### [M1S1] Ex 1 - [App SaveCollege] Dados dos alunos

> Uma escola precisa armazenar os dados dos alunos e realizar várias operações. Primeiro crie uma lista que guarda 5 objetos chamados aluno, e adicione 5 propriedades contendo informações pessoais como “nome, altura, idade, sexo e sala”. Por fim, imprima os alunos no terminal.

- Para automatizar e randomizar os dados, foi gerado aleatoriamente o grupo dos cinco alunos no site [4devs.com.br](https://www.4devs.com.br/gerador_de_pessoas)
- Os dados foram tratados e atribuídos a uma variável em forma de lista.
- Foi utilizado o método **`forEach()`** para realizar o laço de repetição e exibir os dados solicitados.

### [M1S1] Ex 2 - [App SaveCollege] Média dos alunos

> A escola precisa saber a média de nota dos alunos de uma determinada série. Para isso precisamos de sua ajuda. Crie uma propriedade dentro de cada objeto aluno chamado Matemática com um valor fictício e utilize operadores aritméticos para obter a média dos alunos e imprimir no terminal.

- Foi utilizado o laço de repetição **`for ... in`** para percorrer a lista de alunos.
- Uma vez que acessamos cada aluno, criamos a propriedade _Matemática_ conforme solicitado e dentro dela as _notas_ dos alunos.
- O valor das _notas_ são geradas randomicamente pelo método **`Math.random()`**
- Dentro do mesmo laço já executamos o calculo da média aritmética.
- Por fim exibimos o nome do aluno com suas notas e a sua média.

### [M1S1] Ex 3 - [App SaveCollege] Alunos aprovados

> Imprima o nome do aluno e o valor aprovado ou reprovado em seguida utilizando operadores condicionais.

- Foi utilizado o laço de repetição **`for ... of`** para percorrer a lista de alunos.
- Extraímos o valor da média em matemática de cada aluno e fazemos uma comparação (com **ternário**) se é igual ou inferior a 7.
- Na sequencia exibimos se o aluno foi _Aprovado_ ou _Reprovado_
