import CaseSnapshot from "@/components/CaseSnapshot";
import { sanityClient } from "@/lib/sanity.client";
import { experienceCasesQuery } from "@/lib/sanity.queries";
import type { ExperienceCase } from "@/lib/types";

export const revalidate = 60;

export default async function ExperiencePage() {
  const cases = await sanityClient.fetch<ExperienceCase[]>(
    experienceCasesQuery
  );

  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-3">
        <p className="text-xs uppercase tracking-[0.3em] text-secondary">
          Experience
        </p>
        <h1 className="text-4xl font-semibold md:text-5xl">
          Work without employer labels
        </h1>
        <p className="max-w-2xl text-secondary">
          Each snapshot focuses on context, collaboration, and outcomes.
        </p>
      </section>
      <div className="grid gap-6 lg:grid-cols-2">
        {cases.map((item) => (
          <CaseSnapshot key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}
