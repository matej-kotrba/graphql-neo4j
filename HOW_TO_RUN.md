# 🚀 GraphQL Neo4j Project Setup Guide

Follow these steps to get your GraphQL Neo4j project running locally.

## 📋 Prerequisites

Make sure you have Docker installed on your machine.

## 🛠️ Installation Steps

### 1. Install Bun Runtime

Install Bun globally using npm:

```bash
npm install -g bun
```

### 2. Start Neo4j Database

Run the Docker script to start the Neo4j database:

```bash
./docker.sh
```

### 3. Configure Environment Variables

Create your environment configuration:

```bash
cp .env.example .env
```

> 💡 **Tip:** You can customize the credentials in the `.env` file if needed.

### 4. Access Neo4j Browser

1. Open your browser and navigate to: **http://localhost:7474**
2. Sign in with:
   - **Username:** `neo4j`
   - **Password:** `neo4j`

### 5. Update Database Password

1. You'll be prompted to change the password
2. **Important:** Make sure the new password matches the one in your `.env` file

### 6. Connect to Database

Configure the connection with:

- **Protocol:** `neo4j`
- **Username:** `neo4j`
- **Password:** Your new password from step 5

### 7. Seed the Database

Populate your database with initial data:

```bash
bun run ./src/seed.ts
```

### 8. Access GraphQL Playground

Once everything is set up, you can run `bun ./src/index.ts` to access the GraphQL endpoint at:
**http://localhost:4000** 🎯

## ✅ You're All Set! 🦭

Your GraphQL Neo4j project is now running locally and ready for development.

## ⚠️ Important Notes

- **Data Persistence:** Data is not persisted between Docker container sessions
