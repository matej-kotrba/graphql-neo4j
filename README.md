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

### 1. Install Dependencies
```bash
bun install
```

### 2. Start Neo4j Database
Run the Docker script to start Neo4j:
```bash
./docker.sh
```
*Or use the npm script:*
```bash
bun run run-neo4j
```

### 3. Configure Environment
Create your environment file:
```bash
cp .env.example .env
```

**Default Neo4j Configuration:**
- **Username:** `neo4j`
- **Password:** `developmentpassword` (as specified in `.env.example`)
- **URI:** `neo4j://localhost:7687`
- **Browser Interface:** http://localhost:7474

> 💡 **Note:** You can customize these settings by modifying the `.env` file

### 4. Seed the Database
Populate with sample campaign data:
```bash
bun run ./src/seed.ts
```

### 5. Start the GraphQL Server
```bash
bun run ./src/index.ts
```

🎯 **GraphQL Playground:** http://localhost:4000

---

## 📖 Detailed Setup Guide

For a complete step-by-step setup guide with troubleshooting tips, see [HOW_TO_RUN.md](./HOW_TO_RUN.md).

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
