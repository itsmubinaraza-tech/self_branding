import type { PortableTextBlock } from "@portabletext/types";

export type SanityImage = {
  _type: "image";
  asset?: {
    _ref?: string;
    _type?: "reference";
  };
};

export type SanityFile = {
  _type: "file";
  asset?: {
    _ref?: string;
    url?: string;
  };
};

export type Project = {
  _id: string;
  title: string;
  slug: { current: string };
  shortDescription?: string;
  thumbnailImage?: SanityImage;
  heroImage?: SanityImage;
  heroVideo?: {
    asset?: {
      url?: string;
    };
  };
  gallery?: Array<SanityImage | SanityFile>;
  roles?: string[];
  status?: string;
  technologies?: string[];
  categories?: string[];
  overview?: PortableTextBlock[];
  coCreation?: PortableTextBlock[];
  solution?: PortableTextBlock[];
  impact?: PortableTextBlock[];
  learnings?: PortableTextBlock[];
  published?: boolean;
  order?: number;
};

export type ExperienceCase = {
  _id: string;
  title: string;
  context?: string;
  role?: string;
  collaboration?: string;
  outcomes?: string[];
  order?: number;
};

export type SpeakingEngagement = {
  _id: string;
  title: string;
  description?: string;
  youtubeUrl?: string;
  playlist?: boolean;
  featured?: boolean;
  order?: number;
};

export type HomeData = {
  heroEyebrow?: string;
  heroHeadline?: string;
  heroSubhead?: string;
  ctaPrimaryLabel?: string;
  ctaPrimaryUrl?: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryUrl?: string;
};
