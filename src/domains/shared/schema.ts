export const sharedTypeDefs = `#graphql
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

  type Campaign @node {
    campaignId: ID! @id
    campaignDomain: [CampaignDomain!]! @relationship(type: "HAS_DOMAIN", direction: OUT)
    adsDomain: [Ad!]! @relationship(type: "HAS_AD", direction: OUT)
    targetingDomain: [Targeting!]! @relationship(type: "HAS_TARGETING", direction: OUT)
  }
`;