import type { StructureBuilder } from "sanity/desk";

export const structure = (S: StructureBuilder) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Home")
        .child(S.document().schemaType("home").documentId("home")),
      S.listItem()
        .title("Experience Page")
        .child(S.document().schemaType("experiencePage").documentId("experiencePage")),
      S.listItem()
        .title("Speaking Page")
        .child(S.document().schemaType("speakingPage").documentId("speakingPage")),
      S.listItem()
        .title("Contact Page")
        .child(S.document().schemaType("contactPage").documentId("contactPage")),
      S.divider(),
      S.documentTypeListItem("project").title("Projects"),
      S.documentTypeListItem("experienceCase").title("Experience"),
      S.documentTypeListItem("speakingEngagement").title("Speaking"),
    ]);
