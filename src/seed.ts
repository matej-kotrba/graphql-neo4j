import neo4j from "neo4j-driver";

const driver = neo4j.driver(
  process.env.NEO4J_URI || "neo4j://localhost:7687",
  neo4j.auth.basic(
    process.env.NEO4J_USER || "neo4j",
    process.env.NEO4J_PASSWORD || "developmentpassword"
  )
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
  {
    campaignId: "52d9430b-5d92-409b-88ef-26e6c299a5ec",
    campaignDomain: {
      startDate: "2020-01-01T00:00:00Z",
      endDate: "2020-03-01T23:59:59Z",
      budget: {
        totalBudget: 5000,
        totalImpressions: 100000,
        currency: "USD",
      },
      frequencyCapping: {
        type: "clicks",
        duration: "PT43200S",
        maximumEvents: 1,
      },
    },
    adsDomain: [
      {
        id: "e408bc3c-008f-4a88-b0d2-2f6d9a0bcf0e",
        type: "display",
        displayType: "popup",
        dimensions: { width: 300, height: 250 },
      },
    ],
    targetingDomain: {
      sites: [],
      time: [
        {
          day: "monday",
          delivering: false,
          intervals: [],
        },
      ],
    },
  },
  {
    campaignId: "7a342cee-95d4-4c01-a586-4d35b495c098",
    campaignDomain: {
      startDate: "2021-06-10T10:00:00Z",
      endDate: "2021-07-10T22:00:00Z",
      budget: {
        totalBudget: 10000,
        totalImpressions: 500000,
        currency: "GBP",
      },
      frequencyCapping: {
        type: "impressions",
        duration: "PT7200S",
        maximumEvents: 4,
      },
    },
    adsDomain: [
      {
        id: "ae7a8b99-bb20-4c25-8474-50b3b4d3d7a3",
        type: "video",
        displayType: "fullscreen",
        dimensions: { width: 1920, height: 1080 },
      },
    ],
    targetingDomain: {
      sites: ["1e4efeda-eee6-4fc9-8075-4d7e3726f9ea"],
      time: [
        {
          day: "saturday",
          delivering: true,
          intervals: [{ from: { hour: 12 }, to: { hour: 18 } }],
        },
      ],
    },
  },
  {
    campaignId: "9c71e2ab-4b5e-47a9-a6e8-083bfb5b7096",
    campaignDomain: {
      startDate: "2022-02-01T00:00:00Z",
      endDate: "2022-02-28T23:59:00Z",
      budget: {
        totalBudget: 7500,
        totalImpressions: 300000,
        currency: "CAD",
      },
      frequencyCapping: {
        type: "views",
        duration: "PT3600S",
        maximumEvents: 3,
      },
    },
    adsDomain: [
      {
        id: "ad471b25-3bc2-4a2d-a8f5-911c826fd96e",
        type: "display",
        displayType: "standard",
        dimensions: { width: 728, height: 90 },
      },
    ],
    targetingDomain: {
      sites: ["93d9e37f-e1aa-4d36-8c2f-2a8dc04a938e", "748c4715-b178-4f9e-a1ae-4cfabf8aa4a7"],
      time: [
        {
          day: "wednesday",
          delivering: true,
          intervals: [{ from: { hour: 8 }, to: { hour: 12 } }],
        },
      ],
    },
  },
  {
    campaignId: "5cba35bb-0b01-4c38-9db2-aaa9bb788000",
    campaignDomain: {
      startDate: "2023-11-01T00:00:00Z",
      endDate: "2023-11-30T23:59:00Z",
      budget: {
        totalBudget: 12000,
        totalImpressions: 700000,
        currency: "INR",
      },
      frequencyCapping: {
        type: "clicks",
        duration: "PT10800S",
        maximumEvents: 1,
      },
    },
    adsDomain: [
      {
        id: "7e7acb1d-b546-4b8b-b2fa-4b30efb18a4f",
        type: "video",
        displayType: "inline",
        dimensions: { width: 640, height: 360 },
      },
    ],
    targetingDomain: {
      sites: [],
      time: [
        {
          day: "friday",
          delivering: true,
          intervals: [{ from: { hour: 14 }, to: { hour: 20 } }],
        },
      ],
    },
  },
  {
    campaignId: "fd6a96f1-d75a-4f37-b9c2-9263e0d2b47f",
    campaignDomain: {
      startDate: "2024-04-01T00:00:00Z",
      endDate: "2024-04-15T23:59:59Z",
      budget: {
        totalBudget: 3000,
        totalImpressions: 200000,
        currency: "USD",
      },
      frequencyCapping: {
        type: "views",
        duration: "PT1800S",
        maximumEvents: 5,
      },
    },
    adsDomain: [
      {
        id: "943e473c-635c-4dbb-89d4-2eab20f0e258",
        type: "display",
        displayType: "standard",
        dimensions: { width: 160, height: 600 },
      },
    ],
    targetingDomain: {
      sites: ["ecba3d91-0b8a-4717-b7ff-08a8d76adf0c"],
      time: [
        {
          day: "sunday",
          delivering: false,
          intervals: [],
        },
      ],
    },
  },
  {
    campaignId: "e1c6dcde-31fd-46ea-90a0-d2eb76a2a2c3",
    campaignDomain: {
      startDate: "2025-01-01T00:00:00Z",
      endDate: "2025-12-31T23:59:00Z",
      budget: {
        totalBudget: 100000,
        totalImpressions: 8000000,
        currency: "EUR",
      },
      frequencyCapping: {
        type: "impressions",
        duration: "P1D",
        maximumEvents: 2,
      },
    },
    adsDomain: [
      {
        id: "62b06e87-8e71-45b1-bf3d-42c42f7fd96a",
        type: "display",
        displayType: "richmedia",
        dimensions: { width: 1024, height: 768 },
      },
    ],
    targetingDomain: {
      sites: ["17ba9053-8e00-421c-b3aa-983b6b273dd2", "3d6c15c7-8994-40a5-826e-ec713bd5dce9"],
      time: [
        {
          day: "monday",
          delivering: true,
          intervals: [{ from: { hour: 7 }, to: { hour: 19 } }],
        },
      ],
    },
  },
  {
    campaignId: "3ad4e621-b3fd-48dc-930e-1b982e99f2cf",
    campaignDomain: {
      startDate: "2025-06-01T00:00:00Z",
      endDate: "2025-06-30T23:59:00Z",
      budget: {
        totalBudget: 9500,
        totalImpressions: 450000,
        currency: "USD",
      },
      frequencyCapping: {
        type: "views",
        duration: "PT5400S",
        maximumEvents: 2,
      },
    },
    adsDomain: [
      {
        id: "d63a05fb-680e-4394-8401-f6e2351fe2d3",
        type: "banner",
        displayType: "floating",
        dimensions: { width: 300, height: 600 },
      },
    ],
    targetingDomain: {
      sites: [],
      time: [],
    },
  },
  {
    campaignId: "a9e2ae80-237e-4a40-89e8-14499e07b8d3",
    campaignDomain: {
      startDate: "2025-08-01T00:00:00Z",
      endDate: "2025-08-15T23:59:00Z",
      budget: {
        totalBudget: 1000,
        totalImpressions: 100000,
        currency: "EUR",
      },
      frequencyCapping: {
        type: "clicks",
        duration: "PT3600S",
        maximumEvents: 1,
      },
    },
    adsDomain: [
      {
        id: "1b43c7ff-98db-4212-8a60-38e05a55cc33",
        type: "display",
        displayType: "standard",
        dimensions: { width: 468, height: 60 },
      },
    ],
    targetingDomain: {
      sites: ["5e75555c-324d-4396-abc1-c8f3e7a9f778"],
      time: [
        {
          day: "tuesday",
          delivering: true,
          intervals: [{ from: { hour: 10 }, to: { hour: 14 } }],
        },
      ],
    },
  },
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
