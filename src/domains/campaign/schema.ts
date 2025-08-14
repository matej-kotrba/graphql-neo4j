export const campaignTypeDefs = `#graphql

  type CampaignDomain @node {
    startDate: String!
    endDate: String!
    budget: [Budget!]! @relationship(type: "HAS_BUDGET", direction: OUT)
    frequencyCapping: [FrequencyCapping!]! @relationship(type: "HAS_FREQUENCY_CAPPING", direction: OUT)
  }
`;