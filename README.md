# 🚀 GraphQL Neo4j Campaign Management API

A modern GraphQL API for campaign management built with Neo4j graph database, providing powerful relationship-based queries and real-time campaign analytics.

## ✨ Features

- **GraphQL API** with automatic schema generation
- **Neo4j Graph Database** for complex relationship queries
- **Campaign Management** with detailed targeting and budget controls
- **Real-time Analytics** through graph relationships
- **TypeScript** for type safety and better developer experience

## 🛠️ Technologies Used

- **TypeScript** - Type-safe JavaScript
- **GraphQL** with Apollo Server - Modern API layer
- **Neo4j** - Graph database for relationship-rich data
- **@neo4j/graphql** - Automatic GraphQL schema generation from Neo4j
- **Bun** - Fast JavaScript/TypeScript runtime

## 🚀 Quick Start

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

### 2. Install Dependencies

Install project dependencies:

```bash
bun install
```

### 3. Start Neo4j Database

Run the Docker script to start the Neo4j database:

```bash
./docker.sh
```

### 4. Configure Environment Variables

Create your environment configuration:

```bash
cp .env.example .env
```

> 💡 **Tip:** You can customize the credentials in the `.env` file if needed.

### 5. Access Neo4j Browser

1. Open your browser and navigate to: **http://localhost:7474**
2. Sign in with:
   - **Username:** `neo4j`
   - **Password:** `neo4j`

### 6. Update Database Password

1. You'll be prompted to change the password
2. **Important:** Make sure the new password matches the one in your `.env` file

### 7. Connect to Database

Configure the connection with:

- **Protocol:** `neo4j`
- **Username:** `neo4j`
- **Password:** Your new password from step 6

### 8. Seed the Database

Populate your database with initial data:

```bash
bun run ./src/seed.ts
```

### 9. Access GraphQL Playground

Once everything is set up, you can run `bun ./src/index.ts` to access the GraphQL endpoint at:
**http://localhost:4000** 🎯

### ✅ You're All Set! 🦭

Your GraphQL Neo4j project is now running locally and ready for development.

## ⚠️ Important Notes

- **Data Persistence:** Data is not persisted between Docker container sessions

## GraphQL Schema

The API provides the following main types:

- Campaign: The main campaign entity
- CampaignDomain: Contains campaign details like dates and budget
- Ad: Advertisement specifications
- Targeting: Campaign targeting rules
- Budget: Campaign budget information
- FrequencyCapping: Frequency capping rules

### Available Queries

Thanks to @neo4j/graphql, the following queries are automatically generated:

```graphql
# Get all campaigns
query {
  campaigns {
    campaignId
    campaignDomain {
      startDate
      endDate
      budget {
        totalBudget
        totalImpressions
        currency
      }
      frequencyCapping {
        type
        duration
        maximumEvents
      }
    }
    adsDomain {
      id
      type
      displayType
      dimensions {
        width
        height
      }
    }
    targetingDomain {
      sites
      time {
        day
        delivering
        intervals {
          from {
            hour
          }
          to {
            hour
          }
        }
      }
    }
  }
}

# Get a specific campaign
query {
  campaign(id: "campaign-id") {
    # Same fields as above
  }
}
```

## Data Model

The data is stored in Neo4j with the following structure:

- Campaign nodes connected to CampaignDomain nodes
- CampaignDomain nodes connected to Budget and FrequencyCapping nodes
- Campaign nodes connected to Ad nodes
- Ad nodes connected to Dimensions nodes
- Campaign nodes connected to Targeting nodes
- Targeting nodes connected to TimeTargeting nodes
- TimeTargeting nodes connected to TimeInterval nodes
- TimeInterval nodes connected to TimePoint nodes (from/to)

This project uses [Bun](https://bun.sh) as the JavaScript/TypeScript runtime.
