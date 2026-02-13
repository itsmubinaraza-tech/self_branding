import { defineField, defineType } from "sanity";

export default defineType({
  name: "experiencePage",
  title: "Experience Page",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Page Heading",
      type: "string",
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: "overview",
      title: "Overview",
      type: "text",
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
  ],
});
