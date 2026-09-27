# Ponte Laranja

Repositórios públicos do projeto:

- **Frontend:** [PonteLaranja_Front](https://github.com/PonteLaranja/PonteLaranja_Front)

- **Backend:** [PonteLaranja_Back — branch `develop`](https://github.com/PonteLaranja/PonteLaranja_Back/tree/develop)

O frontend usa Next.js. A implementação do backend está na branch `develop` do repositório Back e é uma API REST em ASP.NET Core .NET 8 com Entity Framework Core, SQL Server e autenticação JWT.

> **Estado atual:** a interface ainda é o scaffold inicial do Next.js: não há chamadas à API do backend no código versionado, e a página inicial redireciona para `/home`, rota que ainda não existe. O backend está na branch `develop`; a branch `main` do repositório Back não contém a aplicação. As instruções abaixo separam os dois serviços e destacam as limitações que precisam ser resolvidas para o fluxo completo funcionar.

## Visão geral

| Parte | Localização | Tecnologias |
| --- | --- | --- |
| Frontend | Repositório `PonteLaranja_Front`, pasta `ponte-laranja/` | Next.js 16.2.7, React 19.2.4, TypeScript |
| Backend | Repositório `PonteLaranja_Back`, branch `develop`, pasta `API/API/` | ASP.NET Core .NET 8, Entity Framework Core, SQL Server, JWT |
| Banco | Repositório Back, arquivo `SQL/Script.sql` | Microsoft SQL Server |

## Pré-requisitos

- Git

- Node.js **20.9 ou superior** e npm para o frontend

- .NET SDK 8 para a API

- SQL Server e uma ferramenta como SQL Server Management Studio (SSMS) para preparar o banco

## Frontend — instalar e executar

Clone o repositório do frontend e acesse a pasta da aplicação:

```bash
git clone https://github.com/PonteLaranja/PonteLaranja_Front.git
cd PonteLaranja_Front/ponte-laranja
```

Instale as dependências a partir do lockfile e inicie o servidor de desenvolvimento:

```bash
npm ci
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

Scripts disponíveis no `package.json`:

```bash
npm run dev    # desenvolvimento
npm run lint   # ESLint
npm run build  # build de produção
npm start      # inicia o build de produção (rode npm run build antes)
```

**Limitação atual do frontend:** `src/pages/index.tsx` redireciona para `/home`, mas não existe uma página `/home` no repositório. Também não foram encontradas chamadas `fetch`/Axios, URL da API ou configuração de ambiente para conectar o frontend ao backend. Portanto, iniciar o Next.js não significa que a integração full-stack esteja pronta.

## Backend — configurar e executar a API .NET 8

O código executável está na branch **`develop`** de [`PonteLaranja_Back`](https://github.com/PonteLaranja/PonteLaranja_Back/tree/develop). Clone essa branch explicitamente — o clone padrão pode cair em `main`, que não contém a aplicação:

```bash
git clone --branch develop --single-branch https://github.com/PonteLaranja/PonteLaranja_Back.git
cd PonteLaranja_Back
```

### 1. Preparar o banco SQL Server

1. Inicie uma instância do SQL Server.

1. Abra `SQL/Script.sql` no SSMS e revise o script antes de executá-lo.

1. Confirme que a conexão da API apontará para o banco `PonteLaranjaDb`.

> **Atenção: o script é destrutivo.** Ele contém comandos para remover o banco existente `PonteLaranjaDb` e criá-lo novamente. Executá-lo novamente pode apagar os dados desse banco. Use somente em ambiente de desenvolvimento/teste e faça backup antes. O script também contém uma vírgula final na definição da tabela `Item` que deve ser revisada/corrigida antes da execução.

O backend não inclui migrações do Entity Framework no branch analisado; a criação do schema está concentrada no script SQL.

### 2. Configurar as variáveis de ambiente

Entre na pasta do projeto .NET e copie o modelo de configuração:

```bash
cd API/API
cp .env.example .env
```

No PowerShell do Windows, use `Copy-Item .env.example .env` no lugar de `cp`.

Edite o `.env` local e defina a conexão SQL Server e uma chave JWT própria:

```
CONNECTION_STRING=Server=localhost;Database=PonteLaranjaDb;User Id=SEU_USUARIO;Password=SUA_SENHA;TrustServerCertificate=True
JWT_KEY=SUBSTITUA_POR_UMA_CHAVE_ALEATORIA_FORTE_COM_PELO_MENOS_32_CARACTERES
```

- Use os dados de conexão correspondentes à sua instância. O exemplo acima usa autenticação SQL Server; adapte-o se sua instalação usar autenticação integrada.

- A `JWT_KEY` precisa ter pelo menos 32 caracteres. Substitua o valor de exemplo por uma chave aleatória e privada.

- O projeto lê `CONNECTION_STRING` e `JWT_KEY` do `.env`; os valores de `Jwt:Issuer` e `Jwt:Audience` vêm de `appsettings.json`.

- Mantenha `.env` fora do Git. Nunca publique senhas ou chaves JWT reais.

### 3. Restaurar dependências e iniciar o backend

Ainda em `PonteLaranja_Back/API/API`:

```bash
dotnet restore API.csproj
dotnet run --launch-profile https
```

O perfil HTTPS de desenvolvimento usa:

- API HTTPS: [https://localhost:7118](https://localhost:7118)

- API HTTP: [http://localhost:5295](http://localhost:5295)

- Swagger: [https://localhost:7118/swagger](https://localhost:7118/swagger)

Se o certificado HTTPS de desenvolvimento não estiver instalado, execute:

```bash
dotnet dev-certs https --trust
```

Depois de aceitar a instalação do certificado, inicie a API novamente.

### 4. Recursos do backend

A API implementa endpoints e serviços para autenticação/usuários, unidades, itens, tipos de item, tipos de medida, tipos de unidade, tipos de usuário, estados de transferência e transferências. Para testar endpoints protegidos, use o Swagger e informe o token JWT no esquema **Bearer**.

## Executar os dois projetos

Use dois terminais separados:

1. Prepare o SQL Server e configure o `.env` do backend.

1. Inicie a API .NET pela pasta `PonteLaranja_Back/API/API` e confirme que o Swagger abre em `https://localhost:7118/swagger`.

1. Inicie o Next.js pela pasta `PonteLaranja_Front/ponte-laranja` com `npm run dev`.

1. Acesse [http://localhost:3000](http://localhost:3000).

**A integração ainda precisa ser implementada:** o frontend não possui configuração de endereço da API nem requisições para os endpoints do backend. Após criar essa integração, documente a URL/base path usada e atualize a página inicial para apontar para uma rota que exista.

## Testes

Não foi localizado um projeto de testes automatizados no backend `develop`. Para verificar o frontend:

```bash
cd PonteLaranja_Front/ponte-laranja
npm run lint
npm run build
```
