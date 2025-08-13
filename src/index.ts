import { Neo4jGraphQL } from "@neo4j/graphql";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import neo4j from "neo4j-driver";
import { typeDefs } from "./domains";

// Neo4j connection configuration
const driver = neo4j.driver(
  process.env.NEO4J_URI || "neo4j://localhost:7687",
  neo4j.auth.basic(
    process.env.NEO4J_USER || "neo4j",
    process.env.NEO4J_PASSWORD || "developmentpassword"
  )
);

// Create Neo4j GraphQL instance
const neoSchema = new Neo4jGraphQL({
  typeDefs,
  driver,
  debug: true,
});

async function startServer() {
  try {
    // Generate schema
    const schema = await neoSchema.getSchema();

    // Create Apollo Server
    const server = new ApolloServer({
      schema,
    });

    // Start server
    const { url } = await startStandaloneServer(server, {
      listen: { port: 4000 },
    });

    console.log(`🚀 Server ready at ${url}`);
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

// Handle server shutdown
process.on("SIGINT", () => {
  driver.close();
  process.exit(0);
});

startServer();
