import Image from "next/image";
import type { Project } from "@/lib/types";
import { urlForImage } from "@/lib/sanity.image";

type ProjectHeroProps = {
  project: Project;
};

export default function ProjectHero({ project }: ProjectHeroProps) {
  const heroUrl = urlForImage(project.heroImage)
    ?.width(2000)
    .height(1200)
    .url();
  const heroVideoUrl = project.heroVideo?.asset?.url;

  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <p className="text-xs uppercase tracking-[0.3em] text-secondary">
          Portfolio Case Study
        </p>
        <h1 className="text-4xl font-semibold md:text-5xl">{project.title}</h1>
        {project.shortDescription ? (
          <p className="max-w-2xl text-lg text-secondary">
            {project.shortDescription}
          </p>
        ) : null}
        <div className="flex flex-wrap gap-4 text-sm text-secondary">
          {project.roles?.length ? (
            <span>Role: {project.roles.join(", ")}</span>
          ) : null}
          {project.status ? <span>Status: {project.status}</span> : null}
        </div>
      </div>
      {heroVideoUrl ? (
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-muted">
          <video
            className="h-full w-full object-cover"
            src={heroVideoUrl}
            controls
          />
        </div>
      ) : heroUrl ? (
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-muted">
          <Image
            src={heroUrl}
            alt={project.title}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ) : null}
    </section>
  );
}
