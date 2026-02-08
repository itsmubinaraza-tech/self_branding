import CaseSnapshot from "@/components/CaseSnapshot";
import { sanityClient } from "@/lib/sanity.client";
import { experienceCasesQuery } from "@/lib/sanity.queries";
import type { ExperienceCase } from "@/lib/types";

export const revalidate = 60;

export default async function ExperiencePage() {
  const cases = await sanityClient.fetch<ExperienceCase[]>(
    experienceCasesQuery
  );

  const fallbackCases: ExperienceCase[] = [
    {
      _id: "enterprise-architecture",
      title: "Enterprise Architecture & Transformation",
      context:
        "Highly distributed organizations with legacy systems, competing priorities, and evolving strategic goals.",
      role:
        "Provided enterprise architecture leadership, aligning business objectives with technology strategy and execution roadmaps.",
      collaboration:
        "Worked closely with executive leadership, product owners, delivery teams, and technical stakeholders to co-define architectural standards and investment priorities.",
      outcomes: [
        "Translated architectural vision into phased initiatives, guiding teams through implementation, adoption, and operational integration.",
        "Improved business-technology alignment, reduced systemic complexity, and established scalable architectural foundations.",
      ],
    },
    {
      _id: "ai-data-analytics",
      title: "AI, Data & Analytics Enablement",
      context:
        "Organizations seeking to leverage data and AI while navigating governance, ethics, and operational risk.",
      role:
        "Led data platform, analytics, and AI initiatives from conceptual framing through production deployment.",
      collaboration:
        "Collaborated with data scientists, engineers, product leaders, and business stakeholders to ensure solutions addressed real operational needs.",
      outcomes: [
        "Oversaw platform design, integration, and delivery with a focus on reliability, compliance, and usability.",
        "Accelerated insight generation, enabled data-informed decision-making, and laid the groundwork for responsible AI adoption.",
      ],
    },
    {
      _id: "infrastructure-modernization",
      title: "Infrastructure Modernization & Resilience",
      context:
        "Mission-critical systems requiring high availability, security, and operational resilience.",
      role:
        "Led modernization and resilience efforts across infrastructure and core platforms.",
      collaboration:
        "Partnered with operations, security, and engineering teams to co-design architectures resilient to failure and scale.",
      outcomes: [
        "Guided implementation of modern infrastructure practices and operational standards.",
        "Reduced operational risk, improved system stability, and increased organizational confidence in core systems.",
      ],
    },
    {
      _id: "leadership-team-development",
      title: "Leadership & Team Development",
      context:
        "Multidisciplinary teams operating in technically and organizationally complex environments.",
      role:
        "Built and led teams accountable for strategy, delivery, and sustained operations.",
      collaboration:
        "Cultivated cultures of trust, shared ownership, and continuous learning.",
      outcomes: [
        "Established clear accountability models, execution rhythms, and professional development pathways.",
        "Teams capable of delivering sustained value beyond individual initiatives.",
      ],
    },
  ];

  const items = cases.length ? cases : fallbackCases;

  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-3">
        <p className="text-xs uppercase tracking-[0.3em] text-secondary">
          Experience
        </p>
        <h1 className="text-4xl font-semibold md:text-5xl">
          Work without employer labels
        </h1>
        <p className="max-w-2xl text-secondary">
          I bring experience leading large-scale technology and transformation
          initiatives across complex, regulated, and high-stakes environments.
          My work spans enterprise architecture, data and AI enablement,
          infrastructure modernization, and organizational leadership, with a
          consistent emphasis on collaboration, execution, and measurable
          outcomes.
        </p>
      </section>
      <div className="grid gap-6 lg:grid-cols-2">
        {items.map((item) => (
          <CaseSnapshot key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}
