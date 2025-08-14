import { sharedTypeDefs } from "./shared/schema";
import { adTypeDefs } from "./ad/schema";
import { targetingTypeDefs } from "./targeting/schema";
import { campaignTypeDefs } from "./campaign/schema";

export const typeDefs = [
  sharedTypeDefs,
  adTypeDefs,
  targetingTypeDefs,
  campaignTypeDefs
].join("\n");