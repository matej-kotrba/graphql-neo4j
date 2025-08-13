export const targetingTypeDefs = `#graphql
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
`;