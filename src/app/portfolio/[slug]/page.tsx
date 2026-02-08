import { notFound } from "next/navigation";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import type { PortableTextComponents } from "@portabletext/react";
import ProjectHero from "@/components/ProjectHero";
import { sanityClient } from "@/lib/sanity.client";
import {
  projectBySlugQuery,
  projectsQuery,
} from "@/lib/sanity.queries";
import type { Project } from "@/lib/types";

export const revalidate = 60;

type PageProps = {
  params: { slug: string };
};

const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) =>
      children ? <p className="text-secondary">{children}</p> : null,
  },
  list: {
    bullet: ({ children }) =>
      children ? <ul className="space-y-2 text-secondary">{children}</ul> : null,
  },
  listItem: {
    bullet: ({ children }) =>
      children ? (
        <li className="flex gap-2">
          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
          <span>{children}</span>
        </li>
      ) : null,
  },
};

function Section({
  title,
  content,
}: {
  title: string;
  content?: Project["overview"];
}) {
  if (!content?.length) {
    return null;
  }

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <PortableText value={content} components={portableTextComponents} />
    </section>
  );
}

export async function generateStaticParams() {
  const projects = await sanityClient.fetch<Project[]>(projectsQuery);
  return projects
    .filter((project) => project.slug?.current)
    .map((project) => ({
      slug: project.slug?.current as string,
    }));
}

export default async function ProjectPage({ params }: PageProps) {
  const project = await sanityClient.fetch<Project | null>(projectBySlugQuery, {
    slug: params.slug,
  });

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-12">
      <ProjectHero project={project} />

      <div className="grid gap-10 lg:grid-cols-[1fr_240px]">
        <div className="flex flex-col gap-10">
          <Section title="Overview" content={project.overview} />
          <Section title="Co-Creation" content={project.coCreation} />
          <Section title="Solution" content={project.solution} />
          <Section title="Impact" content={project.impact} />
          <Section title="Learnings" content={project.learnings} />
        </div>
        <aside className="glass flex flex-col gap-4 rounded-2xl p-5 text-sm text-secondary">
          {project.technologies?.length ? (
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-secondary">
                Tech
              </p>
              <p className="mt-2 text-primary">
                {project.technologies.join(", ")}
              </p>
            </div>
          ) : null}
          {project.categories?.length ? (
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-secondary">
                Category
              </p>
              <p className="mt-2 text-primary">
                {project.categories.join(", ")}
              </p>
            </div>
          ) : null}
          <Link href="/portfolio" className="mt-4 text-accent">
            Back to portfolio
          </Link>
        </aside>
      </div>
    </div>
  );
}
