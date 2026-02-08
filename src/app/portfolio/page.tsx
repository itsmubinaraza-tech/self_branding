import ProjectGrid from "@/components/ProjectGrid";
import { sanityClient } from "@/lib/sanity.client";
import { projectsQuery } from "@/lib/sanity.queries";
import type { Project } from "@/lib/types";

export const revalidate = 60;

export default async function PortfolioPage() {
  const projects = await sanityClient.fetch<Project[]>(projectsQuery);

  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-3">
        <p className="text-xs uppercase tracking-[0.3em] text-secondary">
          Portfolio
        </p>
        <h1 className="text-4xl font-semibold md:text-5xl">Selected work</h1>
        <p className="max-w-2xl text-secondary">
          This portfolio highlights applications, platforms, and initiatives I
          have developed, led, or co-created. Each project reflects my
          commitment to collaborative design, disciplined execution, and
          delivering outcomes that matter.
        </p>
      </section>
      <ProjectGrid projects={projects} />
    </div>
  );
}
