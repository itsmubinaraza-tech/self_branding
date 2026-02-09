import ContactForm from "@/components/ContactForm";
import { sanityClient } from "@/lib/sanity.client";
import { contactPageQuery } from "@/lib/sanity.queries";
import type { ContactPageData } from "@/lib/types";

export const revalidate = 60;

export default async function ContactPage() {
  const page = await sanityClient.fetch<ContactPageData | null>(
    contactPageQuery
  );

  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-3">
        <p className="text-xs uppercase tracking-[0.3em] text-secondary">
          Contact
        </p>
        <h1 className="text-4xl font-semibold md:text-5xl">Get in touch</h1>
        {page?.body ? (
          <p className="max-w-2xl text-secondary">{page.body}</p>
        ) : null}
      </section>
      <ContactForm email={page?.email} linkedinUrl={page?.linkedinUrl} />
    </div>
  );
}
