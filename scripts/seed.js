const { createClient } = require("@sanity/client");
const fs = require("fs");
const path = require("path");

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-01";
const token = process.env.SANITY_WRITE_TOKEN;

if (!projectId || !dataset || !token) {
  throw new Error("Missing Sanity configuration or SANITY_WRITE_TOKEN.");
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

function toEmbedUrl(url) {
  try {
    const parsed = new URL(url);
    if (parsed.hostname === "youtu.be") {
      const id = parsed.pathname.replace("/", "");
      return `https://www.youtube.com/embed/${id}`;
    }
    if (parsed.hostname.includes("youtube.com")) {
      const id = parsed.searchParams.get("v");
      if (id) {
        return `https://www.youtube.com/embed/${id}`;
      }
    }
  } catch (error) {
    return url;
  }
  return url;
}

async function uploadVideo() {
  const filePath =
    "D:\\camptasis\\IPMA 2025 mubina's engagement\\IPMA 2025 value delivery.autosave.mp4";
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const stream = fs.createReadStream(filePath);
  const filename = path.basename(filePath);
  const asset = await client.assets.upload("file", stream, { filename });
  return asset?._id ? { _type: "file", asset: { _type: "reference", _ref: asset._id } } : null;
}

async function run() {
  const homeDoc = {
    _id: "home",
    _type: "home",
    heroHeadline:
      "Co-creating scalable solutions from strategy through execution.",
    heroSubhead:
      "I am a technology and transformation leader who partners with stakeholders to design, build, and operationalize complex systems. My work sits at the intersection of strategy, execution, and collaboration—ensuring ideas are not only well-conceived, but implemented, adopted, and sustained.",
    ctaPrimaryLabel: "Explore My Work",
    ctaPrimaryUrl: "/portfolio",
    valuePillars: [
      {
        _type: "object",
        title: "Stakeholder Partnership & Co-Creation",
        body:
          "I center my work on value exchange. Every initiative is built through deep partnership with stakeholders, ensuring shared ownership, trust, and outcomes that endure beyond delivery.",
      },
      {
        _type: "object",
        title: "Strategy to Execution",
        body:
          "Strategy without execution is incomplete. I specialize in carrying initiatives from vision and planning through delivery, operationalization, and continuous improvement.",
      },
      {
        _type: "object",
        title: "AI & Emerging Technologies",
        body:
          "I focus on applied AI, machine learning, and emerging technologies—prioritizing practical value, responsible governance, and real-world constraints over experimentation without impact.",
      },
      {
        _type: "object",
        title: "Leadership & Capability Building",
        body:
          "I build teams and organizational capabilities that can independently execute, adapt, and scale. My leadership approach emphasizes accountability, clarity, and long-term growth.",
      },
    ],
    featuredWorkCopy:
      "A selection of platforms, applications, and initiatives that reflect my approach to building systems, teams, and value.",
    featuredWorkCtaLabel: "View Full Portfolio",
    speakingPreviewCopy:
      "I regularly speak on technology leadership, AI and machine learning, emerging technologies, and equity in the workplace—grounded in executional experience rather than theory alone.",
    speakingPreviewCtaLabel: "Watch Talks",
  };

  const experiencePageDoc = {
    _id: "experiencePage",
    _type: "experiencePage",
    overview:
      "I bring experience leading large-scale technology and transformation initiatives across complex, regulated, and high-stakes environments. My work spans enterprise architecture, data and AI enablement, infrastructure modernization, and organizational leadership, with a consistent emphasis on collaboration, execution, and measurable outcomes.",
  };

  const contactPageDoc = {
    _id: "contactPage",
    _type: "contactPage",
    body:
      "I welcome conversations around collaboration, advisory work, speaking engagements, and building meaningful, long-term solutions.",
    email: "contact@mubinaraza.com",
    linkedinUrl: "https://www.linkedin.com/in/mubinaraza",
  };

  const speakingPageDoc = {
    _id: "speakingPage",
    _type: "speakingPage",
    profile:
      "I speak on technology, leadership, and equity with a focus on applied insight. My perspective is shaped by hands-on experience leading complex initiatives and translating ideas into execution.",
    topics: [
      {
        _type: "object",
        title: "AI & Machine Learning",
        description:
          "Applied and responsible approaches to AI and machine learning, from strategic framing to production deployment.",
      },
      {
        _type: "object",
        title: "Emerging Technologies",
        description:
          "Evaluating and integrating emerging technologies in ways that create real organizational value.",
      },
      {
        _type: "object",
        title: "Leadership in Complex Systems",
        description:
          "Leading teams and initiatives in environments defined by scale, ambiguity, and change.",
      },
      {
        _type: "object",
        title: "Equity in the Workplace",
        description:
          "Building inclusive systems and cultures that support sustained performance and innovation.",
      },
    ],
    ctaLabel: "Book Me to Speak",
  };

  const experienceCases = [
    {
      _id: "experience-enterprise-architecture",
      _type: "experienceCase",
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
      order: 1,
    },
    {
      _id: "experience-ai-data-analytics",
      _type: "experienceCase",
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
      order: 2,
    },
    {
      _id: "experience-infrastructure-modernization",
      _type: "experienceCase",
      title: "Infrastructure Modernization & Resilience",
      context:
        "Mission-critical systems requiring high availability, security, and operational resilience.",
      role: "Led modernization and resilience efforts across infrastructure and core platforms.",
      collaboration:
        "Partnered with operations, security, and engineering teams to co-design architectures resilient to failure and scale.",
      outcomes: [
        "Guided implementation of modern infrastructure practices and operational standards.",
        "Reduced operational risk, improved system stability, and increased organizational confidence in core systems.",
      ],
      order: 3,
    },
    {
      _id: "experience-leadership-team-development",
      _type: "experienceCase",
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
      order: 4,
    },
  ];

  const speakingEngagements = [
    {
      _id: "speaking-2025-modernizing-services",
      _type: "speakingEngagement",
      title:
        "From Legacy to Modern: Case Studies in Cloud, Data, and Customer Experience Transformation",
      description:
        "Panelist, Modernizing Services – Case Studies in Innovation Panel, IT Industry Forum (2025). Audience: public sector leaders, students, and tech professionals.",
      youtubeUrl: toEmbedUrl("https://youtu.be/GviEFSSrxWs?si=YK32Pjq-UtPAioYk"),
      featured: false,
      order: 1,
    },
    {
      _id: "speaking-2024-ai-public-good",
      _type: "speakingEngagement",
      title:
        "Applying AI for Public Good: Biodiversity, Data Strategy, and Cloud Architecture in State Government",
      description:
        "Panelist, AI Summit – State and Local Government Panel, IT Industry Forum (2024). Audience: public sector leaders, students, and tech professionals.",
      youtubeUrl: toEmbedUrl("https://youtu.be/UqKxvk7e9Ww?si=KNhW8dU6g3LJPhuA"),
      featured: false,
      order: 2,
    },
    {
      _id: "speaking-2024-equity-impact",
      _type: "speakingEngagement",
      title:
        "Measuring Equity for Impact: Using Data, Determinants, and the Equity Hub to Drive Change",
      description:
        "Measuring Equity for Impact and Results, Office of Equity (2024). Audience: public sector leaders, students, and tech professionals.",
      youtubeUrl: toEmbedUrl("https://youtu.be/T8pXHOb8maM?si=gXY7VeVIa347ICeT"),
      featured: false,
      order: 3,
    },
  ];

  const videoFile = await uploadVideo();
  if (videoFile) {
    speakingEngagements.unshift({
      _id: "speaking-2025-ipma-value-delivery",
      _type: "speakingEngagement",
      title: "IPMA 2025 Value Delivery",
      description:
        "IPMA 2025 engagement session. Audience: public sector leaders, students, and tech professionals.",
      videoFile,
      featured: false,
      order: 0,
    });
  }

  const transactions = client.transaction();
  transactions.createOrReplace(homeDoc);
  transactions.createOrReplace(experiencePageDoc);
  transactions.createOrReplace(speakingPageDoc);
  transactions.createOrReplace(contactPageDoc);

  experienceCases.forEach((doc) => transactions.createOrReplace(doc));
  speakingEngagements.forEach((doc) => transactions.createOrReplace(doc));

  await transactions.commit();
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
