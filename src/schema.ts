export const typeDefs = `#graphql
  type Budget {
    totalBudget: Float!
    totalImpressions: Int!
    currency: String!
  }

  type FrequencyCapping {
    type: String!
    duration: String!
    maximumEvents: Int!
  }

  type Dimensions {
    width: Int!
    height: Int!
  }

  type Ad {
    id: ID!
    type: String!
    displayType: String!
    dimensions: Dimensions!
    targetedAdSlotFormats: [AdSlotFormat!]
  }

  type AdSlotFormat {
    format: String!
  }

  type TimeInterval {
    from: TimePoint!
    to: TimePoint!
  }

  type TimePoint {
    hour: Int!
  }

  type TimeTargeting {
    day: String!
    delivering: Boolean!
    intervals: [TimeInterval!]!
  }

  type Targeting {
    sites: [ID!]!
    time: [TimeTargeting!]!
  }

  type Campaign {
    campaignId: ID!
    campaignDomain: CampaignDomain!
    adsDomain: [Ad!]!
    targetingDomain: Targeting!
  }

  type CampaignDomain {
    startDate: String!
    endDate: String!
    budget: Budget!
    frequencyCapping: FrequencyCapping!
  }

  type Query {
    campaigns: [Campaign!]!
    campaign(id: ID!): Campaign
  }
`;
