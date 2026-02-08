import Link from "next/link";
import ProjectGrid from "@/components/ProjectGrid";
import { sanityClient } from "@/lib/sanity.client";
import { featuredProjectsQuery, homeQuery } from "@/lib/sanity.queries";
import type { HomeData, Project } from "@/lib/types";

export const revalidate = 60;

export default async function Home() {
  const [home, featuredProjects] = await Promise.all([
    sanityClient.fetch<HomeData | null>(homeQuery),
    sanityClient.fetch<Project[]>(featuredProjectsQuery),
  ]);

  const valuePillars = [
    {
      title: "Stakeholder Partnership & Co-Creation",
      body:
        "I center my work on value exchange. Every initiative is built through deep partnership with stakeholders, ensuring shared ownership, trust, and outcomes that endure beyond delivery.",
    },
    {
      title: "Strategy to Execution",
      body:
        "Strategy without execution is incomplete. I specialize in carrying initiatives from vision and planning through delivery, operationalization, and continuous improvement.",
    },
    {
      title: "AI & Emerging Technologies",
      body:
        "I focus on applied AI, machine learning, and emerging technologies—prioritizing practical value, responsible governance, and real-world constraints over experimentation without impact.",
    },
    {
      title: "Leadership & Capability Building",
      body:
        "I build teams and organizational capabilities that can independently execute, adapt, and scale. My leadership approach emphasizes accountability, clarity, and long-term growth.",
    },
  ];

  return (
    <div className="flex flex-col gap-16">
      <section className="flex flex-col gap-6 pt-6">
        {home?.heroEyebrow ? (
          <p className="text-xs uppercase tracking-[0.3em] text-secondary">
            {home.heroEyebrow}
          </p>
        ) : null}
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
          {home?.heroHeadline ??
            "Co-creating scalable solutions from strategy through execution."}
        </h1>
        {home?.heroSubhead ? (
          <p className="max-w-2xl text-lg text-secondary">
            {home.heroSubhead}
          </p>
        ) : (
          <p className="max-w-2xl text-lg text-secondary">
            I am a technology and transformation leader who partners with
            stakeholders to design, build, and operationalize complex systems.
            My work sits at the intersection of strategy, execution, and
            collaboration—ensuring ideas are not only well-conceived, but
            implemented, adopted, and sustained.
          </p>
        )}
        <div className="flex flex-wrap gap-4">
          {home?.ctaPrimaryLabel && home?.ctaPrimaryUrl ? (
            <Link
              href={home.ctaPrimaryUrl}
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-2 text-sm font-semibold text-black transition hover:bg-accent-hover"
            >
              {home.ctaPrimaryLabel}
            </Link>
          ) : null}
          {home?.ctaSecondaryLabel && home?.ctaSecondaryUrl ? (
            <Link
              href={home.ctaSecondaryUrl}
              className="inline-flex items-center justify-center rounded-full border border-muted px-6 py-2 text-sm font-semibold text-primary transition hover:border-accent"
            >
              {home.ctaSecondaryLabel}
            </Link>
          ) : null}
          {!home?.ctaPrimaryLabel ? (
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-2 text-sm font-semibold text-black transition hover:bg-accent-hover"
            >
              Explore My Work
            </Link>
          ) : null}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {valuePillars.map((pillar) => (
          <article key={pillar.title} className="glass rounded-2xl p-6">
            <h2 className="text-xl font-semibold">{pillar.title}</h2>
            <p className="mt-3 text-sm text-secondary">{pillar.body}</p>
          </article>
        ))}
      </section>

      <section className="flex flex-col gap-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold">Featured work</h2>
            <p className="mt-2 text-sm text-secondary">
              A selection of platforms, applications, and initiatives that
              reflect my approach to building systems, teams, and value.
            </p>
          </div>
          <Link href="/portfolio" className="text-sm text-secondary">
            View Full Portfolio
          </Link>
        </div>
        <ProjectGrid projects={featuredProjects} />
      </section>

      <section className="glass flex flex-col gap-3 rounded-3xl p-8 md:p-10">
        <h2 className="text-2xl font-semibold">Speaking</h2>
        <p className="text-secondary">
          I regularly speak on technology leadership, AI and machine learning,
          emerging technologies, and equity in the workplace—grounded in
          executional experience rather than theory alone.
        </p>
        <Link
          href="/speaking"
          className="inline-flex w-fit items-center justify-center rounded-full border border-muted px-5 py-2 text-sm font-semibold text-primary transition hover:border-accent"
        >
          Watch Talks
        </Link>
      </section>
    </div>
  );
}
