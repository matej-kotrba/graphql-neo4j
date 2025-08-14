export const adTypeDefs = `#graphql
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
`;