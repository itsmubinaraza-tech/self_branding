import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-3">
        <p className="text-xs uppercase tracking-[0.3em] text-secondary">
          Contact
        </p>
        <h1 className="text-4xl font-semibold md:text-5xl">Get in touch</h1>
        <p className="max-w-2xl text-secondary">
          Use the form below and I will respond as soon as possible.
        </p>
      </section>
      <ContactForm />
    </div>
  );
}
