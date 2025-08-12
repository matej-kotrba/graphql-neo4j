# GraphQL Neo4j Campaign Management API

This is a prototype application that provides a unified API for campaign management using GraphQL and Neo4j.

## Technologies Used

- TypeScript
- GraphQL (Apollo Server)
- Neo4j
- @neo4j/graphql for automatic schema generation
- Bun as the JavaScript/TypeScript runtime

## Setup

1. Install dependencies:

```bash
bun install
```

2. Start Neo4j using Docker:

```bash
docker-compose up -d
```

This will start a Neo4j instance with the following default credentials:

- Username: neo4j
- Password: developmentpassword
- URI: neo4j://localhost:7687
- Browser interface: http://localhost:7474

You can override these settings using environment variables:

- NEO4J_URI
- NEO4J_USER
- NEO4J_PASSWORD

3. Seed the database:

```bash
bun run src/seed.ts
```

4. Start the server:

```bash
bun run src/index.ts
```

The GraphQL server will be available at http://localhost:4000

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
