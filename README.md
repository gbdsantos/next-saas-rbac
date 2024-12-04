<h1 align="center">
    <br>
    Next.js SaaS + RBAC
</h1>

<p align="center">
  <a href="https://fastify.io">
    <img alt="Fastify logo image" src="https://img.shields.io/badge/fastify-20232A?style=flat&logo=fastify&logoColor=white">
  </a>

  <a href="https://nodejs.org">
    <img alt="Node.js logo image" src="https://img.shields.io/badge/node.js-v20.16.0-43853D?style=flat&logo=node.js&logoColor=white&labelColor=43853D&color=5a5a5a">
  </a>

  <a href="https://www.prisma.io">
    <img alt="Prisma logo image" src="https://img.shields.io/badge/Prisma-3982CE?style=flat&logo=Prisma&logoColor=white" />
  </a>

  <a href="https://www.postgresql.org">
    <img alt="PosgreSQL logo image" src="https://img.shields.io/badge/PostgreSQL-316192?style=flat-&logo=postgresql&logoColor=white"  />
  </a>

  <a href="https://www.typescriptlang.org">
    <img alt="TypeScript logo image" src="https://img.shields.io/badge/typescript-007acc?style=flat&logo=typescript&logoColor=white">
  </a>

  <a href="https://zod.dev" alt="Zod - TypeScript-first schema validation with static type inference">
    <img alt="Zod logo image" src="https://img.shields.io/badge/Zod-274d82?style=flat&logo=zod&logoColor=white" />
  </a>
</p>

<p align="center">
    <a href="#start" alt="Getting Started">Getting Started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#commands" alt="Commands executed">Commands Executed</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#features" alt="Features requirements">Features Requirements</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#technologies" alt="Technologies used">Technologies Used</a>
</p>

This project contains all the necessary boilerplate to setup a multi-tenant SaaS with Next.js including authentication and RBAC authorization.

## 🚀 Getting Start <a name = "start"></a>

```bash
# Install dependencies
npm install

# Create a new Docker environment
docker compose up -d

# Run Prisma migrations
cd apps/api && npm run db:migrate

# Run application
npm run start:dev
```

<br>

## Features <a name = "features"></a>

### Authentication

- [x] It should be able to authenticate using e-mail & password
- [x] It should be able to authenticate using Github account
- [ ] It should be able to recover password using e-mail
- [x] It should be able to create an account (e-mail, name and password)

### Organizations

- [x] It should be able to create a new organization
- [x] It should be able to get organizations to which the user belongs
- [x] It should be able to update an organization
- [x] It should be able to shutdown an organization
- [x] It should be able to transfer organization ownership

### Invites

- [x] It should be able to invite a new member (e-mail, role)
- [x] It should be able to accept an invite
- [x] It should be able to revoke a pending invite

### Members

- [x] It should be able to get organization members
- [x] It should be able to update a member role
- [x] It should be able to remove a member in organization

### Projects

- [x] It should be able to get projects within a organization
- [x] It should be able to create a new project (name, url, description)
- [x] It should be able to update a project (name, url, description)
- [x] It should be able to delete a project

### Billing

- [ ] It should be able to get billing details for organization ($20 per project / $10 per member excluding billing role)

## RBAC

Roles & permissions.

### Roles

- Owner (count as administrator)
- Administrator
- Member
- Billing (one per organization)
- Anonymous

### Permissions table
|                          | Administrator | Member | Billing | Anonymous |
| ------------------------ | ------------- | ------ | ------- | --------- |
| Update organization      | ✅            | ❌     | ❌      | ❌        |
| Delete organization      | ✅            | ❌     | ❌      | ❌        |
| Invite a member          | ✅            | ❌     | ❌      | ❌        |
| Revoke an invite         | ✅            | ❌     | ❌      | ❌        |
| List members             | ✅            | ✅     | ✅      | ❌        |
| Transfer ownership       | ⚠️            | ❌     | ❌      | ❌        |
| Update member role       | ✅            | ❌     | ❌      | ❌        |
| Delete member            | ✅            | ⚠️     | ❌      | ❌        |
| List projects            | ✅            | ✅     | ✅      | ❌        |
| Create a new project     | ✅            | ✅     | ❌      | ❌        |
| Update a project         | ✅            | ⚠️     | ❌      | ❌        |
| Delete a project         | ✅            | ⚠️     | ❌      | ❌        |
| Get billing details      | ✅            | ❌     | ✅      | ❌        |
| Export billing details   | ✅            | ❌     | ✅      | ❌        |
> ✅ = allowed
> ❌ = not allowed
> ⚠️ = allowed w/ conditions

#### Conditions
- Only owners may transfer organization ownership
- Only administrators and project authors may update/delete the project
- Members can leave their own organization

## Commands executed <a name = "commands"></a>

```bash
# Install CASL to handle with permissions
npm i @casl/ability  

# Install tsx and @types/node
cd apps/api && npm i tsx @types/node -D

# Install zod
cd packages/auth && npm i zod 

# Install @t3-oss/env-nextjs 
# this package allow separate environment variables of server and client
cd packages/env && npm i @t3-oss/env-nextjs & npm i @types/node -D
```

## Technologies used <a name="technologies"></a>

- [Fastify](https://fastify.io "Fastify - Fast and low overhead web framework, for Node.js") - Fast and low overhead web framework, for Node.js
- [Node.js](https://nodejs.org "Node.js") - JavaScript runtime environment / plataform
- [Prisma](https://www.prisma.io "Prisma ORM") - ORM (Object Mapping Relation) for Node.js and TypeScript
- [TypeScript](https://www.typescriptlang.org "TypeScript") - Programming language and superset for JavaScript
- [Zod](https://zod.dev "Zod") - TypeScript-first schema validations

---
Made with ❤️ by **Guilherme Bezerra** 👋 [Get in touch!](https://www.linkedin.com/in/gbdsantos)
