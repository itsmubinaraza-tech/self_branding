import { defineField, defineType } from "sanity";

export default defineType({
  name: "speakingEngagement",
  title: "Speaking Engagement",
  type: "document",
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
    }),
    defineField({
      name: "youtubeUrl",
      title: "YouTube Embed URL",
      type: "url",
      description: "Use the embed URL, e.g. https://www.youtube.com/embed/...",
    }),
    defineField({
      name: "videoFile",
      title: "Video File",
      type: "file",
      options: { accept: "video/*" },
    }),
    defineField({
      name: "playlist",
      title: "Playlist",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Lower numbers appear first.",
    }),
  ],
});
