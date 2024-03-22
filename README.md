# Teste Full Stack
Este projeto consiste em um teste para avaliar as habilidades de um desenvolvedor Full Stack. O teste é dividido em várias partes, cada uma abordando aspectos específicos do desenvolvimento web. O tema do projeto é de escolha livre, permitindo a implementação de qualquer tipo de sistema, contanto que todas as funcionalidades requisitadas sejam incorporadas.
## Parte 1: Front-end (Vue.js)
- Vue.js:
  - Crie um aplicativo Vue.js com funcionalidades como requisições para uma API, gerenciamento de estado, rotas protegidas, autenticação, paginação e integração com WebSocket.
  - Utilize o vue-router para configuração de rotas protegidas.
  - Configure um gerenciamento de estado.
  - Faça a integração com websocket.
## Parte 2: Back-end (Node.js ou Python com PostgreSQL e WebSocket)
- Node.js ou Python:
  - Configure um servidor que forneça uma API RESTful.
  - Utilize WebSocket para comunicação em tempo real com o frontend.
  - Faça a conexão com o banco de dados.
  - Realize consultas ao PostgreSQL para suportar a paginação e outras operações necessárias.
  - Utilize um ORM para interagir com o PostgreSQL.
## Parte 3: Banco de Dados
- Banco de Dados:
  - Monte um esquema de banco de dados PostgreSQL que suporte as operações necessárias para a aplicação.
  - Configure as migrations caso o ORM escolhido forneça suporte.
  - Utilize índices e chaves estrangeiras conforme necessário.
## Parte 4: Docker
- Docker:
  - Crie um Dockerfile para empacotar as aplicações em containers separados.
  - Containers desejados: nginx e postgresql.
## Parte 5: Git
- Git:
  - Inicialize um repositório Git para o projeto.
  - Faça commits regulares e inclua mensagens de commit descritivas.
  - Envie o código através do repositório Git.
## Parte 6 (Opção 1): Infraestrutura e Deploy
- Infraestrutura:
  - Será fornecido acesso a uma conta no serviço de DNS para gerenciar um domínio e um servidor VPS.
  - Configure o DNS para apontar para um servidor onde a aplicação estará hospedada.
  - Prepare scripts ou instruções para facilitar o deploy da aplicação nos containers Docker no servidor.
## Parte 6 (Opção 2): Infraestrutura e Deploy Cloud (AWS, Azure ou GCP)
- Deploy nos Cloud Provideres:
  - tilize uma conta em um dos provedores de nuvem (AWS, Azure ou GCP) para realizar a implantação (deploy) das aplicações Front End e Back End. Você tem liberdade para escolher os serviços que preferir, por exemplo: ECS para Front End e Back End, Lambda para o Back End e ECS ou EKS para o Front End.
  - Como um diferencial, considere a criação de um pipeline de integração contínua e entrega contínua (CI/CD) para a implantação nas plataformas de nuvem, utilizando ferramentas como GitHub Actions.
## Deploy
Criar um registro com um subdomínio para a api e outro para o frontend.

**Servidor**
```
usuário: ubuntu
ip: 168.75.83.235
senha: deploy@@up
```
​
**Cloudflare**
```
email: devs.deploy@gmail.com
senha: devs@4774
```
  
## Critérios de Avaliação
- Vue.js Skills: O aplicativo Vue.js atende aos requisitos especificados, incluindo autenticação, paginação e integração com WebSocket?
- Back-end Skills: O back-end atende às necessidades do front-end, incluindo fornecimento de dados para a API RESTful, suporte a WebSocket e interação eficiente com o PostgreSQL?
- Banco de Dados: O esquema do banco de dados está bem projetado e otimizado?
- Docker e Orquestração: O Dockerfile e o Docker Compose estão configurados corretamente?
- Git: O candidato demonstra conhecimento no uso do Git?
- Infraestrutura e Deploy: O candidato consegue configurar corretamente o DNS e efetuar o deploy da aplicação em um servidor?
- Usar a Parte 6 (Opção 2) como soluçao tem um peso maior na avaliacao final.
---

Citamos algumas tecnologias e linguagens de programação como referência, porém, não há obrigatoriedade no uso destas. Sinta-se à vontade para escolher as ferramentas que julgar mais produtivas para o seu trabalho.

Boa sorte com o teste! Se houver alguma dúvida, sinta-se à vontade para entrar em contato no dev@upbet.com.
