import type { StructureBuilder } from "sanity/desk";

export const structure = (S: StructureBuilder) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Home")
        .child(S.document().schemaType("home").documentId("home")),
      S.divider(),
      S.documentTypeListItem("project").title("Projects"),
      S.documentTypeListItem("experienceCase").title("Experience"),
      S.documentTypeListItem("speakingEngagement").title("Speaking"),
    ]);
