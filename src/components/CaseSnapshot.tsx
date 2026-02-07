import type { ExperienceCase } from "@/lib/types";

type CaseSnapshotProps = {
  item: ExperienceCase;
};

export default function CaseSnapshot({ item }: CaseSnapshotProps) {
  return (
    <article className="glass flex flex-col gap-4 rounded-2xl p-6">
      <div>
        <h3 className="text-2xl font-semibold text-primary">{item.title}</h3>
        {item.context ? (
          <p className="mt-2 text-sm text-secondary">{item.context}</p>
        ) : null}
      </div>
      {item.role ? (
        <div className="text-sm text-secondary">Role: {item.role}</div>
      ) : null}
      {item.collaboration ? (
        <div className="text-sm text-secondary">
          Collaboration: {item.collaboration}
        </div>
      ) : null}
      {item.outcomes?.length ? (
        <ul className="space-y-2 text-sm text-secondary">
          {item.outcomes.map((outcome) => (
            <li key={outcome} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
              <span>{outcome}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
