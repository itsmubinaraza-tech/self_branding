import { sanityClient } from "@/lib/sanity.client";
import { speakingEngagementsQuery } from "@/lib/sanity.queries";
import type { SpeakingEngagement } from "@/lib/types";

export const revalidate = 60;

const topics = [
  "AI product strategy and platform design",
  "Human-centered automation",
  "Building ventures with constraints",
  "Scaling cross-functional collaboration",
];

export default async function SpeakingPage() {
  const engagements = await sanityClient.fetch<SpeakingEngagement[]>(
    speakingEngagementsQuery
  );

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
          Topics and recordings update from the CMS.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="glass rounded-2xl p-6">
          <h2 className="text-2xl font-semibold">Topics</h2>
          <ul className="mt-4 space-y-2 text-sm text-secondary">
            {topics.map((topic) => (
              <li key={topic} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>
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
                ) : null}
              </article>
            ))}
          </div>
        </div>
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
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
