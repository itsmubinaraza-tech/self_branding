import CaseSnapshot from "@/components/CaseSnapshot";
import { sanityClient } from "@/lib/sanity.client";
import { experienceCasesQuery, experiencePageQuery } from "@/lib/sanity.queries";
import type { ExperienceCase, ExperiencePageData } from "@/lib/types";

export const revalidate = 60;

export default async function ExperiencePage() {
  const [cases, page] = await Promise.all([
    sanityClient.fetch<ExperienceCase[]>(experienceCasesQuery),
    sanityClient.fetch<ExperiencePageData | null>(experiencePageQuery),
  ]);

  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-3">
        <p className="text-xs uppercase tracking-[0.3em] text-secondary">
          Experience
        </p>
        <h1 className="text-4xl font-semibold md:text-5xl">
          {page?.heading ?? "Enterprise Leadership & Execution"}
        </h1>
        {page?.overview ? (
          <p className="max-w-2xl text-secondary">{page.overview}</p>
        ) : null}
      </section>
      <div className="grid gap-6 lg:grid-cols-2">
        {cases.map((item) => (
          <CaseSnapshot key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}
