import { defineField, defineType } from "sanity";

export default defineType({
  name: "speakingPage",
  title: "Speaking Page",
  type: "document",
  fields: [
    defineField({
      name: "profile",
      title: "Speaker Profile",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "topics",
      title: "Speaking Topics",
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
              name: "description",
              title: "Description",
              type: "text",
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "ctaLabel",
      title: "CTA Label",
      type: "string",
    }),
  ],
});
