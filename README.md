## Aplicação para registro de vídeos

REST API feita com NodeJS, Fastify e Postgre.
CRUD completo, incluindo query parameters.

## Rotas

- `GET restapi-nodejs-q3pl.onrender.com/videos`: Lista dos vídeos registrados.
- `SEARCH GET restapi-nodejs-q3pl.onrender.com/videos?search=[search]`: Lista dos vídeos pela pesquisa de título
- `POST restapi-nodejs-q3pl.onrender.com/videos`: Registrar um novo vídeo
- `PUT restapi-nodejs-q3pl.onrender.com/videos/id`: Atualizar informações de um vídeo registrado
- `DELETE restapi-nodejs-q3pl.onrender.com/videos/id`: Excluir um vídeo
