import { sanityClient } from "@/lib/sanity.client";
import { speakingEngagementsQuery, speakingPageQuery } from "@/lib/sanity.queries";
import type { SpeakingEngagement, SpeakingPageData } from "@/lib/types";

export const revalidate = 60;

export default async function SpeakingPage() {
  const [engagements, page] = await Promise.all([
    sanityClient.fetch<SpeakingEngagement[]>(speakingEngagementsQuery),
    sanityClient.fetch<SpeakingPageData | null>(speakingPageQuery),
  ]);

  const featured = engagements.filter((item) => item.featured);
  const others = engagements.filter((item) => !item.featured);

  return (
    <div className="flex flex-col gap-12">
      <section className="flex flex-col gap-3">
        <p className="text-xs uppercase tracking-[0.3em] text-secondary">
          Speaking
        </p>
        <h1 className="text-4xl font-semibold md:text-5xl">
          Conversations and workshops
        </h1>
        <p className="max-w-2xl text-secondary">
          {page?.profile}
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="glass rounded-2xl p-6">
          <h2 className="text-2xl font-semibold">Topics</h2>
          <ul className="mt-4 space-y-2 text-sm text-secondary">
            {page?.topics?.map((topic) => (
              <li key={topic.title} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                <span>
                  <strong className="text-primary">{topic.title}</strong>:{" "}
                  {topic.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
        {featured.length ? (
          <div className="glass rounded-2xl p-6">
            <h2 className="text-2xl font-semibold">Featured</h2>
            <div className="mt-4 flex flex-col gap-4">
              {featured.map((item) => (
                <article key={item._id} className="space-y-2">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  {item.description ? (
                    <p className="text-sm text-secondary">{item.description}</p>
                  ) : null}
                  {item.youtubeUrl ? (
                    <div className="aspect-video w-full overflow-hidden rounded-xl border border-muted">
                      <iframe
                        className="h-full w-full"
                        src={item.youtubeUrl}
                        title={item.title}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : item.videoFile?.asset?.url ? (
                    <div className="aspect-video w-full overflow-hidden rounded-xl border border-muted">
                      <video
                        className="h-full w-full object-cover"
                        src={item.videoFile.asset.url}
                        controls
                      />
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        ) : null}
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold">All engagements</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {others.map((item) => (
            <article
              key={item._id}
              className="glass flex flex-col gap-3 rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              {item.description ? (
                <p className="text-sm text-secondary">{item.description}</p>
              ) : null}
              {item.youtubeUrl ? (
                <div className="aspect-video w-full overflow-hidden rounded-xl border border-muted">
                  <iframe
                    className="h-full w-full"
                    src={item.youtubeUrl}
                    title={item.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : item.videoFile?.asset?.url ? (
                <div className="aspect-video w-full overflow-hidden rounded-xl border border-muted">
                  <video
                    className="h-full w-full object-cover"
                    src={item.videoFile.asset.url}
                    controls
                  />
                </div>
              ) : null}
            </article>
          ))}
        </div>
        <a
          href="/contact"
          className="inline-flex w-fit items-center justify-center rounded-full border border-muted px-5 py-2 text-sm font-semibold text-primary transition hover:border-accent"
        >
          {page?.ctaLabel ?? "Book Me to Speak"}
        </a>
      </section>
    </div>
  );
}
