export default function ContactForm() {
  const linkedInUrl = "";

  return (
    <div className="glass flex w-full flex-col gap-5 rounded-2xl p-6">
      <p className="text-sm text-secondary">
        The contact form is handled directly through email to keep things
        simple and reliable.
      </p>
      <a
        href="mailto:contact@mubinaraza.com"
        className="inline-flex w-fit items-center justify-center rounded-full bg-accent px-6 py-2 text-sm font-semibold text-black transition hover:bg-accent-hover"
      >
        Email contact@mubinaraza.com
      </a>
      {linkedInUrl ? (
        <a
          href={linkedInUrl}
          className="text-sm text-secondary underline decoration-muted underline-offset-4 hover:text-accent"
        >
          LinkedIn
        </a>
      ) : null}
      <p className="text-xs text-secondary">
        Prefer a structured inquiry? Add a form provider later and we can wire it
        up without code changes elsewhere.
      </p>
    </div>
  );
}
