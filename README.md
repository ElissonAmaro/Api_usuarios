# API de Usuários

## Buscar usuarios

![API de Usuários](src/assets/image.png)

## Criar usuario

![API de Usuários](src/assets/criar.png)

## Atualizar usuario

![API de Usuários](src/assets/atualizar.png)

## Deletar usuario

![API de Usuários](src/assets/delete.png)

Uma API REST simples para gerenciamento de usuários desenvolvida com Node.js, Express e **MongoDB** utilizando Prisma ORM.

>  **Esta API foi desenvolvida especificamente para MongoDB** e utiliza ObjectIds como identificadores únicos.

## 📋 Funcionalidades

-  **CRUD Completo** para usuários
-  **Validação de dados**
-  **Tratamento de erros**
-  **CORS configurado**
-  **Operações parciais (PATCH)**

##  Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **Prisma** - ORM para banco de dados
- ** MongoDB** - Banco de dados NoSQL (Principal)
- **CORS** - Middleware para Cross-Origin Resource Sharing

###  Banco de Dados

Esta API foi projetada **exclusivamente para MongoDB** e aproveita suas características:

- **ObjectIds** para identificadores únicos
- **Documentos JSON** flexíveis
- **Escalabilidade horizontal** nativa
- **Consultas rápidas** e eficientes

##  Dependências

```json
{
  "@prisma/client": "^4.16.2",
  "cors": "^2.8.5",
  "express": "^5.1.0",
  "prisma": "^4.16.2"
}
```

##  Configuração

### 1. Clone o repositório

```bash
https://github.com/ElissonAmaro/Api_usuarios.git
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente  MongoDB

Copie o arquivo `.env` e configure sua conexão **MongoDB**:

```env
DATABASE_URL="sua_string_de_conexao_mongodb"
```

** Exemplos de URL do MongoDB:**



**MongoDB Atlas (Cloud):**

```env
DATABASE_URL="mongodb+srv://usuario:senha@cluster.mongodb.net/database_name"
```

>  **Importante:** Esta API requer MongoDB como banco de dados. Certifique-se de ter uma instância do MongoDB rodando localmente ou use o MongoDB Atlas (cloud).

### 4. Configure o banco de dados

```bash
# Gerar o cliente do Prisma
npx prisma generate

# Sincronizar com o banco de dados
npx prisma db push
```

### 5. Execute o servidor

```bash
node server.js
```

O servidor estará rodando em `http://localhost:3000`

##  Endpoints da API

### Base URL

```
http://localhost:3000
```

### 1. Criar Usuário

```http
POST /usuarios
```

**Body:**

```json
{
  "name": "João Silva",
  "email": "joao@email.com"
}
```

**Resposta:**

```json
{
  "message": "Usuário criado",
  "user": {
    "id": "64abc123...",
    "name": "João Silva",
    "email": "joao@email.com"
  }
}
```

### 2. Listar Todos os Usuários

```http
GET /usuarios
```

**Resposta:**

```json
{
  "message": "Lista de usuários",
  "users": [
    {
      "id": "64abc123...",
      "name": "João Silva",
      "email": "joao@email.com"
    }
  ]
}
```

### 3. Buscar Usuário por ID

```http
GET /usuarios/:id
```

**Resposta:**

```json
{
  "message": "Usuário encontrado",
  "user": {
    "id": "64abc123...",
    "name": "João Silva",
    "email": "joao@email.com"
  }
}
```

### 4. Atualizar Usuário (Completa)

```http
PUT /usuarios/:id
```

**Body:**

```json
{
  "name": "João Santos",
  "email": "joao.santos@email.com"
}
```

### 5. Atualizar Usuário (Parcial)

```http
PATCH /usuarios/:id
```

**Body (apenas os campos que deseja atualizar):**

```json
{
  "name": "João Santos"
}
```

### 6. Deletar Usuário

```http
DELETE /usuarios/:id
```

**Resposta:**

