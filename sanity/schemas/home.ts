import { defineField, defineType } from "sanity";

export default defineType({
  name: "home",
  title: "Home",
  type: "document",
  fields: [
    defineField({
      name: "heroEyebrow",
      title: "Hero Eyebrow",
      type: "string",
      description: "Short line above the headline.",
      validation: (Rule) => Rule.max(60),
    }),
    defineField({
      name: "heroHeadline",
      title: "Hero Headline",
      type: "string",
      validation: (Rule) => Rule.max(120),
    }),
    defineField({
      name: "heroSubhead",
      title: "Hero Subhead",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.max(240),
    }),
    defineField({
      name: "ctaPrimaryLabel",
      title: "Primary CTA Label",
      type: "string",
    }),
    defineField({
      name: "ctaPrimaryUrl",
      title: "Primary CTA URL",
      type: "url",
    }),
    defineField({
      name: "ctaSecondaryLabel",
      title: "Secondary CTA Label",
      type: "string",
    }),
    defineField({
      name: "ctaSecondaryUrl",
      title: "Secondary CTA URL",
      type: "url",
    }),
  ],
});
