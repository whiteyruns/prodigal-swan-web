"use client";

import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mwvajvpg";

type Status = "idle" | "submitting" | "success" | "error";

export function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const json = await res.json().catch(() => null);
        const msg =
          json?.errors?.[0]?.message ?? "Submission failed. Try again?";
        setErrorMessage(msg);
        setStatus("error");
      }
    } catch {
      setErrorMessage("Network hiccup. Try again?");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-flame/30 bg-flame/[0.04] p-8">
        <div className="font-mono text-[11px] uppercase tracking-[0.32em] text-flame">
          // Got it
        </div>
        <p className="mt-3 font-serif text-2xl italic leading-snug text-bone">
          Thanks. We&rsquo;ll be in touch within 24 hours.
        </p>
      </div>
    );
  }

  const isSubmitting = status === "submitting";

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      {/* Formspree honeypot — bots fill this, get filtered server-side */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" />

      <Field label="Your name" name="name" required disabled={isSubmitting} />
      <Field
        label="Email"
        name="email"
        type="email"
        required
        disabled={isSubmitting}
      />
      <Field
        label="Tell us about your event"
        name="message"
        as="textarea"
        rows={5}
        required
        placeholder="Date, city, vibe, fire restrictions, anything weirder than the list…"
        disabled={isSubmitting}
      />

      {status === "error" && (
        <p className="border border-flame-hot/40 bg-flame-hot/[0.06] px-4 py-3 font-mono text-[11px] uppercase tracking-[0.24em] text-flame-hot">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="group inline-flex min-h-12 items-center gap-3.5 border border-flame bg-flame px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#1a0e04] transition-all hover:-translate-y-px hover:bg-[#ffa247] hover:shadow-[0_0_40px_rgba(232,145,58,.55),0_0_80px_rgba(255,106,31,.25),inset_0_0_12px_rgba(255,255,255,.18)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:bg-flame disabled:hover:shadow-none"
      >
        {isSubmitting ? "Sending…" : "Send inquiry"}
        {!isSubmitting && (
          <span
            aria-hidden
            className="font-display text-lg transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        )}
      </button>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  rows?: number;
  as?: "input" | "textarea";
};

function Field({
  label,
  name,
  type = "text",
  required,
  disabled,
  placeholder,
  rows,
  as = "input",
}: FieldProps) {
  const baseClass =
    "block w-full border border-hairline-2 bg-ink-2 px-4 py-3 text-base text-bone outline-none transition-colors placeholder:text-dust-2 focus:border-flame focus:bg-ink-3 disabled:opacity-60";

  return (
    <label className="block">
      <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.24em] text-dust">
        {label}
        {required && <span className="text-flame"> *</span>}
      </span>
      {as === "textarea" ? (
        <textarea
          name={name}
          required={required}
          disabled={disabled}
          placeholder={placeholder}
          rows={rows ?? 4}
          className={baseClass}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          disabled={disabled}
          placeholder={placeholder}
          className={baseClass}
        />
      )}
    </label>
  );
}
