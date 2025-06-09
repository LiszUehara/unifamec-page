# 🎓 Teste Técnico - Site Institucional de Cursos com Next.js

Este projeto é um site institucional para venda de cursos, com área administrativa (CMS), desenvolvido utilizando **Next.js**, **TailwindCSS**, **Prisma** e **PostgreSQL via Docker**. Ele é responsivo, otimizado e inspirado no site [https://unifameccariri.com.br](https://unifameccariri.com.br), de onde podem ser retiradas as imagens para uso.

---

## 🚀 Tecnologias Utilizadas

- Next.js
- Tailwind CSS
- PostgreSQL (via Docker)
- Prisma ORM
- API interna (rotas API do Next.js)
- JWT para autenticação
- Docker e Docker Compose

---

## 🧩 Funcionalidades

### 🏠 Página Inicial
- Banner com chamada para ação (CTA)
- Benefícios dos cursos
- Lista de cursos populares com título, imagem e preço
- Depoimentos de alunos
- Link para a página "Sobre Nós"

### 📚 Listagem de Cursos
- Exibição de todos os cursos cadastrados
- Filtro por categoria
- Pesquisa por nome

### 📖 Detalhes do Curso
- Nome, descrição, imagens, preço e conteúdo programático


### 🔐 Administração (CMS)
- Área protegida por JWT
- Criar, editar e excluir cursos
- Upload de imagens

### 📄 Páginas Adicionais
- Sobre Nós
- Contato (formulário com nome, e-mail e mensagem, mockado)

---

## 📦 Instalação e Execução

### Instale as dependências
npm install


### Execução
npm run dev


Servidor rodando em: http://localhost:3000


#### ✅ Pré-requisitos

- [Node.js](https://nodejs.org/) (v18 ou superior)
- [Yarn](https://classic.yarnpkg.com/) ou npm
- [Docker + Docker Compose](https://www.docker.com/)

---

#### 1. Clone o repositório

```bash
git clone https://github.com/LiszUehara/unifamec-page.git
cd unifamec-page


```
#### 2. Database
```
DATABASE_URL="postgresql://admin:senha123@localhost:5432/meu_banco"

docker-compose up -d

```

# 🛠️ Banco de Dados e Configuração

Este projeto utiliza **PostgreSQL** com **Prisma ORM** e suporte via **Docker** para facilitar a configuração local.

---

## 📦 Variáveis de Ambiente (.env)

Crie um arquivo `.env` na raiz do projeto e insira o seguinte conteúdo:

```env
DATABASE_URL="postgresql://admin:senha123@localhost:5432/meu_banco"
```

---

## 🐳 Docker – Subindo o Banco de Dados

Certifique-se de ter o Docker e Docker Compose instalados.

Suba o banco de dados com:

```bash
docker-compose up -d
```

### 📄 docker-compose.yml

```yaml
version: '3.8'

services:
  db:
    image: postgres:14
    container_name: postgres_container
    restart: always
    environment:
      POSTGRES_USER: admin
      POSTGRES_PASSWORD: senha123
      POSTGRES_DB: meu_banco
    ports:
      - '5432:5432'
    volumes:
      - pgdata:/var/lib/postgresql/data

volumes:
  pgdata:
```

> Isso iniciará um container PostgreSQL com as configurações adequadas para o projeto.

---

## 🔧 Prisma – Migrations, Seed e Studio

### ⏳ Rodar Migrations

```bash
npx prisma migrate dev
```

Cria automaticamente as tabelas no banco com base no schema Prisma.

---

### 🌱 Rodar Seed

```bash
npx prisma db seed
```

Executa o script de seed (`prisma/seed.ts` ou equivalente) para popular o banco com dados iniciais.

---

### 🧪 Prisma Studio

```bash
npx prisma studio
```

Interface web para explorar o banco de dados localmente de forma visual.

---

## ✨ Dicas Úteis

- Verifique se o serviço do PostgreSQL está rodando antes de aplicar as migrations.
- O seed pode ser personalizado no arquivo `prisma/seed.ts`.
- Para reiniciar o banco do zero, pare os containers com `docker-compose down -v`.

---

## 👤 Autor(a)

Desenvolvido com ❤️ por **LiszUehara**

📫 Contato: [ueharalisandra@gmail.com](mailto:ueharalisandra@gmail.com)  
🌐 GitHub: [github.com/LiszUehara](https://github.com/LiszUehara)

---

## 📄 Licença

MIT © 2025 – Livre para uso educacional, testes técnicos e projetos pessoais.

---

