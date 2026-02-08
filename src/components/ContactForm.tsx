"use client";

import { useState } from "react";
import type { FormEvent } from "react";

type FormState = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setMessage(null);

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data?.error ?? "Unable to send message.");
      }

      setState("success");
      setMessage("Message sent. Thank you.");
      event.currentTarget.reset();
    } catch (error) {
      setState("error");
      setMessage(
        error instanceof Error ? error.message : "Unable to send message."
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass flex w-full flex-col gap-5 rounded-2xl p-6"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm text-secondary">
          Name
          <input
            name="name"
            required
            className="rounded-lg border border-muted bg-transparent px-3 py-2 text-primary"
            autoComplete="name"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-secondary">
          Email
          <input
            name="email"
            type="email"
            required
            className="rounded-lg border border-muted bg-transparent px-3 py-2 text-primary"
            autoComplete="email"
          />
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm text-secondary">
        Subject
        <input
          name="subject"
          required
          className="rounded-lg border border-muted bg-transparent px-3 py-2 text-primary"
        />
      </label>
      <label className="flex flex-col gap-2 text-sm text-secondary">
        Message
        <textarea
          name="message"
          required
          rows={6}
          className="rounded-lg border border-muted bg-transparent px-3 py-2 text-primary"
        />
      </label>
      <label className="hidden">
        Company
        <input name="company" tabIndex={-1} autoComplete="off" />
      </label>
      <button
        type="submit"
        disabled={state === "sending"}
        className="inline-flex w-fit items-center justify-center rounded-full bg-accent px-6 py-2 text-sm font-semibold text-black transition hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-70"
      >
        {state === "sending" ? "Sending..." : "Send message"}
      </button>
      {message ? (
        <p
          aria-live="polite"
          className={`text-sm ${
            state === "success" ? "text-accent" : "text-secondary"
          }`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
