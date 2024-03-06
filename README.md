# REST API para registro de vídeos

## Sobre o projeto

O projeto se trata de uma aplicação back-end que consiste em uma REST API com um CRUD (Create, Retrieve, Update, Delete) completo, incluindo Query parameters.

## Tecnologias utilizadas
- ![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
- <img src="https://repository-images.githubusercontent.com/69495170/8125e100-61bc-11e9-8d9f-eb01f522f962" alt="Fastify" width="100" height="40"/>
- ![Postgres](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

## Hospedagem do banco
- <a href="https://neon.tech/"><img src="https://www.datanami.com/wp-content/uploads/2022/07/Neon-Logo.png" alt="Neon Postgres" width="100" height="30"/></a>

## Como executar o projeto

```bash
# clonar repositório
git clone https://github.com/brbertholini/videos-restapi-nodejs

# entrar na pasta do projeto
cd videos-restapi-nodejs

# executar o projeto
code .

# instalar dependencias
npm install

# rodar projeto
npm run dev
```

## Rotas

- `GET restapi-nodejs-q3pl.onrender.com/videos`: Lista dos vídeos registrados.
- `SEARCH GET restapi-nodejs-q3pl.onrender.com/videos?search=[search]`: Lista dos vídeos pela pesquisa de título
- `POST restapi-nodejs-q3pl.onrender.com/videos`: Registrar um novo vídeo
- `PUT restapi-nodejs-q3pl.onrender.com/videos/id`: Atualizar informações de um vídeo registrado
- `DELETE restapi-nodejs-q3pl.onrender.com/videos/id`: Excluir um vídeo

## Autor

Bruno Bertholini | <a href="https://www.linkedin.com/in/bruno-bertholini/" target="blank"><img align="center" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a>
<a href="mailto:brbertholini@gmail.com" target="blank"><img align="center" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" /></a>
