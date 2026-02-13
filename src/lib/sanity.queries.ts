import { groq } from "next-sanity";

export const homeQuery = groq`*[_type == "home"][0]{
  heroEyebrow,
  heroHeadline,
  heroSubhead,
  ctaPrimaryLabel,
  ctaPrimaryUrl,
  ctaSecondaryLabel,
  ctaSecondaryUrl,
  valuePillars,
  featuredWorkCopy,
  featuredWorkCtaLabel,
  speakingPreviewCopy,
  speakingPreviewCtaLabel,
  carousel[]{ _key, image, alt, tagline, attribution }
}`;

export const experiencePageQuery = groq`*[_type == "experiencePage"][0]{
  heading,
  overview
}`;

export const speakingPageQuery = groq`*[_type == "speakingPage"][0]{
  profile,
  topics,
  ctaLabel
}`;

export const contactPageQuery = groq`*[_type == "contactPage"][0]{
  body,
  email,
  linkedinUrl
}`;

export const featuredProjectsQuery = groq`*[_type == "project" && featured == true && published == true] | order(order asc, _createdAt desc){
  _id,
  title,
  slug,
  shortDescription,
  thumbnailImage,
  categories,
  roles,
  status
}`;

export const projectsQuery = groq`*[_type == "project" && published == true] | order(order asc, _createdAt desc){
  _id,
  title,
  slug,
  shortDescription,
  thumbnailImage,
  categories,
  roles,
  status
}`;

export const projectBySlugQuery = groq`*[_type == "project" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  shortDescription,
  thumbnailImage,
  heroImage,
  heroVideo{asset->{url}},
  gallery,
  roles,
  status,
  technologies,
  categories,
  overview,
  coCreation,
  solution,
  impact,
  learnings
}`;

export const experienceCasesQuery = groq`*[_type == "experienceCase"] | order(order asc, _createdAt desc){
  _id,
  title,
  context,
  role,
  collaboration,
  outcomes,
  order
}`;

export const speakingEngagementsQuery = groq`*[_type == "speakingEngagement"] | order(order asc, _createdAt desc){
  _id,
  title,
  description,
  youtubeUrl,
  videoFile{asset->{url}},
  playlist,
  featured,
  order
}`;