```json
{
  "message": "Usuário deletado"
}
```

##  Testando com Postman

### Configuração Inicial

1. **Baixe e instale o Postman** (https://www.postman.com/)
2. **Configure a Base URL:**
   - Crie uma nova coleção chamada "API Usuários"
   - Adicione uma variável de ambiente `base_url` com valor: `http://localhost:3000`

### Testando os Endpoints

#### 1.  Criar Usuário

- **Método:** `POST`
- **URL:** `{{base_url}}/usuarios`
- **Headers:**
  ```
  Content-Type: application/json
  ```
- **Body (raw JSON):**
  ```json
  {
    "name": "João Silva",
    "email": "joao@email.com"
  }
  ```

#### 2.  Listar Todos os Usuários

- **Método:** `GET`
- **URL:** `{{base_url}}/usuarios`
- **Headers:** Nenhum necessário
- **Body:** Nenhum

#### 3.  Buscar Usuário por ID

- **Método:** `GET`
- **URL:** `{{base_url}}/usuarios/64abc123...`
  - _Substitua `64abc123...` pelo ID real recebido ao criar um usuário_
- **Headers:** Nenhum necessário

#### 4.  Atualizar Usuário (Completo)

- **Método:** `PUT`
- **URL:** `{{base_url}}/usuarios/64abc123...`
- **Headers:**
  ```
  Content-Type: application/json
  ```
- **Body (raw JSON):**
  ```json
  {
    "name": "João Santos",
    "email": "joao.santos@email.com"
  }
  ```

#### 5.  Atualizar Usuário (Parcial)

- **Método:** `PATCH`
- **URL:** `{{base_url}}/usuarios/64abc123...`
- **Headers:**
  ```
  Content-Type: application/json
  ```
- **Body (raw JSON):**
  ```json
  {
    "name": "João Santos"
  }
  ```

#### 6.  Deletar Usuário

- **Método:** `DELETE`
- **URL:** `{{base_url}}/usuarios/64abc123...`
- **Headers:** Nenhum necessário
- **Body:** Nenhum

###  Fluxo de Testes Recomendado

1. **Inicie o servidor** (`node server.js`)
2. **Teste POST** para criar alguns usuários
3. **Teste GET** para listar todos e verificar os IDs criados
4. **Copie um ID** para testar os demais endpoints
5. **Teste GET por ID**, **PUT**, **PATCH**
6. **Teste DELETE** por último

##  Modelo de Dados (MongoDB)

### User - Documento MongoDB

```javascript
{
  id: String,      //  ObjectId do MongoDB (gerado automaticamente)
  email: String,   // Email único do usuário (índice único)
  name: String     // Nome do usuário
}
```

** Características do MongoDB:**

- **ObjectId:** Identificadores únicos de 24 caracteres hexadecimais
- **Documento JSON:** Estrutura flexível e escalável
- **Índice único:** Email deve ser único em toda a coleção
- **Auto-incremento:** IDs gerados automaticamente pelo MongoDB

## 🔧 Scripts Disponíveis

```bash
# Executar o servidor
node server.js

# Gerar cliente Prisma
npx prisma generate

# Sincronizar com banco de dados
npx prisma db push

# Visualizar banco de dados (Prisma Studio)
npx prisma studio
```

##  Tratamento de Erros

A API retorna códigos de status HTTP apropriados e mensagens de erro descritivas:

- **400 Bad Request** - Dados inválidos ou erro de validação
- **404 Not Found** - Usuário não encontrado
- **500 Internal Server Error** - Erro interno do servidor

**Exemplo de resposta de erro:**

```json
{
  "error": "Usuário não encontrado"
}
```

##  Notas Importantes

1. O campo `name`
2. O campo `email` deve ser único
3. IDs são gerados automaticamente pelo MongoDB (ObjectId)
4. Todos os endpoints retornam JSON
5. CORS está habilitado para todas as origens

## Autor: Elisson

**Desenvolvido com usando Node.js e Prisma**
