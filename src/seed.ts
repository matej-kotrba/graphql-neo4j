import neo4j from "neo4j-driver";

const driver = neo4j.driver(
  process.env.NEO4J_URI || "neo4j://localhost:7687",
  neo4j.auth.basic(process.env.NEO4J_USER || "neo4j", process.env.NEO4J_PASSWORD || "password")
);

const mockData = [
  {
    campaignId: "f7ca989d-c88a-4aec-ab75-1e07d86b6468",
    campaignDomain: {
      startDate: "2019-09-02T00:00:00Z",
      endDate: "2019-10-06T21:59:00Z",
      budget: {
        totalBudget: 20000,
        totalImpressions: 1500000,
        currency: "EUR",
      },
      frequencyCapping: {
        type: "impressions",
        duration: "PT86400S",
        maximumEvents: 2,
      },
    },
    adsDomain: [
      {
        id: "b12a4dc7-dcd1-40b3-8cc0-d83f85e1a849",
        type: "display",
        displayType: "standard",
        dimensions: { width: 42, height: 69 },
        targetedAdSlotFormats: [{ format: "200x200" }],
      },
    ],
    targetingDomain: {
      sites: ["2dc9956c-653a-4c3e-a7c6-be0671d53095"],
      time: [
        {
          day: "everyday",
          delivering: true,
          intervals: [{ from: { hour: 6 }, to: { hour: 13 } }],
        },
      ],
    },
  },
  // Add more campaigns as needed
];

async function seedDatabase() {
  const session = driver.session();

  try {
    // Clear existing data
    await session.run("MATCH (n) DETACH DELETE n");

    for (const campaign of mockData) {
      const query = `
        CREATE (c:Campaign {campaignId: $campaignId})
        CREATE (cd:CampaignDomain {
          startDate: $campaignDomain.startDate,
          endDate: $campaignDomain.endDate
        })
        CREATE (b:Budget {
          totalBudget: $campaignDomain.budget.totalBudget,
          totalImpressions: $campaignDomain.budget.totalImpressions,
          currency: $campaignDomain.budget.currency
        })
        CREATE (fc:FrequencyCapping {
          type: $campaignDomain.frequencyCapping.type,
          duration: $campaignDomain.frequencyCapping.duration,
          maximumEvents: $campaignDomain.frequencyCapping.maximumEvents
        })
        CREATE (c)-[:HAS_DOMAIN]->(cd)
        CREATE (cd)-[:HAS_BUDGET]->(b)
        CREATE (cd)-[:HAS_FREQUENCY_CAPPING]->(fc)
        
        WITH c
        UNWIND $adsDomain as adData
        CREATE (a:Ad {
          id: adData.id,
          type: adData.type,
          displayType: adData.displayType
        })
        CREATE (d:Dimensions {
          width: adData.dimensions.width,
          height: adData.dimensions.height
        })
        CREATE (a)-[:HAS_DIMENSIONS]->(d)
        CREATE (c)-[:HAS_AD]->(a)
        
        WITH c
        CREATE (t:Targeting {sites: $targetingDomain.sites})
        CREATE (c)-[:HAS_TARGETING]->(t)
        
        WITH t
        UNWIND $targetingDomain.time as timeData
        CREATE (tt:TimeTargeting {
          day: timeData.day,
          delivering: timeData.delivering
        })
        CREATE (t)-[:HAS_TIME_TARGETING]->(tt)
        
        WITH tt, timeData
        UNWIND timeData.intervals as interval
        CREATE (ti:TimeInterval)
        CREATE (f:TimePoint {hour: interval.from.hour})
        CREATE (to:TimePoint {hour: interval.to.hour})
        CREATE (ti)-[:FROM]->(f)
        CREATE (ti)-[:TO]->(to)
        CREATE (tt)-[:HAS_INTERVAL]->(ti)
      `;

      await session.run(query, campaign);
    }

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await session.close();
    await driver.close();
  }
}

seedDatabase();
