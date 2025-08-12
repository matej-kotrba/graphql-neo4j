export const typeDefs = `#graphql
  type Budget @node {
    totalBudget: Float!
    totalImpressions: Int!
    currency: String!
  }

  type FrequencyCapping @node {
    type: String!
    duration: String!
    maximumEvents: Int!
  }

  type Dimensions @node {
    width: Int!
    height: Int!
  }

  type Ad @node {
    id: ID! @id
    type: String!
    displayType: String!
    dimensions: [Dimensions!]! @relationship(type: "HAS_DIMENSIONS", direction: OUT)
  }

  type TimeInterval @node {
    from: [TimePoint!]! @relationship(type: "FROM", direction: OUT)
    to: [TimePoint!]! @relationship(type: "TO", direction: OUT)
  }

  type TimePoint @node {
    hour: Int!
  }

  type TimeTargeting @node {
    day: String!
    delivering: Boolean!
    intervals: [TimeInterval!]! @relationship(type: "HAS_INTERVAL", direction: OUT)
  }

  type Targeting @node {
    sites: [ID!]!
    time: [TimeTargeting!]! @relationship(type: "HAS_TIME_TARGETING", direction: OUT)
  }

  type Campaign @node {
    campaignId: ID! @id
    campaignDomain: [CampaignDomain!]! @relationship(type: "HAS_DOMAIN", direction: OUT)
    adsDomain: [Ad!]! @relationship(type: "HAS_AD", direction: OUT)
    targetingDomain: [Targeting!]! @relationship(type: "HAS_TARGETING", direction: OUT)
  }

  type CampaignDomain @node {
    startDate: String!
    endDate: String!
    budget: [Budget!]! @relationship(type: "HAS_BUDGET", direction: OUT)
    frequencyCapping: [FrequencyCapping!]! @relationship(type: "HAS_FREQUENCY_CAPPING", direction: OUT)
  }

`;
