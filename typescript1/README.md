# API REST de Livraria com TypeScript

Esta é uma API REST desenvolvida em TypeScript para gerenciar um catálogo de livros. A API inclui operações CRUD (Criar, Ler, Atualizar, Deletar), persistência de dados em memória (arquivo JSON), validação de DTOs e autenticação/autorização com JWT.

## Requisitos

*   Node.js (versão 18 ou superior recomendada)
*   npm (gerenciador de pacotes do Node.js)
*   WSL (se você estiver em ambiente Windows, conforme configurado)
*   Postman ou ferramenta similar para testar a API

## Configuração do Projeto

1.  **Navegue até o diretório do projeto:**
    ```bash
    cd /Ubuntu-24.04/dados/www/html/infnet/typescript1
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Crie o arquivo de variáveis de ambiente (`.env`):**
    Na raiz do projeto, crie um arquivo chamado `.env` e adicione a seguinte linha:
    ```
    JWT_SECRET=supersecretjwtkey
    ```
    *(Este arquivo já deve ter sido criado, mas é bom verificar.)*

## Como Iniciar a API

Para iniciar o servidor da API, execute o seguinte comando no terminal do seu WSL, estando na raiz do projeto:

```bash
npm start
```

Você deverá ver a mensagem: `Server is running on port 3000`.

## Testando a API com Postman

Todas as rotas de negócio (livros) são protegidas e exigem um token JWT válido.

### 1. Obter um Token de Autenticação (Login)

Primeiro, você precisa se autenticar para obter um token JWT.

*   **Método:** `POST`
*   **URL:** `http://localhost:3000/auth/login`
*   **Headers:**
    *   `Content-Type`: `application/json`
*   **Body (raw, JSON):**
    ```json
    {
        "username": "admin",
        "password": "admin"
    }
    ```
*   **Resposta esperada (Status 200 OK):**
    ```json
    {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjcyNTc0MDAwLCJleHAiOjE2NzI1Nzc2MDB9.EXAMPLE_TOKEN_STRING"
    }
    ```
    **Copie o `token`** retornado. Ele será usado no header `Authorization` para todas as requisições às rotas de livros.

### 2. Operações CRUD de Livros

Para todas as requisições de livros, adicione os seguintes headers:

*   **Headers Comuns:**
    *   `Authorization`: `Bearer SEU_TOKEN_AQUI` (Substitua `SEU_TOKEN_AQUI` pelo token obtido no login)
    *   `Content-Type`: `application/json` (para `POST` e `PUT`)

#### 2.1. Criar um Livro (POST)

*   **Método:** `POST`
*   **URL:** `http://localhost:3000/books`
*   **Body (raw, JSON):**
    ```json
    {
        "title": "O Senhor dos Anéis",
        "author": "J.R.R. Tolkien",
        "publisher": "Martins Fontes",
        "price": 89.90
    }
    ```
*   **Resposta esperada (Status 201 Created):** O livro criado, incluindo um `id` gerado.
    ```json
    {
        "id": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
        "title": "O Senhor dos Anéis",
        "author": "J.R.R. Tolkien",
        "publisher": "Martins Fontes",
        "price": 89.90
    }
    ```
    **Anote o `id` do livro** para as próximas operações.

#### 2.2. Listar Todos os Livros (GET)

*   **Método:** `GET`
*   **URL:** `http://localhost:3000/books`
*   **Resposta esperada (Status 200 OK):** Uma lista de todos os livros.
    ```json
    [
        {
            "id": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
            "title": "O Senhor dos Anéis",
            "author": "J.R.R. Tolkien",
            "publisher": "Martins Fontes",
            "price": 89.90
        }
    ]
    ```

#### 2.3. Obter um Livro por ID (GET)

*   **Método:** `GET`
*   **URL:** `http://localhost:3000/books/SEU_ID_DO_LIVRO_AQUI` (Substitua `SEU_ID_DO_LIVRO_AQUI` pelo `id` do livro que você criou).
*   **Resposta esperada (Status 200 OK):** Os detalhes do livro específico.
    ```json
    {
        "id": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
        "title": "O Senhor dos Anéis",
        "author": "J.R.R. Tolkien",
        "publisher": "Martins Fontes",
        "price": 89.90
    }
    ```
*   **Se o livro não for encontrado (Status 404 Not Found):**
    ```json
    {
        "message": "Book not found"
    }
    ```

#### 2.4. Atualizar um Livro (PUT)

*   **Método:** `PUT`
*   **URL:** `http://localhost:3000/books/SEU_ID_DO_LIVRO_AQUI`
*   **Body (raw, JSON):**
    ```json
    {
        "price": 99.99,
        "publisher": "Nova Editora"
    }
    ```
*   **Resposta esperada (Status 200 OK):** O livro atualizado.
    ```json
    {
        "id": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
        "title": "O Senhor dos Anéis",
        "author": "J.R.R. Tolkien",
        "publisher": "Nova Editora",
        "price": 99.99
    }
    ```
*   **Se o livro não for encontrado (Status 404 Not Found):**
    ```json
    {
        "message": "Book not found"
    }
    ```

#### 2.5. Deletar um Livro (DELETE)

*   **Método:** `DELETE`
*   **URL:** `http://localhost:3000/books/SEU_ID_DO_LIVRO_AQUI`
*   **Resposta esperada (Status 204 No Content):** Sucesso na exclusão (sem corpo de resposta).
*   **Se o livro não for encontrado (Status 404 Not Found):**
    ```json
    {
        "message": "Book not found"
    }
    ```
