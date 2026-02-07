import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/types";
import { urlForImage } from "@/lib/sanity.image";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const imageUrl = urlForImage(project.thumbnailImage)
    ?.width(1200)
    .height(900)
    .url();

  return (
    <Link
      href={`/portfolio/${project.slug?.current}`}
      className="group relative flex min-h-[280px] flex-col overflow-hidden rounded-2xl border border-muted bg-black/20 transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow"
    >
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition duration-500 group-hover:scale-[1.02]"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/30" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition group-hover:from-black/80" />
      <div className="relative mt-auto flex flex-col gap-2 p-6">
        {project.categories?.length ? (
          <div className="text-xs uppercase tracking-[0.2em] text-secondary">
            {project.categories.join(" · ")}
          </div>
        ) : null}
        <h3 className="text-2xl font-semibold text-primary">
          {project.title}
        </h3>
        {project.shortDescription ? (
          <p className="text-sm text-secondary">{project.shortDescription}</p>
        ) : null}
      </div>
    </Link>
  );
}
