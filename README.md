<<<<<<< HEAD
# Desafio_Crud_Angular
Desafio de realizar um crud com asp.net e angular.

Requisitos para clonar e testar:

Xamp -> Mysql,
Workbench (a escolher),
C# Asp Net,
Node v.22,
Angular v.19,
Swagger,
Entity Framework,

Criar a base de dados:

1 - Habilitar o serviço Mysql

2- Criação da base

Create Database ProdutoDB;

User produtodb;

CREATE TABLE Produtos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    quantidade INT NOT NULL
);

Select * from Produtos;

=======
# AngularAspCrud

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.11.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
>>>>>>> f19cabd (commit01)
