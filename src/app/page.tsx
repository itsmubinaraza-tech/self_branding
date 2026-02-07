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

  return (
    <div className="flex flex-col gap-16">
      <section className="flex flex-col gap-6 pt-6">
        {home?.heroEyebrow ? (
          <p className="text-xs uppercase tracking-[0.3em] text-secondary">
            {home.heroEyebrow}
          </p>
        ) : null}
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
          {home?.heroHeadline ?? "Mubina Raza"}
        </h1>
        {home?.heroSubhead ? (
          <p className="max-w-2xl text-lg text-secondary">
            {home.heroSubhead}
          </p>
        ) : null}
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
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-semibold">Featured projects</h2>
          <Link href="/portfolio" className="text-sm text-secondary">
            View all
          </Link>
        </div>
        <ProjectGrid projects={featuredProjects} />
      </section>

      <section className="glass flex flex-col gap-3 rounded-3xl p-8 md:p-10">
        <h2 className="text-2xl font-semibold">Speaking</h2>
        <p className="text-secondary">
          Latest talks and community conversations update here automatically.
        </p>
        <Link
          href="/speaking"
          className="inline-flex w-fit items-center justify-center rounded-full border border-muted px-5 py-2 text-sm font-semibold text-primary transition hover:border-accent"
        >
          Explore speaking
        </Link>
      </section>
    </div>
  );
}
