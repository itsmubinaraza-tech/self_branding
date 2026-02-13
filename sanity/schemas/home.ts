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
    defineField({
      name: "valuePillars",
      title: "Value Pillars",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "body",
              title: "Body",
              type: "text",
              rows: 4,
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "featuredWorkCopy",
      title: "Featured Work Copy",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "featuredWorkCtaLabel",
      title: "Featured Work CTA Label",
      type: "string",
    }),
    defineField({
      name: "speakingPreviewCopy",
      title: "Speaking Preview Copy",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "speakingPreviewCtaLabel",
      title: "Speaking Preview CTA Label",
      type: "string",
    }),
    defineField({
      name: "carousel",
      title: "Personal Image Carousel",
      type: "array",
      description: "Personal photos with quotes (3-5 images)",
      validation: (Rule) => Rule.max(5),
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "alt",
              title: "Alt Text",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "tagline",
              title: "Tagline / Quote",
              type: "text",
              rows: 2,
            }),
            defineField({
              name: "attribution",
              title: "Attribution",
              type: "string",
              description: "Quote attribution (e.g., author name)",
            }),
          ],
        },
      ],
    }),
  ],
});
