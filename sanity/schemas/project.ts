import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "string",
      description: "One-line descriptor shown on cards and hero.",
      validation: (Rule) => Rule.max(140),
    }),
    defineField({
      name: "thumbnailImage",
      title: "Thumbnail Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "heroVideo",
      title: "Hero Video",
      type: "file",
      options: { accept: "video/*" },
    }),
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [
        { type: "image", options: { hotspot: true } },
        { type: "file", options: { accept: "video/*" } },
      ],
    }),
    defineField({
      name: "roles",
      title: "Roles",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Live", value: "Live" },
          { title: "MVP", value: "MVP" },
          { title: "Pilot", value: "Pilot" },
          { title: "Archived", value: "Archived" },
        ],
      },
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "overview",
      title: "Overview",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "coCreation",
      title: "Co-Creation",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "solution",
      title: "Solution",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "impact",
      title: "Impact",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "learnings",
      title: "Learnings",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "published",
      title: "Published",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Lower numbers appear first in grids.",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "thumbnailImage",
      subtitle: "shortDescription",
    },
  },
});
