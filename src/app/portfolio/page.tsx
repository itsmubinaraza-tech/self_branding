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
          A focused grid of projects with minimal framing and maximum visual
          weight.
        </p>
      </section>
      <ProjectGrid projects={projects} />
    </div>
  );
}
