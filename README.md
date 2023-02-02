# Generic Repository Pattern

Este projeto aplica o conceito de *repository pattern* usando *generics*. Define uma abstração, a qual possui todas as operações comuns (INSERT, UPDATE, DELETE, SELECT) com o Banco de Dados. O repositório de entidade apenas estende esse classe abstrata.

## Instalação e execução

Para instalar apenas clone o repositório e rode **npm install** para instalar as dependências.

Para executar rode o comando **npm start**.

## Funcionalidades

- **BaseRepository** (src/repository/BaseRepository.ts): classe abstrata que define as operações que os repositórios de entidades devem implementar.
- **MySQLBaseRepository** (src/repository/MySQLBaseRepository.ts): classe abstrata que estende BaseRepository e implementa os métodos específicos para o banco de dados MySQL.
- **BookRepository** (src/models/BookRepository.ts): classe concreta repositório da entidade **book**.
- **index.ts** (src/index.ts): módulo principal da aplicação. Utiliza uma função IIFE (Immediately Invoked Function Expression).

## Tecnologias utilizadas

<div display="inline-block">
<img width="" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
<img width="" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">
<img width="" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
</div>