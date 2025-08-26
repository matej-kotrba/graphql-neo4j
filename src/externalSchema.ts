/**
 * Neo4j GraphQL Schema for Campaign Management
 * Generated based on the Neo4j Cypher Converter data structure
 * Uses proper Neo4j GraphQL library directives
 */

export const typeDefs = `#graphql
  type Campaign @node {
    ibbId: ID! @id
    type: CampaignType
    isFlight: Boolean!
    deliverCapabilityDate: DateTime
    campaignAdvertiserId: String!
    businessProductName: BusinessProduct
    isDiscarded: Boolean
    agencyId: String
    mbrId: String
    campaignGroupId: String
    name: String
    contractId: String!
    startDate: DateTime
    endDate: DateTime
    mediaType: MediaType
    pacing: PacingType
    priority: Int
    unitCost: String
    boostedCpm: Float
    lastModification: String!
    lastModificationDate: DateTime @timestamp(operations: [UPDATE])
    status: CampaignStatus!
    adExclusion: AdExclusion
    advertiserExclusion: String
    associatedTargetingsId: String
    purchaseType: PurchaseType

    ads: [Ad!]! @relationship(type: "HAS_AD", direction: OUT)
    budgets: [Budget!]! @relationship(type: "HAS_BUDGET", direction: OUT)
    advertiser: [Advertiser!]! @relationship(type: "HAS_CAMPAIGN", direction: IN)
    agency: [Agency!]! @relationship(type: "HAS_CAMPAIGN", direction: IN)
    customer: [Customer!]! @relationship(type: "HAS_CAMPAIGN", direction: IN)
    targetingDevices: [TargetingDevice!]! @relationship(type: "TARGETS", direction: OUT)
    parentCampaign: [Campaign!]! @relationship(type: "HAS_SUBCAMPAIGN", direction: IN)
    subCampaigns: [Campaign!]! @relationship(type: "HAS_SUBCAMPAIGN", direction: OUT)
  }

  type Ad @node {
    id: ID! @id
    mbrId: String
    type: AdType
    scheduleDelivery: ScheduleDelivery
    displayType: DisplayType
    videoAdDurationInSec: Int
    associatedTargetingsId: String

    campaign: [Campaign!]! @relationship(type: "HAS_AD", direction: IN)
    dimensions: [AdDimensions!]! @relationship(type: "HAS_DIMENSIONS", direction: OUT)
  }

  type AdDimensions @node {
    width: Int!
    height: Int!

    ad: [Ad!]! @relationship(type: "HAS_DIMENSIONS", direction: IN)
  }

  type Budget @node {
    ruleId: ID! @id
    comesFromCampaignId: String!
    currency: String!
    totalBudget: Float
    dailyBudget: Float
    totalClicks: Int
    dailyClicks: Int
    totalQualifiedClicks: Int
    dailyQualifiedClicks: Int
    totalImpressions: Int
    dailyImpressions: Int

    campaign: [Campaign!]! @relationship(type: "HAS_BUDGET", direction: IN)
  }

  type Advertiser @node {
    advertiserId: ID! @id

    campaigns: [Campaign!]! @relationship(type: "HAS_CAMPAIGN", direction: OUT)
  }

  type Agency @node {
    agencyId: ID! @id

    campaigns: [Campaign!]! @relationship(type: "HAS_CAMPAIGN", direction: OUT)
  }

  type Customer @node {
    customerId: ID! @id

    campaigns: [Campaign!]! @relationship(type: "HAS_CAMPAIGN", direction: OUT)
  }

  type TargetingDevice @node {
    devices: [String!]!

    campaigns: [Campaign!]! @relationship(type: "TARGETS", direction: IN)
  }

  enum CampaignType {
    direct
    programmatic
    programmaticGuaranteed
  }

  enum BusinessProduct {
    stroeer_media
    stroeer_digital
    stroeer_local
  }

  enum MediaType {
    display
    video
    outOfHome
    unknown
  }

  enum PacingType {
    frontloaded
    asap
    even
  }

  enum CampaignStatus {
    DELIVERY_EXTENDED
    DELIVERING
    READY
    PAUSED
    INACTIVE
    ARCHIVED
    COMPLETED
  }

  enum AdExclusion {
    one_per_page
    one_or_more
    as_many_as_possible
    all_roadblock
    creative_set
  }

  enum PurchaseType {
    guaranteed
    unguaranteed
  }

  enum AdType {
    display
    video
    outOfHome
  }

  enum ScheduleDelivery {
    asap
    even
  }

  enum DisplayType {
    standard
    aspect_ratio
    interstitial
    ignored
    native
    audio
    unknown
    fireplace
    wallpaper
    doubleDynamicSitebar
    topScroller
    breakout
  }
`;
