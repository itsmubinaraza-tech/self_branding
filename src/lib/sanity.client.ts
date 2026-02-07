import { createClient } from "next-sanity";
import { sanityConfig } from "./sanity.env";

export const sanityClient = createClient({
  projectId: sanityConfig.projectId,
  dataset: sanityConfig.dataset,
  apiVersion: sanityConfig.apiVersion,
  useCdn: sanityConfig.useCdn,
  perspective: "published",
});
