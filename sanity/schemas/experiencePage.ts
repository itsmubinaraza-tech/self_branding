import { defineField, defineType } from "sanity";

export default defineType({
  name: "experiencePage",
  title: "Experience Page",
  type: "document",
  fields: [
    defineField({
      name: "overview",
      title: "Overview",
      type: "text",
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
  ],
});
