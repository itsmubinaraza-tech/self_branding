import imageUrlBuilder from "@sanity/image-url";
import { sanityConfig } from "./sanity.env";
import type { SanityImage } from "./types";

const builder = imageUrlBuilder({
  projectId: sanityConfig.projectId,
  dataset: sanityConfig.dataset,
});

export function urlForImage(source?: SanityImage) {
  if (!source) {
    return null;
  }
  return builder.image(source);
}
