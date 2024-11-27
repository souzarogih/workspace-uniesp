# Uniesp WebSite

<p align="center">
    Web application frontend developed in ReactJS with features for an educational institution.
</p>

## About the Project
This project is a frontend for the news portal of Centro Universitário Uniesp.

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

### Directory Descriptions
| Name       | Description | 
|------------|-------------|
| data       | Directory for the Json Server data file |
| public     | Directory for static files not processed by the bundler |
| src        | Directory for source code files |
| assets     | Directory for static resources processed by the bundler |
| components | Directory for reusable JSX components for other pages |
| pages      | Directory for ready-made page files |
| admin      | Directory for the site's administration page |
| login      | Directory for the login page |

### File Descriptions
| Name                 | Description | 
|----------------------|-------------|
| db.json              | File with mock data for frontend-backend testing |
| BannerAd.jsx         | Component with functionality for the homepage banner |
| Navbar.jsx           | Component with functionalities for the navigation bar |
| AdminNoticias.jsx    | Component with functionalities for news management/administration |
| CadastroNoticias.jsx | Component with functionality to register news |
| EditarNoticias.jsx   | Component with functionality to edit news |
| Login.jsx            | File with functionalities for the login page |
| styles.css           | File with style definitions for the login page |
| DpoLgpd.jsx          | Component with legal and institutional information |
| Faculdade.jsx        | Component with information about the university |
| Inicial.jsx          | Component for the main application page |
| Noticias.jsx         | Component to list news |
| VisualizaNoticia.jsx | Component to view a news item |
| App.css              | File with styles for the main (parent) component |
| App.jsx              | Parent component of the SPA application (main component) |
| index.css            | File with global styling that affects the entire application |
| main.jsx             | Main file used to initialize the application and render the root component |

## Technologies Used
- [ReactJS](https://legacy.reactjs.org/docs/getting-started.html) - Main library for building user interfaces
- [React Router Dom](https://www.npmjs.com/package/react-router-dom) - Library for route management.
- [Axios](https://www.npmjs.com/package/axios) - Library for API REST communication.
- [json-server](https://www.npmjs.com/package/json-server) - Mock API REST server for frontend testing.
- [mui](https://mui.com/material-ui/getting-started/) - Ready-made UI component library with fast and easy styling resources.
- [vite](https://vite.dev/guide/) - Frontend build tool for modern web applications.

## Installation and Setup
### Library Installation
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

### Prerequisites
Ensure you have installed:
- Node.js (version X.X.X or later)
- npm or yarn

Installation Steps:
1. Clone this repository:
```bash
git clone https://github.com/souzarogih/workspace-uniesp.git
```

2. Access the project directory:
```bash
cd repository-name
```

3. Install dependencies:
```bash
npm install
# or
yarn install
```

## How to Use
### Start the Development Server
Run the command:
```bash
npm start
# or
yarn start
```
The project will start and can be accessed in the browser at http://localhost:3000.

### Build for Production
To generate optimized files for production, use:
```bash
npm run build
# or
yarn build
```
The files will be generated in the <b>build</b> directory.

## Features

- [x] User login
- [x] News page
- [x] Administration page
- [x] About the university and LGPD
- [x] Backend request submission

## Contributing
1. Fork the project.

2. Create a branch for your feature:
```bash
git checkout -b my-feature
```

3. Commit your changes:
```bash
git commit -m "My new feature"
```

4. Push to the main branch:
```bash
git push origin my-feature
```

5. Open a Pull Request.

## License
>Send an email to _higor.andrade@hotmail.com_ with the project name in the email title, requesting permission to use this project. 