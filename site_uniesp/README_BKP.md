# Uniesp WebSite

<p align="center">
    Aplicação web frontend desenvolvida em ReactJS com funcionalidades para uma instituição de ensino
</p>

## Sobre o Projeto
Este projeto é um frontend para portal de noticias do Centro Universitário Uniesp.

## Arquitetura do projeto
- **data/**
    - db.json
- **src/**
    - assets/
      - react.svg
  - components/
    - BannerAd.jsx
    - Navbar.jsx
  - pages/
    - admin/
        - AdminNoticias.jsx
        - CadastroNoticias.jsx
        - EditarNoticias.jsx
    - login/
        - Login.jsx
        - styles.css
    - DpoLgpd.jsx
    - Faculdade.jsx
    - Inicial.jsx
    - Noticias.jsx
    - VisualizaNoticia.jsx
  - App.css
  - App.jsx
  - index.css
  - main.jsx
- **public/**
  - uniesp.jpg
  - VESTIBULAR.gif
  - vite.svg
- **.gitignore**
- **package.json**
- **README.md**

### Descrição dos diretórios
| Nome       | Descrição | 
|------------|------- |
| data       | Diretório do arquivo de dados do Json Server    |
| public     | Diretório de arquivos estáticos que não são processados pelo bundler|
| src        | Diretório com arquivos de código fonte |
| assets     | Diretório recursos estáticos que serão processados pelo bundler|
| components | Diretório com arquivos jsx para ser reutilizado como componentes de outras páginas |
| pages      | Diretório com arquivos de páginas prontas  |
| admin      | Diretório da página de administração do site |
| login      | Diretório da página de login |

### Descrição dos arquivos
| Nome       | Descrição | 
|------------|------- |
| db.json               | Arquivo com conteúdo com mock para testes do frontend com backend |
| BannerAd.jsx          | Components com fauncionalidade de banner para página inicial |
| Navbar.jsx            | Componente com funcionalidades para barra de navegação da página |
| AdminNoticias.jsx     | Compoenente com funcionalidade de administração/getão de notícias |
| CadastroNoticias.jsx  | Componente com funcinalidade para cadastrar uma notícia|
| EditarNoticias.jsx    | Componente com funcionalidade para editar uma notícia |
| Login.jsx             | Arquivo com funcionalidades da página de login |
| styles.css            | Arquivo com definições de estilo da página de login |
| DpoLgpd.jsx           | Componente com informações legais e dados importantes da instituição |
| Faculdade.jsx         | Componente com informações da faculdade |
| Inicial.jsx           | Componente da pagina principal da aplicação |
| Noticias.jsx          | Componente para listar notícias |
| VisualizaNoticia.jsx  | Componente para visualizar uma notícia |
| App.css               | Arquivo com estilo do componente principal (Componente Pai) |
| App.jsx               | Compoenente pai da aplicação SPA (Componente principal) |
| index.css             | Arquivo com estilização global que afeta toda aplicação |
| main.jsx              | Arquivo principal da aplicação usado para inicializar a aplicação e renderizar o componente principal|

## Tecnologias Utilizadas
- [ReactJS](https://legacy.reactjs.org/docs/getting-started.html) - Biblioteca principal para criação da interface de usuário
- [React Router Dom](https://www.npmjs.com/package/react-router-dom) - Biblioteca para gerenciamento de rotas.
- [Axios](https://www.npmjs.com/package/axios) - Biblioteca para comunicação com a API REST.
- [json-server](https://www.npmjs.com/package/json-server) - Replicador de API REST para testes frontend.
- [mui](https://mui.com/material-ui/getting-started/) - Biblioteca de componentes prontos para UI que oferece recursos fáceis e rápidos de estilização para aplicação.
- [vite](https://vite.dev/guide/) - Ferramenta de construção de frontend para aplicações web modernas

## Instalação e Configuração
### Instalação das bibliotecas

```
axios
$ npm i axios
```
```
# json server 
$ npm i json-server
```

```
# mui
$ npm install @mui/icons-material
$ npm install @mui/material @emotion/react @emotion/styled
```
```
# react router dom
$ npm install react-router-dom
```

### Pré-requisitos
Certifique-se de ter instalado:
- Node.js (versão X.X.X ou superior)
- npm ou yarn

Passos para Instalação
1. Clone este repositório:
```bash
git clone https://github.com/souzarogih/workspace-uniesp.git
```

2. Acesse o diretório do projeto:
```bash
cd nome-do-repositorio
```

3. Instale as dependências:
```bash
npm install
# ou
yarn install
```

## Como Usar
### Iniciar o Servidor de Desenvolvimento
Execute o comando:
```bash
npm start
# ou
yarn start
```
O projeto será iniciado e poderá ser acessado no navegador em http://localhost:3000.

### Build para Produção
Para gerar os arquivos otimizados para produção, use:
```bash
npm run build
# ou
yarn build
```
Os arquivos serão gerados no diretório <b>build</b>.

## Funcionalidades

- [x] Login de usuário
- [x] Página de notícias
- [x] Página de administração
- [x] Sobre a faculdade e LGPD
- [x] Envio de requisição para backend

## Contribuindo
1. Faça um fork do projeto.

2. Crie uma branch para a sua feature:
```bash
git checkout -b minha-feature
```

3. Faça commit das suas alterações:
```bash
git commit -m "Minha nova feature"
```

4. Envie para a branch principal:
```bash
git push origin minha-feature
```

5. Abra um Pull Request.

## License
>Enviar um e-mail para _higor.andrade@hotmail.com_ com o nome do projeto no título do 
> e-mail, solicitando o uso deste projeto.